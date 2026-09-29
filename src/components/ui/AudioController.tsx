"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";
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
    <div className="fixed top-5 right-5 z-50">
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
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FAF7F2]/80 hover:bg-[#FAF7F2]/95 backdrop-blur-md border border-[#7E192D]/15 shadow-sm text-[#3B0A13] transition-all duration-300"
        title={isPlaying ? "Pause music" : "Play our song"}
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          <div className="flex items-center gap-0.5 h-3 px-0.5" aria-hidden="true">
            <motion.span
              animate={{ height: ["3px", "12px", "5px", "10px", "3px"] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="w-0.5 bg-[#9F233C] rounded-full"
            />
            <motion.span
              animate={{ height: ["8px", "3px", "12px", "6px", "8px"] }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut", delay: 0.2 }}
              className="w-0.5 bg-[#7E192D] rounded-full"
            />
            <motion.span
              animate={{ height: ["5px", "10px", "3px", "12px", "5px"] }}
              transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut", delay: 0.4 }}
              className="w-0.5 bg-[#9F233C] rounded-full"
            />
          </div>
        ) : (
          <Music className="w-3.5 h-3.5 text-[#7E192D] transition-transform group-hover:rotate-12" />
        )}

        <span className="text-[11px] font-sans font-medium tracking-wider uppercase text-[#3B0A13]/90 select-none">
          {isPlaying ? "Our song" : "♪ Our song"}
        </span>
      </motion.button>
    </div>
  );
}
