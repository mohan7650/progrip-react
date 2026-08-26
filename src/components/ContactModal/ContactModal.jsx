import { useState } from "react";
import { createPortal } from "react-dom";
import Button from "../Shared/Button.jsx";
import { useTranslation } from "../../i18n/useTranslation.js";
import "./ContactModal.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meajnzze";

const INITIAL_FORM = { name: "", company: "", email: "", phone: "", description: "" };

export default function ContactModal({ children, variant, size, className }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState(INITIAL_FORM);

  const open = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setStatus("idle");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("success");
        setForm(INITIAL_FORM);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Button href="#" variant={variant} size={size} className={className} onClick={open}>
        {children}
      </Button>

      {isOpen && createPortal(
        <div className="contact-modal-overlay" onClick={close}>
          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="contact-modal-close"
              onClick={close}
              aria-label={t.contactModal.closeAriaLabel}
            >
              ×
            </button>

            {status === "success" ? (
              <div className="contact-modal-success">
                <h3 id="contact-modal-title">{t.contactModal.successTitle}</h3>
                <p>{t.contactModal.successBody}</p>
              </div>
            ) : (
              <form className="contact-modal-form" onSubmit={handleSubmit}>
                <h3 id="contact-modal-title">{t.contactModal.title}</h3>
                <p className="contact-modal-sub">
                  {t.contactModal.sub}
                </p>

                <label className="contact-modal-field">
                  <span>{t.contactModal.nameLabel} <span aria-hidden="true">*</span></span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </label>

                <label className="contact-modal-field">
                  <span>{t.contactModal.companyLabel} <span aria-hidden="true">*</span></span>
                  <input
                    type="text"
                    name="company"
                    required
                    value={form.company}
                    onChange={handleChange}
                    autoComplete="organization"
                  />
                </label>

                <label className="contact-modal-field">
                  <span>{t.contactModal.emailLabel} <span aria-hidden="true">*</span></span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </label>

                <label className="contact-modal-field">
                  <span>{t.contactModal.phoneLabel} <span aria-hidden="true">*</span></span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </label>

                <label className="contact-modal-field">
                  {t.contactModal.descriptionLabel}
                  <textarea
                    name="description"
                    rows={4}
                    placeholder={t.contactModal.descriptionPlaceholder}
                    value={form.description}
                    onChange={handleChange}
                  />
                </label>

                {status === "error" && (
                  <p className="contact-modal-error">
                    {t.contactModal.errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  className="contact-modal-submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? t.contactModal.sending : t.contactModal.send}
                </button>
              </form>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
