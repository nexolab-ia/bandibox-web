import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Política de privacidad - Bandibox SpA",
  description: "Política de privacidad de Bandibox SpA.",
};

export default function PoliticaPrivacidad() {
  return (
    <LegalPage kicker="Privacidad" title="Política de privacidad" updated="Última actualización: 29 de septiembre de 2026">
      <div className="legal-sec">
        <span className="num">01</span>
        <div>
          <h2>Nuestro compromiso</h2>
          <p>
            En <span className="legal-strong">Bandibox SpA</span> valoramos la privacidad de nuestros
            usuarios, clientes y visitantes. Esta política describe cómo recopilamos, usamos,
            almacenamos y protegemos la información personal en relación con nuestros servicios de
            automatización, mensajería y asistencia técnica, a través de plataformas como WhatsApp
            Business API, Meta, n8n y otros canales digitales.
          </p>
        </div>
      </div>

      <div className="legal-sec">
        <span className="num">02</span>
        <div>
          <h2>Responsable del tratamiento</h2>
          <p>
            El responsable es <span className="legal-strong">Bandibox SpA</span>, RUT{" "}
            <span className="legal-strong">77.314.231-9</span>, con domicilio en{" "}
            <span className="legal-strong">Melgarejo 849, Depto 849-G, Coquimbo, Chile</span>.
            Contacto: <a href="mailto:hola@bandibox.cc">hola@bandibox.cc</a> ·{" "}
            <a href="tel:+56984973274">+56 9 8497 3274</a>.
          </p>
        </div>
      </div>

      <div className="legal-sec">
        <span className="num">03</span>
        <div>
          <h2>Información que podemos tratar</h2>
          <p>Podemos recopilar la siguiente información:</p>
          <ul>
            <li>Datos de contacto: nombre, correo electrónico, número de teléfono.</li>
            <li>Información de negocio: nombre de la empresa, identificadores de WhatsApp, páginas y configuraciones de clientes.</li>
            <li>Datos técnicos: tokens de acceso, IDs de aplicaciones, configuración de webhooks y logs de automatización.</li>
            <li>Información de uso: métricas de interacción, tasas de entrega y errores técnicos.</li>
          </ul>
        </div>
      </div>

      <div className="legal-sec">
        <span className="num">04</span>
        <div>
          <h2>Cómo usamos la información</h2>
          <ul>
            <li>Configurar y operar flujos automatizados en plataformas como WhatsApp, Facebook e Instagram.</li>
            <li>Gestionar integraciones técnicas con APIs y herramientas como n8n.</li>
            <li>Proveer soporte técnico, monitoreo y mejoras continuas.</li>
            <li>Cumplir con requisitos legales y de cumplimiento.</li>
          </ul>
        </div>
      </div>

      <div className="legal-sec">
        <span className="num">05</span>
        <div>
          <h2>Compartición de datos</h2>
          <p>No vendemos ni compartimos información personal con terceros, salvo en los siguientes casos:</p>
          <ul>
            <li>Con Meta Platforms Inc., para la activación y operación de las APIs.</li>
            <li>Con proveedores de infraestructura técnica bajo acuerdos de confidencialidad.</li>
            <li>Cuando sea requerido por ley o autoridad competente.</li>
          </ul>
        </div>
      </div>

      <div className="legal-sec">
        <span className="num">06</span>
        <div>
          <h2>Seguridad</h2>
          <ul>
            <li>Acceso restringido a tokens y credenciales.</li>
            <li>Segmentación de flujos por cliente.</li>
            <li>Monitoreo de calidad y uso responsable de las APIs.</li>
          </ul>
        </div>
      </div>

      <div className="legal-sec">
        <span className="num">07</span>
        <div>
          <h2>Tus derechos</h2>
          <p>Puedes solicitar el acceso, rectificación o eliminación de tus datos, revocar el consentimiento e informarte sobre cómo se procesan. Para ejercer estos derechos, escríbenos a{" "}
            <a href="mailto:hola@bandibox.cc">hola@bandibox.cc</a>.
          </p>
        </div>
      </div>
    </LegalPage>
  );
}