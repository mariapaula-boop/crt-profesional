// JSON-LD dentro de <script>: JSON.stringify no escapa "<", así que un texto que venga
// del administrador con "</script>" podría cerrar la etiqueta. Se escapa < > & como \\u.
export function jsonLdSeguro(datos: unknown): string {
  return JSON.stringify(datos).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");
}

/** URL absoluta para Open Graph / JSON-LD: respeta las que ya son absolutas. */
export function urlAbsoluta(url: string, base = "https://crtpro.com.mx"): string | undefined {
  if (!url) return undefined;
  try {
    return new URL(url, base).toString();
  } catch {
    return undefined;
  }
}
