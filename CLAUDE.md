# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install deps
npm run dev        # start Vite dev server (default http://localhost:5173)
npm run build       # production build
npm run preview      # preview production build
```

There is no test suite and no linter configured in this repo.

## Project overview

React (Vite) conversion of a static HTML/CSS landing page for PRO+GRIP Screws. The UI is meant to be a 1:1 visual match with the original site — layout, spacing, typography, colors, shadows, animations and responsive behavior are preserved intentionally, so avoid incidental style changes when editing components.

`FIGMA_DESIGN_SPECIFICATIONS.md` is the source of truth for design tokens (fonts, type scale, colors) and is mirrored into `src/styles/variables.css`.

## Architecture

- **Routing** (`src/App.jsx`): two routes — `/` (`Home`) and `/product/:categoryId/:productId` (`ProductDetail`), via `react-router-dom`.
- **`src/pages/Home.jsx`**: composes all landing-page sections in order (Navbar, Hero, ProductSection, Features, Personas, Applications, OrderSection, CTA, Footer). Some sections (Testimonials, ProSystem) are commented out but still present in the codebase.
- **`src/pages/ProductDetail.jsx`**: resolves a product by `categoryId`/`productId` from the route params, looking it up first in `PRODUCT_DETAILS` (`src/data/products.js`) and falling back to `PRODUCTS` exported from `src/components/ProductSection/ProductSection.jsx`. Renders ProductHero, ProductFeature, ProductOrder, CTA, Footer.
- **Component convention**: each component lives in its own folder under `src/components/<Name>/` with a co-located `.jsx` and `.css` file (e.g. `Hero/Hero.jsx` + `Hero/Hero.css`). Numbered landing sections (ProductSection, Features, Testimonials, Applications, Personas, OrderSection) correspond to sections 01–06 of the page and typically pair a section component with a `*Card` subcomponent, fed by a data array defined in the section file itself.
- **Shared components** (`src/components/Shared/`): `Button` (variants `red`/`white`/`outline`/`ghost`, sizes `sm`/`xs`, `block` modifier), `SectionHead` (eyebrow + title + ghost number + subtitle pattern reused across sections), `Logo`.
- **Styles**: `src/styles/variables.css` (design tokens: fonts, type scale, colors), `src/styles/global.css` (reset, container, buttons, grids, cards, stripes, `prefers-reduced-motion` support), `src/styles/typography.css` (eyebrows, section titles, ghost numbers, micro labels). Shared rules live in these global layers; component-specific rules live in each component's own CSS file. Responsive breakpoints: tablet ≤1024px, mobile ≤680px.
- **No images originally existed** in the source design — visuals (screw diagram, photo placeholders, diagonal stripes) are pure CSS. Real photography should go in `src/assets/images/` and be imported directly into components.
- **Fonts** load from Google Fonts via `index.html` (Russo One, Oswald, Inter, Barlow Condensed, Barlow).
- `three` / `@react-three/fiber` / `@react-three/drei` are listed as dependencies but are not currently used anywhere in `src/` — check before assuming any 3D rendering exists.
