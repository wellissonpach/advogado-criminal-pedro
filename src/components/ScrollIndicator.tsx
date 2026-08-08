import React from 'react';
import { ChevronDown } from 'lucide-react';

export const ScrollIndicator: React.FC = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: 'smooth'
    });
  };

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2.5 cursor-pointer group">
      <button
        onClick={handleScrollDown}
        className="flex flex-col items-center focus:outline-none focus:ring-1 focus:ring-amber-400/50 p-2 opacity-70 group-hover:opacity-100 transition-opacity"
        aria-label="Scroll down to explore firm overview"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/70 via-[#C5A059] to-transparent animate-pulse" />
        <span className="font-sans-luxury text-[9px] uppercase tracking-[0.4em] text-white/60 group-hover:text-[#C5A059] transition-colors mt-1 font-semibold">
          Scroll to Explore
        </span>
      </button>
    </div>
  );
};
