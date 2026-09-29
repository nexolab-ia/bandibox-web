import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <section className="page-hero">
        <div className="container">
          <span className="mono">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="updated">{updated}</p>
        </div>
      </section>
      <div className="container legal-body">{children}</div>
      <Footer />
    </>
  );
}