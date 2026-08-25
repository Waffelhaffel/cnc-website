"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/data/site";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <Link
        href="/"
        className={styles.brand}
        aria-label="CNC — zur Startseite"
        onClick={close}
      >
        <Image
          src="/logo-cnc.png"
          alt="CNC"
          width={130}
          height={75}
          className={styles.logo}
          priority
        />
        <span className={styles.brandText}>
          Cologne News
          <br />
          Corporation
        </span>
      </Link>

      <button
        type="button"
        className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={open}
        aria-controls="hauptnavigation"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="hauptnavigation"
        className={`${styles.nav} ${open ? styles.navOpen : ""}`}
      >
        {nav.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.link} ${active ? styles.linkActive : ""}`}
              aria-current={active ? "page" : undefined}
              onClick={close}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
