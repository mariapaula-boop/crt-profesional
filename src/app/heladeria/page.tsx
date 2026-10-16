import {
  IceCream, Snowflake, Storefront, Cube, Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import VerticalLayout from "../_components/VerticalLayout";
import { contenido } from "@/lib/cms";
import { giroHeladeria as pagina } from "@/contenido/giros";
import { getAjustes } from "@/contenido/ajustes";
import { metadataCon } from "@/contenido/comun";
import { productosDelGiro } from "@/lib/productos";
import { getPostsCms } from "@/lib/blog";

const metadataBase = {
  title: "Equipa tu heladería · CRT Profesional",
  description:
    "Máquinas de helado suave, vitrinas exhibidoras de helado, pozos de helado y refrigeración para heladería. Asesoría, showroom Monterrey y entrega nacional.",
  alternates: { canonical: "https://crtpro.com.mx/heladeria" },
  openGraph: {
    title: "Equipa tu heladería — CRT Profesional",
    description: "Máquinas de helado suave, vitrinas exhibidoras, pozos y refrigeración para heladería.",
    url: "https://crtpro.com.mx/heladeria",
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
  <IceCream key="0" size={26} weight="duotone" />,
  <Storefront key="1" size={26} weight="duotone" />,
  <Cube key="2" size={26} weight="duotone" />,
  <Snowflake key="3" size={26} weight="duotone" />,
  <Sparkle key="4" size={26} weight="duotone" />,
  <IceCream key="5" size={26} weight="duotone" />,
];

export default async function HeladeriaPage() {
  const [c, a, productos, posts] = await Promise.all([contenido(pagina), getAjustes(), productosDelGiro("Heladería"), getPostsCms().then((p) => p ?? [])]);
  return (
    <VerticalLayout
      verticalActiva="Helados"
      pillIcon={<IceCream size={14} weight="fill" />}
      iconos={iconos}
      c={c}
      a={a}
      productos={productos}
      posts={posts}
    />
  );
}
