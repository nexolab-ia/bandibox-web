import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bandibox - Fábrica de automatización con IA para agencias",
  description:
    "Sistemas de voz, WhatsApp, OCR, accesos y cobranza automatizada, listos para vender bajo la marca de tu agencia. Bandibox SpA, Coquimbo, Chile.",
  icons: {
    icon: "/assets/logo-mark.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}