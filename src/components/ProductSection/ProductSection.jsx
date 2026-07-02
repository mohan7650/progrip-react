import SectionHead from "../Shared/SectionHead.jsx";
import Button from "../Shared/Button.jsx";
import "./ProductSection.css";

const RAIL_ITEMS = [
  {
    num: "01",
    title: "FRAMING SCREWS",
    text: "Self drilling for quick penetration.",
    active: true,
  },
  {
    num: "02",
    title: "DRYWALL SCREWS",
    text: "Fast bite performance for stronger day-to-day applications.",
  },
  {
    num: "03",
    title: "METAL STUD SCREWS",
    text: "Built for penetrating installation where strength matters most.",
  },
];

const DIAGRAM_NODES = [
  { symbol: "⊕", position: "node-1" },
  { symbol: "◎", position: "node-2" },
  { symbol: "▤", position: "node-3" },
];

const DIAGRAM_LABELS = ['01 — Fine 6x2"', '02 — Coarse 8x1 1/4"', '03 — Fine 8x1 5/8"'];

const THUMBS = [
  { label: "04 — Drywall Screw" },
  { label: "05 — Drywall Screw", box: true },
  { label: "06 — Drywall Screw" },
];

const SPECS = [
  "Fine Thread",
  "Coarse Thread",
  "Self Drilling",
  "Pan Head",
  "Bugle Head",
  "Hex Head",
];

export default function ProductSection() {
  return (
    <section className="section section-products" id="products">
      <div className="container">
        <SectionHead
          eyebrow="COMPLETE"
          title={<>PRODUCTS BUILT<br />FOR SPEED.</>}
          num="01"
          sub="The full range of Pro-Grip fasteners for every job."
        />

        {/* Decorative screw visual */}
        <div className="screw-visual" aria-hidden="true">
          <div className="screw-shaft"></div>
          <div className="screw-head"></div>
        </div>

        {/* Product viewer panel */}
        <div className="product-panel">
          {/* Left rail: categories */}
          <aside className="panel-rail">
            {RAIL_ITEMS.map((item) => (
              <div
                className={item.active ? "rail-item active" : "rail-item"}
                key={item.num}
              >
                <span className="rail-num">{item.num}</span>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            ))}
          </aside>

          {/* Center: interactive view */}
          <div className="panel-view">
            <p className="panel-label">
              <span className="dot red"></span> INTERACTIVE VIEW
            </p>

            {/* Screw diagram (CSS placeholder — replace with product image) */}
            <div className="screw-diagram">
              <div className="diagram-line"></div>
              {DIAGRAM_NODES.map((node) => (
                <div className={`diagram-node ${node.position}`} key={node.position}>
                  {node.symbol}
                </div>
              ))}
            </div>
            <div className="diagram-labels">
              {DIAGRAM_LABELS.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>

            {/* Thumbnails row */}
            <div className="thumb-row">
              {THUMBS.map((thumb) => (
                <div className="thumb" key={thumb.label}>
                  <div className={thumb.box ? "thumb-img box" : "thumb-img"}></div>
                  <span>{thumb.label}</span>
                </div>
              ))}
            </div>

            {/* Selected product + CTAs */}
            <div className="panel-cta">
              <div>
                <p className="micro-label">CENTER INSTALLATION</p>
                <h4>COARSE THREAD<br />DRYWALL SCREWS</h4>
                <p className="micro">8x1 1/4"</p>
              </div>
              <div className="btn-row">
                <Button href="#" variant="red" size="sm">BUY NOW</Button>
                <Button href="#" variant="outline" size="sm">BUILD SUBMITTAL</Button>
              </div>
            </div>
          </div>

          {/* Right rail: specs */}
          <aside className="panel-specs">
            <ul className="spec-list">
              {SPECS.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
            <div className="spec-card">
              <p className="micro-label light">COARSE THREAD<br />SCREWS</p>
              <p className="micro">6-in-1 — 1/8"</p>
              <p className="micro">Weight : 25 lb</p>
              <p className="micro"><strong>5000 PCS</strong></p>
              <Button href="#" variant="outline" size="xs">LEARN MORE</Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
