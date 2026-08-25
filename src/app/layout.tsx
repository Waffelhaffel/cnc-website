import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Grain from "@/components/Grain";
import { site } from "@/data/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "CNC Cologne News Corporation — Wir bewegen Bilder.",
    template: "%s — CNC Cologne News Corporation",
  },
  description:
    "CNC produziert seit über 30 Jahren Bewegtbild für TV und Online: Dokutainment, Reportage, Nachrichten, Corporate Media, Live-Produktion und Animation. Standorte in Köln und Essen.",
  keywords: [
    "Bewegtbild",
    "TV-Produktion",
    "Dokutainment",
    "Reportage",
    "Corporate Video",
    "EB-Team",
    "Postproduktion",
    "Köln",
    "Essen",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "CNC Cologne News Corporation",
    title: "CNC Cologne News Corporation — Wir bewegen Bilder.",
    description:
      "Im TV und Online. Schnell, flexibel, professionell — von der Konzeption bis zur Distribution.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={`${archivo.variable} ${hanken.variable}`}>
        <Grain />
        <div className="appShell">
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
