// Productos de CRT Profesional: se administran en el WordPress (Productos) y aquí se leen.
// Solo salen los PUBLICADOS; mientras no haya ninguno, las páginas muestran sus
// tarjetas de ejemplo como hasta ahora.
import { productosCms } from "@/lib/cms";

export type ProductoPro = {
  slug: string;
  nombre: string;
  categoria: string;
  marca: string;
  giros: string[];
  resumen: string;
  img: string;
  etiqueta: string;
  precio: string;
  tienda: string;
  ficha: string;
  color: string;
};

type Cms = { slug?: unknown; nombre?: unknown; categoria?: unknown; marca?: unknown; giros?: unknown; datos?: Record<string, unknown> };
const str = (v: unknown) => (typeof v === "string" ? v : "");
const arr = (v: unknown) => (Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : []);

export async function getProductos(): Promise<ProductoPro[]> {
  const r = await productosCms<Cms>();
  return (r ?? [])
    .filter((c): c is Cms => !!c && typeof c === "object" && !Array.isArray(c))
    .map((c) => {
      const d = c.datos && typeof c.datos === "object" ? c.datos : {};
      const color = str(d.color).trim();
      return {
        slug: str(c.slug),
        nombre: str(c.nombre),
        categoria: str(c.categoria),
        marca: str(c.marca),
        giros: arr(c.giros),
        resumen: str(d.resumen),
        img: str(d.imagen),
        etiqueta: str(d.etiqueta) || str(c.categoria),
        precio: str(d.precio),
        tienda: str(d.tienda),
        ficha: str(d.ficha),
        color: /^#[0-9a-f]{3,8}$/i.test(color) ? color : "",
      };
    })
    .filter((p) => p.slug && p.nombre);
}

export async function productosDelGiro(giro: string, max = 4): Promise<ProductoPro[]> {
  return (await getProductos()).filter((p) => p.giros.includes(giro)).slice(0, max);
}
