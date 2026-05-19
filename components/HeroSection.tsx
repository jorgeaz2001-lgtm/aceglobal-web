"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./HeroSection.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className={styles.badge} variants={itemVariants}>
          Marketing Industrial & Comercio Exterior
        </motion.span>

        <motion.h1 className={styles.title} variants={itemVariants}>
          Tu aliado estratégico <br />
          en <span>cada movimiento</span>
        </motion.h1>

        <motion.p className={styles.subtitle} variants={itemVariants}>
          Marketing industrial y servicios de comercio exterior para que tu empresa 
          no solo compita, sino <strong>lidere</strong>.
        </motion.p>

        <motion.div className={styles.ctaGroup} variants={itemVariants}>
          <Link href="/contacto" className={styles.primaryBtn}>
            Contáctanos
          </Link>
          <Link href="/servicios" className={styles.secondaryBtn}>
            Conoce nuestros servicios
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className={styles.scrollIndicator}
      >
        <span></span>
        Scroll
      </motion.div>
    </section>
  );
}
