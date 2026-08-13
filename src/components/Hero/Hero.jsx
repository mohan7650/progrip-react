import heroVideo from "../../assets/video/Pro Grip Hero Video.mp4";
import { useTranslation } from "../../i18n/useTranslation.js";
import "./Hero.css";

function CrosshairIcon() {
  return (
    <svg
      className="hero__crosshair"
      viewBox="0 0 85.09 85.09"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Transparent background circle */}
      <circle cx="42.545" cy="42.545" r="42.545" fill="transparent" />
      {/* Outer ring */}
      <circle cx="42.545" cy="42.545" r="39.085" fill="none" stroke="currentColor" strokeWidth="5" />
      {/* Inner small circle */}
      <circle cx="42.545" cy="42.545" r="11.8" fill="currentColor" stroke="currentColor" strokeWidth="5" />
      {/* Left horizontal tick */}
      <line x1="0.96" y1="41.59" x2="15.3" y2="41.59" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      {/* Right horizontal tick */}
      <line x1="69.79" y1="41.59" x2="84.13" y2="41.59" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      {/* Top vertical tick */}
      <line x1="42.545" y1="0.96" x2="42.545" y2="15.3" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      {/* Bottom vertical tick */}
      <line x1="42.545" y1="69.79" x2="42.545" y2="84.13" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function Hero() {
  const { t } = useTranslation();
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

          <h1 className="hero__title">
            <span className="hero__title-line">{h.titleLine1}</span>
            <span className="hero__title-line">{h.titleLine2} <CrosshairIcon /></span>
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
