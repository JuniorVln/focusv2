import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";
import styles from "../sobre/page.module.css";

export const metadata: Metadata = {
  title: "Blog — Focus Network",
  description: "Insights e artigos sobre Azure, AWS, Oracle Cloud, multi-cloud, Kubernetes e otimização de custos na nuvem.",
};

const posts = [
  {
    emoji: "☁️",
    tag: "Azure",
    title: "Microsoft Azure: por onde começar a migração",
    excerpt: "Um roteiro prático para levar servidores e aplicações da sua empresa para o Azure com planejamento e sem sustos.",
    date: "28 Mar 2025",
    readTime: "5 min",
    color: "#EEF0FF",
  },
  {
    emoji: "🟧",
    tag: "AWS",
    title: "AWS para empresas: os serviços que mais fazem diferença",
    excerpt: "Computação, armazenamento, bancos de dados e rede: o que realmente importa na AWS para operações de pequeno e médio porte.",
    date: "20 Mar 2025",
    readTime: "7 min",
    color: "#FFF7ED",
  },
  {
    emoji: "🔴",
    tag: "Oracle Cloud",
    title: "Oracle Cloud: quando ela é a melhor escolha",
    excerpt: "Cargas de trabalho Oracle, bancos de dados e custo competitivo: entenda em que cenários a OCI se destaca.",
    date: "12 Mar 2025",
    readTime: "6 min",
    color: "#FFF0F0",
  },
  {
    emoji: "📦",
    tag: "Kubernetes",
    title: "Kubernetes e containers: escala e portabilidade na prática",
    excerpt: "Como containers e Kubernetes padronizam aplicações e facilitam rodar o mesmo sistema em nuvens diferentes.",
    date: "5 Mar 2025",
    readTime: "8 min",
    color: "#F0F8FF",
  },
  {
    emoji: "🔀",
    tag: "Multi-cloud",
    title: "Multi-cloud: vale a pena usar mais de uma nuvem?",
    excerpt: "Flexibilidade, menos dependência de fornecedor e custos equilibrados. Veja quando a arquitetura multi-cloud faz sentido.",
    date: "25 Fev 2025",
    readTime: "4 min",
    color: "#FDF4FF",
  },
  {
    emoji: "💰",
    tag: "Custos",
    title: "Como reduzir custos na nuvem sem perder desempenho",
    excerpt: "Recursos ociosos e ambientes superdimensionados pesam na fatura. Conheça as práticas que mantêm a nuvem enxuta e segura.",
    date: "15 Fev 2025",
    readTime: "6 min",
    color: "#F0FFF4",
  },
];

const tags = ["Todos", "Azure", "AWS", "Oracle Cloud", "Kubernetes", "Multi-cloud", "Custos"];

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
              Conteúdo técnico de qualidade sobre cloud, migração, segurança e custos na nuvem.
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
