import type { Metadata } from "next";
import Link from "next/link";
import JobList from "@/components/JobList";
import PageHead from "@/components/PageHead";
import { site } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Karriere / Casting",
  description:
    "Offene Stellen bei CNC in Köln und Essen: EB-Assistenz, Redaktion, Cutter, Kameraleute, Veranstaltungstechnik und Praktika.",
};

export default function KarrierePage() {
  return (
    <>
      <PageHead
        label="Karriere / Casting"
        title={
          <>
            Wir suchen
            <br />
            Sie<span style={{ color: "var(--accent)" }}>.</span>
          </>
        }
        size="xl"
        className={styles.head}
        paddingBottom={30}
      >
        <p className={styles.lead}>
          Wir sind ständig auf der Suche nach spannenden Geschichten,
          außergewöhnlichen Menschen und interessanten Ereignissen — und nach
          Talenten, die sie erzählen.{" "}
          <Link href="/kontakt" className={styles.leadLink}>
            Schreiben Sie uns.
          </Link>
        </p>
      </PageHead>

      <section className={styles.jobs}>
        <JobList />

        <div className={styles.note}>
          Bitte senden Sie Ihre vollständigen Bewerbungsunterlagen per Post oder
          E-Mail.
          <br />
          <span className={styles.noteStrong}>
            {site.name} · {site.locations[0].street} · {site.locations[0].zip}
          </span>
        </div>
      </section>
    </>
  );
}
