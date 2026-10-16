// Esquema del contenido editable desde el WordPress (administrador de contenido).
//
// Cada página declara aquí sus campos con el texto que el sitio muestra hoy como
// valor por defecto. De este mismo esquema salen:
//   1. los valores de respaldo: si el WordPress no responde, el sitio se ve igual;
//   2. el formulario del administrador (scripts/exportar-esquema.mjs → esquema.json).
// Para agregar un campo editable: se declara aquí, se usa en la página y se vuelve
// a exportar el esquema al plugin.

type Base = { etiqueta: string; ayuda?: string };

export type Campo<T> = Base & {
  tipo: string;
  defecto: T;
  campos?: Record<string, Campo<unknown>>;
  opciones?: string[];
  filas?: number;
  etiquetaItem?: string;
  max?: number;
  /** Si se deja vacío, queda vacío (no regresa al texto original). */
  opcional?: boolean;
};

export type Campos = Record<string, Campo<unknown>>;
export type Valor<C> = C extends Campo<infer T> ? T : never;
export type ValoresDe<C extends Campos> = { [K in keyof C]: Valor<C[K]> };

type Extra = { ayuda?: string; filas?: number; opcional?: boolean };

export const texto = (etiqueta: string, defecto = "", extra: Extra = {}): Campo<string> => ({ tipo: "texto", etiqueta, defecto, ...extra });
export const area = (etiqueta: string, defecto = "", extra: Extra = {}): Campo<string> => ({ tipo: "area", etiqueta, defecto, ...extra });
export const lineas = (etiqueta: string, defecto: string[] = [], extra: Extra = {}): Campo<string[]> => ({ tipo: "lineas", etiqueta, defecto, ...extra });
export const imagen = (etiqueta: string, defecto = "", extra: Extra = {}): Campo<string> => ({ tipo: "imagen", etiqueta, defecto, ...extra });
export const archivo = (etiqueta: string, defecto = "", extra: Extra = {}): Campo<string> => ({ tipo: "archivo", etiqueta, defecto, ...extra });
export const enlace = (etiqueta: string, defecto = "", extra: Extra = {}): Campo<string> => ({ tipo: "enlace", etiqueta, defecto, ...extra });
export const opciones = (etiqueta: string, lista: string[], defecto: string[] = [], extra: Extra = {}): Campo<string[]> => ({ tipo: "opciones", etiqueta, opciones: lista, defecto, ...extra });

export function grupo<C extends Campos>(etiqueta: string, campos: C, extra: Extra = {}): Campo<ValoresDe<C>> & { campos: C } {
  return { tipo: "grupo", etiqueta, campos, defecto: defectos(campos), ...extra };
}

export function lista<C extends Campos>(
  etiqueta: string,
  campos: C,
  defecto: ValoresDe<C>[],
  extra: Extra & { etiquetaItem?: string; max?: number } = {},
): Campo<ValoresDe<C>[]> & { campos: C } {
  return { tipo: "lista", etiqueta, campos, defecto, ...extra };
}

export type Pagina<C extends Campos = Campos> = {
  id: string;
  titulo: string;
  descripcion?: string;
  url?: string;
  campos: C;
};

export function pagina<C extends Campos>(id: string, titulo: string, meta: { descripcion?: string; url?: string }, campos: C): Pagina<C> {
  return { id, titulo, ...meta, campos };
}

export function defectos<C extends Campos>(campos: C): ValoresDe<C> {
  const out: Record<string, unknown> = {};
  for (const [k, c] of Object.entries(campos)) out[k] = c.defecto;
  return out as ValoresDe<C>;
}

// ---------------------------------------------------------------------------
// Mezcla de lo que llega del WordPress con los valores por defecto.
//   · Texto vacío o ausente  → el texto por defecto.
//   · Lista vacía o ausente  → la lista por defecto; si trae elementos, manda la del
//     WordPress (así se pueden quitar o reordenar), y a cada elemento le faltante
//     se le pone vacío para que la página no truene.
//   · Grupo                  → campo por campo.
// ---------------------------------------------------------------------------

function vacio(c: Campo<unknown>): unknown {
  if (c.tipo === "grupo" && c.campos) return Object.fromEntries(Object.entries(c.campos).map(([k, h]) => [k, vacio(h)]));
  if (c.tipo === "lista" || c.tipo === "lineas" || c.tipo === "opciones") return [];
  return "";
}

function mezclarItem(campos: Campos, item: unknown): Record<string, unknown> {
  const fuente = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
  const out: Record<string, unknown> = {};
  for (const [k, c] of Object.entries(campos)) {
    const v = fuente[k];
    if (c.tipo === "grupo" && c.campos) out[k] = mezclarItem(c.campos, v);
    else if (c.tipo === "lista" && c.campos) out[k] = Array.isArray(v) ? v.map((x) => mezclarItem(c.campos!, x)) : [];
    else if (c.tipo === "lineas" || c.tipo === "opciones") out[k] = Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
    else out[k] = typeof v === "string" ? v : vacio(c);
  }
  return out;
}

export function mezclar<C extends Campos>(campos: C, cms: unknown): ValoresDe<C> {
  const fuente = cms && typeof cms === "object" ? (cms as Record<string, unknown>) : {};
  const out: Record<string, unknown> = {};
  for (const [k, c] of Object.entries(campos)) {
    const v = fuente[k];
    if (c.tipo === "grupo" && c.campos) {
      out[k] = mezclar(c.campos, v);
    } else if (c.tipo === "lista" && c.campos) {
      const validos = Array.isArray(v) ? v.filter((x) => x && typeof x === "object" && !Array.isArray(x)) : [];
      out[k] = validos.length > 0 ? validos.map((x) => mezclarItem(c.campos!, x)) : c.defecto;
    } else if (c.tipo === "lineas" || c.tipo === "opciones") {
      const arr = Array.isArray(v) ? v.filter((x): x is string => typeof x === "string" && x.trim() !== "") : [];
      out[k] = arr.length > 0 ? arr : c.defecto;
    } else {
      out[k] = typeof v === "string" && (v.trim() !== "" || c.opcional) ? v : c.defecto;
    }
  }
  return out as ValoresDe<C>;
}

// Para exportar al plugin: objeto → arreglo ordenado con id.
type CampoJson = Record<string, unknown>;
export function aJson(campos: Campos): CampoJson[] {
  return Object.entries(campos).map(([id, c]) => {
    const { campos: hijos, ...resto } = c;
    const out: CampoJson = { id, ...resto };
    if (hijos) out.campos = aJson(hijos);
    if (c.tipo === "grupo") delete out.defecto;
    return out;
  });
}
