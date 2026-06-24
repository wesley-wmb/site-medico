"use client";

import { motion } from "framer-motion";
import { ArrowRight, Beaker, Star, Sparkles, Droplets, Droplet, Search } from "lucide-react";
import Link from "next/link";

const procedimentos = [
  { icon: Sparkles, nome: "Toxina botulínica", badge: "+ buscado", desc: "Suavização de rugas com resultado natural e duradouro. Manutenção a cada 4–6 meses." },
  { icon: Droplet, nome: "Bioestimuladores de colágeno", desc: "Firmeza e rejuvenescimento progressivo com estímulo natural de colágeno." },
  { icon: Search, nome: "Tratamento de manchas", desc: "Laser e protocolos clínicos para melasma, lentigos solares e hiperpigmentação." },
  { icon: Droplets, nome: "Preenchimento facial", desc: "Ácido hialurônico para volume, harmonia facial e hidratação profunda." },
  { icon: Beaker, nome: "Laser fracionado", desc: "Renovação celular para textura, poros dilatados e cicatrizes de acne." },
  { icon: Star, nome: "Dermatologia clínica", desc: "Diagnóstico e tratamento de acne, psoríase, dermatite e câncer de pele." },
];

export default function Procedimentos() {
  return (
    <section id="procedimentos" style={{ background: "var(--color-bg)", padding: "96px 40px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "flex-end", gap: 32, marginBottom: 48 }}
          className="section-hdr"
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16, background: "var(--color-gold-light)", border: ".5px solid rgba(184,150,62,.3)", borderRadius: 9999, padding: "5px 14px" }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--color-gold-dark)" }}>Procedimentos</span>
            </div>
            <h2
              className="heading-display"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", marginBottom: 8 }}
            >
              Tratamentos para<br /><em>cada objetivo</em>
            </h2>
            <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6, marginTop: 8 }}>
              Cada protocolo é personalizado após avaliação clínica detalhada.
            </p>
          </div>
          <Link
            href="#agendar"
            style={{
              flexShrink: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              color: "var(--color-muted)",
              padding: "13px 22px",
              borderRadius: 9999,
              border: ".5px solid var(--color-border-md)",
              fontSize: 14,
              textDecoration: "none",
              transition: "border-color .2s, color .2s",
            }}
            className="hdr-btn"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-gold)";
              e.currentTarget.style.color = "var(--color-gold-dark)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border-md)";
              e.currentTarget.style.color = "var(--color-muted)";
            }}
          >
            Ver todos
          </Link>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }} className="proc-grid">
          {procedimentos.map((proc, i) => {
            const Icon = proc.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,.12)", borderColor: "rgba(184,150,62,.2)" }}
              >
                <Link
                  href="#agendar"
                  style={{
                    display: "block",
                    height: "100%",
                    padding: 24,
                    background: "var(--color-surface)",
                    border: ".5px solid var(--color-border-subtle)",
                    borderRadius: 20,
                    textDecoration: "none",
                    color: "inherit",
                    transition: "transform .25s, box-shadow .25s, border-color .2s",
                  }}
                  className="proc-card-link"
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 14,
                      background: "var(--color-gold-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                    className="proc-icon"
                  >
                    <Icon style={{ width: 20, height: 20, color: "var(--color-gold)" }} />
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-main)" }}>{proc.nome}</span>
                    {proc.badge && (
                      <span
                        style={{
                          fontSize: 9,
                          background: "var(--color-gold-light)",
                          color: "var(--color-gold-dark)",
                          padding: "2px 8px",
                          borderRadius: 9999,
                          fontWeight: 500,
                          border: ".5px solid rgba(184,150,62,.25)",
                        }}
                      >
                        {proc.badge}
                      </span>
                    )}
                  </div>

                  <p style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 16 }}>{proc.desc}</p>

                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--color-gold)",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      transition: "gap .2s",
                    }}
                    className="proc-link"
                  >
                    Saiba mais <ArrowRight style={{ width: 12, height: 12 }} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .section-hdr { grid-template-columns: 1fr !important; }
          .hdr-btn { display: none !important; }
          .proc-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .proc-grid { grid-template-columns: 1fr !important; }
        }
        .proc-card-link:hover .proc-link { gap: 8px; }
        .proc-card-link:hover .proc-icon { background: rgba(184,150,62,.22); }
      `}</style>
    </section>
  );
}
