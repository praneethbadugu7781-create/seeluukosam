"use client";

import React, { useState, useEffect } from "react";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { SubtleParticles } from "@/components/ui/SubtleParticles";
import { AudioController } from "@/components/ui/AudioController";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SecretHeartEasterEgg } from "@/components/ui/SecretHeartEasterEgg";

import { OpeningHero } from "@/components/cinematic/OpeningHero";
import { ChapterQuietly } from "@/components/cinematic/ChapterQuietly";
import { ChapterLittleThings } from "@/components/cinematic/ChapterLittleThings";
import { ChapterEveryDay } from "@/components/cinematic/ChapterEveryDay";
import { ChapterThoughts } from "@/components/cinematic/ChapterThoughts";
import { ChapterMemories } from "@/components/cinematic/ChapterMemories";
import { Chapter06Forever } from "@/components/cinematic/Chapter06Forever";
import { ChapterFuture } from "@/components/cinematic/ChapterFuture";
import { FinalLoveLetter } from "@/components/cinematic/FinalLoveLetter";

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState<string>("01");
  const [progressPercent, setProgressPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalDocHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = Math.min(100, Math.max(0, (scrollY / (totalDocHeight || 1)) * 100));
      setProgressPercent(progress);

      if (progress < 16) {
        setCurrentChapter("01");
      } else if (progress < 32) {
        setCurrentChapter("02");
      } else if (progress < 48) {
        setCurrentChapter("03");
      } else if (progress < 64) {
        setCurrentChapter("04");
      } else if (progress < 82) {
        setCurrentChapter("05");
      } else {
        setCurrentChapter("06");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-[#FAF8F5] text-[#241719] overflow-x-hidden">
      {/* Texture & Ambient Layers */}
      <GrainOverlay />
      <SubtleParticles />

      {/* Non-Intrusive Floating HUD */}
      <ScrollProgress currentChapter={currentChapter} totalChapters="06" progressPercent={progressPercent} />
      <AudioController />
      <SecretHeartEasterEgg />

      {/* Cinematic Continuous Scroll Story Flow */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Opening Hero Screen */}
        <OpeningHero />

        {/* Subtle Divider */}
        <div className="w-12 h-[1px] bg-studio-primary/10 my-6" />

        {/* Chapter 01: It happened quietly */}
        <ChapterQuietly />

        {/* Chapter 02: It's the little things */}
        <ChapterLittleThings />

        {/* Chapter 03: Every day, a little more */}
        <ChapterEveryDay />

        {/* Chapter 04: If you could see my thoughts (Dark Section) */}
        <div className="w-full px-3 sm:px-6">
          <ChapterThoughts />
        </div>

        {/* Personal Memories: Things I don't want to forget */}
        <ChapterMemories />

        {/* Chapter 06: Commitment & Forever (I want you in my forever) */}
        <Chapter06Forever />

        {/* Future Section: I'd choose a future with you */}
        <ChapterFuture />

        {/* Final Screen: I love you. Today. Tomorrow. And for every tomorrow... */}
        <FinalLoveLetter />
      </div>
    </main>
  );
}
