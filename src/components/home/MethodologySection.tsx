"use client";

import React from 'react';
import styles from "./MethodologySection.module.css";
import { RiSparklingFill } from "react-icons/ri";

const steps = [
  {
    num: "01",
    title: "Diagnóstico do Ambiente",
    desc: "Entendemos o que sua empresa tem hoje — servidores, sistemas, custos e riscos — e definimos qual nuvem faz sentido para cada parte.",
    image: "/images/methodology_01.png"
  },
  {
    num: "02",
    title: "Arquitetura e Migração",
    desc: "Desenhamos o ambiente em Azure, AWS, Oracle Cloud ou multi-cloud e fazemos a migração com planejamento, sem travar a operação.",
    image: "/images/methodology_02.png"
  },
  {
    num: "03",
    title: "Segurança e Monitoramento",
    desc: "Aplicamos controles de acesso e boas práticas de segurança e acompanhamos o ambiente para agir antes que um problema afete o negócio.",
    image: "/images/methodology_03.png"
  },
  {
    num: "04",
    title: "Operação e Otimização de Custos",
    desc: "Seguimos cuidando da nuvem no dia a dia e revisamos o consumo para sua empresa pagar só pelo que realmente usa.",
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
            <h2 className={styles.title}>Do zero até a operação na nuvem</h2>
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
