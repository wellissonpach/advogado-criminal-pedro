import React from 'react';
import { Award, ShieldCheck, Scale, Trophy, Globe2 } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const PracticeStatsBar: React.FC = () => {
  const stats = [
    {
      label: "Casos & Defesas Atendidas",
      value: FIRM_DETAILS.totalRecovered,
      icon: <Trophy className="w-4 h-4 text-amber-400" />
    },
    {
      label: "Atuação Especializada",
      value: "Direito Penal",
      icon: <Scale className="w-4 h-4 text-amber-400" />
    },
    {
      label: "Jurisdições Atendidas",
      value: FIRM_DETAILS.activeJurisdictions,
      icon: <Globe2 className="w-4 h-4 text-amber-400" />
    },
    {
      label: "Tradição & Ética",
      value: "Desde 2012",
      icon: <Award className="w-4 h-4 text-amber-400" />
    }
  ];

  return (
    <div className="relative z-20 w-full bg-[#0A0A0A]/95 border-t border-b border-[#C5A059]/25 backdrop-blur-xl py-8 my-auto shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {stats.map((s, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center md:items-start text-center md:text-left ${
                idx > 0 ? 'pt-4 md:pt-0 md:pl-8' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-1.5 h-1.5 bg-[#C5A059] rotate-45" />
                <span className="font-sans-luxury text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
                  {s.label}
                </span>
              </div>
              <span className="serif font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {s.value}
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};
