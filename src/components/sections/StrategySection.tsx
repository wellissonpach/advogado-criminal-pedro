import React from 'react';
import { ArrowRight, BrainCircuit } from 'lucide-react';

interface StrategySectionProps {
  onOpenConsultation: () => void;
}

export const StrategySection: React.FC<StrategySectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="estrategia" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 sm:p-10 backdrop-blur-lg">
        <div className="max-w-3xl space-y-6">
          
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] flex items-center gap-2">
              <BrainCircuit className="w-4 h-4" />
              QUANDO O PROBLEMA EXIGE ESTRATÉGIA
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Cada caso criminal exige uma leitura própria. <span className="text-[#C5A059]">E cada decisão precisa ter uma razão.</span>
            </h2>
          </div>

          <div className="text-white/90 text-sm sm:text-base leading-relaxed space-y-4 font-dm">
            <p>
              Nem sempre o melhor caminho é o confronto. Nem sempre é possível negociar. Há situações em que uma atuação técnica e negociadora pode evitar o agravamento de um conflito. Em outras, a defesa precisa ser firme, combativa e preparada para enfrentar todas as etapas necessárias.
            </p>
            <p>
              Por isso, o trabalho começa antes da escolha da medida jurídica. É preciso compreender os fatos, analisar o que já existe contra o investigado ou acusado, identificar riscos, avaliar os possíveis caminhos e somente então definir uma estratégia.
            </p>
            <p>
              Essa análise orienta a atuação do escritório desde os primeiros momentos do caso até as fases posteriores do processo. O cliente e sua família são informados sobre o cenário de maneira clara, mas a atuação não se limita a explicar o problema: o objetivo é construir uma estratégia jurídica coerente com a realidade de cada caso.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={onOpenConsultation}
              className="bg-[#C5A059] hover:bg-[#b08d48] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded inline-flex items-center gap-2 cursor-pointer transition-all shadow-lg"
            >
              <span>Agendar uma consulta</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
