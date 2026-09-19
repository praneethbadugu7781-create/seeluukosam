"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, UtensilsCrossed, Film, Gift, Heart, Gem } from "lucide-react";
import { siteConfig } from "@/config/content";
import { DateOption } from "@/types";
import { useSoundEffect } from "@/hooks/useSoundEffect";

interface Screen5Props {
  onNext: (selectedOption: DateOption) => void;
}

export function Screen5DatePlan({ onNext }: Screen5Props) {
  const { playChime } = useSoundEffect();
  const [selectedId, setSelectedId] = useState<string>(siteConfig.dateOptions[0].id);

  const handleSelect = (option: DateOption) => {
    playChime(659.25);
    setSelectedId(option.id);
  };

  const handleConfirm = () => {
    playChime(880);
    const chosen = siteConfig.dateOptions.find((d) => d.id === selectedId) || siteConfig.dateOptions[0];
    onNext(chosen);
  };

  const renderOptionIcon = (iconKey: string, isSelected: boolean) => {
    const iconClass = `w-6 h-6 transition-transform duration-300 ${
      isSelected ? "text-gold-500 scale-110" : "text-wine-700"
    }`;

    switch (iconKey) {
      case "sweet":
      case "kaju":
        return <Gem className={iconClass} />;
      case "coffee":
      case "food":
        return <UtensilsCrossed className={iconClass} />;
      case "film":
      case "movie":
        return <Film className={iconClass} />;
      case "sparkles":
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-xl mx-auto px-4 py-6 text-center"
    >
      {/* Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mb-6"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-peach-100/70 border border-peach-200/50 text-wine-900 text-[11px] font-semibold tracking-widest uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Our Next Adventure</span>
        </div>
        <h2 className="font-brand text-3xl sm:text-4xl font-normal text-wine-950 tracking-wide mb-2">
          {siteConfig.screen5.title}
        </h2>
        <p className="font-serif text-sm sm:text-base text-wine-900/60 max-w-sm mx-auto italic">
          {siteConfig.screen5.subtitle}
        </p>
      </motion.div>

      {/* 2x2 or 1-col Responsive Date Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
        {siteConfig.dateOptions.map((option, index) => {
          const isSelected = selectedId === option.id;

          return (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.1, duration: 0.5 }}
              onClick={() => handleSelect(option)}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`relative cursor-pointer rounded-3xl p-5 text-left transition-all duration-300 border overflow-hidden ${
                isSelected
                  ? "bg-gradient-to-br from-ivory-50 via-blush-50/70 to-peach-50/50 border-wine-500/80 shadow-luxury-lg ring-1 ring-wine-600/40"
                  : "bg-ivory-50/80 hover:bg-ivory-50/95 border-wine-200/50 shadow-luxury-sm hover:border-wine-300"
              }`}
            >
              {/* Selected subtle ambient aura */}
              {isSelected && (
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-rose-300/30 to-transparent rounded-bl-full pointer-events-none" />
              )}

              <div className="flex items-start justify-between mb-3">
                <div className="p-2.5 rounded-2xl bg-gradient-to-b from-white to-ivory-100 shadow-sm border border-wine-100">
                  {renderOptionIcon(option.icon, isSelected)}
                </div>
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                    isSelected
                      ? "bg-wine-800 text-ivory-50 shadow-sm"
                      : "border border-wine-300/40 text-transparent"
                  }`}
                >
                  <Check className="w-3 h-3" />
                </div>
              </div>

              <h3 className="font-brand text-base sm:text-lg font-normal text-wine-950 mb-1 leading-snug">
                {option.title}
              </h3>
              <p className="font-sans text-xs text-wine-900/70 leading-relaxed">
                {option.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Confirm Date Button */}
      <motion.button
        onClick={handleConfirm}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-wine-900 hover:bg-wine-950 text-ivory-50 font-sans text-xs font-semibold tracking-widest uppercase shadow-luxury-lg hover:shadow-glow-wine transition-all duration-300 border border-wine-800"
      >
        <span>{siteConfig.screen5.ctaText}</span>
        <ArrowRight className="w-3.5 h-3.5 text-ivory-200" />
      </motion.button>
    </motion.div>
  );
}
