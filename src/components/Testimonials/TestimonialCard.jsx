import Button from "../Shared/Button.jsx";

/** One persona testimonial card (photo, quote, person, key-tip highlight, CTA). */
export default function TestimonialCard({
  photoClass,
  label,
  title,
  quote,
  stat,
  statText,
  name,
  role,
  tipTitle,
  tipItems,
  ctaLabel,
  ctaVariant,
}) {
  return (
    <article className="card t-card">
      {/* Replace .t-photo background with your own image */}
      <div className={`t-photo ${photoClass}`}></div>
      <p className="micro-label red">{label}</p>
      <h3>{title}</h3>
      <blockquote>{quote}</blockquote>
      <p className="t-stat">
        <strong>{stat}</strong> {statText}
      </p>
      <div className="t-person">
        <strong>{name}</strong>
        <span>{role}</span>
      </div>
      <div className="t-highlight">
        <p className="micro-label">KEY TIP</p>
        <h5>{tipTitle}</h5>
        <ul className="stat-list">
          {tipItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <Button href="#" variant={ctaVariant} block>
        {ctaLabel}
      </Button>
    </article>
  );
}
