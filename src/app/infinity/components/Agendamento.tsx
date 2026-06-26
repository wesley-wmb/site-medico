"use client";

import { motion } from "framer-motion";
import { MessageCircle, Lock } from "lucide-react";
import React, { useState } from "react";

const WA = "5541991078805";

export default function Agendamento() {
  const [form, setForm] = useState({ nome: "", tel: "", proc: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.tel) { alert("Por favor, preencha seu nome e WhatsApp."); return; }
    const msg = encodeURIComponent(`Olá! Meu nome é ${form.nome} e gostaria de agendar uma avaliação${form.proc ? ` para ${form.proc}` : ""}. Meu WhatsApp é ${form.tel}.`);
    window.open(`https://wa.me/${WA}?text=${msg}`, "_blank");
  };

  const inputStyle = { width: "100%", background: "rgba(255,255,255,.06)", border: ".5px solid rgba(255,255,255,.12)", borderRadius: 14, padding: "12px 16px", fontSize: 14, color: "rgba(255,255,255,.85)", outline: "none", fontFamily: "inherit", transition: "border-color .2s" };

  return (
    <section id="agendar" style={{ background: "var(--color-dark-main)", padding: "96px 40px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -200, right: -200, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(124,92,69,.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start", position: "relative", zIndex: 1 }} className="cta-grid">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20, background: "rgba(124,92,69,.15)", border: ".5px solid rgba(124,92,69,.3)", borderRadius: 9999, padding: "5px 14px" }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--color-gold)" }}>Agendamento</span>
          </div>
          <h2 className="heading-display" style={{ fontSize: "clamp(30px, 3.5vw, 48px)", color: "#fff", marginBottom: 16 }}>
            Agende sua avaliação<br />e descubra sua<br /><em>melhor versão</em>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.42)", lineHeight: 1.7, marginBottom: 40 }}>Consulta personalizada. Sem compromisso. Resposta rápida pelo WhatsApp.</p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
            {["Atendimento rápido pelo WhatsApp", "Dados protegidos pela LGPD", "Avaliação personalizada e sem compromisso"].map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(124,92,69,.15)", border: ".5px solid rgba(124,92,69,.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: 10, height: 10, color: "var(--color-gold)" }}><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,.5)" }}>{c}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ background: "rgba(255,255,255,.05)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: ".5px solid rgba(255,255,255,.1)", borderRadius: 28, padding: 32 }}>
          <div style={{ fontSize: 16, fontWeight: 500, color: "#fff", marginBottom: 24 }}>Solicitar avaliação gratuita</div>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" as const, gap: 0 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }} className="form-row-grid">
              <div>
                <label style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,.38)", marginBottom: 6, letterSpacing: "0.04em" }}>Nome completo</label>
                <input type="text" required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} placeholder="Seu nome" style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(124,92,69,.5)")} onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,.12)")} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,.38)", marginBottom: 6, letterSpacing: "0.04em" }}>WhatsApp</label>
                <input type="tel" required inputMode="tel" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} placeholder="(41) 9 9107-8805" style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(124,92,69,.5)")} onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,.12)")} />
              </div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,.38)", marginBottom: 6, letterSpacing: "0.04em" }}>Procedimento de interesse</label>
              <select value={form.proc} onChange={(e) => setForm({ ...form, proc: e.target.value })} style={{ ...inputStyle, color: form.proc ? "rgba(255,255,255,.85)" : "rgba(255,255,255,.45)", cursor: "pointer" }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(124,92,69,.5)")} onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,.12)")}>
                <option value="" style={{ color: "#111" }}>Selecione o procedimento</option>
                {["Botox / Toxina Botulínica", "Preenchimento Labial", "Endolaser", "Emagrecimento", "Tratamento Capilar / Tricologia", "Harmonização Corporal", "Outro"].map(o => <option key={o} style={{ color: "#111" }}>{o}</option>)}
              </select>
            </div>
            <button type="submit" style={{ width: "100%", background: "linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%)", color: "#fff", borderRadius: 9999, padding: 15, fontSize: 14, fontWeight: 600, marginTop: 8, cursor: "pointer", border: "none", fontFamily: "inherit", letterSpacing: "0.02em", transition: "transform .2s, box-shadow .2s, opacity .2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(124,92,69,.35)"; e.currentTarget.style.opacity = ".95"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.opacity = "1"; }}>
              Quero agendar minha avaliação →
            </button>
          </form>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 12, fontSize: 12, color: "rgba(255,255,255,.28)" }}>
            ou <a href={`https://wa.me/${WA}?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação`} target="_blank" rel="noopener noreferrer" style={{ color: "#4ade80", fontWeight: 500, display: "flex", alignItems: "center", gap: 4, textDecoration: "none" }}><MessageCircle style={{ width: 14, height: 14 }} />fale direto pelo WhatsApp</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, marginTop: 10, fontSize: 10, color: "rgba(255,255,255,.18)" }}>
            <Lock style={{ width: 11, height: 11 }} /> Seus dados estão protegidos conforme a LGPD
          </div>
        </motion.div>
      </div>
      <style>{`@media (max-width: 960px) { .cta-grid { grid-template-columns: 1fr !important; gap: 48px !important; } .form-row-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
