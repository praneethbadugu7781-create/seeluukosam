"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { universe } from "@/config/universe";
import { CinematicText } from "@/components/universe/CinematicText";

export function FinalReveal({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const lines = universe.revealMessages;
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    const timers: number[] = [];
    let t = 900;
    timers.push(window.setTimeout(() => setStep(1), t));
    t += 1600;
    timers.push(window.setTimeout(() => setStep(2), t));
    lines.forEach((_, i) => {
      t += i < 2 ? 2600 : 2000;
      timers.push(window.setTimeout(() => setStep(3 + i), t));
    });
    t += 2600;
    timers.push(window.setTimeout(() => setStep(3 + lines.length), t));
    t += 3200;
    timers.push(window.setTimeout(() => doneRef.current(), t));
    return () => timers.forEach(clearTimeout);
  }, [lines]);

  const lineIndex = step >= 3 ? step - 3 : -1;
  const showFinal = lineIndex >= lines.length;
  const showHeart = step >= 2;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-[#070A12]"
    >
      <motion.div
        className="mb-10 flex h-8 items-center justify-center"
        animate={showHeart ? { scale: 1 } : { scale: 1 }}
      >
        {!showHeart ? (
          <span
            className="h-2 w-2 rounded-full bg-ivory"
            style={{ boxShadow: "0 0 16px rgba(246,241,232,0.6)" }}
          />
        ) : (
          <motion.span
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.9 }}
            className="text-[14px] text-rose"
          >
            ❤
          </motion.span>
        )}
      </motion.div>

      <div className="relative h-28 w-full max-w-md px-8">
        <AnimatePresence mode="wait">
          {lineIndex >= 0 && !showFinal && (
            <motion.div key={lineIndex} className="absolute inset-0 flex justify-center">
              <CinematicText
                text={lines[lineIndex]}
                serif={lineIndex === 1}
                className="text-center text-[16px] sm:text-[18px] text-ivory/88 leading-relaxed"
              />
            </motion.div>
          )}
        </AnimatePresence>
        {showFinal && (
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            className="text-center"
          >
            <h1 className="font-serif text-[26px] sm:text-[34px] italic text-ivory leading-snug">
              {universe.finalMessage}
            </h1>
            <p className="mt-6 text-rose/80">❤️</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export function ThanksScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 z-40 flex flex-col items-center justify-center px-8 bg-[#070A12]/40"
    >
      <svg width="72" height="28" viewBox="0 0 72 28" className="mb-10 opacity-70" aria-hidden>
        <circle cx="8" cy="16" r="1.2" fill="#F6F1E8" />
        <circle cx="22" cy="8" r="1.1" fill="#F6F1E8" />
        <circle cx="38" cy="14" r="1.3" fill="#F6F1E8" />
        <circle cx="52" cy="7" r="1" fill="#F6F1E8" />
        <circle cx="64" cy="18" r="1.2" fill="#F6F1E8" />
        <path d="M8 16 L22 8 L38 14 L52 7 L64 18" stroke="rgba(168,164,216,0.45)" fill="none" strokeWidth="0.6" />
      </svg>
      <div className="space-y-4 text-center">
        {universe.thanksMessages.map((line, i) => (
          <p
            key={line}
            className={
              i === 0
                ? "font-serif italic text-[18px] text-ivory/90"
                : "text-[15px] font-light text-ivory/70"
            }
          >
            {line}
          </p>
        ))}
      </div>
      <p className="mt-12 text-[14px] text-ivory/80">{universe.signature}</p>
      <p className="mt-8 text-[10px] tracking-[0.28em] text-ivory/30">Stay a little longer.</p>
    </motion.div>
  );
}
