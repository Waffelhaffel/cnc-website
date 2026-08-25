export const leistungenIntro =
  "Wir bewegen Bilder — durch professionelles Personal und modernste Technik. Von der 360°-Kamera über 25 Broadcast-FullHD-Systeme (XDCAM HD 422) bis zu digitalen Filmkameras (4K Super-35 mm) setzen wir Equipment flexibel und schnell ein. Die Postproduktion erfolgt an 25 eigenen Schnittplätzen inkl. Color Correction (DaVinci Resolve), eigenem Tonstudio und Grafik-Unit für 2D/3D-Animationen.";

export const personal = [
  "Beratung / Projektmanagement",
  "Realisation / Redaktion",
  "Regie",
  "Kamera / Ton-Assistenz",
  "Cutter",
  "Producer / Autoren",
  "Grafiker",
  "Produktionsleitung",
  "Aufnahmeleitung",
];

export const technik = [
  "Broadcast FullHD (XDCAM HD 422)",
  "Digitale Filmkameras (4K Super-35mm)",
  "Drahtlose Mikrofonsysteme",
  "HD-Superwide-Objektive",
  "Kamerakran mit Remotehead",
  "Dolly / Jibarm / Slider",
  "Licht & Bühnentechnik",
  "Quadrokopter (4K / FullHD)",
  "Mobile Regie-Einheit",
  "Livestreaming / CDN",
  "Virtuelles Greenbox-Studio (2D/3D)",
  "25 vernetzte Edit-Suites (Avid / Premiere)",
  "DaVinci Resolve · ProTools",
  "360°-Kamera für Virtual Reality",
];

export const prozessText = [
  "Unser Personal mit langjähriger Erfahrung begleitet jedes Projekt von der ersten Idee in der Beratung, Konzeption, über die Realisation, Kreation bis hin zur inhaltlichen und technischen Umsetzung. Die Postproduktion erfolgt an 25 eigenen Schnittplätzen (Avid Media Composer und Adobe Premiere) inklusive Color Correction (DaVinci Resolve) und im eigenen Tonstudio.",
  "Dazu verfügt CNC über eine eigene Grafik-Unit für 2D- und 3D-Animationen. Alle Bereiche der Postproduktion sind auch weltweit mobil einsetzbar und entsprechend vorbereitet. Abgerundet werden die technischen Möglichkeiten von einem Greenboxstudio für virtuelle Sets inkl. Echtzeit-Tracking (u.a. für die tägliche Live-Sendung „RTL WEST“).",
];

/** Nummerierte Listeneinträge (01, 02, …) wie im Design. */
export function numbered(items: string[]) {
  return items.map((name, i) => ({
    name,
    n: String(i + 1).padStart(2, "0"),
  }));
}
