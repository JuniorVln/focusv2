"use client";

import React from 'react';
import styles from "./MethodologySection.module.css";
import { RiSparklingFill } from "react-icons/ri";

const steps = [
  {
    num: "01",
    title: "Diagnóstico e Planejamento",
    desc: "Análise completa do cenário atual da sua TI: infraestrutura, vulnerabilidades, processos e oportunidades. Entregamos um roadmap técnico personalizado.",
    image: "/images/methodology_01.png"
  },
  {
    num: "02",
    title: "Implementação Certificada",
    desc: "Execução por equipe certificada com metodologia rigorosa. Seja infraestrutura, segurança ou SAP B1, cada projeto segue padrões de missão crítica.",
    image: "/images/methodology_02.png"
  },
  {
    num: "03",
    title: "Monitoramento Proativo (NOC)",
    desc: "Seu ambiente monitorado 24/7 com Zabbix e Grafana. Identificamos e resolvemos problemas antes que afetem sua operação.",
    image: "/images/methodology_03.png"
  },
  {
    num: "04",
    title: "Suporte Contínuo com SLA",
    desc: "SLA rigoroso com tempos de resposta garantidos. Nossa equipe é uma extensão do seu negócio — presente quando você mais precisa.",
    image: "/images/methodology_04.png"
  }
];

export default function MethodologySection() {
  return (
    <section className={styles.section} id="metodologia">
      <div className="container">
        <div className={styles.contentWrapper}>
          {/* Left Column: Sticky Title */}
          <div className={styles.stickySide}>
            <div className={styles.label}>
              <RiSparklingFill />
              Nossa Metodologia
            </div>
            <h2 className={styles.title}>Do diagnóstico ao suporte contínuo</h2>
            <p className={styles.description}>
              Nossa jornada de adoção tecnológica segue um caminho claro e comprovado para garantir alinhamento, velocidade e resultados mensuráveis.
            </p>
          </div>

          {/* Right Column: Scrollable Steps */}
          <div className={styles.scrollSide}>
            {steps.map((step) => (
              <div key={step.num} className={styles.step}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
                <p className={styles.stepDesc}>{step.desc}</p>
                <div className={styles.stepImageWrapper}>
                  <img src={step.image} alt={step.title} className={styles.stepImage} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
