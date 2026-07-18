import Button from "../Shared/Button.jsx";
import Reveal from "../Reveal.jsx";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-band">
      <div className="cta-stripes" aria-hidden="true">
        <span className="stripe stripe-grey"></span>
        <span className="stripe stripe-red"></span>
      </div>
      <div className="container cta-inner">
        <Reveal>
          <h2 className="cta-title">
            BUILT FOR PROS, READY<br />FOR THE JOB!
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="cta-sub">
            Pro-Grip screws are engineered to help you land faster, smarter, and
            with total confidence.
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
