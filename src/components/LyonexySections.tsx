import React, { useState } from 'react';
import { ArrowRight, Calendar, MessageSquare, Send, Instagram } from 'lucide-react';
import { StrategySection } from './sections/StrategySection';
import { PracticeAreasSection } from './sections/PracticeAreasSection';
import { AboutSection } from './sections/AboutSection';
import { UrgentSituationsSection } from './sections/UrgentSituationsSection';
import { DefenseConstructionSection } from './sections/DefenseConstructionSection';
import { ServicePrinciplesSection } from './sections/ServicePrinciplesSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FAQSection } from './sections/FAQSection';
import { FinalCallSection } from './sections/FinalCallSection';

interface LyonexySectionsProps {
  onOpenConsultation: () => void;
  onOpenDirectLine?: () => void;
}

export const LyonexySections: React.FC<LyonexySectionsProps> = ({ onOpenConsultation, onOpenDirectLine = () => {} }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    area: 'Atuação em Flagrante',
    mensagem: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `*Nova Solicitação de Contato (Site)*\n\n*Nome:* ${formData.nome}\n*E-mail:* ${formData.email}\n*Telefone:* ${formData.telefone}\n*Assunto:* ${formData.area}\n*Mensagem:* ${formData.mensagem}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5561986299098?text=${encodedText}`, '_blank');

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        area: 'Atuação em Flagrante',
        mensagem: ''
      });
    }, 4000);
  };

  return (
    <div className="relative z-20 w-full font-dm text-white space-y-24 pb-20">
      
      {/* 1. Quick Appointment Bar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="bg-slate-900/90 border border-[#C5A059]/40 p-6 rounded-lg backdrop-blur-md flex items-start gap-4 shadow-lg">
            <div className="p-3 bg-[#C5A059]/20 rounded border border-[#C5A059]/50 text-[#C5A059]">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059]">Agendamento Rápido</span>
              <h3 className="text-lg font-bold text-white">Agendar Consulta</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Reserve um horário com nossos advogados especialistas para análise detalhada do seu caso.
              </p>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] font-bold pt-2 hover:underline uppercase tracking-wider cursor-pointer"
              >
                <span>Agendar Horário</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-white/10 p-6 rounded-lg backdrop-blur-md flex items-start gap-4 shadow-lg">
            <div className="p-3 bg-white/10 rounded border border-white/20 text-[#C5A059]">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059]">Atendimento Personalizado</span>
              <h3 className="text-lg font-bold text-white">Consultoria Especializada</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Atendimento presencial ou online com total sigilo, agilidade e segurança jurídica.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-1.5 text-xs text-white font-bold hover:text-[#C5A059] uppercase tracking-wider cursor-pointer transition-colors"
                >
                  <span>Falar Conosco</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-white/30">•</span>
                <a
                  href="https://www.instagram.com/pedro.ribeiroadv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] font-semibold hover:underline"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Sessão: Quando o Problema Exige Estratégia */}
      <StrategySection onOpenConsultation={onOpenConsultation} />

      {/* 3. Sessão: Atuação em Direito Criminal */}
      <PracticeAreasSection onOpenConsultation={onOpenConsultation} />

      {/* 4. Sessão: Sobre Pedro Ribeiro */}
      <AboutSection onOpenConsultation={onOpenConsultation} />

      {/* 5. Sessão: Situações Urgentes */}
      <UrgentSituationsSection onOpenConsultation={onOpenConsultation} />

      {/* 6. Sessão: Como a atuação é construída */}
      <DefenseConstructionSection />

      {/* 7. Sessão: O que orienta o atendimento */}
      <ServicePrinciplesSection />

      {/* 8. Sessão: Discrição também é parte da defesa */}
      <TestimonialsSection onOpenConsultation={onOpenConsultation} />

      {/* 9. Sessão: Perguntas Frequentes */}
      <FAQSection />

      {/* 10. Sessão: Chamada Final */}
      <FinalCallSection onOpenConsultation={onOpenConsultation} onOpenDirectLine={onOpenDirectLine} />

      {/* 11. Formulário de Contato */}
      <section id="contato" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-white/10 p-6 sm:p-10 rounded-xl backdrop-blur-md space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059]">
              ENTRE EM CONTATO
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Agende sua Consulta
            </h2>
            <p className="text-xs sm:text-sm text-white/80">
              Preencha os dados abaixo e entraremos em contato o mais rápido possível.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-[#C5A059]/20 border border-[#C5A059] text-white p-6 rounded text-center space-y-2 animate-in fade-in">
              <h3 className="text-lg font-bold text-[#C5A059]">Mensagem Enviada com Sucesso!</h3>
              <p className="text-xs text-white">Nossa equipe entrará em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Digite seu nome completo"
                    className="w-full bg-slate-950/80 border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1">
                    Seu E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seuemail@exemplo.com"
                    className="w-full bg-slate-950/80 border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    placeholder="(61) 99999-9999"
                    className="w-full bg-slate-950/80 border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1">
                    Assunto
                  </label>
                  <select
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full bg-slate-950/80 border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Atuação em Flagrante">Atuação em Flagrante</option>
                    <option value="Audiência de Custódia">Audiência de Custódia</option>
                    <option value="Defesa Criminal">Defesa Criminal</option>
                    <option value="Consultoria">Consultoria Jurídica</option>
                    <option value="Outro">Outro Assunto</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1">
                  Sua Mensagem *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  placeholder="Descreva brevemente a sua situação..."
                  className="w-full bg-slate-950/80 border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C5A059] hover:bg-[#b08d48] text-slate-950 font-bold text-xs uppercase tracking-wider py-4 rounded shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Enviar Mensagem</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 12. Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-white/10 text-center text-xs text-white/70 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="#hero" className="flex items-center focus:outline-none">
            <img 
              src="/logo/logo.webp" 
              alt="Pedro Ribeiro Advogado" 
              className="h-14 sm:h-16 md:h-20 w-auto object-contain hover:opacity-90 transition-opacity filter drop-shadow-md"
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = "/logo/logo.webp";
              }}
            />
          </a>

          <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6 text-white/80 uppercase tracking-wider text-[11px]">
            <a href="#hero" className="hover:text-[#C5A059] transition-colors">Início</a>
            <a href="#sobre" className="hover:text-[#C5A059] transition-colors">Sobre o Advogado</a>
            <a href="#areas" className="hover:text-[#C5A059] transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-[#C5A059] transition-colors">Contato</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/pedro.ribeiroadv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-white/20 hover:border-[#C5A059] text-white hover:text-[#C5A059] text-xs font-semibold transition-all group"
            >
              <Instagram className="w-4 h-4 text-[#C5A059] group-hover:scale-110 transition-transform" />
              <span>@pedro.ribeiroadv</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-white/5 text-white/40">
          <p className="text-[11px]">
            © 2026 Pedro Ribeiro Advogado. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/pedro.ribeiroadv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059]/80 hover:text-[#C5A059] text-[11px] hover:underline"
            >
              Instagram Oficial
            </a>
            <span>•</span>
            <span>OAB/DF 68.705</span>
          </div>
        </div>
      </footer>

    </div>
  );
};


