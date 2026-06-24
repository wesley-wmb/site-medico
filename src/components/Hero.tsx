"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Glow Effects (MagicUI style) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[var(--color-gold-light)] blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#f9f5f0] blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Conteúdo da Esquerda */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[var(--color-border-subtle)] shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-8 self-start">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse" />
              <span className="text-[12px] font-medium tracking-wide text-[var(--color-gold-dark)] uppercase">
                Dermatologia Estética Premium
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[68px] font-semibold leading-[1.05] tracking-tight text-[#111] mb-8 lg:mb-6">
              Sua pele em <br className="hidden md:block" />
              sua <span className="bg-gradient-to-r from-[var(--color-gold-dark)] to-[#b5924a] bg-clip-text text-transparent">melhor versão.</span>
            </h1>

            <p className="text-[17px] text-[#555] leading-relaxed max-w-[480px] mb-10 font-light">
              Protocolos exclusivos e tecnologia de ponta para cuidar da sua pele. Rejuvenescimento natural e resultados duradouros com a Dra. Ana Souza.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14">
              <Link
                href="#agendar"
                className="group relative inline-flex items-center justify-center gap-2 bg-[#111] text-white px-8 py-4 rounded-full text-[15px] font-medium overflow-hidden transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:scale-[1.02] w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                Agendar avaliação
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#procedimentos"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-[#444] px-6 py-4 rounded-full text-[15px] font-medium hover:text-black transition-colors w-full sm:w-auto"
              >
                Ver procedimentos
              </Link>
            </div>

            {/* Tremor-style mini bento metrics */}
            <div className="grid grid-cols-3 gap-4 border-t border-[var(--color-border-subtle)] pt-8">
              <div>
                <div className="text-2xl font-semibold text-[#111] tracking-tight">12+</div>
                <div className="text-[12px] text-[#666] font-medium mt-1">Anos de XP</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-[#111] tracking-tight">2k+</div>
                <div className="text-[12px] text-[#666] font-medium mt-1">Pacientes</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-[#111] tracking-tight">4.9★</div>
                <div className="text-[12px] text-[#666] font-medium mt-1">No Google</div>
              </div>
            </div>
          </motion.div>

          {/* Imagem da Direita com Animata style hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] group">
              <div className="absolute inset-0 bg-[var(--color-gold)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 mix-blend-overlay" />
              <img
                src="/clinic_hero.png"
                alt="Clínica Dermatológica Dra. Ana Souza"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={800}
                height={1000}
                style={{ objectPosition: 'center top' }}
              />
            </div>

            {/* Floating Badge estilo MagicUI (Glass + Border gradient) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[20px] p-5 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-gold-light)] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[var(--color-gold-dark)]" />
              </div>
              <div className="flex flex-col">
                <div className="text-[15px] font-semibold text-[#111] leading-tight">
                  Membro Titular
                </div>
                <div className="text-[13px] text-[#555]">
                  SBD - CFM 2.336
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

