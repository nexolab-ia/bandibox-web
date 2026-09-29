import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-top">
          <span>Fábrica de automatización con IA</span>
          <span>Para agencias y consultores</span>
        </div>
        <div className="container">
          <div className="display hero-title">
            Tu agencia
            <br />
            en automáti<span style={{ color: "var(--rose)" }}>co.</span>
          </div>
          <div className="hero-subrow">
            <span><span className="dot" /> AUTOMATIZACIÓN × AGENCIA</span>
            <span>EN MOVIMIENTO</span>
          </div>

          <div className="hero-body">
            <div className="hero-left">
              <div className="eyebrow">MENOS OPERACIÓN. MÁS VENTAS.</div>
              <h2>Sistemas listos para vender bajo tu marca.</h2>
              <p>
                Voz, WhatsApp, OCR, accesos y cobranza automatizada. Desarrollamos,
                desplegamos y mantenemos la infraestructura para que tu agencia ofrezca
                automatización sin construir nada de cero.
              </p>
              <div className="hero-ctas">
                <a className="pill pill-yellow pill-arrow" href="#contacto">Automatizar para mi agencia</a>
                <a className="link-arrow" href="#que-es">Ver cómo funciona</a>
              </div>
              <div className="tag-strip">
                <span className="tag">WHATSAPP OFICIAL</span>
                <span className="tag">INSTANCIAS DEDICADAS</span>
                <span className="tag">IA CON TU CONTEXTO</span>
              </div>
            </div>

            <div className="hero-mockup">
              <div className="mock-bar">
                <span>Whitelabel · Demo</span>
                <div className="mock-tabs">
                  <span className="mock-tab on">CRM</span>
                  <span className="mock-tab">IA</span>
                  <span className="mock-tab">VOZ</span>
                </div>
              </div>
              <div className="mock-body">
                <div className="mock-msg">
                  <div className="mock-avatar g">L</div>
                  <div className="mock-txt"><strong>Lucía Martínez</strong><span>Nueva conversación</span></div>
                  <span className="mock-status">● Conectado</span>
                </div>
                <div className="mock-msg">
                  <div className="mock-avatar">B</div>
                  <div className="mock-txt"><strong>Contacto · Atención</strong><span>Agente IA responde</span></div>
                  <span className="mock-status ia">● IA activa</span>
                </div>
                <div className="mock-msg">
                  <div className="mock-avatar g">R</div>
                  <div className="mock-txt"><strong>Cita programada</strong><span>Automatizado</span></div>
                  <span className="mock-status">● Agenda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ ES */}
      <section id="que-es" className="container">
        <div className="section-head">
          <span className="badge"><span className="num">01</span> De la conversación a la acción</span>
          <p>Tu agencia vende el sistema. Nosotros lo construimos. Tu marca queda al frente.</p>
        </div>

        <div className="flow">
          <div className="flow-step">
            <div className="flow-icon yellow">💬</div>
            <div><b>Tu agencia</b><span>Vende bajo tu marca</span></div>
          </div>
          <div className="flow arrow">→</div>
          <div className="flow-step">
            <div className="flow-icon rose">⚡</div>
            <div><b>Bandibox</b><span>Construye y despliega</span></div>
          </div>
          <div className="flow arrow">→</div>
          <div className="flow-step">
            <div className="flow-icon dark">✓</div>
            <div><b>Tu cliente recibe</b><span>Un sistema operando</span></div>
          </div>
        </div>

        <div className="grid3">
          <div className="feat">
            <h4>Multiplica tu alcance</h4>
            <p>Suma automatización a tu portafolio sin contratar ingenieros ni infraestructura.</p>
          </div>
          <div className="feat">
            <h4>Instancias dedicadas</h4>
            <p>Cada cliente opera en su propia instancia privada, sin recursos compartidos.</p>
          </div>
          <div className="feat">
            <h4>Tu marca al frente</h4>
            <p>El sistema corre bajo tu identidad. Tu cliente nunca sabe que hay un partner detrás.</p>
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section id="catalogo" className="container">
        <div className="section-head">
          <span className="badge"><span className="num">02</span> Catálogo de sistemas</span>
          <h2>Módulos listos para tu agencia</h2>
        </div>

        <div className="cat-list">
          <div className="cat-row hl">
            <span className="num">01</span>
            <div><h5>WhatsApp + CRM</h5><p>Agentes inteligentes para atención, seguimiento y cierre de ventas.</p></div>
            <div className="spacer" />
            <span className="cat-chip">NUESTRA ESPECIALIDAD</span>
          </div>
          <div className="cat-row">
            <span className="num">02</span>
            <div><h5>Agentes de voz</h5><p>Atención telefónica automatizada para soporte y calificación de leads.</p></div>
            <div className="spacer" />
            <span className="cat-chip">ATENCIÓN</span>
          </div>
          <div className="cat-row">
            <span className="num">03</span>
            <div><h5>Gastos y documentos</h5><p>Rendición por foto de ticket con extracción de datos y reportes.</p></div>
            <div className="spacer" />
            <span className="cat-chip">OCR + OPERACIÓN</span>
          </div>
          <div className="cat-row">
            <span className="num">04</span>
            <div><h5>Accesos inteligentes</h5><p>Control de acceso residencial y empresarial con QR dinámico.</p></div>
            <div className="spacer" />
            <span className="cat-chip">CONTROL DE ACCESO</span>
          </div>
          <div className="cat-row">
            <span className="num">05</span>
            <div><h5>Recordatorios de cobranza</h5><p>Cobranza automatizada vía WhatsApp con escalamiento progresivo.</p></div>
            <div className="spacer" />
            <span className="cat-chip">SEGUIMIENTO</span>
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section id="casos" className="container">
        <div className="section-head">
          <span className="badge"><span className="num">03</span> Problemas reales, sistemas que los resuelven</span>
          <h2>Sistemas en producción, no prototipos</h2>
        </div>
        <div className="grid4">
          <div className="case">
            <div className="top"><span className="num">01</span><span className="icon">🛡️</span></div>
            <span className="tag">SEGURIDAD PRIVADA</span>
            <h5>Caso Águilas</h5>
            <p>WhatsApp CRM y agentes de voz para guardias y coordinación.</p>
          </div>
          <div className="case">
            <div className="top"><span className="num">02</span><span className="icon">💰</span></div>
            <span className="tag">COBRANZA RECURRENTE</span>
            <h5>Cada pago en el radar</h5>
            <p>Recordatorios y seguimiento para pagos mensuales.</p>
          </div>
          <div className="case">
            <div className="top"><span className="num">03</span><span className="icon">🔑</span></div>
            <span className="tag">RESIDENCIALES</span>
            <h5>Accesos bajo control</h5>
            <p>Visitantes, códigos QR y bitácora automática.</p>
          </div>
          <div className="case">
            <div className="top"><span className="num">04</span><span className="icon">📈</span></div>
            <span className="tag">ALTO VOLUMEN</span>
            <h5>Más conversaciones, más orden</h5>
            <p>Sistemas para más de 1,000 mensajes al día.</p>
          </div>
        </div>
      </section>

      {/* POR QUÉ (dark) */}
      <section id="porque" className="container">
        <div className="dark-sec">
          <div className="section-head">
            <span className="badge"><span className="num">04</span> De tu operación a tu sistema</span>
            <h2>Tu negocio tiene su manera. <em>La entendemos.</em></h2>
          </div>
          <div className="split">
            <div>
              <p style={{ color: "#B9B6C0", marginBottom: 28, maxWidth: "40ch" }}>
                Diseñamos la automatización alrededor de tus procesos. Conectamos tu ERP,
                CRM, Excel y WhatsApp en una sola operación.
              </p>
              <a className="pill pill-yellow pill-arrow" href="#contacto">Conectemos tu operación</a>
            </div>
            <div className="steps2">
              <div className="step2">
                <span className="num">01</span>
                <div><h5>Conocemos tu operación</h5><p>Entendemos servicios, procesos y puntos de fricción.</p></div>
              </div>
              <div className="step2">
                <span className="num">02</span>
                <div><h5>Configuramos y conectamos</h5><p>Integramos con tu ERP y traemos la automatización a producción.</p></div>
              </div>
              <div className="step2">
                <span className="num">03</span>
                <div><h5>Te acompañamos a operar</h5><p>Despliegue e infraestructura dedicada, con soporte continuo.</p></div>
              </div>
            </div>
          </div>
          <div className="tech-strip">
            <div className="tech-chip"><b>🛡️ WhatsApp oficial</b><span>Infraestructura Meta-compatible</span></div>
            <div className="tech-chip"><b>🖥️ Instancias dedicadas</b><span>Servidores privados por cliente</span></div>
            <div className="tech-chip"><b>🗄️ Tus datos conectados</b><span>ERP · CRM · Excel · WhatsApp</span></div>
          </div>
        </div>
      </section>

      {/* BIO / CONTACTO */}
      <section id="contacto" className="container bio">
        <div className="founder-img">
          <img src="/assets/why.jpg" alt="Equipo Bandibox" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div>
          <div className="section-head" style={{ marginBottom: 12 }}>
            <span className="badge"><span className="num">05</span> La fábrica detrás de tu marca</span>
            <h2>Automatización que hace avanzar a tu agencia.</h2>
          </div>
          <p style={{ color: "var(--ink-soft)", marginBottom: 28, maxWidth: "44ch" }}>
            Bandibox SpA construye sistemas de automatización para agencias y consultores
            que quieren vender más sin construir infraestructura. Desde Coquimbo, Chile,
            para Latinoamérica.
          </p>
          <div className="hero-ctas">
            <a className="pill pill-yellow pill-arrow" href="https://wa.me/56984973274">Hablemos por WhatsApp</a>
            <a className="pill pill-dark" href="mailto:hola@bandibox.cc">hola@bandibox.cc</a>
          </div>
        </div>
      </section>

      {/* FAB WhatsApp */}
      <a className="fab" href="https://wa.me/56984973274" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.2h-.01a9.05 9.05 0 01-4.61-1.26l-.33-.2-3.42.9.91-3.34-.21-.34a9.05 9.05 0 01-1.39-4.84c0-5 4.06-9.06 9.07-9.06a9.01 9.01 0 016.42 2.66 9.01 9.01 0 012.64 6.42c0 5-4.06 9.06-9.07 9.06z"/></svg>
      </a>

      <div className="foot container">
        <span>© 2026 Bandibox SpA. Todos los derechos reservados.</span>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/terminos">Términos</Link>
          <span>Melgarejo 849, Coquimbo · Chile</span>
        </div>
      </div>
    </>
  );
}