/** One platform-feature card in the "Order like a pro" grid. */
export default function OrderCard({ category, title, text, items }) {
  const cat = category.toLowerCase();
  return (
    <div className={`o-card o-card--${cat}`}>
      <span className={`o-tag o-tag--${cat}`}>{category}</span>
      <h4 className="o-title">{title}</h4>
      <p className="o-desc">{text}</p>
      <ul className="mini-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}