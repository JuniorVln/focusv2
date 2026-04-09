"use client";

import React from 'react';
import Image from 'next/image';
import styles from './ContactSection.module.css';
import { RiChat3Line, RiArrowRightUpLine, RiArrowRightLine } from 'react-icons/ri';

export default function ContactSection() {
  return (
    <section className={styles.section} id="contato">
      {/* Background container for video/waves effect */}
      <div className={styles.backgroundVideo}>
        <div className={styles.backgroundWaves}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.darkBox}>
          <div className={styles.inner}>
            <span className={styles.badge}>
              <RiChat3Line /> Vamos nos conectar
            </span>
            
            <h2 className={styles.title}>
              Fale Agora com um Especialista
            </h2>

            <p className={styles.quote}>
              "Na Focus Network, buscamos excelência em suporte, atendimento e desenvolvimento de práticas diferenciadas para continuar sendo referência na área. Minha equipe está pronta para atender sem robôs ou burocracias desnecessárias."
            </p>

            <div className={styles.author}>
              <Image
                src="/images/avatar_1.png"
                alt="Fundador Focus Network"
                width={48}
                height={48}
                className={styles.avatar}
              />
              <div className={styles.authorInfo}>
                <h4>Equipe Focus Network</h4>
                <p>Curitiba – PR | contato@focusnetwork.com.br</p>
              </div>
            </div>

            <div className={styles.actions}>
              <div className={styles.btnGroup}>
                <a href="/contato" className={styles.btnPrimary}>
                  Entrar em Contato
                </a>
                <div className={styles.btnIconBox}>
                  <RiArrowRightUpLine />
                </div>
              </div>

              <a href="https://wa.me/554141414290" className={styles.btnSecondary}>
                WhatsApp <RiArrowRightLine />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
