import React from 'react';
import { ArrowRight, LockKeyhole, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenConsultation: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenConsultation }) => {
  const testimonials = [
    {
      text: "O advogado foi transparente desde o início. Não prometeu resultado, mas explicou exatamente o que poderia acontecer e como a defesa seria feita. Isso nos deu muita segurança durante um processo desgastante."
    },
    {
      text: "A atuação não foi apenas técnica, mas também atenta ao sigilo do caso. Em uma situação de muita exposição, a discrição do escritório foi fundamental para preservar nossa imagem e nossos negócios."
    },
    {
      text: "Procuramos o escritório em uma situação de urgência e fomos atendidos com rapidez. As orientações dadas nas primeiras horas após a prisão foram decisivas para o resultado do caso."
    }
  ];

  return (
    <section id="depoimentos" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] flex items-center justify-center gap-2">
          <LockKeyhole className="w-4 h-4" />
          DISCRIÇÃO TAMBÉM É PARTE DA DEFESA
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
          O sigilo profissional e a <span className="text-[#C5A059]">preservação da imagem</span> do cliente são levados a sério.
        </h2>
        <p className="text-sm text-white/80 max-w-2xl mx-auto mt-2">
          Por essa razão, os relatos abaixo foram anonimizados para proteger a privacidade de quem confiou em nosso trabalho.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {testimonials.map((testimonial, index) => (
          <article 
            key={index} 
            className="bg-slate-900/60 border border-[#C5A059]/20 p-8 rounded-xl backdrop-blur-sm relative"
          >
            <Quote className="w-8 h-8 text-[#C5A059]/20 absolute top-6 left-6" />
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-dm italic relative z-10 pt-6">
              "{testimonial.text}"
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <span className="text-xs text-white/50">AN</span>
              </div>
              <span className="text-xs font-bold text-white/50 tracking-wider">CLIENTE ANÔNIMO</span>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={onOpenConsultation}
          className="bg-[#C5A059] hover:bg-[#b08d48] text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg w-full sm:w-auto"
        >
          <span>Agendar uma consulta</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
