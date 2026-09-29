import { ReactNode } from "react";
import Link from "next/link";

function Shield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
    </svg>
  );
}

export default function LegalPage({
  kicker,
  title,
  updated,
  children,
  brand = "Bandibox",
}: {
  kicker: string;
  title: string;
  updated: string;
  children: ReactNode;
  brand?: string;
}) {
  return (
    <>
      {/* Top bar */}
      <div className="container">
        <div className="legal-top">
          <Link href="/" className="legal-back">← Volver a {brand}</Link>
          <span className="mono" style={{ color: "var(--ink-soft)" }}>LEGAL / {brand.toUpperCase()}</span>
        </div>
      </div>

      <div className="container">
        <div className="legal-hero">
          <div className="legal-kicker">
            <Shield />
            <span className="mono" style={{ color: "var(--rose)" }}>LEGAL · {kicker.toUpperCase()}</span>
          </div>
          <h1>{title}</h1>
          <p className="legal-meta">{updated}</p>
        </div>

        <div className="legal-body">{children}</div>

        <Link href="/" className="legal-back-home">Volver al inicio ↗</Link>
      </div>
    </>
  );
}