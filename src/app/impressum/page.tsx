import type { Metadata } from "next";
import DraftNotice from "@/components/DraftNotice";
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
  const { register } = site;

  return (
    <>
      <PageHead label="Rechtliches" title="Impressum" size="md" paddingBottom={0} />

      <section className={`${styles.body} shell`}>
        <div className={styles.inner}>
          <DraftNotice />

          <h2 className={styles.h2}>Anbieter</h2>
          <p className={styles.text}>{site.name}</p>

          <h2 className={styles.h2}>Standort Köln</h2>
          <p className={styles.text}>
            {koeln.street}
            <br />
            {koeln.zip}
            <br />
            {koeln.phone}
          </p>

          <h2 className={styles.h2}>Standort Essen</h2>
          <p className={styles.text}>
            {essen.street}
            <br />
            {essen.zip}
            <br />
            {essen.phone}
          </p>

          <h2 className={styles.h2}>Kontakt</h2>
          <p className={styles.text}>
            E-Mail:{" "}
            <a href={`mailto:${site.email}`} className={styles.mail}>
              {site.email}
            </a>
          </p>

          <h2 className={styles.h2}>Unternehmensangaben</h2>
          <p className={styles.text}>
            Sitz der Gesellschaft: {register.seat}
            <br />
            Handelsregister: {register.number}, {register.court}
            <br />
            Geschäftsführer: {register.managingDirector}
          </p>

          <h2 className={styles.h2}>Verantwortlich für den Inhalt</h2>
          <p className={styles.text}>V.i.S.d.P.: {register.responsible}</p>

          <h2 className={styles.h2}>Disclaimer</h2>

          <h3 className={styles.h3}>Haftung für Inhalte</h3>
          <p className={styles.text}>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
            gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>

          <h3 className={styles.h3}>Haftung für Links</h3>
          <p className={styles.text}>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </div>
      </section>
    </>
  );
}
