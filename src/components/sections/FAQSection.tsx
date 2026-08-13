import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: "Fui intimado para depor na delegacia. Preciso de advogado?",
      a: "Sim. O depoimento prestado na delegacia é uma peça oficial da investigação e pode ser usado contra você em um futuro processo criminal. O acompanhamento por advogado garante que seus direitos sejam respeitados e evita que você produza provas contra si mesmo por falta de orientação."
    },
    {
      q: "Um parente foi preso. O que o advogado pode fazer nas primeiras horas?",
      a: "O primeiro passo é localizar a pessoa, entender o motivo da prisão e garantir que seus direitos fundamentais sejam respeitados. Em seguida, o advogado analisa a legalidade da prisão para avaliar a possibilidade de pedir o relaxamento (se for ilegal) ou a liberdade provisória, além de acompanhar a audiência de custódia."
    },
    {
      q: "Qual é a diferença entre investigação e processo criminal?",
      a: "A investigação (inquérito policial ou procedimento do Ministério Público) serve para apurar se um crime ocorreu e quem é o responsável. Nessa fase, ainda não há acusação formal. O processo criminal começa quando o Ministério Público apresenta uma denúncia formal e o juiz a recebe. A partir desse momento, a pessoa passa a ser ré no processo. A defesa estratégica deve atuar nas duas fases."
    },
    {
      q: "Como funciona a cobrança de honorários na advocacia criminal?",
      a: "Os honorários são definidos de acordo com a complexidade do caso, o momento processual, a urgência e o volume de trabalho exigido. Na advocacia criminal artesanal, não há valores padronizados, pois cada caso demanda uma estratégia e um nível de atenção específicos. Os valores e as condições são sempre acordados de forma transparente antes do início do trabalho."
    },
    {
      q: "Atendem casos em outros estados?",
      a: "Sim. A atuação ocorre no Distrito Federal e, dependendo da natureza do caso, em outras unidades da federação. Com o processo judicial eletrônico e a possibilidade de despachos virtuais, a defesa técnica de alta complexidade não encontra barreiras territoriais. A viabilidade é sempre avaliada no momento do atendimento."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4" />
          PERGUNTAS FREQUENTES
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
          Dúvidas comuns sobre <span className="text-[#C5A059]">atuação criminal</span>
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <article 
            key={index} 
            className="bg-slate-900/60 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm transition-colors hover:border-[#C5A059]/40"
          >
            <button 
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
            >
              <h3 className="text-sm sm:text-base font-bold text-white pr-4">
                {faq.q}
              </h3>
              <div className="shrink-0 text-[#C5A059]">
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>
            
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-sm text-white/80 leading-relaxed font-dm border-t border-white/5 pt-4">
                {faq.a}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
