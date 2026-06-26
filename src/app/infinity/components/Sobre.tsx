"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Heart, Users } from "lucide-react";

const creds = [
  { icon: Award, label: "Estética Avançada", sub: "Harmonização e rejuvenescimento" },
  { icon: GraduationCap, label: "Tricologia Clínica", sub: "Especialidade em saúde capilar" },
  { icon: Heart, label: "Emagrecimento", sub: "Protocolos personalizados" },
  { icon: Users, label: "Atendimento humanizado", sub: "Foco no resultado do paciente" },
];

export default function Sobre() {
  return (
    <section id="sobre" style={{ background: "var(--color-surface)", padding: "96px 40px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }} className="sobre-grid">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: 28, background: "linear-gradient(160deg, #e8e0d8 0%, #d5c8bc 100%)", position: "relative", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,.08)" }}>
            <img src="/infinity/doctor_portrait.jpg" alt="Dra. Marlena Benna" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 30%, rgba(124,92,69,.08) 0%, transparent 60%)", pointerEvents: "none", zIndex: 1 }} />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16, background: "var(--color-gold-light)", border: ".5px solid rgba(124,92,69,.3)", borderRadius: 9999, padding: "5px 14px" }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--color-gold-dark)" }}>Sobre a Clínica</span>
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, color: "var(--color-text-main)", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 4 }}>
            Infinity Estética e Tricologia Avançada
          </h2>
          <div style={{ fontSize: 13, color: "var(--color-gold)", fontWeight: 500, marginBottom: 24, letterSpacing: "0.01em" }}>São José dos Pinhais, PR</div>
          <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.8, marginBottom: 28 }}>
            Na Infinity, acreditamos que sua melhor versão já existe — e nosso papel é revelá-la. Com tecnologia avançada, protocolos personalizados e atendimento humanizado, oferecemos tratamentos em Harmonização Facial e Corporal, Emagrecimento, Rejuvenescimento e Tricologia Clínica.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }} className="cred-grid">
            {creds.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 14, background: "var(--color-bg)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon style={{ width: 16, height: 16, color: "var(--color-gold)" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-main)" }}>{c.label}</div>
                    <div style={{ fontSize: 11, color: "var(--color-subtle)" }}>{c.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <blockquote className="font-display" style={{ marginTop: 8, padding: "20px 24px", borderLeft: "2px solid var(--color-gold)", background: "var(--color-bg)", fontSize: 17, fontStyle: "italic", fontWeight: 300, color: "var(--color-text-2)", lineHeight: 1.65, letterSpacing: "-0.01em", borderRadius: "0 14px 14px 0" }}>
            "Nossa abordagem une ciência e estética para entregar resultados reais, seguros e naturais — sempre respeitando a individualidade de cada paciente."
          </blockquote>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 960px) { .sobre-grid { grid-template-columns: 1fr !important; gap: 40px !important; } .cred-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
