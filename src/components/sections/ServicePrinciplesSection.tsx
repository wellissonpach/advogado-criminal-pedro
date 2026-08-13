import React from 'react';
import { Target, Layers, Brain, MessageSquare, ShieldCheck } from 'lucide-react';

export const ServicePrinciplesSection: React.FC = () => {
  const principles = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Organização",
      desc: "O escritório trabalha com um número limitado de casos para garantir que cada processo receba a atenção e o tempo que a sua complexidade exige."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Racionalidade",
      desc: "A avaliação de riscos é parte do método de trabalho. Em vez de promessas, o cliente recebe uma análise objetiva do cenário jurídico e das alternativas de defesa."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Comunicação direta",
      desc: "O acesso ao andamento do caso é direto. O cliente é informado sobre os desdobramentos processuais com clareza, sem intermediários."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Responsabilidade",
      desc: "A atuação em matéria criminal exige técnica, preparo e uma compreensão clara do peso que um processo tem na vida do cliente."
    }
  ];

  return (
    <section id="principios" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="bg-slate-900/60 border border-[#C5A059]/20 rounded-xl p-8 sm:p-12 backdrop-blur-lg">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] flex items-center justify-center gap-2">
            <Target className="w-4 h-4" />
            O QUE ORIENTA O ATENDIMENTO
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            Princípios que guiam nossa <span className="text-[#C5A059]">atuação jurídica</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <article key={index} className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-[#C5A059]">
                  {principle.icon}
                </div>
              </div>
              <div className="space-y-2 pt-1">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {principle.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-dm">
                  {principle.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
