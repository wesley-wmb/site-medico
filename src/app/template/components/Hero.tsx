"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" style={{ background: "radial-gradient(ellipse 70% 60% at 10% 65%, rgba(184,150,62,.1) 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 88% 18%, rgba(184,150,62,.07) 0%, transparent 55%), var(--color-bg)", padding: "0 40px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "88px 0 96px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} style={{ display: "flex", flexDirection: "column" }} className="hero-content-col">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="hero-badge"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", background: "var(--color-gold-light)", border: ".5px solid rgba(184,150,62,.3)", borderRadius: 9999, padding: "6px 14px", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--color-gold-dark)", marginBottom: 24, whiteSpace: "nowrap" as const, overflow: "hidden" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-gold)", display: "inline-block", flexShrink: 0, animation: "pulse 2s ease-in-out infinite" }} />
            Dermatologia Estética · Curitiba, PR
          </motion.div>

          <h1 className="heading-display" style={{ fontSize: "clamp(52px, 6vw, 86px)", marginBottom: 24 }}>
            Pele saudável,<br /><em>confiança</em><br />de volta.
          </h1>

          <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.75, maxWidth: 420, marginBottom: 36, fontWeight: 300 }}>
            Tratamentos personalizados com tecnologia de ponta para cuidar da sua pele. Dra. Ana Souza, especialista em rejuvenescimento facial e dermatologia clínica.
          </p>

          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" as const, marginBottom: 40 }}>
            <Link href="#agendar" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-dark-main)", color: "#fff", padding: "14px 26px", borderRadius: 9999, fontSize: 14, fontWeight: 500, textDecoration: "none", transition: "transform .2s, box-shadow .2s, opacity .2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(12,12,11,.2)"; e.currentTarget.style.opacity = ".92"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.opacity = "1"; }}>
              Agendar avaliação gratuita <ArrowRight style={{ width: 14, height: 14 }} />
            </Link>
            <Link href="#procedimentos" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--color-muted)", padding: "13px 22px", borderRadius: 9999, border: ".5px solid var(--color-border-md)", fontSize: 14, textDecoration: "none", transition: "border-color .2s, color .2s, transform .2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.color = "var(--color-gold-dark)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border-md)"; e.currentTarget.style.color = "var(--color-muted)"; e.currentTarget.style.transform = "none"; }}>
              Ver procedimentos
            </Link>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" as const }}>
            {["12 anos de experiência", "+2.000 pacientes", "Membro SBD"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "var(--color-muted)" }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-gold)", flexShrink: 0, display: "inline-block" }} />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} style={{ position: "relative", animation: "float 6s ease-in-out infinite" }} className="hero-img-col">
          <div style={{ width: "100%", aspectRatio: "4/5", borderRadius: 28, background: "linear-gradient(160deg, #e8e2d8 0%, #d5cab8 100%)", position: "relative", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,.1), 0 4px 16px rgba(0,0,0,.06)" }}>
            <img src="/template/doctor_portrait.png" alt="Dra. Ana Souza" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 40% 25%, rgba(184,150,62,.12) 0%, transparent 60%)", pointerEvents: "none" }} />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="hero-float-card"
            style={{ position: "absolute", bottom: 32, left: -32, background: "rgba(255,255,255,.82)", backdropFilter: "blur(20px) saturate(160%)", WebkitBackdropFilter: "blur(20px) saturate(160%)", border: ".5px solid rgba(255,255,255,.9)", borderRadius: 20, padding: "14px 18px", boxShadow: "0 12px 40px rgba(0,0,0,.12), 0 2px 8px rgba(0,0,0,.06)", minWidth: 200 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ color: "var(--color-gold)", fontSize: 12, letterSpacing: 2 }}>★★★★★</span>
              <span style={{ background: "#e8f5e9", color: "#2e7d32", fontSize: 9, fontWeight: 600, padding: "2px 8px", borderRadius: 9999, letterSpacing: "0.05em", textTransform: "uppercase" as const }}>Verificado</span>
            </div>
            <div className="font-display" style={{ fontSize: 30, fontWeight: 400, color: "var(--color-text-main)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 2 }}>4.9</div>
            <div style={{ fontSize: 11, color: "var(--color-subtle)" }}>182 avaliações no Google</div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) { .hero-grid { grid-template-columns: 1fr !important; padding: 48px 0 64px !important; gap: 40px !important; } .hero-img-col { order: -1; } .hero-float-card { left: 12px !important; bottom: 16px !important; min-width: 160px !important; } }
        @media (max-width: 480px) { .hero-badge { font-size: 9px !important; padding: 4px 10px !important; } }
      `}</style>
    </section>
  );
}
