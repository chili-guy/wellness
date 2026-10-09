import React, { useState } from 'react';
import { X, Star, Heart, CheckCircle2 } from 'lucide-react';
import { TestimonialItem } from '../types';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (testimonial: TestimonialItem) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onSubmitReview,
}) => {
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [condition, setCondition] = useState('');
  const [quote, setQuote] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !quote) return;

    const newReview: TestimonialItem = {
      id: `test-${Date.now()}`,
      author,
      location: location || 'Brasil',
      condition: condition || 'Saúde & Vitalidade Integrativa',
      quote,
    };

    onSubmitReview(newReview);
    setSubmitted(true);
  };

  const handleFinish = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#faf8f5] rounded-3xl shadow-2xl border border-[#ded8cc] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#e9e3d7] flex items-center justify-between bg-[#f4f0e6]">
          <div>
            <h3 className="font-serif-display text-2xl font-light text-[#1f2d22]">
              Deixar um Depoimento
            </h3>
            <p className="text-xs text-[#637265]">
              Sua história inspira outras mulheres a transformarem sua saúde
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
        <div className="p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#c9e0cf] text-[#1c3222] flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="font-serif-display text-2xl text-[#1e2a21]">
                Gratidão pelo seu carinho!
              </h4>
              <p className="text-xs sm:text-sm text-[#546457] max-w-sm mx-auto leading-relaxed">
                Seu relato foi adicionado à nossa página com muito amor. É uma honra caminhar ao seu lado.
              </p>
              <button
                onClick={handleFinish}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1c2e22] bg-[#cde4d3] hover:bg-[#b8dcc1] rounded-full transition-all cursor-pointer"
              >
                Fechar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 justify-center py-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 text-[#465449] hover:scale-110 transition-transform"
                  >
                    <Star
                      size={22}
                      className={star <= rating ? 'fill-[#e3b438] text-[#dca626]' : 'text-[#cfc8ba]'}
                    />
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3c4a3f] mb-1">
                  Seu Nome ou Iniciais
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Mariana T. ou Mariana Toledo"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d6cfbe] text-xs text-[#2c382f] focus:outline-none focus:ring-2 focus:ring-[#7b9982]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3c4a3f] mb-1">
                    Cidade / Estado
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: São Paulo, SP"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d6cfbe] text-xs text-[#2c382f] focus:outline-none focus:ring-2 focus:ring-[#7b9982]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3c4a3f] mb-1">
                    Motivo do Tratamento
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Saúde Intestinal, Hashimoto..."
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d6cfbe] text-xs text-[#2c382f] focus:outline-none focus:ring-2 focus:ring-[#7b9982]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3c4a3f] mb-1">
                  Seu Depoimento
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Conte como era sua saúde antes do acompanhamento e quais transformações você sentiu..."
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d6cfbe] text-xs text-[#2c382f] focus:outline-none focus:ring-2 focus:ring-[#7b9982] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#1c2e22] bg-[#cde4d3] hover:bg-[#b8dcc1] rounded-full transition-all cursor-pointer shadow-xs"
                >
                  Publicar Depoimento
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
