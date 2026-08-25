import styles from "./DraftNotice.module.css";

/**
 * Baustellen-Vermerk für die Rechtstexte: Diese Seite ist die noch in
 * Entwicklung befindliche Testfassung des CNC-Rebrandings.
 */
export default function DraftNotice() {
  return (
    <div className={styles.notice}>
      <span className={styles.title}>Hinweis — Testseite im Aufbau</span>
      <p className={styles.text}>
        Diese Website ist eine Testfassung, die im Rahmen des Rebrandings der
        CNC Cologne News Corporation GmbH derzeit noch entwickelt wird. Inhalte,
        Gestaltung und Rechtstexte sind vorläufig und werden vor dem
        Live-Gang überarbeitet. Verbindlich bleiben bis dahin die Angaben unter{" "}
        <a
          href="https://www.cnc-tv.de/"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          www.cnc-tv.de
        </a>
        .
      </p>
    </div>
  );
}
