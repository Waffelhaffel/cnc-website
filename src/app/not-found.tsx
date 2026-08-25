import Link from "next/link";
import PageHead from "@/components/PageHead";
import styles from "./legal.module.css";

export default function NotFound() {
  return (
    <>
      <PageHead label="Fehler 404" title="Seite nicht gefunden." size="md" paddingBottom={0} />
      <section className={`${styles.body} shell`}>
        <div className={styles.inner}>
          <p className={styles.text}>
            Die aufgerufene Adresse existiert nicht (mehr).{" "}
            <Link href="/" style={{ color: "var(--accent)" }}>
              Zurück zur Startseite
            </Link>{" "}
            oder direkt zu unseren{" "}
            <Link href="/referenzen" style={{ color: "var(--accent)" }}>
              Referenzen
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
