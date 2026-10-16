// Blog de CRT Profesional: los artículos se escriben en el administrador (Blog).
// Respaldo: si el WordPress no tiene artículos, se usan los borradores de src/lib/posts.ts.
import { wp } from "@/lib/cms";
import { sanitizar, textoPlano, decodificar } from "@/lib/cms/html";
import { posts as postsRespaldo, type Post } from "@/lib/posts";

export type PostBlog = Post & {
  /** Contenido del artículo (HTML del editor de WordPress, ya limpio). */
  html?: string;
  fechaIso?: string;
  img?: string;
  color?: string;
};

type WpPost = Record<string, unknown>;

const SIN_CATEGORIA = ["uncategorized", "sin categoría", "sin categoria"];
const COLORES: Record<string, string> = {};

const obj = (v: unknown): Record<string, unknown> => (v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, unknown>) : {});
const rendered = (v: unknown) => obj(v).rendered;

function fechaLarga(isoGmt: string): string {
  try {
    const d = new Date(isoGmt);
    if (Number.isNaN(d.getTime())) return "";
    return new Intl.DateTimeFormat("es-MX", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Monterrey" }).format(d);
  } catch {
    return "";
  }
}

function desdeWp(p: WpPost): PostBlog | null {
  try {
    const slug = typeof p.slug === "string" ? p.slug : "";
    if (!slug) return null;
    const html = sanitizar(rendered(p.content));
    const palabras = textoPlano(html).split(" ").filter(Boolean).length;
    const embebido = obj(p._embedded);
    const terminos = (Array.isArray(embebido["wp:term"]) ? embebido["wp:term"] : [])
      .flat()
      .map(obj)
      .filter((t) => t.taxonomy === "category" && typeof t.name === "string" && !SIN_CATEGORIA.includes(t.name.toLowerCase()));
    const categoria = decodificar(terminos[0]?.name) || "Blog";
    const medios = Array.isArray(embebido["wp:featuredmedia"]) ? embebido["wp:featuredmedia"] : [];
    const img = obj(medios[0]).source_url;
    // date_gmt viene sin zona: se marca como UTC para no desplazar el día.
    const gmt = typeof p.date_gmt === "string" ? `${p.date_gmt}Z` : typeof p.date === "string" ? p.date : "";
    const titulo = textoPlano(rendered(p.title));
    if (!titulo) return null;
    return {
      slug,
      categoria,
      titulo,
      resumen: textoPlano(rendered(p.excerpt)).replace(/\s*\[…\]$/, "…"),
      fecha: gmt ? fechaLarga(gmt) : "",
      fechaIso: gmt,
      lectura: `${Math.max(1, Math.round(palabras / 200))} min de lectura`,
      img: typeof img === "string" && /^https?:\/\//.test(img) ? img : "",
      color: COLORES[categoria] ?? "#1E4D80",
      html,
    };
  } catch {
    return null;
  }
}

/**
 * Artículos del administrador, todas las páginas (de 100 en 100).
 * null = el WordPress no respondió; [] = respondió pero no hay artículos.
 */
export async function getPostsCms(): Promise<PostBlog[] | null> {
  const lista: PostBlog[] = [];
  for (let pagina = 1; pagina <= 10; pagina++) {
    const r = await wp<WpPost[]>(`/wp/v2/posts?per_page=100&page=${pagina}&_embed=wp:featuredmedia,wp:term`);
    if (!Array.isArray(r)) return pagina === 1 ? null : lista;
    lista.push(...r.map(obj).map(desdeWp).filter((p): p is PostBlog => p !== null));
    if (r.length < 100) break;
  }
  return lista;
}

/** Para listados: los del administrador o, si no hay, los borradores. */
export async function getPostsBlog(): Promise<PostBlog[]> {
  const cms = await getPostsCms();
  return cms && cms.length > 0 ? cms : postsRespaldo;
}

/**
 * Para la página de un artículo. Si el WordPress no responde se lanza un error en vez
 * de un 404: así Next conserva la versión que ya tenía en caché.
 */
export async function getPostsParaArticulo(): Promise<PostBlog[]> {
  const cms = await getPostsCms();
  if (cms === null) {
    // En el build no hay versión anterior que conservar: se usa el respaldo.
    if (process.env.NEXT_PHASE === "phase-production-build") return postsRespaldo;
    throw new Error("El administrador de contenido no respondió");
  }
  return cms.length > 0 ? cms : postsRespaldo;
}

export function relacionados(lista: PostBlog[], p: PostBlog, limit = 3): PostBlog[] {
  const misma = lista.filter((q) => q.slug !== p.slug && q.categoria === p.categoria);
  const otras = lista.filter((q) => q.slug !== p.slug && q.categoria !== p.categoria);
  return [...misma, ...otras].slice(0, limit);
}
