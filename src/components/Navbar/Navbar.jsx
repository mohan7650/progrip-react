import { useState } from "react";
import logo from "../../assets/images/logo.png";
import Button from "../Shared/Button.jsx";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#why" },
  { label: "Resources", href: "#applications" },
  { label: "More", href: "#order",},
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="site-logo" aria-label="ProGrip Screws Home">
          <img src={logo} alt="ProGrip Screws" />
        </a>

        <div className="header-right">
          <nav className={menuOpen ? "main-nav open" : "main-nav"}>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <Button href="#" variant="white" size="sm">
              ACCOUNT
            </Button>

            <Button href="#order" variant="red" size="sm">
              ORDER
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