import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface HeroContentProps {
  onOpenConsultation: () => void;
  onOpenPracticeAreas: () => void;
  onOpenDirectLine?: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  onOpenConsultation
}) => {
  return (
    <div id="hero" className="relative z-20 w-full min-h-screen flex items-center pt-28 sm:pt-36 pb-16 font-dm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="max-w-2xl text-left space-y-6">
          
          {/* Top Kicker Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] font-dm">
            <span>ADVOCACIA CRIMINAL ESPECIALIZADA</span>
          </div>

          {/* Main Title - Pure White text with Gold Highlight */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] font-dm tracking-tight">
            Advogado Criminalista em <span className="text-[#C5A059]">Brasília</span>
          </h1>

          {/* Paragraph Description - Pure White Text */}
          <div className="space-y-3 text-white/90 text-sm sm:text-base lg:text-lg font-normal leading-relaxed font-dm max-w-xl">
            <p>
              Atuação estratégica e personalizada na defesa dos seus direitos.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="bg-[#C5A059] hover:bg-[#b08d48] text-slate-950 font-dm font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Saiba Mais</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#areas"
              className="border border-white/40 hover:border-[#C5A059] text-white hover:text-[#C5A059] font-dm font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded transition-all flex items-center justify-center gap-2 bg-slate-950/40 backdrop-blur-sm"
            >
              <span>Áreas de Atuação</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

