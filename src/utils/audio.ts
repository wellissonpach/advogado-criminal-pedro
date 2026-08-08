// Web Audio API generator for warm acoustic law firm chamber ambiance

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let isPlaying = false;
let oscillators: OscillatorNode[] = [];

export function toggleAmbientAudio(): boolean {
  if (isPlaying) {
    stopAmbientAudio();
    return false;
  } else {
    startAmbientAudio();
    return true;
  }
}

export function startAmbientAudio() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 3); // Soft fade in

    // Warm cello / organ chamber harmonics (A2, E3, A3, C#4 frequencies for legal elegance)
    const frequencies = [110.00, 164.81, 220.00, 277.18];

    oscillators = frequencies.map((freq, i) => {
      if (!audioCtx || !masterGain) return null as unknown as OscillatorNode;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      // Subtle detune for natural warmth
      osc.detune.setValueAtTime((i - 1.5) * 4, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.25 / (i + 1), audioCtx.currentTime);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start();
      return osc;
    }).filter(Boolean);

    masterGain.connect(audioCtx.destination);
    isPlaying = true;
  } catch (err) {
    console.warn("Audio Context init error:", err);
    isPlaying = false;
  }
}

export function stopAmbientAudio() {
  if (masterGain && audioCtx) {
    masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.5);
    setTimeout(() => {
      oscillators.forEach(osc => {
        try { osc.stop(); } catch {}
      });
      oscillators = [];
      isPlaying = false;
    }, 1500);
  } else {
    isPlaying = false;
  }
}
