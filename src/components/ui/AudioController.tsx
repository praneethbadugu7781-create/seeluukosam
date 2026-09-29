"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";
import { useSoundEffect } from "@/hooks/useSoundEffect";

export function AudioController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAudioFile, setHasAudioFile] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toggleSynthesizedAmbient, isAmbientPlaying } = useSoundEffect();

  const handleTogglePlay = async () => {
    if (audioRef.current && hasAudioFile) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          setHasAudioFile(false);
          const active = toggleSynthesizedAmbient();
          setIsPlaying(Boolean(active));
        }
      }
    } else {
      const active = toggleSynthesizedAmbient();
      setIsPlaying(Boolean(active));
    }
  };

  useEffect(() => {
    if (!hasAudioFile) {
      setIsPlaying(isAmbientPlaying);
    }
  }, [isAmbientPlaying, hasAudioFile]);

  return (
    <div className="fixed top-6 right-6 z-50">
      {loveLetterConfig.music.audioUrl && (
        <audio
          ref={audioRef}
          src={loveLetterConfig.music.audioUrl}
          preload="none"
          loop
          onError={() => setHasAudioFile(false)}
          onEnded={() => setIsPlaying(false)}
        />
      )}

      <motion.button
        onClick={handleTogglePlay}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-studio-bg/90 hover:bg-studio-bg border border-studio-primary/10 shadow-studio-sm text-studio-primary transition-all duration-300"
        title={isPlaying ? "Pause music" : "Play our song"}
        aria-label="Toggle background music"
      >
        <span className="text-[11px] font-sans font-medium tracking-widest uppercase text-studio-primary/80">
          ♪ OUR SONG
        </span>

        {isPlaying && (
          <div className="flex items-center gap-0.5 h-3 px-0.5" aria-hidden="true">
            <motion.span
              animate={{ height: ["3px", "10px", "4px", "8px", "3px"] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="w-[1.5px] bg-studio-accent rounded-full"
            />
            <motion.span
              animate={{ height: ["7px", "3px", "11px", "5px", "7px"] }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut", delay: 0.2 }}
              className="w-[1.5px] bg-studio-accent rounded-full"
            />
            <motion.span
              animate={{ height: ["4px", "9px", "3px", "10px", "4px"] }}
              transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut", delay: 0.4 }}
              className="w-[1.5px] bg-studio-accent rounded-full"
            />
          </div>
        )}
      </motion.button>
    </div>
  );
}
