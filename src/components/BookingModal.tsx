import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, MessageCircle, User, Mail, Phone } from 'lucide-react';
import { SERVICES } from '../data/mockData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId = 'free-alignment',
}) => {
  const [selectedService, setSelectedService] = useState(initialServiceId);
  const [selectedDate, setSelectedDate] = useState('2026-10-15');
  const [selectedTime, setSelectedTime] = useState('14:30');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === selectedService) || SERVICES[2];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  const availableTimes = ['09:00', '10:30', '14:30', '16:00', '18:00'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#faf8f5] rounded-3xl shadow-xl border border-[#ded8cc] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#e9e3d7] flex items-center justify-between bg-[#f4f0e6]">
          <div>
            <h3 className="font-serif-display text-2xl font-light text-[#1f2d22]">
              Agendar Conversa
            </h3>
            <p className="text-xs text-[#637265]">
              Atendimento acolhedor e focado na sua saúde integral.
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
          {isSuccess ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#c9e0cf] text-[#1a3020] flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 size={36} />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif-display text-3xl text-[#1e2a21]">
                  Agendamento Solicitado!
                </h4>
                <p className="text-sm text-[#546457] max-w-md mx-auto leading-relaxed">
                  Olá, <strong>{name}</strong>! Recebemos sua solicitação para <strong>{currentService.title}</strong> no dia <strong>{selectedDate}</strong> às <strong>{selectedTime}</strong>.
                </p>
                <p className="text-xs text-[#718074]">
                  Nossa assistente de acolhimento entrará em contato pelo seu WhatsApp ({phone}) nas próximas horas com o link da sala virtual.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/5511999999999?text=Olá!%20Acabei%20de%20solicitar%20agendamento%20para%20${encodeURIComponent(
                    currentService.title
                  )}%20com%20a%20Dra.%20Camila%20Duarte.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#2e5e39] hover:bg-[#244c2d] rounded-full transition-all"
                >
                  <MessageCircle size={15} />
                  Confirmar Agora via WhatsApp
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 text-xs font-medium text-[#465449] hover:bg-[#ede8dd] rounded-full transition-colors"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Select Service */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3c4a3f] mb-2">
                  Escolha o Atendimento
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedService(s.id)}
                      className={`p-3 text-left rounded-xl text-xs transition-all border ${
                        selectedService === s.id
                          ? 'border-[#5f8469] bg-[#e6f1e8] font-semibold text-[#18291c] ring-1 ring-[#5f8469]'
                          : 'border-[#ddd6c7] bg-white text-[#526054] hover:bg-[#f6f3eb]'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{s.title}</span>
                        {s.price && (
                          <span className="text-[10px] text-[#2c4933] font-semibold">{s.price}</span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#718074] font-normal line-clamp-1">
                        {s.subtitle}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3c4a3f] mb-1.5 flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#597861]" />
                    Data Preferencial
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d6cfbe] text-xs text-[#2c382f] focus:outline-none focus:ring-2 focus:ring-[#7b9982]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3c4a3f] mb-1.5 flex items-center gap-1.5">
                    <Clock size={13} className="text-[#597861]" />
                    Horário Sugerido
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {availableTimes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`px-3 py-2 text-xs rounded-lg transition-colors ${
                          selectedTime === t
                            ? 'bg-[#cde4d3] text-[#1c2e22] font-semibold'
                            : 'bg-white border border-[#ded7c8] text-[#556358] hover:bg-[#f0ebe0]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 pt-2 border-t border-[#e8e2d4]">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3c4a3f] mb-1 flex items-center gap-1.5">
                    <User size={13} className="text-[#597861]" />
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Como prefere ser chamada?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d6cfbe] text-xs text-[#2c382f] placeholder-[#909c91] focus:outline-none focus:ring-2 focus:ring-[#7b9982]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#3c4a3f] mb-1 flex items-center gap-1.5">
                      <Mail size={13} className="text-[#597861]" />
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu.email@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d6cfbe] text-xs text-[#2c382f] placeholder-[#909c91] focus:outline-none focus:ring-2 focus:ring-[#7b9982]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#3c4a3f] mb-1 flex items-center gap-1.5">
                      <Phone size={13} className="text-[#597861]" />
                      WhatsApp com DDD
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 98765-4321"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d6cfbe] text-xs text-[#2c382f] placeholder-[#909c91] focus:outline-none focus:ring-2 focus:ring-[#7b9982]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3c4a3f] mb-1">
                    Qual seu principal objetivo ou queixa hoje? (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: cansaço constante, inchaço abdominal, desregularização do sono..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#d6cfbe] text-xs text-[#2c382f] placeholder-[#909c91] focus:outline-none focus:ring-2 focus:ring-[#7b9982] resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-semibold uppercase tracking-wider text-[#1c2e22] bg-[#cde4d3] hover:bg-[#b8dcc1] active:scale-99 transition-all rounded-full shadow-xs cursor-pointer"
                >
                  Solicitar Agendamento
                </button>
                <p className="text-[11px] text-center text-[#7a887d] mt-2">
                  Sem cobrança antecipada para a conversa inicial. Resposta em até 2 horas úteis.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
