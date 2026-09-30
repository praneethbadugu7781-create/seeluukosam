"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { universe } from "@/config/universe";
import { CinematicText } from "@/components/universe/CinematicText";
import { SceneShell } from "./SceneShell";

export function OneThingScene({
  onBack,
  onComplete,
}: {
  onBack: () => void;
  onComplete: () => void;
}) {
  const lines = universe.oneThingMessages;
  const [step, setStep] = useState(0);

  useEffect(() => {
    const times = [1800, 4200, 7000, 11000];
    const timers = times.map((t, i) => window.setTimeout(() => setStep(i + 1), t));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (step >= 4) {
      const t = window.setTimeout(onComplete, 2800);
      return () => clearTimeout(t);
    }
  }, [step, onComplete]);

  return (
    <SceneShell onBack={onBack}>
      <p className="mb-16 text-[10px] tracking-[0.32em] text-lavender/50">06  ·  THE ONE THING</p>
      <motion.span
        className="mb-16 block h-3 w-3 rounded-full bg-ivory"
        animate={{
          scale: step >= 2 ? [1, 1.8, 1.4] : [1, 1.15, 1],
          boxShadow:
            step >= 2
              ? "0 0 40px 12px rgba(246,241,232,0.55)"
              : "0 0 18px 4px rgba(246,241,232,0.4)",
        }}
        transition={{ duration: 2.4, repeat: Infinity, repeatType: "mirror" }}
      />
      <div className="relative h-24 w-full">
        <AnimatePresence mode="wait">
          {step >= 1 && step <= 3 && (
            <motion.div key={step} className="absolute inset-0 flex justify-center">
              <CinematicText
                text={lines[Math.min(step - 1, lines.length - 1)]}
                serif={step === 2 || step === 3}
                className="max-w-xs px-6 text-center text-[18px] text-ivory"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SceneShell>
  );
}
