"use client";

import { useEffect, useState } from "react";
import { segments } from "@/data/home";
import styles from "@/app/page.module.css";

const INTERVAL = 4200;

/**
 * Leiste der sieben Tätigkeitsfelder unter dem Hero.
 * Der Fokus wandert automatisch weiter, hält bei Mausberührung an
 * und lässt sich per Klick festsetzen.
 */
export default function SegmentStrip() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(
      () => setActive((i) => (i + 1) % segments.length),
      INTERVAL,
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className={styles.segments}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {segments.map((seg, i) => (
        <button
          key={seg.no}
          type="button"
          className={`${styles.segment} ${i === active ? styles.segmentActive : ""}`}
          onClick={() => setActive(i)}
          aria-pressed={i === active}
        >
          <span className={styles.segmentNo}>{seg.no}</span>
          <span className={styles.segmentTitle}>{seg.title}</span>
          <span className={styles.segmentSub}>{seg.sub}</span>
        </button>
      ))}
    </div>
  );
}
