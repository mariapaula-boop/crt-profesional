// Blog CRT Profesional — placeholders por ahora (lorem ipsum).
// Cuando el cliente entregue contenido real, se actualizan aquí.

export type Post = {
  slug: string;
  categoria: string;
  titulo: string;
  resumen: string;
  fecha: string;
  lectura: string;
};

export const posts: Post[] = [
  {
    slug: "lorem-ipsum-dolor-sit-amet-1",
    categoria: "Cafetería",
    titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.",
    resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    fecha: "Por publicar",
    lectura: "—",
  },
  {
    slug: "lorem-ipsum-dolor-sit-amet-2",
    categoria: "Restaurante",
    titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod.",
    resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.",
    fecha: "Por publicar",
    lectura: "—",
  },
  {
    slug: "lorem-ipsum-dolor-sit-amet-3",
    categoria: "Panadería",
    titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit tempor.",
    resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    fecha: "Por publicar",
    lectura: "—",
  },
  {
    slug: "lorem-ipsum-dolor-sit-amet-4",
    categoria: "Heladería",
    titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor.",
    resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.",
    fecha: "Por publicar",
    lectura: "—",
  },
  {
    slug: "lorem-ipsum-dolor-sit-amet-5",
    categoria: "Cafetería",
    titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit minim.",
    resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    fecha: "Por publicar",
    lectura: "—",
  },
  {
    slug: "lorem-ipsum-dolor-sit-amet-6",
    categoria: "Distribuidores",
    titulo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit voluptate.",
    resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    fecha: "Por publicar",
    lectura: "—",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(p: Post, limit = 3): Post[] {
  const sameCat = posts.filter((q) => q.slug !== p.slug && q.categoria === p.categoria);
  const others = posts.filter((q) => q.slug !== p.slug && q.categoria !== p.categoria);
  return [...sameCat, ...others].slice(0, limit);
}
