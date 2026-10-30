import {
  ArrowRight, WhatsappLogo, CaretRight, House,
  Handshake, FileText, Wrench, ChartBar,
  Check, Envelope, Phone, NumberCircleOne, NumberCircleTwo, NumberCircleThree,
} from "@phosphor-icons/react/dist/ssr";
import { contenido } from "@/lib/cms";
import { distribuidores } from "@/contenido/secundarias";
import { getAjustes } from "@/contenido/ajustes";
import { metadataCon } from "@/contenido/comun";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

const metadataBase = {
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

export async function generateMetadata() {
  const c = await contenido(distribuidores);
  return metadataCon(c.seo, distribuidores.campos.seo.defecto, metadataBase);
}

// Textos: src/contenido/secundarias.ts (editables en el administrador). Aquí los íconos.
// Beneficios — mencionados por Rubén en junta 19-feb: "información técnica en cómo usar
// mantenimiento, cómo instalar características del equipo" + Arlet 20-mar: "es una página
// de apoyo para ellos, para su información".
const iconosBeneficios = [
  <FileText key="0" size={28} weight="duotone" />,
  <Wrench key="1" size={28} weight="duotone" />,
  <ChartBar key="2" size={28} weight="duotone" />,
  <Handshake key="3" size={28} weight="duotone" />,
];
const iconosPasos = [
  <NumberCircleOne key="0" size={32} weight="duotone" />,
  <NumberCircleTwo key="1" size={32} weight="duotone" />,
  <NumberCircleThree key="2" size={32} weight="duotone" />,
];

export default async function DistribuidoresPage() {
  const [c, a] = await Promise.all([contenido(distribuidores), getAjustes()]);
  const beneficios = c.beneficios.items.map((b, i) => ({ ...b, icon: iconosBeneficios[i % iconosBeneficios.length] }));
  const proceso = c.proceso.pasos.map((p, i) => ({ ...p, n: iconosPasos[i % iconosPasos.length] }));
  return (
    <>
      <Navbar activo="/distribuidores" />

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
                  {c.hero.migaInicio}
                </a>
              </li>
              <li><CaretRight size={12} weight="bold" style={{ color: "var(--secondary2)" }} /></li>
              <li className="font-semibold" style={{ color: "var(--primary)" }}>{c.hero.migaPagina}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
              style={{ background: "white", color: "var(--accent-dark)", border: "1px solid var(--line)" }}
            >
              <Handshake size={14} weight="fill" />
              {c.hero.pill}
            </span>
            <h1 className="heading1 mb-6" style={{ color: "var(--primary)" }}>
              {c.hero.titulo}{" "}
              <span style={{ color: "var(--accent-dark)" }}>{c.hero.resaltado}</span>.
            </h1>
            <p className="body1 mb-9 max-w-xl" style={{ color: "var(--secondary)" }}>
              {c.hero.texto}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#solicitud" className="btn-primary">
                <Envelope size={16} weight="bold" />
                {c.hero.botonSolicitud}
              </a>
              <a href={a.waLink} target="_blank" rel="noopener" className="btn-outline-primary">
                <WhatsappLogo size={16} weight="fill" />
                {c.hero.botonWhatsapp}
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
              {c.beneficios.etiqueta}
            </span>
            <h2 className="heading2 mt-3 mb-4" style={{ color: "var(--primary)" }}>
              {c.beneficios.titulo}
            </h2>
            <p className="body1" style={{ color: "var(--secondary)" }}>
              {c.beneficios.texto}
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
              {c.proceso.etiqueta}
            </span>
            <h2 className="heading2 mt-3 mb-4" style={{ color: "var(--primary)" }}>
              {c.proceso.titulo}
            </h2>
            <p className="body1" style={{ color: "var(--secondary)" }}>
              {c.proceso.texto}
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
                {c.requisitos.etiqueta}
              </span>
              <h2 className="heading2 mt-3 mb-5" style={{ color: "var(--primary)" }}>
                {c.requisitos.titulo}
              </h2>
              <p className="body1 mb-6" style={{ color: "var(--secondary)" }}>
                {c.requisitos.texto}
              </p>

              <ul className="space-y-3 mb-9">
                {c.requisitos.lista.map((b, i) => (
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
                    {c.requisitos.dudasTitulo}
                  </p>
                  <p className="text-title font-semibold" style={{ color: "var(--primary)" }}>
                    {c.requisitos.dudasTexto}
                  </p>
                </div>
                <a
                  href={a.waLink}
                  target="_blank"
                  rel="noopener"
                  className="ml-auto text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition hover:opacity-90 flex items-center gap-1.5 shrink-0"
                  style={{ background: "var(--accent)", color: "white" }}
                >
                  <WhatsappLogo size={12} weight="fill" />
                  {c.requisitos.dudasBoton}
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
                    {c.requisitos.formEtiqueta}
                  </p>
                  <h3 className="text-title font-bold" style={{ color: "var(--primary)" }}>{c.requisitos.formTitulo}</h3>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="caption2 uppercase tracking-wider font-semibold block mb-2" style={{ color: "var(--secondary)" }}>
                      {c.requisitos.comercialEtiqueta}
                    </label>
                    <input
                      type="text"
                      placeholder={c.requisitos.comercialEjemplo}
                      className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-accent-dark transition"
                      style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                    />
                  </div>
                  <div>
                    <label className="caption2 uppercase tracking-wider font-semibold block mb-2" style={{ color: "var(--secondary)" }}>
                      {c.requisitos.contactoEtiqueta}
                    </label>
                    <input
                      type="text"
                      placeholder={c.requisitos.contactoEjemplo}
                      className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-accent-dark transition"
                      style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="caption2 uppercase tracking-wider font-semibold block mb-2" style={{ color: "var(--secondary)" }}>
                      {c.requisitos.correoEtiqueta}
                    </label>
                    <input
                      type="email"
                      placeholder={c.requisitos.correoEjemplo}
                      className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-accent-dark transition"
                      style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                    />
                  </div>
                  <div>
                    <label className="caption2 uppercase tracking-wider font-semibold block mb-2" style={{ color: "var(--secondary)" }}>
                      {c.requisitos.telefonoEtiqueta}
                    </label>
                    <input
                      type="tel"
                      placeholder={c.requisitos.telefonoEjemplo}
                      className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-accent-dark transition"
                      style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="caption2 uppercase tracking-wider font-semibold block mb-2" style={{ color: "var(--secondary)" }}>
                    {c.requisitos.zonaEtiqueta}
                  </label>
                  <input
                    type="text"
                    placeholder={c.requisitos.zonaEjemplo}
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-accent-dark transition"
                    style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                  />
                </div>

                <div>
                  <label className="caption2 uppercase tracking-wider font-semibold block mb-2" style={{ color: "var(--secondary)" }}>
                    {c.requisitos.mensajeEtiqueta}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={c.requisitos.mensajeEjemplo}
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
                  {c.requisitos.formBoton}
                </button>

                <p className="caption2 text-center" style={{ color: "var(--secondary)" }}>
                  {c.requisitos.formNota}
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
