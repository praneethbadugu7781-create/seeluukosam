"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { universe } from "@/config/universe";

export function MusicController() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const [volume, setVolume] = useState(0.45);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = volume;
  }, [volume]);

  const toggle = async () => {
    const el = audioRef.current;
    if (!el || !available) {
      setOpen((v) => !v);
      return;
    }
    try {
      if (playing) {
        el.pause();
        setPlaying(false);
      } else {
        await el.play();
        setPlaying(true);
      }
    } catch {
      setAvailable(false);
    }
  };

  return (
    <div className="pointer-events-auto absolute right-4 top-4 z-40 sm:right-6 sm:top-6">
      <audio
        ref={audioRef}
        src={universe.musicURL}
        loop
        preload="none"
        onError={() => setAvailable(false)}
      />
      <button
        type="button"
        onClick={() => {
          if (!open) setOpen(true);
          else toggle();
        }}
        className="flex min-h-[44px] items-center gap-2 px-2 text-[10px] tracking-[0.28em] text-ivory/55 hover:text-ivory/90"
        aria-label={playing ? "Pause song" : "Our song"}
      >
        <span>♪ {universe.musicTitle}</span>
        {playing && (
          <span className="flex h-3 items-end gap-[2px]" aria-hidden>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-[2px] bg-champagne/80"
                animate={{ height: [4, 10, 5, 12, 4] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.12 }}
              />
            ))}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1 flex items-center gap-3 rounded-full border border-ivory/10 bg-[#0D1220]/80 px-3 py-2 backdrop-blur-md"
          >
            <button
              type="button"
              onClick={toggle}
              className="min-h-[36px] min-w-[36px] text-[10px] tracking-[0.2em] text-ivory/80"
            >
              {playing ? "PAUSE" : "PLAY"}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.02}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="h-[2px] w-20 accent-[#D8C6A0]"
              aria-label="Volume"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
