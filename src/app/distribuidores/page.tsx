import {
  ArrowRight, WhatsappLogo, CaretRight, House,
  Handshake, FileText, Wrench, ChartBar,
  Check, Envelope, Phone, NumberCircleOne, NumberCircleTwo, NumberCircleThree,
} from "@phosphor-icons/react/dist/ssr";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export const metadata = {
  title: "Sé distribuidor CRT Profesional",
  description:
    "Si tu negocio vende equipo profesional para cafeterías, restaurantes, panaderías o heladerías — únete a la red de distribuidores CRT Profesional. Soporte técnico, fichas y material de venta.",
  alternates: { canonical: "https://crtpro.com.mx/distribuidores" },
  openGraph: {
    title: "Sé distribuidor — CRT Profesional",
    description: "Únete a la red de distribuidores CRT Profesional.",
    url: "https://crtpro.com.mx/distribuidores",
    locale: "es_MX",
    type: "website",
  },
};

// Beneficios — mencionados por Rubén en junta 19-feb:
// "información técnica en cómo usar mantenimiento, cómo instalar características del equipo"
// + Arlet 20-mar: "es una página de apoyo para ellos, para su información"
const beneficios = [
  {
    titulo: "Fichas técnicas",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    icon: <FileText size={28} weight="duotone" />,
  },
  {
    titulo: "Guías de instalación",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    icon: <Wrench size={28} weight="duotone" />,
  },
  {
    titulo: "Material de venta",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    icon: <ChartBar size={28} weight="duotone" />,
  },
  {
    titulo: "Soporte directo",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    icon: <Handshake size={28} weight="duotone" />,
  },
];

const proceso = [
  {
    n: <NumberCircleOne size={32} weight="duotone" />,
    titulo: "Llena el formulario",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    n: <NumberCircleTwo size={32} weight="duotone" />,
    titulo: "Te contactamos",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    n: <NumberCircleThree size={32} weight="duotone" />,
    titulo: "Empiezas a operar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
];

export default function DistribuidoresPage() {
  return (
    <>
      <Navbar activo="Distribuidores" />

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
              <li className="font-semibold" style={{ color: "var(--primary)" }}>Distribuidores</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
              style={{ background: "white", color: "var(--accent-dark)", border: "1px solid var(--line)" }}
            >
              <Handshake size={14} weight="fill" />
              Sé distribuidor CRT Profesional
            </span>
            <h1 className="heading1 mb-6" style={{ color: "var(--primary)" }}>
              Crece tu negocio con{" "}
              <span style={{ color: "var(--accent-dark)" }}>respaldo CRT</span>.
            </h1>
            <p className="body1 mb-9 max-w-xl" style={{ color: "var(--secondary)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#solicitud" className="btn-primary">
                <Envelope size={16} weight="bold" />
                Solicitar info
              </a>
              <a href="#" className="btn-outline-primary">
                <WhatsappLogo size={16} weight="fill" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== BENEFICIOS ====================== */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-2xl mb-14">
            <span className="text-sub-display" style={{ color: "var(--accent-dark)" }}>
              Qué obtienes
            </span>
            <h2 className="heading2 mt-3 mb-4" style={{ color: "var(--primary)" }}>
              Beneficios de ser distribuidor.
            </h2>
            <p className="body1" style={{ color: "var(--secondary)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {beneficios.map((b, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-xl bg-white"
                style={{ border: "1px solid var(--line)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(6,182,212,0.12)", color: "var(--accent-dark)" }}
                >
                  {b.icon}
                </div>
                <h3 className="heading6 mb-2" style={{ color: "var(--primary)" }}>{b.titulo}</h3>
                <p className="caption1" style={{ color: "var(--secondary)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== PROCESO 3 PASOS ====================== */}
      <section className="py-24" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="max-w-2xl mb-14">
            <span className="text-sub-display" style={{ color: "var(--accent-dark)" }}>
              Cómo se hace
            </span>
            <h2 className="heading2 mt-3 mb-4" style={{ color: "var(--primary)" }}>
              Únete en tres pasos.
            </h2>
            <p className="body1" style={{ color: "var(--secondary)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {proceso.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 bg-white"
                style={{ border: "1px solid var(--line)" }}
              >
                <div className="mb-5" style={{ color: "var(--accent-dark)" }}>
                  {p.n}
                </div>
                <h3 className="heading6 mb-2" style={{ color: "var(--primary)" }}>{p.titulo}</h3>
                <p className="caption1" style={{ color: "var(--secondary)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== REQUISITOS + FORMULARIO ====================== */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sub-display" style={{ color: "var(--accent-dark)" }}>
                Quién aplica
              </span>
              <h2 className="heading2 mt-3 mb-5" style={{ color: "var(--primary)" }}>
                ¿Tu negocio puede ser distribuidor?
              </h2>
              <p className="body1 mb-6" style={{ color: "var(--secondary)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

              <div
                className="rounded-2xl p-5 flex items-center gap-4"
                style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "var(--primary)", color: "white" }}
                >
                  <Phone size={20} weight="duotone" />
                </div>
                <div>
                  <p className="caption2 uppercase tracking-wider font-semibold" style={{ color: "var(--accent-dark)" }}>
                    ¿Tienes dudas?
                  </p>
                  <p className="text-title font-semibold" style={{ color: "var(--primary)" }}>
                    Hablemos antes de aplicar
                  </p>
                </div>
                <a
                  href="#"
                  className="ml-auto text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition hover:opacity-90 flex items-center gap-1.5 shrink-0"
                  style={{ background: "var(--accent)", color: "white" }}
                >
                  <WhatsappLogo size={12} weight="fill" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Formulario */}
            <div
              id="solicitud"
              className="rounded-3xl p-8 lg:p-10 shadow-xl bg-white"
              style={{ border: "1px solid var(--line)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: "var(--accent)", color: "var(--primary-dark)" }}
                >
                  <Handshake size={20} weight="duotone" />
                </div>
                <div>
                  <p className="caption2 uppercase tracking-wider font-semibold" style={{ color: "var(--accent-dark)" }}>
                    Solicitud
                  </p>
                  <h3 className="text-title font-bold" style={{ color: "var(--primary)" }}>Sé distribuidor</h3>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="caption2 uppercase tracking-wider font-semibold block mb-2" style={{ color: "var(--secondary)" }}>
                      Nombre comercial
                    </label>
                    <input
                      type="text"
                      placeholder="Mi negocio"
                      className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-accent-dark transition"
                      style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                    />
                  </div>
                  <div>
                    <label className="caption2 uppercase tracking-wider font-semibold block mb-2" style={{ color: "var(--secondary)" }}>
                      Nombre del contacto
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-accent-dark transition"
                      style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="caption2 uppercase tracking-wider font-semibold block mb-2" style={{ color: "var(--secondary)" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="ventas@minegocio.com"
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
                    Estado / zona donde operas
                  </label>
                  <input
                    type="text"
                    placeholder="Nuevo León"
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-accent-dark transition"
                    style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                  />
                </div>

                <div>
                  <label className="caption2 uppercase tracking-wider font-semibold block mb-2" style={{ color: "var(--secondary)" }}>
                    Cuéntanos de tu negocio
                  </label>
                  <textarea
                    rows={3}
                    placeholder="¿Qué equipo distribuyes hoy? ¿A qué sector apuntas?"
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-accent-dark transition resize-none"
                    style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                  />
                </div>

                <button
                  type="button"
                  className="w-full py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ background: "var(--primary)", color: "white" }}
                >
                  <Envelope size={16} weight="bold" />
                  Enviar solicitud
                </button>

                <p className="caption2 text-center" style={{ color: "var(--secondary)" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
