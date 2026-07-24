import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ProductSection.css";

import heroScrew from "../../assets/images/product-section/hero-screw-rotation.png";
import screw01 from "../../assets/images/product-section/screw-01.png";
import screw02 from "../../assets/images/product-section/screw-02.png";
import screw03 from "../../assets/images/product-section/screw-03.png";
import box04 from "../../assets/images/product-section/box-04.png";
import box05 from "../../assets/images/product-section/box-05.png";
import box06 from "../../assets/images/product-section/box-06.png";
import coarse01 from "../../assets/images/product-section/Coarse Thread Drywall Screw_01.png";
import coarse02 from "../../assets/images/product-section/Coarse Thread Drywall Screw_02.png";
import coarse03 from "../../assets/images/product-section/Coarse Thread Drywall Screw_03.png";
import coarse04 from "../../assets/images/product-section/Coarse Thread Drywall Screw_04.png";
import coarse05 from "../../assets/images/product-section/Coarse Thread Drywall Screw_05.png";
import coarse06 from "../../assets/images/product-section/Coarse Thread Drywall Screw_06.png";

const CATEGORIES = [
  {
    id: 1,
    num: "01",
    title: "Sharp Point - Fine Thread",
    desc: "Self-drilling for quick penetration.",
  },
  {
    id: 2,
    num: "02",
    title: "Sharp Point - Coarse Thread",
    desc: "Fast bite performance for stronger day-to-day applications.",
  },
  {
    id: 3,
    num: "03",
    title: "Self Drilling",
    desc: "Built for demanding assemblies where strength matters most.",
  },
];

const VIEWS = {
  1: {
    index: "01",
    products: [
      { id: 1, label: '01 — Fine 6×2"', img: screw01, alt: 'Fine thread 6×2" drywall screw' },
      { id: 2, label: '02 — Coarse 6×1-1/4"', img: screw02, alt: 'Coarse thread 6×1-1/4" drywall screw' },
      { id: 3, label: '03 — Fine 6×1-1/4"', img: screw03, alt: 'Fine thread 6×1-1/4" drywall screw' },
      { id: 4, label: "04 — Drywall Screw", img: box04, alt: "Coarse thread drywall screws box" },
      { id: 5, label: "05 — Drywall Screw", img: box05, alt: "Fine thread drywall screws box" },
      { id: 6, label: "06 — Drywall Screw", img: box06, alt: "Fine thread drywall screws box" },
    ],
    details: {
      eyebrow: "Faster Installation",
      title: <>Coarse Thread<br />Drywall Screws</>,
      size: "6×1-1/4″",
    },
    highlights: [
      { id: 1, title: "Coarse Thread Screws", detail: "# 6×1 - 7/8″" },
      { id: 2, title: "8000 PCS", detail: "Weight : 22 lb" },
    ],
  },
  2: {
    index: "02",
    products: [
      { id: 1, label: "01 — Coarse Thread Drywall Screw", img: coarse01, alt: "Coarse thread drywall screw 01" },
      { id: 2, label: "02 — Coarse Thread Drywall Screw", img: coarse02, alt: "Coarse thread drywall screw 02" },
      { id: 3, label: "03 — Coarse Thread Drywall Screw", img: coarse03, alt: "Coarse thread drywall screw 03" },
      { id: 4, label: "04 — Coarse Thread Drywall Screw", img: coarse04, alt: "Coarse thread drywall screw 04" },
      { id: 5, label: "05 — Coarse Thread Drywall Screw", img: coarse05, alt: "Coarse thread drywall screw 05" },
      { id: 6, label: "06 — Coarse Thread Drywall Screw", img: coarse06, alt: "Coarse thread drywall screw 06" },
    ],
    details: {
      eyebrow: "Strong Day-to-Day",
      title: <>Sharp Point<br />Coarse Thread</>,
      size: "6×1-5/8″",
    },
    highlights: [
      { id: 1, title: "Coarse Thread Screws", detail: "# 6×1 - 5/8″" },
      { id: 2, title: "8000 PCS", detail: "Weight : 24 lb" },
    ],
  },
  3: {
    index: "03",
    products: [
      { id: 1, label: '01 — Self Drill 8×1"', img: screw01, alt: 'Self drilling 8×1" screw' },
      { id: 2, label: '02 — Self Drill 8×1-1/4"', img: screw02, alt: 'Self drilling 8×1-1/4" screw' },
      { id: 3, label: '03 — Self Drill 8×2"', img: screw03, alt: 'Self drilling 8×2" screw' },
      { id: 4, label: "04 — Self Drill Box", img: box04, alt: "Self drilling screws box" },
      { id: 5, label: "05 — Self Drill Box", img: box05, alt: "Self drilling screws box" },
      { id: 6, label: "06 — Self Drill Box", img: box06, alt: "Self drilling screws box" },
    ],
    details: {
      eyebrow: "Maximum Strength",
      title: <>Self Drilling<br />Screws</>,
      size: "8×1-1/4″",
    },
    highlights: [
      { id: 1, title: "Self Drilling Screws", detail: "# 8×1 - 1/4″" },
      { id: 2, title: "5000 PCS", detail: "Weight : 18 lb" },
    ],
  },
};

const REVEAL = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
};

const revealTransition = (delay = 0) => ({
  duration: 0.7,
  ease: [0.25, 0.1, 0.25, 1],
  delay,
});

function CategoryItem({ cat, isActive, onClick }) {
  return (
    <li
      className={`product-section__cat-item${
        isActive ? " product-section__cat-item--active" : ""
      }`}
      onClick={onClick}
    >
      <span className="product-section__cat-num">{cat.num}</span>
      <h3 className="product-section__cat-title">{cat.title}</h3>
      <p className="product-section__cat-desc">{cat.desc}</p>
    </li>
  );
}

function ProductCard({ product, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`product-section__card${
        isActive ? " product-section__card--active" : ""
      }`}
      onClick={onClick}
    >
      <span className="product-section__card-media">
        <img src={product.img} alt={product.alt} />
      </span>
      <span className="product-section__card-caption">{product.label}</span>
    </button>
  );
}

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState(1);
  const [activeProduct, setActiveProduct] = useState(1);

  const view = VIEWS[activeCategory];

  return (
    <section className="product-section" id="products">
      <div className="product-section__wrap">
        <div className="product-section__inner">
          <div className="product-section__hero-row">
            <motion.header
              className="product-section__header"
              {...REVEAL}
              transition={revealTransition(0)}
            >
              <span className="product-section__badge">
                <i
                  className="product-section__badge-dash"
                  aria-hidden="true"
                />
                Complete
              </span>

              <h2 className="product-section__heading">
                Products Built{" "}
                <span className="product-section__heading-index">01</span>
                <br />
                For Speed.
              </h2>

              <p className="product-section__subtitle">
                The full range of Pro-Grip fasteners for every job
              </p>
            </motion.header>

            <div className="product-section__hero-media" aria-hidden="true">
              <div className="product-visual">
                <div className="product-strips">
                  <span className="product-strip product-strip--red-left" />
                  <span className="product-strip product-strip--gray" />
                  <span className="product-strip product-strip--red-right" />
                </div>

                <img src={heroScrew} alt="" className="screw-reflection" />
                <img src={heroScrew} alt="" className="screw-main" />
              </div>
            </div>
          </div>

          <div className="product-section__content">
            <motion.aside
              className="product-section__sidebar"
              {...REVEAL}
              transition={revealTransition(0)}
            >
              <span className="product-section__cat-pill">Categories</span>

              <ul className="product-section__cat-list">
                {CATEGORIES.map((cat) => (
                  <CategoryItem
                    key={cat.id}
                    cat={cat}
                    isActive={activeCategory === cat.id}
                    onClick={() => { setActiveCategory(cat.id); setActiveProduct(1); }}
                  />
                ))}
              </ul>
            </motion.aside>

            <motion.div
              className="product-section__panel"
              {...REVEAL}
              transition={revealTransition(0.15)}
            >
              <div className="product-section__panel-label">
                <i className="product-section__dot" aria-hidden="true" />
                Interactive View
              </div>

              <span className="product-section__panel-index">{view.index}</span>

              <div className="product-section__grid">
                {view.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isActive={activeProduct === product.id}
                    onClick={() => setActiveProduct(product.id)}
                  />
                ))}
              </div>

              <div className="product-section__panel-footer">
                <div className="product-section__details">
                  <span className="product-section__details-eyebrow">
                    {view.details.eyebrow}
                  </span>

                  <h3 className="product-section__details-title">
                    {view.details.title}
                  </h3>

                  <span className="product-section__details-size">
                    {view.details.size}
                  </span>
                </div>

                <div className="product-section__actions">
                  <button type="button" className="product-section__btn">
                    Buy Now
                  </button>

                  <button
                    type="button"
                    className="product-section__btn product-section__btn--ghost"
                  >
                    Build Submittal
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.aside
              className="product-section__highlights"
              {...REVEAL}
              transition={revealTransition(0.3)}
            >
              <span className="product-section__highlights-title">
                Highlights
              </span>

              <ul className="product-section__highlights-list">
                {view.highlights.map((highlight) => (
                  <li
                    key={highlight.id}
                    className="product-section__highlight"
                  >
                    <i className="product-section__dot" aria-hidden="true" />

                    <div>
                      <h4>{highlight.title}</h4>
                      <p>{highlight.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <hr className="product-section__highlights-divider" />

              <button
                type="button"
                className="product-section__btn-outline"
              >
                Learn More
              </button>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
}