import { motion } from "framer-motion";
import "./ProductOrder.css";

const REVEAL = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};
const t = (delay = 0) => ({ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay });

export default function ProductOrder({ product }) {
  return (
    <section className="po">
      <div className="container po__inner">
        <motion.div className="po__head" {...REVEAL} transition={t(0)}>
          <span className="po__eyebrow">
            <i className="po__eyebrow-dot" aria-hidden="true" />
            Order Like a Pro
          </span>

          <h2 className="po__heading">
            Spec it.{" "}
            <span className="po__heading-red">Stock it.</span>{" "}
            Drive it.
          </h2>

          <p className="po__sub">
            Add this fastener to your submittal package or order direct for your next
            steel-framed build.
          </p>

          <div className="btn-row po__btns">
            <button type="button" className="btn btn-red">Buy Now</button>
            <button type="button" className="btn btn-outline">Build Submittal</button>
            <button type="button" className="btn btn-outline">Download Spec Sheet</button>
          </div>
        </motion.div>

        <div className="po__packages">
          {product.packages.map((pkg, i) => (
            <motion.div
              key={pkg.num}
              className="po__package"
              {...REVEAL}
              transition={t(i * 0.1)}
            >
              <span className="po__pkg-num">{pkg.num}</span>
              <h3 className="po__pkg-name">{pkg.name}</h3>
              <p className="po__pkg-desc">{pkg.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
