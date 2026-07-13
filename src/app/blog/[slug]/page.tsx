import { notFound } from "next/navigation";
import {
  ArrowRight, WhatsappLogo, CaretRight, House, Article, Calendar, Clock, User,
} from "@phosphor-icons/react/dist/ssr";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import { posts, getPost, getRelatedPosts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return { title: "Artículo no encontrado · CRT Profesional" };
  const url = `https://crtpro.com.mx/blog/${p.slug}`;
  return {
    title: `${p.titulo} · CRT Profesional`,
    description: p.resumen,
    alternates: { canonical: url },
    openGraph: {
      title: p.titulo,
      description: p.resumen,
      url,
      locale: "es_MX",
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const related = getRelatedPosts(p, 3);

  return (
    <>
      <Navbar activo="Blog" />

      {/* ====================== HERO ====================== */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden" style={{ background: "var(--surface)" }}>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container relative">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary)" }}>
              <li>
                <a href="/" className="flex items-center gap-1.5 hover:opacity-70 transition">
                  <House size={14} weight="duotone" />
                  Inicio
                </a>
              </li>
              <li><CaretRight size={12} weight="bold" style={{ color: "var(--secondary2)" }} /></li>
              <li><a href="/blog" className="hover:opacity-70 transition">Blog</a></li>
              <li><CaretRight size={12} weight="bold" style={{ color: "var(--secondary2)" }} /></li>
              <li className="font-semibold truncate max-w-[260px] sm:max-w-none" style={{ color: "var(--primary)" }}>
                {p.titulo}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5"
              style={{ background: "rgba(6,182,212,0.12)", color: "var(--accent-dark)" }}
            >
              {p.categoria}
            </span>
            <h1 className="heading1 mb-5" style={{ color: "var(--primary)" }}>{p.titulo}</h1>
            <p className="body1 mb-6" style={{ color: "var(--secondary)" }}>{p.resumen}</p>

            <div className="flex flex-wrap items-center gap-5 text-sm" style={{ color: "var(--secondary)" }}>
              <span className="flex items-center gap-2">
                <User size={14} weight="duotone" /> Equipo editorial CRT Profesional
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} weight="duotone" /> {p.fecha}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} weight="duotone" /> {p.lectura === "—" ? "Lectura ~5 min" : p.lectura}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CUERPO ARTÍCULO ====================== */}
      <section className="py-16 lg:py-20" style={{ background: "white" }}>
        <div className="container">
          <article className="max-w-3xl">
            {/* Aviso lorem ipsum */}
            <div
              className="mb-8 p-4 rounded-r-lg"
              style={{ background: "rgba(6,182,212,0.08)", borderLeft: "4px solid var(--accent-dark)" }}
            >
              <p className="caption1" style={{ color: "var(--accent-dark)" }}>
                <strong>Borrador editorial.</strong> Contenido placeholder (lorem ipsum) — pendiente redacción final por el equipo editorial.
              </p>
            </div>

            <p className="body1 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-1" style={{ color: "var(--secondary)" }}>
              <span style={{ color: "var(--primary)" }}>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="body1 mb-8" style={{ color: "var(--secondary)" }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h2 className="heading4 mt-12 mb-4" style={{ color: "var(--primary)" }}>
              Lorem ipsum dolor sit amet
            </h2>
            <p className="body1 mb-6" style={{ color: "var(--secondary)" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="body1 mb-8" style={{ color: "var(--secondary)" }}>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>

            <h2 className="heading4 mt-12 mb-4" style={{ color: "var(--primary)" }}>
              Puntos clave
            </h2>
            <ul className="space-y-3 mb-8">
              {[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
                "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-6 h-6 rounded-full text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
                    style={{ background: "var(--accent-dark)" }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ color: "var(--secondary)" }}>{item}</span>
                </li>
              ))}
            </ul>

            <blockquote
              className="my-10 pl-6 py-2 italic border-l-4"
              style={{ borderColor: "var(--accent-dark)" }}
            >
              <p className="body1 font-medium" style={{ color: "var(--black)" }}>
                &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.&rdquo;
              </p>
              <footer className="mt-3 caption2 uppercase tracking-wider" style={{ color: "var(--secondary2)" }}>
                — Pendiente fuente
              </footer>
            </blockquote>

            <h2 className="heading4 mt-12 mb-4" style={{ color: "var(--primary)" }}>
              Conclusión
            </h2>
            <p className="body1 mb-10" style={{ color: "var(--secondary)" }}>
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </p>
          </article>
        </div>
      </section>

      {/* ====================== RELACIONADOS ====================== */}
      {related.length > 0 && (
        <section className="py-20" style={{ background: "var(--surface)" }}>
          <div className="container">
            <div className="flex items-end justify-between mb-10 gap-6">
              <div>
                <span className="text-sub-display" style={{ color: "var(--accent-dark)" }}>
                  Sigue leyendo
                </span>
                <h2 className="heading3 mt-3" style={{ color: "var(--primary)" }}>Artículos relacionados</h2>
              </div>
              <a
                href="/blog"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3"
                style={{ color: "var(--primary)" }}
              >
                Ver todo el blog
                <ArrowRight size={16} weight="bold" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r) => (
                <a
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-xl bg-white"
                  style={{ border: "1px solid var(--line)" }}
                >
                  <span
                    className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3"
                    style={{ background: "rgba(6,182,212,0.12)", color: "var(--accent-dark)" }}
                  >
                    {r.categoria}
                  </span>
                  <h3 className="heading6 mb-2 group-hover:opacity-80 transition" style={{ color: "var(--primary)" }}>
                    {r.titulo}
                  </h3>
                  <p className="caption1 line-clamp-2" style={{ color: "var(--secondary)" }}>{r.resumen}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====================== CTA FINAL ====================== */}
      <section className="py-20" style={{ background: "var(--primary)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Article size={42} weight="duotone" style={{ color: "var(--accent-light)" }} className="mx-auto mb-5" />
            <h2 className="heading3 mb-4 text-white">¿Te aplica este tema?</h2>
            <p className="body1 mb-8 text-white/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            <a href="#" className="btn-accent">
              <WhatsappLogo size={16} weight="fill" />
              Hablar con un asesor
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
