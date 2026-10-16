import {
  ArrowRight, Phone, Envelope, MapPin, WhatsappLogo,
  List, Coffee, Bread, IceCream, ForkKnife,
  Truck, Storefront,
  Sparkle, FileText, Handshake,
  InstagramLogo, FacebookLogo, LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { contenido } from "@/lib/cms";
import { home } from "@/contenido/home";
import { getAjustes } from "@/contenido/ajustes";
import { metadataCon } from "@/contenido/comun";
import { getProductos } from "@/lib/productos";
import { getPostsCms } from "@/lib/blog";

const metadataBase = {
  title: "CRT Profesional — Equipa tu cafetería, restaurante, panadería o heladería",
  description:
    "Catálogo profesional para distribuidores y dueños de negocio. Cafeteras, batidoras, vitrinas, máquinas de helado, hornos. Cotiza por WhatsApp.",
};

export async function generateMetadata() {
  const c = await contenido(home);
  return metadataCon(c.seo, home.campos.seo.defecto, metadataBase);
}

// Textos e imágenes: src/contenido/home.ts (editables en el administrador). Aquí lo fijo.
const decoVerticales = {
  restaurante: { icon: <ForkKnife size={28} weight="duotone" />, color: "var(--primary-dark)" },
  cafeteria: { icon: <Coffee size={28} weight="duotone" />, color: "var(--primary)" },
  panaderia: { icon: <Bread size={28} weight="duotone" />, color: "var(--primary-light)" },
  heladeria: { icon: <IceCream size={28} weight="duotone" />, color: "var(--accent)" },
};
const iconosBeneficios = [
  <FileText key="0" size={22} weight="duotone" />,
  <Handshake key="1" size={22} weight="duotone" />,
  <Truck key="2" size={22} weight="duotone" />,
  <Sparkle key="3" size={22} weight="duotone" />,
];
const colorDeGiro: Record<string, string> = { "Cafetería": "var(--primary)", "Panadería": "var(--primary-light)", "Helados": "var(--accent)", "Heladería": "var(--accent)", "Restaurante": "var(--primary-dark)" };

export default async function Home() {
  const [c, a, publicados, posts] = await Promise.all([contenido(home), getAjustes(), getProductos(), getPostsCms()]);
  const verticales = (Object.keys(decoVerticales) as (keyof typeof decoVerticales)[]).map((slug) => ({ slug, ...c.verticales[slug], ...decoVerticales[slug] }));
  const marcas = c.marcas.lista;
  const productos = publicados.length > 0
    ? publicados.slice(0, 4).map((p) => ({ nombre: p.nombre, tag: p.etiqueta, color: p.color || colorDeGiro[p.giros[0]] || "var(--primary)", img: p.img, ficha: p.ficha || p.tienda }))
    : c.equipos.ejemplos.map((e) => ({ nombre: e.nombre, tag: e.tag, color: colorDeGiro[e.tag] || "var(--primary)", img: e.img, ficha: "" }));
  const distribuidorBeneficios = c.distribuidores.beneficios.map((b, i) => ({ ...b, icon: iconosBeneficios[i % iconosBeneficios.length] }));
  const blog = posts.length > 0
    ? posts.slice(0, 3).map((p) => ({ categoria: p.categoria, titulo: p.titulo, fecha: p.fecha, img: p.img ?? "", color: colorDeGiro[p.categoria] || "var(--primary)", href: `/blog/${p.slug}` }))
    : c.blog.ejemplos.map((e) => ({ ...e, color: colorDeGiro[e.categoria] || "var(--primary)", href: "/blog" }));
  return (
    <>
      {/* ====================== NAVBAR — claro sobre cream ====================== */}
      <nav className="absolute top-0 left-0 right-0 z-30">
        <div className="container flex items-center justify-between py-5">
          <a href="/" className="flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)", color: "var(--primary)" }}>
              {a.menu.marca1}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[2px] px-2 py-0.5 rounded-full" style={{ background: "var(--primary)", color: "white" }}>
              {a.menu.marca2}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {[
              { label: "Restaurantes", href: "/restaurante" },
              { label: "Cafeterías", href: "/cafeteria" },
              { label: "Panadería", href: "/panaderia" },
              { label: "Helados", href: "/heladeria" },
              { label: "Marcas", href: "#marcas" },
              { label: "Blog", href: "/blog" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium hover:text-accent-dark transition" style={{ color: "var(--black)" }}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href={a.waLink} target="_blank" rel="noopener" className="text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition flex items-center gap-1.5" style={{ background: "var(--primary)", color: "white" }}>
              <WhatsappLogo size={14} weight="fill" />
              {a.menu.boton}
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
                {c.hero.pill}
              </span>
              <h1 className="heading1 mb-6" style={{ color: "var(--primary)" }}>
                {c.hero.titulo}{" "}
                <span style={{ color: "var(--primary-light)" }}>{c.hero.resaltado1}</span>,{" "}
                <span style={{ color: "var(--primary)" }}>{c.hero.resaltado2}</span>{" "}
                {c.hero.cierre}
              </h1>
              <p className="body1 mb-10 max-w-xl" style={{ color: "var(--secondary)" }}>
                {c.hero.texto}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={a.waLink} target="_blank" rel="noopener" className="btn-primary">
                  <WhatsappLogo size={18} weight="fill" />
                  {c.hero.botonWhatsapp}
                </a>
                <a href="#verticales" className="btn-outline-primary">
                  {c.hero.botonCatalogo}
                  <ArrowRight size={18} weight="bold" />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t" style={{ borderColor: "var(--line)" }}>
                {c.hero.datos.map((s, i) => (
                  <div key={i}>
                    <div className="heading4" style={{ color: "var(--primary)" }}>{s.valor}</div>
                    <div className="caption1" style={{ color: "var(--secondary)" }}>{s.texto}</div>
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
            <span className="text-sub-display" style={{ color: "var(--primary)" }}>{c.verticales.etiqueta}</span>
            <h2 className="heading2 mt-3 mb-4">{c.verticales.titulo}</h2>
            <p className="body1" style={{ color: "var(--secondary)" }}>
              {c.verticales.texto}
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
                      {c.verticales.boton}
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
      <section id="marcas" className="py-16 border-y" style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-sub-display" style={{ color: "var(--primary)" }}>{c.marcas.etiqueta}</span>
            <p className="body1 mt-3" style={{ color: "var(--secondary)" }}>{c.marcas.texto}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {marcas.map((m, i) => (
              <div
                key={i}
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
              <span className="text-sub-display" style={{ color: "var(--primary)" }}>{c.equipos.etiqueta}</span>
              <h2 className="heading2 mt-3 mb-4">{c.equipos.titulo}</h2>
              <p className="body1" style={{ color: "var(--secondary)" }}>
                {c.equipos.texto}
              </p>
            </div>
            <a href="https://crtonline.com.mx" target="_blank" rel="noopener" className="btn-outline-primary">
              {c.equipos.boton}
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {productos.map((p, i) => (
              <div key={i} className="product-item">
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
                    <a href={p.ficha || undefined} target={p.ficha ? "_blank" : undefined} rel="noopener" className="flex-1 text-center py-2.5 rounded-full text-xs font-semibold uppercase text-white transition" style={{ background: "var(--primary)" }}>
                      Ficha PDF
                    </a>
                    <a href={a.waLink} target="_blank" rel="noopener" className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full text-xs font-semibold uppercase text-white transition" style={{ background: p.color }}>
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
              <span className="text-sub-display" style={{ color: "var(--primary-light)" }}>{c.distribuidores.etiqueta}</span>
              <h2 className="heading2 mt-3 mb-5">{c.distribuidores.titulo}{" "}
                <span style={{ color: "var(--primary-light)" }}>{c.distribuidores.resaltado}</span>
              </h2>
              <p className="body1 mb-8" style={{ color: "var(--secondary)" }}>
                {c.distribuidores.texto}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={a.waLink} target="_blank" rel="noopener" className="btn-primary">
                  <WhatsappLogo size={18} weight="fill" />
                  {c.distribuidores.boton}
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {distribuidorBeneficios.map((b, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border hover:shadow-card transition" style={{ borderColor: "var(--line)" }}>
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
              <span className="text-sub-display" style={{ color: "var(--primary)" }}>{c.blog.etiqueta}</span>
              <h2 className="heading2 mt-3 mb-4">{c.blog.titulo}</h2>
              <p className="body1" style={{ color: "var(--secondary)" }}>
                {c.blog.texto}
              </p>
            </div>
            <a href="/blog" className="btn-outline-primary">
              {c.blog.boton}
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {blog.map((post, i) => (
              <a key={i} href={post.href} className="group bg-white rounded-2xl overflow-hidden border hover:shadow-card-lg transition" style={{ borderColor: "var(--line)" }}>
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
              {c.cta.titulo}
            </h2>
            <p className="body1 mb-8 text-white/80 max-w-2xl mx-auto">
              {c.cta.texto}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={a.waLink} target="_blank" rel="noopener" className="btn-accent">
                <WhatsappLogo size={18} weight="fill" />
                {c.cta.botonWhatsapp}
              </a>
              <a href={a.telLink} className="btn-outline-white">
                <Phone size={18} weight="fill" />
                {c.cta.botonLlamar}
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
                <span className="text-3xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>{a.menu.marca1}</span>
                <span className="text-xs font-semibold uppercase tracking-[2px] px-2 py-0.5 rounded-full" style={{ background: "var(--accent)", color: "var(--primary)" }}>
                  {a.menu.marca2}
                </span>
              </div>
              <p className="caption1 text-white/70 max-w-md mb-6">
                {c.pie.texto}
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <InstagramLogo key="ig" size={18} weight="fill" />, href: a.redes.instagram },
                  { icon: <FacebookLogo key="fb" size={18} weight="fill" />, href: a.redes.facebook },
                  { icon: <LinkedinLogo key="li" size={18} weight="fill" />, href: a.redes.linkedin },
                ].map(({ icon, href }, i) => (
                  <a key={i} href={href || "#"} target={href ? "_blank" : undefined} rel="noopener" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <p className="caption2 uppercase tracking-[2px] font-semibold text-white/50 mb-4">Catálogo</p>
              <ul className="space-y-3">
                {[
                  { l: "Restaurantes", href: "/restaurante" },
                  { l: "Cafeterías", href: "/cafeteria" },
                  { l: "Panadería", href: "/panaderia" },
                  { l: "Helados", href: "/heladeria" },
                  { l: "Marcas", href: "#marcas" },
                  { l: "Distribuidores", href: "/distribuidores" },
                ].map(({ l, href }) => (
                  <li key={l}><a href={href} className="caption1 text-white/75 hover:text-white transition">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <p className="caption2 uppercase tracking-[2px] font-semibold text-white/50 mb-4">Contacto</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 caption1 text-white/75">
                  <WhatsappLogo size={16} weight="fill" className="mt-0.5 flex-shrink-0" />
                  <span>{c.pie.whatsapp}</span>
                </li>
                <li className="flex items-start gap-2 caption1 text-white/75">
                  <Envelope size={16} weight="fill" className="mt-0.5 flex-shrink-0" />
                  <span>{c.pie.correo}</span>
                </li>
                <li className="flex items-start gap-2 caption1 text-white/75">
                  <MapPin size={16} weight="fill" className="mt-0.5 flex-shrink-0" />
                  <span>{c.pie.direccion}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 caption2 text-white/50">
            <span>{c.pie.derechos}</span>
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
