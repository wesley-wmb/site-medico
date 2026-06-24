"use client";

import { motion } from "framer-motion";
import { ArrowRight, Beaker, Star, Sparkles, Droplets, Droplet, Search } from "lucide-react";
import Link from "next/link";

const procedimentos = [
  {
    icon: Sparkles,
    nome: "Toxina botulínica",
    badge: "+ buscado",
    desc: "Suavização de rugas com resultado natural e duradouro. Manutenção a cada 4–6 meses."
  },
  {
    icon: Droplet,
    nome: "Bioestimuladores de colágeno",
    desc: "Firmeza e rejuvenescimento progressivo com estímulo natural de colágeno."
  },
  {
    icon: Search,
    nome: "Tratamento de manchas",
    desc: "Laser e protocolos clínicos para melasma, lentigos solares e hiperpigmentação."
  },
  {
    icon: Droplets,
    nome: "Preenchimento facial",
    desc: "Ácido hialurônico para volume, harmonia facial e hidratação profunda."
  },
  {
    icon: Beaker,
    nome: "Laser fracionado",
    desc: "Renovação celular para textura, poros dilatados e cicatrizes de acne."
  },
  {
    icon: Star,
    nome: "Dermatologia clínica",
    desc: "Diagnóstico e tratamento de acne, psoríase, dermatite e câncer de pele."
  }
];

export default function Procedimentos() {
  return (
    <section id="procedimentos" className="py-16 md:py-24 lg:py-32 bg-[var(--surface)]">
      <div className="container mx-auto px-6 md:px-10">
        
        <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-gold-light)] text-[12px] font-semibold tracking-[0.15em] text-[var(--color-gold-dark)] uppercase">
              Procedimentos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)] mb-6 leading-tight">
            Tratamentos para cada objetivo
          </h2>
          <p className="text-[18px] text-[var(--color-muted)] font-light">
            Cada protocolo é personalizado após avaliação clínica detalhada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procedimentos.map((proc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link 
                href="#agendar" 
                className="block h-full p-6 bg-[var(--bg)] border border-[var(--color-border-subtle)] rounded-[var(--radius-lg)] hover:border-[var(--color-gold)] hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--color-gold-light)] flex items-center justify-center mb-4">
                  <proc.icon className="w-5 h-5 text-[var(--color-gold-dark)]" />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[14px] font-medium text-[var(--color-text-main)]">
                    {proc.nome}
                  </h3>
                  {proc.badge && (
                    <span className="text-[9px] font-medium bg-[var(--color-gold-light)] text-[var(--color-gold-dark)] px-2 py-0.5 rounded-full">
                      {proc.badge}
                    </span>
                  )}
                </div>
                
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed mb-6">
                  {proc.desc}
                </p>
                
                <div className="flex items-center gap-1 text-[12px] font-medium text-[var(--color-gold-dark)] group-hover:text-[var(--color-gold)] transition-colors mt-auto">
                  Saiba mais <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#agendar"
            className="inline-flex items-center gap-2 border border-[var(--color-border-md)] text-[var(--color-muted)] px-6 py-3 rounded-full text-[13px] font-medium hover:border-[var(--color-gold)] hover:text-[var(--color-gold-dark)] transition-all"
          >
            Ver todos os procedimentos
          </Link>
        </div>
      </div>
    </section>
  );
}
