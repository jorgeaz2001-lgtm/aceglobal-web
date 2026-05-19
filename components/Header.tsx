"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/images/logo.png" alt="Ace Global Solutions" />
          <span className={styles.logoText}>
            ACE <span>GLOBAL</span>
          </span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Inicio</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/contacto">Contacto</Link>
          <Link href="/contacto" className={styles.cta}>
            Contáctanos
          </Link>
        </nav>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
        <Link href="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link>
        <Link href="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
        <Link href="/contacto" className={styles.cta} onClick={() => setMenuOpen(false)}>
          Contáctanos
        </Link>
      </nav>
    </header>
  );
}
