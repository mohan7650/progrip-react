// Keeps "PRO-GRIP" on one line so headings never break at the hyphen.
export function withBrand(text) {
  return text.split(/(PRO-GRIP)/g).map((part, i) =>
    part === "PRO-GRIP" ? (
      <span key={i} style={{ whiteSpace: "nowrap" }}>
        {part}
      </span>
    ) : (
      part
    )
  );
}
