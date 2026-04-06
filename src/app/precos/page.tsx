import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingSection from "@/components/home/PricingSection";
import ContactSection from "@/components/home/ContactSection";
import styles from "../sobre/page.module.css";

export const metadata: Metadata = {
  title: "Preços — Focus Network",
  description: "Planos transparentes para infraestrutura de TI, segurança e SAP Business One. Escolha o plano ideal para sua empresa.",
};

const faqs = [
  {
    q: "Os preços incluem suporte técnico?",
    a: "Sim. Todos os planos incluem suporte técnico com SLA definido. O tempo de resposta varia conforme o plano (4h, 2h ou 1h útil)."
  },
  {
    q: "Posso mudar de plano depois?",
    a: "Sim. Você pode fazer upgrade ou downgrade a qualquer momento. A cobrança é ajustada proporcionalmente no próximo ciclo."
  },
  {
    q: "O que está incluído no plano SAP B1?",
    a: "O plano SAP B1 é personalizado conforme a complexidade da sua operação. Inclui implementação, customizações, treinamento e suporte contínuo."
  },
  {
    q: "Há contrato de fidelidade?",
    a: "Temos contratos de 12 meses com desconto, mas também oferecemos planos mensais sem fidelidade."
  },
  {
    q: "Como funciona o onboarding?",
    a: "Após a contratação, nossa equipe realiza um diagnóstico completo do ambiente em até 5 dias úteis e apresenta o plano de implementação."
  },
  {
    q: "Vocês atendem fora de São Paulo?",
    a: "Sim. Atendemos clientes em todo o Brasil. Para algumas atividades presenciais, verificamos a viabilidade conforme a localização."
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
              Preços transparentes, sem surpresas
            </h1>
            <p style={{ fontSize: 18, color: "var(--text-body)", maxWidth: 540, margin: "0 auto" }}>
              Escolha o plano ideal para sua empresa. Upgrade ou cancelamento a qualquer momento.
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
