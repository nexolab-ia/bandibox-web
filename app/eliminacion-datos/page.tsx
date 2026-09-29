import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Eliminación de datos de usuario - Bandibox SpA",
  description: "Eliminación de datos de usuario de Bandibox SpA.",
};

export default function EliminacionDatos() {
  return (
    <LegalPage kicker="Datos" title="Eliminación de datos de usuario" updated="Última actualización: 29 de septiembre de 2026">
      <div className="legal-sec">
        <span className="num">01</span>
        <div>
          <h2>Nuestro compromiso</h2>
          <p>
            <span className="legal-strong">Bandibox SpA</span> respeta el derecho de usuarios y
            clientes a solicitar la eliminación de sus datos personales y técnicos.
          </p>
        </div>
      </div>

      <div className="legal-sec">
        <span className="num">02</span>
        <div>
          <h2>¿Qué datos pueden eliminarse?</h2>
          <ul>
            <li>Tokens de acceso y credenciales de API.</li>
            <li>Logs de mensajes y actividad automatizada.</li>
            <li>Datos de contacto y configuración de flujos.</li>
          </ul>
        </div>
      </div>

      <div className="legal-sec">
        <span className="num">03</span>
        <div>
          <h2>¿Cómo solicitar la eliminación?</h2>
          <p>El titular de los datos puede enviar una solicitud a{" "}
            <a href="mailto:hola@bandibox.cc">hola@bandibox.cc</a> indicando:</p>
          <ul>
            <li>Nombre del negocio o cliente.</li>
            <li>Activo vinculado (número de WhatsApp, página, etc.).</li>
            <li>Tipo de datos que desea eliminar.</li>
          </ul>
          <p>La solicitud será atendida en un plazo máximo de 10 días hábiles.</p>
        </div>
      </div>

      <div className="legal-sec">
        <span className="num">04</span>
        <div>
          <h2>Contacto</h2>
          <p>
            Bandibox SpA · Melgarejo 849, Depto 849-G, Coquimbo, Chile
            <br />
            <a href="mailto:hola@bandibox.cc">hola@bandibox.cc</a> ·{" "}
            <a href="tel:+56984973274">+56 9 8497 3274</a>
          </p>
        </div>
      </div>
    </LegalPage>
  );
}