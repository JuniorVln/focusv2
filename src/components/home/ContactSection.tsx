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
              Inicie a Conversa Hoje
            </h2>
            
            <p className={styles.quote}>
              "Na Focus Network, acreditamos que toda empresa merece o poder da tecnologia avançada — esteja você apenas começando ou escalando rápido. Minha equipe e eu estamos aqui para apoiar sua visão e ajudá-lo a seguir em frente com confiança."
            </p>
            
            <div className={styles.author}>
              <Image 
                src="/images/avatar_1.png" 
                alt="Carlos Silva" 
                width={48} 
                height={48} 
                className={styles.avatar} 
              />
              <div className={styles.authorInfo}>
                <h4>Carlos Silva</h4>
                <p>Fundador & CEO da Focus Network</p>
              </div>
            </div>
            
            <div className={styles.actions}>
              <div className={styles.btnGroup}>
                <a href="#" className={styles.btnPrimary}>
                  Começar Agora
                </a>
                <div className={styles.btnIconBox}>
                  <RiArrowRightUpLine />
                </div>
              </div>
              
              <a href="#" className={styles.btnSecondary}>
                Fale Conosco <RiArrowRightLine />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
