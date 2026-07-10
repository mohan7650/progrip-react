/**
 * ScrewCanvas — procedural 3D drywall screw, tumbling around its long axis.
 *
 * Rotation axis: Y-axis (world-space), which sweeps the screw's shaft (X-axis)
 * so the ends alternately face the camera:
 *   0°   → side profile
 *   90°  → head disc faces camera (Phillips cross visible)
 *   180° → opposite side profile
 *   270° → pointed tip faces camera
 *
 * Why not a flat PNG?
 *   A single PNG has zero depth data. CSS transforms can only squish/mirror it.
 *   At 90° you'd see a thin line, never the head face or tip. Genuine 3D content
 *   is required to show those views — hence this Three.js implementation.
 */

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

// ─── Constants ────────────────────────────────────────────────────────────────

const TWO_PI     = Math.PI * 2;
const SPEED      = TWO_PI / 4;          // 4 s per full revolution
const TILT_Z     = (6.98 * Math.PI) / 180; // matches original -173.02° diagonal

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

function Screw() {
  const tumbleRef = useRef(null);

  // Honour prefers-reduced-motion (pause animation, don't remove it)
  const reduced = useMemo(
    () => typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  // Tumble: Y-axis rotation sweeps the screw's long axis (X) past the camera.
  // At rotation.y = π/2  → +X end (head) faces +Z camera  ✓
  // At rotation.y = 3π/2 → −X end (tip)  faces +Z camera  ✓
  useFrame((_, delta) => {
    if (!reduced && tumbleRef.current) {
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
  //   Tip  at −X end  (rotation.y = 3π/2 brings it toward camera)
  //   Head at +X end  (rotation.y =  π/2 brings it toward camera)

  return (
    // Outer group: static cosmetic tilt matching original diagonal layout
    <group rotation={[0, 0, TILT_Z]}>

      {/* Tumble group — this is the only thing that moves */}
      <group ref={tumbleRef}>

        {/* ── Shaft ─────────────────────────────────────────────── */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[SH_R, SH_R, SH_L, 32]} />
          <meshStandardMaterial {...body} />
        </mesh>

        {/* ── Tip — cone at −X end ──────────────────────────────── *
         *  ConeGeometry tip is at +Y. After rotation.z = +π/2:
         *  +Y → −X  so the sharp point ends up at the −X side.   */}
        <mesh
          position={[-(SH_L / 2) + TIP_L / 2, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <coneGeometry args={[SH_R, TIP_L, 32]} />
          <meshStandardMaterial {...body} />
        </mesh>

        {/* ── Head taper — bugle shape at +X end ────────────────── *
         *  CylinderGeometry(topR, bottomR, h).                      *
         *  After rotation.z = π/2: +Y→−X, −Y→+X.                   *
         *  So topR (small) is at −X side (inner), bottomR at +X.    */}
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
    </group>
  );
}

// ─── Canvas wrapper ───────────────────────────────────────────────────────────

export default function ScrewCanvas() {
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
      }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
      // Slightly elevated camera shows thread ridges on top AND head face at 90°
      camera={{ position: [0, 1.5, 6.2], fov: 30 }}
    >
      {/* Soft ambient fill */}
      <ambientLight intensity={0.28} />

      {/* Main key light — upper right front */}
      <directionalLight position={[3, 5, 4]} intensity={1.6} color="#ffffff" />

      {/* Cool rim light from back-left (accentuates thread edges) */}
      <pointLight position={[-5, -1, -3]} intensity={0.55} color="#3a4fcc" />

      {/* Subtle warm fill from below */}
      <pointLight position={[0, -4, 2]}   intensity={0.16} color="#ffeecc" />

      {/* HDR studio environment for realistic metallic sheen */}
      <Environment preset="studio" />

      <Screw />
    </Canvas>
  );
}
