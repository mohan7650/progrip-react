import Button from "../Shared/Button.jsx";
import Reveal from "../Reveal.jsx";
import ctaStrip from "../../assets/images/cta_strip.png";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-band">
<img className="cta-strip" src={ctaStrip} alt="" aria-hidden="true" />
      <div className="container cta-inner">
        <Reveal>
          <h2 className="cta-title">
            BUILT FOR PROS, READY<br />FOR THE JOB!
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="cta-sub">
            Pro-Grip screws are engineered to help you work faster, smarter, and with total confidence.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="btn-row center">
            <Button href="#" variant="red">ORDER</Button>
            <Button href="#" variant="outline">CONTACT</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
