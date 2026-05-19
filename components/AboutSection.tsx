import AnimatedSection from "./AnimatedSection";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.about} id="nosotros">
      <div className={styles.container}>
        <div className={styles.grid}>
          <AnimatedSection className={styles.imageWrapper}>
            <div className={styles.image}>
              <div className={styles.placeholder}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="1">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
                <p style={{ marginTop: 16 }}>Imagen corporativa<br/>de la empresa</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className={styles.content}>
            <span className={styles.label}>Sobre Nosotros</span>
            <h2 className={styles.title}>
              Dos fuerzas que pocas veces se encuentran
            </h2>
            <p className={styles.text}>
              Tu empresa merece un aliado que combine <span className={styles.highlight}>visión estratégica</span> y 
              <span className={styles.highlight}> soluciones prácticas</span>. En Ace Global Solutions unimos 
              estrategias de marketing B2B diseñadas para la industria y servicios de comercio exterior 
              que abren puertas a nuevos mercados.
            </p>
            <p className={styles.text}>
              No somos un proveedor más: somos un socio que se involucra en tus procesos, entiende tu mercado 
              y trabaja contigo para transformar cada movimiento en una ventaja competitiva.
            </p>
            <p className={styles.text}>
              Nuestro compromiso es simple pero poderoso: <span className={styles.highlight}>innovación, transparencia y pasión</span> en cada proyecto. 
              En Ace Global Solutions hacemos nuestros tus retos, porque creemos que el éxito de tu empresa es también el nuestro.
            </p>

            <div className={styles.values}>
              <div className={styles.value}>
                <h4>10+</h4>
                <p>Años de experiencia</p>
              </div>
              <div className={styles.value}>
                <h4>50+</h4>
                <p>Proyectos exitosos</p>
              </div>
              <div className={styles.value}>
                <h4>3</h4>
                <p>Sectores líderes</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
