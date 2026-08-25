import type { Metadata } from "next";
import MediaSlot from "@/components/MediaSlot";
import PageHead, { pageHeadStyles } from "@/components/PageHead";
import SectionLabel from "@/components/SectionLabel";
import {
  leistungenIntro,
  numbered,
  personal,
  prozessText,
  technik,
} from "@/data/leistungen";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Personaldienstleistungen und technische Ausstattung: 25 Broadcast-FullHD-Systeme, digitale Filmkameras, virtuelles Greenbox-Studio und 25 vernetzte Edit-Suites.",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHead
        label="Leistungen"
        title={
          <>
            Was können wir
            <br />
            für Sie tun?
          </>
        }
        size="md"
      >
        <p className={pageHeadStyles.lead}>{leistungenIntro}</p>
      </PageHead>

      <section className={`${styles.listsSection} shell`}>
        <div className={styles.lists}>
          <div className={styles.listCol}>
            <h2 className={styles.listTitle}>Personaldienstleistungen</h2>
            <div className={`${styles.listGrid} ${styles.listGridPersonal}`}>
              {numbered(personal).map((p) => (
                <div key={p.name} className={styles.item}>
                  <span className={styles.itemNo}>{p.n}</span>
                  <span>{p.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.listCol}>
            <h2 className={styles.listTitle}>Technische Ausstattung</h2>
            <div className={`${styles.listGrid} ${styles.listGridTechnik}`}>
              {numbered(technik).map((t) => (
                <div
                  key={t.name}
                  className={`${styles.item} ${styles.itemTechnik}`}
                >
                  <span className={styles.itemNo}>{t.n}</span>
                  <span>{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.process} shell`}>
        <SectionLabel>Von der Idee bis zur Umsetzung</SectionLabel>
        <div className={styles.processGrid}>
          {prozessText.map((text, i) => (
            <p key={i} className={styles.processText}>
              {text}
            </p>
          ))}
        </div>
      </section>

      <section className={`${styles.mediaSection} shell`}>
        <div className={styles.mediaGrid}>
          <MediaSlot
            caption="Bild: Schnittplatz / Postproduktion"
            wide
            className={styles.mediaMain}
          />
          <MediaSlot
            caption="Bild: Greenbox-Studio"
            wide
            className={styles.mediaSide}
          />
        </div>
      </section>
    </>
  );
}
