"use client";

import { DestinationId } from "@/types/universe";
import { Constellation } from "./Constellation";

const LABELS: Record<DestinationId, { n: string; t: string }> = {
  beginning: { n: "01", t: "THE BEGINNING" },
  littleThings: { n: "02", t: "THE LITTLE THINGS" },
  secrets: { n: "03", t: "THINGS YOU DON'T KNOW" },
  orbit: { n: "04", t: "OUR LITTLE UNIVERSE" },
  memories: { n: "05", t: "MEMORIES" },
  oneThing: { n: "06", t: "THE ONE THING" },
};

const BEGINNING = [
  { x: 22, y: 48 },
  { x: 38, y: 28 },
  { x: 54, y: 36 },
  { x: 62, y: 58 },
  { x: 80, y: 44 },
];

export function Destination({
  id,
  onOpen,
}: {
  id: DestinationId;
  onOpen: (id: DestinationId) => void;
}) {
  const label = LABELS[id];

  return (
    <button
      type="button"
      onClick={() => onOpen(id)}
      className="group flex flex-col items-center gap-2 min-w-[72px]"
      aria-label={`${label.n} ${label.t}`}
    >
      <span className="relative flex h-[88px] w-[88px] items-center justify-center">
        {id === "beginning" && <Constellation points={BEGINNING} size={84} />}
        {id === "littleThings" && (
          <span
            className="block h-12 w-12 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #f6f1e8 0%, #c8c0b0 25%, #6a6578 70%, #1a2032 100%)",
              boxShadow: "0 0 24px rgba(216,198,160,0.35)",
            }}
          />
        )}
        {id === "secrets" && (
          <Constellation
            points={[
              { x: 50, y: 14 },
              { x: 72, y: 30 },
              { x: 84, y: 54 },
              { x: 64, y: 78 },
              { x: 36, y: 78 },
              { x: 16, y: 54 },
              { x: 28, y: 30 },
            ]}
            size={84}
          />
        )}
        {id === "orbit" && (
          <span className="relative h-16 w-16">
            <span
              className="absolute left-1 top-3 h-7 w-7 rounded-full"
              style={{
                background: "radial-gradient(circle at 30% 30%, #A8A4D8, #2a3350)",
                boxShadow: "0 0 16px rgba(168,164,216,0.4)",
              }}
            />
            <span
              className="absolute right-0 bottom-2 h-5 w-5 rounded-full"
              style={{
                background: "radial-gradient(circle at 30% 30%, #D98D9B, #3a2430)",
                boxShadow: "0 0 14px rgba(217,141,155,0.35)",
              }}
            />
          </span>
        )}
        {id === "memories" && (
          <span
            className="block h-14 w-14 rounded-full border border-ivory/25"
            style={{
              background:
                "radial-gradient(circle, rgba(246,241,232,0.12) 0%, rgba(168,164,216,0.08) 40%, transparent 70%)",
              boxShadow: "0 0 28px rgba(246,241,232,0.12), inset 0 0 20px rgba(246,241,232,0.08)",
              backdropFilter: "blur(6px)",
            }}
          />
        )}
        {id === "oneThing" && (
          <span
            className="block h-3 w-3 rounded-full bg-ivory"
            style={{ boxShadow: "0 0 18px 4px rgba(246,241,232,0.55)" }}
          />
        )}
      </span>
      <span className="flex flex-col items-center">
        <span className="text-[9px] tracking-[0.28em] text-lavender/70">{label.n}</span>
        <span className="mt-0.5 max-w-[9.5rem] text-center text-[9px] tracking-[0.22em] text-ivory/55">
          {label.t}
        </span>
      </span>
    </button>
  );
}
