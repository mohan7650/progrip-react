// Simple social glyphs (inline SVG, 24×24, inherit currentColor).
// Cut-outs use the footer background so they read on black.

const CUTOUT = "#000";

const icons = {
  facebook: (
    <>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        fill={CUTOUT}
        d="M13.3 22v-7.2h2.4l.4-2.8h-2.8v-1.8c0-.8.3-1.4 1.4-1.4h1.5V6.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.6 1.3-3.6 3.7V12H8v2.8h2.4V22z"
      />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
    </>
  ),
  x: (
    <>
      <path fill="currentColor" d="M3.5 3.5h5.2l11.8 17h-5.2z" />
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M19.5 4.5l-6.4 7.2M10.6 13.1L4.5 20" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2.5" fill="currentColor" />
      <path
        fill={CUTOUT}
        d="M7 10h2.3v7H7zM8.15 6.4a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6zM10.9 10h2.2v1c.4-.7 1.3-1.2 2.4-1.2 2.1 0 2.7 1.4 2.7 3.2v4h-2.3v-3.6c0-.9-.2-1.7-1.2-1.7s-1.5.7-1.5 1.7V17h-2.3z"
      />
    </>
  ),
  youtube: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" />
      <path fill={CUTOUT} d="M10 9v6l5.2-3z" />
    </>
  ),
};

export default function SocialIcon({ name, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {icons[name]}
    </svg>
  );
}
