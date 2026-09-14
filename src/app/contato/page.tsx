import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "../sobre/page.module.css";

export const metadata: Metadata = {
  title: "Contato — Focus Network",
  description: "Fale com o time técnico da Focus Network. Azure, AWS, Oracle Cloud e tudo o que sua empresa precisa na nuvem.",
};

const contactItems = [
  { icon: "📧", label: "E-mail", value: "contato@focusnetwork.com.br" },
  { icon: "📱", label: "Telefone / WhatsApp", value: "+55 (41) 4141-4290" },
  { icon: "📍", label: "Endereço", value: "Av. República Argentina, 2275 — Água Verde, Curitiba – PR" },
  { icon: "🕐", label: "Atendimento", value: "Seg – Sex: 8h às 18h" },
];

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.contactHero}>
          <div className="container">
            <div className={styles.contactGrid}>
              {/* Left: info */}
              <div className={styles.contactInfo}>
                <div>
                  <span className={styles.label}>Fale com a gente</span>
                  <h1 className={styles.contactInfoTitle}>
                    Fale agora mesmo com a equipe da Focus Network
                  </h1>
                  <p className={styles.contactInfoDesc}>
                    Atendimento sem robôs ou burocracias desnecessárias. Sabemos que cada minuto do seu sistema sem funcionar é um prejuízo. Entre em contato e encontre a solução certa para sua empresa.
                  </p>
                </div>
                <div className={styles.contactItems}>
                  {contactItems.map((item) => (
                    <div key={item.label} className={styles.contactItem}>
                      <div className={styles.contactItemIcon}>{item.icon}</div>
                      <div>
                        <div className={styles.contactItemLabel}>{item.label}</div>
                        <div className={styles.contactItemValue}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: form */}
              <div className={styles.formCard}>
                <h3>Entre em Contato</h3>
                <p>Preencha o formulário e nosso time retorna em até 2 horas úteis.</p>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Nome *</label>
                    <input type="text" id="name" placeholder="Seu nome completo" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="company">Empresa *</label>
                    <input type="text" id="company" placeholder="Nome da empresa" />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">E-mail *</label>
                    <input type="email" id="email" placeholder="seu@email.com.br" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" placeholder="(11) 9 0000-0000" />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="service">Serviço de interesse</label>
                  <select id="service">
                    <option value="">Selecione um serviço...</option>
                    <option value="azure">Microsoft Azure</option>
                    <option value="aws">AWS</option>
                    <option value="oracle">Oracle Cloud</option>
                    <option value="migracao">Migração e gestão de ambientes</option>
                    <option value="multicloud">Multi-cloud, Kubernetes & Containers</option>
                    <option value="custos">Segurança, monitoramento e custos</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Mensagem *</label>
                  <textarea id="message" placeholder="Descreva o desafio que sua empresa enfrenta..." />
                </div>
                <button className={styles.submitBtn} type="submit">
                  Enviar Mensagem →
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
