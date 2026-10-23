import { useState } from "react";
import Button from "./Button.jsx";
import { contact } from "../content.js";
import { config } from "../config.js";
import { submitForm } from "../lib/submitForm.js";
import { trackLead } from "../lib/metaPixel.js";
import "./Contact.css";

const EMPTY = {
  prenom: "",
  nom: "",
  entreprise: "",
  courriel: "",
  telephone: "",
  message: "",
  infolettre: false,
};

const FIELDS = [
  { name: "prenom", type: "text", autoComplete: "given-name", required: true, span: "third" },
  { name: "nom", type: "text", autoComplete: "family-name", required: true, span: "third" },
  { name: "entreprise", type: "text", autoComplete: "organization", span: "third" },
  { name: "courriel", type: "email", autoComplete: "email", required: true, span: "half" },
  { name: "telephone", type: "tel", autoComplete: "tel", span: "half" },
];

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setValues((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    try {
      await submitForm(config.contactEndpoint, {
        prenom: values.prenom,
        nom: values.nom,
        entreprise: values.entreprise,
        courriel: values.courriel,
        telephone: values.telephone,
        message: values.message,
        infolettre: values.infolettre ? "Oui" : "Non",
        // Formspree settings (not shown as fields): email subject + reply goes to the visitor
        _subject: "Nouveau message — PRO-GRIP /discover",
        _replyto: values.courriel,
      });
      trackLead({ content_name: "Formulaire contact PRO-GRIP" });
      setValues(EMPTY);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="dp-section dp-contact" aria-labelledby="contact-title">
      <div className="dp-container">
        <h2 id="contact-title" className="dp-display dp-title dp-contact__title">
          {contact.titleWhite}
          <br />
          <span className="dp-text-red">{contact.titleRed}</span>
        </h2>

        <p className="dp-lead dp-contact__intro">{contact.intro}</p>

        <p className="dp-contact__cta">
          {contact.cta}
          <br />
          {contact.ctaPhonePrefix} <a href={config.phone.href}>{config.phone.display}</a>.
        </p>

        <form className="dp-contact-form" onSubmit={handleSubmit}>
          {FIELDS.map((field) => (
            <div key={field.name} className={`dp-field dp-field--${field.span}`}>
              <label className="dp-visually-hidden" htmlFor={`cf-${field.name}`}>
                {contact.fields[field.name]}
                {field.required ? " (obligatoire)" : ""}
              </label>
              <input
                id={`cf-${field.name}`}
                className="dp-input"
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                placeholder={contact.fields[field.name]}
                required={field.required}
                value={values[field.name]}
                onChange={handleChange}
              />
            </div>
          ))}

          <div className="dp-field dp-field--full">
            <label className="dp-visually-hidden" htmlFor="cf-message">
              {contact.fields.message}
            </label>
            <textarea
              id="cf-message"
              className="dp-input dp-input--textarea"
              name="message"
              rows={1}
              placeholder={contact.fields.message}
              value={values.message}
              onChange={handleChange}
            />
          </div>

          <label className="dp-check">
            <input type="checkbox" name="infolettre" checked={values.infolettre} onChange={handleChange} />
            <span>{contact.fields.infolettre}</span>
          </label>

          <div className="dp-contact-form__actions">
            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? contact.sending : contact.submit}
            </Button>
            <p
              className={`dp-contact-form__status dp-contact-form__status--${status}`}
              role="status"
              aria-live="polite"
            >
              {status === "success" && contact.success}
              {status === "error" && contact.error}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
