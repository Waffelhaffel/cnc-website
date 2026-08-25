import type { Metadata } from "next";
import MediaSlot from "@/components/MediaSlot";
import PageHead from "@/components/PageHead";
import SectionLabel from "@/components/SectionLabel";
import { disposition } from "@/data/team";
import { site } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "CNC in Köln (Picassoplatz 1) und Essen (Sigsfeldstraße 5). Unsere Disposition ist für Sie da.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHead
        label="Kontakt"
        title={
          <>
            Wo Sie uns
            <br />
            finden.
          </>
        }
        size="lg"
      >
        <div className={styles.locations}>
          {site.locations.map((loc) => (
            <div key={loc.city} className={styles.location}>
              <h2 className={styles.locationLabel}>Standort {loc.city}</h2>
              <address className={styles.address}>
                {loc.street}
                <br />
                {loc.zip}
              </address>
              <div className={styles.contactLines}>
                <a href={`tel:${loc.phoneHref}`}>{loc.phone}</a>
                {loc.fax && (
                  <>
                    <br />
                    {loc.fax}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </PageHead>

      <section className={`${styles.teamSection} shell`}>
        <SectionLabel>Unsere Disposition — immer für Sie da</SectionLabel>
        <div className={styles.teamGrid}>
          {disposition.map((m) => (
            <article key={m.name} className={styles.member}>
              <MediaSlot
                src={m.image}
                alt={m.name}
                caption="Porträt"
                className={styles.portrait}
              />
              <div className={styles.memberBody}>
                <h3 className={styles.memberName}>{m.name}</h3>
                <div className={styles.memberLines}>
                  <a href={`tel:${m.phoneHref}`}>{m.phone}</a>
                  <br />
                  <a href={`mailto:${m.email}`} className={styles.mail}>
                    {m.email}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
