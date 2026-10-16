import { Fragment, type ReactNode } from "react";

/**
 * Texto del administrador con negritas: lo que va entre **dobles asteriscos** sale en
 * <strong>. Es lo único que se interpreta; nada de HTML llega a la página.
 * Con varias clases, la primera negrita usa la primera, la segunda la segunda, etc.
 */
export function conNegritas(texto: string, claseNegrita?: string | string[]): ReactNode {
  const partes = texto.split(/\*\*(.+?)\*\*/g);
  if (partes.length === 1) return texto;
  const clases = Array.isArray(claseNegrita) ? claseNegrita : claseNegrita ? [claseNegrita] : [];
  return partes.map((p, i) =>
    i % 2 === 1 ? (
      <strong key={i} className={clases.length ? clases[Math.min((i - 1) / 2, clases.length - 1)] : undefined}>{p}</strong>
    ) : (
      <Fragment key={i}>{p}</Fragment>
    ),
  );
}

export const AYUDA_NEGRITAS = "Para poner algo en negritas, enciérralo entre dobles asteriscos: **así**.";
