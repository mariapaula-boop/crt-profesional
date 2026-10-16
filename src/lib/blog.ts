// Blog de CRT Profesional: los artículos se escriben en el administrador (Blog).
// Respaldo: si no hay artículos o el WordPress no responde, los de src/lib/posts.ts.
import { wp } from "@/lib/cms";
import { posts as postsRespaldo, type Post } from "@/lib/posts";

export type PostBlog = Post & {
  /** Contenido del artículo (HTML del editor de WordPress, ya limpio). */
  html?: string;
  fechaIso?: string;
  img?: string;
  color?: string;
};

type WpTermino = { taxonomy?: string; name?: string };
type WpPost = {
  slug?: string;
  date?: string;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  content?: { rendered?: string };
  _embedded?: { "wp:featuredmedia"?: { source_url?: string }[]; "wp:term"?: WpTermino[][] };
};

const SIN_CATEGORIA = ["uncategorized", "sin categoría", "sin categoria"];
const COLORES: Record<string, string> = {};

const ENTIDADES: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", hellip: "…", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", ldquo: "“", rdquo: "”" };

export function decodificar(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, n) => ENTIDADES[n.toLowerCase()] ?? m);
}

function textoPlano(html: string): string {
  return decodificar(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

/** Quita lo que no debe llegar a la página: scripts, estilos, eventos y enlaces javascript:. */
export function limpiarHtml(html: string): string {
  return html
    // Videos de YouTube/Vimeo sí se quedan; cualquier otro iframe se quita.
    .replace(/<iframe\b[^>]*>[\s\S]*?<\/iframe>/gi, (m) => (/src=["']https:\/\/(www\.)?(youtube\.com|youtube-nocookie\.com|player\.vimeo\.com)\//i.test(m) ? m : ""))
    .replace(/<(script|style|object|embed|form)\b[\s\S]*?<\/\1>/gi, "")
    .replace(/<(script|style|object|embed|link|meta)\b[^>]*\/?>/gi, "")
    .replace(/\s+on[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/(href|src)\s*=\s*(["'])\s*javascript:[^"']*\2/gi, '$1="#"');
}

function fechaLarga(iso: string): string {
  try {
    return new Intl.DateTimeFormat("es-MX", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Monterrey" }).format(new Date(iso));
  } catch {
    return "";
  }
}

function desdeWp(p: WpPost): PostBlog | null {
  if (!p || typeof p !== "object" || !p.slug) return null;
  const html = limpiarHtml(p.content?.rendered ?? "");
  const palabras = textoPlano(html).split(" ").filter(Boolean).length;
  const terminos = (p._embedded?.["wp:term"] ?? []).flat().filter((t) => t?.taxonomy === "category" && t.name && !SIN_CATEGORIA.includes(t.name.toLowerCase()));
  const categoria = decodificar(terminos[0]?.name ?? "Blog");
  const resumen = textoPlano(p.excerpt?.rendered ?? "").replace(/\s*\[…\]$|\s*\[&hellip;\]$/, "…");
  return {
    slug: p.slug,
    categoria,
    titulo: textoPlano(p.title?.rendered ?? ""),
    resumen,
    fecha: p.date ? fechaLarga(p.date) : "",
    fechaIso: p.date,
    lectura: `${Math.max(1, Math.round(palabras / 200))} min de lectura`,
    img: p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "",
    color: COLORES[categoria] ?? "#1E4D80",
    html,
  };
}

/** Solo los artículos publicados en el administrador (vacío si no hay o si no responde). */
export async function getPostsCms(): Promise<PostBlog[]> {
  const r = await wp<WpPost[]>("/wp/v2/posts?per_page=100&_embed=wp:featuredmedia,wp:term");
  return Array.isArray(r) ? r.map(desdeWp).filter((p): p is PostBlog => p !== null) : [];
}

export async function getPostsBlog(): Promise<PostBlog[]> {
  const lista = await getPostsCms();
  return lista.length > 0 ? lista : postsRespaldo;
}

export function relacionados(lista: PostBlog[], p: PostBlog, limit = 3): PostBlog[] {
  const misma = lista.filter((q) => q.slug !== p.slug && q.categoria === p.categoria);
  const otras = lista.filter((q) => q.slug !== p.slug && q.categoria !== p.categoria);
  return [...misma, ...otras].slice(0, limit);
}
