"use client";

import React, { useState } from 'react';
import styles from './FaqSection.module.css';
import { RiCustomerService2Fill, RiArrowRightUpLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const faqData = [
  {
    question: "Com quais nuvens a Focus Network trabalha?",
    answer: "Trabalhamos com Microsoft Azure, Amazon Web Services (AWS) e Oracle Cloud. Ajudamos a escolher a melhor opção para cada necessidade — ou a combinar mais de uma."
  },
  {
    question: "Minha empresa ainda não usa nuvem. Por onde começamos?",
    answer: "Começamos pelo diagnóstico do seu ambiente atual. A partir dele, definimos o que migrar, para qual nuvem e em que ordem — do zero até a operação."
  },
  {
    question: "A migração para a nuvem para a minha operação?",
    answer: "A migração é planejada por etapas justamente para reduzir o impacto no dia a dia. Cada passo é combinado com a sua equipe antes de ser executado."
  },
  {
    question: "O que é arquitetura multi-cloud?",
    answer: "É usar mais de uma nuvem de forma integrada, aproveitando o melhor de cada uma. Isso traz mais flexibilidade, evita dependência de um único fornecedor e ajuda a equilibrar custos."
  },
  {
    question: "Vocês trabalham com Kubernetes e containers?",
    answer: "Sim. Estruturamos aplicações em containers e ambientes Kubernetes para ganhar escala, padronização e portabilidade entre nuvens."
  },
  {
    question: "Como vocês ajudam a reduzir os custos da nuvem?",
    answer: "Acompanhamos o consumo do ambiente, identificamos recursos ociosos ou superdimensionados e ajustamos a arquitetura para sua empresa pagar só pelo que usa — sem abrir mão de segurança e monitoramento."
  },
  {
    question: "Vocês atendem minha empresa em todo o Brasil?",
    answer: "Sim. Atendemos clientes em todo o Brasil a partir da nossa sede em Curitiba – PR. Para atividades presenciais, verificamos a viabilidade conforme a localização. Nosso atendimento é realizado sem robôs ou burocracias desnecessárias."
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
              Reunimos as dúvidas mais frequentes para ajudar você a entender melhor nossos serviços de cloud, migração e operação na nuvem.
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
