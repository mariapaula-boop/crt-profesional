import { getAjustes } from "@/contenido/ajustes";

export default async function Footer() {
  const a = await getAjustes();
  return (
    <footer className="py-10" style={{ background: "var(--primary-dark)", color: "rgba(255,255,255,0.7)" }}>
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{a.menu.marca1}</span>
          <span className="text-[10px] font-semibold uppercase tracking-[2px]" style={{ color: "var(--accent-light)" }}>{a.menu.marca2}</span>
        </div>
        <p>{a.pie.derechos}</p>
        <a href={a.pie.enlaceGlobal} className="text-white hover:opacity-80 transition">
          {a.pie.textoGlobal}
        </a>
      </div>
    </footer>
  );
}
