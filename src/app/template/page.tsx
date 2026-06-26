import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Hero from "./components/Hero";
import Metricas from "./components/Metricas";
import Resultados from "./components/Resultados";
import Procedimentos from "./components/Procedimentos";
import Sobre from "./components/Sobre";
import Agendamento from "./components/Agendamento";
import Localizacao from "./components/Localizacao";

export const metadata: Metadata = {
  title: "Dra. Ana Souza · Dermatologista em Curitiba, PR",
  description: "Tratamentos personalizados com tecnologia de ponta para cuidar da sua pele.",
};

export default function TemplatePage() {
  return (
    <div data-site="template" style={{ background: "#f9f6f1", color: "#18170f" }}>
      <Header />
      <main>
        <Hero />
        <Metricas />
        <Resultados />
        <Procedimentos />
        <Sobre />
        <Agendamento />
        <Localizacao />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
