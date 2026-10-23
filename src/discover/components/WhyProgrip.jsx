import Button from "./Button.jsx";
import { withBrand } from "./Brand.jsx";
import { why } from "../content.js";
import { links } from "../config.js";
import boxes from "../assets/product-boxes.webp";
import texture from "../assets/texture-bg.webp";
import screw from "../assets/screw-1.webp";
import "./WhyProgrip.css";

export default function WhyProgrip() {
  return (
    <section
      id="pourquoi"
      className="dp-section dp-why"
      style={{ "--why-texture": `url(${texture})` }}
      aria-labelledby="why-title"
    >
      <img className="dp-why__boxes" src={boxes} alt="Boîtes de vis PRO-GRIP" loading="lazy" />

      <div className="dp-container dp-why__inner">
        <h2 id="why-title" className="dp-display dp-title">
          {withBrand(why.title)}
        </h2>
        <p className="dp-tagline">{why.tagline}</p>
        <p className="dp-lead dp-why__intro">{why.intro}</p>

        <ol className="dp-pillars">
          {why.pillars.map((pillar, i) => (
            <li key={pillar.title} className="dp-pillar">
              <h3 className="dp-display dp-pillar__title">
                <span className="dp-text-red">{String(i + 1).padStart(2, "0")}.</span> {pillar.title}
              </h3>
              <p className="dp-body-copy">{pillar.text}</p>
            </li>
          ))}
        </ol>

        <div className="dp-btn-row">
          <Button href={links.products}>{why.primaryCta}</Button>
          <Button href="#contact" variant="outline">
            {why.secondaryCta}
          </Button>
        </div>
      </div>

      <img className="dp-decor dp-decor--hide-sm dp-why__screw" src={screw} alt="" aria-hidden="true" loading="lazy" />
    </section>
  );
}
