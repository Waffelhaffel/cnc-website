# CNC — Cologne News Corporation

Neue Website auf Basis der Design-Vorlage `Claude-Design-Projekt rekonstruiert/CNC.dc.html`.
Next.js 16 (App Router), TypeScript, CSS Modules — keine UI-Bibliothek, keine externen
Laufzeit-Abhängigkeiten. Alle Seiten werden statisch vorgerendert.

## Entwicklung

```bash
npm run dev     # Entwicklungsserver (http://localhost:3000)
npm run build   # Produktions-Build
npm run start   # Produktions-Build lokal ausliefern
npm run lint    # ESLint
```

## Aufbau

```
src/
  app/
    page.tsx            Startseite (Hero, Segmentleiste, Kompetenzen, CTA, Cases)
    profil/             Profil mit Daten & Fakten und Slideshow
    leistungen/         Personal- und Technikliste, Prozess, Bildflächen
    referenzen/         Kategoriefilter und Projektraster
    karriere/           Stellen-Akkordeon
    kontakt/            Standorte und Disposition
    impressum/          Rechtliches (Pflichtangaben noch zu ergänzen)
    datenschutz/        Rechtliches (Pflichtangaben noch zu ergänzen)
    globals.css         Design-Tokens (Farben, Abstände, Schraffur)
  components/           Header, Footer, Grain, MediaSlot, SectionLabel, …
  data/                 Sämtliche Inhalte als TypeScript-Dateien
```

Inhalte stehen ausschließlich in `src/data/` — Texte, Referenzen, Stellen und
Kontaktdaten lassen sich dort ändern, ohne Komponenten anzufassen.

## Bilder einsetzen

Alle Bildflächen sind Platzhalter (`MediaSlot`): diagonale Schraffur plus kursiver
Hinweis, wofür der Platz gedacht ist. Zum Ersetzen die Datei nach `public/` legen und
den Pfad übergeben:

```tsx
<MediaSlot src="/bilder/schnittplatz.jpg" alt="Schnittplatz" />
```

Für Referenzen und Porträts genügt ein Eintrag in den Daten:

```ts
// src/data/referenzen.ts
{ title: "RTL Spendenmarathon", tag: "Show", image: "/bilder/spendenmarathon.jpg" }

// src/data/team.ts
{ name: "Manuela Daun", …, image: "/bilder/daun.jpg" }
```

## Design-Grundlagen

| Element        | Wert                                    |
| -------------- | --------------------------------------- |
| Hintergrund    | `#0a0a0b`                               |
| Schrift        | `#f4f2ec`                               |
| Akzent         | `#c4151c`                               |
| Display-Schrift| Archivo (400–900)                        |
| Fließtext      | Hanken Grotesk                          |

Beide Schriften werden über `next/font` lokal ausgeliefert — es besteht keine
Verbindung zu Google Fonts.

## Offene Punkte

- Impressum und Datenschutzerklärung enthalten nur die aus der Vorlage bekannten
  Angaben; die Pflichtangaben sind noch zu ergänzen.
- Der Facebook-Link im Footer zeigt auf `facebook.com/cncnrw` — bitte prüfen.
- Kontaktformular ist nicht vorgesehen; die Vorlage verweist auf Telefon und E-Mail.
