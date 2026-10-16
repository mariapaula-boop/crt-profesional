// Todas las páginas editables desde el administrador, en el orden del menú.
import { ajustes } from "./ajustes";
import { home } from "./home";
import { giroCafeteria, giroRestaurante, giroPanaderia, giroHeladeria } from "./giros";
import { distribuidores, contacto, visitanos } from "./secundarias";
import { blog } from "./blog";
import { camposProducto, taxonomiasProducto } from "./producto";

export const paginas = [
  home, giroCafeteria, giroRestaurante, giroPanaderia, giroHeladeria,
  distribuidores, visitanos, blog, contacto, ajustes,
];

export const producto = {
  // CRT Profesional no tiene página por producto: salen en las páginas de su giro.
  rutaPublica: "",
  campos: camposProducto,
  taxonomias: taxonomiasProducto,
};
