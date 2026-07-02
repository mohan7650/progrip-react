# PRO+GRIP Screws — React (Vite)

Production-ready React conversion of the original HTML/CSS landing page.
The UI is a 1:1 match with the source site — all layout, spacing, typography,
colors, shadows, animations and responsive behavior are preserved.

## Quick start

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (default: http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

No extra packages are required beyond React 18, ReactDOM and Vite.

## Project structure

```
src/
│
├── assets/
│   ├── images/          ← empty for now (see "Images" below)
│   ├── icons/
│   └── fonts/
│
├── components/
│   ├── Navbar/          Navbar.jsx · Navbar.css
│   ├── Hero/            Hero.jsx · Hero.css (hero + persona strip)
│   ├── ProductSection/  ProductSection.jsx · ProductSection.css (section 01)
│   ├── Features/        Features.jsx · FeatureCard.jsx · Features.css (section 02)
│   ├── Testimonials/    Testimonials.jsx · TestimonialCard.jsx · Testimonials.css (section 03)
│   ├── Applications/    Applications.jsx · ApplicationCard.jsx · Applications.css (section 04)
│   ├── Personas/        Personas.jsx · PersonaCard.jsx · Personas.css (section 05)
│   ├── OrderSection/    OrderSection.jsx · OrderCard.jsx · OrderSection.css (section 06)
│   ├── CTA/             CTA.jsx · CTA.css
│   ├── Footer/          Footer.jsx · Footer.css
│   └── Shared/          Button.jsx · SectionHead.jsx · Logo.jsx · Logo.css
│
├── pages/
│   └── Home.jsx         Composes all sections in page order
│
├── styles/
│   ├── variables.css    Design tokens (colors, fonts, spacing) + responsive overrides
│   ├── global.css       Reset, container, buttons, grids, cards, stripes
│   └── typography.css   Eyebrows, section titles, ghost numbers, micro labels
│
├── App.jsx
└── main.jsx
```

## Reusable components

- `<Button />` — all button variants (`red`, `white`, `outline`, `ghost`),
  sizes (`sm`, `xs`) and the full-width `block` modifier.
- `<SectionHead />` — the repeated eyebrow + title + ghost number + subtitle
  pattern used by sections 01–06.
- `<Logo />` — the PRO+GRIP lockup used in the header and footer.
- `<FeatureCard />`, `<TestimonialCard />`, `<ApplicationCard />`,
  `<PersonaCard />`, `<OrderCard />` — one component per repeated card type,
  fed by data arrays in each section file.

## Notes on the conversion

- **No images existed in the source.** All visuals (screw diagram, photo
  placeholders, diagonal stripes) are pure CSS, exactly as in the original.
  When you get real photography, drop files into `src/assets/images/` and
  import them, e.g.:

  ```jsx
  import installerPhoto from "../../assets/images/installer.jpg";
  ```

  Then swap the `.t-photo` / `.app-photo` placeholder divs for `<img>` tags
  or set the image as the element's background.

- **Fonts** load from Google Fonts via `index.html`, same as the original.
  To self-host later, place the font files in `src/assets/fonts/` and add
  `@font-face` rules to `styles/variables.css`.

- **Inline styles removed.** The three diagram node positions that used
  inline `style=""` in the HTML are now the classes `.node-1 / .node-2 /
  .node-3` in `ProductSection.css` — same pixel positions.

- **Inline JS removed.** The mobile menu toggle (`onclick` in the HTML) is
  now React state in `Navbar.jsx`; the footer subscribe form's
  `onsubmit="return false"` is now `onSubmit={(e) => e.preventDefault()}`.

- **Responsive breakpoints preserved**: tablet ≤1024px and mobile ≤680px.
  Shared rules (grid columns, `--section-pad`, ghost numbers) live in the
  global style layers; component-specific rules live in each component's
  own CSS file.

- `prefers-reduced-motion` support is preserved in `global.css`.
