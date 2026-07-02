export default function FeatureCard({ index, title, text, result, stats }) {
  return (
    <article className="why-card">
      <span className="why-card__index">{index}</span>

      <h3 className="why-card__title">{title}</h3>

      <p className="why-card__text">{text}</p>

      <div className="why-card__result">
        <strong>Result:</strong> {result}
      </div>

      <ul className="why-card__stats">
        {stats.map((stat) => (
          <li key={stat}>{stat}</li>
        ))}
      </ul>
    </article>
  );
}