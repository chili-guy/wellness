import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroNutritionistPortrait from '../assets/images/hero_nutritionist_portrait_1791529449252.jpg';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenQuiz }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#faf8f5] pt-12 pb-20 md:py-24">
      {/* Soft decorative background circles matching reference */}
      <div
        className="absolute top-16 right-[38%] w-36 h-36 md:w-48 md:h-48 rounded-full bg-[#d7e9dc]/60 -z-0 pointer-events-none blur-[1px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-8 left-[34%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#dcece0]/70 -z-0 pointer-events-none blur-[1px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-6 space-y-6 max-w-xl text-left">
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[3.5rem] font-light tracking-tight text-[#1e2a21] leading-[1.12]">
              Transforme Sua Vida <br className="hidden sm:inline" />
              e Floresça
            </h1>

            <p className="text-base sm:text-lg text-[#556358] font-normal leading-relaxed">
              Pronta para parar de tratar sintomas superficiais e começar a cuidar do seu corpo na raiz? 
              Cansada de dietas engessadas e pesquisas intermináveis na internet sem respostas claras? 
              Agende uma conversa inicial e vamos juntas recuperar sua energia, saúde intestinal e equilíbrio hormonal.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-medium text-[#1c2e22] bg-[#cde4d3] hover:bg-[#b8dcc1] active:scale-98 transition-all rounded-full shadow-xs hover:shadow cursor-pointer"
              >
                Agende Agora!
              </button>

              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium text-[#465449] hover:text-[#1c2e22] hover:bg-[#efebe1] transition-colors rounded-full cursor-pointer"
              >
                <Sparkles size={16} className="text-[#64846c]" />
                Fazer Teste de Sintomas (2 min)
              </button>
            </div>

            {/* Quiet credibility text */}
            <div className="pt-4 flex items-center gap-2 text-xs text-[#718074]">
              <span>Atendimento online em todo o Brasil</span>
              <span aria-hidden="true">·</span>
              <span>Presencial em São Paulo</span>
              <span aria-hidden="true">·</span>
              <span>CRN-3 48291</span>
            </div>
          </div>

          {/* Right Column: Hero Circular Portrait with Organic Floating Blobs */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px]">
              
              {/* Reference pastel circles around the portrait */}
              <div
                className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-[#cfe5d4]/70 -z-10 transition-transform duration-700 hover:scale-105"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#dceddf]/80 -z-10"
                aria-hidden="true"
              />

              {/* The big circular photo cutout */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md relative bg-[#edeae1]">
                <img
                  src={heroNutritionistPortrait}
                  alt="Dra. Camila Duarte - Nutricionista Clínica Integrativa"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
