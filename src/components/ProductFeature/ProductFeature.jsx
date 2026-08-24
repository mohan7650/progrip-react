import { useState, useRef, useCallback, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import crosshair from "../../assets/images/crosshair.png";
import { useTranslation } from "../../i18n/useTranslation.js";
import "./ProductFeature.css";

const COARSE_MODULES = import.meta.glob(
  "../../assets/images/product-section/Coarse 6x1-1_4 Screw/frame-*.webp",
  { eager: true, import: "default" }
);
const COARSE_URLS = Object.keys(COARSE_MODULES).sort().map((k) => COARSE_MODULES[k]);

const FINE_MODULES = import.meta.glob(
  "../../assets/images/product-section/Fine 6x1-1_4 Screw/frame-*.webp",
  { eager: true, import: "default" }
);
const FINE_URLS = Object.keys(FINE_MODULES).sort().map((k) => FINE_MODULES[k]);

const SELFDRILL_MODULES = import.meta.glob(
  "../../assets/images/product-section/6x1-1_4 Self Drilling/frame-*.webp",
  { eager: true, import: "default" }
);
const SELFDRILL_URLS = Object.keys(SELFDRILL_MODULES).sort().map((k) => SELFDRILL_MODULES[k]);

const CEMENT_MODULES = import.meta.glob(
  "../../assets/images/product-section/Sharp Point Cement Board Screw/frame-*.webp",
  { eager: true, import: "default" }
);
const CEMENT_URLS = Object.keys(CEMENT_MODULES).sort().map((k) => CEMENT_MODULES[k]);

const REVEAL = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};
const revealTransition = (delay = 0) => ({ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay });

const STEP_DEGS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

export default function ProductFeature({ product, useFrameSequence = false, frameSet = "coarse" }) {
  const { t } = useTranslation();
  const SCROLL_FEATURES = t.productFeature.steps;
  const { feature, img, title } = product;

  const FRAME_URLS =
    frameSet === "fine" ? FINE_URLS :
    frameSet === "selfdrill" ? SELFDRILL_URLS :
    frameSet === "cement" ? CEMENT_URLS :
    COARSE_URLS;
  const FRAME_COUNT = FRAME_URLS.length;

  const [angle, setAngle]           = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showHint, setShowHint]     = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [framesReady, setFramesReady]   = useState(false);

  const sectionRef   = useRef(null);
  const dragStartX   = useRef(0);
  const dragStartAng = useRef(0);

  const dismissHint = useCallback(() => setShowHint(false), []);

  // Reset load state when frame set changes
  useEffect(() => {
    setFramesReady(false);
    setLoadProgress(0);
  }, [frameSet]);

  // Preload actual image data in batches of 8 to avoid overwhelming the network
  useEffect(() => {
    if (!useFrameSequence || FRAME_COUNT === 0) return;
    let loaded = 0;
    const BATCH = 8;

    const preloadBatch = (start) => {
      const end = Math.min(start + BATCH, FRAME_COUNT);
      let batchDone = 0;
      for (let i = start; i < end; i++) {
        const img = new Image();
        img.onload = img.onerror = () => {
          loaded++;
          batchDone++;
          setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100));
          if (loaded >= FRAME_COUNT) setFramesReady(true);
          if (batchDone === end - start && end < FRAME_COUNT) preloadBatch(end);
        };
        img.src = FRAME_URLS[i];
      }
    };

    preloadBatch(0);
  }, [useFrameSequence, FRAME_URLS, FRAME_COUNT]);

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

  useLayoutEffect(() => {
    if (!useFrameSequence) return undefined;

    setAngle(0);

    let animationFrame = 0;

    const syncToScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
        const progress = Math.min(Math.max(-rect.top / travel, 0), 1);

        setAngle(progress * 359.999);
        if (progress > 0.005) setShowHint(false);
      });
    };

    syncToScroll();
    window.addEventListener("scroll", syncToScroll, { passive: true });
    window.addEventListener("resize", syncToScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", syncToScroll);
      window.removeEventListener("resize", syncToScroll);
    };
  }, [useFrameSequence]);

  const snapTo = useCallback((deg) => {
    dismissHint();
    setAngle(deg);

    if (useFrameSequence && sectionRef.current) {
      const section = sectionRef.current;
      const sectionTop = window.scrollY + section.getBoundingClientRect().top;
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);

      window.scrollTo({
        top: sectionTop + (deg / 360) * travel,
        behavior: "smooth",
      });
    }
  }, [dismissHint, useFrameSequence]);

  // Nearest step for active highlight
  const activeStep = STEP_DEGS.reduce((prev, cur) =>
    Math.abs(cur - displayDeg) < Math.abs(prev - displayDeg) ? cur : prev
  );
  const activeFeatureIndex = Math.min(
    Math.floor((displayDeg / 360) * SCROLL_FEATURES.length),
    SCROLL_FEATURES.length - 1,
  );
  const visibleFeature = useFrameSequence
    ? SCROLL_FEATURES[activeFeatureIndex]
    : feature;

  return (
    <section
      ref={sectionRef}
      className={`pf${useFrameSequence ? " pf--scroll-story" : ""}`}
    >
      <div className="container-wide pf__inner">

        {/* ── Photo viewer (left) ──────────────────────────────────── */}
        <motion.div className="pf__media" {...REVEAL} transition={revealTransition(0)}>
          <span className="pf__ghost-num">
            {useFrameSequence
              ? String(activeFeatureIndex + 1).padStart(2, "0")
              : "01"}
          </span>

          <div
            className={`pf__viewer${isDragging ? " pf__viewer--dragging" : ""}`}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {useFrameSequence && FRAME_COUNT > 0 ? (
              <>
                <img
                  src={FRAME_URLS[
                    framesReady
                      ? ((Math.round((angle / 360) * FRAME_COUNT) % FRAME_COUNT) + FRAME_COUNT) % FRAME_COUNT
                      : 0
                  ]}
                  alt={title[0]}
                  className="pf__img pf__img--frame"
                  draggable={false}
                  style={framesReady ? undefined : { pointerEvents: "none" }}
                />
                {!framesReady && (
                  <div className="pf__frame-loader">
                    <div className="pf__frame-loader-bar" style={{ width: `${loadProgress}%` }} />
                  </div>
                )}
              </>
            ) : (
              <img
                src={img}
                alt={title[0]}
                className="pf__img"
                style={{ transform: `rotate(${angle}deg)` }}
                draggable={false}
              />
            )}

            {showHint && (
              <div className="pf__drag-hint">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M7 12H3M3 12l3-3M3 12l3 3M17 12h4M21 12l-3-3M21 12l-3 3" />
                </svg>
                {useFrameSequence ? t.productDetail.scrollToRotate : t.productDetail.dragToRotate}
              </div>
            )}

          </div>

        </motion.div>

        {/* ── Content (right) ───────────────────────────────────────── */}
        <motion.div
          key={useFrameSequence ? activeFeatureIndex : "product-feature"}
          className="pf__content"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="pf__eyebrow">
            <img src={crosshair} alt="" className="pf__eyebrow-icon" aria-hidden="true" />
            {visibleFeature.eyebrow}
          </span>

          <h2 className="pf__heading">
            {visibleFeature.heading}
            <br />
            <span className="pf__heading-red">{visibleFeature.headingRed}</span>
          </h2>

          <p className="pf__desc">{visibleFeature.desc}</p>

          <div className="pf__stats">
            {visibleFeature.stats.map((s, i) => (
              <div key={i} className="pf__stat">
                <span className="pf__stat-value">{s.value}</span>
                <span className="pf__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* 30° step dots */}
          <div className="pf__angle-steps" role="group" aria-label={t.productDetail.rotateToAngle}>
            {STEP_DEGS.map((deg) => (
              <button
                key={deg}
                className={`pf__angle-dot${activeStep === deg ? " pf__angle-dot--active" : ""}`}
                onClick={() => snapTo(deg)}
                aria-label={t.productDetail.viewAtDegrees(deg)}
                aria-pressed={activeStep === deg}
                title={`${deg}°`}
              />
            ))}
          </div>
        </motion.div>

        <div className="pf__scroll-indicator" aria-hidden="true">
          <span className="pf__scroll-text">{t.productDetail.scrollDown}</span>
          <span className="pf__scroll-line" />
        </div>
      </div>
    </section>
  );
}
