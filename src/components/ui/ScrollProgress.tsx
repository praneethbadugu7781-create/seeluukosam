"use client";

import React from "react";

interface ScrollProgressProps {
  currentChapter: string;
  totalChapters?: string;
  progressPercent?: number;
}

export function ScrollProgress({ currentChapter, totalChapters = "06", progressPercent = 0 }: ScrollProgressProps) {
  return (
    <div className="fixed top-6 left-6 z-50 flex items-center gap-3 select-none">
      <div className="flex items-baseline gap-1 text-xs font-sans tracking-wider">
        <span className="font-semibold text-studio-primary">{currentChapter}</span>
        <span className="text-studio-secondary/40 font-light">/</span>
        <span className="text-studio-secondary/50 font-normal">{totalChapters}</span>
      </div>
      {/* Ultra-minimal progress bar */}
      <div className="w-10 h-[1px] bg-studio-primary/10 overflow-hidden relative">
        <div
          className="h-full bg-studio-accent transition-all duration-300 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
        />
      </div>
    </div>
  );
}
