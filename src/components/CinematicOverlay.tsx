import React from 'react';

export const CinematicOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 w-full h-full select-none">
      
      {/* 0. Soft dark backdrop */}
      <div className="absolute inset-0 bg-black/50 w-full h-full" />

      {/* 1. Left-to-Right gradient: dark background for text on left, clear view of video on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/60 to-transparent w-full h-full" />

      {/* 2. Top Header & Bottom Gradients for smooth section framing */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0A0A]/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />

      {/* 3. Geometric Balance Axis Lines & Corner Frames */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-16 h-px bg-white/15" />
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-16 h-px bg-white/15" />
      <div className="absolute bottom-0 right-0 w-1/5 h-1/5 border-r border-b border-[#C5A059]/20 m-8" />
      <div className="absolute top-0 left-0 w-1/5 h-1/5 border-l border-t border-white/10 m-8" />

    </div>
  );
};
