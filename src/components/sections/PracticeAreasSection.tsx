import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PracticeAreasSectionProps {
  onOpenConsultation: () => void;
}

export const PracticeAreasSection: React.FC<PracticeAreasSectionProps> = ({ onOpenConsultation }) => {
  
  const areas = [
    {
      tag: "Plantão & Urgência",
      title: "Prisão em flagrante",
      desc: "Acompanhamento do procedimento, análise das circunstâncias da prisão e avaliação das medidas juridicamente cabíveis.",
      btn: "Solicitar Atendimento"
    },
    {
      tag: "Preservação da Liberdade",
      title: "Audiência de custódia",
      desc: "Atuação técnica na audiência e análise das questões relacionadas à legalidade e à necessidade da manutenção da prisão.",
      btn: "Garantir Defesa"
    },
    {
      tag: "Fase Pré-Processual",
      title: "Inquéritos e investigações",
      desc: "Acompanhamento estratégico desde a fase investigativa, incluindo depoimentos, intimações, diligências e análise dos elementos produzidos.",
      btn: "Defesa Investigativa"
    },
    {
      tag: "Defesa Técnica Integral",
      title: "Processos criminais",
      desc: "Construção e condução da estratégia defensiva de acordo com as provas, os riscos, as teses juridicamente aplicáveis e o momento processual.",
      btn: "Iniciar Defesa"
    },
    {
      tag: "Júri Popular",
      title: "Tribunal do Júri",
      desc: "Preparação e atuação em processos submetidos ao Tribunal do Júri, com estudo aprofundado dos autos, definição da estratégia defensiva e preparação para julgamento.",
      btn: "Analisar Caso"
    },
    {
      tag: "Lei de Drogas",
      title: "Acusações relacionadas ao tráfico",
      desc: "Atuação em investigações, prisões e processos envolvendo imputações previstas na Lei de Drogas, a partir da análise individualizada dos fatos e das provas.",
      btn: "Falar com Advogado"
    },
    {
      tag: "Sigilo & Respeito",
      title: "Crimes contra a dignidade sexual",
      desc: "Defesa técnica e reservada em investigações e processos que envolvem acusações de natureza sexual, com atenção especial à sensibilidade e ao sigilo dessas situações.",
      btn: "Consultoria Sigilosa"
    }
  ];

  return (
    <section id="areas" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059]">
          ATUAÇÃO EM DIREITO CRIMINAL
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
          Defesa criminal em diferentes momentos e <span className="text-[#C5A059]">níveis de complexidade</span>
        </h2>
        <div className="text-sm text-white/80 max-w-2xl mx-auto space-y-2">
          <p>A estratégia de defesa pode começar antes mesmo da existência de um processo.</p>
          <p>O escritório atua desde situações urgentes e investigações iniciais até processos criminais e julgamentos perante o Tribunal do Júri.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.map((area, index) => (
          <article 
            key={index} 
            className="bg-slate-900/80 border border-white/10 p-6 rounded-xl backdrop-blur-md space-y-4 hover:border-[#C5A059]/60 transition-all flex flex-col justify-between group shadow-lg"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-[#C5A059] text-[11px] font-bold uppercase tracking-wider">
                <span>{area.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
                {area.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-dm">
                {area.desc}
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="pt-2 text-xs font-bold text-[#C5A059] hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>{area.btn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};
