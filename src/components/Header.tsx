import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Instagram } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenPracticeAreas: () => void;
  onOpenDirectLine: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-dm">
      
      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl'
            : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo on top-left */}
            <a href="#hero" className="flex items-center shrink-0 focus:outline-none group">
              <img 
                src="/logo/logo.webp" 
                alt="Pedro Ribeiro Advogado" 
                className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-lg"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = "/logo/logo.webp";
                }}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-dm font-medium tracking-wider uppercase text-white">
              <a href="#hero" className="hover:text-[#C5A059] transition-colors">INÍCIO</a>
              <a href="#sobre" className="hover:text-[#C5A059] transition-colors">SOBRE O ADVOGADO</a>
              <a href="#areas" className="hover:text-[#C5A059] transition-colors">SERVIÇOS</a>
              <a href="#contato" className="hover:text-[#C5A059] transition-colors">CONTATO</a>
            </nav>

            {/* Action CTA Button & Instagram Link */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://www.instagram.com/pedro.ribeiroadv/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @pedro.ribeiroadv"
                title="Siga @pedro.ribeiroadv no Instagram"
                className="p-2.5 rounded border border-white/20 bg-slate-900/60 hover:bg-[#C5A059]/10 hover:border-[#C5A059] text-white hover:text-[#C5A059] transition-all duration-300 flex items-center justify-center group"
              >
                <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>

              <button
                onClick={onOpenConsultation}
                className="bg-[#C5A059] hover:bg-[#b08d48] text-slate-950 font-dm font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded transition-all duration-300 cursor-pointer shadow-lg flex items-center gap-2"
              >
                <span>Agendar Consulta</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Toggle Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="https://www.instagram.com/pedro.ribeiroadv/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @pedro.ribeiroadv"
                className="p-1.5 rounded border border-white/20 bg-slate-900/60 text-white hover:text-[#C5A059] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenConsultation}
                className="bg-[#C5A059] text-slate-950 font-dm font-bold text-[11px] tracking-wider uppercase px-3 py-1.5 rounded shadow-sm"
              >
                Consulta
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-[#C5A059] focus:outline-none"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300 font-dm">
          <div className="flex flex-col space-y-3 text-sm uppercase tracking-wider text-white">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#C5A059]"
            >
              INÍCIO
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#C5A059]"
            >
              SOBRE O ADVOGADO
            </a>
            <a
              href="#areas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#C5A059]"
            >
              SERVIÇOS
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#C5A059]"
            >
              CONTATO
            </a>
          </div>

          <div className="pt-2 space-y-2">
            <a
              href="https://www.instagram.com/pedro.ribeiroadv/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-slate-900 border border-white/20 hover:border-[#C5A059] text-white hover:text-[#C5A059] font-dm font-semibold text-xs uppercase py-2.5 rounded flex items-center justify-center gap-2 tracking-wider transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#C5A059]" />
              <span>@pedro.ribeiroadv no Instagram</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full bg-[#C5A059] text-slate-950 font-dm font-bold text-xs uppercase py-3 rounded text-center tracking-wider"
            >
              Agendar Consulta Agora
            </button>
          </div>
        </div>
      )}

    </header>
  );
};

