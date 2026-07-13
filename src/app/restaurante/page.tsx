import {
  ForkKnife, Drop, Knife, Archive, Snowflake, Package,
} from "@phosphor-icons/react/dist/ssr";
import VerticalLayout, { type Categoria } from "../_components/VerticalLayout";

export const metadata = {
  title: "Equipa tu restaurante · CRT Profesional",
  description:
    "Hornos combi y convección, lavavajillas industriales, procesadores, empacadoras al vacío y refrigeración profesional. Asesoría, showroom Monterrey y entrega nacional.",
  alternates: { canonical: "https://crtpro.com.mx/restaurante" },
  openGraph: {
    title: "Equipa tu restaurante — CRT Profesional",
    description: "Hornos, lavavajillas, procesadores y refrigeración profesional para tu cocina.",
    url: "https://crtpro.com.mx/restaurante",
    locale: "es_MX",
    type: "website",
  },
};

// Categorías del brief sec 3.A (verificadas)
const categorias: Categoria[] = [
  { nombre: "Hornos combi y convección", icon: <ForkKnife size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Lavavajillas industriales", icon: <Drop size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Procesadores y cortadoras", icon: <Knife size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1556909211-d5b07c20b3c5?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Empacadoras al vacío", icon: <Archive size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1604908554027-fd9a4a89e8e6?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Refrigeración profesional", icon: <Snowflake size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Túnel de lavado", icon: <Package size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80&auto=format&fit=crop" },
];

export default function RestaurantePage() {
  return (
    <VerticalLayout
      verticalActiva="Restaurantes"
      pillText="Equipa tu restaurante"
      pillIcon={<ForkKnife size={14} weight="fill" />}
      h1Word="restaurante"
      heroImg="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=900&q=85&auto=format&fit=crop"
      heroImgAlt="Cocina profesional de restaurante con equipo CRT"
      categorias={categorias}
      otrasMarcas={["CRT", "Lorem", "Lorem", "Lorem", "Lorem"]}
      marcaImg="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&q=85&auto=format&fit=crop"
      marcaImgAlt="Horno combi profesional para restaurante"
      showroomImg="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=900&q=85&auto=format&fit=crop"
      ctaButtonText="Cotizar mi restaurante"
    />
  );
}
