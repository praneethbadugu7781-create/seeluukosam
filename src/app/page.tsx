"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/content";
import { DateOption } from "@/types";
import { BackgroundParticles } from "@/components/ui/BackgroundParticles";
import { InteractiveLoveTrail } from "@/components/ui/InteractiveLoveTrail";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { ProgressIndicator } from "@/components/ui/ProgressIndicator";
import { EasterEggModal, EasterEggTrigger } from "@/components/ui/EasterEggModal";
import { Screen1Mystery } from "@/components/screens/Screen1Mystery";
import { Screen2Message } from "@/components/screens/Screen2Message";
import { Screen3Question } from "@/components/screens/Screen3Question";
import { Screen4Memories } from "@/components/screens/Screen4Memories";
import { Screen5DatePlan } from "@/components/screens/Screen5DatePlan";
import { Screen6Final } from "@/components/screens/Screen6Final";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<DateOption | null>(null);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);

  const hasMemories = siteConfig.enableMemoriesSection && siteConfig.memories.length > 0;
  const totalSteps = hasMemories ? 6 : 5;

  const handleNextFromQuestion = () => {
    if (hasMemories) {
      setCurrentStep(4);
    } else {
      setCurrentStep(4);
    }
  };

  const handleNextFromMemories = () => {
    setCurrentStep(5);
  };

  const handleDateSelected = (date: DateOption) => {
    setSelectedDate(date);
    if (hasMemories) {
      setCurrentStep(6);
    } else {
      setCurrentStep(5);
    }
  };

  const handleRestart = () => {
    setSelectedDate(null);
    setCurrentStep(1);
  };

  const displayStep = currentStep;

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FDFBF7] to-[#FBECEF]/40 safe-area-padding cursor-default select-none">
      {/* Dynamic Background Visual Layers */}
      <BackgroundParticles />
      <InteractiveLoveTrail />
      <NoiseOverlay />

      {/* Floating Header UI */}
      <ProgressIndicator currentStep={displayStep} totalSteps={totalSteps} />
      <AudioPlayer />

      {/* Easter Egg Trigger */}
      <EasterEggTrigger onTrigger={() => setIsEasterEggOpen(true)} />
      <EasterEggModal isOpen={isEasterEggOpen} onClose={() => setIsEasterEggOpen(false)} />

      {/* Interactive Flow Screens */}
      <div className="relative z-10 w-full max-w-2xl flex items-center justify-center">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <Screen1Mystery key="step-1" onNext={() => setCurrentStep(2)} />
          )}

          {currentStep === 2 && (
            <Screen2Message key="step-2" onNext={() => setCurrentStep(3)} />
          )}

          {currentStep === 3 && (
            <Screen3Question key="step-3" onNext={handleNextFromQuestion} />
          )}

          {hasMemories && currentStep === 4 && (
            <Screen4Memories key="step-4-memories" onNext={handleNextFromMemories} />
          )}

          {((hasMemories && currentStep === 5) || (!hasMemories && currentStep === 4)) && (
            <Screen5DatePlan key="step-date-plan" onNext={handleDateSelected} />
          )}

          {((hasMemories && currentStep === 6) || (!hasMemories && currentStep === 5)) && (
            <Screen6Final
              key="step-final"
              selectedDate={selectedDate}
              onRestart={handleRestart}
            />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
