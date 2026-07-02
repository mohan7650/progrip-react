/** One platform-feature card in the "Order like a pro" grid. */
export default function OrderCard({ label, text, items }) {
  return (
    <div className="card o-card">
      <p className="micro-label red">{label}</p>
      <p>{text}</p>
      <ul className="mini-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
