"use client";

import { motion } from "framer-motion";

const depos = [
  { initials: "AS", name: "Ana S.", city: "São José dos Pinhais", text: '"Resultado incrível com o Botox! Natural, sem parecer que fiz nada. A equipe é super atenciosa e profissional. Indico demais!"', tag: "Botox" },
  { initials: "JM", name: "Juliana M.", city: "São José dos Pinhais", text: '"Fiz o preenchimento labial e ficou perfeito! Volume natural, sem exagero. Me sinto muito mais confiante com meu sorriso."', tag: "Lábios" },
  { initials: "FT", name: "Fábio Tenório", city: "São José dos Pinhais", text: '"Fiz meu tratamento de alopecia areata na Infinity e o problema foi 100% solucionado!!! Continuo fazendo tratamento para alopecia androgenetica e já estou vendo resultados no preenchimento das falhas!!! Recomendo 100%!!!"', tag: "Tricologia" },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" style={{ background: "var(--color-bg)", padding: "96px 40px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16, background: "var(--color-gold-light)", border: ".5px solid rgba(124,92,69,.3)", borderRadius: 9999, padding: "5px 14px" }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--color-gold-dark)" }}>Depoimentos</span>
          </div>
          <h2 className="heading-display" style={{ fontSize: "clamp(28px, 3vw, 44px)", marginBottom: 8 }}>O que dizem nossos <em>pacientes</em></h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }} className="depo-grid">
          {depos.map((d, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ border: ".5px solid var(--color-border-subtle)", borderRadius: 20, padding: 24, background: "var(--color-surface)", transition: "transform .25s, box-shadow .25s, border-color .2s" }}
            >
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

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 32, paddingTop: 28, borderTop: ".5px solid var(--color-border-subtle)", flexWrap: "wrap" as const }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-subtle)" }}>Google</span>
          <span className="font-display" style={{ fontSize: 26, fontWeight: 400, color: "var(--color-text-main)", letterSpacing: "-0.03em" }}>5.0</span>
          <span style={{ color: "var(--color-gold)", fontSize: 14, letterSpacing: 2 }}>★★★★★</span>
          <span style={{ fontSize: 13, color: "var(--color-muted)" }}>avaliações verificadas no Google</span>
          <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--color-subtle)", fontStyle: "italic" }}>Publicadas pelos próprios pacientes</span>
        </motion.div>
      </div>
      <style>{`@media (max-width: 960px) { .depo-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
