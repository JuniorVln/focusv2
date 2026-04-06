"use client";

import { useState } from "react";
import styles from "./PricingSection.module.css";

const plans = [
  {
    name: "TI & Infra",
    monthlyPrice: 239,
    desc: "Ideal para empresas que precisam de infraestrutura gerenciada e suporte técnico especializado.",
    features: [
      "Gerenciamento de infraestrutura",
      "Suporte N1, N2 e N3",
      "Monitoramento básico (Zabbix)",
      "SLA de 4 horas úteis",
      "Relatórios mensais",
    ],
    cta: "Fale com um Especialista",
    ctaStyle: "dark",
    popular: false,
  },
  {
    name: "Cibersegurança",
    monthlyPrice: 479,
    desc: "Para empresas que precisam de proteção ativa, compliance e monitoramento contínuo de ameaças.",
    features: [
      "Tudo do plano TI & Infra",
      "Análise de vulnerabilidades",
      "SIEM e resposta a incidentes",
      "Relatórios de compliance",
      "SLA de 2 horas úteis",
      "NOC 24/7 com Grafana",
    ],
    cta: "Fale com um Especialista",
    ctaStyle: "white",
    popular: true,
    badge: "Popular",
  },
  {
    name: "Gestão (SAP B1)",
    monthlyPrice: null,
    desc: "Implementação e suporte completo ao SAP Business One para operações de médio e grande porte.",
    features: [
      "Tudo do plano Cibersegurança",
      "Implementação do SAP B1",
      "Customizações e integrações",
      "Treinamento da equipe",
      "Gerente de conta dedicado",
      "SLA de 1 hora útil",
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
          <h2 className={styles.title}>Preços transparentes, sem surpresas</h2>
          <p className={styles.subtitle}>Escolha o plano ideal para o nível de suporte que sua empresa precisa.</p>
        </div>

        {/* Toggle */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
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
                  {plan.popular ? "Inclui todos os recursos de TI & Infra:" : "Inclui:"}
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
