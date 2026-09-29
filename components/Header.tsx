import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container nav">
        <Link className="brand" href="/">
          <Image src="/assets/logo-mark.svg" alt="Bandibox" width={30} height={30} />
          <span>
            bandibox<span className="dot">.</span>
          </span>
        </Link>
        <nav className="nav-links">
          <a href="#que-es">La solución</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#casos">Casos</a>
          <a href="#porque">Por qué</a>
        </nav>
        <a className="pill pill-dark" href="#contacto">Hablemos ↗</a>
      </div>
    </header>
  );
}