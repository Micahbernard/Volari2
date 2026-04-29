// ─────────────────────────────────────────────────────────────
// Beacon Store — Global bridge between KineticForm and WebGLBackground
//
// A module-level Framer Motion MotionValue. KineticForm writes to
// it on keystrokes. WebGLBackground reads it in useFrame and pipes
// it into the shader uniform. Zero React re-renders on either end.
// ─────────────────────────────────────────────────────────────

import { MotionValue } from "framer-motion";

// Module singleton — any module that imports this gets the same instance.
// Range: 0.0 = Void consumes all, 1.0 = light pushes Void to edges.
export const beaconLightValue = new MotionValue<number>(0);
