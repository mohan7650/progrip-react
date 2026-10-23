import { useState } from "react";
import SocialIcon from "./SocialIcon.jsx";
import { footer } from "../content.js";
import { config, links } from "../config.js";
import { submitForm } from "../lib/submitForm.js";
import { trackLead } from "../lib/metaPixel.js";
import logo from "../assets/logo.svg";
import "./Footer.css";

function LinkColumn({ title, items, social = false }) {
  return (
    <nav className="dp-footer__col" aria-label={title}>
      <h2 className="dp-footer__heading">{title}</h2>
      <ul className="dp-footer__list">
        {items.map((item) => (
          <li key={item.label}>
            <a
              className="dp-footer__link"
              href={item.href}
              {...(social && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {social && <SocialIcon name={item.icon} />}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubscribe(event) {
    event.preventDefault();
    setStatus("sending");
    try {
      await submitForm(config.newsletterEndpoint, { courriel: email, source: "progrip-onepager-footer" });
      trackLead({ content_name: "Infolettre PRO-GRIP" });
      setEmail("");
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <footer className="dp-footer">
      <div className="dp-container dp-footer__grid">
        <div className="dp-footer__brand">
          <div className="dp-footer__logo">
            <img src={logo} alt="PRO-GRIP" width="220" height="32" loading="lazy" />
            <span className="dp-footer__logo-sub" aria-hidden="true">
              Screws
            </span>
          </div>

          <p className="dp-footer__text">{footer.tagline}</p>

          <form className="dp-newsletter" onSubmit={handleSubscribe}>
            <label className="dp-visually-hidden" htmlFor="newsletter-email">
              {footer.emailPlaceholder}
            </label>
            <input
              id="newsletter-email"
              className="dp-newsletter__input"
              type="email"
              autoComplete="email"
              required
              placeholder={footer.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="dp-newsletter__btn" type="submit" disabled={status === "sending"}>
              {footer.subscribe}
            </button>
          </form>

          <p className="dp-footer__fine" role="status" aria-live="polite">
            {status === "success" && footer.subscribed}
            {status === "error" && footer.subscribeError}
            {(status === "idle" || status === "sending") && footer.consent}
          </p>
        </div>

        <LinkColumn title={footer.headings.produits} items={links.footer.produits} />
        <LinkColumn title={footer.headings.entreprise} items={links.footer.entreprise} />
        <LinkColumn title={footer.headings.social} items={links.footer.social} social />
      </div>

      <div className="dp-container dp-footer__bottom">
        <p>{footer.copyright}</p>
        <ul className="dp-footer__legal">
          {links.footer.legal.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
