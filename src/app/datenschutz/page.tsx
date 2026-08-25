import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import { site } from "@/data/site";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.",
  robots: { index: false },
};

export default function DatenschutzPage() {
  const koeln = site.locations[0];

  return (
    <>
      <PageHead
        label="Rechtliches"
        title="Datenschutz"
        size="md"
        paddingBottom={0}
      />

      <section className={`${styles.body} shell`}>
        <div className={styles.inner}>
          <h2 className={styles.h2}>Verantwortliche Stelle</h2>
          <p className={styles.text}>
            {site.name}
            <br />
            {koeln.street}, {koeln.zip}
            <br />
            {koeln.phone}
          </p>

          <h2 className={styles.h2}>Umfang der Verarbeitung</h2>
          <p className={styles.text}>
            Diese Website wird ohne Tracking, ohne Analyse-Werkzeuge und ohne
            Cookies ausgeliefert. Schriften werden lokal vom eigenen Server
            geladen, es findet keine Verbindung zu Google Fonts statt.
          </p>
          <p className={styles.text}>
            Beim Aufruf der Seiten verarbeitet der Hosting-Dienstleister
            technisch notwendige Zugriffsdaten (IP-Adresse, Zeitpunkt,
            abgerufene Ressource, Browserkennung), um die Auslieferung und die
            Sicherheit des Angebots zu gewährleisten.
          </p>

          <div className={styles.todo}>
            <span className={styles.todoTitle}>Noch zu ergänzen</span>
            Kontaktdaten der oder des Datenschutzbeauftragten, Hosting-Anbieter
            samt Auftragsverarbeitungsvertrag, Speicherfristen der Server-Logs,
            Verarbeitung von Bewerbungsunterlagen sowie die Betroffenenrechte
            nach Art. 15–21 DSGVO. Sobald Kontaktformular, Karten-Einbindung
            oder Video-Player hinzukommen, ist dieser Text zu erweitern.
          </div>
        </div>
      </section>
    </>
  );
}
