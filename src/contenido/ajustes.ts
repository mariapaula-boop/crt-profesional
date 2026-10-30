import { pagina, grupo, lista, texto, enlace } from "@/lib/cms/campos";
import { contenido } from "@/lib/cms";

export const ajustes = pagina("ajustes", "Ajustes generales", {
  descripcion: "Datos que se repiten en todo el sitio: WhatsApp, correo, teléfono, redes, menú y pie de página.",
  url: "/",
}, {
  contacto: grupo("Contacto", {
    whatsapp: texto("WhatsApp (solo números, con 52)", "528118231701", { ayuda: "⚠ Confirmar el número de CRT Profesional. Lo usan todos los botones de WhatsApp." }),
    correo: texto("Correo de contacto", "contacto@crtglobal.com.mx", { ayuda: "⚠ Confirmar el correo de CRT Profesional." }),
    telefono: texto("Teléfono (como se muestra)", "(81) 1823 1701", { ayuda: "⚠ Confirmar. Lo usan los botones de «Llamar»." }),
  }),
  redes: grupo("Redes sociales", {
    instagram: enlace("Instagram", ""),
    facebook: enlace("Facebook", ""),
    linkedin: enlace("LinkedIn", ""),
  }),
  menu: grupo("Menú superior", {
    marca1: texto("Logo · primera palabra", "CRT"),
    marca2: texto("Logo · segunda palabra", "Profesional"),
    boton: texto("Botón del menú", "Cotizar"),
    enlaces: lista("Enlaces del menú", {
      texto: texto("Texto"),
      enlace: enlace("A dónde lleva", "", { ayuda: "Ruta del sitio (ej. /blog) o dirección completa." }),
    }, [
      { texto: "Restaurantes", enlace: "/restaurante" },
      { texto: "Cafeterías", enlace: "/cafeteria" },
      { texto: "Panadería", enlace: "/panaderia" },
      { texto: "Helados", enlace: "/heladeria" },
      { texto: "Distribuidores", enlace: "/distribuidores" },
      { texto: "Blog", enlace: "/blog" },
    ], { etiquetaItem: "enlace", max: 8 }),
  }),
  pie: grupo("Pie de página", {
    derechos: texto("Línea de derechos", "© 2026 CRT Profesional · Parte del Grupo CRT"),
    enlaceGlobal: enlace("Enlace a CRT Global", "https://crtglobal.com.mx"),
    textoGlobal: texto("Texto del enlace a CRT Global", "crtglobal.com.mx →"),
  }),
});

export type Ajustes = Awaited<ReturnType<typeof getAjustes>>;

export async function getAjustes() {
  const a = await contenido(ajustes);
  const numero = a.contacto.whatsapp.replace(/\D/g, "") || "528118231701";
  const tel = a.contacto.telefono.replace(/\D/g, "");
  return {
    ...a,
    waLink: `https://wa.me/${numero}`,
    mailto: `mailto:${a.contacto.correo.trim()}`,
    telLink: tel ? `tel:+${tel.startsWith("52") ? tel : "52" + tel}` : "#",
  };
}
