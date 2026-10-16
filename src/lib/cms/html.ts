// HTML que llega del administrador (artículos del blog): se limpia con una lista blanca
// de etiquetas, atributos y protocolos antes de pintarlo. Nada de scripts, eventos,
// estilos, javascript: (aunque venga codificado) ni iframes que no sean YouTube/Vimeo.
import sanitizeHtml from "sanitize-html";

const OPCIONES: sanitizeHtml.IOptions = {
  allowedTags: [...sanitizeHtml.defaults.allowedTags, "img", "iframe"],
  allowedAttributes: {
    a: ["href", "title", "target", "rel"],
    img: ["src", "alt", "title", "width", "height", "loading"],
    iframe: ["src", "title", "allow", "allowfullscreen", "width", "height"],
    td: ["colspan", "rowspan"],
    th: ["colspan", "rowspan", "scope"],
    "*": ["class", "id"],
  },
  allowedSchemes: ["http", "https", "mailto", "tel"],
  allowedSchemesByTag: { img: ["http", "https"], iframe: ["https"] },
  allowProtocolRelative: false,
  allowedIframeHostnames: ["www.youtube.com", "youtube.com", "www.youtube-nocookie.com", "player.vimeo.com"],
  allowIframeRelativeUrls: false,
  transformTags: {
    a: (tagName, attribs) => ({
      tagName,
      attribs: attribs.target === "_blank" ? { ...attribs, rel: "noopener noreferrer" } : attribs,
    }),
  },
};

export function sanitizar(html: unknown): string {
  if (typeof html !== "string" || !html) return "";
  try {
    return sanitizeHtml(html, OPCIONES);
  } catch {
    return "";
  }
}

const ENTIDADES: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", hellip: "…", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", ldquo: "“", rdquo: "”" };

function puntoDeCodigo(n: number): string {
  return Number.isInteger(n) && n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : "";
}

export function decodificar(s: unknown): string {
  if (typeof s !== "string") return "";
  return s
    .replace(/&#(\d+);/g, (_, n) => puntoDeCodigo(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => puntoDeCodigo(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, n) => ENTIDADES[n.toLowerCase()] ?? m);
}

/** Texto sin etiquetas (para títulos, resúmenes y conteo de palabras). */
export function textoPlano(html: unknown): string {
  if (typeof html !== "string") return "";
  return decodificar(sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} })).replace(/\s+/g, " ").trim();
}
