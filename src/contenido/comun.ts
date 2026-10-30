import { grupo, texto, area, imagen } from "@/lib/cms/campos";

/** Bloque "Google y redes sociales" que lleva cada página. */
export function seo(d: { titulo: string; descripcion: string; imagen?: string }) {
  return grupo("Google y redes sociales", {
    titulo: texto("Título en Google (pestaña del navegador)", d.titulo, { ayuda: "Idealmente menos de 65 caracteres." }),
    descripcion: area("Descripción en Google", d.descripcion, { ayuda: "Idealmente entre 120 y 160 caracteres.", filas: 3 }),
    imagen: imagen("Imagen al compartir (WhatsApp, Facebook…)", d.imagen ?? "", { ayuda: "1200 × 630 px." }),
  }, { ayuda: "Cómo aparece la página en Google y al compartir el enlace." });
}

type Seo = { titulo: string; descripcion: string; imagen: string };
type Meta = Record<string, unknown>;

/**
 * Mezcla el SEO editable con la metadata fija de la página (canonical, keywords,
 * robots, imagen por defecto…). Título y descripción siempre salen del administrador,
 * también al compartir; la imagen, si se cambia ahí.
 */
export function metadataCon(s: Seo, def: Seo, base: Meta = {}): Meta {
  const og = { ...((base.openGraph as Meta | undefined) ?? {}) };
  const tw = { ...((base.twitter as Meta | undefined) ?? {}) };
  // Al compartir sale lo mismo que en Google: un solo lugar para editarlo.
  og.title = s.titulo; tw.title = s.titulo;
  og.description = s.descripcion; tw.description = s.descripcion;
  if (Array.isArray(og.images)) og.images = (og.images as Meta[]).map((im) => ({ ...im, alt: s.titulo }));
  if (s.imagen && s.imagen !== def.imagen) {
    og.images = [{ url: s.imagen, width: 1200, height: 630, alt: s.titulo }];
    tw.images = [s.imagen];
  }
  return {
    ...base,
    title: s.titulo,
    description: s.descripcion,
    ...(base.openGraph || s.imagen ? { openGraph: og } : {}),
    ...(base.twitter ? { twitter: tw } : {}),
  };
}
