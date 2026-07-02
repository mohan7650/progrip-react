/**
 * Shared section heading — the repeated
 * eyebrow + title (+ ghost number) + subtitle pattern.
 *
 * Props:
 *  - eyebrow : eyebrow label text
 *  - title   : JSX for the heading (line breaks / red spans)
 *  - num     : ghost section number, e.g. "01" (optional)
 *  - sub     : subtitle text (optional)
 *  - left    : adds .left alignment modifier (optional)
 */
export default function SectionHead({ eyebrow, title, num, sub, left = false }) {
  return (
    <div className={left ? "section-head left" : "section-head"}>
      <p className="eyebrow">
        <span className="tick red"></span> {eyebrow}
      </p>
      <h2 className="section-title">
        {title}
        {num && <span className="ghost-num">{num}</span>}
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}
