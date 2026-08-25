export const site = {
  name: "CNC Cologne News Corporation GmbH",
  shortName: "CNC",
  url: "https://www.cnc-nrw.de",
  locations: [
    {
      city: "Köln",
      street: "Picassoplatz 1",
      zip: "50679 Köln",
      phone: "Fon +49 221 – 456 76212",
      fax: "Fax +49 221 – 456 76219",
      phoneHref: "+4922145676212",
    },
    {
      city: "Essen",
      street: "Sigsfeldstraße 5",
      zip: "45141 Essen",
      phone: "Fon +49 201 – 7475 380",
      fax: null,
      phoneHref: "+492017475380",
    },
  ],
} as const;

export const nav = [
  { href: "/", label: "Startseite" },
  { href: "/profil", label: "Profil" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/karriere", label: "Karriere / Casting" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
