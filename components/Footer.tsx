import Link from "next/link";

export default function Footer() {
  return (
    <div className="foot container">
      <span>© 2026 Bandibox SpA. Todos los derechos reservados.</span>
      <div style={{ display: "flex", gap: 20 }}>
        <Link href="/politica-privacidad">Privacidad</Link>
        <Link href="/condiciones-servicio">Términos</Link>
        <Link href="/eliminacion-datos">Eliminación de datos</Link>
        <span>Melgarejo 849, Coquimbo · Chile</span>
      </div>
    </div>
  );
}