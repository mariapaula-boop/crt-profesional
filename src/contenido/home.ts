import { pagina, grupo, lista, texto, area, imagen, lineas } from "@/lib/cms/campos";
import { seo } from "./comun";

function vertical(etq: string, d: { nombre: string; desc: string; img: string; items: string }) {
  return grupo(etq, {
    nombre: texto("Nombre", d.nombre),
    desc: area("Descripción", d.desc),
    img: imagen("Foto", d.img),
    items: texto("Texto sobre la foto (ej. + 60 productos)", d.items),
  });
}

export const home = pagina("home", "Inicio", {
  descripcion: "Página principal de CRT Profesional. Los «Equipos destacados» y el blog muestran lo publicado; si no hay, las tarjetas de ejemplo de aquí.",
  url: "/",
}, {
  seo: seo({
    titulo: "CRT Profesional — Equipa tu cafetería, restaurante, panadería o heladería",
    descripcion: "Catálogo profesional para distribuidores y dueños de negocio. Cafeteras, batidoras, vitrinas, máquinas de helado, hornos. Cotiza por WhatsApp.",
  }),
  hero: grupo("Portada", {
    pill: texto("Pastilla superior", "Para distribuidores y dueños de negocio"),
    titulo: texto("Título · inicio", "Equipa tu negocio con"),
    resaltado1: texto("Título · primera parte en color", "fichas técnicas"),
    resaltado2: texto("Título · segunda parte en color", "asesoría real"),
    cierre: texto("Título · final", "y entrega nacional."),
    texto: area("Párrafo", "Catálogo profesional con marcas representadas (ITV, Bezzera, Fricon, Adler) más la línea propia CRT Pro. Cotiza por WhatsApp directo con un asesor que sí conoce el equipo."),
    botonWhatsapp: texto("Botón de WhatsApp", "Hablar con un asesor"),
    botonCatalogo: texto("Botón «explorar»", "Explorar catálogo"),
    datos: lista("Datos", { valor: texto("Dato"), texto: texto("Texto debajo") }, [
      { valor: "+200", texto: "Distribuidores activos" },
      { valor: "+500", texto: "Negocios equipados" },
      { valor: "36+", texto: "Años de experiencia" },
    ], { etiquetaItem: "dato", max: 4 }),
  }),
  verticales: grupo("Verticales", {
    etiqueta: texto("Texto pequeño", "Cuatro verticales"),
    titulo: texto("Título", "¿Por dónde quieres empezar?"),
    texto: area("Párrafo", "Cada vertical tiene su propio catálogo curado, fichas técnicas descargables y casos prácticos. Elige tu rubro y cotiza directo."),
    boton: texto("Enlace de cada tarjeta", "Ver catálogo"),
    restaurante: vertical("Restaurantes", { nombre: "Restaurantes", desc: "Hornos de convección, lavavajillas industriales, procesadores, empacadoras y refrigeración para tu cocina.", img: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80&auto=format&fit=crop", items: "+ 60 productos" }),
    cafeteria: vertical("Cafeterías", { nombre: "Cafeterías", desc: "Cafeteras industriales Bezzera, molinos, vitrinas mostrador, máquinas de hielo bajo barra, granita y frappé.", img: "https://images.unsplash.com/photo-1545418314-7ce0b9b53901?w=800&q=80&auto=format&fit=crop", items: "+ 45 productos" }),
    panaderia: vertical("Panadería", { nombre: "Panadería", desc: "Amasadoras, batidoras, hornos rotativos, vitrinas de exhibición y mesas de trabajo en acero inoxidable.", img: "https://images.unsplash.com/photo-1711672284661-bd70e38f31b2?w=800&q=80&auto=format&fit=crop", items: "+ 35 productos" }),
    heladeria: vertical("Helados", { nombre: "Helados", desc: "Máquinas de helado suave, vitrinas exhibidoras, refrigeradores de paleta y equipos para gelaterías.", img: "https://images.unsplash.com/photo-1560801619-01d71da0f70c?w=800&q=80&auto=format&fit=crop", items: "+ 25 productos" }),
  }),
  marcas: grupo("Marcas representadas", {
    etiqueta: texto("Texto pequeño", "Marcas representadas"),
    texto: texto("Frase", "Sólo equipos profesionales certificados. Sin “marcas blancas” sospechosas."),
    lista: lineas("Marcas", ["ITV", "Bezzera", "Fricon", "Adler", "LF", "CRT Pro"]),
  }),
  equipos: grupo("Equipos destacados", {
    etiqueta: texto("Texto pequeño", "Top del mes"),
    titulo: texto("Título", "Equipos destacados"),
    texto: area("Párrafo", "Los más cotizados por dueños de negocio en mayo 2026. Catálogo sin precios públicos — cotiza directo."),
    boton: texto("Botón «ver catálogo completo»", "Ver catálogo completo"),
    ejemplos: lista("Tarjetas de ejemplo (solo si no hay productos publicados)", {
      nombre: texto("Nombre"),
      tag: texto("Etiqueta"),
      img: imagen("Foto"),
    }, [
      { nombre: "Cafetera Bezzera espresso 2 grupos", tag: "Cafetería", img: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80&auto=format&fit=crop" },
      { nombre: "Batidora industrial Adler 60L", tag: "Panadería", img: "https://images.unsplash.com/photo-1739294525052-770fcecdd6b6?w=600&q=80&auto=format&fit=crop" },
      { nombre: "Vitrina mostrador para pasteles", tag: "Cafetería", img: "https://images.unsplash.com/photo-1604443402123-0bf4dd913f05?w=600&q=80&auto=format&fit=crop" },
      { nombre: "Horno rotativo para panadería", tag: "Panadería", img: "https://images.unsplash.com/photo-1682071308247-04c65c28bba5?w=600&q=80&auto=format&fit=crop" },
    ], { etiquetaItem: "tarjeta", max: 8 }),
  }, { ayuda: "En cuanto haya productos publicados, se muestran los primeros 4 en lugar de las tarjetas de ejemplo." }),
  distribuidores: grupo("Programa de distribuidores", {
    etiqueta: texto("Texto pequeño", "Programa de distribuidores"),
    titulo: texto("Título", "¿Vendes equipo profesional?"),
    resaltado: texto("Título · parte en color", "Sé parte de la red CRT."),
    texto: area("Párrafo", "Trabajamos con +200 distribuidores en todo el país. Sin portal ni claves complicadas — un asesor real te contesta por WhatsApp con precios escalonados, fichas y disponibilidad."),
    boton: texto("Botón de WhatsApp", "Pedir alta como distribuidor"),
    beneficios: lista("Beneficios", { titulo: texto("Título"), desc: area("Descripción") }, [
      { titulo: "Fichas técnicas completas", desc: "Manuales de operación, hojas de especificación y videos de instalación para cada equipo." },
      { titulo: "Atención personalizada", desc: "Un asesor dedicado por región. WhatsApp, llamada o visita a tu negocio." },
      { titulo: "Entrega nacional", desc: "Cobertura en toda la república. Logística directa desde almacén Monterrey o Querétaro." },
      { titulo: "Refacciones y servicio", desc: "Refacciones originales y técnicos certificados para mantenimiento preventivo." },
    ], { etiquetaItem: "beneficio", max: 8 }),
  }),
  blog: grupo("Blog", {
    etiqueta: texto("Texto pequeño", "Guías y recursos"),
    titulo: texto("Título", "Cómo equipar tu negocio"),
    texto: area("Párrafo", "Guías prácticas, comparativas de equipos y consejos para emprendedores que abren su primer negocio."),
    boton: texto("Botón", "Ver todas las guías"),
    ejemplos: lista("Tarjetas de ejemplo (solo si no hay artículos)", {
      categoria: texto("Categoría"),
      titulo: texto("Título"),
      fecha: texto("Fecha"),
      img: imagen("Foto"),
    }, [
      { categoria: "Cafetería", titulo: "Cómo equipar una cafetería desde cero: la lista completa", fecha: "May 2026", img: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80&auto=format&fit=crop" },
      { categoria: "Panadería", titulo: "Amasadora espiral vs planetaria: cuál conviene para tu producción", fecha: "Abril 2026", img: "https://images.unsplash.com/photo-1739294525052-770fcecdd6b6?w=800&q=80&auto=format&fit=crop" },
      { categoria: "Helados", titulo: "Máquina de helado suave: qué medir antes de comprar tu primer equipo", fecha: "Abril 2026", img: "https://images.unsplash.com/photo-1560801619-01d71da0f70c?w=800&q=80&auto=format&fit=crop" },
    ], { etiquetaItem: "tarjeta", max: 6 }),
  }, { ayuda: "En cuanto haya artículos publicados en Blog, se muestran los 3 más recientes." }),
  cta: grupo("Llamado final", {
    titulo: texto("Título", "¿Tu negocio necesita equipo profesional?"),
    texto: area("Texto", "Cuéntanos qué quieres equipar — un asesor te contesta por WhatsApp con propuesta, ficha técnica y disponibilidad. Sin formularios largos."),
    botonWhatsapp: texto("Botón de WhatsApp", "Cotizar por WhatsApp"),
    botonLlamar: texto("Botón de llamar", "Llamar a un asesor"),
  }),
  pie: grupo("Pie de página del inicio", {
    texto: area("Texto bajo el logo", "Catálogo profesional para distribuidores y dueños de negocio. Equipos para cafetería, restaurante, panadería y heladería."),
    whatsapp: texto("Línea de WhatsApp", "WhatsApp: +52 81 1234 5678", { ayuda: "⚠ Es un número de ejemplo: cámbialo por el real." }),
    correo: texto("Línea de correo", "profesional@crtglobal.com.mx"),
    direccion: texto("Línea de dirección", "Showroom flagship: Venustiano Carranza 650 Sur, Monterrey"),
    derechos: texto("Derechos", "© 2026 CRT Profesional · Grupo Criotec"),
  }),
});
