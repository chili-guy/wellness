import React, { useState } from 'react';
import { Menu, X, Calendar, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenAbout: () => void;
  onOpenServices: () => void;
  onOpenBlog: () => void;
  onOpenApproach: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenAbout,
  onOpenServices,
  onOpenBlog,
  onOpenApproach,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e8e4da] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark with Organic Sage Circle Watermark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7b9982] rounded-lg p-1"
        >
          <div className="relative flex items-center justify-center">
            {/* Soft watercolor sage circle */}
            <div className="w-14 h-14 rounded-full bg-[#c8e2cd]/70 group-hover:bg-[#bcdbb3] transition-colors flex items-center justify-center shadow-xs">
              <span className="font-script-signature text-3xl text-[#1e3424] leading-none select-none pl-1">
                CD
              </span>
            </div>
            {/* Subtle organic orbital dot */}
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#dfede2] pointer-events-none" />
          </div>

          <div className="flex flex-col">
            <span className="font-script-signature text-2xl sm:text-3xl text-[#243528] leading-none tracking-wide group-hover:text-[#18261b] transition-colors">
              Camila Duarte
            </span>
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#556759] font-medium mt-0.5">
              Nutrição Integrativa
            </span>
          </div>
        </a>

        {/* Zone 2: 5 Clean Single-Line Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-[#465449]">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-[#1e3424] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Início
          </a>
          <button
            onClick={onOpenAbout}
            className="hover:text-[#1e3424] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1"
          >
            Sobre
          </button>
          <button
            onClick={onOpenApproach}
            className="hover:text-[#1e3424] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1"
          >
            Abordagem
          </button>
          <button
            onClick={onOpenServices}
            className="hover:text-[#1e3424] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1"
          >
            Serviços
          </button>
          <button
            onClick={onOpenBlog}
            className="hover:text-[#1e3424] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1"
          >
            Blog
          </button>
          <a
            href="#depoimentos"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('depoimentos');
            }}
            className="hover:text-[#1e3424] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Depoimentos
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1e3424] bg-[#cde4d3] hover:bg-[#b9dcc2] active:scale-95 transition-all rounded-full shadow-xs hover:shadow whitespace-nowrap shrink-0 cursor-pointer"
          >
            Consulta Gratuita
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-xs font-semibold text-[#1e3424] bg-[#cde4d3] rounded-full shrink-0"
          >
            Agendar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            className="p-2 text-[#2d3b31] hover:text-[#18261b] hover:bg-[#efebe2] rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8f5] border-b border-[#e2ddd1] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#3b473e]">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-2 px-3 rounded-md hover:bg-[#f0ebe0] transition-colors"
            >
              Início
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAbout();
              }}
              className="py-2 px-3 text-left rounded-md hover:bg-[#f0ebe0] transition-colors"
            >
              Sobre a Dra. Camila
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApproach();
              }}
              className="py-2 px-3 text-left rounded-md hover:bg-[#f0ebe0] transition-colors"
            >
              Minha Abordagem Integrativa
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenServices();
              }}
              className="py-2 px-3 text-left rounded-md hover:bg-[#f0ebe0] transition-colors"
            >
              Serviços & Protocolos
            </button>
            <a
              href="#depoimentos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('depoimentos');
              }}
              className="py-2 px-3 rounded-md hover:bg-[#f0ebe0] transition-colors"
            >
              Depoimentos de Pacientes
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBlog();
              }}
              className="py-2 px-3 text-left rounded-md hover:bg-[#f0ebe0] transition-colors"
            >
              Blog & Artigos
            </button>
          </nav>

          <div className="pt-4 border-t border-[#e2ddd1] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-wider text-[#1e3424] bg-[#cde4d3] hover:bg-[#b9dcc2] rounded-full transition-all"
            >
              <Calendar size={16} />
              Agendar Conversa Gratuita
            </button>
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20consultas%20com%20a%20Dra.%20Camila%20Duarte"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-[#465449] hover:text-[#18261b] bg-white border border-[#d6cfbe] rounded-full transition-colors"
            >
              <MessageCircle size={15} className="text-emerald-700" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
