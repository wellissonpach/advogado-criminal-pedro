import React, { useState } from 'react';
import { Check, ArrowRight, Calendar, MessageSquare, Send } from 'lucide-react';

interface LyonexySectionsProps {
  onOpenConsultation: () => void;
}

export const LyonexySections: React.FC<LyonexySectionsProps> = ({ onOpenConsultation }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    area: 'Direito Civil',
    mensagem: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        area: 'Direito Civil',
        mensagem: ''
      });
    }, 4000);
  };

  return (
    <div className="relative z-20 w-full font-dm text-white space-y-24 pb-20">
      
      {/* 1. Quick Appointment Bar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="bg-slate-900/90 border border-[#C5A059]/40 p-6 rounded-lg backdrop-blur-md flex items-start gap-4">
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
                className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] font-bold pt-2 hover:underline uppercase tracking-wider"
              >
                <span>Agendar Horário</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-white/10 p-6 rounded-lg backdrop-blur-md flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded border border-white/20 text-[#C5A059]">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059]">Atendimento Personalizado</span>
              <h3 className="text-lg font-bold text-white">Consultoria Especializada</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Atendimento presencial ou online com total sigilo, agilidade e segurança jurídica.
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-1.5 text-xs text-white font-bold pt-2 hover:text-[#C5A059] uppercase tracking-wider"
              >
                <span>Falar Conosco</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Section: NOSSAS VANTAGENS / Defesa Penal e Garantias Fundamentais */}
      <section id="vantagens" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6 sm:p-10 backdrop-blur-lg">
          <div className="max-w-3xl space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059]">
                DEFESA PENAL ESPECIALIZADA
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Atuação Combativa em <span className="text-[#C5A059]">Defesa Criminal</span> e <span className="text-[#C5A059]">Direitos Fundamentais</span>
              </h2>
            </div>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Com foco exclusivo na advocacia criminal, o Dr. Pedro Ribeiro oferece defesa técnica intransigente, ética e altamente estratégica, priorizando a proteção da liberdade, a dignidade humana e o respeito às garantias constitucionais.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-sm text-white">
                <div className="w-5 h-5 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#C5A059] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Atendimento emergencial e plantão 24 horas para flagrantes e prisões</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <div className="w-5 h-5 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#C5A059] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Atuação desde o Inquérito Policial até STJ e STF em Brasília</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <div className="w-5 h-5 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#C5A059] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Defesa técnica pautada pela ética, integridade e rigoroso sigilo profissional</span>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="bg-[#C5A059] hover:bg-[#b08d48] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded inline-flex items-center gap-2 cursor-pointer transition-all"
              >
                <span>Falar com o Advogado</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Section: SERVIÇOS DE DEFESA CRIMINAL DO DR. PEDRO RIBEIRO */}
      <section id="areas" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059]">
            SERVIÇOS ESPECIALIZADOS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
            Como o <span className="text-[#C5A059]">Dr. Pedro Ribeiro</span> Pode Te Ajudar
          </h2>
          <p className="text-sm text-white/80 max-w-2xl mx-auto">
            Atuação jurídica criminal incansável, estratégica e pautada na ética para resguardar sua liberdade e garantir a aplicação da verdadeira justiça.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Serviço 1: Atuação em flagrante */}
          <div className="bg-slate-900/80 border border-amber-500/30 p-6 rounded-xl backdrop-blur-md space-y-4 hover:border-[#C5A059] transition-all flex flex-col justify-between group shadow-lg">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-[#C5A059] text-[11px] font-bold uppercase tracking-wider">
                <span>Plantão 24h &amp; Urgência</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
                Atuação em Flagrante
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-dm">
                Nada de pânico, se azedar e for preso em flagrante, solicite o contato comigo para garantir que seus direitos sejam respeitados desde o início.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="pt-2 text-xs font-bold text-[#C5A059] hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Solicitar Atendimento de Urgência</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Serviço 2: Audiência de custódia */}
          <div className="bg-slate-900/80 border border-white/10 p-6 rounded-xl backdrop-blur-md space-y-4 hover:border-[#C5A059]/60 transition-all flex flex-col justify-between group shadow-lg">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-[#C5A059] text-[11px] font-bold uppercase tracking-wider">
                <span>Preservação da Liberdade</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
                Audiência de Custódia
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-dm">
                Acompanho você ou seu familiar na audiência de custódia, buscando evitar a prisão desnecessária e garantir a justiça desde o começo.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="pt-2 text-xs font-bold text-[#C5A059] hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Garantir Defesa na Custódia</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Serviço 3: Defesa criminal */}
          <div className="bg-slate-900/80 border border-white/10 p-6 rounded-xl backdrop-blur-md space-y-4 hover:border-[#C5A059]/60 transition-all flex flex-col justify-between group shadow-lg">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-[#C5A059] text-[11px] font-bold uppercase tracking-wider">
                <span>Defesa Técnica Integral</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
                Defesa Criminal
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-dm">
                Se você está enfrentando acusações criminais, meu papel é te defender com firmeza e lutar por seus direitos em todas as etapas do processo.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="pt-2 text-xs font-bold text-[#C5A059] hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Iniciar Minha Defesa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Serviço 4: Recursos e apelações */}
          <div className="bg-slate-900/80 border border-white/10 p-6 rounded-xl backdrop-blur-md space-y-4 hover:border-[#C5A059]/60 transition-all flex flex-col justify-between group shadow-lg">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-[#C5A059] text-[11px] font-bold uppercase tracking-wider">
                <span>Revisão &amp; Nova Chance</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
                Recursos e Apelações
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-dm">
                Achou injusta a decisão do juiz? Vamos analisar o caso e elaborar um recurso para buscar a revisão da sentença e uma nova chance de justiça.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="pt-2 text-xs font-bold text-[#C5A059] hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Analisar Meu Recurso</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Serviço 5: Consultoria jurídica */}
          <div className="bg-slate-900/80 border border-white/10 p-6 rounded-xl backdrop-blur-md space-y-4 hover:border-[#C5A059]/60 transition-all flex flex-col justify-between group shadow-lg md:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-[#C5A059] text-[11px] font-bold uppercase tracking-wider">
                <span>Prevenção &amp; Estratégia</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
                Consultoria Jurídica
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-dm">
                Te ajudo a entender suas opções legais antes que a situação fique ainda pior. Planejamento jurídico evita muitas dores de cabeça no futuro.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="pt-2 text-xs font-bold text-[#C5A059] hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Agendar Consultoria</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. Section: SOBRE O ADVOGADO (100% Pedro Ribeiro) */}
      <section id="sobre" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 border border-[#C5A059]/40 p-6 sm:p-10 lg:p-12 rounded-xl backdrop-blur-md max-w-5xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Foto do Dr. Pedro Ribeiro */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center">
              <div className="relative group w-full max-w-xs md:max-w-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059]/40 to-amber-600/30 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative rounded-xl overflow-hidden border border-[#C5A059]/50 bg-slate-950 shadow-2xl">
                  <img
                    src="/images/dr-pedro.png"
                    alt="Dr. Pedro Ribeiro - Advogado Criminalista"
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 md:h-[400px] object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center bg-slate-950/85 backdrop-blur-sm border border-amber-500/20 py-2 px-3 rounded-lg">
                    <span className="text-xs font-bold text-white block">Dr. Pedro Ribeiro</span>
                    <span className="text-[10px] text-[#C5A059] uppercase tracking-wider font-semibold">Advogado Criminalista</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Conteúdo & Biografia */}
            <div className="md:col-span-7 lg:col-span-8 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C5A059] block">
                  ADVOCACIA CRIMINAL PERSONALIZADA
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Dr. Pedro Ribeiro
                </h2>
              </div>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-dm">
                Advogado especialista focado exclusivamente na Defesa Penal. Com dedicação integral e acompanhamento direto, o Dr. Pedro Ribeiro assume pessoalmente a condução de cada caso, garantindo atenção minuciosa, ética inabalável e combate fático contra qualquer abuso de autoridade ou constrangimento ilegal.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="bg-slate-950/50 p-3 rounded-lg border border-white/5">
                  <span className="text-[11px] text-[#C5A059] uppercase font-bold tracking-wider block">Atuação</span>
                  <span className="text-xs font-semibold text-white">100% Focada em Direito Penal</span>
                </div>
                <div className="bg-slate-950/50 p-3 rounded-lg border border-white/5">
                  <span className="text-[11px] text-[#C5A059] uppercase font-bold tracking-wider block">Atendimento</span>
                  <span className="text-xs font-semibold text-white">Direto com o Advogado</span>
                </div>
                <div className="bg-slate-950/50 p-3 rounded-lg border border-white/5">
                  <span className="text-[11px] text-[#C5A059] uppercase font-bold tracking-wider block">Disponibilidade</span>
                  <span className="text-xs font-semibold text-white">Urgência &amp; Plantão 24h</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="bg-[#C5A059] hover:bg-[#b08d48] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 sm:px-8 py-3.5 rounded inline-flex items-center gap-2 transition-all cursor-pointer shadow-lg w-full sm:w-auto justify-center"
                >
                  <span>Falar Diretamente com Dr. Pedro Ribeiro</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Section: FORMULÁRIO DE CONTATO */}
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
              Preencha os dados abaixo e entraremos em contato em até 24 horas.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-[#C5A059]/20 border border-[#C5A059] text-white p-6 rounded text-center space-y-2 animate-in fade-in">
              <h3 className="text-lg font-bold text-[#C5A059]">Mensagem Enviada com Sucesso!</h3>
              <p className="text-xs text-white">Nossa equipe jurídica entrará em contato em breve.</p>
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
                    placeholder="(11) 99999-9999"
                    className="w-full bg-slate-950/80 border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1">
                    Área de Interesse
                  </label>
                  <select
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full bg-slate-950/80 border border-white/20 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Atuação em Flagrante">Atuação em Flagrante</option>
                    <option value="Audiência de Custódia">Audiência de Custódia</option>
                    <option value="Defesa Criminal">Defesa Criminal</option>
                    <option value="Recursos e Apelações">Recursos e Apelações</option>
                    <option value="Consultoria Jurídica">Consultoria Jurídica</option>
                    <option value="Outro Assunto Penal">Outro Assunto Penal</option>
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
                  placeholder="Descreva brevemente a sua situação jurídica..."
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

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-white/10 text-center text-xs text-white/70 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#hero" className="flex items-center focus:outline-none">
            <img 
              src="/logo/logo.png" 
              alt="Pedro Ribeiro Advogado" 
              className="h-14 sm:h-16 md:h-20 w-auto object-contain hover:opacity-90 transition-opacity filter drop-shadow-md"
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = "/logo/logo.png";
              }}
            />
          </a>
          <div className="flex items-center gap-6 text-white/80 uppercase tracking-wider text-[11px]">
            <a href="#hero" className="hover:text-[#C5A059]">Início</a>
            <a href="#sobre" className="hover:text-[#C5A059]">Sobre o Advogado</a>
            <a href="#areas" className="hover:text-[#C5A059]">Serviços</a>
            <a href="#contato" className="hover:text-[#C5A059]">Contato</a>
          </div>
        </div>
        <p className="text-white/50 text-[11px]">
          © 2026 Pedro Ribeiro Advogado. Todos os direitos reservados.
        </p>
      </footer>

    </div>
  );
};
