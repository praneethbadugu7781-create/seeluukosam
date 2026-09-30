"use client";

import { PointerEvent, useRef, useState } from "react";
import { DestinationId } from "@/types/universe";
import { universe } from "@/config/universe";
import { Planet } from "./Planet";
import { Destination } from "./Destination";
import { EasterEgg } from "./EasterEgg";

const NODES: { id: DestinationId; x: number; y: number }[] = [
  { id: "oneThing", x: 50, y: 16 },
  { id: "beginning", x: 22, y: 30 },
  { id: "littleThings", x: 78, y: 32 },
  { id: "secrets", x: 20, y: 72 },
  { id: "orbit", x: 80, y: 74 },
  { id: "memories", x: 50, y: 84 },
];

export function Universe({
  onOpen,
  pointer,
  locked,
}: {
  onOpen: (id: DestinationId) => void;
  pointer: { x: number; y: number };
  locked?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; px: number; py: number } | null>(null);
  const moved = useRef(false);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (locked) return;
    if ((e.target as HTMLElement).closest("button")) return;
    drag.current = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y };
    moved.current = false;
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || locked) return;
    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;
    if (Math.hypot(dx, dy) > 8) moved.current = true;
    const max = 220;
    setPan({
      x: Math.max(-max, Math.min(max, drag.current.px + dx)),
      y: Math.max(-max, Math.min(max, drag.current.py + dy)),
    });
  };

  const endDrag = () => {
    drag.current = null;
  };

  const open = (id: DestinationId) => {
    if (moved.current) return;
    onOpen(id);
  };

  const px = pointer.x * 18;
  const py = pointer.y * 14;

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 z-10 touch-none overflow-hidden"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div
        className="absolute left-1/2 top-1/2 h-[176vmin] w-[176vmin] will-change-transform"
        style={{
          transform: `translate(calc(-50% + ${pan.x + px}px), calc(-50% + ${pan.y + py}px))`,
        }}
      >
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(calc(-50% + ${px * -0.35}px), calc(-50% + ${py * -0.35}px))`,
          }}
        >
          <Planet size={108} />
        </div>

        {NODES.map((n) => (
          <div
            key={n.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            <Destination id={n.id} onOpen={open} />
          </div>
        ))}

        <EasterEgg
          lines={universe.easterEggs[0].lines}
          className="left-[42%] top-[48%]"
        />
        <EasterEgg
          lines={universe.easterEggs[1].lines}
          className="left-[88%] top-[50%]"
        />
        <EasterEgg
          lines={universe.easterEggs[2].lines}
          className="left-[8%] top-[50%]"
        />
      </div>
    </div>
  );
}
