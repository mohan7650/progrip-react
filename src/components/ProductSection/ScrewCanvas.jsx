/**
 * ScrewCanvas — procedural 3D drywall screw, tumbling "in view" around its
 * vertical axis (turntable), matching the reference frame sequence.
 *
 * Rotation axis: Y-axis (world-space vertical). The shaft is built along X, so
 * spinning around Y keeps the screw HORIZONTAL and CENTERED on screen while its
 * ends swing toward/away from the camera:
 *
 *   0°   → side profile (full length, threads visible)
 *   90°  → head disc faces camera (Phillips cross visible, foreshortened to a disc)
 *   180° → opposite side profile
 *   270° → pointed tip faces camera (foreshortened)
 *
 * Verified against the reference: across the sequence the screw's on-screen
 * HEIGHT stays constant and its tilt stays horizontal, while its projected
 * LENGTH shrinks to a round disc at the "end-on" moment — the exact signature
 * of a Y-axis turntable. It never tips vertical and never leaves the frame.
 *
 * (An earlier iteration spun around Z — a flat "clock-hand" spin in the screen
 *  plane. That is a DIFFERENT motion and is intentionally NOT used here.)
 *
 * Why not a flat PNG?
 *   A single PNG has zero depth data. At 90 deg you'd see a thin line, never the
 *   head face or tip. Genuine 3D content is required to show those end-on views
 *   — hence this Three.js implementation.
 */

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

// ─── Constants ────────────────────────────────────────────────────────────────

const TWO_PI = Math.PI * 2;
const SPEED  = TWO_PI / 8;   // 8 s per full revolution — slow enough to read each face
                             // (bump the divisor, e.g. TWO_PI / 12, to match a slower reference)

// Screw proportions (scene units, approx real drywall screw 6×1-1/4")
const SH_R  = 0.062;   // shaft radius
const SH_L  = 3.50;    // total shaft length
const HD_R  = 0.215;   // head outer radius
const HD_H  = 0.095;   // head height
const TIP_L = 0.45;    // tip (cone) length
const TH_R  = 0.116;   // thread helix radius
const TH_T  = 0.026;   // thread tube radius
const TURNS = 22;       // number of thread turns

// ─── Thread helix geometry (built once, outside component) ────────────────────

function makeThreadGeometry() {
  const segs   = TURNS * 80;
  // Thread runs along shaft, leaving room for tip and head
  const xStart = -(SH_L / 2) + TIP_L + 0.14;
  const xEnd   =  (SH_L / 2) - HD_H  - 0.07;
  const span   = xEnd - xStart;

  const pts = Array.from({ length: segs + 1 }, (_, i) => {
    const t = i / segs;
    const a = t * TURNS * TWO_PI;
    return new THREE.Vector3(
      xStart + t * span,          // advances along X (shaft axis)
      Math.cos(a) * TH_R,         // circles in Y
      Math.sin(a) * TH_R,         // circles in Z
    );
  });

  return new THREE.TubeGeometry(
    new THREE.CatmullRomCurve3(pts), segs, TH_T, 8, false,
  );
}

// ─── Screw mesh ───────────────────────────────────────────────────────────────

function Screw({ spinning, rotationY }) {
  const tumbleRef = useRef(null);

  const reduced = useMemo(
    () => typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  useFrame((_, delta) => {
    if (!tumbleRef.current) return;
    if (rotationY !== undefined) {
      // Controlled mode: external angle drives the turntable rotation
      tumbleRef.current.rotation.y = rotationY;
    } else if (!reduced && spinning) {
      // Turntable spin: ends swing toward/away from the camera.
      tumbleRef.current.rotation.y += delta * SPEED;
    }
  });

  const threadGeom = useMemo(makeThreadGeometry, []);
  useEffect(() => () => threadGeom.dispose(), [threadGeom]);

  // Shared material props — dark phosphate-coated steel
  const body  = { color: "#222222", metalness: 0.97, roughness: 0.09 };
  const head  = { color: "#1a1a1a", metalness: 0.93, roughness: 0.17 };
  const slot  = { color: "#0b0b0b", metalness: 0.40, roughness: 0.70 };

  // All meshes are built with shaft running along X.
  //   Tip  at -X end  (rotation.y = 3pi/2 brings it toward camera)
  //   Head at +X end  (rotation.y =  pi/2 brings it toward camera)

  return (
    // No outer tilt — pure turntable, only Y rotates.
    <>
      <group ref={tumbleRef}>

        {/* ── Shaft ─────────────────────────────────────────────── */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[SH_R, SH_R, SH_L, 32]} />
          <meshStandardMaterial {...body} />
        </mesh>

        {/* ── Tip — cone at -X end ──────────────────────────────── */}
        <mesh
          position={[-(SH_L / 2) + TIP_L / 2, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <coneGeometry args={[SH_R, TIP_L, 32]} />
          <meshStandardMaterial {...body} />
        </mesh>

        {/* ── Head taper — bugle shape at +X end ────────────────── */}
        <mesh
          position={[(SH_L / 2) - HD_H / 2, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[HD_R * 0.55, HD_R * 0.70, HD_H, 32]} />
          <meshStandardMaterial {...head} />
        </mesh>

        {/* ── Head face disc ────────────────────────────────────── */}
        <mesh
          position={[(SH_L / 2) + 0.022, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[HD_R, HD_R, 0.04, 32]} />
          <meshStandardMaterial {...head} />
        </mesh>

        {/* ── Phillips cross — vertical arm ─────────────────────── */}
        <mesh position={[(SH_L / 2) + 0.044, 0, 0]}>
          <boxGeometry args={[0.048, HD_R * 1.88, 0.06]} />
          <meshStandardMaterial {...slot} />
        </mesh>

        {/* ── Phillips cross — horizontal arm ───────────────────── */}
        <mesh position={[(SH_L / 2) + 0.044, 0, 0]}>
          <boxGeometry args={[0.048, 0.06, HD_R * 1.88]} />
          <meshStandardMaterial {...slot} />
        </mesh>

        {/* ── Thread helix ──────────────────────────────────────── */}
        <mesh geometry={threadGeom}>
          <meshStandardMaterial {...body} />
        </mesh>

      </group>
    </>
  );
}

// ─── Canvas wrapper ───────────────────────────────────────────────────────────

export default function ScrewCanvas({ spinning = false, rotationY, style }) {
  return (
    <Canvas
      style={{
        position:      "absolute",
        top:           0,
        left:          0,
        width:         "100%",
        height:        "100%",
        display:       "block",
        pointerEvents: "none",
        zIndex:        2,
        background:    "#000000",
        ...style,
      }}
      gl={{ alpha: false, antialias: true }}
      dpr={[1, 2]}
      // Head-on camera — the end-on frame reads as a clean round disc, matching
      // the reference. (Raise Y to ~0.6 to look slightly down and see the top
      // surface during the side-profile moments.)
      camera={{ position: [0, 0, 5.5], fov: 32 }}
    >
      {/* Soft fill so the dark body has some base visibility */}
      <ambientLight intensity={0.15} />

      {/* Key light — upper right, sharp highlights on threads */}
      <directionalLight position={[5, 6, 4]}  intensity={2.0} color="#ffffff" />

      {/* Cool fill from left */}
      <directionalLight position={[-4, 2, 3]} intensity={0.5} color="#b0c8ff" />

      {/* Rim light from behind — outlines screw against black background */}
      <pointLight position={[0, 0, -5]}       intensity={1.5} color="#ffffff" />

      <Environment preset="studio" />
      <Screw spinning={spinning} rotationY={rotationY} />
    </Canvas>
  );
}