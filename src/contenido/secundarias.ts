import { pagina, grupo, lista, texto, area, imagen, lineas, enlace } from "@/lib/cms/campos";
import { seo } from "./comun";

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const LOREM_CORTO = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.";

export const distribuidores = pagina("distribuidores", "Distribuidores", {
  descripcion: "Programa de distribuidores: beneficios, pasos, requisitos y formulario.",
  url: "/distribuidores",
}, {
  seo: seo({
    titulo: "Sé distribuidor CRT Profesional",
    descripcion: "Si tu negocio vende equipo profesional para cafeterías, restaurantes, panaderías o heladerías — únete a la red de distribuidores CRT Profesional. Soporte técnico, fichas y material de venta.",
  }),
  hero: grupo("Encabezado", {
    pill: texto("Pastilla superior", "Sé distribuidor CRT Profesional"),
    titulo: texto("Título (antes del resaltado)", "Crece tu negocio con"),
    resaltado: texto("Parte del título en color", "respaldo CRT"),
    texto: area("Párrafo", LOREM),
    botonSolicitud: texto("Botón «solicitar info» (baja al formulario)", "Solicitar info"),
    botonWhatsapp: texto("Botón de WhatsApp", "Hablar por WhatsApp"),
  }),
  beneficios: grupo("Beneficios", {
    etiqueta: texto("Texto pequeño", "Qué obtienes"),
    titulo: texto("Título", "Beneficios de ser distribuidor."),
    texto: area("Párrafo", LOREM),
    items: lista("Beneficios", { titulo: texto("Título"), desc: area("Descripción") }, [
      { titulo: "Fichas técnicas", desc: LOREM_CORTO },
      { titulo: "Guías de instalación", desc: LOREM_CORTO },
      { titulo: "Material de venta", desc: LOREM_CORTO },
      { titulo: "Soporte directo", desc: LOREM_CORTO },
    ], { etiquetaItem: "beneficio", max: 8 }),
  }),
  proceso: grupo("Pasos", {
    etiqueta: texto("Texto pequeño", "Cómo se hace"),
    titulo: texto("Título", "Únete en tres pasos."),
    texto: area("Párrafo", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
    pasos: lista("Pasos", { titulo: texto("Título"), desc: area("Descripción") }, [
      { titulo: "Llena el formulario", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor." },
      { titulo: "Te contactamos", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor." },
      { titulo: "Empiezas a operar", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor." },
    ], { etiquetaItem: "paso", max: 3 }),
  }),
  requisitos: grupo("Requisitos y formulario", {
    etiqueta: texto("Texto pequeño", "Quién aplica"),
    titulo: texto("Título", "¿Tu negocio puede ser distribuidor?"),
    texto: area("Párrafo", LOREM),
    lista: lineas("Requisitos", ["Lorem ipsum dolor sit amet consectetur", "Lorem ipsum dolor sit amet adipiscing", "Lorem ipsum dolor sit amet incididunt", "Lorem ipsum dolor sit amet veniam"]),
    dudasTitulo: texto("Recuadro de dudas · título", "¿Tienes dudas?"),
    dudasTexto: texto("Recuadro de dudas · texto", "Hablemos antes de aplicar"),
    formEtiqueta: texto("Formulario · texto pequeño", "Solicitud"),
    formTitulo: texto("Formulario · título", "Sé distribuidor"),
    formBoton: texto("Formulario · botón", "Enviar solicitud"),
    formNota: texto("Formulario · nota", "Lorem ipsum dolor sit amet, consectetur adipiscing."),
  }),
});

export const contacto = pagina("contacto", "Contacto", {
  descripcion: "Canales de contacto, datos del showroom y formulario. WhatsApp, correo y teléfono salen de Ajustes generales.",
  url: "/contacto",
}, {
  seo: seo({
    titulo: "Contacto · CRT Profesional",
    descripcion: "Habla con un asesor CRT Profesional. WhatsApp, formulario y showroom Monterrey. Atendemos cafeterías, restaurantes, panaderías y heladerías independientes.",
  }),
  hero: grupo("Encabezado", {
    pill: texto("Pastilla superior", "Estamos para ayudarte"),
    titulo: texto("Título (antes del resaltado)", "Hablemos de tu"),
    resaltado: texto("Parte del título en color", "proyecto"),
    texto: area("Párrafo", LOREM),
  }),
  canales: grupo("Canales", {
    whatsappTitulo: texto("WhatsApp · título", "WhatsApp"),
    whatsappTexto: texto("WhatsApp · texto", "Lorem ipsum dolor sit amet consectetur."),
    whatsappBoton: texto("WhatsApp · enlace", "Abrir chat"),
    correoTitulo: texto("Correo · título", "Email"),
    correoTexto: texto("Correo · texto", "Lorem ipsum dolor sit amet consectetur."),
    correoBoton: texto("Correo · enlace", "Lorem ipsum"),
    telefonoTitulo: texto("Teléfono · título", "Teléfono"),
    telefonoTexto: texto("Teléfono · texto", "Lorem ipsum dolor sit amet consectetur."),
    telefonoBoton: texto("Teléfono · enlace", "Lorem ipsum"),
    distTitulo: texto("Distribuidores · título", "Distribuidores"),
    distTexto: texto("Distribuidores · texto", "Acceso a fichas extendidas, manuales y guías técnicas."),
    distBoton: texto("Distribuidores · enlace", "Registrarme"),
  }),
  info: grupo("Showroom y datos", {
    etiqueta: texto("Texto pequeño", "Pasamos a verte"),
    titulo: texto("Título", "Showroom Monterrey."),
    texto: area("Párrafo", LOREM),
    direccion: texto("Dirección", "Monterrey, Nuevo León"),
    telefono: texto("Teléfono", "Lorem ipsum"),
    correo: texto("Email", "Lorem ipsum"),
    redesTitulo: texto("Título de redes", "Síguenos"),
  }),
  formulario: grupo("Formulario", {
    etiqueta: texto("Texto pequeño", "Formulario"),
    titulo: texto("Título", "Mándanos un mensaje"),
    boton: texto("Botón", "Enviar mensaje"),
    nota: texto("Nota", "Lorem ipsum dolor sit amet, consectetur adipiscing."),
  }),
});

export const visitanos = pagina("visitanos", "Visítanos (showroom)", {
  descripcion: "Página del showroom. ⚠ Falta confirmar con CRT si CRT Profesional sí menciona el showroom (en Global no).",
  url: "/visitanos",
}, {
  seo: seo({
    titulo: "Visítanos · Showroom Monterrey · CRT Profesional",
    descripcion: "Ven a probar antes de comprar. Showroom CRT Profesional en Monterrey, Nuevo León. Cafeteras Bezzera, máquinas de hielo, vitrinas y más en operación.",
  }),
  hero: grupo("Encabezado", {
    pill: texto("Pastilla superior", "Showroom Monterrey"),
    titulo: texto("Título (antes del resaltado)", "Ven a probar"),
    resaltado: texto("Parte del título en color", "antes de comprar"),
    texto: area("Párrafo", LOREM),
    botonAgendar: texto("Botón «agendar» (abre WhatsApp)", "Agendar visita"),
    botonMapa: texto("Botón «ver en mapa»", "Ver en mapa"),
    direccion: texto("Dirección", "Monterrey, Nuevo León"),
    horario: texto("Horario", "Lorem ipsum dolor"),
    telefono: texto("Teléfono", "Lorem ipsum"),
    imagen: imagen("Foto del showroom", "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=900&q=85&auto=format&fit=crop"),
    fotoEtiqueta: texto("Recuadro sobre la foto · texto pequeño", "Visítanos"),
    fotoTitulo: texto("Recuadro sobre la foto · título", "Showroom CRT Pro"),
    fotoCiudad: texto("Recuadro sobre la foto · ciudad", "Monterrey, Nuevo León"),
  }),
  equipos: grupo("Qué encuentras", {
    etiqueta: texto("Texto pequeño", "Qué encuentras"),
    titulo: texto("Título", "Equipos en operación, listos para probar."),
    texto: area("Párrafo", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."),
    lista: lineas("Lista", ["Lorem ipsum dolor sit amet consectetur", "Lorem ipsum dolor sit amet adipiscing elit", "Lorem ipsum dolor sit amet sed do eiusmod", "Lorem ipsum dolor sit amet ut labore", "Lorem ipsum dolor sit amet veniam"]),
    formEtiqueta: texto("Agenda · texto pequeño", "Agenda tu visita"),
    formTitulo: texto("Agenda · título", "Te esperamos"),
    formBoton: texto("Agenda · botón", "Agendar visita"),
  }),
  mapa: grupo("Mapa", {
    etiqueta: texto("Texto pequeño", "Cómo llegar"),
    titulo: texto("Título", "Te esperamos en Monterrey."),
    texto: area("Párrafo", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."),
    aviso: area("Aviso sobre el mapa", "Dirección y mapa pendiente — confirmaremos cuando esté lista la dirección exacta del showroom."),
    enlace: enlace("Enlace de Google Maps (opcional)"),
    textoFinal: area("Texto final", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."),
    boton: texto("Botón de WhatsApp", "Confirmar por WhatsApp"),
  }),
});
