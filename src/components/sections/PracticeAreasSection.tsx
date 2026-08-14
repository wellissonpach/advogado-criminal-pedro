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
      desc: (
        <div className="space-y-2">
          <p className="italic text-[#C5A059]">As primeiras decisões podem repercutir em todo o processo.</p>
          <p>A defesa começa na delegacia. É nesse momento que depoimentos, versões dos fatos e outros elementos que poderão influenciar a investigação começam a ser formalizados. A atuação imediata do advogado permite acompanhar os atos policiais, orientar o investigado e avaliar, desde o início, a produção de elementos em favor da defesa.</p>
          <p>Falar a verdade é essencial. Saber como apresentá-la, com segurança e estratégia, também.</p>
        </div>
      ),
      btn: "Solicitar atendimento"
    },
    {
      tag: "Preservação da Liberdade",
      title: "Audiência de custódia",
      desc: (
        <div className="space-y-2">
          <p className="italic text-[#C5A059]">O primeiro contato com o juiz pode definir como o processo será enfrentado.</p>
          <p>A audiência de custódia não julga se o acusado é culpado ou inocente. Nesse momento, o juiz analisa a legalidade da prisão e se existem razões para mantê-la ou se o investigado pode responder ao processo em liberdade, inclusive mediante medidas cautelares.</p>
          <p>A defesa deve estar preparada para demonstrar, de forma técnica, as circunstâncias pessoais e jurídicas relevantes, apresentando ao Juízo os elementos que sustentam o pedido de liberdade.</p>
        </div>
      ),
      btn: "Garantir defesa"
    },
    {
      tag: "Fase Pré-Processual",
      title: "Inquéritos e investigações",
      desc: (
        <div className="space-y-2">
          <p className="italic text-[#C5A059]">A defesa não precisa esperar a acusação para começar a agir.</p>
          <p>A investigação é o momento em que começam a ser construídos os elementos que poderão fundamentar uma futura acusação. A defesa particular permite atuação ativa desde essa fase, com acompanhamento de depoimentos e diligências, análise do material produzido e realização de investigação defensiva.</p>
          <p>O objetivo é não permitir que os fatos sejam construídos apenas sob a perspectiva da acusação.</p>
        </div>
      ),
      btn: "Iniciar defesa investigativa"
    },
    {
      tag: "Defesa Técnica Integral",
      title: "Processos criminais",
      desc: (
        <div className="space-y-2">
          <p className="italic text-[#C5A059]">Uma acusação criminal exige estratégia construída sobre as provas.</p>
          <p>A defesa é desenvolvida a partir do estudo integral do processo, identificando fragilidades da acusação, riscos, provas relevantes e teses juridicamente aplicáveis. Cada manifestação, audiência e decisão processual deve estar conectada a uma estratégia definida para o caso.</p>
          <p>Não existe defesa criminal eficiente baseada em fórmulas prontas.</p>
        </div>
      ),
      btn: "Iniciar defesa"
    },
    {
      tag: "Júri Popular",
      title: "Tribunal do Júri",
      desc: (
        <div className="space-y-2">
          <p className="italic text-[#C5A059]">No Júri, técnica processual e capacidade de comunicação caminham juntas.</p>
          <p>Os crimes dolosos contra a vida possuem procedimento próprio e podem levar o acusado ao julgamento pelo Conselho de Sentença, formado por sete jurados. São eles que decidirão sobre questões que conduzem à condenação ou à absolvição.</p>
          <p>A atuação exige preparação específica: domínio dos autos, estratégia probatória, construção da narrativa defensiva e capacidade de comunicar aos jurados a tese de defesa com clareza e precisão.</p>
        </div>
      ),
      btn: "Analisar caso"
    },
    {
      tag: "Lei de Drogas",
      title: "Acusações relacionadas ao tráfico",
      desc: (
        <div className="space-y-2">
          <p className="italic text-[#C5A059]">A acusação não encerra a discussão sobre o que as provas realmente demonstram.</p>
          <p>Prisões e investigações por tráfico exigem análise cuidadosa das circunstâncias da abordagem, apreensões, depoimentos, provas produzidas e da própria dinâmica atribuída ao acusado.</p>
          <p>A defesa deve reconstruir os fatos a partir das provas e verificar, desde o início, a legalidade dos atos praticados e a correta classificação jurídica da conduta imputada.</p>
        </div>
      ),
      btn: "Falar com advogado"
    },
    {
      tag: "Sigilo & Respeito",
      title: "Crimes contra a dignidade sexual",
      desc: (
        <div className="space-y-2">
          <p className="italic text-[#C5A059]">Acusações dessa natureza exigem técnica, discrição e ausência de prejulgamentos.</p>
          <p>O peso social dessas acusações pode fazer com que o investigado tenha receio de procurar ajuda, expor fatos íntimos ou até mesmo contar sua versão. No atendimento, o caso é tratado com absoluto sigilo, respeito e seriedade, para que os fatos e as provas possam ser analisados sem julgamentos antecipados.</p>
          <p>A atuação é assumida após análise individual do caso. Quando aceita, a defesa é conduzida com a atenção e a responsabilidade que a gravidade dessas acusações exige.</p>
        </div>
      ),
      btn: "Consultoria sigilosa"
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
            className="relative bg-slate-900/80 border border-white/10 p-6 rounded-xl backdrop-blur-md space-y-4 transition-all duration-300 flex flex-col justify-between group shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C5A059]/10"
          >
            {/* Efeito Specular/Brilho */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(197, 160, 89, 0.15) 0%, transparent 70%)' }}></div>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

            <div className="space-y-3 relative z-10">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-[#C5A059] text-[11px] font-bold uppercase tracking-wider">
                <span>{area.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
                {area.title}
              </h3>
              <div className="text-xs sm:text-sm text-white/90 leading-relaxed font-dm">
                {area.desc}
              </div>
            </div>
            <button
              onClick={onOpenConsultation}
              className="pt-2 text-xs font-bold text-[#C5A059] hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors cursor-pointer relative z-10"
            >
              <span>{area.btn}</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

