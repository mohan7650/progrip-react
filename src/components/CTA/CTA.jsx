import Button from "../Shared/Button.jsx";
import ContactModal from "../ContactModal/ContactModal.jsx";
import Reveal from "../Reveal.jsx";
import ctaStrip from "../../assets/images/cta_strip.png";
import "./CTA.css";

function CrosshairIcon() {
  return (
    <svg
      className="cta-crosshair"
      viewBox="0 0 85.09 85.09"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="42.545" cy="42.545" r="42.545" fill="transparent" />
      <circle cx="42.545" cy="42.545" r="39.085" fill="none" stroke="currentColor" strokeWidth="5" />
      <circle cx="42.545" cy="42.545" r="11.8" fill="currentColor" stroke="currentColor" strokeWidth="5" />
      <line x1="0.96" y1="41.59" x2="15.3" y2="41.59" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <line x1="69.79" y1="41.59" x2="84.13" y2="41.59" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <line x1="42.545" y1="0.96" x2="42.545" y2="15.3" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <line x1="42.545" y1="69.79" x2="42.545" y2="84.13" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export default function CTA() {
  return (
    <section className="cta-band" id="contact">
      <img className="cta-strip" src={ctaStrip} alt="" aria-hidden="true" />
      <div className="container cta-inner">
        <Reveal>
          <h2 className="cta-title">
            <span className="cta-title-line">Pro Hold.</span>
            <span className="cta-title-line">Pro<CrosshairIcon />Speed.</span>
            <span className="cta-title-line">PRO GRIP.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="cta-sub">
            PROGRIP screws are engineered to help you work faster, smarter, and with total confidence.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="btn-row center">
            <Button href="#products" variant="red">Order</Button>
            <ContactModal variant="outline">Contact</ContactModal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
