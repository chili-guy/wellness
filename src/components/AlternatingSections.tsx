import React, { useState } from 'react';
import { Check, Mail } from 'lucide-react';

interface AlternatingSectionsProps {
  onOpenApproach: () => void;
  onOpenServices: () => void;
}

export const AlternatingSections: React.FC<AlternatingSectionsProps> = ({
  onOpenApproach,
  onOpenServices,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <div className="w-full">
      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: Integrative and Holistic (Warm Linen Background)    */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 md:py-28 bg-[#f2eee5] border-t border-[#e5dfd3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            
            {/* Left Column: Round Photo Cutout */}
            <div className="md:col-span-6 flex justify-center md:justify-start">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px]">
                {/* Decorative subtle backdrop halo */}
                <div
                  className="absolute -inset-2 rounded-full bg-[#e3ddd0] -z-10"
                  aria-hidden="true"
                />
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#faf8f5] shadow-sm bg-[#ded8cb]">
                  <img
                    src="/src/assets/images/holistic_outdoor_wellness_1791529459323.jpg"
                    alt="Nutrição integrativa para a família e equilíbrio natural"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Text & CTA */}
            <div className="md:col-span-6 space-y-6 text-left">
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.6rem] font-light text-[#1e2a21] leading-tight">
                Integrativa e Holística
              </h2>

              <p className="text-base sm:text-lg text-[#556358] font-normal leading-relaxed">
                Descubra o poder da nutrição integrativa para investigar as causas primárias dos seus sintomas. Como nutricionista clínica funcional, me dedico a ferramentas nutricionais, modulação intestinal e hábitos naturais respaldados pela ciência para guiar você rumo à sua melhor saúde. Para conhecer melhor minha abordagem, clique abaixo.
              </p>

              <div>
                <button
                  onClick={onOpenApproach}
                  className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium text-[#1c2e22] bg-[#cde4d3] hover:bg-[#b8dcc1] active:scale-98 transition-all rounded-full shadow-xs hover:shadow cursor-pointer"
                >
                  Minha Abordagem
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: Services (Off-White Background)                    */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 md:py-28 bg-[#faf8f5] border-t border-[#ebe6dc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="md:col-span-6 space-y-6 text-left order-2 md:order-1">
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.6rem] font-light text-[#1e2a21] leading-tight">
                Serviços
              </h2>

              <p className="text-base sm:text-lg text-[#556358] font-normal leading-relaxed">
                Conheça nossos planos de acompanhamento desenhados para identificar desequilíbrios metabólicos e hormonais na raiz, fornecendo planos alimentares sem restrições punitivas, suplementação individualizada e acolhimento para conduzir você de volta a uma vida cheia de vitalidade.
              </p>

              <div>
                <button
                  onClick={onOpenServices}
                  className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium text-[#1c2e22] bg-[#cde4d3] hover:bg-[#b8dcc1] active:scale-98 transition-all rounded-full shadow-xs hover:shadow cursor-pointer"
                >
                  Serviços
                </button>
              </div>
            </div>

            {/* Right Column: Round Photo Cutout */}
            <div className="md:col-span-6 flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px]">
                {/* Decorative subtle backdrop halo */}
                <div
                  className="absolute -inset-2 rounded-full bg-[#f0ebdF] -z-10"
                  aria-hidden="true"
                />
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-sm bg-[#e8e2d4]">
                  <img
                    src="/src/assets/images/consultation_desk_planning_1791529471037.jpg"
                    alt="Planejamento nutricional individualizado e fitoterapia"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: Looking For More? (Warm Linen Background)          */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 md:py-28 bg-[#f2eee5] border-t border-[#e5dfd3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            
            {/* Left Column: Round Photo Cutout */}
            <div className="md:col-span-6 flex justify-center md:justify-start">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px]">
                <div
                  className="absolute -inset-2 rounded-full bg-[#e3ddd0] -z-10"
                  aria-hidden="true"
                />
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#faf8f5] shadow-sm bg-[#ded8cb]">
                  <img
                    src="/src/assets/images/mindful_healthy_lifestyle_1791529481624.jpg"
                    alt="Estilo de vida consciente e autocuidado diário"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Text & Newsletter Signup */}
            <div className="md:col-span-6 space-y-6 text-left">
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.6rem] font-light text-[#1e2a21] leading-tight">
                Procurando Por Mais?
              </h2>

              <p className="text-base sm:text-lg text-[#556358] font-normal leading-relaxed">
                Cadastre-se para receber atualizações semanais com dicas saudáveis, palavras de encorajamento, receitas desinflamantes e conteúdos exclusivos para tornar sua vida saudável muito mais simples.
              </p>

              {subscribed ? (
                <div className="p-4 bg-[#e1eee4] border border-[#bcd7c3] rounded-2xl flex items-center gap-3 text-[#1e3424] text-sm animate-in fade-in duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#c5decb] flex items-center justify-center shrink-0">
                    <Check size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Inscrição confirmada com sucesso!</p>
                    <p className="text-xs text-[#415947]">Enviamos um presente de boas-vindas para {newsletterEmail}.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Seu melhor e-mail..."
                      className="w-full px-5 py-3 rounded-full bg-white border border-[#d6cfbe] text-sm text-[#2d3a30] placeholder-[#8f9b91] focus:outline-none focus:ring-2 focus:ring-[#7b9982] transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 text-sm font-medium text-[#1c2e22] bg-[#cde4d3] hover:bg-[#b8dcc1] active:scale-98 rounded-full transition-all shadow-xs hover:shadow whitespace-nowrap cursor-pointer"
                  >
                    Inscrever
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
