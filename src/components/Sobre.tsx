"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Globe, Users } from "lucide-react";

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-32 bg-[var(--surface)] border-t border-[var(--color-border-subtle)]">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Foto da Médica */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 lg:col-span-4"
          >
            <div className="w-full aspect-[3/4] bg-[#e8e0d6] rounded-[24px] relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
              <img
                src="/doctor_portrait.png"
                alt="Dra. Ana Souza"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={600}
                height={800}
              />
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 lg:col-span-8"
          >
            <div className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-gold-light)] text-[12px] font-semibold tracking-[0.15em] text-[var(--color-gold-dark)] uppercase">
                Sobre a Médica
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)] mb-3">
              Dra. Ana Souza
            </h2>
            <div className="text-[18px] text-[var(--color-gold)] font-medium mb-8">
              Dermatologista · CRM-PR 00000 · RQE 00000
            </div>

            <p className="text-[17px] text-[var(--color-muted)] font-light leading-relaxed mb-12">
              Especialista em dermatologia clínica e estética com 12 anos de experiência. Formada pela Universidade Federal do Paraná, com residência médica no Hospital das Clínicas e fellowship em rejuvenescimento facial. Membro titular da Sociedade Brasileira de Dermatologia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--bg)] flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[var(--color-gold)]" />
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[var(--color-text-main)]">Título pela SBD</div>
                  <div className="text-[12px] text-[var(--color-subtle)]">Especialista certificada</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--bg)] flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-[var(--color-gold)]" />
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[var(--color-text-main)]">Residência HC-UFPR</div>
                  <div className="text-[12px] text-[var(--color-subtle)]">Formação de excelência</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--bg)] flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-[var(--color-gold)]" />
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[var(--color-text-main)]">Fellowship nos EUA</div>
                  <div className="text-[12px] text-[var(--color-subtle)]">Treinamento internacional</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--bg)] flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[var(--color-gold)]" />
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[var(--color-text-main)]">+2.000 pacientes</div>
                  <div className="text-[12px] text-[var(--color-subtle)]">Atendidos com excelência</div>
                </div>
              </div>
            </div>

            <blockquote className="pl-5 border-l-2 border-[var(--color-gold)] bg-[var(--bg)] py-4 pr-6 rounded-r-[var(--radius-sm)]">
              <p className="text-[14px] italic text-[var(--color-muted)] leading-relaxed">
                "Minha abordagem combina diagnóstico preciso e tecnologia de ponta — sempre priorizando resultados naturais e a segurança de cada paciente."
              </p>
            </blockquote>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
