export type TeamMember = {
  name: string;
  phone: string;
  phoneHref: string;
  email: string;
  /** Optionaler Pfad zum Porträt — solange null, greift der Platzhalter. */
  image?: string | null;
};

export const disposition: TeamMember[] = [
  {
    name: "Manuela Daun",
    phone: "Fon +49 221 – 456 76311",
    phoneHref: "+4922145676311",
    email: "disposition@cnc-nrw.de",
  },
  {
    name: "Ricard Rilovic",
    phone: "Fon +49 221 – 456 76321",
    phoneHref: "+4922145676321",
    email: "disposition@cnc-nrw.de",
  },
  {
    name: "Thomas Grüner",
    phone: "Fon +49 221 – 456 76315",
    phoneHref: "+4922145676315",
    email: "disposition@cnc-nrw.de",
  },
  {
    name: "Jennifer Nostheide-Podoll",
    phone: "Fon +49 201 – 74 75 390",
    phoneHref: "+492017475390",
    email: "disposition@cnc-nrw.de",
  },
];
