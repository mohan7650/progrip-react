import { motion } from "framer-motion";
import heroScrew from "../../assets/images/product-section/hero-screw.png";
import "./ProductHero.css";

const REVEAL = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };
const t = (delay = 0) => ({ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay });

export default function ProductHero({ product }) {
  return (
    <section className="ph">
      <img src={heroScrew} alt="" className="ph__bg" aria-hidden="true" />
      <div className="ph__overlay" aria-hidden="true" />

      <div className="container ph__inner">
        <motion.div className="ph__left" {...REVEAL} transition={t(0)}>
          <span className="ph__badge">
            <i className="ph__badge-dot" aria-hidden="true" />
            {product.badge}
          </span>

          <h1 className="ph__title">
            {product.title.map((line, i) => (
              <span key={i} className={i === 1 ? "ph__title-red" : undefined}>
                {line}
                {i < product.title.length - 1 && <br />}
              </span>
            ))}
          </h1>
        </motion.div>

        <motion.div className="ph__right" {...REVEAL} transition={t(0.15)}>
          <p className="ph__desc">{product.desc}</p>

          <ul className="ph__specs">
            {product.specs.map((s) => (
              <li key={s.label} className="ph__spec-tag">
                <span className="ph__spec-label">{s.label}</span>
                <span className="ph__spec-value">{s.value}</span>
              </li>
            ))}
          </ul>

          <div className="btn-row ph__btns">
            <button type="button" className="btn btn-red btn-lg">Buy Now</button>
            <button type="button" className="btn btn-outline btn-lg">Build Submittal</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
