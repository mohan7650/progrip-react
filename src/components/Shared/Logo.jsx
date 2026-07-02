import "./Logo.css";

/** PRO+GRIP logo lockup — used in the header and the footer. */
export default function Logo() {
  return (
    <a href="#" className="logo">
      <span className="logo-mark">
        PRO<span className="logo-plus">+</span>GRIP
      </span>
      <span className="logo-sub">SCREWS</span>
    </a>
  );
}
