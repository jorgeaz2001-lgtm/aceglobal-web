import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ace Global Solutions | Marketing Industrial & Comercio Exterior",
  description: "Tu aliado estratégico en cada movimiento. Marketing industrial y servicios de comercio exterior para que tu empresa no solo compita, sino lidere.",
  keywords: ["marketing industrial", "comercio exterior", "B2B", "logística", "aduanal", "México"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
