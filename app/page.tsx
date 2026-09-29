import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="mono">Bandibox SpA · Coquimbo, Chile</span>
            <h1>
              Soluciones digitales que <span className="accent">impulsan tu negocio</span>
            </h1>
            <p className="sub">
              Desarrollamos sitios web, automatizaciones y soluciones a medida. Tecnología clara,
              hecha para vender más, atender mejor y crecer sin fricción.
            </p>
            <div className="hero-ctas">
              <a className="btn" href="#contacto">Cotiza tu proyecto</a>
              <a className="btn-ghost" href="#servicios">Ver servicios</a>
            </div>
          </div>
          <div className="hero-img">
            <Image
              src="/assets/hero.jpg"
              alt="Espacio de trabajo de desarrollo de software de Bandibox"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="container">
          <div className="hero-stats">
            <div className="stat">
              <span className="mono">Enfoque</span>
              <b>Resultados</b>
            </div>
            <div className="stat">
              <span className="mono">Alcance</span>
              <b>Latinoamérica</b>
            </div>
            <div className="stat">
              <span className="mono">Método</span>
              <b>A medida</b>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="servicios">
        <div className="container">
          <div className="section-head">
            <span className="mono">Servicios</span>
            <h2>Lo que hacemos por tu negocio</h2>
          </div>
          <div className="svc-grid">
            <div className="svc">
              <span className="num">01</span>
              <h3>Sitios web</h3>
              <p>
                Páginas rápidas, modernas y diseñadas para convertir visitas en clientes. Landings,
                sitios corporativos y tiendas online.
              </p>
            </div>
            <div className="svc">
              <span className="num">02</span>
              <h3>Automatizaciones</h3>
              <p>
                Conexiones entre tus herramientas que ahorran horas de trabajo repetitivo: WhatsApp,
                n8n, correo, planillas y APIs.
              </p>
            </div>
            <div className="svc">
              <span className="num">03</span>
              <h3>Soluciones a medida</h3>
              <p>
                Software, integraciones y herramientas diseñadas para el proceso específico de tu
                negocio. Nada de plantillas genéricas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="proceso">
        <div className="container">
          <div className="section-head">
            <span className="mono">Proceso</span>
            <h2>De la idea al lanzamiento, sin vueltas</h2>
          </div>
          <div className="steps">
            <div className="step">
              <h4>Conversamos</h4>
              <p>Entendemos tu negocio y lo que necesitas lograr.</p>
            </div>
            <div className="step">
              <h4>Proponemos</h4>
              <p>Diseñamos la solución, el alcance y el presupuesto.</p>
            </div>
            <div className="step">
              <h4>Construimos</h4>
              <p>Desarrollamos con foco en calidad y en tus objetivos.</p>
            </div>
            <div className="step">
              <h4>Entregamos</h4>
              <p>Dejamos todo funcionando y te acompañamos después.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container why-grid">
          <div className="why-list">
            <div className="section-head" style={{ marginBottom: 24 }}>
              <span className="mono">Por qué Bandibox</span>
              <h2>Un socio técnico, no un proveedor más</h2>
            </div>
            <div className="why-item">
              <div className="dot">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h4>Entregas a tiempo</h4>
                <p>Plazos claros y cumplidos desde el primer día.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="dot">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div>
                <h4>Comunicación directa</h4>
                <p>Hablas con quien construye, sin intermediarios.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="dot">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
                </svg>
              </div>
              <div>
                <h4>Tecnología sólida</h4>
                <p>Soluciones modernas, seguras y fáciles de mantener.</p>
              </div>
            </div>
          </div>
          <div className="why-visual">
            <Image
              src="/assets/why.jpg"
              alt="Trabajo en equipo en el desarrollo de una automatización para un cliente"
              width={576}
              height={1024}
              style={{ width: "100%", height: "100%", objectFit: "cover", aspectRatio: "4.5/4" }}
            />
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>¿Tienes una idea o un problema que resolver?</h2>
              <p>Cuéntanos qué necesitas y te respondemos con una propuesta clara.</p>
            </div>
            <a className="btn" href="#contacto">Cotiza tu proyecto</a>
          </div>
        </div>
      </section>

      <section id="contacto">
        <div className="container">
          <div className="section-head">
            <span className="mono">Contacto</span>
            <h2>Hablemos de tu proyecto</h2>
          </div>
          <div className="contact-grid">
            <div>
              <div className="contact-item">
                <span className="mono">WhatsApp</span>
                <a href="https://wa.me/56984973274">+56 9 8497 3274</a>
              </div>
              <div className="contact-item">
                <span className="mono">Correo</span>
                <a href="mailto:hola@bandibox.cl">hola@bandibox.cl</a>
              </div>
              <div className="contact-item">
                <span className="mono">Ubicación</span>
                <a href="https://maps.google.com/?q=Melgarejo+849+Coquimbo+Chile">
                  Melgarejo 849, Depto 849-G, Coquimbo, Chile
                </a>
              </div>
            </div>
            <p className="contact-note">
              Escríbenos por WhatsApp o correo. Te leemos el mismo día y armamos el camino más simple
              para lograr lo que necesitas.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}