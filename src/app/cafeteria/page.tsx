import { Coffee, Snowflake, Storefront, Sparkle, Drop } from "@phosphor-icons/react/dist/ssr";
import VerticalLayout from "../_components/VerticalLayout";
import { contenido } from "@/lib/cms";
import { giroCafeteria as pagina } from "@/contenido/giros";
import { getAjustes } from "@/contenido/ajustes";
import { metadataCon } from "@/contenido/comun";
import { productosDelGiro } from "@/lib/productos";
import { getPostsCms } from "@/lib/blog";

const metadataBase = {
  title: "Equipa tu cafetería · CRT Profesional",
  description:
    "Cafeteras Bezzera, molinos, vitrinas mostrador, máquinas de hielo bajo barra y más. Asesoría real, showroom Monterrey y entrega nacional.",
  alternates: { canonical: "https://crtpro.com.mx/cafeteria" },
  openGraph: {
    title: "Equipa tu cafetería — CRT Profesional",
    description: "Cafeteras Bezzera, molinos, vitrinas, hielo bajo barra. Asesoría y entrega nacional.",
    url: "https://crtpro.com.mx/cafeteria",
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
  <Coffee key="0" size={26} weight="duotone" />,
  <Drop key="1" size={26} weight="duotone" />,
  <Storefront key="2" size={26} weight="duotone" />,
  <Snowflake key="3" size={26} weight="duotone" />,
  <Sparkle key="4" size={26} weight="duotone" />,
  <Drop key="5" size={26} weight="duotone" />,
];

export default async function CafeteriaPage() {
  const [c, a, productos, posts] = await Promise.all([contenido(pagina), getAjustes(), productosDelGiro("Cafetería"), getPostsCms().then((p) => p ?? [])]);
  return (
    <VerticalLayout
      verticalActiva="Cafeterías"
      pillIcon={<Coffee size={14} weight="fill" />}
      iconos={iconos}
      c={c}
      a={a}
      productos={productos}
      posts={posts}
    />
  );
}
