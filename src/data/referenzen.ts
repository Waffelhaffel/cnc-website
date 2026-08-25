export const categories = [
  "Dokutainment",
  "Technische Dienstleistungen",
  "Show",
  "Magazin & Nachrichten",
  "Reportagen",
  "Corporate Media",
] as const;

export type Category = (typeof categories)[number];

export type Reference = {
  title: string;
  tag: Category;
  /** Optionaler Pfad zu einem Still — solange null, greift der Platzhalter. */
  image?: string | null;
};

export const references: Reference[] = [
  { title: "Fittest Family Germany", tag: "Show" },
  { title: "BILD.Macht.Deutschland?", tag: "Reportagen" },
  { title: "RTL Spendenmarathon", tag: "Show" },
  { title: "Teenie Mütter", tag: "Dokutainment" },
  { title: "Frauentausch", tag: "Dokutainment" },
  { title: "Mein Lokal, Dein Lokal", tag: "Dokutainment" },
  { title: "Shopping Queen", tag: "Show" },
  { title: "RTL WEST", tag: "Magazin & Nachrichten" },
  { title: "10 Minuten Klartext", tag: "Magazin & Nachrichten" },
  { title: "RTL Punkt 12", tag: "Magazin & Nachrichten" },
  { title: "Take me out!", tag: "Show" },
  { title: "Das Jenke-Experiment", tag: "Reportagen" },
  { title: "Goodbye Deutschland – La Gomera", tag: "Dokutainment" },
  { title: "Promi Shopping Queen", tag: "Show" },
  { title: "Der Bluff", tag: "Dokutainment" },
  { title: "Endstation Wildnis", tag: "Reportagen" },
  { title: "Die Versicherungsdetektive", tag: "Dokutainment" },
  { title: "Mario Barth – Weltrekord-Show", tag: "Show" },
  { title: "taff – Lifestyle-Magazin", tag: "Magazin & Nachrichten" },
  { title: "IHK Köln – Digital Talk", tag: "Corporate Media" },
  { title: "make/c Content Marketing", tag: "Corporate Media" },
  { title: "Mediengruppe RTL Deutschland", tag: "Technische Dienstleistungen" },
  { title: "Duell der Gartenprofis", tag: "Dokutainment" },
  { title: "RheinEnergie Marathon Köln", tag: "Technische Dienstleistungen" },
  { title: "GOP Varieté-Theater", tag: "Show" },
  { title: "Voller Leben – Meine letzte Liste", tag: "Reportagen" },
  { title: "Unser Traum vom Haus", tag: "Dokutainment" },
  { title: "60 Jahre Luftwaffe", tag: "Corporate Media" },
  { title: "Phantasialand", tag: "Technische Dienstleistungen" },
  { title: "Extrem schön", tag: "Dokutainment" },
];

export type Filter = { label: string; count: number };

/** Zählt direkt aus der Projektliste — neue Referenzen aktualisieren die Filter automatisch. */
export const filters: Filter[] = [
  { label: "Alle", count: references.length },
  ...categories.map((c) => ({
    label: c,
    count: references.filter((r) => r.tag === c).length,
  })),
];
