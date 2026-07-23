import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ProductSection.css";

import heroScrew from "../../assets/images/product-section/hero-screw.png";
import heroScrewRotation from "../../assets/images/product-section/hero-screw-rotation.png";
import screw01 from "../../assets/images/product-section/screw-01.png";
import screw02 from "../../assets/images/product-section/screw-02.png";
import screw03 from "../../assets/images/product-section/screw-03.png";
import box04   from "../../assets/images/product-section/box-04.png";
import box05   from "../../assets/images/product-section/box-05.png";
import box06   from "../../assets/images/product-section/box-06.png";

const CATEGORIES = [
  {
    id: 1,
    num: "01",
    title: "Framing Screws",
    desc: "Self-drilling for quick penetration.",
  },
  {
    id: 2,
    num: "02",
    title: "Drywall Screws",
    desc: "Fast bite performance for stronger day-to-day applications.",
  },
  {
    id: 3,
    num: "03",
    title: "Metal Stud Screws",
    desc: "Built for demanding assemblies where strength matters most.",
  },
];

const PRODUCTS = [
  { id: 1, label: '01 — Fine 6×2"',        img: screw01, alt: 'Fine thread 6×2" drywall screw' },
  { id: 2, label: '02 — Coarse 6×1-1/4"',  img: screw02, alt: 'Coarse thread 6×1-1/4" drywall screw' },
  { id: 3, label: '03 — Fine 6×1-1/4"',    img: screw03, alt: 'Fine thread 6×1-1/4" drywall screw' },
  { id: 4, label: "04 — Drywall Screw",    img: box04,   alt: "Coarse thread drywall screws box" },
  { id: 5, label: "05 — Drywall Screw",    img: box05,   alt: "Fine thread drywall screws box" },
  { id: 6, label: "06 — Drywall Screw",    img: box06,   alt: "Fine thread drywall screws box" },
];

const HIGHLIGHTS = [
  { id: 1, title: "Coarse Thread Screws", detail: "# 6×1 - 7/8″" },
  { id: 2, title: "8000 PCS",             detail: "Weight : 22 lb" },
];

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
      className={`product-section__cat-item${isActive ? " product-section__cat-item--active" : ""}`}
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
      className={`product-section__card${isActive ? " product-section__card--active" : ""}`}
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
  const [activeCategory, setActiveCategory] = useState(2);
  const [activeProduct, setActiveProduct]   = useState(2);

  return (
    <section className="product-section" id="products">
      {/* Static screw layers — absolutely positioned relative to the full section canvas */}
      <img
        src={heroScrewRotation}
        alt=""
        className="product-section__screw-reflection"
        aria-hidden="true"
      />
      <img
        src={heroScrew}
        alt=""
        className="product-section__screw-main"
        aria-hidden="true"
      />

      {/* Side-padding wrapper — keeps content off the viewport edges */}
      <div className="product-section__wrap">
        {/* Centered max-width container (1440px at 1920px, ~1174px at 1280px) */}
        <div className="product-section__inner">

          {/* ── Hero row: heading left · screw right ── */}
          <div className="product-section__hero-row">
            {/* motion applied directly — avoids adding a wrapper inside the flex row */}
            <motion.header
              className="product-section__header"
              {...REVEAL}
              transition={revealTransition(0)}
            >
              <span className="product-section__badge">
                <i className="product-section__badge-dash" aria-hidden="true" />
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

            {/* Decorative stripes — static background strips */}
            <div className="product-section__hero-media">
              <div className="product-section__stripes" aria-hidden="true">
                <span className="product-section__stripe product-section__stripe--red" />
                <span className="product-section__stripe product-section__stripe--gray" />
                <span className="product-section__stripe product-section__stripe--red" />
              </div>
            </div>
          </div>

          {/* ── Bottom row: sidebar · panel · highlights ── */}
          <div className="product-section__content">

            {/* Category sidebar */}
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
                    onClick={() => setActiveCategory(cat.id)}
                  />
                ))}
              </ul>
            </motion.aside>

            {/* Interactive product panel */}
            <motion.div
              className="product-section__panel"
              {...REVEAL}
              transition={revealTransition(0.15)}
            >
              <div className="product-section__panel-label">
                <i className="product-section__dot" aria-hidden="true" />
                Interactive View
              </div>

              <span className="product-section__panel-index">01</span>

              <div className="product-section__grid">
                {PRODUCTS.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    isActive={activeProduct === p.id}
                    onClick={() => setActiveProduct(p.id)}
                  />
                ))}
              </div>

              <div className="product-section__panel-footer">
                <div className="product-section__details">
                  <span className="product-section__details-eyebrow">
                    Faster Installation
                  </span>
                  <h3 className="product-section__details-title">
                    Coarse Thread
                    <br />
                    Drywall Screws
                  </h3>
                  <span className="product-section__details-size">6×1-1/4″</span>
                </div>

                <div className="product-section__actions">
                  <button type="button" className="product-section__btn">
                    Buy Now
                  </button>
                  <button type="button" className="product-section__btn product-section__btn--ghost">
                    Build Submittal
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Highlights card */}
            <motion.aside
              className="product-section__highlights"
              {...REVEAL}
              transition={revealTransition(0.3)}
            >
              <span className="product-section__highlights-title">Highlights</span>

              <ul className="product-section__highlights-list">
                {HIGHLIGHTS.map((h) => (
                  <li key={h.id} className="product-section__highlight">
                    <i className="product-section__dot" aria-hidden="true" />
                    <div>
                      <h4>{h.title}</h4>
                      <p>{h.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <hr className="product-section__highlights-divider" />

              <button type="button" className="product-section__btn-outline">
                Learn More
              </button>
            </motion.aside>

          </div>
        </div>
      </div>
    </section>
  );
}
