import {
  Bread, Cake, Fire, Thermometer, Cube,
} from "@phosphor-icons/react/dist/ssr";
import VerticalLayout from "../_components/VerticalLayout";
import { contenido } from "@/lib/cms";
import { giroPanaderia as pagina } from "@/contenido/giros";
import { getAjustes } from "@/contenido/ajustes";
import { metadataCon } from "@/contenido/comun";
import { productosDelGiro } from "@/lib/productos";
import { getPostsCms } from "@/lib/blog";

const metadataBase = {
  title: "Equipa tu panadería · CRT Profesional",
  description:
    "Amasadoras y batidoras marca propia, hornos rotativos y de piso, cámaras de fermentación. Asesoría, showroom Monterrey y entrega nacional.",
  alternates: { canonical: "https://crtpro.com.mx/panaderia" },
  openGraph: {
    title: "Equipa tu panadería — CRT Profesional",
    description: "Amasadoras CRT, batidoras, hornos rotativos y de piso, cámaras de fermentación.",
    url: "https://crtpro.com.mx/panaderia",
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
  <Bread key="0" size={26} weight="duotone" />,
  <Cake key="1" size={26} weight="duotone" />,
  <Fire key="2" size={26} weight="duotone" />,
  <Fire key="3" size={26} weight="duotone" />,
  <Thermometer key="4" size={26} weight="duotone" />,
  <Cube key="5" size={26} weight="duotone" />,
];

export default async function PanaderiaPage() {
  const [c, a, productos, posts] = await Promise.all([contenido(pagina), getAjustes(), productosDelGiro("Panadería"), getPostsCms().then((p) => p ?? [])]);
  return (
    <VerticalLayout
      verticalActiva="/panaderia"
      pillIcon={<Bread size={14} weight="fill" />}
      iconos={iconos}
      c={c}
      a={a}
      productos={productos}
      posts={posts}
    />
  );
}
