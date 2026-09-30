"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { universe } from "@/config/universe";
import { CinematicText } from "@/components/universe/CinematicText";
import { SceneShell } from "./SceneShell";

export function LittleThingsScene({ onBack }: { onBack: () => void }) {
  const [found, setFound] = useState<number[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const items = universe.littleThings;

  const positions = useMemo(
    () => [
      { x: 0, y: -92 },
      { x: 82, y: -44 },
      { x: 82, y: 44 },
      { x: 0, y: 96 },
      { x: -82, y: 44 },
      { x: -82, y: -44 },
    ],
    []
  );

  const showFinale = found.length >= 4;

  return (
    <SceneShell onBack={onBack}>
      <p className="mb-6 text-[10px] tracking-[0.32em] text-lavender/70">02  ·  THE LITTLE THINGS</p>
      <div className="relative flex h-[280px] w-[280px] items-center justify-center">
        <motion.div
          className="h-24 w-24 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 34% 30%, #f6f1e8 0%, #bdb6a8 28%, #5c586c 72%, #161b2a 100%)",
            boxShadow: "0 0 40px rgba(216,198,160,0.28)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        />
        {items.map((item, i) => {
          const pos = positions[i];
          const seen = found.includes(i);
          return (
            <button
              key={item}
              type="button"
              onClick={() => {
                setActive(i);
                setFound((prev) => (prev.includes(i) ? prev : [...prev, i]));
              }}
              className="absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              style={{ left: `calc(50% + ${pos.x}px)`, top: `calc(50% + ${pos.y}px)` }}
              aria-label="A little thing"
            >
              <motion.span
                className="block h-2.5 w-2.5 rounded-full"
                style={{
                  background: seen ? "#D8C6A0" : "#F6F1E8",
                  boxShadow: seen
                    ? "0 0 12px rgba(216,198,160,0.8)"
                    : "0 0 10px rgba(246,241,232,0.6)",
                }}
                animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.7] }}
                transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.2 }}
              />
            </button>
          );
        })}
      </div>

      <div className="mt-6 min-h-[5.5rem] px-4">
        <AnimatePresence mode="wait">
          {active !== null && (
            <motion.div key={active}>
              <CinematicText
                text={items[active]}
                className="text-center text-[16px] text-ivory/90"
              />
            </motion.div>
          )}
        </AnimatePresence>
        {showFinale && (
          <div className="mt-6 space-y-2 text-center">
            {universe.littleThingsFinale.map((line) => (
              <p key={line} className="text-[14px] font-light text-ivory/70">
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
    </SceneShell>
  );
}
