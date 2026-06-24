"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const details = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua Exemplo, 000 · Batel\nCuritiba, PR, 80000-000",
  },
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: "(41) 9 0000-0000",
  },
  {
    icon: Clock,
    label: "Horário de Atendimento",
    value: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h",
  },
];

export default function Localizacao() {
  return (
    <section id="localizacao" style={{ background: "var(--color-bg2)", padding: "96px 40px" }}>
      <div
        style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: 64, alignItems: "center" }}
        className="map-grid"
      >
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16, background: "var(--color-gold-light)", border: ".5px solid rgba(184,150,62,.3)", borderRadius: 9999, padding: "5px 14px" }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--color-gold-dark)" }}>Localização</span>
          </div>

          <h2
            className="font-display"
            style={{ fontSize: "clamp(26px, 2.8vw, 38px)", fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.15, color: "var(--color-text-main)", marginBottom: 32 }}
          >
            Venha nos <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>conhecer</em><br />no coração do Batel
          </h2>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
            {details.map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 14,
                      background: "var(--color-gold-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <Icon style={{ width: 16, height: 16, color: "var(--color-gold)" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: "var(--color-subtle)", marginBottom: 3, textTransform: "uppercase" as const, letterSpacing: "0.07em", fontWeight: 500 }}>
                      {d.label}
                    </div>
                    <div style={{ fontSize: 14, color: "var(--color-text-main)", lineHeight: 1.55, whiteSpace: "pre-line" as const }}>
                      {d.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            borderRadius: 28,
            overflow: "hidden",
            border: ".5px solid var(--color-border-md)",
            boxShadow: "0 12px 40px rgba(0,0,0,.12)",
            aspectRatio: "16/10",
            background: "var(--color-bg)",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115254.91266205842!2d-49.3621415056795!3d-25.495055416041695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce35351cbcfe1%3A0xcb13eef7371c26b5!2sBatel%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1718000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .map-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
