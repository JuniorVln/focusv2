'use client';

import React from 'react';
import styles from './FeaturesSection.module.css';
import { Section, Container } from '../layout/Section';
import { RiSparklingFill, RiShieldCheckFill, RiCheckLine, RiArrowRightUpLine, RiMessage2Fill } from "react-icons/ri";

export default function FeaturesSection() {
  return (
    <Section className={styles.section} id="solucoes">
      <Container>
        {/* Parte 1: Cabeçalho */}
        <header className={styles.header}>
          <div className={styles.badgeWrap}>
            <span className={styles.badgeText}>
              <RiSparklingFill className={styles.badgeIcon} />
              Solução
            </span>
          </div>
          <h2 className={styles.mainTitle}>
            Desbloqueie o Poder da Infraestrutura Inteligente
          </h2>
        </header>

        {/* Parte 2: Intro + 2 Cards */}
        <div className={styles.rowPart2}>
          {/* Col 1: Texto de Introdução */}
          <div className={styles.introCol}>
            <p className={styles.introText}>
              Oferecemos tecnologia de última geração para garantir que sua empresa não pare por problemas técnicos, 
              focando na performance e segurança.
            </p>
          </div>

          {/* Col 2: Card Chat Support */}
          <div className={styles.glassCard}>
            <div className={styles.illustArea}>
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div className={styles.chatBubble}>Can I send you a proposal via email?</div>
                <div className={`${styles.chatBubble} ${styles.bubbleRight}`}>Yes, please.</div>
                <div className={styles.chatBubble} style={{ borderRadius: '18px', width: 'fit-content' }}>
                  Done <span style={{ color: '#22C55E' }}>✔</span>
                </div>
                <div className={styles.chatBubble} style={{ opacity: 0.7 }}>I'll send tailored solutions soon!</div>
              </div>
              <div className={styles.chatOrb} />
            </div>
            <h3 className={styles.cardTitle}>Suporte via Chat com IA</h3>
            <p className={styles.cardDesc}>
              Melhore a experiência do cliente com respostas rápidas e automatizadas movidas por IA.
            </p>
          </div>

          {/* Col 3: Card Document Handling */}
          <div className={styles.glassCard}>
            <div className={styles.illustArea}>
              <div className={styles.docFrame}>
                <div className={styles.docCorner + ' ' + styles.cornerTL} />
                <div className={styles.docCorner + ' ' + styles.cornerTR} />
                <div className={styles.docCorner + ' ' + styles.cornerBL} />
                <div className={styles.docCorner + ' ' + styles.cornerBR} />
                <div className={styles.docLine} />
                <div className={styles.docLine} style={{ width: '80%' }} />
                <div className={styles.docLine} style={{ width: '60%', background: '#E2E8F0' }} />
                <div className={styles.docLine} style={{ marginTop: '12px', background: '#D1D5DB' }} />
                <div className={styles.docLine} style={{ width: '70%', background: '#D1D5DB' }} />
                <div style={{ 
                  height: '40px', 
                  width: '100%', 
                  background: 'linear-gradient(rgba(255,255,255,0), #D1D5DB)', 
                  marginTop: '12px',
                  borderRadius: '2px' 
                }} />
              </div>
            </div>
            <h3 className={styles.cardTitle}>Gestão Inteligente de Documentos</h3>
            <p className={styles.cardDesc}>
              Extraia e gerencie dados críticos de documentos automaticamente com a ajuda da IA.
            </p>
          </div>
        </div>

        {/* Parte 3: 2 Cards + Empty Col */}
        <div className={styles.rowPart3}>
          {/* Col 1: AI Business Insights */}
          <div className={styles.glassCard}>
            <div className={styles.illustArea}>
              <div className={styles.insightsContainer}>
                <div className={styles.comparisonBox}>
                  <div style={{ fontWeight: 'bold', color: '#64748B', marginBottom: '6px' }}>Comparison</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#5B63D3', marginBottom: '4px' }}>
                    <span>Nov 24</span>
                    <span>$3.642</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8' }}>
                    <span>Nov 23</span>
                    <span>$1.937</span>
                  </div>
                </div>
                <div className={styles.graphLines}>
                  <svg className={styles.graphSvg} viewBox="0 0 100 40">
                    <path 
                      d="M0,35 Q15,30 25,32 T50,38 T75,30 T100,5" 
                      fill="none" 
                      stroke="#5B63D3" 
                      strokeWidth="2" 
                    />
                    <path 
                      d="M0,30 Q20,25 35,28 T60,35 T85,25 T100,15" 
                      fill="none" 
                      stroke="#E2E8F0" 
                      strokeWidth="2" 
                    />
                    <circle cx="95" cy="10" r="2.5" fill="#5B63D3" stroke="white" strokeWidth="1" />
                    <circle cx="95" cy="18" r="2.5" fill="#E2E8F0" stroke="white" strokeWidth="1" />
                    <line x1="95" y1="10" x2="95" y2="40" stroke="#CBD5E1" strokeDasharray="2 2" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className={styles.cardTitle}>Insights de Negócios com IA</h3>
            <p className={styles.cardDesc}>
              Descubra tendências, preveja resultados e tome decisões mais inteligentes usando IA.
            </p>
          </div>

          {/* Col 2: AI Detection & Tagging */}
          <div className={styles.glassCard}>
            <div className={styles.illustArea}>
              <div className={styles.waveContainer}>
                <div style={{ 
                  position: 'absolute', 
                  width: '120px', 
                  height: '120px', 
                  background: 'radial-gradient(circle, rgba(91, 99, 211, 0.1) 0%, transparent 70%)',
                  borderRadius: '50%'
                }} />
                <div className={styles.waveBars}>
                  {[...Array(24)].map((_, i) => (
                    <div 
                      key={i} 
                      className={styles.waveBar} 
                      style={{ height: `${15 + Math.abs(Math.sin(i * 0.5) * 35)}px` }} 
                    />
                  ))}
                </div>
                <div className={styles.wavePointer} style={{ left: '42%' }}>
                  <div className={styles.diamond} />
                </div>
              </div>
            </div>
            <h3 className={styles.cardTitle}>Detecção e Marcação Automatizada</h3>
            <p className={styles.cardDesc}>
              Identifique e marque anomalias visuais ou sonoras para aumentar a segurança operacional.
            </p>
          </div>

          {/* Col 3: Vazia */}
          <div />
        </div>

        {/* Parte 4: Outsourcing + Explore */}
        <div className={styles.rowPart4}>
          {/* Col 1: Vazia */}
          <div />

          {/* Outsourcing de TI - Agora em 1 coluna (Meio) */}
          <div className={styles.glassCard}>
            <div className={styles.illustArea}>
              <div className={styles.outsourcingIllust}>
                <div className={styles.slaBadge} style={{ fontSize: '18px', padding: '10px 18px' }}>
                  <RiShieldCheckFill style={{ fontSize: '24px' }} />
                  SLA 99.9%
                </div>
                <div className={styles.criticalTask} style={{ width: '90%' }}>
                  <span>Monitoramento</span>
                  <div className={styles.statusDot} />
                </div>
                <div className={styles.criticalTask} style={{ width: '90%' }}>
                  <span>Backup Crítico</span>
                  <div className={styles.statusDot} />
                </div>
              </div>
            </div>
            <h3 className={styles.cardTitle}>Outsourcing de TI</h3>
            <p className={styles.cardDesc}>
              Outsourcing de TI com SLA rigoroso e equipe certificada de missão crítica.
            </p>
          </div>

          {/* Explore More - Small Card (Span 1) */}
          <div className={`${styles.glassCard} ${styles.smallCard}`}>
            <div className={styles.illustArea}>
              <div className={styles.exploreProfile}>
                <div className={styles.avatarContainer}>
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" 
                    alt="Suporte Focus" 
                    className={styles.avatar} 
                  />
                  <div className={styles.activeDot} />
                </div>
                <span className={styles.exploreName}>Equipe de Atendimento</span>
                <span className={styles.exploreStatus}>Disponível agora</span>
                <button className={styles.contactBtn}>
                  <RiMessage2Fill />
                  Falar agora
                </button>
              </div>
            </div>
            <h3 className={styles.cardTitle}>Explorar mais</h3>
            <p className={styles.cardDesc}>
              Utilize a Focus Network para escalar sua operação e reduzir o tempo gasto em tarefas manuais.
            </p>
            <div className={styles.exploreLink}>
              Começar Agora
              <RiArrowRightUpLine />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
