"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { universe } from "@/config/universe";
import { SceneShell } from "./SceneShell";

const PALETTES = [
  ["#1a2240", "#A8A4D8", "#070A12"],
  ["#241820", "#D98D9B", "#0D1220"],
  ["#1c2218", "#D8C6A0", "#11182A"],
  ["#161828", "#F6F1E8", "#070A12"],
];

function PlaceholderArt({ index }: { index: number }) {
  const [a, b, c] = PALETTES[index % PALETTES.length];
  return (
    <svg viewBox="0 0 400 500" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id={`g${index}`} cx="40%" cy="35%">
          <stop offset="0%" stopColor={b} stopOpacity="0.55" />
          <stop offset="100%" stopColor={c} stopOpacity="1" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill={a} />
      <rect width="400" height="500" fill={`url(#g${index})`} />
      {[...Array(18)].map((_, i) => (
        <circle
          key={i}
          cx={(i * 73) % 400}
          cy={(i * 97 + index * 40) % 500}
          r={i % 4 === 0 ? 1.6 : 0.8}
          fill="#F6F1E8"
          opacity={0.25 + (i % 5) * 0.1}
        />
      ))}
    </svg>
  );
}

function MemoryPhoto({ src, index, alt }: { src: string; index: number; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) return <PlaceholderArt index={index} />;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

export function MemoryPortal({ onBack }: { onBack: () => void }) {
  const memories = universe.memories;
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const startX = useRef(0);
  const pinch = useRef(0);

  const go = (dir: number) => {
    setScale(1);
    setIndex((i) => (i + dir + memories.length) % memories.length);
  };

  const current = memories[index];

  return (
    <SceneShell onBack={onBack}>
      <p className="mb-6 text-[10px] tracking-[0.32em] text-lavender/70">05  ·  MEMORIES</p>
      <div
        className="relative w-[min(78vw,320px)]"
        onTouchStart={(e) => {
          if (e.touches.length === 1) startX.current = e.touches[0].clientX;
          if (e.touches.length === 2) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            pinch.current = Math.hypot(dx, dy);
          }
        }}
        onTouchMove={(e) => {
          if (e.touches.length === 2) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const dist = Math.hypot(dx, dy);
            if (pinch.current) {
              const next = Math.min(2.1, Math.max(1, scale * (dist / pinch.current)));
              setScale(next);
              pinch.current = dist;
            }
          }
        }}
        onTouchEnd={(e) => {
          if (e.changedTouches.length === 1 && e.touches.length === 0) {
            const dx = e.changedTouches[0].clientX - startX.current;
            if (dx < -48) go(1);
            if (dx > 48) go(-1);
          }
        }}
      >
        <AnimatePresence mode="wait">
          <motion.figure
            key={current.id}
            initial={{ opacity: 0, rotate: -2, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, rotate: 0, y: 0, filter: "blur(0px)", scale }}
            exit={{ opacity: 0, rotate: 3, y: -12, filter: "blur(8px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[2px]"
            style={{
              boxShadow: "0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(246,241,232,0.08)",
            }}
          >
            <div className="aspect-[4/5] bg-[#0D1220]">
              <MemoryPhoto src={current.photoURL} index={index} alt={current.alt} />
            </div>
            <figcaption className="bg-[#0D1220]/90 px-5 py-4">
              <p className="text-[14px] font-light leading-relaxed text-ivory/85">{current.caption}</p>
              {current.date ? (
                <p className="mt-2 text-[10px] tracking-[0.2em] text-ivory/35">{current.date}</p>
              ) : null}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex items-center gap-8">
        <button
          type="button"
          onClick={() => go(-1)}
          className="min-h-[44px] min-w-[44px] text-[11px] tracking-[0.24em] text-ivory/50"
        >
          ←
        </button>
        <p className="text-[10px] tracking-[0.28em] text-ivory/35">
          {index + 1} / {memories.length}
        </p>
        <button
          type="button"
          onClick={() => go(1)}
          className="min-h-[44px] min-w-[44px] text-[11px] tracking-[0.24em] text-ivory/50"
        >
          →
        </button>
      </div>
    </SceneShell>
  );
}
