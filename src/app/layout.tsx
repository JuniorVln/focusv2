import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Focus Network — Tudo o que sua empresa precisa na nuvem",
  description:
    "Azure, AWS e Oracle Cloud: migração e gestão de ambientes, arquitetura multi-cloud, Kubernetes, segurança, monitoramento e otimização de custos.",
  openGraph: {
    title: "Focus Network",
    description:
      "Azure, AWS e Oracle Cloud — tudo que envolve cloud, do zero até a operação.",
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
