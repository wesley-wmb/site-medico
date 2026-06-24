"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Info, CheckCircle2 } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

function NumberTicker({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      // formatting numbers (e.g. 2000 -> 2.000)
      setDisplayValue(Intl.NumberFormat("pt-BR").format(Math.floor(latest)));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-semibold text-[var(--color-text-main)] tracking-tight">
      {displayValue}
      {suffix}
    </span>
  );
}

function ImageSlider({ beforeSrc, afterSrc }: { beforeSrc: string; afterSrc: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[250px] md:h-[300px] overflow-hidden cursor-ew-resize select-none"
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
    >
      {/* After Image */}
      <img src={afterSrc} alt="Depois" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <span className="absolute bottom-4 right-4 bg-white/80 text-black text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm backdrop-blur-sm pointer-events-none">Depois</span>

      {/* Before Image */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeSrc}
          alt="Antes"
          className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current?.offsetWidth || "100%" }}
        />
        <span className="absolute bottom-4 left-4 bg-black/40 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm pointer-events-none">Antes</span>
      </div>

      {/* Slider Line */}
      <div
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.3)] flex items-center justify-center pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
            <path d="M8 12H3m0 0l3-3m-3 3l3 3M16 12h5m0 0l-3-3m3 3l-3 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

const categorias = ["Toxina botulínica", "Bioestimuladores", "Manchas / laser"];

export default function Resultados() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="resultados" className="py-16 md:py-24 lg:py-32 bg-[var(--bg)]">
      <div className="container mx-auto px-6 md:px-10">
        
        {/* Prova Social: Números Animados */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
          <div className="bg-white p-8 rounded-[24px] text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow">
            <div className="mb-2"><NumberTicker value={4.9} suffix="★" /></div>
            <div className="text-[14px] font-medium text-[var(--color-muted)] uppercase tracking-wide">Avaliação Google</div>
          </div>
          <div className="bg-white p-8 rounded-[24px] text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow">
            <div className="mb-2"><NumberTicker value={2000} suffix="+" /></div>
            <div className="text-[14px] font-medium text-[var(--color-muted)] uppercase tracking-wide">Pacientes</div>
          </div>
          <div className="bg-white p-8 rounded-[24px] text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow">
            <div className="mb-2"><NumberTicker value={12} suffix=" anos" /></div>
            <div className="text-[14px] font-medium text-[var(--color-muted)] uppercase tracking-wide">De experiência</div>
          </div>
          <div className="bg-white p-8 rounded-[24px] text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow">
            <div className="text-4xl md:text-5xl font-semibold text-[var(--color-text-main)] tracking-tight mb-2">SBD</div>
            <div className="text-[14px] font-medium text-[var(--color-muted)] uppercase tracking-wide">Membro titular</div>
          </div>
        </div>

        {/* Divisor Elegante */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <h2 className="text-4xl font-semibold text-[var(--color-text-main)] tracking-tight">Resultados reais</h2>
          <div className="flex items-center gap-2 bg-white shadow-sm border border-[var(--color-border-subtle)] rounded-full px-4 py-2 text-[12px] font-medium text-[#555]">
            <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)]" /> Conforme CFM 2.336/2023
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categorias.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 rounded-full text-[14px] font-medium transition-all ${
                activeTab === i 
                ? "bg-[var(--color-dark-main)] text-white shadow-md" 
                : "bg-white text-[var(--color-muted)] border border-[var(--color-border-subtle)] hover:bg-[var(--color-gold-light)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold-dark)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cases Grid com Slider Arrastável */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {[1, 2, 3].map((_, i) => (
            <motion.div 
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-[var(--color-border-subtle)] rounded-[24px] overflow-hidden shadow-sm"
            >
              <ImageSlider beforeSrc="/before_after_face.png" afterSrc="/before_after_face.png" />
              <div className="p-6">
                <div className="text-[16px] font-semibold text-[var(--color-text-main)] mb-1">
                  Tratamento de Região Frontal <span className="text-[12px] text-[var(--color-subtle)] font-normal ml-2">· 14 dias</span>
                </div>
                <div className="text-[14px] text-[var(--color-muted)] mb-4">
                  Paciente 38 anos · Linhas moderadas · 1ª aplicação
                </div>
                <div className="flex items-start gap-3 bg-[#fdfaf6] border border-[#f0e8dd] p-4 rounded-[var(--radius-md)]">
                  <Info className="w-4 h-4 text-[var(--color-gold-dark)] flex-shrink-0" />
                  <span className="text-[12px] text-[#8a6a3a] leading-relaxed">
                    Fins educativos. Resultados individuais. Indicações, riscos e contraindicações discutidos em consulta.
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-[var(--color-text-main)] tracking-tight">O que dizem os pacientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-[var(--color-border-subtle)] relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[var(--color-gold-light)] text-[var(--color-gold-dark)] flex items-center justify-center text-[15px] font-semibold">MS</div>
              <div>
                <div className="text-[16px] font-semibold text-[var(--color-text-main)]">Mariana S.</div>
                <div className="text-[13px] text-[var(--color-muted)]">Curitiba, PR</div>
              </div>
            </div>
            <div className="text-[var(--color-gold)] text-[16px] tracking-widest mb-4">★★★★★</div>
            <p className="text-[16px] text-[#555] font-light italic leading-relaxed">
              "Resultado incrível e absolutamente natural. Ninguém percebeu que fiz nada — só que eu estava mais descansada e bonita."
            </p>
          </div>
          {/* Pode adicionar mais depoimentos aqui depois */}
        </div>

      </div>
    </section>
  );
}
