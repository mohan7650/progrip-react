import Logo from "../Shared/Logo.jsx";
import "./Footer.css";

const FOOTER_COLUMNS = [
  {
    title: "Products",
    links: ["Browse all", "Drywall screws", "Framing screws", "Metal studs", "Variety packs"],
  },
  {
    title: "Company",
    links: ["About us", "Resources", "Distributors", "Contact us", "Careers"],
  },
  {
    title: "Follow us",
    links: ["Facebook", "Instagram", "X", "LinkedIn", "YouTube"],
  },
];

const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand + newsletter */}
        <div className="footer-brand">
          <Logo />
          <p className="micro">Get updates on new products and jobsite tips.</p>
          <form className="subscribe" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button className="btn btn-red btn-sm" type="submit">SUBSCRIBE</button>
          </form>
          <p className="micro dim">
            By subscribing you agree to our Privacy Policy and consent to receive
            updates from our company.
          </p>
        </div>

        {/* Link columns */}
        {FOOTER_COLUMNS.map((column) => (
          <div className="footer-col" key={column.title}>
            <h6>{column.title}</h6>
            {column.links.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="container footer-legal">
        <p>© 2026 Pro-Grip. All rights reserved.</p>
        <div className="legal-links">
          {LEGAL_LINKS.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
