import React from 'react';
import { X, Lock, PhoneCall, Shield, Building, Globe, MapPin, ExternalLink } from 'lucide-react';
import { FIRM_DETAILS, SENIOR_ATTORNEY } from '../data/firmData';

interface DirectLineModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const DirectLineModal: React.FC<DirectLineModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-slate-950/92 backdrop-blur-xl animate-in fade-in duration-300">
      
      <div className="relative w-full max-w-xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl shadow-black overflow-hidden my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-slate-950 border-b border-amber-500/20">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <PhoneCall className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-white">
                Direct Line &amp; Client Chambers
              </h3>
              <p className="font-sans-luxury text-xs text-amber-300/80 font-mono">
                24/7 CONFIDENTIAL ACCESS
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Senior Partner Box */}
          <div className="glass-panel-gold p-5 rounded-xl border border-amber-500/30 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center font-serif-luxury text-xl font-bold text-amber-300 shrink-0">
              AS
            </div>
            <div>
              <h4 className="font-serif-luxury font-bold text-base text-white">
                {SENIOR_ATTORNEY.name}
              </h4>
              <p className="font-sans-luxury text-xs text-amber-300/90 font-medium">
                {SENIOR_ATTORNEY.title}
              </p>
              <p className="font-sans-luxury text-[11px] text-slate-400 mt-0.5">
                {SENIOR_ATTORNEY.education}
              </p>
            </div>
          </div>

          {/* Hotline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <a
              href={`tel:${FIRM_DETAILS.phone}`}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-colors text-left group"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                Main Switchboard
              </span>
              <span className="font-mono font-bold text-sm text-amber-300 group-hover:text-amber-200">
                {FIRM_DETAILS.phone}
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">
                Mon - Fri (8:00 AM - 8:00 PM EST)
              </span>
            </a>

            <a
              href={`tel:${FIRM_DETAILS.emergencyPhone}`}
              className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 hover:border-amber-400 transition-colors text-left group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                  Emergency Hotline
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="font-mono font-bold text-sm text-amber-200 group-hover:text-amber-100">
                {FIRM_DETAILS.emergencyPhone}
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">
                24/7 Sovereign &amp; Arrest Counsel
              </span>
            </a>

          </div>

          {/* Location & Chambers */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{FIRM_DETAILS.address}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Globe className="w-4 h-4 text-slate-500 shrink-0" />
              <span>Global Affiliate Offices: London · Geneva · Zurich · Singapore</span>
            </div>
          </div>

          {/* Encrypted Login Button */}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full py-3.5 rounded-xl bg-gold-metallic hover:bg-gold-metallic-hover text-slate-950 font-sans-luxury font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>Enter Encrypted Client Vault</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
