import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Hero from "@/components/Hero";
import Procedimentos from "@/components/Procedimentos";
import Resultados from "@/components/Resultados";
import Sobre from "@/components/Sobre";
import Agendamento from "@/components/Agendamento";
import Localizacao from "@/components/Localizacao";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Resultados />
        <Procedimentos />
        <Sobre />
        <Agendamento />
        <Localizacao />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

