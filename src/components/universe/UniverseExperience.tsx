"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DestinationId, ExperiencePhase } from "@/types/universe";
import { StarField } from "./StarField";
import { Nebula } from "./Nebula";
import { Opening } from "./Opening";
import { Universe } from "./Universe";
import { MusicController } from "./MusicController";
import { ProgressIndicator } from "./ProgressIndicator";
import { BeginningScene } from "@/components/scenes/BeginningScene";
import { LittleThingsScene } from "@/components/scenes/LittleThingsScene";
import { SecretsScene } from "@/components/scenes/SecretsScene";
import { OrbitScene } from "@/components/scenes/OrbitScene";
import { MemoryPortal } from "@/components/scenes/MemoryPortal";
import { OneThingScene } from "@/components/scenes/OneThingScene";
import { FinalReveal, ThanksScreen } from "@/components/scenes/FinalReveal";

export function UniverseExperience() {
  const [phase, setPhase] = useState<ExperiencePhase>("opening");
  const [active, setActive] = useState<DestinationId | null>(null);
  const [visited, setVisited] = useState<DestinationId[]>([]);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [quiet, setQuiet] = useState(1);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setPointer({ x, y });
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const enter = () => {
    setPhase("entering");
    window.setTimeout(() => setPhase("explore"), 2200);
  };

  const open = (id: DestinationId) => {
    setVisited((v) => (v.includes(id) ? v : [...v, id]));
    if (id === "oneThing") {
      setPhase("oneThing");
      setQuiet(0.15);
      setActive(id);
      return;
    }
    setActive(id);
    setPhase("destination");
  };

  const close = () => {
    setActive(null);
    setPhase("explore");
    setQuiet(1);
  };

  const finishOneThing = useCallback(() => {
    setPhase("reveal");
    setQuiet(0);
  }, []);

  const exploreHud = phase === "explore" || phase === "destination";

  return (
    <div
      className="relative h-[100dvh] w-full overflow-hidden bg-void text-ivory"
      onContextMenu={(e) => e.preventDefault()}
    >
      <Nebula drift={phase !== "opening"} />
      <StarField
        warp={phase === "entering"}
        quiet={quiet}
        pointer={phase === "explore" ? pointer : { x: 0, y: 0 }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.09] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")",
        }}
        aria-hidden
      />

      {exploreHud && (
        <>
          <p className="pointer-events-none absolute left-4 top-5 z-40 text-[10px] tracking-[0.32em] text-ivory/40 sm:left-6">
            THE LITTLE UNIVERSE
          </p>
          <MusicController />
          <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-40 flex flex-col items-center gap-3">
            <ProgressIndicator visited={visited} />
            <p className="text-[10px] tracking-[0.4em] text-ivory/30">explore</p>
          </div>
        </>
      )}

      <AnimatePresence>
        {phase === "opening" && <Opening onEnter={enter} />}
      </AnimatePresence>

      {(phase === "entering" ||
        phase === "explore" ||
        phase === "destination" ||
        phase === "oneThing" ||
        phase === "thanks") && (
        <motion.div
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{
            opacity: phase === "entering" ? 0.35 : phase === "oneThing" ? 0.25 : 1,
            scale: 1,
            filter: phase === "destination" || phase === "oneThing" ? "blur(10px)" : "blur(0px)",
          }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Universe onOpen={open} pointer={pointer} locked={phase !== "explore"} />
        </motion.div>
      )}

      <AnimatePresence>
        {phase === "destination" && active === "beginning" && (
          <BeginningScene onBack={close} />
        )}
        {phase === "destination" && active === "littleThings" && (
          <LittleThingsScene onBack={close} />
        )}
        {phase === "destination" && active === "secrets" && (
          <SecretsScene onBack={close} />
        )}
        {phase === "destination" && active === "orbit" && (
          <OrbitScene onBack={close} />
        )}
        {phase === "destination" && active === "memories" && (
          <MemoryPortal onBack={close} />
        )}
        {phase === "oneThing" && (
          <OneThingScene onBack={close} onComplete={finishOneThing} />
        )}
        {phase === "reveal" && (
          <FinalReveal onDone={() => setPhase("thanks")} />
        )}
      </AnimatePresence>

      {phase === "thanks" && (
        <>
          <MusicController />
          <ThanksScreen />
        </>
      )}
    </div>
  );
}
