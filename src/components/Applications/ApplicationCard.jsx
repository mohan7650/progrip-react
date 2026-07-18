import { motion } from "framer-motion";
import Button from "../Shared/Button.jsx";

/**
 * One application-guide card. `wide` switches to the 2-up layout where
 * the CTA buttons sit in a .btn-row instead of stacked block buttons.
 * `accent` (green | blue | red) themes the index number, divider,
 * APPLICATION TYPE + WHY THIS MATTERS labels, and PRO TIP.
 */
export default function ApplicationCard({
  wide = false,
  accent = "red",
  number,
  photoClass,
  image,
  imageAlt,
  title,
  projectTypes,
  products,
  whyItMatters,
  proTip,
  quantities,
  primaryCta,
  secondaryCta,
  delay = 0,
}) {
  const className = [
    "card",
    "app-card",
    `app-card--${accent}`,
    wide ? "wide" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.article
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      <div className={`app-photo ${photoClass}`}>
        {image && <img src={image} alt={imageAlt || ""} />}
      </div>
      {number && (
        <div className="app-index">
          <span>{number}</span>
        </div>
      )}

      <p className="micro-label acc">APPLICATION TYPE</p>
      <h3>{title}</h3>

      <div className="app-block">
        <p className="micro-label">PROJECT TYPES</p>
        <p>{projectTypes}</p>
      </div>

      <div className="app-block">
        <p className="micro-label">RECOMMENDED PRODUCTS</p>
        {products.map((product, i) => (
          <p key={i}>{product}</p>
        ))}
      </div>

      <div className="app-block">
        <p className="micro-label acc">WHY THIS MATTERS</p>
        <p>{whyItMatters}</p>
        <div className="pro-tip">
          <p className="micro-label acc">PRO TIP</p>
          <p>{proTip}</p>
        </div>
      </div>

      <div className="app-block">
        <p className="micro-label">TYPICAL QUANTITIES</p>
        <p>{quantities}</p>
      </div>

      {wide ? (
        <div className="btn-row">
          <Button href="#" variant="red">{primaryCta}</Button>
          <Button href="#" variant="ghost">{secondaryCta}</Button>
        </div>
      ) : (
        <>
          <Button href="#" variant="red" block>{primaryCta}</Button>
          <Button href="#" variant="ghost" block>{secondaryCta}</Button>
        </>
      )}
    </motion.article>
  );
}
