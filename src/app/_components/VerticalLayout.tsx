import type { ReactNode } from "react";
import {
  ArrowRight, WhatsappLogo, MapPin,
  CaretRight, FileText, Phone, Star, Check,
  Lightning, ChatCircleText, House,
} from "@phosphor-icons/react/dist/ssr";
import Navbar, { type NavbarActiveItem } from "./Navbar";
import Footer from "./Footer";

export type Categoria = {
  nombre: string;
  icon: ReactNode;
  img: string;
};

export type VerticalLayoutProps = {
  /** Cuál vertical se ve activa en la navbar */
  verticalActiva: NavbarActiveItem;
  /** Texto del pill del hero (estructural, no marketing) */
  pillText: string;
  /** Icono del pill */
  pillIcon: ReactNode;
  /** Palabra resaltada del H1: "cafetería", "restaurante", "panadería", "heladería" */
  h1Word: string;
  /** Imagen principal del hero */
  heroImg: string;
  heroImgAlt: string;
  /** Categorías de equipo (del brief) */
  categorias: Categoria[];
  /** Strip "también representamos" — array de nombres (ITV, CRT confirmados; resto "Lorem") */
  otrasMarcas: string[];
  /** Imagen del bloque "Marca destacada" */
  marcaImg: string;
  marcaImgAlt: string;
  /** Imagen del showroom (placeholder por ahora) */
  showroomImg: string;
  /** Texto del botón CTA final */
  ctaButtonText: string;
};

export default function VerticalLayout({
  verticalActiva,
  pillText,
  pillIcon,
  h1Word,
  heroImg,
  heroImgAlt,
  categorias,
  otrasMarcas,
  marcaImg,
  marcaImgAlt,
  showroomImg,
  ctaButtonText,
}: VerticalLayoutProps) {
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
                  Inicio
                </a>
              </li>
              <li><CaretRight size={12} weight="bold" style={{ color: "var(--secondary2)" }} /></li>
              <li>Equipa tu negocio</li>
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
                {pillText}
              </span>

              <h1 className="heading1 mb-6" style={{ color: "var(--primary)" }}>
                Equipa tu{" "}
                <span style={{ color: "var(--accent-dark)" }}>{h1Word}</span>.
              </h1>

              <p className="body1 mb-9 max-w-xl" style={{ color: "var(--secondary)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#" className="btn-primary">
                  <WhatsappLogo size={16} weight="fill" />
                  Hablar con un asesor
                </a>
                <a href="#categorias" className="btn-outline-primary">
                  Ver equipos
                  <ArrowRight size={16} weight="bold" />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t" style={{ borderColor: "var(--line)" }}>
                {[
                  { value: "Lorem", label: "ipsum dolor sit" },
                  { value: "Lorem", label: "ipsum dolor sit" },
                  { value: "Showroom", label: "Monterrey, NL" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="heading5" style={{ color: "var(--primary)" }}>{s.value}</div>
                    <div className="caption1" style={{ color: "var(--secondary)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img src={heroImg} alt={heroImgAlt} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(10,37,64,0.9) 100%)" }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3" style={{ background: "var(--accent)", color: "var(--primary-dark)" }}>
                    Lorem ipsum
                  </span>
                  <p className="text-white text-2xl font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                    Lorem<br /><span className="text-sm font-medium opacity-80">Lorem ipsum dolor sit amet</span>
                  </p>
                </div>
              </div>

              <div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full flex flex-col items-center justify-center text-center text-xs font-bold uppercase tracking-wider shadow-lg"
                style={{ background: "var(--accent)", color: "var(--primary-dark)", fontFamily: "var(--font-display)" }}
              >
                <Star size={20} weight="fill" />
                <span className="mt-1">Lorem</span>
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
              Categorías de equipo
            </span>
            <h2 className="heading2 mt-3 mb-4" style={{ color: "var(--primary)" }}>
              Lo que necesitas para tu <span className="lowercase">{h1Word}</span>.
            </h2>
            <p className="body1" style={{ color: "var(--secondary)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorias.map((cat, i) => (
              <a
                key={i}
                href="#"
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
                    {cat.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="heading6 mb-2" style={{ color: "var(--primary)" }}>{cat.nombre}</h3>
                  <p className="caption1 mb-3" style={{ color: "var(--secondary)" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="caption2 font-mono mb-4 pb-3 border-b" style={{ color: "var(--accent-dark)", borderColor: "var(--line)" }}>
                    Lorem ipsum · dolor sit · amet · consectetur
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold transition group-hover:gap-2" style={{ color: "var(--primary)" }}>
                    Ver línea
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
                Marca destacada
              </span>
              <h2 className="heading2 mt-3 mb-5 text-white">
                Lorem.
              </h2>
              <p className="body1 mb-8 text-white/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="space-y-4 mb-9">
                {[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt",
                  "Lorem ipsum dolor sit amet, ut labore et dolore magna",
                  "Showroom en Monterrey para probar antes de comprar",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--accent)", color: "var(--primary-dark)" }}>
                      <Check size={12} weight="bold" />
                    </div>
                    <span className="text-white">{b}</span>
                  </div>
                ))}
              </div>

              <a href="#" className="btn-accent">
                Ver línea completa
                <ArrowRight size={16} weight="bold" />
              </a>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src={marcaImg} alt={marcaImgAlt} className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-6 -left-6 px-5 py-4 rounded-2xl shadow-xl max-w-xs bg-white">
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--accent-dark)" }}>
                  Lorem ipsum
                </p>
                <p className="caption1" style={{ color: "var(--black)" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>

          {/* Strip "También representamos" */}
          <div className="mt-16 pt-10 border-t" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
            <p className="text-xs uppercase tracking-[3px] mb-6 text-center text-white/50 font-semibold">
              También representamos
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {otrasMarcas.map((m, i) => (
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
                Equipos destacados
              </span>
              <h2 className="heading2 mt-3 mb-4" style={{ color: "var(--primary)" }}>
                Lo esencial para arrancar.
              </h2>
              <p className="body1" style={{ color: "var(--secondary)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3" style={{ color: "var(--primary)" }}>
              Ver catálogo
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[0, 1, 2, 3].map((i) => (
              <article
                key={i}
                className="group rounded-2xl overflow-hidden transition hover:-translate-y-1 hover:shadow-xl bg-white"
                style={{ border: "1px solid var(--line)" }}
              >
                <div className="aspect-square overflow-hidden relative" style={{ background: "var(--surface)" }}>
                  <img src={heroImg} alt="Lorem ipsum" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <span
                    className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: i === 0 ? "var(--accent)" : "var(--primary)", color: "white" }}
                  >
                    Lorem · ipsum
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-title font-bold mb-2" style={{ color: "var(--primary)" }}>Lorem Ipsum Dolor</h3>
                  <p className="caption2 leading-snug mb-4" style={{ color: "var(--secondary)" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition hover:opacity-90"
                      style={{ background: "var(--surface)", color: "var(--primary)" }}
                    >
                      <FileText size={11} weight="bold" /> Ficha
                    </a>
                    <a
                      href="#"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition hover:opacity-90"
                      style={{ background: "var(--accent)", color: "white" }}
                    >
                      <WhatsappLogo size={11} weight="fill" /> Cotizar
                    </a>
                  </div>
                </div>
              </article>
            ))}
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
                  src={showroomImg}
                  alt="Showroom CRT Profesional en Monterrey, Nuevo León"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3"
                style={{ background: "var(--primary)", color: "white" }}
              >
                <MapPin size={28} weight="duotone" style={{ color: "var(--accent-light)" }} />
                <div>
                  <p className="caption2 font-bold uppercase tracking-wider" style={{ color: "var(--accent-light)" }}>Showroom</p>
                  <p className="text-title font-semibold">Monterrey, Nuevo León</p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-sub-display" style={{ color: "var(--accent-dark)" }}>
                Showroom Monterrey
              </span>
              <h2 className="heading2 mt-3 mb-5" style={{ color: "var(--primary)" }}>
                Ven a probar antes de comprar.
              </h2>
              <p className="body1 mb-6" style={{ color: "var(--secondary)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
              </p>

              <ul className="space-y-3 mb-9">
                {[
                  "Lorem ipsum dolor sit amet consectetur",
                  "Lorem ipsum dolor sit amet adipiscing",
                  "Lorem ipsum dolor sit amet incididunt",
                  "Lorem ipsum dolor sit amet veniam",
                ].map((b, i) => (
                  <li key={i} className="flex items-center gap-3" style={{ color: "var(--black)" }}>
                    <Check size={18} weight="bold" style={{ color: "var(--accent-dark)" }} />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a href="#" className="btn-primary">
                  <ChatCircleText size={16} weight="duotone" />
                  Agendar visita
                </a>
                <a href="#" className="btn-outline-primary">
                  <MapPin size={16} weight="bold" />
                  Ver en mapa
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
                  ¿Eres distribuidor?
                </span>
                <h2 className="heading3 mt-3 mb-3 text-white">
                  Accede a fichas extendidas, manuales y guías de instalación.
                </h2>
                <p className="caption1 max-w-xl text-white/75">
                  Si vendes equipo CRT en tu zona, regístrate para acceder al portal de distribuidores con material técnico completo y soporte directo.
                </p>
              </div>
              <a href="#" className="btn-accent shrink-0">
                Registrar mi negocio
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
                Blog y recursos
              </span>
              <h2 className="heading2 mt-3 mb-4" style={{ color: "var(--primary)" }}>
                Tips para tu <span className="lowercase">{h1Word}</span>.
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3" style={{ color: "var(--primary)" }}>
              Ver blog completo
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <a
                key={i}
                href="#"
                className="group rounded-3xl overflow-hidden p-7 transition hover:-translate-y-1 hover:shadow-xl bg-white"
                style={{ border: "1px solid var(--line)" }}
              >
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4" style={{ background: "rgba(6,182,212,0.12)", color: "var(--accent-dark)" }}>
                  Lorem
                </span>
                <h3 className="heading6 mb-4 leading-tight group-hover:opacity-80 transition" style={{ color: "var(--primary)" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit {i === 0 ? "sed do eiusmod" : i === 1 ? "ut labore" : "quis nostrud"}.
                </h3>
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--line)" }}>
                  <span className="caption2" style={{ color: "var(--secondary)" }}>Por publicar · —</span>
                  <CaretRight size={14} weight="bold" style={{ color: "var(--primary)" }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== CTA FINAL ====================== */}
      <section className="py-20" style={{ background: "var(--primary)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Lightning size={42} weight="duotone" style={{ color: "var(--accent-light)" }} className="mx-auto mb-5" />
            <h2 className="heading2 mb-4 text-white">
              Cotiza tu <span className="lowercase">{h1Word}</span>.
            </h2>
            <p className="body1 mb-8 text-white/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#" className="btn-accent">
                <WhatsappLogo size={16} weight="fill" />
                {ctaButtonText}
              </a>
              <a href="#" className="btn-outline-white">
                <Phone size={16} weight="duotone" />
                Llamar al showroom
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
