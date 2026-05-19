"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.contact} id="contacto">
      <div className={styles.container}>
        <div className={styles.grid}>
          <AnimatedSection className={styles.info}>
            <span className={styles.label}>Contacto</span>
            <h2 className={styles.title}>Hablemos de tu proyecto</h2>
            <p className={styles.text}>
              Estamos listos para escucharte y diseñar una estrategia a la medida de tus necesidades. 
              Escríbenos y nos pondremos en contacto contigo en menos de 24 horas.
            </p>

            <div className={styles.details}>
              <motion.div 
                className={styles.detail}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.detailIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>bsantos@aceglobal.mx</p>
                </div>
              </motion.div>

              <motion.div 
                className={styles.detail}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.detailIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4>Teléfono</h4>
                  <p>938 181 9674</p>
                </div>
              </motion.div>

              <motion.div 
                className={styles.detail}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.detailIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4>Ubicación</h4>
                  <p>México</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div 
              className={styles.ctaBox}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3>Envíanos un mensaje</h3>
              <p>
                Cuéntanos sobre tu proyecto, necesidades o preguntas. 
                Estamos aquí para ayudarte a crecer.
              </p>
              <a 
                href="mailto:bsantos@aceglobal.mx?subject=SOLICITUD%20DE%20INFORMACION" 
                className={styles.emailBtn}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Enviar mensaje
              </a>
              <span className={styles.note}>Se abrirá tu aplicación de correo</span>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
