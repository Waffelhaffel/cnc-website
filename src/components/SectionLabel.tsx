import type { CSSProperties, ReactNode } from "react";
import styles from "./SectionLabel.module.css";

type Props = {
  children: ReactNode;
  /** Helle statt roter Schrift — im Hero über dem Bild. */
  muted?: boolean;
  className?: string;
  style?: CSSProperties;
};

/** Roter Strich plus Kleintext — das Rubrik-Label des Designs. */
export default function SectionLabel({
  children,
  muted,
  className,
  style,
}: Props) {
  return (
    <div
      className={[styles.label, className].filter(Boolean).join(" ")}
      style={style}
    >
      <span className={styles.dash} />
      <span className={`${styles.text} ${muted ? styles.textMuted : ""}`}>
        {children}
      </span>
    </div>
  );
}
