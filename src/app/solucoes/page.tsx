import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Nossas Soluções | Focus Network",
  description:
    "Soluções completas em TI: Cibersegurança, Infraestrutura, Consultoria SAP B1 e Suporte especializado para sua empresa escalar com segurança.",
};

const solutions = [
  {
    emoji: "🚀",
    title: "Infraestrutura & Cloud",
    desc: "Desenhamos e mantemos arquiteturas de alta disponibilidade para sua empresa. Seja on-premise, nuvem híbrida ou multi-cloud, garantimos que sua operação nunca pare.",
    features: [
      "Migração e gestão de Cloud (AWS, Azure, GCP)",
      "Virtualização de servidores e storage",
      "Backup em nuvem e Disaster Recovery",
      "Redes e conectividade de alta performance",
      "Manutenção preventiva de hardware",
    ],
    reversed: false,
  },
  {
    emoji: "🔒",
    title: "Segurança & Compliance",
    desc: "Protegemos seu ambiente contra ameaças modernas com uma abordagem proativa e multicamada. Nossa equipe certificada garante conformidade com as principais regulamentações nacionais e internacionais.",
    features: [
      "Análise e gestão de vulnerabilidades",
      "SIEM e resposta a incidentes",
      "Adequação à LGPD e ISO 27001",
      "Firewall e controle de acessos",
      "Treinamento de conscientização",
    ],
    reversed: true,
  },
  {
    emoji: "📊",
    title: "SAP Business One (ERP)",
    desc: "Somos especialistas na implementação e suporte do SAP Business One para médias e grandes empresas. Integramos o ERP com os processos da sua operação para maximizar eficiência e visibilidade gerencial.",
    features: [
      "Implementação e configuração do SAP B1",
      "Customizações e add-ons específicos",
      "Integração com outros sistemas",
      "Migração de dados e legados",
      "Treinamento e suporte contínuo",
    ],
    reversed: false,
  },
  {
    emoji: "📡",
    title: "NOC — Centro de Operações de Rede",
    desc: "Monitoramos seu ambiente de TI 24 horas por dia, 7 dias por semana, com Zabbix e Grafana. Identificamos e resolvemos problemas antes que afetem a operação da sua empresa.",
    features: [
      "Monitoramento 24/7 com Zabbix",
      "Dashboards em tempo real com Grafana",
      "Alertas proativos e automação",
      "Relatórios de disponibilidade",
      "SLA com tempos de resposta garantidos",
    ],
    reversed: true,
  },
  {
    emoji: "🤝",
    title: "Outsourcing de TI",
    desc: "Assuma o controle da sua TI sem contratar e gerenciar uma equipe interna. Fornecemos profissionais certificados que atuam como extensão do seu negócio, com SLA rigoroso e foco em resultado.",
    features: [
      "Gestão completa da TI",
      "Equipe certificada dedicada",
      "Suporte N1, N2 e N3",
      "SLA de resposta garantido",
      "Relatórios mensais de performance",
    ],
    reversed: false,
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
              Tecnologia de ponta para empresas que <span style={{ color: "var(--primary-light)" }}>não aceitam parar</span>.
            </h1>
            <p className={styles.solutionsHeroSub}>
              Da infraestrutura à segurança, do ERP ao outsourcing. Somos o braço tecnológico que impulsiona o crescimento do seu negócio com estabilidade e visão estratégica.
            </p>
            <div className={styles.solutionsBadges}>
              {["Cloud & Infra", "Cyber Security", "SAP Business One", "NOC / SOC 24x7", "Support N1-N3"].map((badge) => (
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
