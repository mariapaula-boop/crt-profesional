import { pagina, grupo, lista, texto, area, imagen, lineas, enlace } from "@/lib/cms/campos";
import { seo } from "./comun";

// Las 4 páginas de giro (cafetería, restaurante, panadería, heladería) comparten diseño
// (src/app/_components/VerticalLayout.tsx) y este esquema. El texto de relleno ("Lorem
// ipsum") es el que dejó el diseño: lo cambia el equipo de CRT desde el administrador.

const LOREM_LARGO = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

type Datos = {
  seo: { titulo: string; descripcion: string };
  giro: string;
  pill: string;
  palabra: string;
  imagen: string;
  imagenAlt: string;
  categorias: { nombre: string; img: string }[];
  otrasMarcas: string[];
  marcaImg: string;
  marcaImgAlt: string;
  showroomImg: string;
  botonCta: string;
};

export function giroPagina(id: string, titulo: string, url: string, d: Datos) {
  return pagina(id, titulo, { descripcion: `Página del giro ${d.giro}. Los «Equipos destacados» son los productos publicados con el giro ${d.giro}.`, url }, {
    seo: seo(d.seo),
    hero: grupo("Encabezado", {
      pill: texto("Pastilla superior", d.pill),
      titulo: texto("Título (antes de la palabra en color)", "Equipa tu"),
      palabra: texto("Palabra en color (se repite en los títulos de la página)", d.palabra),
      texto: area("Párrafo", LOREM_LARGO),
      botonWhatsapp: texto("Botón de WhatsApp", "Hablar con un asesor"),
      botonEquipos: texto("Botón «ver equipos»", "Ver equipos"),
      datos: lista("Datos", { valor: texto("Dato"), texto: texto("Texto debajo") }, [
        { valor: "Lorem", texto: "ipsum dolor sit" },
        { valor: "Lorem", texto: "ipsum dolor sit" },
        { valor: "Showroom", texto: "Monterrey, NL" },
      ], { etiquetaItem: "dato", max: 4 }),
      imagen: imagen("Foto", d.imagen),
      imagenAlt: texto("Descripción de la foto", d.imagenAlt),
      tarjetaEtiqueta: texto("Tarjeta sobre la foto · texto pequeño", "Lorem ipsum"),
      tarjetaTitulo: texto("Tarjeta sobre la foto · título", "Lorem"),
      tarjetaTexto: texto("Tarjeta sobre la foto · texto", "Lorem ipsum dolor sit amet"),
      insignia: texto("Insignia con estrella", "Lorem"),
    }),
    categorias: grupo("Categorías de equipo", {
      etiqueta: texto("Texto pequeño", "Categorías de equipo"),
      titulo: texto("Título (antes de la palabra en color)", "Lo que necesitas para tu"),
      texto: area("Párrafo", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."),
      boton: texto("Enlace de cada tarjeta", "Ver línea"),
      items: lista("Categorías", {
        nombre: texto("Nombre"),
        desc: area("Descripción"),
        detalle: texto("Detalle (ej. marcas · modelos)"),
        img: imagen("Foto"),
        enlace: enlace("A dónde lleva (opcional)"),
      }, d.categorias.map((c) => ({ ...c, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", detalle: "Lorem ipsum · dolor sit · amet · consectetur", enlace: "" })), { etiquetaItem: "categoría", max: 12 }),
    }),
    marca: grupo("Marca destacada", {
      etiqueta: texto("Texto pequeño", "Marca destacada"),
      titulo: texto("Título", "Lorem."),
      texto: area("Párrafo", LOREM_LARGO),
      puntos: lineas("Puntos", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt", "Lorem ipsum dolor sit amet, ut labore et dolore magna", "Showroom en Monterrey para probar antes de comprar"]),
      boton: texto("Botón", "Ver línea completa"),
      enlace: enlace("A dónde lleva el botón (opcional)"),
      imagen: imagen("Foto", d.marcaImg),
      imagenAlt: texto("Descripción de la foto", d.marcaImgAlt),
      recuadroTitulo: texto("Recuadro sobre la foto · título", "Lorem ipsum"),
      recuadroTexto: area("Recuadro sobre la foto · texto", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."),
      otrasTitulo: texto("«También representamos» · título", "También representamos"),
      otras: lineas("«También representamos» · marcas", d.otrasMarcas),
    }),
    equipos: grupo("Equipos destacados", {
      etiqueta: texto("Texto pequeño", "Equipos destacados"),
      titulo: texto("Título", "Lo esencial para arrancar."),
      texto: area("Párrafo", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
      boton: texto("Botón «ver catálogo»", "Ver catálogo"),
      enlace: enlace("A dónde lleva «ver catálogo»", "https://crtonline.com.mx"),
    }, { ayuda: "Las tarjetas son los productos PUBLICADOS con este giro (máx. 4). Si no hay, se ven tarjetas de ejemplo." }),
    showroom: grupo("Showroom", {
      imagen: imagen("Foto", d.showroomImg),
      etiquetaFoto: texto("Recuadro sobre la foto · título", "Showroom"),
      ciudad: texto("Recuadro sobre la foto · ciudad", "Monterrey, Nuevo León"),
      etiqueta: texto("Texto pequeño", "Showroom Monterrey"),
      titulo: texto("Título", "Ven a probar antes de comprar."),
      texto: area("Párrafo", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."),
      puntos: lineas("Puntos", ["Lorem ipsum dolor sit amet consectetur", "Lorem ipsum dolor sit amet adipiscing", "Lorem ipsum dolor sit amet incididunt", "Lorem ipsum dolor sit amet veniam"]),
      botonAgendar: texto("Botón «agendar» (abre WhatsApp)", "Agendar visita"),
      botonMapa: texto("Botón del mapa", "Ver en mapa"),
      mapa: enlace("Enlace de Google Maps"),
    }),
    distribuidores: grupo("Banner de distribuidores", {
      etiqueta: texto("Texto pequeño", "¿Eres distribuidor?"),
      titulo: texto("Título", "Accede a fichas extendidas, manuales y guías de instalación."),
      texto: area("Párrafo", "Si vendes equipo CRT en tu zona, regístrate para acceder al portal de distribuidores con material técnico completo y soporte directo."),
      boton: texto("Botón (lleva a /distribuidores)", "Registrar mi negocio"),
    }),
    blog: grupo("Blog", {
      etiqueta: texto("Texto pequeño", "Blog y recursos"),
      titulo: texto("Título (antes de la palabra en color)", "Tips para tu"),
      boton: texto("Botón", "Ver blog completo"),
    }, { ayuda: "Las tarjetas son los 3 artículos más recientes del blog; si no hay, se ven de ejemplo." }),
    cta: grupo("Llamado final", {
      titulo: texto("Título (antes de la palabra en color)", "Cotiza tu"),
      texto: area("Texto", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris."),
      botonWhatsapp: texto("Botón de WhatsApp", d.botonCta),
      botonLlamar: texto("Botón de llamar", "Llamar al showroom"),
    }),
  });
}

export const giroCafeteria = giroPagina("cafeteria", "Cafetería", "/cafeteria", {
  "seo": {
    "titulo": "Equipa tu cafetería · CRT Profesional",
    "descripcion": "Cafeteras Bezzera, molinos, vitrinas mostrador, máquinas de hielo bajo barra y más. Asesoría real, showroom Monterrey y entrega nacional."
  },
  "giro": "Cafetería",
  "pill": "Equipa tu cafetería",
  "palabra": "cafetería",
  "imagen": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=85&auto=format&fit=crop",
  "imagenAlt": "Barista preparando espresso en cafetería",
  "categorias": [
    {
      "nombre": "Cafeteras espresso",
      "img": "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Molinos de café",
      "img": "https://images.unsplash.com/photo-1518057111178-44a106bad636?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Vitrinas mostrador",
      "img": "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Hielo bajo barra",
      "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Granita y frappé",
      "img": "https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Lavavajillas compactos",
      "img": "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&q=80&auto=format&fit=crop"
    }
  ],
  "otrasMarcas": [
    "ITV",
    "CRT",
    "Lorem",
    "Lorem",
    "Lorem"
  ],
  "marcaImg": "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=900&q=85&auto=format&fit=crop",
  "marcaImgAlt": "Cafetera espresso italiana profesional",
  "showroomImg": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=900&q=85&auto=format&fit=crop",
  "botonCta": "Cotizar mi cafetería"
});

export const giroRestaurante = giroPagina("restaurante", "Restaurante", "/restaurante", {
  "seo": {
    "titulo": "Equipa tu restaurante · CRT Profesional",
    "descripcion": "Hornos combi y convección, lavavajillas industriales, procesadores, empacadoras al vacío y refrigeración profesional. Asesoría, showroom Monterrey y entrega nacional."
  },
  "giro": "Restaurante",
  "pill": "Equipa tu restaurante",
  "palabra": "restaurante",
  "imagen": "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=900&q=85&auto=format&fit=crop",
  "imagenAlt": "Cocina profesional de restaurante con equipo CRT",
  "categorias": [
    {
      "nombre": "Hornos combi y convección",
      "img": "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Lavavajillas industriales",
      "img": "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Procesadores y cortadoras",
      "img": "https://images.unsplash.com/photo-1556909211-d5b07c20b3c5?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Empacadoras al vacío",
      "img": "https://images.unsplash.com/photo-1604908554027-fd9a4a89e8e6?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Refrigeración profesional",
      "img": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Túnel de lavado",
      "img": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80&auto=format&fit=crop"
    }
  ],
  "otrasMarcas": [
    "CRT",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem"
  ],
  "marcaImg": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&q=85&auto=format&fit=crop",
  "marcaImgAlt": "Horno combi profesional para restaurante",
  "showroomImg": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=900&q=85&auto=format&fit=crop",
  "botonCta": "Cotizar mi restaurante"
});

export const giroPanaderia = giroPagina("panaderia", "Panadería", "/panaderia", {
  "seo": {
    "titulo": "Equipa tu panadería · CRT Profesional",
    "descripcion": "Amasadoras y batidoras marca propia, hornos rotativos y de piso, cámaras de fermentación. Asesoría, showroom Monterrey y entrega nacional."
  },
  "giro": "Panadería",
  "pill": "Equipa tu panadería",
  "palabra": "panadería",
  "imagen": "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=900&q=85&auto=format&fit=crop",
  "imagenAlt": "Panadería artesanal con horno rotativo y amasadora",
  "categorias": [
    {
      "nombre": "Amasadoras",
      "img": "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Batidoras",
      "img": "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Hornos rotativos",
      "img": "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Hornos de piso",
      "img": "https://images.unsplash.com/photo-1605974470024-ab97f8d11d99?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Cámaras de fermentación",
      "img": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Mesas de trabajo",
      "img": "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=800&q=80&auto=format&fit=crop"
    }
  ],
  "otrasMarcas": [
    "CRT",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem"
  ],
  "marcaImg": "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=900&q=85&auto=format&fit=crop",
  "marcaImgAlt": "Amasadora profesional marca propia CRT",
  "showroomImg": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=900&q=85&auto=format&fit=crop",
  "botonCta": "Cotizar mi panadería"
});

export const giroHeladeria = giroPagina("heladeria", "Heladería", "/heladeria", {
  "seo": {
    "titulo": "Equipa tu heladería · CRT Profesional",
    "descripcion": "Máquinas de helado suave, vitrinas exhibidoras de helado, pozos de helado y refrigeración para heladería. Asesoría, showroom Monterrey y entrega nacional."
  },
  "giro": "Heladería",
  "pill": "Equipa tu heladería",
  "palabra": "heladería",
  "imagen": "https://images.unsplash.com/photo-1560801619-01d71da0f70c?w=900&q=85&auto=format&fit=crop",
  "imagenAlt": "Heladería artesanal con vitrina de helado y máquina soft",
  "categorias": [
    {
      "nombre": "Máquinas de helado suave",
      "img": "https://images.unsplash.com/photo-1560801619-01d71da0f70c?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Vitrinas exhibidoras",
      "img": "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Pozos de helado",
      "img": "https://images.unsplash.com/photo-1500522144261-ea64433bbe27?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Refrigeración para heladería",
      "img": "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Granita y bebidas frías",
      "img": "https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&q=80&auto=format&fit=crop"
    },
    {
      "nombre": "Insumos de exhibición",
      "img": "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800&q=80&auto=format&fit=crop"
    }
  ],
  "otrasMarcas": [
    "CRT",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem"
  ],
  "marcaImg": "https://images.unsplash.com/photo-1560801619-01d71da0f70c?w=900&q=85&auto=format&fit=crop",
  "marcaImgAlt": "Máquina de helado soft profesional",
  "showroomImg": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=900&q=85&auto=format&fit=crop",
  "botonCta": "Cotizar mi heladería"
});
