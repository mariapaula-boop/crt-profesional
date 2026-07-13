export default function Footer() {
  return (
    <footer className="py-10" style={{ background: "var(--primary-dark)", color: "rgba(255,255,255,0.7)" }}>
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>CRT</span>
          <span className="text-[10px] font-semibold uppercase tracking-[2px]" style={{ color: "var(--accent-light)" }}>Profesional</span>
        </div>
        <p>© 2026 CRT Profesional · Parte del Grupo CRT</p>
        <a href="https://crtglobal.com.mx" className="text-white hover:opacity-80 transition">
          crtglobal.com.mx →
        </a>
      </div>
    </footer>
  );
}
