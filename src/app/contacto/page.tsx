import {
  ArrowRight, WhatsappLogo, CaretRight, House, MapPin,
  Envelope, Phone, Handshake, ChatCircleText,
  InstagramLogo, FacebookLogo, LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export const metadata = {
  title: "Contacto · CRT Profesional",
  description:
    "Habla con un asesor CRT Profesional. WhatsApp, formulario y showroom Monterrey. Atendemos cafeterías, restaurantes, panaderías y heladerías independientes.",
  alternates: { canonical: "https://crtpro.com.mx/contacto" },
  openGraph: {
    title: "Contacto — CRT Profesional",
    description: "Habla con un asesor. WhatsApp, formulario y showroom Monterrey.",
    url: "https://crtpro.com.mx/contacto",
    locale: "es_MX",
    type: "website",
  },
};

const canales = [
  {
    icon: <WhatsappLogo size={28} weight="duotone" />,
    titulo: "WhatsApp",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    cta: "Abrir chat",
    href: "#",
    primary: true,
  },
  {
    icon: <Envelope size={28} weight="duotone" />,
    titulo: "Email",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    cta: "Lorem ipsum",
    href: "#",
  },
  {
    icon: <Phone size={28} weight="duotone" />,
    titulo: "Teléfono",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    cta: "Lorem ipsum",
    href: "#",
  },
  {
    icon: <Handshake size={28} weight="duotone" />,
    titulo: "Distribuidores",
    desc: "Acceso a fichas extendidas, manuales y guías técnicas.",
    cta: "Registrarme",
    href: "/distribuidores",
  },
];

export default function ContactoPage() {
  return (
    <>
      <Navbar activo="Contacto" />

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
              <li className="font-semibold" style={{ color: "var(--primary)" }}>Contacto</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
              style={{ background: "white", color: "var(--accent-dark)", border: "1px solid var(--line)" }}
            >
              <ChatCircleText size={14} weight="fill" />
              Estamos para ayudarte
            </span>
            <h1 className="heading1 mb-6" style={{ color: "var(--primary)" }}>
              Hablemos de tu{" "}
              <span style={{ color: "var(--accent-dark)" }}>proyecto</span>.
            </h1>
            <p className="body1 max-w-xl" style={{ color: "var(--secondary)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* ====================== CANALES DE CONTACTO ====================== */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {canales.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="group rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: c.primary ? "var(--primary)" : "white",
                  border: c.primary ? "1px solid var(--primary)" : "1px solid var(--line)",
                  color: c.primary ? "white" : "var(--black)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: c.primary ? "rgba(255,255,255,0.12)" : "rgba(6,182,212,0.12)",
                    color: c.primary ? "var(--accent-light)" : "var(--accent-dark)",
                  }}
                >
                  {c.icon}
                </div>
                <h3
                  className="heading6 mb-2"
                  style={{ color: c.primary ? "white" : "var(--primary)" }}
                >
                  {c.titulo}
                </h3>
                <p
                  className="caption1 mb-5"
                  style={{ color: c.primary ? "rgba(255,255,255,0.75)" : "var(--secondary)" }}
                >
                  {c.desc}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-sm font-semibold transition group-hover:gap-2"
                  style={{ color: c.primary ? "var(--accent-light)" : "var(--accent-dark)" }}
                >
                  {c.cta}
                  <ArrowRight size={14} weight="bold" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== FORMULARIO + INFO ====================== */}
      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
            {/* Info lateral */}
            <div>
              <span className="text-sub-display" style={{ color: "var(--accent-dark)" }}>
                Pasamos a verte
              </span>
              <h2 className="heading2 mt-3 mb-5" style={{ color: "var(--primary)" }}>
                Showroom Monterrey.
              </h2>
              <p className="body1 mb-8" style={{ color: "var(--secondary)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  { icon: <MapPin size={20} weight="duotone" />, label: "Dirección", value: "Monterrey, Nuevo León" },
                  { icon: <Phone size={20} weight="duotone" />, label: "Teléfono", value: "Lorem ipsum" },
                  { icon: <Envelope size={20} weight="duotone" />, label: "Email", value: "Lorem ipsum" },
                ].map((d, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(6,182,212,0.12)", color: "var(--accent-dark)" }}
                    >
                      {d.icon}
                    </div>
                    <div>
                      <p className="caption2 uppercase tracking-wider font-semibold" style={{ color: "var(--secondary)" }}>{d.label}</p>
                      <p className="text-title font-semibold" style={{ color: "var(--primary)" }}>{d.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Redes */}
              <div>
                <p className="caption2 uppercase tracking-wider font-semibold mb-3" style={{ color: "var(--secondary)" }}>
                  Síguenos
                </p>
                <div className="flex gap-2">
                  {[
                    { Icon: InstagramLogo, label: "Instagram" },
                    { Icon: FacebookLogo, label: "Facebook" },
                    { Icon: LinkedinLogo, label: "LinkedIn" },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition hover:opacity-80"
                      style={{ background: "var(--primary)", color: "white" }}
                      aria-label={label}
                    >
                      <Icon size={18} weight="duotone" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div
              className="rounded-3xl p-8 lg:p-10 shadow-xl bg-white"
              style={{ border: "1px solid var(--line)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: "var(--accent)", color: "var(--primary-dark)" }}
                >
                  <Envelope size={20} weight="duotone" />
                </div>
                <div>
                  <p className="caption2 uppercase tracking-wider font-semibold" style={{ color: "var(--accent-dark)" }}>
                    Formulario
                  </p>
                  <h3 className="text-title font-bold" style={{ color: "var(--primary)" }}>Mándanos un mensaje</h3>
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
                      Negocio
                    </label>
                    <input
                      type="text"
                      placeholder="Mi cafetería"
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
                      placeholder="tu@email.com"
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
                    Tipo de negocio
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
                    <option>Distribuidor</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="caption2 uppercase tracking-wider font-semibold block mb-2" style={{ color: "var(--secondary)" }}>
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos qué equipo necesitas…"
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
                  Enviar mensaje
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
