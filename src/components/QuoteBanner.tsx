import React from 'react';

export const QuoteBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#cde4d3] py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-[#b5d5bd] transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-light text-[#1b2f21] tracking-wide leading-snug">
          “Nutra seu corpo com presença, transforme sua rotina e floresça por gerações.”
        </blockquote>
      </div>
    </section>
  );
};
