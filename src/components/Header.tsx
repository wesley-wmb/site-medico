"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, X, Menu } from "lucide-react";

const navLinks = [
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#sobre" },
  { label: "Localização", href: "#localizacao" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="header-bar"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          height: 64,
          background: scrolled ? "rgba(249,246,241,.95)" : "rgba(249,246,241,.82)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: ".5px solid rgba(18,16,8,.13)",
          transition: "background .3s",
        }}
      >
        {/* Inner constrained row */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 40px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}>
            <img
              src="/logo.svg"
              alt="Logo"
              style={{ width: 34, height: 34, flexShrink: 0, display: "block" }}
            />
            <div>
              <div
                className="font-display"
                style={{ fontSize: 15, fontWeight: 400, color: "var(--color-text-main)", letterSpacing: "-0.01em", lineHeight: 1.2 }}
              >
                Dra. Ana Souza
              </div>
              <div style={{ fontSize: 10, color: "var(--color-subtle)", marginTop: 1 }}>
                Dermatologista · CRM-PR 00000 · RQE 00000
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="header-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{ fontSize: 13, color: "var(--color-muted)", textDecoration: "none", transition: "color .2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-main)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#agendar"
            className="header-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "var(--color-dark-main)",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: 9999,
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              flexShrink: 0,
              transition: "opacity .2s, transform .2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = ".85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
          >
            Agendar avaliação
            <ArrowRight style={{ width: 13, height: 13 }} />
          </Link>

          {/* Mobile toggle */}
          <button
            className="header-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "none" }}
          >
            {open
              ? <X style={{ width: 22, height: 22, color: "var(--color-text-main)" }} />
              : <Menu style={{ width: 22, height: 22, color: "var(--color-text-main)" }} />
            }
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div
          className="mobile-menu-overlay"
          style={{
            position: "fixed",
            inset: "64px 0 0 0",
            background: "#fff",
            zIndex: 999,
            padding: "32px 40px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display"
              style={{
                fontSize: 30,
                fontWeight: 400,
                color: "var(--color-text-main)",
                letterSpacing: "-0.025em",
                padding: "14px 0",
                borderBottom: ".5px solid rgba(18,16,8,.07)",
                display: "block",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#agendar"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 28,
              background: "var(--color-dark-main)",
              color: "#fff",
              padding: "16px 24px",
              borderRadius: 9999,
              fontSize: 15,
              fontWeight: 500,
              textAlign: "center",
              display: "block",
              textDecoration: "none",
            }}
          >
            Agendar avaliação
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .header-nav { display: none !important; }
          .header-cta { display: none !important; }
          .header-toggle { display: flex !important; }
        }
        @media (min-width: 769px) {
          .header-toggle { display: none !important; }
          .mobile-menu-overlay { display: none !important; }
        }
        @media (max-width: 480px) {
          .header-bar div[style] { padding: 0 20px !important; }
        }
      `}</style>
    </>
  );
}
