import React from 'react';
import { X, Award, Heart, Sparkles, BookOpen } from 'lucide-react';
import heroNutritionistPortrait from '../assets/images/hero_nutritionist_portrait_1791529449252.jpg';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#faf8f5] rounded-3xl shadow-2xl border border-[#ded8cc] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#e9e3d7] flex items-center justify-between bg-[#f4f0e6]">
          <div>
            <h3 className="font-serif-display text-2xl font-light text-[#1f2d22]">
              Sobre a Dra. Camila Duarte
            </h3>
            <p className="text-xs text-[#637265]">
              Nutricionista Clínica & Integrativa · CRN-3 48291
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="p-1.5 rounded-full hover:bg-[#e6e0d2] text-[#4f5f52] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-4 border-b border-[#ebe5d9]">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#cde4d3] shrink-0 bg-[#ebe6db]">
              <img
                src={heroNutritionistPortrait}
                alt="Dra. Camila Duarte"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left space-y-1.5">
              <span className="font-script-signature text-3xl text-[#1e3424]">
                Camila Duarte
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#526a57]">
                Especialista em Saúde da Mulher, Intestino e Longevidade
              </p>
              <p className="text-xs text-[#6c7d70] leading-relaxed">
                Mais de 10 anos dedicados a desmistificar a nutrição, integrando ciência clínica avançada com afeto, respeito à rotina e escuta atenta.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-[#465449] leading-relaxed">
            <p>
              “Minha paixão pela nutrição integrativa nasceu quando percebi, na prática clínica, quantas mulheres sofriam com cansaço crônico, oscilações de humor, digestão pesada e dores sem encontrar respostas nos modelos tradicionais de contagem obsessiva de calorias.”
            </p>
            <p>
              “Acredito que o alimento é muito mais do que combustível: ele é informação biológica direta para as suas células, modulando sua imunidade, neurotransmissores e genes. Minha missão é ajudar você a reconquistar sua autonomia, paz à mesa e saúde duradoura.”
            </p>
          </div>

          {/* Credentials */}
          <div className="bg-[#f2ede3] rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#223526] flex items-center gap-2">
              <Award size={15} className="text-[#597861]" />
              Formação & Qualificações
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#526355]">
              <li className="flex items-start gap-2">
                <span className="text-[#597861]">•</span>
                <span>Graduada em Nutrição pela USP (Universidade de São Paulo)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#597861]">•</span>
                <span>Pós-graduação em Nutrição Clínica Funcional (VP Centro de Nutrição)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#597861]">•</span>
                <span>Especialização em Fitoterapia & Modulação da Microbiota</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#597861]">•</span>
                <span>Membro da Sociedade Brasileira de Nutrição Funcional (SBNF)</span>
              </li>
            </ul>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 py-3 text-xs font-semibold uppercase tracking-wider text-[#1c2e22] bg-[#cde4d3] hover:bg-[#b8dcc1] rounded-full transition-all text-center shadow-xs cursor-pointer"
            >
              Agendar Conversa Gratuita
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 text-xs font-medium text-[#546457] hover:bg-[#ede8dc] rounded-full transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
