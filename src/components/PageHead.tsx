import type { ReactNode } from "react";
import SectionLabel from "./SectionLabel";
import styles from "./PageHead.module.css";

type Props = {
  label: ReactNode;
  title: ReactNode;
  size?: "md" | "lg" | "xl";
  /** Breite Container-Variante für die Referenzen-Übersicht. */
  wide?: boolean;
  /** Zusätzliche Klasse, z. B. für eine schmalere Spaltenbreite. */
  className?: string;
  children?: ReactNode;
  paddingBottom?: number;
};

/** Rubrik-Label plus große Überschrift — der Kopf jeder Unterseite. */
export default function PageHead({
  label,
  title,
  size = "lg",
  wide = false,
  className,
  children,
  paddingBottom,
}: Props) {
  return (
    <section
      className={[styles.head, wide ? "shellWide" : "shell", className]
        .filter(Boolean)
        .join(" ")}
      style={paddingBottom !== undefined ? { paddingBottom } : undefined}
    >
      <SectionLabel>{label}</SectionLabel>
      <h1 className={`${styles.title} ${styles[size]}`}>{title}</h1>
      {children}
    </section>
  );
}

export { styles as pageHeadStyles };
