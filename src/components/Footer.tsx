import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <Image
            src="/logo-cnc.png"
            alt="CNC"
            width={130}
            height={75}
            className={styles.logo}
          />
          <div className={styles.brandText}>
            Cologne News
            <br />
            Corporation GmbH
          </div>
        </div>

        {site.locations.map((loc) => (
          <div key={loc.city}>
            <div className={styles.colTitle}>{loc.city}</div>
            <address className={styles.colBody} style={{ fontStyle: "normal" }}>
              {loc.street}, {loc.zip}
              <br />
              <a href={`tel:${loc.phoneHref}`}>{loc.phone}</a>
            </address>
          </div>
        ))}

        <div className={styles.ctaWrap}>
          <Link href="/kontakt" className={styles.cta}>
            Kontakt aufnehmen →
          </Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span className={styles.legal}>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <a
            href="https://www.facebook.com/cncnrw"
            target="_blank"
            rel="noreferrer noopener"
          >
            Facebook
          </a>
        </span>
      </div>
    </footer>
  );
}
