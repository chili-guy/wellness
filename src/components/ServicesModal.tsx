import React from 'react';
import { X, Check, Clock, UserCheck } from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceToBook: (serviceId: string) => void;
}

export const ServicesModal: React.FC<ServicesModalProps> = ({
  isOpen,
  onClose,
  onSelectServiceToBook,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#faf8f5] rounded-3xl shadow-2xl border border-[#ded8cc] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#e9e3d7] flex items-center justify-between bg-[#f4f0e6]">
          <div>
            <h3 className="font-serif-display text-2xl font-light text-[#1f2d22]">
              Serviços & Protocolos
            </h3>
            <p className="text-xs text-[#637265]">
              Formatos de acompanhamento desenhados para a sua realidade
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-2xl p-5 border border-[#e5dfd2] flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-serif-display text-lg font-medium text-[#1e2e22]">
                        {s.title}
                      </h4>
                      <p className="text-xs text-[#597861] font-medium">{s.subtitle}</p>
                    </div>
                    {s.price && (
                      <span className="text-xs font-semibold px-2.5 py-1 bg-[#eaf3ec] text-[#224029] rounded-full">
                        {s.price}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#556358] leading-relaxed">
                    {s.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-[11px] text-[#718074]">
                    <Clock size={12} className="text-[#597861]" />
                    <span>{s.duration}</span>
                  </div>

                  <div className="pt-2 border-t border-[#f0ebe0]">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-[#3c4c3f] mb-2">
                      O que está incluído:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#526054]">
                      {s.deliverables.map((d, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check size={13} className="text-[#3b7848] shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-3 border-t border-[#f0ebe0]">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectServiceToBook(s.id);
                    }}
                    className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1c2e22] bg-[#cde4d3] hover:bg-[#b8dcc1] rounded-full transition-all text-center cursor-pointer"
                  >
                    Agendar Este Serviço
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#f2ede3] rounded-2xl text-center text-xs text-[#5e6f61]">
            Precisa de um plano customizado para a sua família ou empresa? Entre em contato pelo WhatsApp para orçamento sob medida.
          </div>
        </div>
      </div>
    </div>
  );
};
