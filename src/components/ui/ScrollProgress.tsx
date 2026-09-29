"use client";

import React from "react";

interface ScrollProgressProps {
  currentChapter: string;
  totalChapters?: string;
}

export function ScrollProgress({ currentChapter, totalChapters = "06" }: ScrollProgressProps) {
  return (
    <div className="fixed top-5 left-5 z-50 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2]/75 backdrop-blur-md border border-[#7E192D]/10 text-[#3B0A13]/60 text-[11px] font-serif tracking-widest select-none">
      <span className="text-[#5C1220] font-semibold">{currentChapter}</span>
      <span className="text-[#D35B72]/40 font-light">/</span>
      <span className="text-[#3B0A13]/50">{totalChapters}</span>
    </div>
  );
}
