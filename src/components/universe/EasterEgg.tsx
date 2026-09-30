"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function EasterEgg({
  lines,
  className,
}: {
  lines: string[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <div className={`absolute ${className ?? ""}`}>
      <button
        type="button"
        aria-label="A quiet star"
        onClick={() => {
          setOpen(true);
          setStep(0);
        }}
        className="relative flex h-11 w-11 items-center justify-center"
      >
        <span
          className="h-[4px] w-[4px] rounded-full bg-ivory/40"
          style={{ boxShadow: "0 0 8px 1px rgba(246,241,232,0.35)" }}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (step < lines.length - 1) setStep((s) => s + 1);
              else setOpen(false);
            }}
            className="absolute left-1/2 top-10 z-50 w-44 -translate-x-1/2 text-center text-[12px] font-light leading-relaxed text-ivory/80"
          >
            {lines[step]}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
