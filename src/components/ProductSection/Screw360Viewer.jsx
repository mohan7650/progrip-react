import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Screw360Viewer.css";

const frameModules = import.meta.glob(
  "../../assets/images/screw-360/frame-*.png",
  { eager: true, import: "default" }
);

const FRAME_URLS = Object.keys(frameModules)
  .sort()
  .map((k) => frameModules[k]);

console.log('loaded frames:', FRAME_URLS.length, FRAME_URLS[0]);

const TOTAL = FRAME_URLS.length; // 204
const REVOLUTION_MS = 8000;
const MS_PER_FRAME = REVOLUTION_MS / TOTAL;
const PX_PER_FRAME = 4;

function mod(n, m) {
  return ((n % m) + m) % m;
}

export default function Screw360Viewer() {
  const [frame, setFrame] = useState(0);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  const isDragging = useRef(false);
  const dragOriginX = useRef(0);
  const dragOriginFrame = useRef(0);
  const frameRef = useRef(0);
  const lastTs = useRef(null);
  const rafId = useRef(null);
  const containerRef = useRef(null);
  const reducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Preload all frames before starting animation
  useEffect(() => {
    let loaded = 0;
    FRAME_URLS.forEach((url) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded++;
        setProgress(Math.round((loaded / TOTAL) * 100));
        if (loaded >= TOTAL) setReady(true);
      };
      img.src = url;
    });
  }, []);

  const startDrag = useCallback((clientX) => {
    isDragging.current = true;
    dragOriginX.current = clientX;
    dragOriginFrame.current = frameRef.current;
    lastTs.current = null;
  }, []);

  const moveDrag = useCallback((clientX) => {
    if (!isDragging.current) return;
    // drag left → positive delta → advance frames forward
    const delta = dragOriginX.current - clientX;
    const next = mod(
      dragOriginFrame.current + Math.round(delta / PX_PER_FRAME),
      TOTAL
    );
    frameRef.current = next;
    setFrame(next);
  }, []);

  const endDrag = useCallback(() => {
    isDragging.current = false;
    lastTs.current = null; // reset so auto-rotation resumes smoothly
  }, []);

  // Time-based RAF loop — advances frames at a fixed real-time rate
  const tick = useCallback((ts) => {
    if (!isDragging.current && !reducedMotion.current) {
      if (lastTs.current === null) lastTs.current = ts;
      const elapsed = ts - lastTs.current;
      if (elapsed >= MS_PER_FRAME) {
        const advance = Math.floor(elapsed / MS_PER_FRAME);
        frameRef.current = mod(frameRef.current + advance, TOTAL);
        setFrame(frameRef.current);
        lastTs.current = ts - (elapsed % MS_PER_FRAME);
      }
    }
    rafId.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (!ready) return;
    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, [ready, tick]);

  // Global mouse listeners so drag works even outside the element
  useEffect(() => {
    const onMove = (e) => moveDrag(e.clientX);
    const onUp = () => endDrag();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [moveDrag, endDrag]);

  // Touch-move must be non-passive to call preventDefault and block page scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onTouchMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      moveDrag(e.touches[0].clientX);
    };
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => el.removeEventListener("touchmove", onTouchMove);
  }, [moveDrag]);

  const onMouseDown = (e) => {
    e.preventDefault();
    startDrag(e.clientX);
  };

  const onTouchStart = (e) => startDrag(e.touches[0].clientX);
  const onTouchEnd = () => endDrag();

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      frameRef.current = mod(frameRef.current + 1, TOTAL);
      setFrame(frameRef.current);
    } else if (e.key === "ArrowLeft") {
      frameRef.current = mod(frameRef.current - 1, TOTAL);
      setFrame(frameRef.current);
    }
  };

  return (
    <div
      ref={containerRef}
      className="screw360"
      tabIndex={0}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
    >
      {!ready && (
        <div className="screw360__progress" aria-hidden="true">
          <div
            className="screw360__progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      <img
        className="screw360__frame"
        src={FRAME_URLS[frame]}
        alt="Pro-Grip drywall screw — 360-degree product view"
        draggable={false}
      />
    </div>
  );
}
