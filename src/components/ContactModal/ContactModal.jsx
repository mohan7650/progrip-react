import { useState } from "react";
import { createPortal } from "react-dom";
import Button from "../Shared/Button.jsx";
import "./ContactModal.css";

// TODO: replace with your real Formspree endpoint.
// Sign up at https://formspree.io with info@progrip.com, create a form,
// then swap YOUR_FORM_ID below for the id Formspree gives you.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const INITIAL_FORM = { name: "", company: "", email: "", phone: "", description: "" };

export default function ContactModal({ children, variant, size, className }) {
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
              aria-label="Close"
            >
              ×
            </button>

            {status === "success" ? (
              <div className="contact-modal-success">
                <h3 id="contact-modal-title">Thanks!</h3>
                <p>We've received your message and will get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-modal-form" onSubmit={handleSubmit}>
                <h3 id="contact-modal-title">Contact Us</h3>
                <p className="contact-modal-sub">
                  Tell us a bit about you and we'll be in touch.
                </p>

                <label className="contact-modal-field">
                  <span>Name <span aria-hidden="true">*</span></span>
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
                  <span>Company Name <span aria-hidden="true">*</span></span>
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
                  <span>Email <span aria-hidden="true">*</span></span>
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
                  <span>Phone Number <span aria-hidden="true">*</span></span>
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
                  Description
                  <textarea
                    name="description"
                    rows={4}
                    placeholder="Tell us what you're looking for..."
                    value={form.description}
                    onChange={handleChange}
                  />
                </label>

                {status === "error" && (
                  <p className="contact-modal-error">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  className="contact-modal-submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Send"}
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
