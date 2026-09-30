"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function CinematicText({
  text,
  serif = false,
  className = "",
  delay = 0,
}: {
  text: string;
  serif?: boolean;
  className?: string;
  delay?: number;
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.p
      initial={reduced ? { opacity: 1 } : { opacity: 0, filter: "blur(10px)", y: 8 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      exit={{ opacity: 0, filter: "blur(8px)", y: -6 }}
      transition={{ duration: reduced ? 0.2 : 1.15, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`${serif ? "font-serif italic" : "font-sans font-light"} ${className}`}
    >
      {text}
    </motion.p>
  );
}

export function LineSequence({
  lines,
  hold = 2200,
  gap = 400,
  serifIndexes = [],
  className = "",
  lineClass = "text-[17px] sm:text-[20px] text-ivory/90 leading-relaxed max-w-[20rem] sm:max-w-md text-center px-6",
  onComplete,
}: {
  lines: string[];
  hold?: number;
  gap?: number;
  serifIndexes?: number[];
  className?: string;
  lineClass?: string;
  onComplete?: () => void;
}) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = React.useState(0);
  const completeRef = React.useRef(onComplete);
  completeRef.current = onComplete;
  const finished = React.useRef(false);

  React.useEffect(() => {
    if (index >= lines.length) {
      if (!finished.current) {
        finished.current = true;
        completeRef.current?.();
      }
      return;
    }
    const visible = reduced ? 700 : hold;
    const t = window.setTimeout(() => setIndex((i) => i + 1), visible + gap);
    return () => window.clearTimeout(t);
  }, [index, lines.length, hold, gap, reduced]);

  const current = lines[Math.min(index, lines.length - 1)];
  const show = index < lines.length;

  return (
    <div className={`relative min-h-[4.5rem] flex items-center justify-center ${className}`}>
      <AnimatePresence mode="wait">
        {show && current && (
          <motion.div key={`${index}-${current}`} className="absolute inset-0 flex items-center justify-center">
            <CinematicText
              text={current}
              serif={serifIndexes.includes(index)}
              className={lineClass}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
