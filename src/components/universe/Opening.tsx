"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { universe } from "@/config/universe";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { CinematicText } from "./CinematicText";

export function Opening({ onEnter }: { onEnter: () => void }) {
  const reduced = usePrefersReducedMotion();
  const [step, setStep] = useState(0);
  const lines = universe.openingText;

  useEffect(() => {
    const times = reduced
      ? [200, 400, 600, 800, 1000, 1200, 1400, 1600]
      : [900, 1800, 2700, 3800, 5600, 8200, 11000, 13800, 15500];
    const timers = times.map((t, i) =>
      window.setTimeout(() => setStep(i + 1), t)
    );
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  const starCount = Math.min(3, step);
  const lineIndex = step >= 4 ? Math.min(step - 4, lines.length - 1) : -1;
  const showButton = step >= 9 || (reduced && step >= 7);

  return (
    <motion.div
      className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#070A12]"
      exit={{ opacity: 0, filter: "blur(16px)", scale: 1.06 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => {
        if (step >= 3 && !showButton) setStep(9);
      }}
    >
      <div className="relative flex h-[42vh] w-full items-center justify-center">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={
              starCount > i
                ? { opacity: [0.35, 1, 0.7], scale: 1 }
                : { opacity: 0 }
            }
            transition={{ duration: 1.8, repeat: starCount > i ? Infinity : 0, repeatType: "mirror" }}
            className="absolute h-[3px] w-[3px] rounded-full bg-ivory"
            style={{
              left: "50%",
              marginLeft: i === 0 ? -1.5 : i === 1 ? -26 : 22,
              boxShadow: "0 0 10px 2px rgba(246,241,232,0.55)",
            }}
          />
        ))}
      </div>

      <div className="relative h-24 w-full">
        <AnimatePresence mode="wait">
          {lineIndex >= 0 && (
            <motion.div
              key={lineIndex}
              className="absolute inset-x-0 flex justify-center"
            >
              <CinematicText
                text={lines[lineIndex]}
                serif={lineIndex === 1 || lineIndex === 4}
                className={
                  lineIndex === 4
                    ? "text-[22px] text-ivory"
                    : "text-[16px] sm:text-[18px] text-ivory/80"
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-16 h-16">
        <AnimatePresence>
          {showButton && (
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              onClick={onEnter}
              className="px-6 py-3 text-[11px] tracking-[0.32em] text-champagne/90 uppercase font-sans font-medium min-h-[48px] min-w-[48px] hover:text-ivory transition-colors"
            >
              ENTER THE UNIVERSE →
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
