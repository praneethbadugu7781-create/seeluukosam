"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export function SceneShell({
  children,
  onBack,
  backLabel = "return",
}: {
  children: ReactNode;
  onBack: () => void;
  backLabel?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="absolute inset-0 z-30 flex flex-col"
    >
      <div className="absolute inset-0 bg-[#070A12]/62" aria-hidden />
      <button
        type="button"
        onClick={onBack}
        className="absolute left-4 top-4 z-40 min-h-[44px] px-2 text-[10px] tracking-[0.28em] text-ivory/45 hover:text-ivory/80"
      >
        ← {backLabel}
      </button>
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5">
        {children}
      </div>
    </motion.div>
  );
}
