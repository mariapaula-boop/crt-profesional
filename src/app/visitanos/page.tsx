import {
  ArrowRight, WhatsappLogo, CaretRight, House, MapPin,
  ChatCircleText, Clock, Phone, Check, Calendar,
} from "@phosphor-icons/react/dist/ssr";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export const metadata = {
  title: "Visítanos · Showroom Monterrey · CRT Profesional",
  description:
    "Ven a probar antes de comprar. Showroom CRT Profesional en Monterrey, Nuevo León. Cafeteras Bezzera, máquinas de hielo, vitrinas y más en operación.",
  alternates: { canonical: "https://crtpro.com.mx/visitanos" },
  openGraph: {
    title: "Visítanos — Showroom Monterrey · CRT Profesional",
    description: "Ven a probar antes de comprar. Showroom en Monterrey, NL.",
    url: "https://crtpro.com.mx/visitanos",
    locale: "es_MX",
    type: "website",
  },
};

export default function VisitanosPage() {
  return (
    <>
      <Navbar activo="Visítanos" />

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
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary)" }}>
              <li>
                <a href="/" className="flex items-center gap-1.5 hover:opacity-70 transition">
                  <House size={14} weight="duotone" />
                  Inicio
                </a>
              </li>
              <li><CaretRight size={12} weight="bold" style={{ color: "var(--secondary2)" }} /></li>
              <li className="font-semibold" style={{ color: "var(--primary)" }}>Visítanos</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
                style={{ background: "white", color: "var(--accent-dark)", border: "1px solid var(--line)" }}
              >
                <MapPin size={14} weight="fill" />
                Showroom Monterrey
              </span>

              <h1 className="heading1 mb-6" style={{ color: "var(--primary)" }}>
                Ven a probar{" "}
                <span style={{ color: "var(--accent-dark)" }}>antes de comprar</span>.
              </h1>

              <p className="body1 mb-9 max-w-xl" style={{ color: "var(--secondary)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#" className="btn-primary">
                  <ChatCircleText size={16} weight="duotone" />
                  Agendar visita
                </a>
                <a href="#mapa" className="btn-outline-primary">
                  Ver en mapa
                  <ArrowRight size={16} weight="bold" />
                </a>
              </div>

              {/* Datos de contacto rápidos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t" style={{ borderColor: "var(--line)" }}>
                {[
                  { icon: <MapPin size={20} weight="duotone" />, label: "Dirección", value: "Monterrey, Nuevo León" },
                  { icon: <Clock size={20} weight="duotone" />, label: "Horario", value: "Lorem ipsum dolor" },
                  { icon: <Phone size={20} weight="duotone" />, label: "Teléfono", value: "Lorem ipsum" },
                ].map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(6,182,212,0.12)", color: "var(--accent-dark)" }}
                    >
                      {d.icon}
                    </div>
                    <div>
                      <p className="caption2 uppercase tracking-wider font-semibold" style={{ color: "var(--secondary)" }}>{d.label}</p>
                      <p className="text-sm font-semibold" style={{ color: "var(--primary)" }}>{d.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagen showroom */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=900&q=85&auto=format&fit=crop"
                  alt="Showroom CRT Profesional en Monterrey, Nuevo León"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(10,37,64,0.9) 100%)" }} />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="caption2 uppercase tracking-wider font-bold mb-2" style={{ color: "var(--accent-light)" }}>
                    Visítanos
                  </p>
                  <p className="text-2xl font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                    Showroom CRT Pro<br />
                    <span className="text-sm font-medium opacity-80">Monterrey, Nuevo León</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== QUÉ HAY EN EL SHOWROOM ====================== */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sub-display" style={{ color: "var(--accent-dark)" }}>
                Qué encuentras
              </span>
              <h2 className="heading2 mt-3 mb-5" style={{ color: "var(--primary)" }}>
                Equipos en operación, listos para probar.
              </h2>
              <p className="body1 mb-8" style={{ color: "var(--secondary)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>

              <ul className="space-y-3">
                {[
                  "Lorem ipsum dolor sit amet consectetur",
                  "Lorem ipsum dolor sit amet adipiscing elit",
                  "Lorem ipsum dolor sit amet sed do eiusmod",
                  "Lorem ipsum dolor sit amet ut labore",
                  "Lorem ipsum dolor sit amet veniam",
                ].map((b, i) => (
                  <li key={i} className="flex items-center gap-3" style={{ color: "var(--black)" }}>
                    <Check size={18} weight="bold" style={{ color: "var(--accent-dark)" }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Agenda visita */}
            <div
              className="rounded-3xl p-8 lg:p-10 shadow-xl bg-white"
              style={{ border: "1px solid var(--line)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: "var(--accent)", color: "var(--primary-dark)" }}
                >
                  <Calendar size={20} weight="duotone" />
                </div>
                <div>
                  <p className="caption2 uppercase tracking-wider font-semibold" style={{ color: "var(--accent-dark)" }}>
                    Agenda tu visita
                  </p>
                  <h3 className="text-title font-bold" style={{ color: "var(--primary)" }}>Te esperamos</h3>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="caption2 uppercase tracking-wider font-semibold block mb-2" style={{ color: "var(--secondary)" }}>
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-accent-dark transition"
                      style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                    />
                  </div>
                  <div>
                    <label className="caption2 uppercase tracking-wider font-semibold block mb-2" style={{ color: "var(--secondary)" }}>
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="81 1234 5678"
                      className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-accent-dark transition"
                      style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="caption2 uppercase tracking-wider font-semibold block mb-2" style={{ color: "var(--secondary)" }}>
                    ¿Qué equipo te interesa probar?
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-accent-dark transition"
                    style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                  >
                    <option>Selecciona…</option>
                    <option>Cafetería</option>
                    <option>Restaurante</option>
                    <option>Panadería</option>
                    <option>Heladería</option>
                  </select>
                </div>

                <div>
                  <label className="caption2 uppercase tracking-wider font-semibold block mb-2" style={{ color: "var(--secondary)" }}>
                    Fecha preferida
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-accent-dark transition"
                    style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                  />
                </div>

                <button
                  type="button"
                  className="w-full py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ background: "var(--primary)", color: "white" }}
                >
                  <Calendar size={16} weight="bold" />
                  Agendar visita
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== MAPA ====================== */}
      <section id="mapa" className="py-24" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="text-sub-display" style={{ color: "var(--accent-dark)" }}>
              Cómo llegar
            </span>
            <h2 className="heading2 mt-3 mb-4" style={{ color: "var(--primary)" }}>
              Te esperamos en Monterrey.
            </h2>
            <p className="body1" style={{ color: "var(--secondary)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
          </div>

          {/* Placeholder mapa — reemplazar por iframe Google Maps real cuando se confirme dirección */}
          <div
            className="rounded-3xl overflow-hidden shadow-xl aspect-[16/9] relative flex items-center justify-center"
            style={{ background: "var(--primary)" }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            <div className="relative z-10 text-center text-white">
              <MapPin size={64} weight="duotone" style={{ color: "var(--accent-light)" }} className="mx-auto mb-4" />
              <p className="heading4 mb-2">Monterrey, Nuevo León</p>
              <p className="caption1 opacity-75 max-w-md">
                Dirección y mapa pendiente — confirmaremos cuando esté lista la dirección exacta del showroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CTA WHATSAPP ====================== */}
      <section className="py-20" style={{ background: "var(--primary)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <WhatsappLogo size={42} weight="duotone" style={{ color: "var(--accent-light)" }} className="mx-auto mb-5" />
            <h2 className="heading2 mb-4 text-white">¿Prefieres avisar primero?</h2>
            <p className="body1 mb-8 text-white/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
            <a href="#" className="btn-accent">
              <WhatsappLogo size={16} weight="fill" />
              Confirmar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
