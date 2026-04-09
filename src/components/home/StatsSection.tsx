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
            Desde 2017, a Focus Network entrega excelência em TI para empresas de todos os tamanhos — com uma equipe certificada e suporte sem burocracia.
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

          {/* 3. Efficiency Card */}
          <div className={`${styles.card} ${styles.efficiencyCard}`}>
            <div className={styles.statNum}>24/7</div>
            <div className={styles.statLabel}>Monitoramento NOC</div>
            <RiArrowRightUpLine className={styles.upArrow} />
            <p className={styles.statDesc}>
              Infraestrutura monitorada 24 horas por dia com Zabbix e Grafana — alertas em tempo real antes de impactar sua operação.
            </p>
          </div>

          {/* 4. Projects Card */}
          <div className={`${styles.card} ${styles.launchesCard}`}>
            <div className={styles.statNum}>2017</div>
            <div className={styles.statLabel}>No Mercado</div>
            <p className={styles.statDesc}>
              Mais de 7 anos entregando soluções de TI com excelência e certificações profissionais reconhecidas.
            </p>
          </div>

          {/* 5. Partners Card (Wide Dark Card) */}
          <div className={`${styles.card} ${styles.partnersCard}`}>
            <div className={styles.logoRow}>
              <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '0.05em' }}>FORTINET</div>
              <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '0.05em' }}>BITDEFENDER</div>
              <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '0.05em' }}>SKYMAIL</div>
              <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '0.05em' }}>APC</div>
            </div>
            <div>
              <div className={styles.statNum}>100+</div>
              <div className={styles.statLabel}>Clientes Atendidos</div>
            </div>
            <p className={styles.statDesc}>
              Parceiros líderes de mercado como Fortinet, Bitdefender, Skymail e APC — garantindo as melhores soluções para sua empresa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
