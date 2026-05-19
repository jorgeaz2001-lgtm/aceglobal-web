"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.badge}>Marketing Industrial & Comercio Exterior</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.title}
        >
          Tu aliado estratégico <br />
          en <span>cada movimiento</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.subtitle}
        >
          Marketing industrial y servicios de comercio exterior para que tu empresa 
          no solo compita, sino <strong>lidere</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.ctaGroup}
        >
          <Link href="/contacto" className={styles.primaryBtn}>
            Contáctanos
          </Link>
          <Link href="/servicios" className={styles.secondaryBtn}>
            Conoce nuestros servicios
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className={styles.scrollIndicator}
      >
        <span></span>
        Scroll
      </motion.div>
    </section>
  );
}
