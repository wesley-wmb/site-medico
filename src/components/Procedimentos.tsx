"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Smile, Sparkles, TrendingDown, Leaf, Star } from "lucide-react";
import Link from "next/link";

const procedimentos = [
  { icon: Zap, nome: "Endolaser", badge: "tecnologia", desc: "Tratamento corporal e facial com laser de alta precisão. Resultados visíveis desde as primeiras sessões." },
  { icon: Smile, nome: "Lábios", desc: "Preenchimento labial com ácido hialurônico para volume natural, contorno definido e hidratação profunda." },
  { icon: Sparkles, nome: "Botox / Toxina Botulínica", badge: "+ buscado", desc: "Suavização de rugas e expressões com resultado natural. Manutenção a cada 4–6 meses." },
  { icon: TrendingDown, nome: "Emagrecimento", desc: "Protocolos modernos e personalizados para emagrecimento saudável e duradouro com acompanhamento especializado." },
  { icon: Leaf, nome: "Tratamento Capilar", desc: "Tricologia avançada para queda de cabelo, calvície e saúde do couro cabeludo com protocolos clínicos." },
  { icon: Star, nome: "Harmonização Corporal", desc: "Modelagem e definição corporal com procedimentos minimamente invasivos e tecnologia de última geração." },
];

export default function Procedimentos() {
  return (
    <section id="procedimentos" style={{ background: "var(--color-bg)", padding: "96px 40px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "flex-end", gap: 32, marginBottom: 48 }} className="section-hdr"
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16, background: "var(--color-gold-light)", border: ".5px solid rgba(124,92,69,.3)", borderRadius: 9999, padding: "5px 14px" }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--color-gold-dark)" }}>Procedimentos</span>
            </div>
            <h2 className="heading-display" style={{ fontSize: "clamp(32px, 4vw, 52px)", marginBottom: 8 }}>Tratamentos para<br /><em>cada objetivo</em></h2>
            <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6, marginTop: 8 }}>Cada protocolo é personalizado após avaliação clínica detalhada.</p>
          </div>
          <Link href="#agendar" className="hdr-btn" style={{ flexShrink: 0, display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--color-muted)", padding: "13px 22px", borderRadius: 9999, border: ".5px solid var(--color-border-md)", fontSize: 14, textDecoration: "none", transition: "border-color .2s, color .2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; e.currentTarget.style.color = "var(--color-gold-dark)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border-md)"; e.currentTarget.style.color = "var(--color-muted)"; }}
          >Agendar avaliação</Link>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }} className="proc-grid">
          {procedimentos.map((proc, i) => {
            const Icon = proc.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,.1)", borderColor: "rgba(124,92,69,.2)" }}
              >
                <Link href="#agendar" className="proc-card-link" style={{ display: "block", height: "100%", padding: 24, background: "var(--color-surface)", border: ".5px solid var(--color-border-subtle)", borderRadius: 20, textDecoration: "none", color: "inherit", transition: "transform .25s, box-shadow .25s, border-color .2s" }}>
                  <div className="proc-icon" style={{ width: 40, height: 40, borderRadius: 14, background: "var(--color-gold-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <Icon style={{ width: 20, height: 20, color: "var(--color-gold)" }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-main)" }}>{proc.nome}</span>
                    {proc.badge && <span style={{ fontSize: 9, background: "var(--color-gold-light)", color: "var(--color-gold-dark)", padding: "2px 8px", borderRadius: 9999, fontWeight: 500, border: ".5px solid rgba(124,92,69,.25)" }}>{proc.badge}</span>}
                  </div>
                  <p style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 16 }}>{proc.desc}</p>
                  <div className="proc-link" style={{ fontSize: 12, color: "var(--color-gold)", fontWeight: 500, display: "flex", alignItems: "center", gap: 4, transition: "gap .2s" }}>
                    Saiba mais <ArrowRight style={{ width: 12, height: 12 }} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .section-hdr { grid-template-columns: 1fr !important; } .hdr-btn { display: none !important; } .proc-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px) { .proc-grid { grid-template-columns: 1fr !important; } }
        .proc-card-link:hover .proc-link { gap: 8px; }
        .proc-card-link:hover .proc-icon { background: rgba(124,92,69,.18); }
      `}</style>
    </section>
  );
}
