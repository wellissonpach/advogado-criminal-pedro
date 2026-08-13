import React from 'react';
import { Layers } from 'lucide-react';

export const DefenseConstructionSection: React.FC = () => {
  
  const steps = [
    {
      num: "01",
      title: "Análise inicial",
      desc: "Reunião de informações preliminares, leitura de documentos disponíveis e compreensão do contexto a partir do relato do cliente."
    },
    {
      num: "02",
      title: "Avaliação de riscos",
      desc: "Identificação dos possíveis desdobramentos do caso, com apresentação objetiva dos cenários favoráveis e desfavoráveis."
    },
    {
      num: "03",
      title: "Definição da estratégia",
      desc: "Escolha do caminho mais adequado para proteger os interesses do cliente, seja por meio de negociação, cooperação técnica ou enfrentamento processual."
    },
    {
      num: "04",
      title: "Preparação e acompanhamento",
      desc: "Orientação prévia para depoimentos, acompanhamento em delegacias ou órgãos de controle e suporte integral durante atos processuais."
    },
    {
      num: "05",
      title: "Atuação técnica",
      desc: "Elaboração de defesas escritas, recursos, manifestações processuais e, quando necessário, atuação presencial perante Tribunais."
    }
  ];

  return (
    <section id="metodo" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="text-center space-y-3 mb-12">
        <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] flex items-center justify-center gap-2">
          <Layers className="w-4 h-4" />
          COMO A ATUAÇÃO É CONSTRUÍDA
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
          O trabalho da defesa não é padronizado.
        </h2>
        <p className="text-sm text-white/80 max-w-2xl mx-auto">
          Cada etapa depende de uma compreensão aprofundada dos fatos e do cenário jurídico.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
        {steps.map((step, index) => (
          <article 
            key={index} 
            className="bg-slate-900/60 border border-white/5 rounded-xl p-6 relative backdrop-blur-sm hover:bg-slate-900/80 hover:border-[#C5A059]/30 transition-colors shadow-lg"
          >
            <div className="text-3xl font-extrabold text-white/5 absolute right-4 top-4 select-none">
              {step.num}
            </div>
            <div className="space-y-3 relative z-10">
              <span className="text-[#C5A059] font-bold text-lg tracking-wide">
                {step.num}.
              </span>
              <h3 className="text-base font-bold text-white">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-dm">
                {step.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
