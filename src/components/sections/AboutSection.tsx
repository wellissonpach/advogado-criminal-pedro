import React from 'react';
import { ArrowRight, Scale } from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="sobre" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900/80 border border-[#C5A059]/40 p-6 sm:p-10 lg:p-12 rounded-xl backdrop-blur-md max-w-5xl mx-auto shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Foto do Dr. Pedro Ribeiro */}
          <div className="md:col-span-5 lg:col-span-4 flex justify-center">
            <div className="relative group w-full max-w-xs md:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059]/40 to-amber-600/30 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative rounded-xl overflow-hidden border border-[#C5A059]/50 bg-slate-950 shadow-2xl">
                <img
                  src="/images/foto-nova-drpedro.jpeg"
                  alt="Dr. Pedro Ribeiro - Advogado Criminalista em Brasília"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 md:h-[400px] object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-center bg-slate-950/85 backdrop-blur-sm border border-amber-500/20 py-2 px-3 rounded-lg">
                  <span className="text-xs font-bold text-white block">Pedro Ribeiro</span>
                  <span className="text-[10px] text-[#C5A059] uppercase tracking-wider font-semibold">OAB/DF 68.705</span>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo & Biografia */}
          <div className="md:col-span-7 lg:col-span-8 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] block flex items-center gap-2">
                <Scale className="w-4 h-4" />
                SOBRE PEDRO RIBEIRO
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Técnica para analisar. Estratégia para decidir. <span className="text-[#C5A059]">Serenidade para agir.</span>
              </h2>
            </div>

            <div className="text-sm sm:text-base text-white/90 leading-relaxed font-dm space-y-3">
              <p>
                Na advocacia criminal, muitas decisões precisam ser tomadas quando o cliente e sua família estão vivendo um dos momentos mais difíceis de suas vidas. É justamente nessas situações que procuro trabalhar com mais racionalidade.
              </p>
              <p>
                Minha forma de advogar parte de uma compreensão profunda do problema antes da definição do caminho. Procuro entender os fatos, o contexto, os riscos envolvidos e as consequências de cada decisão possível.
              </p>
              <p>
                Tenho um perfil negociador e acredito que uma boa estratégia não é necessariamente aquela que produz mais confronto, mas aquela que melhor protege os interesses do cliente dentro das possibilidades jurídicas do caso. Quando existe espaço para diálogo e construção de uma solução, esse caminho deve ser considerado.
              </p>
              <p>
                Quando o caso exige firmeza, enfrentamento técnico e uma defesa combativa, a atuação precisa estar preparada para isso. Essa capacidade de adaptação é especialmente importante em situações complexas, sensíveis ou submetidas a forte pressão — inclusive quando existe exposição ou repercussão pública.
              </p>
              <p>
                Nesses momentos, procuro fazer aquilo que considero essencial na advocacia criminal: organizar o problema, separar o que é ruído do que juridicamente importa e tomar decisões estratégicas com serenidade.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="bg-[#C5A059] hover:bg-[#b08d48] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 sm:px-8 py-3.5 rounded inline-flex items-center gap-2 transition-all cursor-pointer shadow-lg w-full sm:w-auto justify-center"
              >
                <span>Falar Diretamente com Pedro Ribeiro</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
