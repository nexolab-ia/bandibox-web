import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Condiciones del servicio - Bandibox SpA",
  description: "Condiciones del servicio de Bandibox SpA.",
};

export default function CondicionesServicio() {
  return (
    <LegalPage kicker="Términos" title="Condiciones del servicio" updated="Última actualización: 29 de septiembre de 2026">
      <div className="legal-sec">
        <span className="num">01</span>
        <div>
          <h2>Identificación del prestador</h2>
          <p>
            Estas condiciones regulan el uso de las soluciones de automatización ofrecidas por{" "}
            <span className="legal-strong">Bandibox SpA</span>, RUT{" "}
            <span className="legal-strong">77.314.231-9</span>, con domicilio en{" "}
            <span className="legal-strong">Melgarejo 849, Depto 849-G, Coquimbo, Chile</span>.
            Contacto: <a href="mailto:hola@bandibox.cc">hola@bandibox.cc</a> ·{" "}
            <a href="tel:+56984973274">+56 9 8497 3274</a>.
          </p>
        </div>
      </div>

      <div className="legal-sec">
        <span className="num">02</span>
        <div>
          <h2>Servicios ofrecidos</h2>
          <p>Bandibox SpA provee a empresas y agencias clientes:</p>
          <ul>
            <li>Automatización de bandejas de entrada de WhatsApp.</li>
            <li>Chatbots para atención al cliente, recordatorios y flujos personalizados.</li>
            <li>Sistemas white-label de voz, gastos, accesos y cobranza.</li>
            <li>Integraciones con APIs y plataformas de terceros como n8n.</li>
            <li>Soporte técnico y documentación para la activación y operación.</li>
          </ul>
        </div>
      </div>

      <div className="legal-sec">
        <span className="num">03</span>
        <div>
          <h2>Responsabilidades de Bandibox SpA</h2>
          <ul>
            <li>Configurar y operar los flujos técnicos de forma segura y segmentada.</li>
            <li>Mantener la confidencialidad de tokens, credenciales y datos del cliente.</li>
            <li>Proveer soporte técnico y documentación clara.</li>
            <li>No usar los activos del cliente para fines distintos a los contratados.</li>
          </ul>
        </div>
      </div>

      <div className="legal-sec">
        <span className="num">04</span>
        <div>
          <h2>Limitación de responsabilidad</h2>
          <p>Bandibox SpA no se hace responsable por:</p>
          <ul>
            <li>Suspensiones o bloqueos realizados por plataformas de terceros.</li>
            <li>Errores derivados de activos mal configurados por el cliente.</li>
            <li>Pérdida de datos por uso indebido de las APIs fuera de los flujos autorizados.</li>
          </ul>
        </div>
      </div>

      <div className="legal-sec">
        <span className="num">05</span>
        <div>
          <h2>Legislación aplicable</h2>
          <p>
            Estas condiciones se rigen por la legislación de la República de Chile. Para cualquier
            controversia, las partes se someten a los tribunales ordinarios de justicia de la ciudad
            de Coquimbo, Chile.
          </p>
        </div>
      </div>

      <div className="legal-sec">
        <span className="num">06</span>
        <div>
          <h2>Modificaciones</h2>
          <p>
            Estas condiciones pueden actualizarse. Se notificará a los clientes por correo o a
            través del sitio web.
          </p>
        </div>
      </div>
    </LegalPage>
  );
}