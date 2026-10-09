import React from 'react';
import { Instagram, Facebook, Linkedin, MessageCircle, Heart } from 'lucide-react';

interface FooterProps {
  onOpenAbout: () => void;
  onOpenServices: () => void;
  onOpenBlog: () => void;
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
  onOpenDisclaimer: () => void;
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAbout,
  onOpenServices,
  onOpenBlog,
  onOpenBooking,
  onOpenQuiz,
  onOpenDisclaimer,
  onOpenTerms,
  onOpenPrivacy,
}) => {
  return (
    <footer className="bg-[#ede8de] border-t border-[#dfd8cb] text-[#465449] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid matching reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#dfd8cb]">
          
          {/* Col 1: Big circular logo badge */}
          <div className="sm:col-span-2 lg:col-span-3 flex sm:justify-start items-start">
            <div className="flex flex-col items-start gap-4">
              <div className="w-24 h-24 rounded-full bg-[#c9e0cf]/80 flex flex-col items-center justify-center text-center p-2 shadow-xs border border-[#b6d4bd]">
                <span className="font-script-signature text-3xl text-[#1a2f20] leading-none">
                  Camila Duarte
                </span>
                <span className="text-[7.5px] uppercase tracking-widest text-[#415344] font-semibold mt-1">
                  Nutrição Integrativa
                </span>
              </div>
              <p className="text-xs text-[#637265] max-w-xs leading-relaxed">
                Acolhimento clínico humanizado e baseado em evidências científicas para transformar sua saúde de dentro para fora.
              </p>
            </div>
          </div>

          {/* Col 2: Quick Menu */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#203124]">
              Menu Rápido
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#18261b] transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-[#18261b] transition-colors text-left cursor-pointer"
                >
                  Sobre a Dra. Camila
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenServices}
                  className="hover:text-[#18261b] transition-colors text-left cursor-pointer"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-[#18261b] transition-colors text-left cursor-pointer font-medium text-[#2d4834]"
                >
                  Consulta Gratuita
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBlog}
                  className="hover:text-[#18261b] transition-colors text-left cursor-pointer"
                >
                  Blog & Artigos
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#203124]">
              Serviços & Protocolos
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={onOpenServices}
                  className="hover:text-[#18261b] transition-colors text-left cursor-pointer"
                >
                  Acompanhamento Nutricional 1:1
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenServices}
                  className="hover:text-[#18261b] transition-colors text-left cursor-pointer"
                >
                  Protocolo Intestino & Desinflamação
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenServices}
                  className="hover:text-[#18261b] transition-colors text-left cursor-pointer"
                >
                  Análise Funcional de Exames
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-[#18261b] transition-colors text-left cursor-pointer"
                >
                  Conversa de Alinhamento 20min
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#203124]">
              Recursos
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={onOpenQuiz}
                  className="hover:text-[#18261b] transition-colors text-left cursor-pointer"
                >
                  Teste de Vitalidade
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBlog}
                  className="hover:text-[#18261b] transition-colors text-left cursor-pointer"
                >
                  Guia de Shots Matinais
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBlog}
                  className="hover:text-[#18261b] transition-colors text-left cursor-pointer"
                >
                  Chás para Cortisol & Sono
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Social & Legal */}
          <div className="lg:col-span-2 space-y-4">
            {/* Social Icons matching reference */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white hover:bg-[#c9e0cf] flex items-center justify-center text-[#2d3a30] transition-colors shadow-xs"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white hover:bg-[#c9e0cf] flex items-center justify-center text-[#2d3a30] transition-colors shadow-xs"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white hover:bg-[#c9e0cf] flex items-center justify-center text-[#2d3a30] transition-colors shadow-xs"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-white hover:bg-[#c9e0cf] flex items-center justify-center text-[#2d3a30] transition-colors shadow-xs"
              >
                <MessageCircle size={15} />
              </a>
            </div>

            {/* Legal Links */}
            <div className="space-y-1.5 text-xs text-[#637265]">
              <div>
                <button
                  onClick={onOpenDisclaimer}
                  className="hover:text-[#1e3424] transition-colors text-left cursor-pointer underline decoration-dotted"
                >
                  Aviso Legal
                </button>
              </div>
              <div>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-[#1e3424] transition-colors text-left cursor-pointer"
                >
                  Termos & Condições
                </button>
              </div>
              <div>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-[#1e3424] transition-colors text-left cursor-pointer"
                >
                  Política de Privacidade
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright notice matching reference */}
        <div className="pt-8 text-center text-xs text-[#758477]">
          <p>
            © {new Date().getFullYear()} Camila Duarte Nutrição Integrativa, LTDA. | Todos os Direitos Reservados · CRN-3 48291
          </p>
        </div>

      </div>
    </footer>
  );
};
