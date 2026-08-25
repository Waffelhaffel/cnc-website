"use client";

import { useState } from "react";
import MediaSlot from "./MediaSlot";
import styles from "./Gallery.module.css";

type Slide = { caption: string; src: string | null };

/** Einblicke-Slideshow: Pfeile links/rechts, Punkte unten. */
export default function Gallery({ slides }: { slides: Slide[] }) {
  const [pos, setPos] = useState(0);
  const count = slides.length;

  const prev = () => setPos((p) => (p - 1 + count) % count);
  const next = () => setPos((p) => (p + 1) % count);

  return (
    <div
      className={`${styles.gallery} hatch`}
      role="region"
      aria-roledescription="Slideshow"
      aria-label="Einblicke in unsere Arbeit"
    >
      {slides.map((slide, i) => (
        <MediaSlot
          key={i}
          src={slide.src}
          alt={slide.src ? slide.caption : ""}
          caption={`Slideshow — Bild ${i + 1} / ${count}`}
          captionSub={slide.caption}
          center
          wide
          className={`${styles.slide} ${i === pos ? styles.slideActive : ""}`}
        />
      ))}

      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowPrev}`}
        onClick={prev}
        aria-label="Vorheriges Bild"
      >
        ‹
      </button>
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowNext}`}
        onClick={next}
        aria-label="Nächstes Bild"
      >
        ›
      </button>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.dot} ${i === pos ? styles.dotActive : ""}`}
            onClick={() => setPos(i)}
            aria-label={`Bild ${i + 1} anzeigen`}
            aria-current={i === pos}
          />
        ))}
      </div>
    </div>
  );
}
