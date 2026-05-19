import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./page.module.css";

const marketingServices = [
  {
    title: "Gestión de Redes Sociales",
    description: "Publicaciones técnicas y profesionales con diseño gráfico corporativo. Estrategia mensual de contenido adaptada a tu audiencia B2B.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    title: "Consultoría de Estrategia Digital",
    description: "Diagnóstico de marca y canales. Análisis competitivo y estrategia de contenido personalizada. Planes mensuales, trimestrales o anuales.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    title: "Campañas Publicitarias",
    description: "Diseño de objetivos y mensajes. Creación de contenido creativo (copy + imagen). Configuración de pauta y seguimiento continuo.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
      </svg>
    ),
  },
  {
    title: "Posicionamiento SEO",
    description: "Auditoría completa del sitio web. Optimización de contenido existente. Blog técnico mensual para generar autoridad en tu sector.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
        <path d="M11 8v6"/>
        <path d="M8 11h6"/>
      </svg>
    ),
  },
];

const tradeServices = [
  {
    title: "Coordinación Logística",
    description: "Gestión integral de transporte nacional e internacional. Optimización de rutas y tiempos de entrega.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    title: "Gestión Aduanal",
    description: "Trámites aduanales con aliados certificados. Clasificación arancelaria y cumplimiento normativo en cada operación.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    title: "Control Documental",
    description: "Seguimiento y control documental en cada etapa. Organización y archivo de toda la documentación de comercio exterior.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <path d="M9 15l2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: "Consultoría en Comercio Exterior",
    description: "Asesoría estratégica para importar o comercializar productos en México. Reducción de tiempos y costos operativos.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <AnimatedSection>
              <span className={styles.label}>Nuestros Servicios</span>
              <h1 className={styles.title}>Soluciones diseñadas para <span>liderar</span></h1>
              <p className={styles.subtitle}>
                Desde la estrategia digital hasta la entrega final, ofrecemos un ecosistema 
                integral de servicios para empresas industriales.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <AnimatedSection className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Marketing Digital</span>
              <h2>Marketing Industrial</h2>
              <p>
                Impulsamos a las empresas industriales con estrategias de marketing B2B 
                que generan visibilidad, confianza y clientes reales.
              </p>
            </AnimatedSection>

            <div className={styles.grid}>
              {marketingServices.map((service, index) => (
                <AnimatedSection key={service.title} delay={index * 0.1}>
                  <div className={styles.card}>
                    <div className={styles.icon}>{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.alt}`}>
          <div className={styles.container}>
            <AnimatedSection className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Comercio Exterior</span>
              <h2>Servicios de Comercio Exterior</h2>
              <p>
                Somos tu aliado estratégico para importar o comercializar productos en México, 
                ofreciendo soluciones integrales desde la gestión documental hasta la entrega final.
              </p>
            </AnimatedSection>

            <div className={styles.grid}>
              {tradeServices.map((service, index) => (
                <AnimatedSection key={service.title} delay={index * 0.1}>
                  <div className={styles.card}>
                    <div className={styles.icon}>{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <AnimatedSection>
              <h2>¿Necesitas una solución a la medida?</h2>
              <p>Contáctanos y diseñemos juntos la estrategia perfecta para tu empresa.</p>
              <a href="/contacto" className={styles.ctaBtn}>Solicitar información</a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
