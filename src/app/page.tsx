import Link from "next/link";
import MediaSlot from "@/components/MediaSlot";
import SectionLabel from "@/components/SectionLabel";
import SegmentStrip from "@/components/SegmentStrip";
import { competences, flagship } from "@/data/home";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.heroVeil} aria-hidden />
        <div className={styles.heroNote}>Platz für Ihr Bewegtbild-Reel</div>

        <div className={styles.heroInner}>
          <SectionLabel muted style={{ marginBottom: 22 }}>
            Seit über 30 Jahren · Köln &amp; Essen
          </SectionLabel>
          <h1 className={styles.heroTitle}>
            Wir bewegen
            <br />
            Bilder<span className={styles.dot}>.</span>
          </h1>
          <p className={styles.heroLead}>
            Im TV und Online. Schnell, flexibel, professionell — von der
            Konzeption bis zur Distribution.
          </p>
        </div>

        <SegmentStrip />
      </section>

      {/* ===== DREI KOMPETENZEN ===== */}
      <section className={`${styles.competences} shell`}>
        <div className={styles.sectionHead}>
          <div>
            <SectionLabel>Was wir tun</SectionLabel>
            <h2 className={styles.h2}>
              Drei Kompetenzen,
              <br />
              ein Anspruch.
            </h2>
          </div>
          <p className={styles.sectionAside}>
            Journalistische und technische Kompetenz vereint — angepasst an die
            individuellen Bedürfnisse unserer Broadcast- und Corporate-Kunden.
          </p>
        </div>

        <div className={styles.blockList}>
          {competences.map((b) => (
            <article key={b.no} className={styles.block}>
              <MediaSlot caption={b.slot} className={styles.blockMedia} />
              <div className={styles.blockBody}>
                <div className={styles.blockNo}>{b.no}</div>
                <h3 className={styles.blockTitle}>{b.title}</h3>
                <p className={styles.blockText}>{b.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={`${styles.ctaSection} shell`}>
        <div className={styles.ctaBand}>
          <div>
            <div className={styles.ctaKicker}>Ihr Projekt</div>
            <h2 className={styles.ctaTitle}>
              Lassen Sie uns
              <br />
              Bilder bewegen.
            </h2>
          </div>
          <Link href="/kontakt" className={styles.ctaButton}>
            Kontakt aufnehmen →
          </Link>
        </div>
      </section>

      {/* ===== FLAGSHIP CASES ===== */}
      <section className={`${styles.cases} shell`}>
        <div className={`${styles.sectionHead} ${styles.casesHead}`}>
          <div>
            <SectionLabel>Flagship Cases</SectionLabel>
            <h2 className={`${styles.h2} ${styles.h2Cases}`}>
              Ausgewählte
              <br />
              Produktionen.
            </h2>
          </div>
          <Link href="/referenzen" className={styles.allLink}>
            Alle Referenzen →
          </Link>
        </div>

        <div className={styles.caseGrid}>
          {flagship.map((f) => (
            <Link
              key={f.title}
              href="/referenzen"
              className={styles.caseCard}
            >
              <MediaSlot
                caption="Bild: Case-Still"
                className={styles.caseMedia}
              >
                <span className={styles.caseTag}>{f.tag}</span>
              </MediaSlot>
              <div className={styles.caseTitle}>{f.title}</div>
              <div className={styles.caseSub}>{f.sub}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
