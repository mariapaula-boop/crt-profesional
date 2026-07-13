import {
  ArrowRight, Phone, Envelope, MapPin, WhatsappLogo,
  List, Coffee, Bread, IceCream, ForkKnife,
  Truck, Storefront,
  Sparkle, FileText, Handshake,
  InstagramLogo, FacebookLogo, LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "CRT Profesional — Equipa tu cafetería, restaurante, panadería o heladería",
  description:
    "Catálogo profesional para distribuidores y dueños de negocio. Cafeteras, batidoras, vitrinas, máquinas de helado, hornos. Cotiza por WhatsApp.",
};

const verticales = [
  {
    nombre: "Restaurantes",
    slug: "restaurante",
    desc: "Hornos de convección, lavavajillas industriales, procesadores, empacadoras y refrigeración para tu cocina.",
    icon: <ForkKnife size={28} weight="duotone" />,
    color: "var(--primary-dark)",
    img: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80&auto=format&fit=crop",
    items: "+ 60 productos",
  },
  {
    nombre: "Cafeterías",
    slug: "cafeteria",
    desc: "Cafeteras industriales Bezzera, molinos, vitrinas mostrador, máquinas de hielo bajo barra, granita y frappé.",
    icon: <Coffee size={28} weight="duotone" />,
    color: "var(--primary)",
    img: "https://images.unsplash.com/photo-1545418314-7ce0b9b53901?w=800&q=80&auto=format&fit=crop",
    items: "+ 45 productos",
  },
  {
    nombre: "Panadería",
    slug: "panaderia",
    desc: "Amasadoras, batidoras, hornos rotativos, vitrinas de exhibición y mesas de trabajo en acero inoxidable.",
    icon: <Bread size={28} weight="duotone" />,
    color: "var(--primary-light)",
    img: "https://images.unsplash.com/photo-1711672284661-bd70e38f31b2?w=800&q=80&auto=format&fit=crop",
    items: "+ 35 productos",
  },
  {
    nombre: "Helados",
    slug: "heladeria",
    desc: "Máquinas de helado suave, vitrinas exhibidoras, refrigeradores de paleta y equipos para gelaterías.",
    icon: <IceCream size={28} weight="duotone" />,
    color: "var(--accent)",
    img: "https://images.unsplash.com/photo-1560801619-01d71da0f70c?w=800&q=80&auto=format&fit=crop",
    items: "+ 25 productos",
  },
];

const productos = [
  {
    nombre: "Cafetera Bezzera espresso 2 grupos",
    tag: "Cafetería",
    color: "var(--primary)",
    img: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80&auto=format&fit=crop",
  },
  {
    nombre: "Batidora industrial Adler 60L",
    tag: "Panadería",
    color: "var(--primary-light)",
    img: "https://images.unsplash.com/photo-1739294525052-770fcecdd6b6?w=600&q=80&auto=format&fit=crop",
  },
  {
    nombre: "Vitrina mostrador para pasteles",
    tag: "Cafetería",
    color: "var(--primary)",
    img: "https://images.unsplash.com/photo-1604443402123-0bf4dd913f05?w=600&q=80&auto=format&fit=crop",
  },
  {
    nombre: "Horno rotativo para panadería",
    tag: "Panadería",
    color: "var(--primary-light)",
    img: "https://images.unsplash.com/photo-1682071308247-04c65c28bba5?w=600&q=80&auto=format&fit=crop",
  },
];

const marcas = ["ITV", "Bezzera", "Fricon", "Adler", "LF", "CRT Pro"];

const distribuidorBeneficios = [
  { icon: <FileText size={22} weight="duotone" />, titulo: "Fichas técnicas completas", desc: "Manuales de operación, hojas de especificación y videos de instalación para cada equipo." },
  { icon: <Handshake size={22} weight="duotone" />, titulo: "Atención personalizada", desc: "Un asesor dedicado por región. WhatsApp, llamada o visita a tu negocio." },
  { icon: <Truck size={22} weight="duotone" />, titulo: "Entrega nacional", desc: "Cobertura en toda la república. Logística directa desde almacén Monterrey o Querétaro." },
  { icon: <Sparkle size={22} weight="duotone" />, titulo: "Refacciones y servicio", desc: "Refacciones originales y técnicos certificados para mantenimiento preventivo." },
];

const blog = [
  { categoria: "Cafetería", titulo: "Cómo equipar una cafetería desde cero: la lista completa", fecha: "May 2026", img: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80&auto=format&fit=crop", color: "var(--primary)" },
  { categoria: "Panadería", titulo: "Amasadora espiral vs planetaria: cuál conviene para tu producción", fecha: "Abril 2026", img: "https://images.unsplash.com/photo-1739294525052-770fcecdd6b6?w=800&q=80&auto=format&fit=crop", color: "var(--primary-light)" },
  { categoria: "Helados", titulo: "Máquina de helado suave: qué medir antes de comprar tu primer equipo", fecha: "Abril 2026", img: "https://images.unsplash.com/photo-1560801619-01d71da0f70c?w=800&q=80&auto=format&fit=crop", color: "var(--accent)" },
];

export default function Home() {
  return (
    <>
      {/* ====================== NAVBAR — claro sobre cream ====================== */}
      <nav className="absolute top-0 left-0 right-0 z-30">
        <div className="container flex items-center justify-between py-5">
          <a href="/" className="flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)", color: "var(--primary)" }}>
              CRT
            </span>
            <span className="text-xs font-semibold uppercase tracking-[2px] px-2 py-0.5 rounded-full" style={{ background: "var(--primary)", color: "white" }}>
              Profesional
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {[
              { label: "Restaurantes", href: "/restaurante" },
              { label: "Cafeterías", href: "/cafeteria" },
              { label: "Panadería", href: "/panaderia" },
              { label: "Helados", href: "/heladeria" },
              { label: "Marcas", href: "#" },
              { label: "Blog", href: "#" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium hover:text-accent-dark transition" style={{ color: "var(--black)" }}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition flex items-center gap-1.5" style={{ background: "var(--primary)", color: "white" }}>
              <WhatsappLogo size={14} weight="fill" />
              Cotizar
            </a>
          </div>

          <button className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--primary)", color: "white" }}>
            <List size={20} weight="bold" />
          </button>
        </div>
      </nav>

      {/* ====================== HERO — cream split ====================== */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "var(--surface)" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />

        <div className="container relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ background: "white", color: "var(--primary)", border: "1px solid var(--line)" }}>
                <Storefront size={14} weight="fill" />
                Para distribuidores y dueños de negocio
              </span>
              <h1 className="heading1 mb-6" style={{ color: "var(--primary)" }}>
                Equipa tu negocio con{" "}
                <span style={{ color: "var(--primary-light)" }}>fichas técnicas</span>,{" "}
                <span style={{ color: "var(--primary)" }}>asesoría real</span>{" "}
                y entrega nacional.
              </h1>
              <p className="body1 mb-10 max-w-xl" style={{ color: "var(--secondary)" }}>
                Catálogo profesional con marcas representadas (ITV, Bezzera, Fricon, Adler) más la línea propia CRT Pro. Cotiza por WhatsApp directo con un asesor que sí conoce el equipo.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="btn-primary">
                  <WhatsappLogo size={18} weight="fill" />
                  Hablar con un asesor
                </a>
                <a href="#verticales" className="btn-outline-primary">
                  Explorar catálogo
                  <ArrowRight size={18} weight="bold" />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t" style={{ borderColor: "var(--line)" }}>
                {[
                  { value: "+200", label: "Distribuidores activos" },
                  { value: "+500", label: "Negocios equipados" },
                  { value: "36+", label: "Años de experiencia" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="heading4" style={{ color: "var(--primary)" }}>{s.value}</div>
                    <div className="caption1" style={{ color: "var(--secondary)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {verticales.map((v) => (
                  <a
                    key={v.slug}
                    href={`/${v.slug}`}
                    className="group relative rounded-2xl overflow-hidden aspect-[4/5] block"
                    style={{ background: v.color }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                      style={{ backgroundImage: `url('${v.img}')` }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(180deg, transparent 30%, ${v.color}DD 100%)` }}
                    />
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                      <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        {v.icon}
                      </div>
                      <div>
                        <p className="caption2 uppercase tracking-wider opacity-80 mb-1">{v.items}</p>
                        <h3 className="heading6 font-bold leading-tight">{v.nombre}</h3>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== VERTICALES EN DETALLE ====================== */}
      <section className="py-24" id="verticales">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <span className="text-sub-display" style={{ color: "var(--primary)" }}>Cuatro verticales</span>
            <h2 className="heading2 mt-3 mb-4">¿Por dónde quieres empezar?</h2>
            <p className="body1" style={{ color: "var(--secondary)" }}>
              Cada vertical tiene su propio catálogo curado, fichas técnicas descargables y casos prácticos. Elige tu rubro y cotiza directo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {verticales.map((v) => (
              <a
                key={v.slug}
                href={`/${v.slug}`}
                className="group relative rounded-2xl border bg-white overflow-hidden hover:shadow-card-lg transition"
                style={{ borderColor: "var(--line)" }}
              >
                <div className="h-1.5 w-full" style={{ background: v.color }} />
                <div className="grid grid-cols-5 gap-0">
                  <div className="col-span-3 p-7">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white"
                      style={{ background: v.color }}
                    >
                      {v.icon}
                    </div>
                    <h3 className="heading5 mb-2">{v.nombre}</h3>
                    <p className="caption1 mb-5" style={{ color: "var(--secondary)" }}>{v.desc}</p>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: v.color }}>
                      Ver catálogo
                      <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                  <div
                    className="col-span-2 bg-cover bg-center min-h-[200px]"
                    style={{ backgroundImage: `url('${v.img}')` }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== MARCAS REPRESENTADAS ====================== */}
      <section className="py-16 border-y" style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-sub-display" style={{ color: "var(--primary)" }}>Marcas representadas</span>
            <p className="body1 mt-3" style={{ color: "var(--secondary)" }}>Sólo equipos profesionales certificados. Sin “marcas blancas” sospechosas.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {marcas.map((m) => (
              <div
                key={m}
                className="px-6 py-3 rounded-xl bg-white border text-base font-bold tracking-tight"
                style={{ borderColor: "var(--line)", color: "var(--primary)", fontFamily: "var(--font-display)" }}
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== EQUIPOS DESTACADOS ====================== */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-sub-display" style={{ color: "var(--primary)" }}>Top del mes</span>
              <h2 className="heading2 mt-3 mb-4">Equipos destacados</h2>
              <p className="body1" style={{ color: "var(--secondary)" }}>
                Los más cotizados por dueños de negocio en mayo 2026. Catálogo sin precios públicos — cotiza directo.
              </p>
            </div>
            <a href="#" className="btn-outline-primary">
              Ver catálogo completo
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {productos.map((p) => (
              <div key={p.nombre} className="product-item">
                <div className="product-thumb">
                  <div
                    className="aspect-square bg-cover bg-center"
                    style={{ backgroundImage: `url('${p.img}')` }}
                  />
                  <span className="tag-pill absolute top-3 left-3" style={{ background: p.color }}>
                    {p.tag}
                  </span>
                </div>
                <div className="pt-4 pb-2 px-1">
                  <h4 className="text-title font-semibold product-name mb-3">{p.nombre}</h4>
                  <div className="flex gap-2 mt-3">
                    <a className="flex-1 text-center py-2.5 rounded-full text-xs font-semibold uppercase text-white transition" style={{ background: "var(--primary)" }}>
                      Ficha PDF
                    </a>
                    <a className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full text-xs font-semibold uppercase text-white transition" style={{ background: p.color }}>
                      <WhatsappLogo size={14} weight="fill" />
                      Cotizar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== DISTRIBUIDORES (sin login) ====================== */}
      <section className="py-24" id="distribuidores" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-sub-display" style={{ color: "var(--primary-light)" }}>Programa de distribuidores</span>
              <h2 className="heading2 mt-3 mb-5">¿Vendes equipo profesional?{" "}
                <span style={{ color: "var(--primary-light)" }}>Sé parte de la red CRT.</span>
              </h2>
              <p className="body1 mb-8" style={{ color: "var(--secondary)" }}>
                Trabajamos con +200 distribuidores en todo el país. Sin portal ni claves complicadas — un asesor real te contesta por WhatsApp con precios escalonados, fichas y disponibilidad.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="btn-primary">
                  <WhatsappLogo size={18} weight="fill" />
                  Pedir alta como distribuidor
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {distribuidorBeneficios.map((b) => (
                  <div key={b.titulo} className="bg-white rounded-2xl p-6 border hover:shadow-card transition" style={{ borderColor: "var(--line)" }}>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white"
                      style={{ background: "var(--primary)" }}
                    >
                      {b.icon}
                    </div>
                    <h4 className="heading6 mb-2">{b.titulo}</h4>
                    <p className="caption1" style={{ color: "var(--secondary)" }}>{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== BLOG ====================== */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-sub-display" style={{ color: "var(--primary)" }}>Guías y recursos</span>
              <h2 className="heading2 mt-3 mb-4">Cómo equipar tu negocio</h2>
              <p className="body1" style={{ color: "var(--secondary)" }}>
                Guías prácticas, comparativas de equipos y consejos para emprendedores que abren su primer negocio.
              </p>
            </div>
            <a href="#" className="btn-outline-primary">
              Ver todas las guías
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {blog.map((post) => (
              <a key={post.titulo} href="#" className="group bg-white rounded-2xl overflow-hidden border hover:shadow-card-lg transition" style={{ borderColor: "var(--line)" }}>
                <div
                  className="aspect-[16/10] bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${post.img}')` }}
                >
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white"
                    style={{ background: post.color }}
                  >
                    {post.categoria}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="heading6 mb-3 group-hover:text-primary transition leading-snug">{post.titulo}</h3>
                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--line)" }}>
                    <span className="caption2 uppercase tracking-wider font-semibold" style={{ color: "var(--secondary)" }}>{post.fecha}</span>
                    <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition" style={{ color: "var(--primary)" }} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== CTA FINAL ====================== */}
      <section className="py-20" style={{ background: "var(--primary)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="heading2 mb-5">
              ¿Tu negocio necesita equipo profesional?
            </h2>
            <p className="body1 mb-8 text-white/80 max-w-2xl mx-auto">
              Cuéntanos qué quieres equipar — un asesor te contesta por WhatsApp con propuesta, ficha técnica y disponibilidad. Sin formularios largos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="btn-accent">
                <WhatsappLogo size={18} weight="fill" />
                Cotizar por WhatsApp
              </a>
              <a href="#" className="btn-outline-white">
                <Phone size={18} weight="fill" />
                Llamar a un asesor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== FOOTER ====================== */}
      <footer className="py-16" style={{ background: "var(--black)", color: "white" }}>
        <div className="container">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-3xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>CRT</span>
                <span className="text-xs font-semibold uppercase tracking-[2px] px-2 py-0.5 rounded-full" style={{ background: "var(--accent)", color: "var(--primary)" }}>
                  Profesional
                </span>
              </div>
              <p className="caption1 text-white/70 max-w-md mb-6">
                Catálogo profesional para distribuidores y dueños de negocio. Equipos para cafetería, restaurante, panadería y heladería.
              </p>
              <div className="flex gap-3">
                {[<InstagramLogo key="ig" size={18} weight="fill" />, <FacebookLogo key="fb" size={18} weight="fill" />, <LinkedinLogo key="li" size={18} weight="fill" />].map((icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <p className="caption2 uppercase tracking-[2px] font-semibold text-white/50 mb-4">Catálogo</p>
              <ul className="space-y-3">
                {["Restaurantes", "Cafeterías", "Panadería", "Helados", "Marcas", "Distribuidores"].map((l) => (
                  <li key={l}><a href="#" className="caption1 text-white/75 hover:text-white transition">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <p className="caption2 uppercase tracking-[2px] font-semibold text-white/50 mb-4">Contacto</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 caption1 text-white/75">
                  <WhatsappLogo size={16} weight="fill" className="mt-0.5 flex-shrink-0" />
                  <span>WhatsApp: +52 81 1234 5678</span>
                </li>
                <li className="flex items-start gap-2 caption1 text-white/75">
                  <Envelope size={16} weight="fill" className="mt-0.5 flex-shrink-0" />
                  <span>profesional@crtglobal.com.mx</span>
                </li>
                <li className="flex items-start gap-2 caption1 text-white/75">
                  <MapPin size={16} weight="fill" className="mt-0.5 flex-shrink-0" />
                  <span>Showroom flagship: Venustiano Carranza 650 Sur, Monterrey</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 caption2 text-white/50">
            <span>© 2026 CRT Profesional · Grupo Criotec</span>
            <div className="flex gap-6">
              <a href="https://crtglobal.com.mx" className="hover:text-white transition">CRT Global</a>
              <a href="https://crtonline.com.mx" className="hover:text-white transition">CRT Online</a>
              <a href="#" className="hover:text-white transition">Aviso de privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
