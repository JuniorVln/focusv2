"use client";

import { useState } from "react";
import styles from "./PricingSection.module.css";

const plans = [
  {
    name: "Migração",
    monthlyPrice: null,
    desc: "Para empresas que vão levar servidores e aplicações para a nuvem pela primeira vez.",
    features: [
      "Diagnóstico do ambiente atual",
      "Escolha da nuvem: Azure, AWS ou Oracle",
      "Planejamento por etapas",
      "Migração acompanhada",
      "Entrega do ambiente em operação",
    ],
    cta: "Fale com um Especialista",
    ctaStyle: "dark",
    popular: false,
  },
  {
    name: "Gestão Cloud",
    monthlyPrice: null,
    desc: "Para empresas que já estão na nuvem e querem o ambiente cuidado no dia a dia.",
    features: [
      "Gestão contínua do ambiente",
      "Segurança e controle de acessos",
      "Monitoramento",
      "Otimização de custos",
      "Relatórios periódicos",
    ],
    cta: "Fale com um Especialista",
    ctaStyle: "white",
    popular: true,
    badge: "Mais procurado",
  },
  {
    name: "Multi-cloud",
    monthlyPrice: null,
    desc: "Para operações que combinam nuvens, containers e Kubernetes.",
    features: [
      "Tudo do plano Gestão Cloud",
      "Arquitetura multi-cloud",
      "Kubernetes & containers",
      "Integração entre ambientes",
      "Governança centralizada",
    ],
    cta: "Fale com um Especialista",
    ctaStyle: "dark",
    popular: false,
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(true);

  const getPrice = (monthly: number | null) => {
    if (!monthly) return null;
    return yearly ? Math.round(monthly * 0.8) : monthly;
  };

  return (
    <section className={styles.section} id="precos">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Planos</span>
          <h2 className={styles.title}>Um formato para cada momento na nuvem</h2>
          <p className={styles.subtitle}>Cada ambiente é diferente. Montamos a proposta a partir do diagnóstico da sua empresa.</p>
        </div>

        {/* Toggle */}
        <div hidden={plans.every((p) => !p.monthlyPrice)} style={{ textAlign: "center", marginBottom: 52 }}>
          <div className={styles.toggle}>
            <button
              className={`${styles.toggleBtn} ${!yearly ? styles.active : ""}`}
              onClick={() => setYearly(false)}
            >
              Mensal
            </button>
            <button
              className={`${styles.toggleBtn} ${yearly ? styles.active : ""}`}
              onClick={() => setYearly(true)}
            >
              Anual
            </button>
            {yearly && <span className={styles.toggleBadge}>20% de desconto</span>}
          </div>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {plans.map((plan) => {
            const price = getPrice(plan.monthlyPrice);
            return (
              <div
                key={plan.name}
                className={`${styles.card} ${plan.popular ? styles.popular : ""}`}
              >
                {plan.badge && (
                  <span className={styles.popularBadge}>{plan.badge}</span>
                )}
                <div className={styles.planName}>{plan.name}</div>
                <div className={styles.price}>
                  {price ? (
                    <>
                      <span className={styles.priceValue}>${price}</span>
                      <span className={styles.pricePeriod}>/mês</span>
                    </>
                  ) : (
                    <span className={styles.priceValue} style={{ fontSize: 40 }}>Sob Consulta</span>
                  )}
                </div>
                <p className={styles.planDesc}>{plan.desc}</p>
                <a href="#contato" className={`${styles.ctaBtn} ${styles[plan.ctaStyle as "dark" | "white"]}`}>
                  {plan.cta}
                </a>
                <span className={styles.featuresLabel}>
                  Inclui:
                </span>
                <ul className={styles.featureList}>
                  {plan.features.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <span className={styles.checkIcon}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
