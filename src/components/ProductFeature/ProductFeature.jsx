import { motion } from "framer-motion";
import crosshair from "../../assets/images/crosshair.png";
import heroScrew from "../../assets/images/product-section/hero-screw-rotation.png";
import "./ProductFeature.css";

const REVEAL = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};
const t = (delay = 0) => ({ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay });

export default function ProductFeature({ product }) {
  const { feature, img, title } = product;

  return (
    <section className="pf">
      <div className="container-wide pf__inner">
        <motion.div className="pf__media" {...REVEAL} transition={t(0)}>
          <span className="pf__ghost-num">01</span>
          <img src={img} alt={title[0]} className="pf__img" />
        </motion.div>

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
