"use client";

import Link from "next/link";

const WA = "5541991078805";
const procs = ["Botox / Toxina Botulínica", "Preenchimento Labial", "Endolaser", "Emagrecimento", "Tratamento Capilar", "Harmonização Corporal"];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark-main)", paddingTop: 80, borderTop: ".5px solid rgba(255,255,255,.04)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr", gap: 64, paddingBottom: 64 }} className="footer-inner">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <img src="/infinity/logo.svg" alt="Logo Infinity" style={{ width: 32, height: 32, objectFit: "contain" }} />
            <div className="font-display" style={{ fontSize: 17, fontWeight: 400, color: "#fff", letterSpacing: "-0.01em" }}>Infinity Estética</div>
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.28)", lineHeight: 1.7, marginBottom: 12, paddingRight: 16 }}>
            Harmonização Facial e Corporal, Emagrecimento, Rejuvenescimento e Tricologia Avançada em São José dos Pinhais, PR.
          </p>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,.15)", letterSpacing: "0.02em" }}>Infinity Estética e Tricologia Avançada · São José dos Pinhais, PR</div>
          <a href="https://www.instagram.com/infinity.esteticaavancada/" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16, fontSize: 12, color: "rgba(255,255,255,.3)", textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.6)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.3)")}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14 }}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            @infinity.esteticaavancada
          </a>
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
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.32)")}>WhatsApp: (41) 9 9107-8805</a>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,.32)" }}>São José dos Pinhais, PR</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,.32)" }}>Seg–Sex 8h–18h · Sáb 8h–12h</span>
          </div>
        </div>
      </div>

      <div style={{ borderTop: ".5px solid rgba(255,255,255,.06)", padding: "16px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: 8 }}>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,.18)" }}>© 2025 Infinity Estética e Tricologia Avançada · Todos os direitos reservados</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,.18)" }}>LGPD · CFM 2.336/2023</div>
        </div>
      </div>
      <style>{`@media (max-width: 960px) { .footer-inner { grid-template-columns: 1fr !important; gap: 40px !important; padding: 0 20px 48px !important; } }`}</style>
    </footer>
  );
}
