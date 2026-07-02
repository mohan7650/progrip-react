/**
 * Shared button — renders the .btn utility classes from global.css.
 *
 * Props:
 *  - href      : link target (default "#")
 *  - variant   : "red" | "white" | "outline" | "ghost"   (default "red")
 *  - size      : "sm" | "xs"                              (optional)
 *  - block     : full-width button (adds .btn-block)
 *  - className : any extra classes
 */
export default function Button({
  href = "#",
  variant = "red",
  size,
  block = false,
  className = "",
  children,
  ...rest
}) {
  const classes = [
    "btn",
    `btn-${variant}`,
    size && `btn-${size}`,
    block && "btn-block",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
