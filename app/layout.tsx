import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "OSYS — Prévention, préparation et orientation",
    template: "%s | OSYS"
  },
  description:
    "OSYS aide à comprendre une situation, préparer les prochaines étapes et retrouver des ressources adaptées, avec discrétion et clarté.",
  keywords: [
    "OSYS",
    "prévention",
    "préparation",
    "orientation",
    "violence psychologique",
    "emprise",
    "relation toxique",
    "violence conjugale",
    "ressources d'aide",
    "préparer un départ"
  ],
  metadataBase: new URL("https://osys.local"),
  openGraph: {
    title: "OSYS — Prévention, préparation et orientation",
    description:
      "Préparer aujourd’hui ce dont vous pourriez avoir besoin demain.",
    type: "website",
    locale: "fr_FR"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}