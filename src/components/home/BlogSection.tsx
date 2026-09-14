"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogSection.module.css';
import { RiEyeLine, RiArrowRightLine } from 'react-icons/ri';

const posts = [
  {
    id: 1,
    title: "Azure, AWS ou Oracle Cloud: qual nuvem escolher?",
    summary: "Entenda as diferenças entre as três principais nuvens do mercado e como escolher — ou combinar — a melhor opção para sua empresa.",
    date: "10 Mar, 2025",
    image: "/images/blog_1.png",
    isLarge: true
  },
  {
    id: 2,
    title: "Multi-cloud: quando vale a pena usar mais de uma nuvem?",
    summary: "Flexibilidade, menos dependência de fornecedor e custos equilibrados. Veja quando a arquitetura multi-cloud faz sentido.",
    date: "02 Fev, 2025",
    image: "/images/blog_2.png",
    isLarge: false
  },
  {
    id: 3,
    title: "Como reduzir custos na nuvem sem perder desempenho",
    summary: "Recursos ociosos e ambientes superdimensionados pesam na fatura. Conheça as práticas que mantêm a nuvem enxuta e segura.",
    date: "15 Jan, 2025",
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
            <h2 className={styles.title}>Conteúdo especializado em cloud para o seu negócio</h2>
            <p className={styles.description}>
              Fique por dentro das melhores práticas em Azure, AWS, Oracle Cloud, multi-cloud, Kubernetes e otimização de custos.
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
