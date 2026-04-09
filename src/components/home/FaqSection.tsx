"use client";

import React, { useState } from 'react';
import styles from './FaqSection.module.css';
import { RiCustomerService2Fill, RiArrowRightUpLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const faqData = [
  {
    question: "Quem deve migrar para Cloud Computing?",
    answer: "Toda empresa deve migrar para Cloud Computing, ao menos algum tipo de serviço. Links de internet e custo do Cloud têm ficado cada vez mais atrativos. A Focus Network oferece nuvem pública (AWS, Azure, GCP, Oracle Cloud), privada e híbrida, além de Datacenter próprio no Brasil sem dependência do câmbio."
  },
  {
    question: "O monitoramento com Zabbix e Grafana funciona 24x7?",
    answer: "Sim. Nossa ferramenta monitora e envia alertas 24 horas por dia, 7 dias por semana. Dependendo do contrato, os alertas são tratados imediatamente ou no próximo dia útil. Monitoramos computadores, servidores, impressoras, roteadores, switches, links de internet, sites e muito mais."
  },
  {
    question: "Vocês realizam implementação completa do SAP Business One?",
    answer: "Sim. A Focus Network em parceria com a Ramo Sistemas entrega o que há de melhor em ERP no mercado. Atendemos desde o diagnóstico de processos e configuração inicial até migração de dados, customizações e treinamento das equipes."
  },
  {
    question: "O que é UTM Firewall e por que minha empresa precisa?",
    answer: "UTM (Unified Threat Management) é uma solução de segurança completa em um único dispositivo. A Focus Network trabalha com as principais marcas do mercado: Fortinet, Sophos e Pfsense, protegendo toda a sua rede corporativa."
  },
  {
    question: "A Focus Network ajuda com a adequação à LGPD?",
    answer: "Com certeza. Nossa equipe efetua consultoria completa em segurança dos computadores, sistemas e servidores da sua empresa, tudo alinhado com as novas normas da LGPD e principais regulamentações de mercado."
  },
  {
    question: "A implantação do monitoramento é complexa?",
    answer: "Somos especialistas nas ferramentas Zabbix e Grafana e desenvolvemos uma forma de trabalho otimizada onde entregamos projetos de forma simples. Treinamos a equipe de TI local caso o cliente possua. E o melhor: utilizamos ferramentas OpenSource, sem custos de licenciamento."
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
