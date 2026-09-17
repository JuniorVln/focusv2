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
              Nossos Serviços
            </span>
          </div>
          <h2 className={styles.mainTitle}>
            Fazemos tudo o que sua empresa precisa na nuvem
          </h2>
        </header>

        {/* Cards: 4 por fileira, sobra centralizada */}
        <div className={styles.cardsGrid}>
          {/* Col 2: Cloud Computing */}
          <div className={styles.glassCard}>
            <div className={styles.illustArea}>
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '8px' }}>
                <div className={styles.chatBubble} style={{ background: '#f1f5f9' }}>☁️ Microsoft Azure</div>
                <div className={`${styles.chatBubble} ${styles.bubbleRight}`}>☁️ Amazon Web Services</div>
                <div className={styles.chatBubble} style={{ borderRadius: '18px', width: 'fit-content' }}>
                  Oracle Cloud <span style={{ color: '#22C55E' }}>Online</span>
                </div>
                <div className={styles.chatBubble} style={{ opacity: 0.7 }}>Um parceiro para as três nuvens</div>
              </div>
              <div className={styles.chatOrb} />
            </div>
            <h3 className={styles.cardTitle}>Azure, AWS e Oracle Cloud</h3>
            <p className={styles.cardDesc}>
              Trabalhamos com as três principais nuvens do mercado e ajudamos sua empresa a escolher, combinar e operar a melhor opção para cada carga de trabalho.
            </p>
          </div>

          {/* Col 3: SAP Business One */}
          <div className={styles.glassCard}>
            <div className={styles.illustArea}>
              <div className={styles.docFrame}>
                <div className={styles.docCorner + ' ' + styles.cornerTL} />
                <div className={styles.docCorner + ' ' + styles.cornerTR} />
                <div className={styles.docCorner + ' ' + styles.cornerBL} />
                <div className={styles.docCorner + ' ' + styles.cornerBR} />
                <div className={styles.docLine} style={{ background: '#054579', width: '60%' }} />
                <div className={styles.docLine} style={{ width: '90%' }} />
                <div className={styles.docLine} style={{ width: '70%', background: '#E2E8F0' }} />
                <div className={styles.docLine} style={{ marginTop: '12px', background: '#D1D5DB' }} />
                <div className={styles.docLine} style={{ width: '80%', background: '#D1D5DB' }} />
                <div style={{
                  height: '40px',
                  width: '100%',
                  background: 'linear-gradient(rgba(255,255,255,0), #D1D5DB)',
                  marginTop: '12px',
                  borderRadius: '2px'
                }} />
              </div>
            </div>
            <h3 className={styles.cardTitle}>Migração e Gestão de Ambientes</h3>
            <p className={styles.cardDesc}>
              Levamos servidores, sistemas e aplicações para a nuvem com planejamento, e seguimos cuidando do ambiente depois da migração.
            </p>
          </div>

          {/* Col 1: AI Business Insights */}
          <div className={styles.glassCard}>
            <div className={styles.illustArea}>
              <div className={styles.insightsContainer}>
                <div className={styles.comparisonBox}>
                  <div style={{ fontWeight: 'bold', color: '#64748B', marginBottom: '6px' }}>Custo cloud</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#054579', marginBottom: '4px' }}>
                    <span>Otimizado</span>
                    <span>▼</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8' }}>
                    <span>Antes</span>
                    <span>▲</span>
                  </div>
                </div>
                <div className={styles.graphLines}>
                  <svg className={styles.graphSvg} viewBox="0 0 100 40">
                    <path 
                      d="M0,35 Q15,30 25,32 T50,38 T75,30 T100,5" 
                      fill="none" 
                      stroke="#054579"
                      strokeWidth="2" 
                    />
                    <path 
                      d="M0,30 Q20,25 35,28 T60,35 T85,25 T100,15" 
                      fill="none" 
                      stroke="#E2E8F0" 
                      strokeWidth="2" 
                    />
                    <circle cx="95" cy="10" r="2.5" fill="#054579" stroke="white" strokeWidth="1" />
                    <circle cx="95" cy="18" r="2.5" fill="#E2E8F0" stroke="white" strokeWidth="1" />
                    <line x1="95" y1="10" x2="95" y2="40" stroke="#CBD5E1" strokeDasharray="2 2" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className={styles.cardTitle}>Monitoramento e Otimização de Custos</h3>
            <p className={styles.cardDesc}>
              Acompanhamos desempenho e consumo do seu ambiente para evitar paradas e cortar gastos desnecessários na nuvem.
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
                  background: 'radial-gradient(circle, rgba(5, 69, 121, 0.1) 0%, transparent 70%)',
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
            <h3 className={styles.cardTitle}>Segurança na Nuvem</h3>
            <p className={styles.cardDesc}>
              Controle de acessos, proteção de dados e boas práticas de segurança aplicadas a cada ambiente em Azure, AWS e Oracle Cloud.
            </p>
          </div>

          {/* Outsourcing de TI - Agora em 1 coluna (Meio) */}
          <div className={styles.glassCard}>
            <div className={styles.illustArea}>
              <div className={styles.outsourcingIllust}>
                <div className={styles.slaBadge} style={{ fontSize: '18px', padding: '10px 18px' }}>
                  <RiShieldCheckFill style={{ fontSize: '24px' }} />
                  Multi-cloud
                </div>
                <div className={styles.criticalTask} style={{ width: '90%' }}>
                  <span>Kubernetes</span>
                  <div className={styles.statusDot} />
                </div>
                <div className={styles.criticalTask} style={{ width: '90%' }}>
                  <span>Containers</span>
                  <div className={styles.statusDot} />
                </div>
              </div>
            </div>
            <h3 className={styles.cardTitle}>Multi-cloud, Kubernetes & Containers</h3>
            <p className={styles.cardDesc}>
              Arquiteturas que combinam nuvens e aplicações em containers, com escala e portabilidade.
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
            <h3 className={styles.cardTitle}>Fale com um Especialista</h3>
            <p className={styles.cardDesc}>
              Atendimento sem robôs. Conte o que sua empresa precisa na nuvem e nossa equipe mostra o caminho.
            </p>
            <div className={styles.exploreLink}>
              Entrar em contato
              <RiArrowRightUpLine />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
