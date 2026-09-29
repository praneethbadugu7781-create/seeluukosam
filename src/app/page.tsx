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
import { ChapterYouMatter } from "@/components/cinematic/ChapterYouMatter";
import { ChapterFuture } from "@/components/cinematic/ChapterFuture";
import { ChapterFinal } from "@/components/cinematic/ChapterFinal";
import { FinalLoveLetter } from "@/components/cinematic/FinalLoveLetter";

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState<string>("01");

  // Scroll listener to update subtle chapter indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalDocHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = scrollY / (totalDocHeight || 1);

      if (progress < 0.16) {
        setCurrentChapter("01");
      } else if (progress < 0.32) {
        setCurrentChapter("02");
      } else if (progress < 0.48) {
        setCurrentChapter("03");
      } else if (progress < 0.64) {
        setCurrentChapter("04");
      } else if (progress < 0.82) {
        setCurrentChapter("05");
      } else {
        setCurrentChapter("06");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-[#FAF7F2] text-[#22040A] overflow-x-hidden">
      {/* Texture & Ambient Layers */}
      <GrainOverlay />
      <SubtleParticles />

      {/* Non-Intrusive Floating HUD */}
      <ScrollProgress currentChapter={currentChapter} totalChapters="06" />
      <AudioController />
      <SecretHeartEasterEgg />

      {/* Cinematic Continuous Scroll Story Flow */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* 04 — Opening Hero Screen */}
        <OpeningHero />

        {/* Subtle Section Divider */}
        <div className="w-12 h-px bg-[#7E192D]/15 my-6" />

        {/* 06 — Chapter 01: It happened quietly */}
        <ChapterQuietly />

        {/* 07 — Chapter 02: It's the little things */}
        <ChapterLittleThings />

        {/* 08 — Chapter 03: Every day, a little more */}
        <ChapterEveryDay />

        {/* 09 — Chapter 04: If you could see my thoughts (Dark Section) */}
        <div className="w-full px-3 sm:px-6">
          <ChapterThoughts />
        </div>

        {/* 10 — Personal Memories: Things I don't want to forget */}
        <ChapterMemories />

        {/* 11 — Chapter 05: You matter to me */}
        <ChapterYouMatter />

        {/* 12 — The Long-Term Feeling */}
        <ChapterFuture />

        {/* 13 — Final Chapter: Yes. You matter to me. */}
        <ChapterFinal />

        {/* 14 — Final Message & Signature */}
        <FinalLoveLetter />
      </div>
    </main>
  );
}
