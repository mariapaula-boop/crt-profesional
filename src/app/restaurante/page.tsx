import {
  ForkKnife, Drop, Knife, Archive, Snowflake, Package,
} from "@phosphor-icons/react/dist/ssr";
import VerticalLayout from "../_components/VerticalLayout";
import { contenido } from "@/lib/cms";
import { giroRestaurante as pagina } from "@/contenido/giros";
import { getAjustes } from "@/contenido/ajustes";
import { metadataCon } from "@/contenido/comun";
import { productosDelGiro } from "@/lib/productos";
import { getPostsCms } from "@/lib/blog";

const metadataBase = {
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

export async function generateMetadata() {
  const c = await contenido(pagina);
  return metadataCon(c.seo, pagina.campos.seo.defecto, metadataBase);
}

// Textos e imágenes: src/contenido/giros.ts (editables en el administrador).
const iconos = [
  <ForkKnife key="0" size={26} weight="duotone" />,
  <Drop key="1" size={26} weight="duotone" />,
  <Knife key="2" size={26} weight="duotone" />,
  <Archive key="3" size={26} weight="duotone" />,
  <Snowflake key="4" size={26} weight="duotone" />,
  <Package key="5" size={26} weight="duotone" />,
];

export default async function RestaurantePage() {
  const [c, a, productos, posts] = await Promise.all([contenido(pagina), getAjustes(), productosDelGiro("Restaurante"), getPostsCms().then((p) => p ?? [])]);
  return (
    <VerticalLayout
      verticalActiva="Restaurantes"
      pillIcon={<ForkKnife size={14} weight="fill" />}
      iconos={iconos}
      c={c}
      a={a}
      productos={productos}
      posts={posts}
    />
  );
}
