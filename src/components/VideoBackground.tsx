import React, { useRef, useEffect, useState } from 'react';
import { AmbientLightingMode } from '../types';
import { VIDEO_SOURCES } from '../data/firmData';

interface VideoBackgroundProps {
  lightingMode: AmbientLightingMode;
  onLightingChange: (mode: AmbientLightingMode) => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  lightingMode,
  onLightingChange,
  isAudioPlaying,
  onToggleAudio
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Fallback procedural canvas simulation for the Attorney & Lady Justice Statue atmosphere
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let beamGrad: CanvasGradient;

    const createGradient = () => {
      beamGrad = ctx.createRadialGradient(
        width * 0.72, height * 0.35, 20,
        width * 0.72, height * 0.35, width * 0.55
      );

      if (lightingMode === 'classic-gold') {
        beamGrad.addColorStop(0, 'rgba(212, 175, 55, 0.14)');
        beamGrad.addColorStop(0.5, 'rgba(180, 130, 30, 0.05)');
        beamGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else if (lightingMode === 'midnight-obsidian') {
        beamGrad.addColorStop(0, 'rgba(100, 145, 220, 0.12)');
        beamGrad.addColorStop(0.5, 'rgba(30, 50, 100, 0.04)');
        beamGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        beamGrad.addColorStop(0, 'rgba(230, 190, 120, 0.16)');
        beamGrad.addColorStop(0.5, 'rgba(120, 70, 20, 0.06)');
        beamGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }
    };

    createGradient();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createGradient();
    };
    window.addEventListener('resize', handleResize);

    // Dust particles floating in light beam
    const dustParticles = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: -Math.random() * 0.4 - 0.1,
    }));

    let t = 0;

    const render = () => {
      if (!isVisible) return;

      t += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Light Beam Effect focused toward the right 60% (Lawyer & Statue Area)
      ctx.fillStyle = beamGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw floating dust particles
      dustParticles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 215, 150, ${p.alpha * (0.6 + Math.sin(t + p.x) * 0.4)})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(render);
        }
      });
    });
    
    observer.observe(canvas);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [lightingMode]);

  // Handle Video Loading, Seamless Looping, and Error Fallbacks
  const handleCanPlay = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleVideoError = () => {
    console.warn("Video background error occurred");
    setVideoError(true);
  };

  useEffect(() => {
    const videoElem = videoRef.current;
    if (!videoElem) return;

    videoElem.muted = true;
    videoElem.defaultMuted = true;
    videoElem.playsInline = true;

    const playPromise = videoElem.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsVideoLoaded(true);
        })
        .catch((err) => {
          console.warn("Retrying video playback with explicit muting:", err);
          videoElem.muted = true;
          videoElem.play().then(() => setIsVideoLoaded(true)).catch(() => {});
        });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none bg-slate-950">
      
      {/* Main Full-Screen Video Background */}
      <video
        ref={videoRef}
        src="/videos/meu_novo_video 2.mp4"
        poster="/videos/poster.jpg"
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        onCanPlay={handleCanPlay}
        onLoadedData={handleCanPlay}
        onLoadedMetadata={handleCanPlay}
        onPlay={handleCanPlay}
        onPlaying={handleCanPlay}
        onEnded={handleVideoEnded}
        onError={handleVideoError}
        className="absolute inset-0 w-full h-full object-cover object-[55%_center] md:object-[80%_center] xl:object-right-center"
        style={{
          filter:
            lightingMode === 'classic-gold'
              ? 'brightness(0.92) contrast(1.10) saturate(1.05)'
              : lightingMode === 'midnight-obsidian'
              ? 'brightness(0.85) contrast(1.18) saturate(0.85) hue-rotate(180deg)'
              : 'brightness(0.95) contrast(1.05)'
        }}
      >
        <source src="/videos/meu_novo_video 2.mp4" type="video/mp4" />
      </video>

      {/* Atmospheric Canvas Ray Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10 mix-blend-screen opacity-70"
      />

      {/* Subtle Right Column Lawyer & Statue Spotlight Lens Accent */}
      <div className="hidden lg:block absolute right-[10%] top-[20%] w-[38vw] h-[65vh] rounded-full bg-amber-500/10 blur-[90px] pointer-events-none mix-blend-soft-light animate-pulse-slow" />



    </div>
  );
};
