import React, { useState } from 'react';
import { X, Lock, CheckCircle2, User, Mail, Phone, Send } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    practiceArea: 'Atuação em Flagrante',
    caseSummary: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const text = `*Nova Solicitação de Agendamento (Modal)*\n\n*Nome:* ${formData.fullName}\n*E-mail:* ${formData.email}\n*Telefone:* ${formData.phone}\n*Assunto:* ${formData.practiceArea}\n*Resumo da Situação:* ${formData.caseSummary}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5561986299098?text=${encodedText}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300 font-dm">
      
      <div className="relative w-full max-w-xl bg-slate-900 border border-[#C5A059]/40 rounded-xl shadow-2xl overflow-hidden my-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 bg-slate-950 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#C5A059]/20 border border-[#C5A059]/40">
              <Lock className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Agendar Consulta Jurídica
              </h3>
              <p className="text-xs text-[#C5A059] font-medium">
                ATENDIMENTO 100% CONFIDENCIAL E SIGILOSO
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-[#C5A059]/20 border border-[#C5A059] text-[#C5A059] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">
              Solicitação Enviada com Sucesso!
            </h4>
            <p className="text-xs sm:text-sm text-white/90 max-w-md mx-auto leading-relaxed">
              Sua consulta foi registrada com sigilo total. Nossa equipe jurídica entrará em contato em breve para confirmar o horário agendado.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded bg-[#C5A059] text-slate-950 font-bold text-xs uppercase tracking-wider"
            >
              Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-white uppercase mb-1">
                  Nome Completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full bg-slate-950 border border-white/20 focus:border-[#C5A059] rounded pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-white uppercase mb-1">
                  E-mail *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-white/40" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seuemail@exemplo.com"
                    className="w-full bg-slate-950 border border-white/20 focus:border-[#C5A059] rounded pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-white uppercase mb-1">
                  Telefone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-white/40" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-slate-950 border border-white/20 focus:border-[#C5A059] rounded pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-white uppercase mb-1">
                  Área de Interesse
                </label>
                <select
                  value={formData.practiceArea}
                  onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                  className="w-full bg-slate-950 border border-white/20 focus:border-[#C5A059] rounded px-3 py-2.5 text-sm text-white focus:outline-none"
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
              <label className="block text-xs font-bold text-white uppercase mb-1">
                Resumo da Situação Jurídica
              </label>
              <textarea
                rows={3}
                value={formData.caseSummary}
                onChange={(e) => setFormData({ ...formData, caseSummary: e.target.value })}
                placeholder="Descreva brevemente como podemos te ajudar..."
                className="w-full bg-slate-950 border border-white/20 focus:border-[#C5A059] rounded p-3 text-sm text-white focus:outline-none resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs uppercase tracking-wider text-white/60 hover:text-white"
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-3 rounded bg-[#C5A059] hover:bg-[#b08d48] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <span>Confirmar Agendamento</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

