import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";
import styles from "../sobre/page.module.css";

export const metadata: Metadata = {
  title: "Blog — Focus Network",
  description: "Insights, artigos e novidades sobre infraestrutura de TI, cibersegurança e SAP Business One.",
};

const posts = [
  {
    emoji: "🔒",
    tag: "Segurança",
    title: "Como proteger seus dados corporativos em 2025",
    excerpt: "As ameaças cibernéticas evoluem constantemente. Conheça as melhores práticas de segurança para ambientes corporativos modernos.",
    date: "28 Mar 2025",
    readTime: "5 min",
    color: "#EEF0FF",
  },
  {
    emoji: "📊",
    tag: "SAP Business One",
    title: "SAP B1: Como integrar processos e escalar operações",
    excerpt: "O SAP Business One é a solução ERP ideal para PMEs que precisam de visibilidade e controle sem a complexidade de sistemas enterprise.",
    date: "20 Mar 2025",
    readTime: "7 min",
    color: "#F0FFF4",
  },
  {
    emoji: "🖥️",
    tag: "Infraestrutura",
    title: "Cloud vs On-Premise: qual é a melhor opção para sua empresa?",
    excerpt: "A decisão entre cloud e infraestrutura local impacta custo, performance e disponibilidade. Veja como fazer a escolha certa.",
    date: "12 Mar 2025",
    readTime: "6 min",
    color: "#FFF7ED",
  },
  {
    emoji: "📡",
    tag: "Monitoramento",
    title: "Zabbix + Grafana: monitoramento proativo na prática",
    excerpt: "Como estruturar um NOC eficiente usando Zabbix para coleta de dados e Grafana para visualização em tempo real.",
    date: "5 Mar 2025",
    readTime: "8 min",
    color: "#F0F8FF",
  },
  {
    emoji: "⚡",
    tag: "Outsourcing",
    title: "Quando faz sentido terceirizar o time de TI?",
    excerpt: "Terceirização de TI pode reduzir custos e aumentar a qualidade do serviço. Mas quando é o momento certo?",
    date: "25 Fev 2025",
    readTime: "4 min",
    color: "#FDF4FF",
  },
  {
    emoji: "🛡️",
    tag: "Compliance",
    title: "LGPD e TI: o que sua empresa precisa saber",
    excerpt: "A Lei Geral de Proteção de Dados exige mudanças técnicas e processuais. Saiba como adequar sua infraestrutura.",
    date: "15 Fev 2025",
    readTime: "6 min",
    color: "#FFF0F0",
  },
];

const tags = ["Todos", "Segurança", "SAP Business One", "Infraestrutura", "Monitoramento", "Outsourcing", "Compliance"];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.blogHero}>
          <div className="container">
            <span className={styles.label} style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
              Blog & Insights
            </span>
            <h1 className={styles.blogHeroTitle}>Insights & Ideias</h1>
            <p className={styles.blogHeroSub}>
              Conteúdo técnico de qualidade sobre TI, segurança, SAP e gestão de infraestrutura.
            </p>
            <div className={styles.blogSearch}>
              <input type="text" placeholder="Buscar artigos..." />
              <button type="button">Buscar</button>
            </div>
          </div>
        </section>

        {/* Blog grid */}
        <section className={styles.blogSection}>
          <div className="container">
            <div className={styles.blogMeta}>
              <span className={styles.blogCount}>{posts.length} artigos publicados</span>
              <div className={styles.blogTags}>
                {tags.map((tag, i) => (
                  <button key={tag} className={`${styles.blogTag} ${i === 0 ? styles.active : ""}`}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.blogGrid}>
              {posts.map((post) => (
                <Link key={post.title} href="/blog" className={styles.blogCard}>
                  <div className={styles.blogCardCover} style={{ background: post.color }}>
                    {post.emoji}
                  </div>
                  <div className={styles.blogCardBody}>
                    <span className={styles.blogCardTag}>{post.tag}</span>
                    <h3 className={styles.blogCardTitle}>{post.title}</h3>
                    <p className={styles.blogCardExcerpt}>{post.excerpt}</p>
                    <div className={styles.blogCardFooter}>
                      <span className={styles.blogCardDate}>{post.date} · {post.readTime} de leitura</span>
                      <span className={styles.blogCardRead}>Ler →</span>
                    </div>
                  </div>
                </Link>
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
