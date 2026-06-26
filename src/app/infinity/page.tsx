import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Hero from "./components/Hero";
import Metricas from "./components/Metricas";
import Procedimentos from "./components/Procedimentos";
import Depoimentos from "./components/Depoimentos";
import Sobre from "./components/Sobre";
import Agendamento from "./components/Agendamento";
import Localizacao from "./components/Localizacao";

export const metadata: Metadata = {
  title: "Infinity Estética · Harmonização Facial e Corporal em São José dos Pinhais",
  description: "Sua melhor versão começa aqui. Harmonização Facial e Corporal, Emagrecimento e Rejuvenescimento com tecnologia avançada em São José dos Pinhais, PR.",
};

export default function InfinityPage() {
  return (
    <div data-site="infinity" style={{ background: "#FAF8F5", color: "#18170f" }}>
      <Header />
      <main>
        <Hero />
        <Metricas />
        <Procedimentos />
        <Depoimentos />
        <Sobre />
        <Agendamento />
        <Localizacao />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
