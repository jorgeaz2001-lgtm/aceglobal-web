"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.contact} id="contacto">
      <div className={styles.container}>
        <div className={styles.grid}>
          <AnimatedSection className={styles.info}>
            <span className={styles.label}>Contacto</span>
            <h2 className={styles.title}>Hablemos de tu proyecto</h2>
            <p className={styles.text}>
              Estamos listos para escucharte y diseñar una estrategia a la medida de tus necesidades. 
              Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
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
              className={styles.form}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {submitted ? (
                <motion.div 
                  className={styles.success}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <h3>¡Mensaje enviado!</h3>
                  <p>Gracias por contactarnos. Te responderemos en menos de 24 horas.</p>
                </motion.div>
              ) : (
                <>
                  <h3>Envíanos un mensaje</h3>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.row}>
                      <motion.div 
                        className={styles.group}
                        whileFocus={{ scale: 1.02 }}
                      >
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" required placeholder="Tu nombre" />
                      </motion.div>
                      <motion.div 
                        className={styles.group}
                        whileFocus={{ scale: 1.02 }}
                      >
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder="tu@email.com" />
                      </motion.div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.group}>
                        <label htmlFor="company">Empresa</label>
                        <input type="text" id="company" name="company" placeholder="Nombre de tu empresa" />
                      </div>
                      <div className={styles.group}>
                        <label htmlFor="phone">Teléfono</label>
                        <input type="tel" id="phone" name="phone" placeholder="Tu teléfono" />
                      </div>
                    </div>
                    <div className={styles.group}>
                      <label htmlFor="service">Servicio de interés</label>
                      <select id="service" name="service" defaultValue="">
                        <option value="" disabled>Selecciona un servicio</option>
                        <option value="marketing">Marketing Industrial</option>
                        <option value="comercio">Comercio Exterior</option>
                        <option value="ambos">Ambos</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div className={styles.group}>
                      <label htmlFor="message">Mensaje</label>
                      <textarea id="message" name="message" required placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                    </div>
                    <motion.button 
                      type="submit" 
                      className={styles.submitBtn}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Enviar mensaje
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
