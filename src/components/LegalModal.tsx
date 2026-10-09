import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'disclaimer' | 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    disclaimer: {
      title: 'Aviso Legal e Ética Profissional',
      subtitle: 'Diretrizes do Conselho Federal de Nutricionistas (CFN) e CRN-3',
      body: [
        'Todas as informações, artigos, receitas e conteúdos compartilhados neste site possuem objetivo exclusivamente informativo, educacional e de orientação geral sobre saúde e bem-estar.',
        'O conteúdo não substitui, sob hipótese alguma, a avaliação clínica individualizada realizada por médico ou nutricionista devidamente habilitado.',
        'Resultados laboratoriais, suplementações fitoterápicas e planos alimentares devem sempre ser prescritos e ajustados individualmente após anamnese detalhada e consideração das particularidades de cada paciente.',
        'Dra. Camila Duarte é profissional graduada e pós-graduada, registrada sob o CRN-3 48291.',
      ],
    },
    terms: {
      title: 'Termos & Condições de Uso',
      subtitle: 'Condições gerais de navegação e agendamento',
      body: [
        'Ao navegar neste site e solicitar conversas ou atendimentos, você concorda em fornecer informações verídicas para fins de contato e avaliação prévia.',
        'A Conversa de Alinhamento Inicial de 20 minutos é um serviço gratuito de triagem e apresentação metodológica, sujeito à disponibilidade de agenda.',
        'O cancelamento ou reagendamento de consultas pagas deve ser comunicado com antecedência mínima de 24 horas úteis para permitir a liberação do horário a outros pacientes.',
        'Todo o material visual, textos, e-books e imagens originais são de propriedade exclusiva da profissional e protegidos pela legislação de direitos autorais.',
      ],
    },
    privacy: {
      title: 'Política de Privacidade e Proteção de Dados',
      subtitle: 'Em conformidade com a LGPD (Lei nº 13.709/2018)',
      body: [
        'Valorizamos a privacidade e o sigilo das informações de nossos pacientes e visitantes.',
        'Os dados pessoais coletados nos formulários (nome, e-mail, telefone/WhatsApp e relatos de saúde) são utilizados estritamente para o propósito de comunicação direta, confirmação de agendamentos e envio de newsletters autorizadas.',
        'Nenhum dado é comercializado, cedido ou compartilhado com terceiros para finalidades publicitárias.',
        'Você pode a qualquer momento solicitar a exclusão definitiva dos seus dados de contato enviando uma mensagem para nossa equipe.',
      ],
    },
  };

  const current = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#faf8f5] rounded-3xl shadow-2xl border border-[#ded8cc] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-[#e9e3d7] flex items-center justify-between bg-[#f4f0e6]">
          <div>
            <h3 className="font-serif-display text-2xl font-light text-[#1f2d22]">
              {current.title}
            </h3>
            <p className="text-xs text-[#637265]">{current.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="p-1.5 rounded-full hover:bg-[#e6e0d2] text-[#4f5f52] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#49584c] leading-relaxed">
          {current.body.map((p, idx) => (
            <p key={idx} className="p-3 bg-white/70 rounded-xl border border-[#e8e2d4]">
              {p}
            </p>
          ))}
          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1c2e22] bg-[#cde4d3] hover:bg-[#b8dcc1] rounded-full transition-all cursor-pointer"
            >
              Compreendi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
