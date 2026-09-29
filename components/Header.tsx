import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container nav">
        <Link className="brand" href="/">
          <Image src="/assets/logo-mark.svg" alt="Bandibox" width={34} height={34} />
          <span className="band">Bandibox</span>
        </Link>
        <nav className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="btn" href="#contacto">Hablemos</a>
      </div>
    </header>
  );
}