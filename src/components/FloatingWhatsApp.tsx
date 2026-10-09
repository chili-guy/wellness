import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Atendimento rápido"
      className="fixed bottom-5 right-5 z-40 flex items-center"
    >
      <a
        href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20as%20consultas%20com%20a%20Dra.%20Camila%20Duarte"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a equipe da Dra. Camila Duarte"
        className="group flex items-center gap-2 px-3.5 py-2.5 bg-[#2d5937] hover:bg-[#23472b] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
      >
        <MessageCircle size={18} className="fill-white text-transparent shrink-0" />
        <span className="text-xs font-semibold tracking-wide pr-1 hidden sm:inline">
          Dúvidas? Fale Conosco
        </span>
      </a>
    </aside>
  );
};
