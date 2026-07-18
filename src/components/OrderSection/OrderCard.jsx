import { motion } from "framer-motion";

/** One platform-feature card in the "Order like a pro" grid. */
export default function OrderCard({ category, title, text, items, delay = 0 }) {
  const cat = category.toLowerCase();
  return (
    <motion.div
      className={`o-card o-card--${cat}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      <span className={`o-tag o-tag--${cat}`}>{category}</span>
      <h4 className="o-title">{title}</h4>
      <p className="o-desc">{text}</p>
      <ul className="mini-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
