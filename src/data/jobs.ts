export type JobBlock =
  | { label: string; type: "text"; text: string }
  | { label: string; type: "list"; items: string[] };

export type Job = {
  title: string;
  tags: string[];
  blocks: JobBlock[];
};

export const jobs: Job[] = [
  {
    title: "EB-Assistent Kamera / Ton (m/w/d)",
    tags: ["Essen & Köln", "dauerhaft"],
    blocks: [
      {
        label: "Profil",
        type: "text",
        text: "Erfahrungen mit EB-Equipment: XDCAM-Kameras, SQN 3 + 4 Audiomischer, Reportagelicht. Technisches Verständnis, Flexibilität, hohe Belastbarkeit, Teamfähigkeit, soziale Kompetenz und ein Führerschein der Klasse B sind Voraussetzung. Berufseinsteiger können ggf. über eine Qualifizierungsphase beschäftigt werden.",
      },
    ],
  },
  {
    title: "Praktikum Redaktion",
    tags: ["Essen & Köln", "mind. 12 Wochen · ab sofort"],
    blocks: [
      {
        label: "Profil",
        type: "text",
        text: "Internet- und Telefonrecherchen, Begleitung von Drehs, organisatorische Tätigkeiten während des Drehs und/oder im Büro. Erste Erfahrungen in der Medienbranche, Führerscheinklasse B, hohe soziale Kompetenz, Lernbereitschaft, Teamfähigkeit und Engagement.",
      },
    ],
  },
  {
    title: "Praktikum EB-Bereich",
    tags: ["Essen & Köln", "nach Absprache"],
    blocks: [
      {
        label: "Profil",
        type: "text",
        text: "Erfahrung mit EB-Equipment (XDCAM-Kameras, SQN 3 + 4 Audiomischer, Reportagelicht) wünschenswert. Technisches Verständnis, Flexibilität, hohe Belastbarkeit, Teamfähigkeit, soziale Kompetenz und ein Führerschein der Klasse B sind Voraussetzung.",
      },
    ],
  },
  {
    title: "Freie Cutter (m/w/d) · Avid / Premiere",
    tags: ["Essen & Köln", "freiberuflich"],
    blocks: [
      {
        label: "Profil",
        type: "text",
        text: "Für die Realisation und Produktion suchen wir freie Cutter. Voraussetzung: Erfahrungen im Doku-Soap-, Reportage- und Dokubereich, Organisationstalent, Engagement, Kreativität, Teamfähigkeit und eine hohe soziale Kompetenz. Software: Avid Media Composer und/oder Adobe Premiere.",
      },
    ],
  },
  {
    title: "Freie Kameraleute (m/w/d)",
    tags: ["Essen & Köln", "freiberuflich"],
    blocks: [
      {
        label: "Profil",
        type: "text",
        text: "Erfahrungen im Dokutainment- und Reportagebereich, Kameraerfahrung mit FS7, XDCAM und Super-35-mm, Organisationstalent, Engagement, Kreativität, Teamfähigkeit und eine hohe soziale Kompetenz.",
      },
    ],
  },
  {
    title: "Veranstaltungs- / Produktions-Techniker (m/w/d)",
    tags: ["Köln & Essen", "Vollzeit · ab sofort"],
    blocks: [
      {
        label: "Ihre Aufgaben",
        type: "list",
        items: [
          "Vorbereitung und Durchführung von Außenproduktionen / Streaming-Events",
          "Technischer Support von EB-Produktionen",
          "Technischer Support von Postproduktionssystemen (Avid & Adobe Premiere)",
          "Wartung und Pflege technischer Geräte",
        ],
      },
      {
        label: "Ihr Profil",
        type: "list",
        items: [
          "Erfahrung im Bereich Veranstaltungs- und/oder Broadcast-Technik",
          "Organisatorische Fähigkeiten",
          "Hohes technisches Verständnis",
          "Flexibilität und Belastbarkeit",
          "Teamfähigkeit und soziale Kompetenz",
          "Führerschein der Klasse B",
        ],
      },
      {
        label: "Wir bieten",
        type: "text",
        text: "Einen krisensicheren Arbeitsplatz mit langfristiger Perspektive, betriebliche Altersvorsorge sowie kostenfreie Getränke (Tee, Kaffeespezialitäten, Wasser).",
      },
    ],
  },
];
