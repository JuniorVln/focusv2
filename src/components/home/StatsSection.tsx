"use client";

import React from 'react';
import styles from './StatsSection.module.css';
import { RiSparklingFill, RiArrowRightUpLine, RiFlashlightFill } from "react-icons/ri";

export default function StatsSection() {
  return (
    <section className={styles.section} id="resultados">
      <div className="container">
        {/* Parte 1: Cabeçalho Centralizado */}
        <header className={styles.header}>
          <div className={styles.badgeWrap}>
            <span className={styles.badgeText}>
              <RiSparklingFill className={styles.badgeIcon} />
              Nossos Números
            </span>
          </div>
          <h2 className={styles.mainTitle}>
            Resultados reais para empresas reais
          </h2>
          <p className={styles.mainDesc}>
            Não fazemos apenas suporte. Construímos empresas inteligentes — com uma equipe certificada e anos de trincheira na operação.
          </p>
        </header>

        {/* Parte 2: Bento Grid */}
        <div className={styles.bentoGrid}>
          {/* 1. Tall Image Card (Span 2 rows) */}
          <div className={`${styles.card} ${styles.tallImageCard}`}>
            <img 
              src="/images/results_wavy.png" 
              alt="Futuristic wavy background" 
              className={styles.wavyImage} 
            />
          </div>

          {/* 2. Wide Satisfaction Card (Span 2 columns) */}
          <div className={`${styles.card} ${styles.wideCard}`}>
            <div>
              <div className={styles.statNum}>98%</div>
              <div className={styles.statLabel}>Satisfação do Cliente</div>
            </div>
            <p className={styles.statDesc}>
              Nível de satisfação através de transparência, pontualidade e colaboração — garantindo resultados mensuráveis.
            </p>
          </div>

          {/* 3. Efficiency Card (Purple Square) */}
          <div className={`${styles.card} ${styles.efficiencyCard}`}>
            <div className={styles.statNum}>3x</div>
            <div className={styles.statLabel}>Eficiência Operacional</div>
            <RiArrowRightUpLine className={styles.upArrow} />
            <p className={styles.statDesc}>
              Nossos clientes reportam um aumento de 3x na velocidade após adotarem nossos processos.
            </p>
          </div>

          {/* 4. AI Launches Card (Small Square) */}
          <div className={`${styles.card} ${styles.launchesCard}`}>
            <div className={styles.statNum}>120+</div>
            <div className={styles.statLabel}>Projetos Entregues</div>
            <p className={styles.statDesc}>
              Empresas lançaram novas frentes de tecnologia com nossa consultoria personalizada.
            </p>
          </div>

          {/* 5. Partners Card (Wide Dark Card) */}
          <div className={`${styles.card} ${styles.partnersCard}`}>
            <div className={styles.logoRow}>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Logoipsum</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Logoipsum</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Logoipsum</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Logoipsum</div>
            </div>
            <div>
              <div className={styles.statNum}>50+</div>
              <div className={styles.statLabel}>Parceiros de Longo Prazo</div>
            </div>
            <p className={styles.statDesc}>
              Mais de 50 empresas continuam trabalhando conosco por mais de dois anos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
