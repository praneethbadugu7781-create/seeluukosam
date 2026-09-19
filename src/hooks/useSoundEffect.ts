"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function useSoundEffect() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const ambientOscillatorsRef = useRef<{ [key: string]: any }>({});
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);

  // Initialize or resume AudioContext
  const getAudioContext = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  // Soft romantic harp chime for standard taps/interactions
  const playChime = useCallback((freq = 523.25, type: OscillatorType = "sine") => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      // Gentle pitch bend up
      osc.frequency.exponentialRampToValueAtTime(freq * 1.05, ctx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch (e) {
      console.warn("Audio chime prevented", e);
    }
  }, [getAudioContext]);

  // Playful pop/woosh sound when Maybe button dodges
  const playDodge = useCallback(() => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(650, ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } catch (e) {
      // ignore
    }
  }, [getAudioContext]);

  // Grand celebration arpeggio when YES is pressed
  const playCelebration = useCallback(() => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51, 1567.98]; // C5, E5, G5, C6, E6, G6
      notes.forEach((freq, index) => {
        setTimeout(() => {
          if (!ctx) return;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          gain.gain.setValueAtTime(0.1, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start();
          osc.stop(ctx.currentTime + 0.8);
        }, index * 80);
      });
    } catch (e) {
      // ignore
    }
  }, [getAudioContext]);

  // Ambient synthesized dreamy lullaby / romantic chord progression (falls back seamlessly if no mp3 provided)
  const toggleSynthesizedAmbient = useCallback((): boolean => {
    const ctx = getAudioContext();
    if (!ctx) return false;

    if (isAmbientPlaying) {
      // Stop
      if (ambientOscillatorsRef.current.interval) {
        clearInterval(ambientOscillatorsRef.current.interval);
      }
      setIsAmbientPlaying(false);
      return false;
    } else {
      setIsAmbientPlaying(true);
      // Gentle pentatonic acoustic chord arpeggiator in background
      const chordNotes = [
        [261.63, 329.63, 392.0, 523.25], // C Major 7
        [220.0, 261.63, 329.63, 440.0],  // A Minor 7
        [174.61, 220.0, 261.63, 349.23], // F Major 7
        [196.0, 246.94, 293.66, 392.0],  // G Major
      ];
      let chordIdx = 0;
      let noteIdx = 0;

      const playNextArp = () => {
        if (!ctx || ctx.state === "closed") return;
        const currentChord = chordNotes[chordIdx];
        const freq = currentChord[noteIdx];

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.025, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 1.4);

        noteIdx++;
        if (noteIdx >= currentChord.length) {
          noteIdx = 0;
          chordIdx = (chordIdx + 1) % chordNotes.length;
        }
      };

      playNextArp();
      const interval = setInterval(playNextArp, 550);
      ambientOscillatorsRef.current.interval = interval;
      return true;
    }
  }, [getAudioContext, isAmbientPlaying]);

  useEffect(() => {
    return () => {
      if (ambientOscillatorsRef.current.interval) {
        clearInterval(ambientOscillatorsRef.current.interval);
      }
    };
  }, []);

  return {
    playChime,
    playDodge,
    playCelebration,
    toggleSynthesizedAmbient,
    isAmbientPlaying,
  };
}
