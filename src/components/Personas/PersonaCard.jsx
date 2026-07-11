export default function PersonaCard({
  accent,
  image,
  imageAlt,
  eyebrow,
  index,
  title,
  quote,
  project,
  name,
  role,
  company,
  mattersTitle,
  items,
  ctaLabel,
  ctaType,
}) {
  return (
    <article className={`persona-card persona-card--${accent}`}>
      <img className="persona-card__image" src={image} alt={imageAlt} />

      <div className="persona-card__body">
        <p className="persona-card__eyebrow">{eyebrow}</p>

        <div className="persona-card__index-row">
          <span>{index}</span>
        </div>

        <h3>{title}</h3>

        <p className="persona-card__quote">{quote}</p>

        <p className="persona-card__project">{project}</p>

        <div className="persona-card__person">
          <strong>{name}</strong>
          <span>{role}</span>
          <span>{company}</span>
        </div>

        <div className="persona-card__matters">
          <p>WHAT MATTERS</p>
          <h4>{mattersTitle}</h4>
        </div>

        <ul className="persona-card__list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <a
          href="#"
          className={
            ctaType === "red"
              ? "persona-card__btn persona-card__btn--red"
              : "persona-card__btn persona-card__btn--outline"
          }
        >
          {ctaLabel} →
        </a>
      </div>
    </article>
  );
}
