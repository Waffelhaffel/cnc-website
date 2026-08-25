import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import MediaSlot from "@/components/MediaSlot";
import PageHead from "@/components/PageHead";
import SectionLabel from "@/components/SectionLabel";
import { gallerySlides, profilText, stats } from "@/data/profil";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Profil",
  description:
    "Seit über 30 Jahren einer der führenden Anbieter im Bereich Bewegtbild — mit Standorten in Köln und Essen, 25 Kamerateams, Grafik-Unit und virtuellem 3D-Studio.",
};

export default function ProfilPage() {
  return (
    <>
      <PageHead label="Profil" title="Wer wir sind." size="lg">
        <div className={styles.intro}>
          {profilText.map((text, i) => (
            <p key={i} className={styles.introText}>
              {text}
            </p>
          ))}
        </div>
      </PageHead>

      <section className={styles.bannerSection}>
        <MediaSlot
          caption="Team im Einsatz — weltweit"
          wide
          className={`${styles.banner} shell`}
        />
      </section>

      <section className={`${styles.facts} shell`}>
        <SectionLabel>Daten &amp; Fakten</SectionLabel>
        <div className={styles.statGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        <SectionLabel className={styles.galleryLabel}>Einblicke</SectionLabel>
        <Gallery slides={gallerySlides} />
      </section>
    </>
  );
}
