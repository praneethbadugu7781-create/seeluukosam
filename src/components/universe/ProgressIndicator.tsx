"use client";

import { DestinationId } from "@/types/universe";

const ORDER: DestinationId[] = [
  "beginning",
  "littleThings",
  "secrets",
  "orbit",
  "memories",
  "oneThing",
];

export function ProgressIndicator({ visited }: { visited: DestinationId[] }) {
  return (
    <div className="pointer-events-none flex items-center gap-1.5" aria-hidden>
      {ORDER.map((id) => (
        <span
          key={id}
          className={`block h-[3px] w-[3px] rounded-full transition-opacity duration-700 ${
            visited.includes(id) ? "bg-ivory/80" : "bg-ivory/20"
          }`}
        />
      ))}
    </div>
  );
}
