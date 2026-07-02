import Button from "../Shared/Button.jsx";

/**
 * One application-guide card. `wide` switches to the 2-up layout where
 * the CTA buttons sit in a .btn-row instead of stacked block buttons.
 */
export default function ApplicationCard({
  wide = false,
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
  return (
    <article className={wide ? "card app-card wide" : "card app-card"}>
      <div className={`app-photo ${photoClass}`}></div>
      <p className="micro-label red">APPLICATION TYPE</p>
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
        <p className="micro-label">WHY THIS MATTERS</p>
        <p>{whyItMatters}</p>
        <p className="pro-tip">
          <strong>PRO TIP:</strong> {proTip}
        </p>
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
