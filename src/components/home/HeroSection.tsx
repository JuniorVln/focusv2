"use client";

import Link from "next/link";
import styles from "./HeroSection.module.css";

const avatarColors = ["#5B63D3", "#7B82E0", "#4A52C0", "#8892F0"];
const avatarInitials = ["M", "A", "R", "L"];

const stats = [
  { value: "98%", label: "Satisfação do Cliente" },
  { value: "3X", label: "Decisões mais Rápidas" },
  { value: "40%", label: "Redução de Custos", accent: true },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Video Background */}
      <video
        className={styles.videoBg}
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Overlays */}
      <div className={styles.overlay} />
      <div className={styles.overlayBottom} />

      {/* Main Content */}
      <div className={styles.content}>
        {/* Left */}
        <div className={styles.left}>
          {/* Team avatars */}
          <div className={styles.teamRow}>
            <div className={styles.avatars}>
              {avatarInitials.map((initial, i) => (
                <div
                  key={i}
                  className={styles.avatar}
                  style={{ background: `linear-gradient(135deg, ${avatarColors[i]}, ${avatarColors[(i + 1) % 4]})` }}
                >
                  {initial}
                </div>
              ))}
            </div>
            <div className={styles.teamMeta}>
              <span className={styles.teamLabel}>Nossa Equipe</span>
              <span className={styles.teamSince}>Desde 2017 · Infraestrutura & ERP</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className={styles.headline}>
            Soluções em Tecnologia<br />
            para o seu <span>Negócio</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Transformamos infraestrutura em inteligência. Consultoria, segurança e implementação SAP Business One para empresas que precisam escalar sem gargalos técnicos.
          </p>

          {/* CTAs */}
          <div className={styles.ctaRow}>
            <Link href="#contato" className={styles.btnPrimary}>
              Começar Agora →
            </Link>
            <Link href="#solucoes" className={styles.btnSecondary}>
              Ver Soluções
            </Link>
          </div>
        </div>

        {/* Right — Stats */}
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`${styles.statCard} ${stat.accent ? styles.accent : ""} ${i === 0 ? styles.firstCard : ""} ${i === 1 ? styles.secondCard : ""} ${i === 2 ? styles.thirdCard : ""}`}
            >
              <div className={styles.decor}>
                <span className={styles.pixel} />
                <span className={styles.pixel} />
                <span className={styles.pixel} />
              </div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
