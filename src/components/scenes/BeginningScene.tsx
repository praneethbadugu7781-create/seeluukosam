"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { universe } from "@/config/universe";
import { Constellation } from "@/components/universe/Constellation";
import { LineSequence } from "@/components/universe/CinematicText";
import { SceneShell } from "./SceneShell";

const SCATTERED = [
  { x: 18, y: 62 },
  { x: 70, y: 22 },
  { x: 40, y: 40 },
  { x: 82, y: 70 },
  { x: 30, y: 18 },
];

const FORMED = [
  { x: 18, y: 48 },
  { x: 36, y: 28 },
  { x: 52, y: 42 },
  { x: 64, y: 62 },
  { x: 84, y: 38 },
];

export function BeginningScene({ onBack }: { onBack: () => void }) {
  const [formed, setFormed] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const a = window.setTimeout(() => setFormed(true), 700);
    const b = window.setTimeout(() => setShowText(true), 1800);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);

  const points = formed ? FORMED : SCATTERED;

  return (
    <SceneShell onBack={onBack}>
      <p className="mb-8 text-[10px] tracking-[0.32em] text-lavender/70">01  ·  THE BEGINNING</p>
      <motion.div
        initial={{ scale: 0.92, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <Constellation points={points} connected={formed} size={180} />
      </motion.div>
      <div className="mt-10 h-28">
        {showText && (
          <LineSequence
            lines={universe.constellationMessages}
            hold={2400}
            serifIndexes={[3]}
          />
        )}
      </div>
    </SceneShell>
  );
}
