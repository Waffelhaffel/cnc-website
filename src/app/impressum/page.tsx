import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import { site } from "@/data/site";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Anbieterkennzeichnung der CNC Cologne News Corporation GmbH.",
  robots: { index: false },
};

export default function ImpressumPage() {
  const [koeln, essen] = site.locations;

  return (
    <>
      <PageHead label="Rechtliches" title="Impressum" size="md" paddingBottom={0} />

      <section className={`${styles.body} shell`}>
        <div className={styles.inner}>
          <h2 className={styles.h2}>Anbieter</h2>
          <p className={styles.text}>
            {site.name}
            <br />
            {koeln.street}
            <br />
            {koeln.zip}
            <br />
            {koeln.phone}
            <br />
            {koeln.fax}
          </p>

          <h2 className={styles.h2}>Standort Essen</h2>
          <p className={styles.text}>
            {essen.street}
            <br />
            {essen.zip}
            <br />
            {essen.phone}
          </p>

          <div className={styles.todo}>
            <span className={styles.todoTitle}>Noch zu ergänzen</span>
            Vertretungsberechtigte Geschäftsführung, Registergericht und
            Handelsregisternummer, Umsatzsteuer-Identifikationsnummer,
            E-Mail-Adresse sowie die inhaltlich verantwortliche Person nach § 18
            Abs. 2 MStV. Diese Angaben sind Pflicht — bitte vom bestehenden
            Impressum übernehmen oder rechtlich prüfen lassen.
          </div>
        </div>
      </section>
    </>
  );
}
