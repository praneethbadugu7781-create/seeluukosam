"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { universe } from "@/config/universe";
import { CinematicText } from "@/components/universe/CinematicText";
import { SceneShell } from "./SceneShell";

const STARS = [
  { x: 50, y: 8 },
  { x: 78, y: 26 },
  { x: 90, y: 54 },
  { x: 68, y: 82 },
  { x: 32, y: 82 },
  { x: 10, y: 54 },
  { x: 22, y: 26 },
];

export function SecretsScene({ onBack }: { onBack: () => void }) {
  const [found, setFound] = useState<number[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const all = found.length >= universe.secrets.length;

  const path = STARS.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  return (
    <SceneShell onBack={onBack}>
      <p className="mb-6 text-[10px] tracking-[0.32em] text-lavender/70">03  ·  THINGS YOU DON&apos;T KNOW</p>
      <div className="relative h-[240px] w-[240px] sm:h-[280px] sm:w-[280px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
          {all && (
            <motion.path
              d={path}
              fill="none"
              stroke="rgba(168,164,216,0.55)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          )}
        </svg>
        {STARS.map((p, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setActive(i);
              setFound((prev) => (prev.includes(i) ? prev : [...prev, i]));
            }}
            className="absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            aria-label={`Secret ${i + 1}`}
          >
            <span
              className="block h-2 w-2 rounded-full bg-ivory"
              style={{
                boxShadow: found.includes(i)
                  ? "0 0 14px 3px rgba(168,164,216,0.7)"
                  : "0 0 10px 2px rgba(246,241,232,0.45)",
                opacity: found.includes(i) ? 1 : 0.7,
              }}
            />
          </button>
        ))}
      </div>
      <div className="mt-8 min-h-[5rem] px-6">
        <AnimatePresence mode="wait">
          {active !== null && (
            <CinematicText
              key={active}
              text={universe.secrets[active]}
              className="text-center text-[16px] leading-relaxed text-ivory/90"
            />
          )}
        </AnimatePresence>
        {all && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center font-serif italic text-[15px] text-champagne/90"
          >
            {universe.secretsFinale}
          </motion.p>
        )}
      </div>
    </SceneShell>
  );
}
