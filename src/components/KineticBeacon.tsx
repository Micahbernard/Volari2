"use client";

import KineticForm from "./KineticForm";

// ─────────────────────────────────────────────────────────────
// KineticBeacon — Contact Section ("Begin the conversation")
//
// No local canvas. The global WebGLBackground (mounted in
// layout.tsx) renders the Void shader behind everything.
// KineticForm writes keystroke data to the shared
// beaconLightValue (see @/lib/beaconStore). WebGLBackground
// reads it in useFrame and pipes it into uBeaconRadius.
//
// This component is pure DOM: position: relative, z-10,
// pointer-events-auto. The canvas sits behind at -z-1.
// ─────────────────────────────────────────────────────────────

export default function KineticBeacon() {
  return (
    <section id="contact" className="relative min-h-screen overflow-hidden">
      {/* DOM form layer — sits transparently over the global canvas */}
      <KineticForm />
    </section>
  );
}
