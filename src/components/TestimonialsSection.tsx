import React from 'react';
import { TestimonialItem } from '../types';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
  onOpenReviewModal: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  onOpenReviewModal,
}) => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#faf8f5] border-b border-[#e7e1d5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.7rem] font-light text-[#1e2a21]">
            O Que as Minhas Pacientes Dizem
          </h2>
          <p className="text-sm sm:text-base text-[#617164]">
            Histórias reais de recuperação de energia, desinflamação e liberdade com a alimentação.
          </p>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between text-left space-y-4 p-6 sm:p-7 rounded-2xl bg-[#f5f1e8]/60 hover:bg-[#f5f1e8] transition-colors border border-[#e8e2d4]"
            >
              <p className="text-sm sm:text-base text-[#465449] font-normal leading-relaxed italic">
                “{item.quote}”
              </p>

              <div className="pt-3 border-t border-[#dfd8ca] flex items-center justify-between">
                <div>
                  <span className="font-medium text-sm text-[#1e2a21]">
                    — {item.author}
                  </span>
                  <p className="text-xs text-[#738275]">{item.condition}</p>
                </div>
                <span className="text-xs text-[#8e9d90]">{item.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button: Leave a Review */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenReviewModal}
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-[#1c2e22] bg-[#cde4d3] hover:bg-[#b8dcc1] active:scale-98 transition-all rounded-full shadow-xs hover:shadow cursor-pointer"
          >
            Deixar um Depoimento
          </button>
        </div>

      </div>
    </section>
  );
};
