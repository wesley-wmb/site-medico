import { MessageCircle } from "lucide-react";
import Link from "next/link";

const WA = "5541991078805";

export default function FloatingWhatsApp() {
  return (
    <Link
      href={`https://wa.me/${WA}?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-[200] flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:scale-110 transition-transform duration-200"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </Link>
  );
}
