import type { ReactNode } from "react";
import {
  ArrowRight, WhatsappLogo, MapPin,
  CaretRight, FileText, Phone, Star, Check,
  Lightning, ChatCircleText, House,
} from "@phosphor-icons/react/dist/ssr";
import Navbar, { type NavbarActiveItem } from "./Navbar";
import Footer from "./Footer";
import type { ValoresDe } from "@/lib/cms/campos";
import type { giroPagina } from "@/contenido/giros";
import type { Ajustes } from "@/contenido/ajustes";
import type { ProductoPro } from "@/lib/productos";

export type ContenidoGiro = ValoresDe<ReturnType<typeof giroPagina>["campos"]>;

/** Artículo del blog para las tarjetas (los 3 más recientes). */
export type TarjetaBlog = { slug: string; titulo: string; categoria: string; fecha: string };

export type VerticalLayoutProps = {
  /** Cuál vertical se ve activa en la navbar */
  verticalActiva: NavbarActiveItem;
  /** Icono del pill */
  pillIcon: ReactNode;
  /** Íconos de las tarjetas de categorías (por posición) */
  iconos: ReactNode[];
  /** Textos e imágenes del administrador (src/contenido/giros.ts) */
  c: ContenidoGiro;
  a: Ajustes;
  /** Productos publicados con este giro (máx. 4); vacío = tarjetas de ejemplo */
  productos: ProductoPro[];
  posts: TarjetaBlog[];
};

export default function VerticalLayout({ verticalActiva, pillIcon, iconos, c, a, productos, posts }: VerticalLayoutProps) {
  const h1Word = c.hero.palabra;
  return (
    <>
      <Navbar activo={verticalActiva} />

      {/* ====================== HERO ====================== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" style={{ background: "var(--surface)" }}>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)" }}
        />

        <div className="container relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary)" }}>
              <li>
                <a href="/" className="flex items-center gap-1.5 hover:opacity-70 transition">
                  <House size={14} weight="duotone" />
                  {c.hero.migaInicio}
                </a>
              </li>
              <li><CaretRight size={12} weight="bold" style={{ color: "var(--secondary2)" }} /></li>
              <li>{c.hero.migaSeccion}</li>
              <li><CaretRight size={12} weight="bold" style={{ color: "var(--secondary2)" }} /></li>
              <li className="font-semibold capitalize" style={{ color: "var(--primary)" }}>{h1Word}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
                style={{ background: "white", color: "var(--accent-dark)", border: "1px solid var(--line)" }}
              >
                {pillIcon}
                {c.hero.pill}
              </span>

              <h1 className="heading1 mb-6" style={{ color: "var(--primary)" }}>
                {c.hero.titulo}{" "}
                <span style={{ color: "var(--accent-dark)" }}>{h1Word}</span>.
              </h1>

              <p className="body1 mb-9 max-w-xl" style={{ color: "var(--secondary)" }}>
                {c.hero.texto}
              </p>

              <div className="flex flex-wrap gap-3">
                <a href={a.waLink} target="_blank" rel="noopener" className="btn-primary">
                  <WhatsappLogo size={16} weight="fill" />
                  {c.hero.botonWhatsapp}
                </a>
                <a href="#categorias" className="btn-outline-primary">
                  {c.hero.botonEquipos}
                  <ArrowRight size={16} weight="bold" />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t" style={{ borderColor: "var(--line)" }}>
                {c.hero.datos.map((s, i) => (
                  <div key={i}>
                    <div className="heading5" style={{ color: "var(--primary)" }}>{s.valor}</div>
                    <div className="caption1" style={{ color: "var(--secondary)" }}>{s.texto}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img src={c.hero.imagen} alt={c.hero.imagenAlt} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(10,37,64,0.9) 100%)" }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3" style={{ background: "var(--accent)", color: "var(--primary-dark)" }}>
                    {c.hero.tarjetaEtiqueta}
                  </span>
                  <p className="text-white text-2xl font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                    {c.hero.tarjetaTitulo}<br /><span className="text-sm font-medium opacity-80">{c.hero.tarjetaTexto}</span>
                  </p>
                </div>
              </div>

              <div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full flex flex-col items-center justify-center text-center text-xs font-bold uppercase tracking-wider shadow-lg"
                style={{ background: "var(--accent)", color: "var(--primary-dark)", fontFamily: "var(--font-display)" }}
              >
                <Star size={20} weight="fill" />
                <span className="mt-1">{c.hero.insignia}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CATEGORÍAS DE EQUIPO ====================== */}
      <section id="categorias" className="py-24" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-2xl mb-14">
            <span className="text-sub-display" style={{ color: "var(--accent-dark)" }}>
              {c.categorias.etiqueta}
            </span>
            <h2 className="heading2 mt-3 mb-4" style={{ color: "var(--primary)" }}>
              {c.categorias.titulo} <span className="lowercase">{h1Word}</span>.
            </h2>
            <p className="body1" style={{ color: "var(--secondary)" }}>
              {c.categorias.texto}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.categorias.items.map((cat, i) => (
              <a
                key={i}
                href={cat.enlace || "#"}
                className="group rounded-3xl overflow-hidden transition hover:-translate-y-1 hover:shadow-xl bg-white"
                style={{ border: "1px solid var(--line)" }}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img src={cat.img} alt={cat.nombre} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(10,37,64,0.65) 100%)" }} />
                  <div
                    className="absolute top-4 left-4 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md"
                    style={{ background: "rgba(255,255,255,0.95)", color: "var(--accent-dark)" }}
                  >
                    {iconos[i % iconos.length]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="heading6 mb-2" style={{ color: "var(--primary)" }}>{cat.nombre}</h3>
                  <p className="caption1 mb-3" style={{ color: "var(--secondary)" }}>
                    {cat.desc}
                  </p>
                  <p className="caption2 font-mono mb-4 pb-3 border-b" style={{ color: "var(--accent-dark)", borderColor: "var(--line)" }}>
                    {cat.detalle}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold transition group-hover:gap-2" style={{ color: "var(--primary)" }}>
                    {c.categorias.boton}
                    <ArrowRight size={14} weight="bold" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== MARCA DESTACADA ====================== */}
      <section className="py-24" style={{ background: "var(--primary)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sub-display" style={{ color: "var(--accent-light)" }}>
                {c.marca.etiqueta}
              </span>
              <h2 className="heading2 mt-3 mb-5 text-white">
                {c.marca.titulo}
              </h2>
              <p className="body1 mb-8 text-white/75">
                {c.marca.texto}
              </p>

              <div className="space-y-4 mb-9">
                {c.marca.puntos.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--accent)", color: "var(--primary-dark)" }}>
                      <Check size={12} weight="bold" />
                    </div>
                    <span className="text-white">{b}</span>
                  </div>
                ))}
              </div>

              <a href={c.marca.enlace || "#"} className="btn-accent">
                {c.marca.boton}
                <ArrowRight size={16} weight="bold" />
              </a>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src={c.marca.imagen} alt={c.marca.imagenAlt} className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-6 -left-6 px-5 py-4 rounded-2xl shadow-xl max-w-xs bg-white">
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--accent-dark)" }}>
                  {c.marca.recuadroTitulo}
                </p>
                <p className="caption1" style={{ color: "var(--black)" }}>
                  {c.marca.recuadroTexto}
                </p>
              </div>
            </div>
          </div>

          {/* Strip "También representamos" */}
          <div className="mt-16 pt-10 border-t" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
            <p className="text-xs uppercase tracking-[3px] mb-6 text-center text-white/50 font-semibold">
              {c.marca.otrasTitulo}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {c.marca.otras.map((m, i) => (
                <span
                  key={i}
                  className="text-2xl lg:text-3xl font-bold tracking-tight text-white/40 hover:text-white/70 transition"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================== EQUIPOS DESTACADOS ====================== */}
      <section className="py-24" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-sub-display" style={{ color: "var(--accent-dark)" }}>
                {c.equipos.etiqueta}
              </span>
              <h2 className="heading2 mt-3 mb-4" style={{ color: "var(--primary)" }}>
                {c.equipos.titulo}
              </h2>
              <p className="body1" style={{ color: "var(--secondary)" }}>
                {c.equipos.texto}
              </p>
            </div>
            <a href={c.equipos.enlace || "#"} className="inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3" style={{ color: "var(--primary)" }}>
              {c.equipos.boton}
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {productos.length > 0 ? productos.map((p, i) => (
              <article
                key={p.slug}
                className="group rounded-2xl overflow-hidden transition hover:-translate-y-1 hover:shadow-xl bg-white"
                style={{ border: "1px solid var(--line)" }}
              >
                <div className="aspect-square overflow-hidden relative" style={{ background: "var(--surface)" }}>
                  {p.img ? <img src={p.img} alt={p.nombre} loading="lazy" className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-500" /> : null}
                  {p.etiqueta && (
                    <span
                      className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ background: p.color || (i === 0 ? "var(--accent)" : "var(--primary)"), color: "white" }}
                    >
                      {p.etiqueta}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-title font-bold mb-2" style={{ color: "var(--primary)" }}>{p.nombre}</h3>
                  {p.precio && <p className="caption1 font-semibold mb-1" style={{ color: "var(--accent-dark)" }}>{p.precio}</p>}
                  <p className="caption2 leading-snug mb-4" style={{ color: "var(--secondary)" }}>
                    {p.resumen}
                  </p>
                  <div className="flex gap-2">
                    {(p.ficha || p.tienda) && (
                      <a
                        href={p.ficha || p.tienda}
                        target="_blank"
                        rel="noopener"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition hover:opacity-90"
                        style={{ background: "var(--surface)", color: "var(--primary)" }}
                      >
                        <FileText size={11} weight="bold" /> {p.ficha ? c.equipos.botonFicha : c.equipos.botonTienda}
                      </a>
                    )}
                    <a
                      href={a.waLink}
                      target="_blank"
                      rel="noopener"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition hover:opacity-90"
                      style={{ background: "var(--accent)", color: "white" }}
                    >
                      <WhatsappLogo size={11} weight="fill" /> {c.equipos.botonCotizar}
                    </a>
                  </div>
                </div>
              </article>
            )) : (
            c.equipos.ejemplos.map((e, i) => (
              <article
                key={i}
                className="group rounded-2xl overflow-hidden transition hover:-translate-y-1 hover:shadow-xl bg-white"
                style={{ border: "1px solid var(--line)" }}
              >
                <div className="aspect-square overflow-hidden relative" style={{ background: "var(--surface)" }}>
                  <img src={e.img || c.hero.imagen} alt={e.nombre} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <span
                    className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: i === 0 ? "var(--accent)" : "var(--primary)", color: "white" }}
                  >
                    {e.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-title font-bold mb-2" style={{ color: "var(--primary)" }}>{e.nombre}</h3>
                  <p className="caption2 leading-snug mb-4" style={{ color: "var(--secondary)" }}>
                    {e.desc}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition hover:opacity-90"
                      style={{ background: "var(--surface)", color: "var(--primary)" }}
                    >
                      <FileText size={11} weight="bold" /> {c.equipos.botonFicha}
                    </a>
                    <a
                      href="#"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition hover:opacity-90"
                      style={{ background: "var(--accent)", color: "white" }}
                    >
                      <WhatsappLogo size={11} weight="fill" /> {c.equipos.botonCotizar}
                    </a>
                  </div>
                </div>
              </article>
            ))
            )}
          </div>
        </div>
      </section>

      {/* ====================== SHOWROOM ====================== */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[5/4] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={c.showroom.imagen}
                  alt={c.showroom.imagenAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3"
                style={{ background: "var(--primary)", color: "white" }}
              >
                <MapPin size={28} weight="duotone" style={{ color: "var(--accent-light)" }} />
                <div>
                  <p className="caption2 font-bold uppercase tracking-wider" style={{ color: "var(--accent-light)" }}>{c.showroom.etiquetaFoto}</p>
                  <p className="text-title font-semibold">{c.showroom.ciudad}</p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-sub-display" style={{ color: "var(--accent-dark)" }}>
                {c.showroom.etiqueta}
              </span>
              <h2 className="heading2 mt-3 mb-5" style={{ color: "var(--primary)" }}>
                {c.showroom.titulo}
              </h2>
              <p className="body1 mb-6" style={{ color: "var(--secondary)" }}>
                {c.showroom.texto}
              </p>

              <ul className="space-y-3 mb-9">
                {c.showroom.puntos.map((b, i) => (
                  <li key={i} className="flex items-center gap-3" style={{ color: "var(--black)" }}>
                    <Check size={18} weight="bold" style={{ color: "var(--accent-dark)" }} />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a href={a.waLink} target="_blank" rel="noopener" className="btn-primary">
                  <ChatCircleText size={16} weight="duotone" />
                  {c.showroom.botonAgendar}
                </a>
                <a href={c.showroom.mapa || "#"} target={c.showroom.mapa ? "_blank" : undefined} rel="noopener" className="btn-outline-primary">
                  <MapPin size={16} weight="bold" />
                  {c.showroom.botonMapa}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== DISTRIBUIDORES ====================== */}
      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div
            className="rounded-3xl p-10 lg:p-14 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)" }}
          >
            <div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 70%)" }}
            />
            <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <span className="text-sub-display" style={{ color: "var(--accent-light)" }}>
                  {c.distribuidores.etiqueta}
                </span>
                <h2 className="heading3 mt-3 mb-3 text-white">
                  {c.distribuidores.titulo}
                </h2>
                <p className="caption1 max-w-xl text-white/75">
                  {c.distribuidores.texto}
                </p>
              </div>
              <a href="/distribuidores" className="btn-accent shrink-0">
                {c.distribuidores.boton}
                <ArrowRight size={16} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== BLOG / TIPS ====================== */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-sub-display" style={{ color: "var(--accent-dark)" }}>
                {c.blog.etiqueta}
              </span>
              <h2 className="heading2 mt-3 mb-4" style={{ color: "var(--primary)" }}>
                {c.blog.titulo} <span className="lowercase">{h1Word}</span>.
              </h2>
            </div>
            <a href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3" style={{ color: "var(--primary)" }}>
              {c.blog.boton}
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.length > 0 ? posts.slice(0, 3).map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-3xl overflow-hidden p-7 transition hover:-translate-y-1 hover:shadow-xl bg-white"
                style={{ border: "1px solid var(--line)" }}
              >
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4" style={{ background: "rgba(6,182,212,0.12)", color: "var(--accent-dark)" }}>
                  {post.categoria}
                </span>
                <h3 className="heading6 mb-4 leading-tight group-hover:opacity-80 transition" style={{ color: "var(--primary)" }}>
                  {post.titulo}
                </h3>
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--line)" }}>
                  <span className="caption2" style={{ color: "var(--secondary)" }}>{post.fecha}</span>
                  <CaretRight size={14} weight="bold" style={{ color: "var(--primary)" }} />
                </div>
              </a>
            )) : (
            c.blog.ejemplos.map((e, i) => (
              <a
                key={i}
                href="#"
                className="group rounded-3xl overflow-hidden p-7 transition hover:-translate-y-1 hover:shadow-xl bg-white"
                style={{ border: "1px solid var(--line)" }}
              >
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4" style={{ background: "rgba(6,182,212,0.12)", color: "var(--accent-dark)" }}>
                  {e.categoria}
                </span>
                <h3 className="heading6 mb-4 leading-tight group-hover:opacity-80 transition" style={{ color: "var(--primary)" }}>
                  {e.titulo}
                </h3>
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--line)" }}>
                  <span className="caption2" style={{ color: "var(--secondary)" }}>{e.fecha}</span>
                  <CaretRight size={14} weight="bold" style={{ color: "var(--primary)" }} />
                </div>
              </a>
            ))
            )}
          </div>
        </div>
      </section>

      {/* ====================== CTA FINAL ====================== */}
      <section className="py-20" style={{ background: "var(--primary)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Lightning size={42} weight="duotone" style={{ color: "var(--accent-light)" }} className="mx-auto mb-5" />
            <h2 className="heading2 mb-4 text-white">
              {c.cta.titulo} <span className="lowercase">{h1Word}</span>.
            </h2>
            <p className="body1 mb-8 text-white/75">
              {c.cta.texto}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={a.waLink} target="_blank" rel="noopener" className="btn-accent">
                <WhatsappLogo size={16} weight="fill" />
                {c.cta.botonWhatsapp}
              </a>
              <a href={a.telLink} className="btn-outline-white">
                <Phone size={16} weight="duotone" />
                {c.cta.botonLlamar}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
