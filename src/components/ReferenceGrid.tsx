"use client";

import { useMemo, useState } from "react";
import MediaSlot from "./MediaSlot";
import { filters, references } from "@/data/referenzen";
import styles from "./ReferenceGrid.module.css";

/** Kategorie-Filter plus Kachelraster der Produktionen. */
export default function ReferenceGrid() {
  const [active, setActive] = useState("Alle");

  const visible = useMemo(
    () =>
      active === "Alle"
        ? references
        : references.filter((r) => r.tag === active),
    [active],
  );

  return (
    <section className={`${styles.wrap} shellWide`}>
      <div className={styles.filters}>
        {filters.map((f) => (
          <button
            key={f.label}
            type="button"
            className={`${styles.filter} ${
              active === f.label ? styles.filterActive : ""
            }`}
            onClick={() => setActive(f.label)}
            aria-pressed={active === f.label}
          >
            {f.label}
            <span className={styles.filterCount}>{f.count}</span>
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map((r) => (
          <article key={r.title} className={styles.card}>
            <MediaSlot src={r.image} alt={r.title} className={styles.cardMedia}>
              <span className={styles.tag}>{r.tag}</span>
            </MediaSlot>
            <h2 className={styles.cardTitle}>{r.title}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
