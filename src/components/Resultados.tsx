"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

/* ── Before/After Slider ── */
function ImageSlider() {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [hinted, setHinted] = useState(false);
  const [containerW, setContainerW] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    setContainerW(ref.current.offsetWidth);
    const ro = new ResizeObserver(() => {
      if (ref.current) setContainerW(ref.current.offsetWidth);
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const move = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(((clientX - rect.left) / rect.width) * 100, 100));
    setPos(pct);
    setHinted(true);
  };

  useEffect(() => {
    const up = () => setDragging(false);
    const mv = (e: MouseEvent) => { if (dragging) move(e.clientX); };
    window.addEventListener("mouseup", up);
    window.addEventListener("mousemove", mv);
    return () => { window.removeEventListener("mouseup", up); window.removeEventListener("mousemove", mv); };
  }, [dragging]);

  const imgStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: containerW > 0 ? containerW : "100%",
    height: "100%",
    objectFit: "cover",
    pointerEvents: "none",
  };

  return (
    <div
      ref={ref}
      onMouseDown={(e) => { setDragging(true); move(e.clientX); }}
      onTouchMove={(e) => move(e.touches[0].clientX)}
      style={{ position: "relative", height: 220, overflow: "hidden", cursor: "ew-resize", userSelect: "none", WebkitUserSelect: "none" }}
    >
      {/* Depois (full width underneath) */}
      <img src="/before_after_face.png" alt="Depois" style={{ ...imgStyle, filter: "none" }} />
      <span style={{ position: "absolute", bottom: 10, right: 12, fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#fff", background: "rgba(0,0,0,.4)", padding: "2px 8px", borderRadius: 9999, zIndex: 3 }}>Depois</span>

      {/* Antes (clipped left portion, full-width image) */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", width: `${pos}%`, zIndex: 2 }}>
        <img src="/before_after_face.png" alt="Antes" style={{ ...imgStyle, filter: "grayscale(70%) brightness(0.9)" }} />
        <span style={{ position: "absolute", bottom: 10, left: 12, fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#fff", background: "rgba(0,0,0,.4)", padding: "2px 8px", borderRadius: 9999 }}>Antes</span>
      </div>

      {/* Handle */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `calc(${pos}% - 1px)`,
          width: 2,
          background: "rgba(255,255,255,.95)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#fff", boxShadow: "0 4px 16px rgba(0,0,0,.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
            <path d="M8 12H3m0 0l3-3m-3 3l3 3M16 12h5m0 0l-3-3m3 3l-3 3" />
          </svg>
        </div>
      </div>

      {/* Hint */}
      {!hinted && (
        <div
          style={{
            position: "absolute",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(255,255,255,.92)",
            border: ".5px solid rgba(18,16,8,.07)",
            borderRadius: 9999,
            padding: "4px 12px",
            fontSize: 9,
            color: "var(--color-muted)",
            whiteSpace: "nowrap" as const,
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          ← arraste para comparar →
        </div>
      )}
    </div>
  );
}

/* ── Testimonial card ── */
const depos = [
  { initials: "MS", name: "Mariana S.", city: "Curitiba, PR", text: '"Resultado incrível e absolutamente natural. Ninguém percebeu que fiz nada — só que eu estava mais descansada e bonita."', tag: "Toxina botulínica" },
  { initials: "CR", name: "Camila R.", city: "São José dos Pinhais", text: '"Depois de anos sofrendo com manchas, finalmente encontrei o protocolo certo. A Dra. Ana explicou cada etapa com muita clareza."', tag: "Manchas / laser" },
  { initials: "FO", name: "Fernanda O.", city: "Curitiba, PR", text: '"O bioestimulador ficou muito natural. Sinto a pele mais firme e jovem sem parecer que fiz procedimento. Recomendo demais!"', tag: "Bioestimuladores" },
];

const categorias = ["Toxina botulínica", "Bioestimuladores", "Manchas / laser"];

const casesMeta = [
  { proc: "Tratamento de Região Frontal", time: "14 dias", patient: "Paciente 38 anos · Linhas moderadas · 1ª aplicação" },
  { proc: "Bioestimulador de Colágeno", time: "30 dias", patient: "Paciente 45 anos · Flacidez moderada · 1ª sessão" },
  { proc: "Laser para Manchas", time: "21 dias", patient: "Paciente 42 anos · Melasma · Protocolo combinado" },
];

export default function Resultados() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="resultados" style={{ background: "var(--color-surface)", padding: "96px 40px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "flex-end", gap: 32, marginBottom: 48 }}
          className="proof-hdr"
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16, background: "var(--color-gold-light)", border: ".5px solid rgba(184,150,62,.3)", borderRadius: 9999, padding: "5px 14px" }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--color-gold-dark)" }}>Resultados reais</span>
            </div>
            <h2
              className="heading-display"
              style={{ fontSize: "clamp(32px, 3.8vw, 52px)", marginBottom: 8 }}
            >
              Antes e depois,<br /><em>com evidência</em>
            </h2>
            <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6, maxWidth: 460 }}>
              Casos reais, documentados clinicamente, com fins exclusivamente educativos.
            </p>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "var(--color-gold-light)",
              border: ".5px solid rgba(184,150,62,.3)",
              borderRadius: 9999,
              padding: "6px 14px",
              whiteSpace: "nowrap" as const,
              flexShrink: 0,
            }}
            className="cfm-pill"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 12, height: 12, color: "var(--color-gold)" }}>
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span style={{ fontSize: 10, fontWeight: 500, color: "var(--color-gold-dark)", letterSpacing: "0.03em" }}>Conforme CFM 2.336/2023</span>
          </div>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: 20 }}>
          {categorias.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              style={{
                padding: "8px 18px",
                borderRadius: 9999,
                border: activeTab === i ? ".5px solid var(--color-dark-main)" : ".5px solid var(--color-border-md)",
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
                background: activeTab === i ? "var(--color-dark-main)" : "transparent",
                color: activeTab === i ? "#fff" : "var(--color-muted)",
                transition: "all .2s",
                fontFamily: "inherit",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cases grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 64 }} className="cases-grid">
          {casesMeta.map((c, i) => (
            <motion.div
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{
                border: ".5px solid var(--color-border-subtle)",
                borderRadius: 20,
                overflow: "hidden",
                background: "var(--color-surface)",
                transition: "transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s",
              }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,.12)" }}
            >
              <ImageSlider />
              <div style={{ padding: "14px 16px 16px" }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: "var(--color-text-main)", marginBottom: 3 }}>
                  {c.proc} <span style={{ fontSize: 11, color: "var(--color-subtle)", fontWeight: 400 }}>· {c.time}</span>
                </div>
                <div style={{ fontSize: 11, color: "var(--color-subtle)", lineHeight: 1.5, marginBottom: 8 }}>{c.patient}</div>
                <div
                  style={{
                    fontSize: 10,
                    color: "var(--color-gold-dark)",
                    background: "var(--color-gold-light)",
                    borderRadius: 8,
                    padding: "6px 10px",
                    lineHeight: 1.55,
                    display: "flex",
                    gap: 5,
                    alignItems: "flex-start",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 11, height: 11, flexShrink: 0, marginTop: 1 }}>
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                  </svg>
                  Fins educativos. Resultados individuais. Riscos e contraindicações em consulta.
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, margin: "56px 0 32px", flexWrap: "wrap" as const }}>
          <div style={{ flex: 1, height: ".5px", background: "var(--color-border-subtle)" }} />
          <div style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-2)", whiteSpace: "nowrap" as const }}>O que dizem os pacientes</div>
          <div style={{ flex: 1, height: ".5px", background: "var(--color-border-subtle)" }} />
        </div>

        {/* Testimonials */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }} className="depo-grid">
          {depos.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                border: ".5px solid var(--color-border-subtle)",
                borderRadius: 20,
                padding: 24,
                background: "var(--color-surface)",
                transition: "transform .25s, box-shadow .25s, border-color .2s",
              }}
              whileHover={{ y: -3, boxShadow: "0 4px 16px rgba(0,0,0,.08)", borderColor: "rgba(184,150,62,.2)" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--color-gold-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 500, color: "var(--color-gold-dark)", flexShrink: 0 }}>
                  {d.initials}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-main)" }}>{d.name}</div>
                  <div style={{ fontSize: 11, color: "var(--color-subtle)" }}>{d.city}</div>
                </div>
              </div>
              <div style={{ color: "var(--color-gold)", fontSize: 12, letterSpacing: 2, marginBottom: 8 }}>★★★★★</div>
              <p style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.7, fontStyle: "italic", marginBottom: 12 }}>{d.text}</p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 11,
                  color: "var(--color-gold-dark)",
                  background: "var(--color-gold-light)",
                  padding: "3px 10px",
                  borderRadius: 9999,
                  fontWeight: 500,
                }}
              >
                {d.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Google strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 32,
            paddingTop: 28,
            borderTop: ".5px solid var(--color-border-subtle)",
            flexWrap: "wrap" as const,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-subtle)" }}>Google</span>
          <span className="font-display" style={{ fontSize: 26, fontWeight: 400, color: "var(--color-text-main)", letterSpacing: "-0.03em" }}>4.9</span>
          <span style={{ color: "var(--color-gold)", fontSize: 14, letterSpacing: 2 }}>★★★★★</span>
          <span style={{ fontSize: 13, color: "var(--color-muted)" }}>182 avaliações verificadas</span>
          <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--color-subtle)", fontStyle: "italic" }}>Publicadas pelos próprios pacientes</span>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .proof-hdr { grid-template-columns: 1fr !important; }
          .cfm-pill { display: none !important; }
          .cases-grid { grid-template-columns: 1fr !important; }
          .depo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
