import {
  Bread, Cake, Fire, Thermometer, Cube,
} from "@phosphor-icons/react/dist/ssr";
import VerticalLayout, { type Categoria } from "../_components/VerticalLayout";

export const metadata = {
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

// Categorías del brief sec 3.C (verificadas)
const categorias: Categoria[] = [
  { nombre: "Amasadoras", icon: <Bread size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Batidoras", icon: <Cake size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Hornos rotativos", icon: <Fire size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Hornos de piso", icon: <Fire size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1605974470024-ab97f8d11d99?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Cámaras de fermentación", icon: <Thermometer size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80&auto=format&fit=crop" },
  { nombre: "Mesas de trabajo", icon: <Cube size={26} weight="duotone" />, img: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=800&q=80&auto=format&fit=crop" },
];

export default function PanaderiaPage() {
  return (
    <VerticalLayout
      verticalActiva="Panadería"
      pillText="Equipa tu panadería"
      pillIcon={<Bread size={14} weight="fill" />}
      h1Word="panadería"
      heroImg="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=900&q=85&auto=format&fit=crop"
      heroImgAlt="Panadería artesanal con horno rotativo y amasadora"
      categorias={categorias}
      otrasMarcas={["CRT", "Lorem", "Lorem", "Lorem", "Lorem"]}
      marcaImg="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=900&q=85&auto=format&fit=crop"
      marcaImgAlt="Amasadora profesional marca propia CRT"
      showroomImg="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=900&q=85&auto=format&fit=crop"
      ctaButtonText="Cotizar mi panadería"
    />
  );
}
