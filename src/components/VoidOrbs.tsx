"use client";

import { useEffect, useRef } from "react";
import { beaconLightValue } from "@/lib/beaconStore";

// ─────────────────────────────────────────────────────────────
// VoidOrbs — Floating void spheres drifting upward
//
// CRITICAL: Uses a DETERMINISTIC pseudo-random generator so
// server-rendered HTML matches client hydration exactly.
// Math.random() causes hydration mismatches which break React
// and kill all JS (GSAP, WebGL, springs, everything).
// ─────────────────────────────────────────────────────────────

interface PreOrb {
  id: number;
  size: number;
  x: number;      // vw
  y: number;      // vh
  durMs: number;
  delayMs: number;
  swayAmp: number;
  swayDuration: number;
  brightness: number;
}

// Deterministic seed: same sequence on server AND client
let GLOBAL_SEED = 42;
function detRnd(): number {
  GLOBAL_SEED = (GLOBAL_SEED * 1103515245 + 12345) & 0x7fffffff;
  return GLOBAL_SEED / 0x7fffffff;
}

// Pre-seeded positions: LEFT column and RIGHT column alternate
// for guaranteed full-viewport spread. Deterministic.
const X_POSITIONS = [
  8, 85, 22, 72, 38, 92, 15, 62, 48, 78, 28, 55,
  12, 68, 42, 88, 18, 58, 52, 82, 32, 65, 10, 75,
];

function generateOrbs(count: number): PreOrb[] {
  const orbs: PreOrb[] = [];
  for (let i = 0; i < count; i++) {
    const size = Math.round(8 + detRnd() * 18);
    const y = Math.round(detRnd() * 90);
    orbs.push({
      id: i,
      size,
      x: X_POSITIONS[i % X_POSITIONS.length],
      y,
      durMs: Math.round((18 + detRnd() * 16) * 1000),
      delayMs: Math.round(detRnd() * 6000),
      swayAmp: Math.round(5 + detRnd() * 14),
      swayDuration: Math.round((5 + detRnd() * 7) * 1000),
      brightness: 0.22 + detRnd() * 0.16,
    });
  }
  return orbs;
}

const PRESEED_ORBS = generateOrbs(20);

export default function VoidOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamic spawn loop — client-side only, safe from hydration
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastSpawn = performance.now();
    let raf = 0;

    const spawn = () => {
      const light = beaconLightValue.get();
      const size = 10 + Math.random() * 16;
      const x = Math.random() * 100;
      const dur = 20000 + Math.random() * 12000;
      const swayAmp = 5 + Math.random() * 15;

      const wrapper = document.createElement("div");
      wrapper.style.cssText =
        `position:absolute;left:${x}vw;bottom:-${size + 4}px;` +
        `width:${size}px;height:${size}px;pointer-events:none;`;

      const inner = document.createElement("div");
      inner.style.cssText =
        `width:100%;height:100%;border-radius:50%;` +
        `will-change:transform,opacity;`;

      const b = 0.14 + light * 0.08;
      const r = Math.floor(b * 255);
      const g = Math.floor(b * 255);
      const bl = Math.floor(b * 260);

      inner.style.background =
        `radial-gradient(circle at 35% 35%, ` +
        `rgb(${r+30},${g+30},${bl+35}) 0%, ` +
        `rgb(${r},${g},${bl}) 50%, ` +
        `rgb(${Math.max(0,r-12)},${Math.max(0,g-12)},${Math.max(0,bl-12)}) 100%)`;
      inner.style.border = "1px solid rgba(255,255,255,0.12)";
      inner.style.boxShadow =
        `0 0 ${size * 2.2}px ${size * 0.6}px rgba(150,165,190,0.12), ` +
        `inset 0 0 ${size * 0.35}px rgba(255,255,255,0.035)`;

      inner.animate(
        [
          { transform: "translateY(0) translateX(0)", opacity: 0 },
          { transform: "translateY(0) translateX(0)", opacity: 1, offset: 0.04 },
          { transform: `translateY(-30vh) translateX(${swayAmp}px)`, opacity: 1, offset: 0.45 },
          { transform: `translateY(-60vh) translateX(${-swayAmp * 0.6}px)`, opacity: 1, offset: 0.88 },
          { transform: "translateY(-120vh) translateX(0)", opacity: 0 },
        ],
        { duration: dur, easing: "linear", fill: "forwards" }
      );

      wrapper.appendChild(inner);
      container.appendChild(wrapper);
      setTimeout(() => wrapper.remove(), dur + 500);
    };

    const tick = () => {
      const now = performance.now();
      const light = beaconLightValue.get();
      const interval = light < 0.1 ? 2500 : light < 0.4 ? 1200 : light < 0.7 ? 500 : 200;
      if (now - lastSpawn > interval) {
        lastSpawn = now;
        spawn();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      aria-hidden="true"
    >
      {PRESEED_ORBS.map((orb) => {
        const r = Math.floor(orb.brightness * 255);
        const g = Math.floor(orb.brightness * 255);
        const b = Math.floor(orb.brightness * 260);
        return (
          <div
            key={orb.id}
            className="absolute"
            style={{
              left: `${orb.x}vw`,
              top: `${orb.y}vh`,
              width: orb.size,
              height: orb.size,
            }}
          >
            <div
              className="h-full w-full rounded-full"
              style={{
                background: `radial-gradient(circle at 35% 35%, rgb(${r+30},${g+30},${b+35}) 0%, rgb(${r},${g},${b}) 50%, rgb(${Math.max(0,r-12)},${Math.max(0,g-12)},${Math.max(0,b-12)}) 100%)`,
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: `0 0 ${orb.size * 2.2}px ${orb.size * 0.6}px rgba(160,170,195,0.14), inset 0 0 ${orb.size * 0.35}px rgba(255,255,255,0.04)`,
                animation: `vo-drift ${orb.durMs}ms linear ${orb.delayMs}ms forwards, vo-sway ${orb.swayDuration}ms ease-in-out ${orb.delayMs}ms infinite`,
              }}
            />
          </div>
        );
      })}

      <style>{`
        @keyframes vo-drift {
          0%   { transform: translateY(0); opacity: 0; }
          6%   { transform: translateY(0); opacity: 1; }
          88%  { transform: translateY(-120vh); opacity: 1; }
          100% { transform: translateY(-130vh); opacity: 0; }
        }
        @keyframes vo-sway {
          0%   { margin-left: 0px; }
          25%  { margin-left: 10px; }
          50%  { margin-left: -6px; }
          75%  { margin-left: 3px; }
          100% { margin-left: 0px; }
        }
      `}</style>
    </div>
  );
}
