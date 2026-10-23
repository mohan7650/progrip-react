import Button from "./Button.jsx";
import { hero } from "../content.js";
import logo from "../assets/logo.svg";
import heroBg from "../assets/hero-bg.webp";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="dp-hero" style={{ "--hero-bg": `url(${heroBg})` }} aria-labelledby="hero-title">
      <div className="dp-container dp-hero__inner">
        <img className="dp-hero__logo" src={logo} alt="PRO-GRIP" width="471" height="68" />

        <h1 id="hero-title" className="dp-display dp-hero__title">
          <span className="dp-text-red">{hero.titleRed}</span>
          <br />
          {hero.titleWhite}
        </h1>

        <p className="dp-lead dp-hero__lead">
          {hero.lead[0]}{" "}
          <br />
          {hero.lead[1]}
        </p>

        <div className="dp-btn-row dp-btn-row--center">
          <Button href="#pourquoi">{hero.primaryCta}</Button>
          <Button href="#contact" variant="outline">
            {hero.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
