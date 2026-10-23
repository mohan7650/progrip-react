import "./Button.css";

/**
 * Brand button. Renders an <a> when `href` is given, otherwise a <button>.
 * variant: "primary" (solid red) | "outline" (red border)
 */
export default function Button({ href, variant = "primary", className = "", children, ...rest }) {
  const classes = `dp-btn dp-btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...rest}>
      {children}
    </button>
  );
}
