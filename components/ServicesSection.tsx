import AnimatedSection from "./AnimatedSection";
import Link from "next/link";
import styles from "./ServicesSection.module.css";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10"/>
        <path d="M12 20V4"/>
        <path d="M6 20v-6"/>
      </svg>
    ),
    title: "Marketing Industrial",
    description: "Impulsamos a las empresas industriales con estrategias de marketing B2B que generan visibilidad, confianza y clientes reales.",
    features: [
      "Gestión de Redes Sociales",
      "Consultoría de Estrategia Digital",
      "Campañas Publicitarias",
      "Posicionamiento SEO",
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Comercio Exterior",
    description: "Aseguramos que tus operaciones internacionales fluyan con eficiencia, cumplimiento y respaldo estratégico en cada paso.",
    features: [
      "Coordinación logística nacional e internacional",
      "Gestión aduanal con aliados certificados",
      "Seguimiento y control documental",
      "Cumplimiento normativo garantizado",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.services} id="servicios">
      <div className={styles.container}>
        <AnimatedSection className={styles.header}>
          <span className={styles.label}>Nuestros Servicios</span>
          <h2 className={styles.title}>Soluciones integrales para tu empresa</h2>
          <p className={styles.subtitle}>
            Desde la estrategia digital hasta la entrega final de tus productos, 
            te acompañamos en cada etapa del proceso.
          </p>
        </AnimatedSection>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.15}>
              <div className={styles.card}>
                <div className={styles.icon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className={styles.features}>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/servicios" className={styles.cta}>
                  Ver más detalles
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
