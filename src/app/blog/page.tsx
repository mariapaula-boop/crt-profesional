import {
  ArrowRight, CaretRight, House, Article, Calendar,
} from "@phosphor-icons/react/dist/ssr";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Blog y tips para tu negocio · CRT Profesional",
  description:
    "Tips, guías y noticias para dueños de cafeterías, restaurantes, panaderías y heladerías. Equipa mejor, opera mejor, vende mejor.",
  alternates: { canonical: "https://crtpro.com.mx/blog" },
  openGraph: {
    title: "Blog — CRT Profesional",
    description: "Tips para tu cafetería, restaurante, panadería o heladería.",
    url: "https://crtpro.com.mx/blog",
    locale: "es_MX",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar activo="Blog" />

      {/* ====================== HERO ====================== */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden" style={{ background: "var(--surface)" }}>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container relative">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary)" }}>
              <li>
                <a href="/" className="flex items-center gap-1.5 hover:opacity-70 transition">
                  <House size={14} weight="duotone" />
                  Inicio
                </a>
              </li>
              <li><CaretRight size={12} weight="bold" style={{ color: "var(--secondary2)" }} /></li>
              <li className="font-semibold" style={{ color: "var(--primary)" }}>Blog</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
              style={{ background: "white", color: "var(--accent-dark)", border: "1px solid var(--line)" }}
            >
              <Article size={14} weight="fill" />
              Tips para tu negocio
            </span>
            <h1 className="heading1 mb-6" style={{ color: "var(--primary)" }}>
              Blog y{" "}
              <span style={{ color: "var(--accent-dark)" }}>recursos</span>.
            </h1>
            <p className="body1 max-w-xl" style={{ color: "var(--secondary)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* ====================== GRID DE POSTS ====================== */}
      <section className="py-20 lg:py-24" style={{ background: "white" }}>
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <a
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-3xl overflow-hidden p-7 transition hover:-translate-y-1 hover:shadow-xl bg-white"
                style={{ border: "1px solid var(--line)" }}
              >
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4"
                  style={{ background: "rgba(6,182,212,0.12)", color: "var(--accent-dark)" }}
                >
                  {p.categoria}
                </span>
                <h3
                  className="heading6 mb-3 leading-tight group-hover:opacity-80 transition"
                  style={{ color: "var(--primary)" }}
                >
                  {p.titulo}
                </h3>
                <p className="caption1 mb-6" style={{ color: "var(--secondary)" }}>{p.resumen}</p>
                <div
                  className="flex items-center justify-between pt-4 border-t"
                  style={{ borderColor: "var(--line)" }}
                >
                  <span className="caption2 flex items-center gap-1.5" style={{ color: "var(--secondary)" }}>
                    <Calendar size={12} weight="duotone" /> {p.fecha} · {p.lectura}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-semibold transition group-hover:gap-2"
                    style={{ color: "var(--primary)" }}
                  >
                    Leer
                    <ArrowRight size={14} weight="bold" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
