import { motion } from "framer-motion";
import crosshair from "../../assets/images/crosshair.png";
import { useTranslation } from "../../i18n/useTranslation.js";
import "./ProductOrder.css";

const REVEAL = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};
const t = (delay = 0) => ({ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay });

export default function ProductOrder({ product }) {
  const { t: translate } = useTranslation();
  const pd = translate.productDetail;
  return (
    <section className="po">
      <div className="container po__inner">
        <motion.div className="po__head" {...REVEAL} transition={t(0)}>
          <span className="po__eyebrow">
            <img src={crosshair} alt="" className="po__eyebrow-icon" aria-hidden="true" />
            {pd.orderLikeAPro}
          </span>

          <h2 className="po__heading">
            {pd.headingSpecIt}{" "}
            <span className="po__heading-red">{pd.headingStockIt}</span>{" "}
            {pd.headingDriveIt}
          </h2>

          <p className="po__sub">{pd.orderSub}</p>

          <div className="btn-row po__btns">
            <a href="#contact" className="btn btn-red">{pd.buyNow}</a>
            <a href="#contact" className="btn btn-outline">{pd.buildSubmittals}</a>
            <a href="#contact" className="btn btn-outline">{pd.downloadSpecSheet}</a>
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
