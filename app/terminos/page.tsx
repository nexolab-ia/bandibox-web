import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Términos y condiciones - Bandibox SpA",
  description: "Términos y condiciones de Bandibox SpA.",
};

export default function Terminos() {
  return (
    <LegalPage eyebrow="Bandibox SpA · Documento legal" title="Términos y condiciones" updated="Última actualización: 29 de septiembre de 2026">
      <h2>1. Identificación del prestador</h2>
      <p>
        Estos términos rigen el uso del sitio web y los servicios ofrecidos por{" "}
        <strong>Bandibox SpA</strong>, sociedad inscrita en Chile, RUT <strong>77.314.231-9</strong>,
        con domicilio en{" "}
        <strong>
          Melgarejo 849, Depto 849-G, comuna de Coquimbo, región de Coquimbo, Chile
        </strong>
        .
      </p>
      <p>
        Contacto: <a href="mailto:hola@bandibox.cl">hola@bandibox.cl</a> ·{" "}
        <a href="tel:+56984973274">+56 9 8497 3274</a>.
      </p>

      <h2>2. Aceptación de los términos</h2>
      <p>
        Al acceder y utilizar este sitio web, declaras que has leído y aceptas estos términos y
        condiciones. Si no estás de acuerdo con ellos, te pedimos no utilizar el sitio.
      </p>

      <h2>3. Descripción del servicio</h2>
      <p>
        Bandibox SpA ofrece servicios de desarrollo de soluciones digitales, sitios web y
        automatizaciones. Los servicios concretos, su alcance, plazos y condiciones comerciales se
        acuerdan de forma particular con cada cliente.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        Todos los contenidos de este sitio web, incluyendo textos, logotipos, gráficos, código y
        diseño, son de titularidad de Bandibox SpA o de sus licenciantes, y están protegidos por la
        legislación de propiedad intelectual. Queda prohibida su reproducción sin autorización.
      </p>

      <h2>5. Uso del sitio</h2>
      <p>
        Te comprometes a utilizar este sitio de forma lícita y a no realizar acciones que puedan
        dañar, sobrecargar o impedir su correcto funcionamiento.
      </p>

      <h2>6. Enlaces a terceros</h2>
      <p>
        El sitio puede contener enlaces a sitios externos. Bandibox SpA no se hace responsable del
        contenido ni de las políticas de privacidad de dichos sitios.
      </p>

      <h2>7. Limitación de responsabilidad</h2>
      <p>
        Bandibox SpA pondrá los medios razonables para que el sitio funcione correctamente, pero no
        garantiza su disponibilidad ininterrumpida ni la ausencia de errores. No somos responsables
        de daños derivados del uso del sitio o de la imposibilidad de acceso, salvo en los casos en
        que la ley no permita excluir dicha responsabilidad.
      </p>

      <h2>8. Legislación aplicable</h2>
      <p>
        Estos términos se rigen por la legislación de la República de Chile. Para cualquier
        controversia, las partes se someten a los tribunales ordinarios de justicia de la ciudad de
        Coquimbo, Chile.
      </p>

      <h2>9. Cambios a estos términos</h2>
      <p>
        Podemos modificar estos términos en cualquier momento. Los cambios se publicarán en esta
        página y regirán desde su publicación.
      </p>
    </LegalPage>
  );
}