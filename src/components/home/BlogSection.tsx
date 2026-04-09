"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogSection.module.css';
import { RiEyeLine, RiArrowRightLine } from 'react-icons/ri';

const posts = [
  {
    id: 1,
    title: "Cloud Computing: Nuvem Pública, Privada ou Híbrida — Qual escolher?",
    summary: "Entenda as diferenças entre os modelos de nuvem e como a Focus Network pode ajudar sua empresa a fazer a escolha certa com segurança e economia.",
    date: "10 Mar, 2025",
    image: "/images/blog_1.png",
    isLarge: true
  },
  {
    id: 2,
    title: "Por que monitorar sua infraestrutura de TI com Zabbix e Grafana?",
    summary: "Monitoramento proativo evita paradas, previne ataques e garante disponibilidade. Veja como transformamos indicadores em dashboards gerenciáveis.",
    date: "02 Fev, 2025",
    image: "/images/blog_2.png",
    isLarge: false
  },
  {
    id: 3,
    title: "SAP Business One: o ERP ideal para empresas em crescimento",
    summary: "Conheça como o SAP B1, em parceria com a Ramo Sistemas, pode transformar a gestão da sua empresa com eficiência e visibilidade total.",
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
            <h2 className={styles.title}>Conteúdo especializado em TI para o seu negócio</h2>
            <p className={styles.description}>
              Fique por dentro das melhores práticas em infraestrutura, segurança, Cloud Computing, SAP Business One e monitoramento NOC.
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
