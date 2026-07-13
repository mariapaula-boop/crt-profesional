import { Coffee, Snowflake, Storefront, Sparkle, Drop } from "@phosphor-icons/react/dist/ssr";
import VerticalLayout, { type Categoria } from "../_components/VerticalLayout";

export const metadata = {
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

// Categorías del brief sec 3.B (verificadas)
const categorias: Categoria[] = [
  { nombre: "Cafeteras espresso", icon: <Coffee size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Molinos de café", icon: <Drop size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1518057111178-44a106bad636?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Vitrinas mostrador", icon: <Storefront size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Hielo bajo barra", icon: <Snowflake size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Granita y frappé", icon: <Sparkle size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Lavavajillas compactos", icon: <Drop size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&q=80&auto=format&fit=crop" },
];

export default function CafeteriaPage() {
  return (
    <VerticalLayout
      verticalActiva="Cafeterías"
      pillText="Equipa tu cafetería"
      pillIcon={<Coffee size={14} weight="fill" />}
      h1Word="cafetería"
      heroImg="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=85&auto=format&fit=crop"
      heroImgAlt="Barista preparando espresso en cafetería"
      categorias={categorias}
      otrasMarcas={["ITV", "CRT", "Lorem", "Lorem", "Lorem"]}
      marcaImg="https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=900&q=85&auto=format&fit=crop"
      marcaImgAlt="Cafetera espresso italiana profesional"
      showroomImg="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=900&q=85&auto=format&fit=crop"
      ctaButtonText="Cotizar mi cafetería"
    />
  );
}
