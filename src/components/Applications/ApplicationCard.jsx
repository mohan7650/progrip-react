import Button from "../Shared/Button.jsx";

/**
 * One application-guide card. `wide` switches to the 2-up layout where
 * the CTA buttons sit in a .btn-row instead of stacked block buttons.
 * `accent` (green | blue | red) themes the index number, divider,
 * APPLICATION TYPE + WHY THIS MATTERS labels, and PRO TIP.
 */
export default function ApplicationCard({
  wide = false,
  accent = "red",
  number,
  photoClass,
  title,
  projectTypes,
  products,
  whyItMatters,
  proTip,
  quantities,
  primaryCta,
  secondaryCta,
}) {
  const className = [
    "card",
    "app-card",
    `app-card--${accent}`,
    wide ? "wide" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={className}>
      <div className={`app-photo ${photoClass}`}></div>

      {number && (
        <div className="app-index">
          <span>{number}</span>
        </div>
      )}

      <p className="micro-label acc">APPLICATION TYPE</p>
      <h3>{title}</h3>

      <div className="app-block">
        <p className="micro-label">PROJECT TYPES</p>
        <p>{projectTypes}</p>
      </div>

      <div className="app-block">
        <p className="micro-label">RECOMMENDED PRODUCTS</p>
        {products.map((product, i) => (
          <p key={i}>{product}</p>
        ))}
      </div>

      <div className="app-block">
        <p className="micro-label acc">WHY THIS MATTERS</p>
        <p>{whyItMatters}</p>
        <div className="pro-tip">
          <p className="micro-label acc">PRO TIP</p>
          <p>{proTip}</p>
        </div>
      </div>

      <div className="app-block">
        <p className="micro-label">TYPICAL QUANTITIES</p>
        <p>{quantities}</p>
      </div>

      {wide ? (
        <div className="btn-row">
          <Button href="#" variant="red">{primaryCta}</Button>
          <Button href="#" variant="ghost">{secondaryCta}</Button>
        </div>
      ) : (
        <>
          <Button href="#" variant="red" block>{primaryCta}</Button>
          <Button href="#" variant="ghost" block>{secondaryCta}</Button>
        </>
      )}
    </article>
  );
}