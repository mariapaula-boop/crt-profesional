import { WhatsappLogo, List } from "@phosphor-icons/react/dist/ssr";
import { getAjustes } from "@/contenido/ajustes";

/** Ruta de la sección activa (ej. "/blog"); se compara con el enlace de cada elemento del menú. */
export type NavbarActiveItem = string | null;

/** ¿El enlace del menú corresponde a la ruta activa? (ignora "/" final y mayúsculas). */
export function enlaceActivo(enlace: string, activo: string | null): boolean {
  if (!activo) return false;
  const norm = (x: string) => x.trim().replace(/^https?:\/\/[^/]+/i, "").replace(/\/+$/, "").toLowerCase() || "/";
  return norm(enlace) === norm(activo);
}

export default async function Navbar({ activo = null }: { activo?: NavbarActiveItem }) {
  const a = await getAjustes();
  return (
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

        <div className="hidden lg:flex items-center gap-6">
          {a.menu.enlaces.map((item, i) => (
            <a
              key={i}
              href={item.enlace || "#"}
              className="text-sm font-medium transition hover:opacity-70"
              style={{ color: enlaceActivo(item.enlace, activo) ? "var(--accent-dark)" : "var(--black)" }}
            >
              {item.texto}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/contacto"
            className="text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition flex items-center gap-1.5 hover:opacity-90"
            style={{ background: "var(--primary)", color: "white" }}
          >
            <WhatsappLogo size={14} weight="fill" />
            {a.menu.boton}
          </a>
        </div>

        <button className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--primary)", color: "white" }} aria-label="Abrir menú">
          <List size={20} weight="bold" />
        </button>
      </div>
    </nav>
  );
}
