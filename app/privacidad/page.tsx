import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Política de privacidad - Bandibox SpA",
  description: "Política de privacidad de Bandibox SpA.",
};

export default function Privacidad() {
  return (
    <LegalPage eyebrow="Bandibox SpA · Documento legal" title="Política de privacidad" updated="Última actualización: 29 de septiembre de 2026">
      <h2>1. Responsable del tratamiento</h2>
      <p>
        El responsable del tratamiento de los datos personales es <strong>Bandibox SpA</strong>,
        sociedad inscrita en Chile, RUT <strong>77.314.231-9</strong>, con domicilio en{" "}
        <strong>
          Melgarejo 849, Depto 849-G, comuna de Coquimbo, región de Coquimbo, Chile
        </strong>
        .
      </p>
      <p>
        Para cualquier consulta sobre esta política o sobre el tratamiento de tus datos, puedes
        escribirnos a <a href="mailto:hola@bandibox.cl">hola@bandibox.cl</a> o llamarnos al{" "}
        <a href="tel:+56984973274">+56 9 8497 3274</a>.
      </p>

      <h2>2. Datos que recopilamos</h2>
      <p>Recopilamos únicamente los datos que nos entregas de forma voluntaria al contactarnos o al solicitar un servicio, tales como:</p>
      <ul>
        <li>Nombre y apellidos.</li>
        <li>Correo electrónico.</li>
        <li>Número de teléfono.</li>
        <li>Información sobre tu empresa o proyecto que nos compartas en la conversación.</li>
      </ul>

      <h2>3. Finalidad del tratamiento</h2>
      <p>Usamos tus datos para:</p>
      <ul>
        <li>Responder a tus consultas y cotizaciones.</li>
        <li>Prestar los servicios contratados y gestionar la relación comercial.</li>
        <li>Cumplir con obligaciones legales y tributarias.</li>
      </ul>

      <h2>4. Base legal</h2>
      <p>
        Tratamos tus datos personales con tu consentimiento, expreso al contactarnos, y para la
        ejecución del contrato de prestación de servicios cuando aplica. El tratamiento se realiza
        conforme a la normativa chilena de protección de datos personales.
      </p>

      <h2>5. Compartir información</h2>
      <p>
        No vendemos ni cedemos tus datos personales a terceros. Solo podemos compartirlos cuando sea
        requerido por ley, por autoridad competente, o con proveedores que nos ayudan a operar (por
        ejemplo, hosting) bajo obligaciones de confidencialidad.
      </p>

      <h2>6. Almacenamiento y seguridad</h2>
      <p>
        Tus datos se almacenan en servicios seguros y se protegen con medidas técnicas y
        organizativas razonables para impedir accesos no autorizados, pérdida o alteración.
      </p>

      <h2>7. Retención</h2>
      <p>
        Conservamos tus datos solo mientras sea necesario para las finalidades descritas y para
        cumplir obligaciones legales. Luego son eliminados o anonimizados.
      </p>

      <h2>8. Tus derechos</h2>
      <p>
        De acuerdo con la normativa aplicable, puedes solicitar el acceso, rectificación,
        cancelación, oposición y portabilidad de tus datos personales, así como revocar tu
        consentimiento. Para ejercer estos derechos, escríbenos a{" "}
        <a href="mailto:hola@bandibox.cl">hola@bandibox.cl</a>.
      </p>

      <h2>9. Menores de edad</h2>
      <p>
        Nuestros servicios no están dirigidos a menores de 18 años y no recopilamos de forma
        deliberada datos personales de menores.
      </p>

      <h2>10. Cambios a esta política</h2>
      <p>
        Podemos actualizar esta política periódicamente. Publicaremos cualquier cambio en esta
        página con la fecha de última actualización.
      </p>
    </LegalPage>
  );
}