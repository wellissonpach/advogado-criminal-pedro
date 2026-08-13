import React from 'react';
import { ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface UrgentSituationsSectionProps {
  onOpenConsultation: () => void;
}

export const UrgentSituationsSection: React.FC<UrgentSituationsSectionProps> = ({ onOpenConsultation }) => {
  
  const checklist = [
    "Nome completo da pessoa presa",
    "Local e horário aproximado da prisão",
    "Delegacia para a qual ela foi conduzida",
    "Unidade prisional, caso já tenha ocorrido transferência",
    "Número do processo ou procedimento, se disponível",
    "Fotografias ou cópias de documentos, intimações ou registros relacionados ao caso",
    "Uma descrição objetiva do que a família sabe sobre a ocorrência"
  ];

  return (
    <section id="urgencias" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="bg-slate-900/60 border border-red-500/20 rounded-xl p-6 sm:p-10 backdrop-blur-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-red-500 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                SITUAÇÕES URGENTES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Houve uma prisão? <span className="text-[#C5A059]">Algumas informações podem ajudar no primeiro atendimento.</span>
              </h2>
            </div>

            <div className="text-white/90 text-sm sm:text-base leading-relaxed space-y-4 font-dm">
              <p>
                Quando uma pessoa é presa, é comum que a família receba informações incompletas e não saiba exatamente o que fazer. Se você estiver diante dessa situação, procure reunir, sempre que possível, as informações listadas ao lado.
              </p>
              <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-lg">
                <p className="text-sm font-semibold text-white">
                  Não ter todas essas informações não impede o primeiro contato.
                </p>
                <p className="text-xs text-white/80 mt-1">
                  A partir dos dados disponíveis, é possível compreender melhor o cenário inicial e avaliar quais providências jurídicas precisam ser consideradas.
                </p>
              </div>
              <p className="text-sm text-white/80">
                Em situações envolvendo prisão, investigação ou prazos processuais, o tempo pode ser relevante. A urgência e a medida juridicamente adequada, entretanto, dependem da análise concreta do caso.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="bg-red-700/80 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded inline-flex items-center gap-2 transition-all cursor-pointer shadow-lg w-full sm:w-auto justify-center border border-red-500/50"
              >
                <span>Falar com um advogado imediatamente</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-slate-950/50 rounded-xl p-6 sm:p-8 border border-white/5">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider text-[#C5A059]">Checklist de Informações Úteis</h3>
            <ul className="space-y-4">
              {checklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
