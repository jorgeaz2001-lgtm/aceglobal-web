import AnimatedSection from "./AnimatedSection";
import Link from "next/link";
import styles from "./WhyUsSection.module.css";

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Reducción de tiempos",
    description: "Agilizamos trámites y liberación de mercancías.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Cumplimiento normativo",
    description: "Cada operación cumple con todas las regulaciones.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Experiencia sectorial",
    description: "Offshore, textil y siderúrgico.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "Transparencia total",
    description: "Confidencialidad en cada proyecto.",
  },
];

export default function WhyUsSection() {
  return (
    <section className={styles.whyUs}>
      <div className={styles.container}>
        <AnimatedSection className={styles.header}>
          <span className={styles.label}>¿Por qué elegirnos?</span>
          <h2 className={styles.title}>Confianza respaldada por resultados</h2>
          <p className={styles.subtitle}>
            Nuestros clientes nos eligen porque ofrecemos algo que pocos pueden: 
            una combinación única de expertise en marketing y operaciones internacionales.
          </p>
        </AnimatedSection>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <AnimatedSection key={reason.title} delay={index * 0.1}>
              <div className={styles.card}>
                <div className={styles.icon}>{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className={styles.cta}>
            <h3>¿Listo para liderar tu industria?</h3>
            <p>
              Ya no se trata solo de participar. Se trata de liderar. 
              Hablemos sobre cómo podemos transformar tu empresa.
            </p>
            <Link href="/contacto" className={styles.btn}>
              Agendar una consulta
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
