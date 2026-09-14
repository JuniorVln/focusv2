import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingSection from "@/components/home/PricingSection";
import ContactSection from "@/components/home/ContactSection";
import styles from "../sobre/page.module.css";

export const metadata: Metadata = {
  title: "Preços — Focus Network",
  description: "Formatos de contratação para migração, gestão e arquitetura multi-cloud em Azure, AWS e Oracle Cloud.",
};

const faqs = [
  {
    q: "Por que os valores são sob consulta?",
    a: "Cada ambiente tem tamanho, nuvem e necessidades diferentes. Por isso montamos a proposta a partir do diagnóstico da sua empresa."
  },
  {
    q: "O custo da nuvem (Azure, AWS, Oracle) está incluído?",
    a: "O consumo da nuvem é cobrado pelo próprio provedor. Nosso trabalho é planejar, migrar, gerir e otimizar esse ambiente para você pagar só pelo que usa."
  },
  {
    q: "Posso começar pela migração e depois contratar a gestão?",
    a: "Sim. Muitas empresas começam pela migração e seguem com a gestão contínua do ambiente depois que ele está em operação."
  },
  {
    q: "Vocês atendem empresas que já estão na nuvem?",
    a: "Sim. Assumimos ambientes existentes, revisamos segurança e custos e passamos a cuidar da operação no dia a dia."
  },
  {
    q: "Como funciona o início do projeto?",
    a: "Começamos com um diagnóstico do ambiente atual e apresentamos o plano de trabalho antes de qualquer mudança."
  },
  {
    q: "Vocês atendem fora de Curitiba?",
    a: "Sim. Atendemos clientes em todo o Brasil a partir da nossa sede em Curitiba – PR. Para algumas atividades presenciais, verificamos a viabilidade conforme a localização."
  },
];

export default function PrecosPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.pricingHero}>
          <div className="container">
            <span className={styles.label}>Planos & Preços</span>
            <h1 style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", marginTop: 16, marginBottom: 16, color: "var(--text-primary)" }}>
              Um formato para cada momento na nuvem
            </h1>
            <p style={{ fontSize: 18, color: "var(--text-body)", maxWidth: 540, margin: "0 auto" }}>
              Migração, gestão ou multi-cloud. A proposta é montada a partir do diagnóstico da sua empresa.
            </p>
          </div>
        </section>

        <PricingSection />

        {/* FAQ */}
        <section className={`${styles.faqSection} ${styles.sectionGray}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.label}>Dúvidas Frequentes</span>
              <h2>Perguntas sobre os planos</h2>
            </div>
            <div className={styles.faqGrid}>
              {faqs.map((faq) => (
                <div key={faq.q} className={styles.faqItem}>
                  <div className={styles.faqQ}>{faq.q}</div>
                  <div className={styles.faqA}>{faq.a}</div>
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
