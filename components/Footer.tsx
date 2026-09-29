import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

function Brand({ children }: { children?: ReactNode }) {
  return (
    <div className="foot-brand">
      <Link className="brand" href="/">
        <Image src="/assets/logo-mark.svg" alt="Bandibox" width={34} height={34} />
        <span className="band">Bandibox</span>
      </Link>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <Brand>
            <p>Soluciones digitales, sitios web y automatizaciones para negocios que quieren crecer.</p>
          </Brand>
          <div className="foot-col">
            <h5>Navegación</h5>
            <Link href="/#servicios">Servicios</Link>
            <Link href="/#proceso">Proceso</Link>
            <Link href="/#contacto">Contacto</Link>
          </div>
          <div className="foot-col">
            <h5>Legal</h5>
            <Link href="/privacidad">Política de privacidad</Link>
            <Link href="/terminos">Términos y condiciones</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Bandibox SpA. Todos los derechos reservados.</span>
          <div className="foot-legal">
            <Link href="/privacidad">Privacidad</Link>
            <Link href="/terminos">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}