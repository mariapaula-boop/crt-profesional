import { pagina, grupo, texto, area } from "@/lib/cms/campos";
import { seo } from "./comun";

export const blog = pagina("blog", "Blog", {
  descripcion: "Textos de la página del blog. Los artículos se escriben en el menú «Blog».",
  url: "/blog",
}, {
  seo: seo({
    titulo: "Blog y tips para tu negocio · CRT Profesional",
    descripcion: "Tips, guías y noticias para dueños de cafeterías, restaurantes, panaderías y heladerías. Equipa mejor, opera mejor, vende mejor.",
  }),
  hero: grupo("Encabezado", {
    pill: texto("Pastilla superior", "Tips para tu negocio"),
    texto: area("Párrafo", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
  }),
  articulo: grupo("Página de cada artículo · llamado final", {
    titulo: texto("Título", "¿Te aplica este tema?"),
    texto: area("Texto", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."),
    boton: texto("Botón de WhatsApp", "Hablar con un asesor"),
  }),
});
