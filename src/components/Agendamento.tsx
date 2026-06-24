"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, MessageCircle } from "lucide-react";
import React, { useState } from "react";

export default function Agendamento() {
  const [formData, setFormData] = useState({ nome: "", tel: "", proc: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.tel) {
      alert("Por favor, preencha seu nome e WhatsApp.");
      return;
    }
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${formData.nome} e gostaria de agendar uma avaliação${
        formData.proc ? ` para ${formData.proc}` : ""
      }. Meu WhatsApp é ${formData.tel}.`
    );
    window.open(`https://wa.me/5541900000000?text=${msg}`, "_blank");
  };

  return (
    <section id="agendar" className="py-16 md:py-24 lg:py-32 bg-[var(--color-dark-main)] text-white">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Informações */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="text-[13px] font-semibold tracking-[0.15em] text-[var(--color-gold)] uppercase">
                Agendamento
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
              Agende sua avaliação e descubra o tratamento ideal
            </h2>
            
            <p className="text-[18px] text-[#aaa] leading-relaxed mb-12 font-light max-w-lg">
              Consulta personalizada. Sem compromisso. Resposta em até 1h pelo WhatsApp.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-gold)]" />
                <span className="text-[16px] text-[#eee] font-medium">Vagas limitadas por semana</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-gold)]" />
                <span className="text-[16px] text-[#eee] font-medium">Atendimento presencial e por telemedicina</span>
              </div>
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-6 h-6 text-[var(--color-gold)]" />
                <span className="text-[16px] text-[#eee] font-medium">Dados protegidos pela LGPD</span>
              </div>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-[var(--radius-lg)] p-8 backdrop-blur-md"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nome" className="block text-[12px] text-[#888] mb-2">Nome completo</label>
                  <input
                    id="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-[var(--radius-sm)] px-4 py-3 text-[14px] text-white outline-none focus:border-[var(--color-gold)] transition-colors placeholder-[#555]"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="tel" className="block text-[12px] text-[#888] mb-2">WhatsApp</label>
                  <input
                    id="tel"
                    type="tel"
                    required
                    inputMode="tel"
                    value={formData.tel}
                    onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-[var(--radius-sm)] px-4 py-3 text-[14px] text-white outline-none focus:border-[var(--color-gold)] transition-colors placeholder-[#555]"
                    placeholder="(41) 9 0000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="proc" className="block text-[12px] text-[#888] mb-2">Procedimento de interesse (Opcional)</label>
                <select
                  id="proc"
                  value={formData.proc}
                  onChange={(e) => setFormData({ ...formData, proc: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-[var(--radius-sm)] px-4 py-3 text-[14px] text-[#ccc] outline-none focus:border-[var(--color-gold)] transition-colors appearance-none"
                >
                  <option value="" className="text-black">Selecione o procedimento</option>
                  <option value="Toxina botulínica" className="text-black">Toxina botulínica</option>
                  <option value="Bioestimuladores de colágeno" className="text-black">Bioestimuladores de colágeno</option>
                  <option value="Tratamento de manchas" className="text-black">Tratamento de manchas</option>
                  <option value="Preenchimento facial" className="text-black">Preenchimento facial</option>
                  <option value="Laser fracionado" className="text-black">Laser fracionado</option>
                  <option value="Dermatologia clínica" className="text-black">Dermatologia clínica</option>
                  <option value="Outro" className="text-black">Outro</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-gold)] text-white rounded-[var(--radius-xl)] py-4 text-[15px] font-medium hover:opacity-90 transition-opacity mt-2"
              >
                Quero agendar minha avaliação →
              </button>
            </form>

            <div className="flex flex-col items-center gap-4 mt-6">
              <div className="flex items-center gap-3 text-[13px] text-[#666]">
                <div className="w-10 h-[1px] bg-white/10" />
                ou
                <div className="w-10 h-[1px] bg-white/10" />
              </div>
              <a
                href="https://wa.me/5541900000000?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] text-[14px] font-medium hover:text-[#1da851] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Fale direto pelo WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
