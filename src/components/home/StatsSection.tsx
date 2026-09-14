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
              Por que a Focus
            </span>
          </div>
          <h2 className={styles.mainTitle}>
            Cloud do zero até a operação
          </h2>
          <p className={styles.mainDesc}>
            Desde 2017 no mercado de tecnologia, a Focus Network hoje concentra sua experiência na nuvem — com atendimento próximo e sem burocracia.
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

          {/* 2. Wide Card (Span 2 columns) */}
          <div className={`${styles.card} ${styles.wideCard}`}>
            <div>
              <div className={styles.statNum}>3</div>
              <div className={styles.statLabel}>Nuvens em um só parceiro</div>
            </div>
            <p className={styles.statDesc}>
              Azure, AWS e Oracle Cloud com a mesma equipe — você não precisa de um fornecedor para cada nuvem.
            </p>
          </div>

          {/* 3. Efficiency Card */}
          <div className={`${styles.card} ${styles.efficiencyCard}`}>
            <div className={styles.statNum}>24/7</div>
            <div className={styles.statLabel}>Ambiente monitorado</div>
            <RiArrowRightUpLine className={styles.upArrow} />
            <p className={styles.statDesc}>
              Segurança, monitoramento e otimização de custos acompanhando o ambiente depois da migração.
            </p>
          </div>

          {/* 4. Projects Card */}
          <div className={`${styles.card} ${styles.launchesCard}`}>
            <div className={styles.statNum}>2017</div>
            <div className={styles.statLabel}>No Mercado</div>
            <p className={styles.statDesc}>
              Anos de experiência em infraestrutura de TI, agora com foco total em cloud.
            </p>
          </div>

          {/* 5. Clouds Card (Wide Dark Card) */}
          <div className={`${styles.card} ${styles.partnersCard}`}>
            <div className={styles.logoRow}>
              <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '0.05em' }}>AZURE</div>
              <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '0.05em' }}>AWS</div>
              <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '0.05em' }}>ORACLE CLOUD</div>
              <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '0.05em' }}>KUBERNETES</div>
            </div>
            <div>
              <div className={styles.statNum}>Multi</div>
              <div className={styles.statLabel}>Arquitetura multi-cloud</div>
            </div>
            <p className={styles.statDesc}>
              Combinamos as nuvens certas para cada necessidade, com containers e Kubernetes quando fizer sentido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
