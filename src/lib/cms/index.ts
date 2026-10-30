// Lectura del administrador de contenido (WordPress "headless").
//
// Todo pasa por aquí y siempre con respaldo: si el WordPress no responde o trae
// datos raros, la página usa el contenido por defecto del código y se ve igual que
// antes. Next guarda la respuesta y la vuelve a pedir cada minuto; además el
// WordPress avisa al guardar (src/app/api/revalidar) para que el cambio salga ya.

import { mezclar, type Campos, type Pagina, type ValoresDe } from "./campos";

// Dominio temporal en Hostinger de Mercanaut. Al migrar al servidor de CRT basta con
// definir CMS_URL en Vercel.
export const CMS_URL = (process.env.CMS_URL || "https://cms.crtpro.com.mx").replace(/\/$/, "");
export const CMS_TAG = "cms";
// El WordPress avisa al guardar (/api/revalidar), así que los cambios salen al momento;
// esto es solo la red de seguridad. 5 minutos para no cargar el hosting compartido.
const REVALIDAR_CADA = 300; // segundos

const ESPERA_MAX = 6000; // ms

async function pedir<T>(ruta: string): Promise<T | null> {
  // Un reintento: el hosting compartido a veces responde 504 en picos de carga.
  const r = await pedirUnaVez<T>(ruta);
  if (r !== null) return r;
  await new Promise((res) => setTimeout(res, 800));
  return pedirUnaVez<T>(ruta);
}

async function pedirUnaVez<T>(ruta: string): Promise<T | null> {
  let reloj: ReturnType<typeof setTimeout> | undefined;
  try {
    const peticion = (async () => {
      const r = await fetch(`${CMS_URL}/wp-json${ruta}`, {
        next: { revalidate: REVALIDAR_CADA, tags: [CMS_TAG] },
        signal: AbortSignal.timeout(ESPERA_MAX),
        headers: { Accept: "application/json" },
      });
      if (!r.ok) return null;
      return (await r.json()) as T;
    })();
    // Al revalidar en segundo plano Next quita el signal; este límite aplica siempre.
    const limite = new Promise<null>((res) => { reloj = setTimeout(() => res(null), ESPERA_MAX + 500); });
    return await Promise.race([peticion, limite]);
  } catch {
    return null;
  } finally {
    if (reloj) clearTimeout(reloj);
  }
}

type RespuestaContenido = { paginas?: Record<string, unknown> };

/** Valores de una página: lo del WordPress mezclado con los valores por defecto. */
export async function contenido<C extends Campos>(p: Pagina<C>): Promise<ValoresDe<C>> {
  const r = await pedir<RespuestaContenido>("/crt/v1/contenido");
  return mezclar(p.campos, r?.paginas?.[p.id]);
}

/** Productos publicados tal como los entrega el plugin (sin mezclar). */
export async function productosCms<T = unknown>(): Promise<T[] | null> {
  const r = await pedir<unknown>("/crt/v1/productos");
  return Array.isArray(r) ? (r as T[]) : null;
}

/** Peticiones a la API estándar de WordPress (p. ej. /wp/v2/posts). */
export async function wp<T = unknown>(ruta: string): Promise<T | null> {
  return pedir<T>(ruta);
}
