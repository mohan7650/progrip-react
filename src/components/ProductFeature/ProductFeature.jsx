import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import crosshair from "../../assets/images/crosshair.png";
import "./ProductFeature.css";

const REVEAL = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};
const t = (delay = 0) => ({ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay });

const STEP_DEGS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

export default function ProductFeature({ product }) {
  const { feature, img, title } = product;

  const [angle, setAngle]           = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showHint, setShowHint]     = useState(true);

  const dragStartX   = useRef(0);
  const dragStartAng = useRef(0);

  const dismissHint = useCallback(() => setShowHint(false), []);

  // Normalise to 0-359 for display
  const displayDeg = ((angle % 360) + 360) % 360;

  // Mouse drag
  const onMouseDown = useCallback((e) => {
    setIsDragging(true);
    dismissHint();
    dragStartX.current   = e.clientX;
    dragStartAng.current = angle;
  }, [angle, dismissHint]);

  const onMouseMove = useCallback((e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX.current;
    setAngle(dragStartAng.current + dx * 0.5);
  }, [isDragging]);

  const onMouseUp = useCallback(() => setIsDragging(false), []);

  // Touch drag
  const onTouchStart = useCallback((e) => {
    setIsDragging(true);
    dismissHint();
    dragStartX.current   = e.touches[0].clientX;
    dragStartAng.current = angle;
  }, [angle, dismissHint]);

  const onTouchMove = useCallback((e) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - dragStartX.current;
    setAngle(dragStartAng.current + dx * 0.5);
  }, [isDragging]);

  const onTouchEnd = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    const up = () => setIsDragging(false);
    window.addEventListener("mouseup", up);
    return () => window.removeEventListener("mouseup", up);
  }, []);

  const snapTo = useCallback((deg) => {
    dismissHint();
    setAngle(deg);
  }, [dismissHint]);

  // Nearest step for active highlight
  const activeStep = STEP_DEGS.reduce((prev, cur) =>
    Math.abs(cur - displayDeg) < Math.abs(prev - displayDeg) ? cur : prev
  );

  return (
    <section className="pf">
      <div className="container-wide pf__inner">

        {/* ── Photo viewer (left) ──────────────────────────────────── */}
        <motion.div className="pf__media" {...REVEAL} transition={t(0)}>
          <span className="pf__ghost-num">01</span>

          <div
            className={`pf__viewer${isDragging ? " pf__viewer--dragging" : ""}`}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={img}
              alt={title[0]}
              className="pf__img"
              style={{ transform: `rotate(${angle}deg)` }}
              draggable={false}
            />

            {showHint && (
              <div className="pf__drag-hint">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M7 12H3M3 12l3-3M3 12l3 3M17 12h4M21 12l-3-3M21 12l-3 3" />
                </svg>
                Drag to rotate
              </div>
            )}

            <div className="pf__angle-badge">{Math.round(displayDeg)}°</div>
          </div>

          {/* 30° step dots */}
          <div className="pf__angle-steps" role="group" aria-label="Rotate to angle">
            {STEP_DEGS.map((deg) => (
              <button
                key={deg}
                className={`pf__angle-dot${activeStep === deg ? " pf__angle-dot--active" : ""}`}
                onClick={() => snapTo(deg)}
                aria-label={`View at ${deg} degrees`}
                aria-pressed={activeStep === deg}
                title={`${deg}°`}
              />
            ))}
          </div>

          {/* Degree number labels */}
          <div className="pf__angle-nums">
            {STEP_DEGS.map((deg) => (
              <button
                key={deg}
                className={`pf__angle-num${activeStep === deg ? " pf__angle-num--active" : ""}`}
                onClick={() => snapTo(deg)}
                aria-label={`View at ${deg} degrees`}
              >
                {deg}°
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Content (right) ───────────────────────────────────────── */}
        <motion.div className="pf__content" {...REVEAL} transition={t(0.15)}>
          <span className="pf__eyebrow">
            <img src={crosshair} alt="" className="pf__eyebrow-icon" aria-hidden="true" />
            {feature.eyebrow}
          </span>

          <h2 className="pf__heading">
            {feature.heading}
            <br />
            <span className="pf__heading-red">{feature.headingRed}</span>
          </h2>

          <p className="pf__desc">{feature.desc}</p>

          <div className="pf__stats">
            {feature.stats.map((s, i) => (
              <div key={i} className="pf__stat">
                <span className="pf__stat-value">{s.value}</span>
                <span className="pf__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="pf__scroll-indicator" aria-hidden="true">
          <span className="pf__scroll-text">Scroll Down</span>
          <span className="pf__scroll-line" />
        </div>
      </div>
    </section>
  );
}
