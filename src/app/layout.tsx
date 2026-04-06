import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Focus Network — Soluções em Tecnologia",
  description:
    "Transformamos infraestrutura em inteligência. Consultoria, segurança e implementação SAP Business One para empresas que precisam escalar sem gargalos técnicos.",
  openGraph: {
    title: "Focus Network",
    description:
      "Expertise em Cloud, Segurança e Suporte de TI para empresas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
