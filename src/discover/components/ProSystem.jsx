import Button from "./Button.jsx";
import { proSystem } from "../content.js";
import { links } from "../config.js";
import screw from "../assets/screw-2.webp";
import "./ProSystem.css";

export default function ProSystem() {
  return (
    <section id="systeme" className="dp-section dp-pro" aria-labelledby="pro-title">
      <img className="dp-decor dp-decor--hide-sm dp-pro__screw-left" src={screw} alt="" aria-hidden="true" loading="lazy" />

      <div className="dp-container dp-pro__inner">
        <p className="dp-eyebrow">{proSystem.eyebrow}</p>
        <h2 id="pro-title" className="dp-display dp-title">
          {proSystem.title}
        </h2>
        <p className="dp-tagline">{proSystem.tagline}</p>
        <p className="dp-lead">{proSystem.intro}</p>

        <ul className="dp-personas">
          {proSystem.personas.map((persona) => (
            <li key={persona.title} className={`dp-persona dp-persona--${persona.tone}`}>
              <h3 className="dp-display dp-persona__title">{persona.title}</h3>
              <p className="dp-persona__kicker">{persona.kicker}</p>
              <p className="dp-body-copy">{persona.text}</p>
            </li>
          ))}
        </ul>

        <div className="dp-btn-row">
          <Button href={links.products}>{proSystem.primaryCta}</Button>
          <Button href="#contact" variant="outline">
            {proSystem.secondaryCta}
          </Button>
        </div>
      </div>

      <img className="dp-decor dp-decor--hide-sm dp-pro__screw-right" src={screw} alt="" aria-hidden="true" loading="lazy" />
    </section>
  );
}
