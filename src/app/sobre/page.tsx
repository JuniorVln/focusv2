import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sobre Nós — Focus Network",
  description: "Conheça a Focus Network: equipe certificada com mais de 8 anos de experiência em infraestrutura, segurança e SAP Business One.",
};

const values = [
  { icon: "🤝", title: "Comprometimento", desc: "Comprometimento e respeito com nossos clientes e colaboradores em cada projeto e atendimento." },
  { icon: "😊", title: "Ambiente Agradável", desc: "Provemos um ambiente agradável com interação amigável entre cliente e prestadora de serviço." },
  { icon: "🔒", title: "Normas Técnicas", desc: "Seguimos rigorosamente as normas técnicas de cada departamento, incluindo conformidade com LGPD." },
  { icon: "💡", title: "Inovação Contínua", desc: "Buscamos sempre as melhores e mais inovadoras soluções em tecnologia para manter nossos clientes na vanguarda." },
];

const milestones = [
  { year: "2017", title: "Fundação", desc: "Fundada com foco em infraestrutura e suporte técnico para PMEs." },
  { year: "2019", title: "Expansão SAP", desc: "Iniciamos as implementações de SAP Business One com equipe certificada." },
  { year: "2021", title: "NOC 24/7", desc: "Lançamos o Centro de Operações de Rede com monitoramento contínuo." },
  { year: "2023", title: "Cibersegurança", desc: "Criamos a vertical de Segurança & Compliance para ambientes críticos." },
  { year: "2025+", title: "Crescimento", desc: "Expansão nacional com novos parceiros e soluções integradas de IA." },
];

const team = [
  { name: "Marco Ribeiro", role: "CEO & Fundador", specialty: "Infraestrutura & Estratégia", initials: "MR", color: "#054579" },
  { name: "Ana Costa", role: "Diretora de SAP", specialty: "SAP Business One Certified", initials: "AC", color: "#2a78b5" },
  { name: "Rafael Souza", role: "Head de Segurança", specialty: "Cibersegurança & Compliance", initials: "RS", color: "#03345c" },
  { name: "Luiza Neves", role: "Tech Lead NOC", specialty: "Zabbix & Grafana", initials: "LN", color: "#1a6aad" },
];

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroLeft}>
                <span className={styles.label}>Sobre Nós</span>
                <h1 className={styles.heroTitle}>
                  Conheça a<br />
                  <span>Focus Network</span>
                </h1>
              </div>
              <div className={styles.heroRight}>
                <p className={styles.heroDesc}>
                  A Focus Network é uma empresa especializada em Tecnologia da Informação. Desde 2017 no mercado, visa fornecer as melhores soluções em tecnologia, fazendo seus clientes se tornarem empresas inteligentes. Contamos com uma equipe capacitada, com anos de experiência e variadas certificações profissionais.
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.heroStat}><strong>+7</strong><span>Anos de mercado</span></div>
                  <div className={styles.heroStat}><strong>98%</strong><span>Satisfação do cliente</span></div>
                  <div className={styles.heroStat}><strong>100+</strong><span>Clientes atendidos</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.label}>Nossa Essência</span>
              <h2>Missão, Visão e Valores</h2>
            </div>
            <div className={styles.missionGrid}>
              <div className={styles.missionCard}>
                <h3>Nossa Missão</h3>
                <p>Desenvolver soluções eficientes, inovadoras e únicas para atender os clientes, fazendo-os se tornarem empresas inteligentes através da tecnologia.</p>
              </div>
              <div className={`${styles.missionCard} ${styles.missionCardDark}`}>
                <h3>Nossa Visão</h3>
                <p>Ser referência em atendimento e desenvolvimento de práticas, tecnologia e inovações em Tecnologia da Informação no mercado brasileiro.</p>
              </div>
            </div>
            <div className={styles.valuesGrid}>
              {values.map((v) => (
                <div key={v.title} className={styles.valueCard}>
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.label}>Nossa Jornada</span>
              <h2>+7 anos construindo excelência em TI</h2>
            </div>
            <div className={styles.timeline}>
              {milestones.map((m, i) => (
                <div key={m.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}>
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineYear}>{m.year}</span>
                    <h4>{m.title}</h4>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.label}>Time</span>
              <h2>As pessoas por trás da Focus Network</h2>
            </div>
            <div className={styles.teamGrid}>
              {team.map((member) => (
                <div key={member.name} className={styles.teamCard}>
                  <div className={styles.teamAvatar} style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}99)` }}>
                    {member.initials}
                  </div>
                  <h4>{member.name}</h4>
                  <span className={styles.teamRole}>{member.role}</span>
                  <span className={styles.teamSpecialty}>{member.specialty}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
