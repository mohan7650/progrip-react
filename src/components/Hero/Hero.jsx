import heroVideo from "../../assets/video/Pro Grip Hero Video.mp4";
import { useTranslation } from "../../i18n/useTranslation.js";
import "./Hero.css";

function Hero() {
  const { t, locale } = useTranslation();
  const h = t.hero;

  return (
    <section className="hero" aria-label={h.ariaLabel}>
      <video className="hero__video" autoPlay muted loop playsInline preload="auto">
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero__video-overlay" aria-hidden="true" />

      <div className="hero__stage">
        <span className="hero__stripe hero__stripe--red" aria-hidden="true" />
        <span className="hero__stripe hero__stripe--gray" aria-hidden="true" />

        <div className="hero__content">
          <p className="hero__eyebrow">{h.eyebrow}</p>

          <h1 className={`hero__title${locale === "fr-CA" ? " hero__title--fr" : ""}`}>
            <span className="hero__title-line">{h.titleLine1}</span>
            <span className="hero__title-line">{h.titleLine2}</span>
          </h1>

          <p className="hero__subtitle">{h.subtitle}</p>

          <div className="hero__actions">
            <a href="#products" className="hero__btn hero__btn--primary">
              {h.orderNow}
            </a>
            <a href="#contact" className="hero__btn hero__btn--outline">
              {h.buildSubmittals}
            </a>
          </div>
        </div>

        <ul className="hero__personas">
          <li className="hero__persona hero__persona--installer">
            <span className="hero__persona-num">01</span>
            <div className="hero__persona-text">
              <h2 className="hero__persona-title">{h.personas[0].title}</h2>
              <p className="hero__persona-body">{h.personas[0].body}</p>
            </div>
          </li>

          <li className="hero__persona hero__persona--distributor">
            <span className="hero__persona-num">02</span>
            <div className="hero__persona-text">
              <h2 className="hero__persona-title">{h.personas[1].title}</h2>
              <p className="hero__persona-body">{h.personas[1].body}</p>
            </div>
          </li>

          <li className="hero__persona hero__persona--contractor">
            <span className="hero__persona-num">03</span>
            <div className="hero__persona-text">
              <h2 className="hero__persona-title">{h.personas[2].title}</h2>
              <p className="hero__persona-body">{h.personas[2].body}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
