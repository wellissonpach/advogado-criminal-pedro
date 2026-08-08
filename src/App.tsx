import React, { useState } from 'react';
import { Header } from './components/Header';
import { VideoBackground } from './components/VideoBackground';
import { CinematicOverlay } from './components/CinematicOverlay';
import { HeroContent } from './components/HeroContent';
import { LyonexySections } from './components/LyonexySections';
import { ConsultationModal } from './components/ConsultationModal';
import { AmbientLightingMode } from './types';

export default function App() {
  const [lightingMode, setLightingMode] = useState<AmbientLightingMode>('classic-gold');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white font-dm overflow-x-hidden antialiased">
      
      {/* 1. Header with Top Schedule Bar & Lyonexy Logo */}
      <Header
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenPracticeAreas={() => {}}
        onOpenDirectLine={() => {}}
      />

      {/* 2. Full-Screen Hero Section Container */}
      <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
        
        {/* Untouched Infinite Video Background Layer */}
        <VideoBackground
          lightingMode={lightingMode}
          onLightingChange={setLightingMode}
          isAudioPlaying={isAudioPlaying}
          onToggleAudio={() => setIsAudioPlaying(!isAudioPlaying)}
        />

        {/* Untouched Dark Transparent Overlay */}
        <CinematicOverlay />

        {/* Hero Content in Portuguese & DM Sans */}
        <HeroContent
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenPracticeAreas={() => {}}
        />

      </section>

      {/* 3. Recreated Page Sections (Sub-Hero Cards, Nossas Vantagens, Áreas de Atuação, Equipe, Depoimentos, Contato, Rodapé) */}
      <LyonexySections
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* 4. Consultation Modal in Portuguese */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

    </div>
  );
}

