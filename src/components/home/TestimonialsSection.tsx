"use client";

import React from 'react';
import styles from './TestimonialsSection.module.css';
import { RiChat3Line } from "react-icons/ri";

const TestimonialsSection = () => {
  return (
    <section className={styles.section} id="depoimentos">
      <div className="container">
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.badge}>
            <RiChat3Line />
            Depoimentos
          </div>
          <h2 className={styles.title}>O que nossos clientes dizem</h2>
          <p className={styles.subtitle}>
            Empresas de diferentes segmentos confiam na Focus Network para levar e manter seus ambientes na nuvem.
          </p>
        </header>

        {/* Bento Grid */}
        <div className={styles.bentoGrid}>
          {/* Card 1: Team Image (Large) */}
          <div className={`${styles.card} ${styles.imageCard}`}>
            <img src="/images/testimonial_team.png" alt="Equipe de tecnologia" className={styles.fullImage} />
          </div>

          {/* Card 2: Main Quote with Metrics (Top Right) */}
          <div className={`${styles.card} ${styles.metricCardLight}`}>
            <span className={styles.quoteIcon}>{'\u201C'}</span>
            <p className={styles.quoteText}>
              Com o ambiente na nuvem monitorado pela Focus Network, passamos a identificar falhas antes mesmo que impactassem nossos usuários. A tranquilidade operacional que isso gerou não tem preço.
            </p>
            <div className={styles.author}>
              <img src="/images/avatar_1.png" alt="Ricardo Almeida" className={styles.avatar} />
              <div>
                <div className={styles.authorName}>Ricardo Almeida</div>
                <div className={styles.authorRole}>Gerente de TI — Indústria Metal.</div>
              </div>
            </div>
            <div className={styles.metricRow}>
              <div className={styles.metricItem}>
                <div className={styles.metricNum}>24/7</div>
                <div className={styles.metricLabel}>Monitoramento contínuo</div>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricNum}>AWS</div>
                <div className={styles.metricLabel}>Ambiente gerenciado</div>
              </div>
            </div>
          </div>

          {/* Card 3: Blue Gradient Card (Bottom Left) */}
          <div className={`${styles.card} ${styles.blueCard}`}>
            <span className={styles.quoteIconWhite}>{'\u201C'}</span>
            <p className={styles.quoteTextWhite}>
              A Focus Network organizou nosso ambiente no Azure e reduziu o que pagávamos sem necessidade. O atendimento deles é diferenciado — sem robôs, sempre humano e ágil.
            </p>
            <div className={styles.author}>
              <img src="/images/avatar_2.png" alt="Fernanda Costa" className={styles.avatar} />
              <div>
                <div className={styles.authorNameWhite}>Fernanda Costa</div>
                <div className={styles.authorRoleWhite}>Diretora Financeira — Distribuidora</div>
              </div>
            </div>
            <div className={styles.metricRowWhite}>
              <div className={styles.metricItem}>
                <div className={styles.metricNumWhite}>Azure</div>
                <div className={styles.metricLabelWhite}>Ambiente otimizado</div>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricNumWhite}>Custos</div>
                <div className={styles.metricLabelWhite}>Sob controle</div>
              </div>
            </div>
          </div>

          {/* Card 4: Simple White Card (Bottom Center) */}
          <div className={`${styles.card} ${styles.simpleCard}`}>
            <span className={styles.quoteIcon}>{'\u201C'}</span>
            <p className={styles.quoteTextSmall}>
              Migramos toda nossa infraestrutura para a nuvem com a Focus Network. O processo foi simples, rápido e sem impacto no nosso dia a dia. Recomendo sem hesitar.
            </p>
            <div className={styles.author}>
              <img src="/images/avatar_3.png" alt="Paulo Martins" className={styles.avatar} />
              <div>
                <div className={styles.authorName}>Paulo Martins</div>
                <div className={styles.authorRole}>CEO — Empresa de Serviços</div>
              </div>
            </div>
          </div>

          {/* Card 5: Dark Card (Bottom Right) */}
          <div className={`${styles.card} ${styles.darkCard}`}>
            <span className={styles.quoteIconWhite}>{'\u201C'}</span>
            <p className={styles.quoteTextWhiteSmall}>
              A equipe da Focus realmente entende de nuvem. Estruturaram nossas aplicações em containers e reforçaram a segurança do ambiente. Nunca estivemos tão protegidos.
            </p>
            <div className={styles.author}>
              <img src="/images/avatar_4.png" alt="Carla Ribeiro" className={styles.avatar} />
              <div>
                <div className={styles.authorNameWhite}>Carla Ribeiro</div>
                <div className={styles.authorRoleWhite}>Gestora de TI — Clínica Médica</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
