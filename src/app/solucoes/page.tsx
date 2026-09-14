import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Nossas Soluções | Focus Network",
  description:
    "Azure, AWS e Oracle Cloud: migração e gestão de ambientes, arquitetura multi-cloud, Kubernetes & containers, segurança, monitoramento e otimização de custos.",
};

const solutions = [
  {
    emoji: "☁️",
    title: "Microsoft Azure",
    desc: "Levamos e mantemos o ambiente da sua empresa no Azure, integrado às ferramentas Microsoft que sua equipe já usa no dia a dia.",
    features: [
      "Migração de servidores e aplicações",
      "Desenho da arquitetura no Azure",
      "Gestão contínua do ambiente",
      "Segurança e controle de acessos",
      "Acompanhamento de consumo e custos",
    ],
    reversed: false,
  },
  {
    emoji: "🟧",
    title: "AWS — Amazon Web Services",
    desc: "Estruturamos seu ambiente na AWS com os serviços certos para cada necessidade, do primeiro servidor à operação completa.",
    features: [
      "Migração para a AWS",
      "Computação, armazenamento e bancos de dados",
      "Rede e conectividade",
      "Segurança e monitoramento",
      "Otimização da fatura",
    ],
    reversed: true,
  },
  {
    emoji: "🔴",
    title: "Oracle Cloud",
    desc: "Ambientes na Oracle Cloud (OCI) para empresas que buscam desempenho e custo competitivo, especialmente em cargas de trabalho e bancos de dados Oracle.",
    features: [
      "Migração para a OCI",
      "Bancos de dados e sistemas Oracle",
      "Arquitetura e gestão do ambiente",
      "Segurança e monitoramento",
      "Controle de custos",
    ],
    reversed: false,
  },
  {
    emoji: "📦",
    title: "Kubernetes & Containers",
    desc: "Organizamos suas aplicações em containers e ambientes Kubernetes para ganhar escala, padronização e liberdade para rodar em qualquer nuvem.",
    features: [
      "Containerização de aplicações",
      "Clusters Kubernetes gerenciados",
      "Escalabilidade automática",
      "Portabilidade entre nuvens",
      "Monitoramento dos serviços",
    ],
    reversed: true,
  },
  {
    emoji: "🔀",
    title: "Multi-cloud",
    desc: "Combinamos Azure, AWS e Oracle Cloud de forma integrada, aproveitando o melhor de cada nuvem e evitando dependência de um único fornecedor.",
    features: [
      "Arquitetura multi-cloud",
      "Integração entre ambientes",
      "Distribuição inteligente de cargas",
      "Governança centralizada",
      "Equilíbrio de custos entre nuvens",
    ],
    reversed: false,
  },
  {
    emoji: "🚀",
    title: "Tudo o que sua empresa precisa na nuvem",
    desc: "Do zero até a operação: migração e gestão de ambientes, segurança, monitoramento e otimização de custos em um só parceiro.",
    features: [
      "Diagnóstico do ambiente atual",
      "Planejamento e migração",
      "Gestão contínua dos ambientes",
      "Segurança e monitoramento",
      "Otimização de custos",
    ],
    reversed: true,
  },
];

export default function SolucoesPage() {
  return (
    <div className={styles.main}>
      <Navbar />
      
      <main>
        {/* Solutions Hero */}
        <header className={styles.solutionsHero}>
          <div className="container">
            <span className={`${styles.label} ${styles.heroLabel}`}>
              Conheça nossas Soluções
            </span>
            <h1 className={styles.solutionsHeroTitle}>
              Tudo o que sua empresa precisa <span style={{ color: "var(--primary-light)" }}>na nuvem</span>.
            </h1>
            <p className={styles.solutionsHeroSub}>
              Trabalhamos com Azure, AWS e Oracle Cloud. Migração, arquitetura multi-cloud, segurança, monitoramento e otimização de custos — do zero até a operação.
            </p>
            <div className={styles.solutionsBadges}>
              {["Azure", "AWS", "Oracle Cloud", "Kubernetes", "Multi-cloud"].map((badge) => (
                <span key={badge} className={styles.solutionsBadge}>{badge}</span>
              ))}
            </div>
          </div>
        </header>

        {/* Solutions Grid */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.solutionsGrid}>
              {solutions.map((sol, index) => (
                <div 
                  key={sol.title} 
                  className={`${styles.solutionRow} ${sol.reversed ? styles.reversed : ""}`}
                >
                  <div className={styles.solutionVisual}>
                    <div className={styles.solutionVisualGrad} />
                    <span>{sol.emoji}</span>
                  </div>
                  <div className={styles.solutionBody}>
                    <span className={styles.label}>{`0${index + 1}`}</span>
                    <h2>{sol.title}</h2>
                    <p>{sol.desc}</p>
                    <div className={styles.solutionFeatures}>
                      {sol.features.map((feature) => (
                        <div key={feature} className={styles.solutionFeature}>
                          <div className={styles.solutionFeatureCheck}>✓</div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a href="#contato" className={styles.solutionLink}>
                      Falar com Especialista
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
