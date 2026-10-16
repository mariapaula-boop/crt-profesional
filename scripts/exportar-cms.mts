// Exporta lo que necesita el WordPress de CRT Profesional (plugin crt-cms):
//   esquema.json   → va dentro del plugin (wp-content/plugins/crt-cms/esquema.json)
//   contenido.json → contenido inicial de cada página (wp crt importar-contenido)
// Los productos se sembraron aparte desde CRT Online (Shopify), como borrador.
//
// Uso:  npx -y tsx scripts/exportar-cms.mts <carpeta-destino>
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { aJson, defectos } from "../src/lib/cms/campos";
import { paginas, producto } from "../src/contenido";

const destino = process.argv[2] ?? "cms-export";
mkdirSync(destino, { recursive: true });

const esquema = {
  sitio: "CRT Profesional",
  urlPublica: "https://crt-profesional.vercel.app",
  paginas: paginas.map((p) => ({ id: p.id, titulo: p.titulo, descripcion: p.descripcion, url: p.url, campos: aJson(p.campos) })),
  producto: { rutaPublica: producto.rutaPublica, campos: aJson(producto.campos), taxonomias: producto.taxonomias },
};
const contenido = Object.fromEntries(paginas.map((p) => [p.id, defectos(p.campos)]));

writeFileSync(join(destino, "esquema.json"), JSON.stringify(esquema, null, 1));
writeFileSync(join(destino, "contenido.json"), JSON.stringify(contenido, null, 1));
console.log(`Listo: ${esquema.paginas.length} páginas → ${destino}`);
