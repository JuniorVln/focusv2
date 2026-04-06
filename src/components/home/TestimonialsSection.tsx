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
          <h2 className={styles.title}>Resultados Reais de Clientes Focados</h2>
          <p className={styles.subtitle}>
            Veja como empresas como a sua aceleraram o crescimento, otimizaram fluxos de trabalho e entregaram resultados mensuráveis através das nossas soluções de infraestrutura e TI.
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
            <span className={styles.quoteIcon}>“</span>
            <p className={styles.quoteText}>
              A integração dos sistemas de planejamento da Focus Network reduziu nosso tempo de resposta pela metade. Agora entregamos projetos duas vezes mais rápido, sem sacrificar a qualidade.
            </p>
            <div className={styles.author}>
              <img src="/images/avatar_1.png" alt="Jenna Li" className={styles.avatar} />
              <div>
                <div className={styles.authorName}>Jenna Li</div>
                <div className={styles.authorRole}>Diretora de Operações, NeoLabs</div>
              </div>
            </div>
            <div className={styles.metricRow}>
              <div className={styles.metricItem}>
                <div className={styles.metricNum}>2x</div>
                <div className={styles.metricLabel}>Entrega de projetos rápida</div>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricNum}>+50%</div>
                <div className={styles.metricLabel}>Melhoria na satisfação do cliente</div>
              </div>
            </div>
          </div>

          {/* Card 3: Blue Gradient Card (Bottom Left) */}
          <div className={`${styles.card} ${styles.blueCard}`}>
            <span className={styles.quoteIconWhite}>“</span>
            <p className={styles.quoteTextWhite}>
              Reduzimos o trabalho manual em 70% e aumentamos a produção em 3.5x com a automação deles — é como ganhar um membro incansável na equipe.
            </p>
            <div className={styles.author}>
              <img src="/images/avatar_2.png" alt="Alex Rivera" className={styles.avatar} />
              <div>
                <div className={styles.authorNameWhite}>Alex Rivera</div>
                <div className={styles.authorRoleWhite}>Gerente de Produto, ZyloTech</div>
              </div>
            </div>
            <div className={styles.metricRowWhite}>
              <div className={styles.metricItem}>
                <div className={styles.metricNumWhite}>+70%</div>
                <div className={styles.metricLabelWhite}>Redução em trabalho manual</div>
              </div>
              <div className={styles.metricItem}>
                <div className={styles.metricNumWhite}>3.5x</div>
                <div className={styles.metricLabelWhite}>Aumento na eficiência de automação</div>
              </div>
            </div>
          </div>

          {/* Card 4: Simple White Card (Bottom Center) */}
          <div className={`${styles.card} ${styles.simpleCard}`}>
             <span className={styles.quoteIcon}>“</span>
             <p className={styles.quoteTextSmall}>
               O chatbot proativo que criaram superou todas as expectativas. Parece um assistente real e reduziu drasticamente nossa carga de suporte.
             </p>
             <div className={styles.author}>
               <img src="/images/avatar_3.png" alt="Marcus Green" className={styles.avatar} />
               <div>
                 <div className={styles.authorName}>Marcus Green</div>
                 <div className={styles.authorRole}>Líder de Suporte, HelioWave</div>
               </div>
             </div>
          </div>

          {/* Card 5: Dark Card (Bottom Right) */}
          <div className={`${styles.card} ${styles.darkCard}`}>
             <span className={styles.quoteIconWhite}>“</span>
             <p className={styles.quoteTextWhiteSmall}>
               A equipe deles realmente entende de infraestrutura de missão crítica. Nos guiaram com clareza e precisão desde a estratégia até o deploy. Um prazer trabalhar com eles.
             </p>
             <div className={styles.author}>
               <img src="/images/avatar_4.png" alt="Rachel Torres" className={styles.avatar} />
               <div>
                 <div className={styles.authorNameWhite}>Rachel Torres</div>
                 <div className={styles.authorRoleWhite}>CTO, BlueFrame AI</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
