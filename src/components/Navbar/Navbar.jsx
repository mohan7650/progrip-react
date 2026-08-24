import { useState } from "react";
import logo from "../../assets/images/logo.png";
import Button from "../Shared/Button.jsx";
import { useTranslation } from "../../i18n/useTranslation.js";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale, t } = useTranslation();
  const isFrench = locale === "fr-CA";

  const NAV_LINKS = [
    { label: t.navbar.navLinks.products, href: "/#products" },
    { label: t.navbar.navLinks.about, href: "/#why" },
    { label: t.navbar.navLinks.resources, href: "/blog" },
    { label: t.navbar.navLinks.contactUs, href: "/#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header" data-lang={locale}>
      <div className="header-inner">
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? t.navbar.closeMenu : t.navbar.openMenu}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <a href="/" className="site-logo" aria-label={t.navbar.homeAriaLabel}>
          <img src={logo} alt={t.navbar.logoAlt} />
        </a>

        <button
          type="button"
          className="lang-toggle"
          role="switch"
          aria-checked={isFrench}
          aria-label={t.navbar.langToggleAriaLabel}
          onClick={() => setLocale(isFrench ? "en-CA" : "fr-CA")}
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
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <Button href="/#contact" variant="white" size="sm">
              {t.navbar.account}
            </Button>

            <Button href="/#products" variant="red" size="sm">
              {t.navbar.buildSubmittals}
            </Button>
          </div>
        </div>

        <div className="header-actions-mobile">
          <Button href="/#products" variant="red" size="xs">
            ORDER NOW
          </Button>

          <Button href="/#products" variant="outline" size="xs">
            BUILD &amp; SUBMITTAL
          </Button>
        </div>
      </div>
    </header>
  );
}
