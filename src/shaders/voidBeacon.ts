// ─────────────────────────────────────────────────────────────
// Void Beacon Shader — The Hollow Knight Abyss
//
// Fractional Brownian motion with a harsh smoothstep clamp to
// create sharp, creeping, viscous tendrils of absolute black.
// The uLightRadius uniform controls a radial clear-zone: as it
// grows, the smoothstep threshold shifts, violently pushing the
// tendrils to the screen edges.
//
// Colour: absolute #000000 — no tint, no violet core, no edge
// variation. The Void is pure null.
// ─────────────────────────────────────────────────────────────

export const vertexShader = /* glsl */ `
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

export const fragmentShader = /* glsl */ `
  precision highp float;

  uniform vec2  uResolution;
  uniform float uTime;
  uniform float uLightRadius;

  // ── Hash ──
  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  // ── Value noise ──
  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i),                      hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)),   hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  // ── Rotated-octave fBm ──
  // 5 octaves with aggressive rotation to break grid artefacts.
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
    for (int i = 0; i < 5; i++) {
      v += a * vnoise(p);
      p = rot * p * 2.03;
      a *= 0.48;
    }
    return v;
  }

  // ── Domain-warped turbulent ink ──
  // Two nested warps produce convecting, self-folding fluid —
  // the viscous quality of Hollow Knight's Void.
  float turbulentInk(vec2 p, float t) {
    vec2 q = vec2(
      fbm(p + vec2(0.0, 0.0) + 0.06 * t),
      fbm(p + vec2(5.2, 1.3) + 0.055 * t)
    );
    vec2 r = vec2(
      fbm(p + 3.5 * q + vec2(1.7, 9.2) - 0.09 * t),
      fbm(p + 3.5 * q + vec2(8.3, 2.8) + 0.07 * t)
    );
    return fbm(p + 4.2 * r);
  }

  // ── Tendrils ──
  // Polar sampling + sharp smoothstep = thin, writhing filaments.
  float tendrils(vec2 p, float t, vec2 center) {
    vec2 d = p - center;
    float ang = atan(d.y, d.x);
    float rad = length(d);
    vec2 polar = vec2(ang * 3.0, rad * 5.5 - t * 0.85);
    float n = turbulentInk(polar * 0.6, t * 0.4);
    // Harsh smoothstep — sharp crest-to-trough, no soft smoke
    float s = smoothstep(0.42, 0.82, n);
    // pow sharpens further — tendrils feel like ink, not gauze
    return pow(s, 1.6);
  }

  void main() {
    // Normalised screen UV (0..1), Y flipped for browser coords
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    uv.y = 1.0 - uv.y;

    float aspect = uResolution.x / uResolution.y;
    vec2 p = vec2(uv.x * aspect, uv.y);
    vec2 center = vec2(0.5 * aspect, 0.5);

    vec2 d = p - center;
    float dist = length(d);

    // ── Light radius ──
    // Convert uniform (0..1) to screen-space. At 1.0 the light
    // fills the diagonal; at 0.0 it's a pinprick.
    float maxDim = sqrt(aspect * aspect + 1.0);
    float lightR = uLightRadius * maxDim * 0.65;

    // ── Viscous ink body ──
    // Sample pulled toward centre for "sucked inward" feel.
    vec2 inkP = p * 2.8 + 0.6 * d / max(dist, 0.04);
    float ink = turbulentInk(inkP, uTime);

    // Harsh smoothstep: the sharp threshold is what creates the
    // viscous, liquid-metal edge of the Void — not soft fog.
    // Lower edge = more black; upper edge = harder cutoff.
    ink = smoothstep(0.32, 0.76, ink);

    // ── Tendril field ──
    float tend = tendrils(p * 1.3, uTime, center);

    // ── Light-front mask ──
    // Inside lightR: 0 (clear). Outside: 1 (consumed).
    // Feather is tight (0.08) — the Void snaps back fast.
    float feather = 0.08 + 0.03 * sin(uTime * 3.2 + dist * 4.0);
    // smoothstep(high, low, dist) → 1 outside, 0 inside
    float voidMask = smoothstep(lightR - feather, lightR + feather, dist);

    // Tendrils reach past the front — the "alive" signal.
    float tendrilReach = smoothstep(lightR - 0.02, lightR + 0.45, dist);

    // ── Composite ──
    float shadow = voidMask * mix(ink, 1.0, 0.72);
    shadow = max(shadow, tend * tendrilReach * 0.92);

    // Contrast — toothy at rest, solid under pressure
    shadow = pow(shadow, mix(1.4, 0.85, uLightRadius));

    // ── Absolute black ──
    // No tint. No edge variation. No violet core.
    // The Void is #000000, null, zero.
    vec3 voidColor = vec3(0.0, 0.0, 0.0);

    gl_FragColor = vec4(voidColor, shadow);
  }
`;
