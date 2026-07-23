import { motion } from "framer-motion";
import Button from "../Shared/Button.jsx";

export default function ApplicationCard({
  wide = false,
  accent = "red",
  number,
  image,
  imageAlt,
  title,
  projectTypes,
  products,
  whyMatters,
  proTip,
  typicalQuantities,
  primaryCta,
  secondaryCta,
  delay = 0,
}) {
  const cls = ["app-card", `app-card--${accent}`, wide ? "app-card--wide" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.article
      className={cls}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {/* Image (Figma: Background 459×220) */}
      <div className="app-photo">
        <img src={image} alt={imageAlt || ""} />
      </div>

      {/* Card body (Figma: Container pad:34,32,40,32 gap:16) */}
      <div className="app-card__body">

        {/* 01 — Number + accent divider (Figma: Container 395×15) */}
        {number && (
          <div className="app-index">
            <span>{number}</span>
          </div>
        )}

        {/* 02 — Application Type label (Figma: Container 395×26 pad:13,0,0,0 Arial/11/w700) */}
        <p className="app-type-label">Application Type</p>

        {/* 03 — Title (Figma: Heading 3 395×68 Russo One/32) */}
        <h3 className="app-card__title">{title}</h3>

        {/* 04 — Project Types (Figma: Container 395×82 pad:13,0,0,0 gap:7) */}
        <div className="app-section-group">
          <p className="app-section-label">Project Types</p>
          <p className="app-card__desc">{projectTypes}</p>
        </div>

        {/* 05 — Recommended Products (Figma: Container pad:13,0,0,0 gap:7) */}
        <div className="app-products-block">
          <p className="app-section-label">Recommended Products</p>
          <ul className="app-products">
            {products.map((product, i) => (
              <li key={i}>{product}</li>
            ))}
          </ul>
        </div>

        {/* 06 — Why This Matters (Figma: Container pad:13,0,13,0 gap:8) */}
        {whyMatters && (
          <div className="app-why-matters">
            <p className="app-section-label app-section-label--accent">Why This Matters</p>
            <p className="app-card__desc">{whyMatters}</p>
          </div>
        )}

        {/* 07 — Pro Tip (Figma: VerticalBorder pad:0,0,0,19 gap:8 — left accent line) */}
        {proTip && (
          <div className="app-pro-tip">
            <p className="app-section-label app-section-label--sm">Pro Tip</p>
            <p className="app-card__desc">{proTip}</p>
          </div>
        )}

        {/* 08 — Typical Quantities (Figma: Container pad:13,0,0,0 gap:7 Arial/11) */}
        {typicalQuantities && (
          <div className="app-quantities">
            <p className="app-section-label app-section-label--sm">Typical Quantities</p>
            <p className="app-card__desc">{typicalQuantities}</p>
          </div>
        )}

      </div>

      {/* CTA buttons (Figma: Frame 24 460×132 gap:12) */}
      <div className="app-card__ctas">
        {wide ? (
          <div className="btn-row">
            <Button href="#" variant="red">{primaryCta}</Button>
            {secondaryCta && <Button href="#" variant="ghost">{secondaryCta}</Button>}
          </div>
        ) : (
          <>
            <Button href="#" variant="red" block>{primaryCta}</Button>
            {secondaryCta && (
              <Button href="#" variant="ghost" block>{secondaryCta}</Button>
            )}
          </>
        )}
      </div>
    </motion.article>
  );
}
