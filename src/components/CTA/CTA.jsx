import Button from "../Shared/Button.jsx";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-band">
      <div className="cta-stripes" aria-hidden="true">
        <span className="stripe stripe-grey"></span>
        <span className="stripe stripe-red"></span>
      </div>
      <div className="container cta-inner">
        <h2 className="cta-title">
          BUILT FOR PROS, READY<br />FOR THE JOB!
        </h2>
        <p className="cta-sub">
          Pro-Grip screws are engineered to help you land faster, smarter, and
          with total confidence.
        </p>
        <div className="btn-row center">
          <Button href="#" variant="red">ORDER</Button>
          <Button href="#" variant="outline">CONTACT</Button>
        </div>
      </div>
    </section>
  );
}
