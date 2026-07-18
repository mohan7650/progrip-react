import { motion } from "framer-motion";

export default function FeatureCard({ index, title, text, result, stats, delay = 0 }) {
  return (
    <motion.article
      className="why-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      <span className="why-card__index">{index}</span>

      <h3 className="why-card__title">{title}</h3>

      <p className="why-card__text">{text}</p>

      <div className="why-card__result">
        <strong>Result:</strong> {result}
      </div>

      <ul className="why-card__stats">
        {stats.map((stat) => (
          <li key={stat}>{stat}</li>
        ))}
      </ul>
    </motion.article>
  );
}
