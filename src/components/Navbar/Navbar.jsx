import { useState } from "react";
import logo from "../../assets/images/logo.png";
import Button from "../Shared/Button.jsx";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#why" },
  { label: "Resources", href: "#applications" },
  { label: "ProSystem", href: "#order" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("en");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="site-logo" aria-label="PROGRIP Screws Home">
          <img src={logo} alt="PROGRIP Screws" />
        </a>

        <button
          type="button"
          className="lang-toggle"
          role="switch"
          aria-checked={lang === "fr"}
          aria-label="Toggle language between English and French Canadian"
          onClick={() => setLang((l) => (l === "en" ? "fr" : "en"))}
        >
          <span className="lang-toggle-option">EN</span>
          <span className="lang-toggle-track">
            <span className="lang-toggle-thumb" />
          </span>
          <span className="lang-toggle-option">FR</span>
        </button>

        <div className="header-right">
          <nav className={menuOpen ? "main-nav open" : "main-nav"}>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <Button href="#contact" variant="white" size="sm">
              ACCOUNT
            </Button>

            <Button href="#products" variant="red" size="sm">
              BUILD SUBMITTALS
            </Button>
          </div>

          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}