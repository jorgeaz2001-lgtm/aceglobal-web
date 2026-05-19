"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/images/logo.png" alt="Ace Global Solutions" />
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
          <span className={menuOpen ? styles.open : ""}></span>
          <span className={menuOpen ? styles.open : ""}></span>
          <span className={menuOpen ? styles.open : ""}></span>
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
