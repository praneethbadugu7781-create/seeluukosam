"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  const formatNum = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  return (
    <div className="fixed top-4 left-4 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full bg-ivory-50/70 backdrop-blur-md border border-wine-200/30 text-wine-900/60 text-xs font-serif tracking-widest select-none">
      <span className="text-wine-800 font-semibold">{formatNum(currentStep)}</span>
      <span className="text-wine-300 font-light">—</span>
      <span>{formatNum(totalSteps)}</span>
    </div>
  );
}
