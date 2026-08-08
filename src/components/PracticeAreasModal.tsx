import React from 'react';
import { X, Building2, Scale, ShieldAlert, Landmark, Gavel, ArrowRight, CheckCircle } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/firmData';

interface PracticeAreasModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPractice: (id: string) => void;
}

export const PracticeAreasModal: React.FC<PracticeAreasModalProps> = ({
  isOpen,
  onClose,
  onSelectPractice
}) => {
  if (!isOpen) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-amber-400" />;
      case 'Scale': return <Scale className="w-6 h-6 text-amber-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-amber-400" />;
      case 'Landmark': return <Landmark className="w-6 h-6 text-amber-400" />;
      case 'Gavel': return <Gavel className="w-6 h-6 text-amber-400" />;
      default: return <Scale className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-slate-950/92 backdrop-blur-xl animate-in fade-in duration-300">
      
      <div className="relative w-full max-w-4xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl shadow-black overflow-hidden my-auto max-h-[88vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 bg-slate-950 border-b border-amber-500/20 shrink-0">
          <div>
            <span className="font-mono text-[10px] tracking-[0.25em] text-amber-400 uppercase">
              EXCELÊNCIA &amp; ESPECIALIZAÇÃO
            </span>
            <h3 className="font-serif-luxury text-2xl font-bold text-white">
              Áreas de Atuação em Defesa Criminal
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRACTICE_AREAS.map((area) => (
              <div
                key={area.id}
                className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 group-hover:scale-110 transition-transform">
                      {getIcon(area.iconName)}
                    </div>
                    <span className="font-mono text-[10px] tracking-wider text-amber-300/80 uppercase px-2.5 py-1 rounded bg-slate-950 border border-slate-800">
                      {area.keyStats}
                    </span>
                  </div>

                  <h4 className="font-serif-luxury font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                    {area.title}
                  </h4>

                  <p className="font-sans-luxury text-xs text-slate-300 font-light leading-relaxed">
                    {area.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block mb-1">
                      Resultados e Precedentes
                    </span>
                    {area.notableCases.map((c, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="pt-5 mt-4 border-t border-slate-800/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    Advogado Responsável: Dr. Pedro Ribeiro
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectPractice(area.id);
                    }}
                    className="flex items-center gap-1.5 text-xs font-sans-luxury font-bold tracking-wider text-amber-400 hover:text-amber-300 uppercase"
                  >
                    <span>Consultar Área</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Footer Bar */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 text-center shrink-0">
          <p className="font-sans-luxury text-xs text-slate-400">
            Para urgências ou atendimento em plantão criminal, entre em contato com nosso escritório:{' '}
            <strong className="text-amber-300 font-mono">+55 (11) 99999-8888</strong>
          </p>
        </div>

      </div>
    </div>
  );
};
