"use client";

import Link from "next/link";
import styles from "./HeroSection.module.css";

const avatarColors = ["#054579", "#2a78b5", "#03345c", "#1a6aad"];
const avatarInitials = ["M", "A", "R", "L"];

const stats = [
  { value: "Azure", label: "Microsoft Azure" },
  { value: "AWS", label: "Amazon Web Services" },
  { value: "Oracle", label: "Oracle Cloud", accent: true },
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
              <span className={styles.teamSince}>Desde 2017 · Especialistas em Cloud</span>
            </div>
          </div>

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
