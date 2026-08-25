import type { CSSProperties, ReactNode } from "react";
import styles from "./MediaSlot.module.css";

type Props = {
  /** Bildpfad. Fehlt er, wird der schraffierte Platzhalter mit Beschriftung gezeigt. */
  src?: string | null;
  alt?: string;
  /** Kursive Beschriftung des Platzhalters, z. B. „Bild: Schnittplatz“. */
  caption?: string;
  /** Zweite, kleinere Zeile — nur in der zentrierten Variante. */
  captionSub?: string;
  /** Beschriftung mittig statt unten links. */
  center?: boolean;
  /** Etwas weitere Schraffur wie bei den großen Flächen im Design. */
  wide?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/**
 * Bildfläche der Seite. Ohne `src` erscheint die Design-Schraffur samt Hinweis,
 * wofür der Platz vorgesehen ist — Bild eintragen genügt zum Ersetzen.
 */
export default function MediaSlot({
  src,
  alt = "",
  caption,
  captionSub,
  center = false,
  wide = false,
  className,
  style,
  children,
}: Props) {
  return (
    <div
      className={[styles.slot, wide ? styles.slotWide : "", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className={styles.image} loading="lazy" />
      ) : caption && center ? (
        <div className={styles.captionCenter}>
          <span className={styles.line1}>{caption}</span>
          {captionSub && <span className={styles.line2}>{captionSub}</span>}
        </div>
      ) : caption ? (
        <span className={styles.caption}>{caption}</span>
      ) : null}
      {children}
    </div>
  );
}
