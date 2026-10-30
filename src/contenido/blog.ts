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
    titulo: texto("Título (antes de la parte en color)", "Blog y"),
    resaltado: texto("Parte del título en color", "recursos"),
    texto: area("Párrafo", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    botonLeer: texto("Enlace de cada tarjeta", "Leer"),
    migaInicio: texto("Ruta de navegación · primer paso", "Inicio", { ayuda: "La línea pequeña arriba del título. También se usa en cada artículo." }),
    migaBlog: texto("Ruta de navegación · Blog", "Blog"),
  }),
  articulo: grupo("Página de cada artículo", {
    autor: texto("Autor (bajo el título)", "Equipo editorial CRT Profesional"),
    lectura: texto("Tiempo de lectura (si el artículo no lo trae)", "Lectura ~5 min"),
    titulo: texto("Llamado final · título", "¿Te aplica este tema?"),
    texto: area("Llamado final · texto", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."),
    boton: texto("Llamado final · botón de WhatsApp", "Hablar con un asesor"),
  }),
  relacionados: grupo("Página de cada artículo · artículos relacionados", {
    etiqueta: texto("Texto pequeño", "Sigue leyendo"),
    titulo: texto("Título", "Artículos relacionados"),
    boton: texto("Enlace al blog", "Ver todo el blog"),
  }, { ayuda: "Se muestra al final de cada artículo, con otros artículos del blog." }),
});
