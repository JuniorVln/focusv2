"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

const heroImages = [
  { src: "/images/hero_1.webp", alt: "Nuvens conectadas por uma rede" },
  { src: "/images/hero_2.webp", alt: "Data center com servidores" },
  { src: "/images/hero_3.webp", alt: "Sala de monitoramento de ambientes cloud" },
];

const INTERVALO = 7000;

export default function HeroSection() {
  const [ativa, setAtiva] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setAtiva((i) => (i + 1) % heroImages.length), INTERVALO);
    return () => clearInterval(t);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Imagens estáticas em troca suave (sem movimento) */}
      {heroImages.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={i === ativa ? img.alt : ""}
          aria-hidden={i !== ativa}
          className={`${styles.bgImage} ${i === ativa ? styles.bgImageActive : ""}`}
          fetchPriority={i === 0 ? "high" : "low"}
        />
      ))}

      {/* Overlays */}
      <div className={styles.overlay} />
      <div className={styles.overlayBottom} />

      {/* Main Content */}
      <div className={styles.content}>
        {/* Left */}
        <div className={styles.left}>
          {/* Headline */}
          <h1 className={styles.headline}>
            Tudo o que sua empresa<br />
            precisa <span>na Nuvem</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Trabalhamos com Azure, AWS e Oracle Cloud. Migração, arquitetura multi-cloud, segurança, monitoramento e otimização de custos — do zero até a operação.
          </p>

          {/* CTAs */}
          <div className={styles.ctaRow}>
            <Link href="/contato" className={styles.btnPrimary}>
              Fale com um Especialista →
            </Link>
            <Link href="/solucoes" className={styles.btnSecondary}>
              Ver Soluções
            </Link>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
