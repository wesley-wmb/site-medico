"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Localizacao() {
  return (
    <section id="localizacao" className="py-16 md:py-24 lg:py-32 bg-white border-t border-[var(--color-border-subtle)]">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-gold-light)] text-[12px] font-semibold tracking-[0.15em] text-[var(--color-gold-dark)] uppercase">
              Onde Estamos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)] mb-6 leading-tight">
            Venha conhecer nossa clínica
          </h2>
          <p className="text-[18px] text-[var(--color-muted)] font-light">
            Ambiente pensado para o seu conforto, segurança e bem-estar no coração do Batel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[var(--bg)] rounded-[32px] p-4 border border-[var(--color-border-subtle)] overflow-hidden shadow-sm">
          
          {/* Informações */}
          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-[var(--color-text-main)] mb-8">Informações de Contato</h3>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[var(--color-border-subtle)]">
                  <MapPin className="w-5 h-5 text-[var(--color-gold-dark)]" />
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-[var(--color-text-main)] mb-1">Endereço</div>
                  <div className="text-[15px] text-[var(--color-muted)] leading-relaxed">
                    Rua Exemplo, 000 — Batel<br />
                    Curitiba, PR, 80000-000
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[var(--color-border-subtle)]">
                  <Phone className="w-5 h-5 text-[var(--color-gold-dark)]" />
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-[var(--color-text-main)] mb-1">Telefone / WhatsApp</div>
                  <div className="text-[15px] text-[var(--color-muted)]">
                    (41) 9 0000-0000
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[var(--color-border-subtle)]">
                  <Clock className="w-5 h-5 text-[var(--color-gold-dark)]" />
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-[var(--color-text-main)] mb-1">Horário de Atendimento</div>
                  <div className="text-[15px] text-[var(--color-muted)]">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Mapa do Google iframe */}
          <div className="lg:col-span-7 h-[400px] lg:h-auto rounded-[24px] overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115254.91266205842!2d-49.3621415056795!3d-25.495055416041695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce35351cbcfe1%3A0xcb13eef7371c26b5!2sBatel%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1718000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
