import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] pt-12 border-t border-[#1e1e1e]">
      <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 pb-10">
        
        {/* Brand */}
        <div className="md:col-span-6 lg:col-span-5">
          <div className="text-[15px] font-medium text-white mb-2">Dra. Ana Souza</div>
          <p className="text-[12px] text-[#555] leading-relaxed mb-3 pr-4">
            Dermatologista especializada em estética facial e dermatologia clínica. Atendimento presencial em Curitiba e por telemedicina.
          </p>
          <div className="text-[10px] text-[#3a3a3a]">
            CRM-PR 00000 · RQE 00000 · Membro Titular da Sociedade Brasileira de Dermatologia
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-3 lg:col-span-3">
          <div className="text-[10px] font-medium text-[#555] uppercase tracking-widest mb-4">Procedimentos</div>
          <div className="flex flex-col gap-2">
            {["Toxina botulínica", "Bioestimuladores", "Manchas / laser", "Preenchimento facial", "Dermatologia clínica"].map(proc => (
              <Link key={proc} href="#agendar" className="text-[12px] text-[#444] hover:text-[#888] transition-colors">
                {proc}
              </Link>
            ))}
          </div>
        </div>

        {/* Contato */}
        <div className="md:col-span-3 lg:col-span-4">
          <div className="text-[10px] font-medium text-[#555] uppercase tracking-widest mb-4">Contato</div>
          <div className="flex flex-col gap-2">
            <a href="https://wa.me/5541900000000" className="text-[12px] text-[#444] hover:text-[#888] transition-colors">
              WhatsApp: (41) 9 0000-0000
            </a>
            <a href="mailto:contato@draanasouza.com.br" className="text-[12px] text-[#444] hover:text-[#888] transition-colors">
              contato@draanasouza.com.br
            </a>
            <span className="text-[12px] text-[#444] mt-2 block">
              Rua Exemplo, 000 — Batel, Curitiba
            </span>
            <span className="text-[12px] text-[#444]">
              Seg–Sex 8h–18h · Sáb 8h–12h
            </span>
            <div className="flex items-center gap-3 mt-4">
              <Link href="#" className="text-[12px] text-[#444] hover:text-[#888] transition-colors">Política de Privacidade</Link>
              <span className="text-[#333]">·</span>
              <Link href="#" className="text-[12px] text-[#444] hover:text-[#888] transition-colors">Política de Cookies</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1a1a1a] py-4">
        <div className="container mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-[11px] text-[#333]">© 2026 Dra. Ana Souza · Todos os direitos reservados</div>
          <div className="text-[11px] text-[#333]">LGPD · CFM 2.336/2023</div>
        </div>
      </div>
    </footer>
  );
}
