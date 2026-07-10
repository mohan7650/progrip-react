import React, { useState, lazy, Suspense } from "react";
import "./ProductSection.css";

const ScrewCanvas = lazy(() => import("./ScrewCanvas"));

/*
  ProductSection — "PRODUCTS BUILT FOR SPEED."
  Responsive: pixel-close at 1920px, correct at 1280px.
  Required image assets (public/images/product-section/):
    stripes.png     angled decorative stripes
    hero-screw.png  large hero screw (709.6 × 403.48)
    screw-01.png … screw-06.png / box-04.png … box-06.png
*/

const IMG = "src/assets/images/product-section";

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
  { id: 1, label: '01 — Fine 6×2"',        img: `${IMG}/screw-01.png`, alt: 'Fine thread 6×2" drywall screw' },
  { id: 2, label: '02 — Coarse 6×1-1/4"',  img: `${IMG}/screw-02.png`, alt: 'Coarse thread 6×1-1/4" drywall screw' },
  { id: 3, label: '03 — Fine 6×1-1/4"',    img: `${IMG}/screw-03.png`, alt: 'Fine thread 6×1-1/4" drywall screw' },
  { id: 4, label: "04 — Drywall Screw",    img: `${IMG}/box-04.png`,   alt: "Coarse thread drywall screws box" },
  { id: 5, label: "05 — Drywall Screw",    img: `${IMG}/box-05.png`,   alt: "Fine thread drywall screws box" },
  { id: 6, label: "06 — Drywall Screw",    img: `${IMG}/box-06.png`,   alt: "Fine thread drywall screws box" },
];

const HIGHLIGHTS = [
  { id: 1, title: "Coarse Thread Screws", detail: "# 6×1 - 7/8″" },
  { id: 2, title: "8000 PCS",             detail: "Weight : 22 lb" },
];

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
      {/* Side-padding wrapper — keeps content off the viewport edges */}
      <div className="product-section__wrap">
        {/* Centered max-width container (1440px at 1920px, ~1174px at 1280px) */}
        <div className="product-section__inner">

          {/* ── Hero row: heading left · screw right ── */}
          <div className="product-section__hero-row">
            <header className="product-section__header">
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
            </header>

            {/* Screw + decorative stripes (stripes absolute z-index 1, screw absolute z-index 2) */}
            <div className="product-section__hero-media">
              <div className="product-section__stripes" aria-hidden="true">
                <span className="product-section__stripe product-section__stripe--red" />
                <span className="product-section__stripe product-section__stripe--gray" />
                <span className="product-section__stripe product-section__stripe--red" />
              </div>
              <Suspense fallback={null}>
                <ScrewCanvas />
              </Suspense>
            </div>
          </div>

          {/* ── Bottom row: sidebar · panel · highlights ── */}
          <div className="product-section__content">

            {/* Category sidebar */}
            <aside className="product-section__sidebar">
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
            </aside>

            {/* Interactive product panel */}
            <div className="product-section__panel">
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
            </div>

            {/* Highlights card */}
            <aside className="product-section__highlights">
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
            </aside>

          </div>
        </div>
      </div>
    </section>
  );
}
