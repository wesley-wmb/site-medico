"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function NumberTicker({ value, suffix = "", decimals = 0, format = false }: { value: number; suffix?: string; decimals?: number; format?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const [display, setDisplay] = useState(decimals > 0 ? "0.0" : "0");

  useEffect(() => { if (isInView) motionValue.set(value); }, [isInView, motionValue, value]);
  useEffect(() => {
    return springValue.on("change", (v) => {
      if (decimals > 0) setDisplay(v.toFixed(decimals));
      else if (format) setDisplay(Intl.NumberFormat("pt-BR").format(Math.floor(v)));
      else setDisplay(String(Math.floor(v)));
    });
  }, [springValue, decimals, format]);

  return <span ref={ref}>{display}{suffix && <span style={{ fontSize: "0.5em", color: "var(--color-gold)", verticalAlign: "super", fontFamily: "var(--font-sans)", fontWeight: 500 }}>{suffix}</span>}</span>;
}

const metrics = [
  { icon: <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16, color: "var(--color-gold)" }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>, value: 4.9, decimals: 1, suffix: "★", label: "Avaliação Google · clientes satisfeitos", featured: true },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 16, height: 16, color: "var(--color-gold)" }}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>, value: 2000, format: true, suffix: "+", label: "Pacientes atendidos" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 16, height: 16, color: "var(--color-gold)" }}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>, value: 12, suffix: "anos", label: "De experiência clínica" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 16, height: 16, color: "var(--color-gold)" }}><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, static: "SBD", label: "Membro da Sociedade Brasileira" },
];

export default function Metricas() {
  return (
    <section style={{ background: "var(--color-dark-2)", padding: "64px 40px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 12 }} className="metrics-grid">
        {metrics.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.55, delay: i * 0.08 }}
            style={{ background: m.featured ? "linear-gradient(135deg, rgba(184,150,62,.15) 0%, rgba(184,150,62,.05) 100%)" : "var(--color-dark-3)", border: m.featured ? ".5px solid rgba(184,150,62,.3)" : ".5px solid rgba(255,255,255,.07)", borderRadius: 20, padding: "28px 24px", transition: "border-color .2s, transform .25s" }}
            whileHover={{ y: -2 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(184,150,62,.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>{m.icon}</div>
            <div className="font-display" style={{ fontSize: "clamp(32px, 3.5vw, 52px)", fontWeight: 400, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 8 }}>
              {m.static ? <span style={{ fontSize: "clamp(22px, 2.5vw, 34px)" }}>{m.static}</span> : <NumberTicker value={m.value!} suffix={m.suffix} decimals={m.decimals ?? 0} format={m.format} />}
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.35)" }}>{m.label}</div>
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (max-width: 960px) { .metrics-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px) { .metrics-grid { grid-template-columns: 1fr 1fr !important; padding: 0 !important; } }
      `}</style>
    </section>
  );
}
