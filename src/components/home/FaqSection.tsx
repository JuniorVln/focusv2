"use client";

import React, { useState } from 'react';
import styles from './FaqSection.module.css';
import { RiCustomerService2Fill, RiArrowRightUpLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const faqData = [
  {
    question: "Quais tipos de infraestrutura a Focus Network atende?",
    answer: "Atendemos desde pequenas empresas com necessidades de hardware e redes locais até grandes corporações com ambientes complexos de nuvem híbrida, multi-cloud (AWS, Azure, GCP) e servidores on-premise."
  },
  {
    question: "Como funciona o monitoramento 24/7 (NOC)?",
    answer: "Utilizamos ferramentas como Zabbix e Grafana para monitorar em tempo real a saúde de servidores, redes e aplicações. Nossa equipe é alertada instantaneamente em caso de anomalias, resolvendo problemas proativamente antes que afetem sua operação."
  },
  {
    question: "Vocês realizam implementação completa do SAP Business One?",
    answer: "Sim, somos especialistas no ciclo completo do SAP B1: desde o diagnóstico de processos e configuração inicial até migração de dados, customizações de add-ons e treinamento das equipes."
  },
  {
    question: "A Focus Network ajuda com a adequação à LGPD?",
    answer: "Com certeza. Nossa frente de Segurança & Compliance realiza auditorias, análise de vulnerabilidades e implementa as camadas técnicas necessárias (Firewalls, SIEM, Controle de Acessos) para que sua empresa esteja 100% conforme a legislação."
  },
  {
    question: "Qual é o SLA garantido no Outsourcing de TI?",
    answer: "Nossos contratos de Outsourcing possuem SLAs detalhados com tempos de resposta garantidos (N1, N2 e N3), variando conforme a criticidade do chamado, garantindo que sua TI nunca seja um gargalo."
  },
  {
    question: "Meus dados estarão seguros em suas soluções de Cloud?",
    answer: "Sim. Implementamos as melhores práticas de cibersegurança, incluindo criptografia de ponta a ponta, backups automatizados e redundância geográfica, garantindo a integridade e disponibilidade total dos seus dados."
  },
  {
    question: "Quanto tempo leva para implementar as soluções da Focus?",
    answer: "O tempo varia conforme a complexidade. Um diagnóstico inicial leva de 1 a 2 semanas, enquanto implementações de infraestrutura ou ERP são planejadas em roadmaps personalizados para minimizar impactos operacionais."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <div className={styles.contentWrapper}>
          {/* Left Column: Title and Support Card */}
          <div className={styles.leftCol}>
            <div className={styles.badge}>
              <RiCustomerService2Fill />
              Centro de Suporte
            </div>
            <h2 className={styles.title}>Respostas para Perguntas Comuns</h2>
            <p className={styles.subtitle}>
              Reunimos as dúvidas mais frequentes para ajudar você a entender melhor nossos serviços de TI, infraestrutura e processos de integração.
            </p>

            {/* Support Card Inspiration from screenshot */}
            <div className={styles.supportCard}>
              <img src="/images/support_person.png" alt="Suporte Técnico" className={styles.supportImg} />
              <div className={styles.supportOverlay}>
                <div className={styles.supportText}>
                  <strong>Precisa de mais ajuda?</strong>
                  <p>Estamos aqui para tirar qualquer dúvida que você tenha sobre sua operação.</p>
                </div>
                <a href="#contato" className={styles.supportLink}>
                  Fazer uma Pergunta <RiArrowRightUpLine />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordions */}
          <div className={styles.rightCol}>
            <div className={styles.accordionList}>
              {faqData.map((item, index) => (
                <div 
                  key={index} 
                  className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className={styles.accordionHeader}>
                    <h3 className={styles.question}>{item.question}</h3>
                    <div className={styles.iconWrapper}>
                      {activeIndex === index ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                    </div>
                  </div>
                  <div className={styles.accordionContent}>
                    <div className={styles.answerText}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
