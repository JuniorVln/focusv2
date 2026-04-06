"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogSection.module.css';
import { RiEyeLine, RiArrowRightLine } from 'react-icons/ri';

const posts = [
  {
    id: 1,
    title: "Como a IA está Revolucionando o Suporte ao Cliente em 2025",
    summary: "Veja como chatbots de IA e PLN aprimoram o suporte com velocidade e personalização.",
    date: "18 Jun, 2025",
    image: "/images/blog_1.png",
    isLarge: true
  },
  {
    id: 2,
    title: "Construindo uma Startup Pronta para IA: Dicas para Fundadores",
    summary: "Ajude startups a adotarem IA precocemente com soluções escaláveis e econômicas.",
    date: "29 Mai, 2025",
    image: "/images/blog_2.png",
    isLarge: false
  },
  {
    id: 3,
    title: "5 Integrações SaaS Essenciais para Turbinar seu Fluxo de Trabalho",
    summary: "Otimize as operações da equipe integrando IA com ferramentas SaaS essenciais.",
    date: "04 Jun, 2025",
    image: "/images/blog_3.png",
    isLarge: false
  }
];

export default function BlogSection() {
  const largePost = posts.find(p => p.isLarge);
  const sidePosts = posts.filter(p => !p.isLarge);

  return (
    <section className={styles.section} id="blog">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.badge}>
              <RiEyeLine />
              Insights & Artigos
            </span>
          </div>
          <div className={styles.headerRight}>
            <h2 className={styles.title}>Descubra o Futuro da Tecnologia em Seus Negócios</h2>
            <p className={styles.description}>
              Fique por dentro das últimas tendências em TI, infraestrutura digital e inovações que impulsionam o crescimento moderno.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Main Card */}
          {largePost && (
            <div className={styles.mainCard}>
              <Image 
                src={largePost.image} 
                alt={largePost.title} 
                width={800} 
                height={500} 
                className={styles.mainImage}
              />
              <div className={styles.mainGradient} />
              <div className={styles.mainContent}>
                <span className={styles.date}>{largePost.date}</span>
                <h3>{largePost.title}</h3>
                <p>{largePost.summary}</p>
              </div>
            </div>
          )}

          {/* Side Cards */}
          {sidePosts.map(post => (
            <div key={post.id} className={styles.sideCard}>
              <div className={styles.sideImageContainer}>
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={400} 
                  height={250} 
                  className={styles.sideImage}
                />
              </div>
              <div className={styles.sideContent}>
                <span className={styles.sideDate}>{post.date}</span>
                <h4>{post.title}</h4>
                <p>{post.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/blog" className={styles.moreLink}>
            Ver mais <RiArrowRightLine />
          </Link>
        </div>
      </div>
    </section>
  );
}
