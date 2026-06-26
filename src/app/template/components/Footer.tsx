"use client";

import Link from "next/link";

const WA = "5541991078805";
const procs = ["Botox / Toxina Botulínica", "Preenchimento Labial", "Laser Dermatológico", "Rejuvenescimento Facial", "Bioestimuladores", "Dermatologia Clínica"];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark-main)", paddingTop: 80, borderTop: ".5px solid rgba(255,255,255,.04)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr", gap: 64, paddingBottom: 64 }} className="footer-inner">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <img src="/template/logo.svg" alt="Logo" style={{ width: 32, height: 32, objectFit: "contain" }} />
            <div className="font-display" style={{ fontSize: 17, fontWeight: 400, color: "#fff", letterSpacing: "-0.01em" }}>Dra. Ana Souza</div>
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.28)", lineHeight: 1.7, marginBottom: 12, paddingRight: 16 }}>
            Dermatologia Estética e Clínica em Curitiba, PR. Tratamentos personalizados com tecnologia de ponta.
          </p>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,.15)", letterSpacing: "0.02em" }}>CRM-PR 00000 · RQE 00000 · Curitiba, PR</div>
        </div>

        <div>
          <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,.22)", textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 16 }}>Procedimentos</div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
            {procs.map((p) => (
              <Link key={p} href="#agendar" style={{ fontSize: 13, color: "rgba(255,255,255,.32)", textDecoration: "none", transition: "color .2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.65)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.32)")}>{p}</Link>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,.22)", textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 16 }}>Contato</div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
            <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "rgba(255,255,255,.32)", textDecoration: "none", transition: "color .2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.65)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.32)")}>WhatsApp: (41) 9 9999-9999</a>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,.32)" }}>Curitiba, PR</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,.32)" }}>Seg–Sex 8h–18h · Sáb 8h–12h</span>
          </div>
        </div>
      </div>

      <div style={{ borderTop: ".5px solid rgba(255,255,255,.06)", padding: "16px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: 8 }}>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,.18)" }}>© 2025 Dra. Ana Souza · Todos os direitos reservados</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,.18)" }}>LGPD · CFM 2.336/2023</div>
        </div>
      </div>
      <style>{`@media (max-width: 960px) { .footer-inner { grid-template-columns: 1fr !important; gap: 40px !important; padding: 0 20px 48px !important; } }`}</style>
    </footer>
  );
}
