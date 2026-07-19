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
  primaryCta,
  secondaryCta,
  delay = 0,
}) {
  const cls = [
    "app-card",
    `app-card--${accent}`,
    wide ? "app-card--wide" : "",
  ]
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
      {/* 1. Image */}
      <div className="app-photo">
        <img src={image} alt={imageAlt || ""} />
      </div>

      {/* Card body — flex: 1 pushes CTAs to bottom */}
      <div className="app-card__body">
        {number && (
          <div className="app-index">
            <span>{number}</span>
          </div>
        )}

        {/* 2. Application title */}
        <h3 className="app-card__title">{title}</h3>

        {/* 3. Supporting description */}
        <p className="app-card__desc">{projectTypes}</p>

        {/* 4. Recommended products */}
        <div className="app-products-block">
          <p className="app-micro-label">RECOMMENDED PRODUCTS</p>
          <ul className="app-products">
            {products.map((product, i) => (
              <li key={i}>{product}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 5 & 6. CTA buttons */}
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
