import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
// Blog desativado a pedido do Robson (16/09) — reativar quando forem postar
// import BlogSection from "@/components/home/BlogSection";
import MethodologySection from "@/components/home/MethodologySection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <MethodologySection />
        <TestimonialsSection />
        <FaqSection />
        {/* <BlogSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
