import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

interface FinalCallSectionProps {
  onOpenConsultation: () => void;
  onOpenDirectLine: () => void;
}

export const FinalCallSection: React.FC<FinalCallSectionProps> = ({ onOpenConsultation, onOpenDirectLine }) => {
  return (
    <section id="contato" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-[#C5A059]/40 p-10 sm:p-14 rounded-2xl text-center shadow-2xl relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-50"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#C5A059] rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#C5A059] rounded-full blur-[100px] opacity-20"></div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Precisa de orientação jurídica para <span className="text-[#C5A059]">o seu caso?</span>
          </h2>
          
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-dm">
            A definição da melhor estratégia exige uma análise cuidadosa dos fatos. Entre em contato para conversarmos sobre a sua situação.
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="bg-[#C5A059] hover:bg-[#b08d48] text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] w-full sm:w-auto"
            >
              <span>Agendar Atendimento</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
