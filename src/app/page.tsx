import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Hero from "@/components/Hero";
import Metricas from "@/components/Metricas";
import Procedimentos from "@/components/Procedimentos";
import Sobre from "@/components/Sobre";
import Depoimentos from "@/components/Depoimentos";
import Agendamento from "@/components/Agendamento";
import Localizacao from "@/components/Localizacao";

export default function Home() {
  return (
    <>
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
    </>
  );
}
