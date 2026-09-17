"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './TestimonialsSection.module.css';
import { RiChat3Line, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

type Tema = 'light' | 'blue' | 'white' | 'dark';

const depoimentos: {
  texto: string;
  nome: string;
  cargo: string;
  avatar: string;
  tema: Tema;
  metricas?: { num: string; label: string }[];
}[] = [
  {
    texto: 'Com o ambiente na nuvem monitorado pela Focus Network, passamos a identificar falhas antes mesmo que impactassem nossos usuários. A tranquilidade operacional que isso gerou não tem preço.',
    nome: 'Ricardo Almeida',
    cargo: 'Gerente de TI — Indústria Metal.',
    avatar: '/images/avatar_1.png',
    tema: 'light',
    metricas: [
      { num: '24/7', label: 'Monitoramento contínuo' },
      { num: 'AWS', label: 'Ambiente gerenciado' },
    ],
  },
  {
    texto: 'A Focus Network organizou nosso ambiente no Azure e reduziu o que pagávamos sem necessidade. O atendimento deles é diferenciado — sem robôs, sempre humano e ágil.',
    nome: 'Fernanda Costa',
    cargo: 'Diretora Financeira — Distribuidora',
    avatar: '/images/avatar_2.png',
    tema: 'blue',
    metricas: [
      { num: 'Azure', label: 'Ambiente otimizado' },
      { num: 'Custos', label: 'Sob controle' },
    ],
  },
  {
    texto: 'Migramos toda nossa infraestrutura para a nuvem com a Focus Network. O processo foi simples, rápido e sem impacto no nosso dia a dia. Recomendo sem hesitar.',
    nome: 'Paulo Martins',
    cargo: 'CEO — Empresa de Serviços',
    avatar: '/images/avatar_3.png',
    tema: 'white',
  },
  {
    texto: 'A equipe da Focus realmente entende de nuvem. Estruturaram nossas aplicações em containers e reforçaram a segurança do ambiente. Nunca estivemos tão protegidos.',
    nome: 'Carla Ribeiro',
    cargo: 'Gestora de TI — Clínica Médica',
    avatar: '/images/avatar_4.png',
    tema: 'dark',
  },
];

const INTERVALO = 5000;

const TestimonialsSection = () => {
  const total = depoimentos.length;
  const [ativo, setAtivo] = useState(0);
  const [pausado, setPausado] = useState(false);
  const toqueX = useRef<number | null>(null);

  const ir = useCallback((i: number) => setAtivo((i + total) % total), [total]);

  useEffect(() => {
    if (pausado) return;
    const t = setTimeout(() => ir(ativo + 1), INTERVALO);
    return () => clearTimeout(t);
  }, [ativo, pausado, ir]);

  // posição relativa ao ativo, no intervalo [-total/2, total/2]
  const posicao = (i: number) => {
    let d = i - ativo;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  return (
    <section className={styles.section} id="depoimentos">
      <div className="container">
        <header className={styles.header}>
          <div className={styles.badge}>
            <RiChat3Line />
            Depoimentos
          </div>
          <h2 className={styles.title}>O que nossos clientes dizem</h2>
          <p className={styles.subtitle}>
            Empresas de diferentes segmentos confiam na Focus Network para levar e manter seus ambientes na nuvem.
          </p>
        </header>

        <div
          className={styles.carousel}
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          onTouchStart={(e) => { toqueX.current = e.touches[0].clientX; setPausado(true); }}
          onTouchEnd={(e) => {
            if (toqueX.current !== null) {
              const dx = e.changedTouches[0].clientX - toqueX.current;
              if (Math.abs(dx) > 40) ir(ativo + (dx < 0 ? 1 : -1));
            }
            toqueX.current = null;
            setPausado(false);
          }}
          aria-roledescription="carrossel"
        >
          <div className={styles.track}>
            {depoimentos.map((d, i) => {
              const pos = posicao(i);
              const escuro = d.tema === 'blue' || d.tema === 'dark';
              return (
                <article
                  key={d.nome}
                  className={`${styles.slide} ${styles[d.tema]}`}
                  data-pos={Math.max(-2, Math.min(2, pos))}
                  aria-hidden={pos !== 0}
                  onClick={() => pos !== 0 && ir(i)}
                >
                  <span className={escuro ? styles.quoteIconWhite : styles.quoteIcon}>{'“'}</span>
                  <p className={escuro ? styles.quoteTextWhite : styles.quoteText}>{d.texto}</p>
                  <div className={styles.author}>
                    <img src={d.avatar} alt={d.nome} className={styles.avatar} />
                    <div>
                      <div className={escuro ? styles.authorNameWhite : styles.authorName}>{d.nome}</div>
                      <div className={escuro ? styles.authorRoleWhite : styles.authorRole}>{d.cargo}</div>
                    </div>
                  </div>
                  {d.metricas && (
                    <div className={escuro ? styles.metricRowWhite : styles.metricRow}>
                      {d.metricas.map((m) => (
                        <div key={m.label} className={styles.metricItem}>
                          <div className={escuro ? styles.metricNumWhite : styles.metricNum}>{m.num}</div>
                          <div className={escuro ? styles.metricLabelWhite : styles.metricLabel}>{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className={styles.controls}>
            <button className={styles.arrow} onClick={() => ir(ativo - 1)} aria-label="Depoimento anterior">
              <RiArrowLeftSLine />
            </button>
            <div className={styles.dots}>
              {depoimentos.map((d, i) => (
                <button
                  key={d.nome}
                  className={`${styles.dot} ${i === ativo ? styles.dotActive : ''}`}
                  onClick={() => ir(i)}
                  aria-label={`Ver depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button className={styles.arrow} onClick={() => ir(ativo + 1)} aria-label="Próximo depoimento">
              <RiArrowRightSLine />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
