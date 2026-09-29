import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
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

export function Brand() {
  return (
    <Link className="brand" href="/">
      <Image src="/assets/logo-mark.svg" alt="Bandibox" width={30} height={30} />
      <span>
        bandibox<span className="dot">.</span>
      </span>
    </Link>
  );
}