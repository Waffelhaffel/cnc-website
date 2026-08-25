export type Segment = { no: string; title: string; sub: string };

export const segments: Segment[] = [
  { no: "01", title: "Nachrichten & Reportagen", sub: "Schnell. Flexibel. Professionell." },
  { no: "02", title: "Dokutainment & Magazin", sub: "Nah dran. Weltweit unterwegs." },
  { no: "03", title: "Corporate Media", sub: "Beratung. Konzeption. Umsetzung." },
  { no: "04", title: "Studio & Postproduktion", sub: "Virtuelles 3D-Studio · 25 Edit-Suites." },
  { no: "05", title: "Live-Events & Show", sub: "Perfekte Bilder für jeden Auftritt." },
  { no: "06", title: "Technische Dienstleistungen", sub: "EB-Teams. Postproduktion. Realisation." },
  { no: "07", title: "Animation 2D / 3D", sub: "Grafik-Unit & Virtual Reality." },
];

export type CompetenceBlock = {
  no: string;
  slot: string;
  title: string;
  body: string;
};

export const competences: CompetenceBlock[] = [
  {
    no: "01",
    slot: "Bild: Produktion / Dreh",
    title: "Produktion",
    body: "CNC produziert seit über 30 Jahren Bewegtbild in Dokutainment, Magazin, Reportage und Nachrichten — journalistische und technische Kompetenz vereint, von der Konzeption bis zur Umsetzung.",
  },
  {
    no: "02",
    slot: "Bild: Technik / Equipment",
    title: "Technische Dienstleistungen",
    body: "Mehr als 25 Kamerateams, 25 Schnittplätze, 2D/3D-Grafik und ein virtuelles Studio garantieren höchste Flexibilität und Professionalität — angepasst an jeden Kunden.",
  },
  {
    no: "03",
    slot: "Bild: Corporate / Interview",
    title: "Corporate Media",
    body: "Mit unserem Tochterunternehmen make/c spezialisieren wir uns auf Video Content Marketing und betreuen Corporate-Kunden in der digitalen Unternehmenskommunikation.",
  },
];

export type Flagship = { title: string; sub: string; tag: string };

export const flagship: Flagship[] = [
  {
    title: "Das Jenke-Experiment",
    sub: "Langzeit-Reportage · Selbstversuch für RTL",
    tag: "Reportagen",
  },
  {
    title: "RTL Spendenmarathon",
    sub: "Live-Produktion · Deutschlands größte Spenden-Gala",
    tag: "Show",
  },
  {
    title: "Goodbye Deutschland",
    sub: "Dokutainment · Auswanderer weltweit begleitet",
    tag: "Dokutainment",
  },
];
