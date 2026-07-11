export default function ProSystemCard({ accent, eyebrow, title, desc, items, ctaLabel }) {
  return (
    <article className={`pro-card pro-card--${accent}`}>
      <div className="pro-card__body">
        <p className="pro-card__eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
        <p className="pro-card__desc">{desc}</p>
        <ul className="pro-card__list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="pro-card__divider" />
        <a href="#" className="pro-card__btn">{ctaLabel}</a>
      </div>
    </article>
  );
}
