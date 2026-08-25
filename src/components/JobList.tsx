"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { jobs } from "@/data/jobs";
import styles from "./JobList.module.css";

/** Aufklappbare Stellenliste — beim Laden ist die erste Stelle offen. */
export default function JobList() {
  const [open, setOpen] = useState(0);
  const uid = useId();

  return (
    <>
      <h2 className={styles.count}>
        Offene Stellen · {String(jobs.length).padStart(2, "0")}
      </h2>

      <div className={styles.list}>
        {jobs.map((job, i) => {
          const isOpen = open === i;
          const panelId = `${uid}-panel-${i}`;
          const buttonId = `${uid}-button-${i}`;

          return (
            <div key={job.title} className={styles.job}>
              <button
                type="button"
                id={buttonId}
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className={styles.no}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.title}>{job.title}</span>
                <span
                  className={`${styles.plus} ${isOpen ? styles.plusOpen : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                inert={!isOpen}
              >
                <div className={styles.panelInner}>
                  <div className={styles.panelBody}>
                    <div className={styles.tags}>
                      {job.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {job.blocks.map((blk) => (
                      <div key={blk.label}>
                        <div className={styles.blockLabel}>{blk.label}</div>
                        {blk.type === "list" ? (
                          <ul className={styles.bullets}>
                            {blk.items.map((item) => (
                              <li key={item} className={styles.bullet}>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className={styles.blockText}>{blk.text}</p>
                        )}
                      </div>
                    ))}

                    <Link href="/kontakt" className={styles.apply}>
                      Jetzt bewerben →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
