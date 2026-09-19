"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play, Volume2 } from "lucide-react";
import { siteConfig } from "@/config/content";
import { useSoundEffect } from "@/hooks/useSoundEffect";

export function AudioPlayer() {
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
          // If HTML5 audio fails to load or file doesn't exist, switch to Web Audio synthesis seamlessly
          console.log("Switching to synthesized ambient melody fallback");
          setHasAudioFile(false);
          const active = toggleSynthesizedAmbient();
          setIsPlaying(active);
        }
      }
    } else {
      const active = toggleSynthesizedAmbient();
      setIsPlaying(active);
    }
  };

  // Sync state if synthesizer is used
  useEffect(() => {
    if (!hasAudioFile) {
      setIsPlaying(isAmbientPlaying);
    }
  }, [isAmbientPlaying, hasAudioFile]);

  return (
    <div className="fixed top-4 right-4 z-40">
      {/* Hidden audio element for custom song */}
      {siteConfig.music.audioUrl && (
        <audio
          ref={audioRef}
          src={siteConfig.music.audioUrl}
          preload="auto"
          loop
          onError={() => setHasAudioFile(false)}
          onEnded={() => setIsPlaying(false)}
        />
      )}

      <motion.button
        onClick={handleTogglePlay}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-50/85 hover:bg-ivory-50/95 backdrop-blur-md border border-wine-200/50 shadow-luxury-sm text-wine-900 transition-all duration-300"
        title={isPlaying ? "Pause music" : "Play romantic soundtrack"}
        aria-label="Toggle background music"
      >
        {/* Animated equalizer bars when playing */}
        {isPlaying ? (
          <div className="flex items-center gap-0.5 h-3.5 px-0.5" aria-hidden="true">
            <motion.span
              animate={{ height: ["4px", "14px", "6px", "12px", "4px"] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="w-0.5 bg-wine-600 rounded-full"
            />
            <motion.span
              animate={{ height: ["10px", "4px", "14px", "8px", "10px"] }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut", delay: 0.2 }}
              className="w-0.5 bg-wine-700 rounded-full"
            />
            <motion.span
              animate={{ height: ["6px", "12px", "4px", "14px", "6px"] }}
              transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut", delay: 0.4 }}
              className="w-0.5 bg-wine-600 rounded-full"
            />
          </div>
        ) : (
          <Music className="w-3.5 h-3.5 text-wine-700 transition-transform group-hover:rotate-12" />
        )}

        <span className="text-xs font-medium tracking-wide text-wine-900/90 select-none">
          {isPlaying ? "Playing our song" : "♪ Play our song"}
        </span>

        <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
      </motion.button>
    </div>
  );
}
