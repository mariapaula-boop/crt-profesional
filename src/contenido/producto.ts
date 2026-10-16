import { texto, area, imagen, archivo, lineas, enlace } from "@/lib/cms/campos";

// Campos de cada producto en el administrador (Productos → Datos del producto).
// Se sembraron como BORRADOR desde la tienda CRT Online (Shopify): el equipo de CRT
// publica los que sí van en CRT Profesional.
export const camposProducto = {
  sku: texto("SKU / clave", "", { ayuda: "Opcional." }),
  resumen: area("Descripción corta", "", { ayuda: "Sale en las tarjetas.", filas: 2 }),
  imagen: imagen("Foto del producto", "", { ayuda: "PNG o JPG, idealmente con fondo blanco o transparente." }),
  etiqueta: texto("Etiqueta corta", "", { ayuda: "Pastilla sobre la foto. Ej. Cafetera, Horno." }),
  precio: texto("Precio (como se muestra)", "", { ayuda: "Opcional. Ej. $12,500.00 MXN. Vacío = no se muestra." }),
  tienda: enlace("Enlace a la tienda en línea", "", { ayuda: "Página del producto en crtonline.com.mx, si existe." }),
  ficha: archivo("Ficha técnica (PDF)", "", { ayuda: "Sube el PDF o pega un enlace de Google Drive." }),
  descripcion: area("Descripción larga", "", { filas: 5 }),
  specs: lineas("Especificaciones", [], { ayuda: "Una por renglón." }),
  color: texto("Color de la etiqueta (avanzado)", "", { ayuda: "Código hex, ej. #06B6D4. Vacío = color por defecto." }),
};

export const taxonomiasProducto = [
  { id: "crt_categoria", clave: "categoria", claveSub: "subcategoria", conSubnivel: true, etiqueta: "Categorías", etiquetaSingular: "Categoría", ayuda: "Marca la categoría y, si aplica, la subcategoría." },
  { id: "crt_marca", clave: "marca", etiqueta: "Marcas", etiquetaSingular: "Marca" },
  { id: "crt_giro", clave: "giros", multiple: true, etiqueta: "Giros", etiquetaSingular: "Giro", ayuda: "En qué páginas de giro aparece (Cafetería, Restaurante, Panadería, Heladería)." },
];
