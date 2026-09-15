import React, { useState } from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '5561986299098';
  const defaultMessage = encodeURIComponent('Olá, Dr. Pedro Ribeiro! Gostaria de falar sobre um caso criminal.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip Badge */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/95 border border-[#C5A059]/50 text-white text-xs font-semibold shadow-2xl backdrop-blur-md transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-90 translate-x-1'
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-white tracking-wide">Plantão 24h: <strong className="text-[#F5DF9E] font-bold">Fale no WhatsApp</strong></span>
      </a>

      {/* Floating Metallic Gold WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Dr. Pedro Ribeiro no WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-[0_10px_25px_rgba(197,160,89,0.45)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.7)] cursor-pointer"
      >
        {/* Ambient Gold Pulse Glow */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#F5DF9E] via-[#D4AF37] to-[#8C6D2B] opacity-50 blur-sm group-hover:opacity-85 transition-opacity duration-300 animate-pulse-slow"></span>

        {/* Metallic Gold Body */}
        <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-br from-[#FFF5D6] via-[#D4AF37] to-[#8C6D2B] shadow-inner">
          <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-tr from-[#A68028] via-[#D4AF37] to-[#FDE8A5] relative overflow-hidden">
            {/* Metallic Sheen Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-black/25 pointer-events-none rounded-full" />
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 transform transition-transform duration-700 group-hover:translate-x-full" />

            {/* Official WhatsApp Icon in Deep Contrast Charcoal / Black */}
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-slate-950 fill-current drop-shadow-sm transition-transform duration-300 group-hover:rotate-6"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};
