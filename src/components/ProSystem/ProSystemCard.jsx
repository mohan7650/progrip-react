import { motion } from "framer-motion";

export default function ProSystemCard({ accent, eyebrow, title, desc, items, ctaLabel, delay = 0 }) {
  return (
    <motion.article
      className={`pro-card pro-card--${accent}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      <div className="pro-card__body">
        <p className="pro-card__eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
        <p className="pro-card__desc">{desc}</p>
        <ul className="pro-card__list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="pro-card__divider" />
        <a href="#" className="pro-card__btn">{ctaLabel}</a>
      </div>
    </motion.article>
  );
}
