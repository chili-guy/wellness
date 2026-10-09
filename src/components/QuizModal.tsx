import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw } from 'lucide-react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  if (!isOpen) return null;

  const questions = [
    {
      title: 'Digestão & Sensibilidade Intestinal',
      desc: 'Com que frequência você nota inchaço abdominal, digestão lenta ou desconforto após as refeições principais?',
      options: [
        { label: 'Praticamente todos os dias, especialmente à noite', points: 3 },
        { label: 'Algumas vezes por semana, dependendo do que como', points: 2 },
        { label: 'Raramente, me sinto leve a maior parte do tempo', points: 1 },
      ],
    },
    {
      title: 'Curva de Energia & Disposição',
      desc: 'Como se comporta a sua energia ao longo da tarde (entre 14h e 17h)?',
      options: [
        { label: 'Queda drástica de energia e vontade incontrolável por doce ou café', points: 3 },
        { label: 'Sinto um pouco de sono, mas consigo me manter produtiva', points: 2 },
        { label: 'Minha energia é estável e constante durante todo o dia', points: 1 },
      ],
    },
    {
      title: 'Qualidade do Sono & Cortisol Noturno',
      desc: 'Você acorda com sensação genuína de restauração e clareza mental pela manhã?',
      options: [
        { label: 'Raramente, acordo pesada mesmo dormindo 7 ou 8 horas', points: 3 },
        { label: 'Varia bastante dependendo do nível de estresse da semana', points: 2 },
        { label: 'Sim, acordo disposta e pronta para o dia na maioria das manhãs', points: 1 },
      ],
    },
  ];

  const handleSelectOption = (points: number) => {
    const updated = [...answers, points];
    setAnswers(updated);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Results step
    }
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers([]);
  };

  const totalPoints = answers.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#faf8f5] rounded-3xl shadow-2xl border border-[#ded8cc] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#e9e3d7] flex items-center justify-between bg-[#f4f0e6]">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-[#597861]" />
            <h3 className="font-serif-display text-2xl font-light text-[#1f2d22]">
              Teste de Vitalidade & Sinais
            </h3>
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
          {step < questions.length ? (
            <div className="space-y-5">
              {/* Progress */}
              <div className="flex items-center justify-between text-xs text-[#718074]">
                <span>Etapa {step + 1} de {questions.length}</span>
                <span>{Math.round(((step + 1) / questions.length) * 100)}% concluído</span>
              </div>
              <div className="w-full h-1.5 bg-[#e8e2d4] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#82a68a] transition-all duration-300"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase font-semibold tracking-wider text-[#597861]">
                  Pergunta {step + 1}
                </span>
                <h4 className="font-serif-display text-xl sm:text-2xl font-normal text-[#1e2a21]">
                  {questions[step].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5a6a5d] leading-relaxed">
                  {questions[step].desc}
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {questions[step].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.points)}
                    className="w-full p-4 text-left rounded-2xl bg-white border border-[#ded8cb] hover:border-[#82a68a] hover:bg-[#f3f8f4] text-xs sm:text-sm text-[#3b493e] transition-all flex items-center justify-between group cursor-pointer shadow-2xs"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight size={15} className="text-[#8ba291] group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-5 animate-in fade-in duration-300">
              <div className="p-5 rounded-2xl bg-[#eaf3ec] border border-[#bcd7c3] space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#325a3c]">
                  Resultado da Sua Avaliação
                </span>
                <h4 className="font-serif-display text-2xl font-medium text-[#1a2f20]">
                  {totalPoints >= 7
                    ? 'Sinais Evidentes de Sobrecarga e Inflamação'
                    : totalPoints >= 5
                    ? 'Alerta Moderado de Desequilíbrio Intestinal'
                    : 'Metabolismo em Bom Equilíbrio'}
                </h4>
                <p className="text-xs sm:text-sm text-[#465a4c] leading-relaxed">
                  {totalPoints >= 7
                    ? 'Seu organismo está demonstrando que a mucosa digestiva e o eixo de estresse estão pedindo uma pausa e reparação ativa. Sintomas como inchaço frequente e queda de energia não devem ser normalizados.'
                    : totalPoints >= 5
                    ? 'Pequenos ajustes na densidade de micronutrientes, hidratação terapêutica e modulação da microbiota já trarão grande alívio para seus sintomas.'
                    : 'Seus pilares básicos mostram boa homeostase. O foco deve ser a manutenção preventiva e otimização da longevidade celular.'}
                </p>
              </div>

              <div className="space-y-2">
                <h5 className="text-xs uppercase font-semibold tracking-wider text-[#3c4c3f]">
                  Orientações Práticas Sugeridas:
                </h5>
                <ul className="space-y-2 text-xs sm:text-sm text-[#4d5c50]">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#3b7848] shrink-0 mt-0.5" />
                    <span>Inicie o dia com água morna e gotas de própolis ou limão antes de qualquer estimulante.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#3b7848] shrink-0 mt-0.5" />
                    <span>Evite líquidos gelados durante as refeições principais para preservar o ácido clorídrico gástrico.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-[#3b7848] shrink-0 mt-0.5" />
                    <span>Reduza telas e luz azul 60 minutos antes de dormir para permitir a produção adequada de melatonina.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="flex-1 py-3 text-xs font-semibold uppercase tracking-wider text-[#1c2e22] bg-[#cde4d3] hover:bg-[#b8dcc1] rounded-full transition-all text-center cursor-pointer shadow-xs"
                >
                  Agendar Conversa Gratuita (20min)
                </button>
                <button
                  onClick={handleRestart}
                  className="px-5 py-3 text-xs font-medium text-[#546457] hover:bg-[#ede8dc] rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw size={13} />
                  Refazer Teste
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
