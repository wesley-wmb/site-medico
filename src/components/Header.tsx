"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-sm py-3" : "bg-[var(--surface)] py-4"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 flex items-center justify-between relative z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[var(--color-gold)] flex-shrink-0" />
          <div>
            <div className="text-[15px] font-medium text-[var(--color-text-main)]">
              Dra. Ana Souza
            </div>
            <div className="text-[10px] text-[var(--color-subtle)] mt-[1px]">
              Dermatologista · CRM-PR 00000
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Procedimentos", "Resultados", "Sobre", "Blog"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] text-[var(--color-muted)] hover:text-[var(--color-text-main)] transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#agendar"
          className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-[13px] font-medium hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-4 h-4" />
          Agendar avaliação
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[var(--color-text-main)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col pt-24 px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-6">
            {["Procedimentos", "Resultados", "Sobre", "Blog"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium text-[var(--color-text-main)] border-b border-[var(--color-border-subtle)] pb-4"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#agendar"
              className="flex items-center justify-center gap-2 bg-[#111] text-white px-6 py-4 rounded-full text-[16px] font-medium w-full mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageCircle className="w-5 h-5" />
              Falar pelo WhatsApp
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
