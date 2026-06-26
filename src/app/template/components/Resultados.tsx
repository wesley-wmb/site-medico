"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

function ImageSlider() {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [hinted, setHinted] = useState(false);
  const [containerW, setContainerW] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    setContainerW(ref.current.offsetWidth);
    const ro = new ResizeObserver(() => { if (ref.current) setContainerW(ref.current.offsetWidth); });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const move = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(((clientX - rect.left) / rect.width) * 100, 100));
    setPos(pct); setHinted(true);
  };

  useEffect(() => {
    const up = () => setDragging(false);
    const mv = (e: MouseEvent) => { if (dragging) move(e.clientX); };
    window.addEventListener("mouseup", up); window.addEventListener("mousemove", mv);
    return () => { window.removeEventListener("mouseup", up); window.removeEventListener("mousemove", mv); };
  }, [dragging]);

  const imgStyle: React.CSSProperties = { position: "absolute", top: 0, left: 0, width: containerW > 0 ? containerW : "100%", height: "100%", objectFit: "cover", pointerEvents: "none" };

  return (
    <div ref={ref} onMouseDown={(e) => { setDragging(true); move(e.clientX); }} onTouchMove={(e) => move(e.touches[0].clientX)}
      style={{ position: "relative", height: 220, overflow: "hidden", cursor: "ew-resize", userSelect: "none", WebkitUserSelect: "none" }}>
      <img src="/template/before_after_face.png" alt="Depois" style={{ ...imgStyle, filter: "none" }} />
      <span style={{ position: "absolute", bottom: 10, right: 12, fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#fff", background: "rgba(0,0,0,.4)", padding: "2px 8px", borderRadius: 9999, zIndex: 3 }}>Depois</span>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", width: `${pos}%`, zIndex: 2 }}>
        <img src="/template/before_after_face.png" alt="Antes" style={{ ...imgStyle, filter: "grayscale(70%) brightness(0.9)" }} />
        <span style={{ position: "absolute", bottom: 10, left: 12, fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#fff", background: "rgba(0,0,0,.4)", padding: "2px 8px", borderRadius: 9999 }}>Antes</span>
      </div>
      <div style={{ position: "absolute", top: 0, bottom: 0, left: `calc(${pos}% - 1px)`, width: 2, background: "rgba(255,255,255,.95)", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#fff", boxShadow: "0 4px 16px rgba(0,0,0,.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2"><path d="M8 12H3m0 0l3-3m-3 3l3 3M16 12h5m0 0l-3-3m3 3l-3 3" /></svg>
        </div>
      </div>
      {!hinted && <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", background: "rgba(255,255,255,.92)", border: ".5px solid rgba(18,16,8,.07)", borderRadius: 9999, padding: "4px 12px", fontSize: 9, color: "var(--color-muted)", whiteSpace: "nowrap" as const, pointerEvents: "none", zIndex: 20 }}>← arraste para comparar →</div>}
    </div>
  );
}

const depos = [
  { initials: "AS", name: "Ana S.", city: "Curitiba, PR", text: '"Resultado incrível com o Botox! Natural, sem parecer que fiz nada. A equipe é super atenciosa e profissional. Indico demais!"', tag: "Botox" },
  { initials: "JM", name: "Juliana M.", city: "Curitiba, PR", text: '"Fiz o preenchimento labial e ficou perfeito! Volume natural, sem exagero. Me sinto muito mais confiante com meu sorriso."', tag: "Lábios" },
  { initials: "CR", name: "Carolina R.", city: "Curitiba, PR", text: '"O tratamento de rejuvenescimento foi transformador. Pele renovada, manchas sumidas. Recomendo de olhos fechados!"', tag: "Rejuvenescimento" },
];

const categorias = ["Botox", "Lábios", "Laser"];
const casesMeta = [
  { proc: "Harmonização Facial", time: "14 dias", patient: "Paciente 34 anos · Rugas moderadas · 1ª aplicação" },
  { proc: "Preenchimento Labial", time: "7 dias", patient: "Paciente 28 anos · Volume reduzido · 1ª sessão" },
  { proc: "Laser Facial", time: "30 dias", patient: "Paciente 40 anos · Manchas solares · Protocolo combinado" },
];

export default function Resultados() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="resultados" style={{ background: "var(--color-surface)", padding: "96px 40px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "flex-end", gap: 32, marginBottom: 48 }} className="proof-hdr">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16, background: "var(--color-gold-light)", border: ".5px solid rgba(184,150,62,.3)", borderRadius: 9999, padding: "5px 14px" }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--color-gold-dark)" }}>Resultados reais</span>
            </div>
            <h2 className="heading-display" style={{ fontSize: "clamp(32px, 3.8vw, 52px)", marginBottom: 8 }}>Antes e depois,<br /><em>com evidência</em></h2>
            <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6, maxWidth: 460 }}>Casos reais documentados com fins exclusivamente educativos e informativos.</p>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--color-gold-light)", border: ".5px solid rgba(184,150,62,.3)", borderRadius: 9999, padding: "6px 14px", whiteSpace: "nowrap" as const, flexShrink: 0 }} className="cfm-pill">
            <span style={{ fontSize: 10, fontWeight: 500, color: "var(--color-gold-dark)", letterSpacing: "0.03em" }}>Fins educativos · CFM 2.336/2023</span>
          </div>
        </motion.div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: 20 }}>
          {categorias.map((cat, i) => (
            <button key={i} onClick={() => setActiveTab(i)} style={{ padding: "8px 18px", borderRadius: 9999, border: activeTab === i ? ".5px solid var(--color-dark-main)" : ".5px solid var(--color-border-md)", fontSize: 12, fontWeight: 500, cursor: "pointer", background: activeTab === i ? "var(--color-dark-main)" : "transparent", color: activeTab === i ? "#fff" : "var(--color-muted)", transition: "all .2s", fontFamily: "inherit" }}>{cat}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 64 }} className="cases-grid">
          {casesMeta.map((c, i) => (
            <motion.div key={`${activeTab}-${i}`} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{ border: ".5px solid var(--color-border-subtle)", borderRadius: 20, overflow: "hidden", background: "var(--color-surface)" }} whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,.1)" }}>
              <ImageSlider />
              <div style={{ padding: "14px 16px 16px" }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: "var(--color-text-main)", marginBottom: 3 }}>{c.proc} <span style={{ fontSize: 11, color: "var(--color-subtle)", fontWeight: 400 }}>· {c.time}</span></div>
                <div style={{ fontSize: 11, color: "var(--color-subtle)", lineHeight: 1.5, marginBottom: 8 }}>{c.patient}</div>
                <div style={{ fontSize: 10, color: "var(--color-gold-dark)", background: "var(--color-gold-light)", borderRadius: 8, padding: "6px 10px", lineHeight: 1.55 }}>Fins educativos. Resultados individuais. Riscos e contraindicações em consulta.</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20, margin: "56px 0 32px", flexWrap: "wrap" as const }}>
          <div style={{ flex: 1, height: ".5px", background: "var(--color-border-subtle)" }} />
          <div style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-2)", whiteSpace: "nowrap" as const }}>O que dizem nossos pacientes</div>
          <div style={{ flex: 1, height: ".5px", background: "var(--color-border-subtle)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }} className="depo-grid">
          {depos.map((d, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ border: ".5px solid var(--color-border-subtle)", borderRadius: 20, padding: 24, background: "var(--color-surface)" }} whileHover={{ y: -3, boxShadow: "0 4px 16px rgba(0,0,0,.07)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--color-gold-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 500, color: "var(--color-gold-dark)", flexShrink: 0 }}>{d.initials}</div>
                <div><div style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-main)" }}>{d.name}</div><div style={{ fontSize: 11, color: "var(--color-subtle)" }}>{d.city}</div></div>
              </div>
              <div style={{ color: "var(--color-gold)", fontSize: 12, letterSpacing: 2, marginBottom: 8 }}>★★★★★</div>
              <p style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.7, fontStyle: "italic", marginBottom: 12 }}>{d.text}</p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, color: "var(--color-gold-dark)", background: "var(--color-gold-light)", padding: "3px 10px", borderRadius: 9999, fontWeight: 500 }}>{d.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .proof-hdr { grid-template-columns: 1fr !important; } .cfm-pill { display: none !important; } .cases-grid { grid-template-columns: 1fr !important; } .depo-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
