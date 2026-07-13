import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CRT Profesional — Equipa tu cafetería, restaurante, panadería o heladería",
  description: "Catálogo profesional para distribuidores y dueños de negocio. Cafeteras, batidoras, vitrinas, máquinas de helado, hornos y más. Cotiza por WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${manrope.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="bg-white">{children}</body>
    </html>
  );
}
