import {
  IceCream, Snowflake, Storefront, Cube, Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import VerticalLayout, { type Categoria } from "../_components/VerticalLayout";

export const metadata = {
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

// Categorías del brief sec 3.D (verificadas)
const categorias: Categoria[] = [
  { nombre: "Máquinas de helado suave", icon: <IceCream size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1560801619-01d71da0f70c?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Vitrinas exhibidoras", icon: <Storefront size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Pozos de helado", icon: <Cube size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1500522144261-ea64433bbe27?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Refrigeración para heladería", icon: <Snowflake size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Granita y bebidas frías", icon: <Sparkle size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Insumos de exhibición", icon: <IceCream size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800&q=80&auto=format&fit=crop" },
];

export default function HeladeriaPage() {
  return (
    <VerticalLayout
      verticalActiva="Helados"
      pillText="Equipa tu heladería"
      pillIcon={<IceCream size={14} weight="fill" />}
      h1Word="heladería"
      heroImg="https://images.unsplash.com/photo-1560801619-01d71da0f70c?w=900&q=85&auto=format&fit=crop"
      heroImgAlt="Heladería artesanal con vitrina de helado y máquina soft"
      categorias={categorias}
      otrasMarcas={["CRT", "Lorem", "Lorem", "Lorem", "Lorem"]}
      marcaImg="https://images.unsplash.com/photo-1560801619-01d71da0f70c?w=900&q=85&auto=format&fit=crop"
      marcaImgAlt="Máquina de helado soft profesional"
      showroomImg="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=900&q=85&auto=format&fit=crop"
      ctaButtonText="Cotizar mi heladería"
    />
  );
}
