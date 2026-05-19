import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./page.module.css";

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <AnimatedSection>
              <span className={styles.label}>Contacto</span>
              <h1 className={styles.title}>
                Empecemos a <span>trabajar juntos</span>
              </h1>
              <p className={styles.subtitle}>
                Estamos aquí para responder tus preguntas y diseñar 
                la mejor estrategia para tu empresa.
              </p>
            </AnimatedSection>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
