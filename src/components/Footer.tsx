"use client";

import Link from "next/link";

const procs = ["Toxina botulínica", "Bioestimuladores", "Manchas / laser", "Preenchimento facial", "Dermatologia clínica"];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark-main)", paddingTop: 80, borderTop: ".5px solid rgba(255,255,255,.04)" }}>
      <div
        style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr", gap: 64, paddingBottom: 64 }}
        className="footer-inner"
      >
        {/* Brand */}
        <div>
          <div
            className="font-display"
            style={{ fontSize: 18, fontWeight: 400, color: "#fff", letterSpacing: "-0.01em", marginBottom: 12 }}
          >
            Dra. Ana Souza
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.28)", lineHeight: 1.7, marginBottom: 12, paddingRight: 16 }}>
            Dermatologista especializada em estética facial e dermatologia clínica. Atendimento presencial em Curitiba e por telemedicina.
          </p>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,.15)", letterSpacing: "0.02em" }}>
            CRM-PR 00000 · RQE 00000 · Membro Titular da Sociedade Brasileira de Dermatologia
          </div>
        </div>

        {/* Procedimentos */}
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,.22)", textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 16 }}>
            Procedimentos
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
            {procs.map((p) => (
              <Link
                key={p}
                href="#agendar"
                style={{ fontSize: 13, color: "rgba(255,255,255,.32)", textDecoration: "none", transition: "color .2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.65)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.32)")}
              >
                {p}
              </Link>
            ))}
          </div>
        </div>

        {/* Contato */}
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,.22)", textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 16 }}>
            Contato
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
            <a href="https://wa.me/5541900000000" style={{ fontSize: 13, color: "rgba(255,255,255,.32)", textDecoration: "none", transition: "color .2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.65)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.32)")}
            >
              WhatsApp: (41) 9 0000-0000
            </a>
            <a href="mailto:contato@draanasouza.com.br" style={{ fontSize: 13, color: "rgba(255,255,255,.32)", textDecoration: "none", transition: "color .2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.65)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.32)")}
            >
              contato@draanasouza.com.br
            </a>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,.32)", marginTop: 8, display: "block" }}>
              Rua Exemplo, 000 · Batel, Curitiba
            </span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,.32)" }}>
              Seg–Sex 8h–18h · Sáb 8h–12h
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 4 }}>
              <Link href="#" style={{ fontSize: 12, color: "rgba(255,255,255,.22)", textDecoration: "none", transition: "color .2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.22)")}
              >
                Política de Privacidade
              </Link>
              <span style={{ color: "rgba(255,255,255,.12)" }}>·</span>
              <Link href="#" style={{ fontSize: 12, color: "rgba(255,255,255,.22)", textDecoration: "none", transition: "color .2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.22)")}
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: ".5px solid rgba(255,255,255,.06)", padding: "16px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: 8 }}>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,.18)" }}>© 2026 Dra. Ana Souza · Todos os direitos reservados</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,.18)" }}>LGPD · CFM 2.336/2023</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-inner { grid-template-columns: 1fr !important; gap: 40px !important; padding: 0 20px 48px !important; }
        }
      `}</style>
    </footer>
  );
}
