import React from 'react';
import { X, Search, ShieldCheck, Moon, Utensils } from 'lucide-react';

interface ApproachModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ApproachModal: React.FC<ApproachModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  const pillars = [
    {
      icon: Search,
      title: '1. Investigação da Raiz Primária',
      desc: 'Não mascaramos queixas com remédios paliativos ou restrições extremas. Investigamos histórico de vida, gatilhos inflamatórios, exames com faixas funcionais e estilo de vida para entender por que seu corpo está emitindo esses sinais.',
    },
    {
      icon: ShieldCheck,
      title: '2. Microbiota & Barreira Intestinal',
      desc: 'Mais de 70% da imunidade e grande parte dos neurotransmissores do bem-estar nascem no intestino. Atuamos com os 5Rs da modulação intestinal para restaurar a permeabilidade e acalmar o sistema imune.',
    },
    {
      icon: Moon,
      title: '3. Hormônios, Cortisol e Ciclo Circadiano',
      desc: 'A nutrição integrativa respeita a biologia do tempo: exposição à luz natural pela manhã, regulação dos picos de glicose e suporte ao relaxamento noturno para regeneração celular profunda.',
    },
    {
      icon: Utensils,
      title: '4. Comer Intuitivo, Afetivo e Sem Terrorismo',
      desc: 'A comida deve ser fonte de prazer, conexão e nutrição, nunca de culpa ou medo. Desenvolvemos estratégias práticas para que sua alimentação saudável seja gostosa, variada e mantida com naturalidade para sempre.',
    },
  ];

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
              Minha Abordagem Integrativa
            </h3>
            <p className="text-xs text-[#637265]">
              Como transformamos saúde tratando a causa na raiz
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
          <div className="space-y-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-[#e5dfd2] flex items-start gap-4 shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-full bg-[#d6ebd9] flex items-center justify-center text-[#233d28] shrink-0 mt-0.5">
                    <Icon size={18} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-[#1e2e22]">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5a6b5e] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 py-3 text-xs font-semibold uppercase tracking-wider text-[#1c2e22] bg-[#cde4d3] hover:bg-[#b8dcc1] rounded-full transition-all text-center shadow-xs cursor-pointer"
            >
              Iniciar Minha Jornada (Conversa Gratuita)
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 text-xs font-medium text-[#546457] hover:bg-[#ede8dc] rounded-full transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
