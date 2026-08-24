// Presentation-only dictionaries: map STABLE internal English values (used for
// filtering/comparison/state) to locale-specific display text. Internal values
// stored in PRODUCTS / FILTER_GROUPS / selectedFilters must never be replaced
// by these translated strings — only render output passes through them.

// Shared controlled-vocabulary terms reused across filters, product fields,
// category tabs, and spec values.
export const TERM_LABELS = {
  "All Products": { "en-CA": "All Products", "fr-CA": "Tous les produits" },
  "Sharp Point - Fine Thread": { "en-CA": "Sharp Point - Fine Thread", "fr-CA": "Pointe acérée - filet fin" },
  "Sharp Point - Coarse Thread": { "en-CA": "Sharp Point - Coarse Thread", "fr-CA": "Pointe acérée - gros filet" },
  // Approved standardized customer-visible English form is "Self-Drilling"
  // (hyphenated) regardless of which internal spelling variant is present.
  "Self Drilling": { "en-CA": "Self Drilling", "fr-CA": "Autoperceuses" },
  "Self-Drilling": { "en-CA": "Self-Drilling", "fr-CA": "Autoperceuse" },
  "Drywall": { "en-CA": "Drywall", "fr-CA": "Cloison sèche" },
  "Framing": { "en-CA": "Framing", "fr-CA": "Ossature" },
  "Collated": { "en-CA": "Collated", "fr-CA": "En bande" },
  "Laminating": { "en-CA": "Laminating", "fr-CA": "Laminage" },
  "Cement Board": { "en-CA": "Cement Board", "fr-CA": "Panneau de ciment" },
  "Concrete": { "en-CA": "Concrete", "fr-CA": "Béton" },
  "Bugle": { "en-CA": "Bugle", "fr-CA": "Tête trompette" },
  "Flat": { "en-CA": "Flat", "fr-CA": "Plate" },
  "Hex Washer": { "en-CA": "Hex Washer", "fr-CA": "Hexagonale à rondelle" },
  "Pan Framer": { "en-CA": "Pan Framer", "fr-CA": "Cylindrique pour ossature" },
  "Wafer": { "en-CA": "Wafer", "fr-CA": "Wafer" },
  "Drywall-to-Metal": { "en-CA": "Drywall-to-Metal", "fr-CA": "Cloison sèche sur métal" },
  "Metal-to-Metal": { "en-CA": "Metal-to-Metal", "fr-CA": "Métal sur métal" },
  "Phosphated": { "en-CA": "Phosphated", "fr-CA": "Phosphatée" },
  "Zinc": { "en-CA": "Zinc", "fr-CA": "Zinc" },
  "Blue Ruspert": { "en-CA": "Blue Ruspert", "fr-CA": "Ruspert bleu" },
  "Gray Ruspert": { "en-CA": "Gray Ruspert", "fr-CA": "Ruspert gris" },
  "Fine": { "en-CA": "Fine", "fr-CA": "Fin" },
  "Coarse": { "en-CA": "Coarse", "fr-CA": "Gros" },
  "High-Low": { "en-CA": "High-Low", "fr-CA": "Haut-bas" },
  "Sharp Point": { "en-CA": "Sharp Point", "fr-CA": "Pointe acérée" },
  "#2 Phillips": { "en-CA": "#2 Phillips", "fr-CA": "#2 Phillips" },
  "5/16 Hex": { "en-CA": "5/16 Hex", "fr-CA": "5/16 hexagonal" },
  "Box": { "en-CA": "Box", "fr-CA": "Boîte" },
  "Best Sellers Only": { "en-CA": "Best Sellers Only", "fr-CA": "Meilleures ventes seulement" },
};

// Filter group ids -> group label
export const FILTER_GROUP_LABELS = {
  length: { "en-CA": "Screw Length", "fr-CA": "Longueur de la vis" },
  gauge: { "en-CA": "Gauge / Diameter", "fr-CA": "Calibre / diamètre" },
  screwType: { "en-CA": "Screw / Product Type", "fr-CA": "Type de vis / produit" },
  headType: { "en-CA": "Head Type", "fr-CA": "Type de tête" },
  application: { "en-CA": "Application", "fr-CA": "Application" },
  finish: { "en-CA": "Finish", "fr-CA": "Finition" },
  threadType: { "en-CA": "Thread Type", "fr-CA": "Type de filet" },
  pointType: { "en-CA": "Point Type", "fr-CA": "Type de pointe" },
  driveType: { "en-CA": "Drive Type", "fr-CA": "Type d'empreinte" },
  packType: { "en-CA": "Pack Type", "fr-CA": "Type d'emballage" },
  popular: { "en-CA": "Best Sellers", "fr-CA": "Meilleures ventes" },
};

// Category tab labels (CATEGORY_TABS.label) — distinct from product.category,
// per approved decision to treat "Concrete & Cement Board" and
// "Concrete and Cement Board Screws" as separate keys.
export const CATEGORY_TAB_LABELS = {
  "All Products": TERM_LABELS["All Products"],
  "Sharp Point - Fine Thread": TERM_LABELS["Sharp Point - Fine Thread"],
  "Sharp Point - Coarse Thread": TERM_LABELS["Sharp Point - Coarse Thread"],
  "Self Drilling": TERM_LABELS["Self Drilling"],
  "Concrete & Cement Board": { "en-CA": "Concrete & Cement Board", "fr-CA": "Béton et panneaux de ciment" },
};

// product.category / product.subcategory display values
export const CATEGORY_FIELD_LABELS = {
  "Sharp Point - Fine Thread": TERM_LABELS["Sharp Point - Fine Thread"],
  "Sharp Point - Coarse Thread": TERM_LABELS["Sharp Point - Coarse Thread"],
  "Self Drilling": TERM_LABELS["Self Drilling"],
  "Concrete and Cement Board Screws": { "en-CA": "Concrete and Cement Board Screws", "fr-CA": "Vis pour béton et panneaux de ciment" },
  "Drywall Screws": { "en-CA": "Drywall Screws", "fr-CA": "Vis à cloison sèche" },
  "Framing Screws": { "en-CA": "Framing Screws", "fr-CA": "Vis d'ossature" },
  "Collated Screws": { "en-CA": "Collated Screws", "fr-CA": "Vis en bande" },
  "Laminated": { "en-CA": "Laminated", "fr-CA": "Laminage" },
};

// product.application display values
export const APPLICATION_LABELS = {
  "Drywall to Metal": { "en-CA": "Drywall to Metal", "fr-CA": "Cloison sèche sur métal" },
  "Drywall to Wood": { "en-CA": "Drywall to Wood", "fr-CA": "Cloison sèche sur bois" },
  "Drywall to Drywall": { "en-CA": "Drywall to Drywall", "fr-CA": "Cloison sèche sur cloison sèche" },
  "Metal to Metal": { "en-CA": "Metal to Metal", "fr-CA": "Métal sur métal" },
  "Cement Board to Wood": { "en-CA": "Cement Board to Wood", "fr-CA": "Panneau de ciment sur bois" },
  "Cement Board to Metal": { "en-CA": "Cement Board to Metal", "fr-CA": "Panneau de ciment sur métal" },
  "Metal to Concrete": { "en-CA": "Metal to Concrete", "fr-CA": "Métal sur béton" },
};

// product.screwType display values
export const SCREWTYPE_LABELS = {
  "Drywall Screw": { "en-CA": "Drywall Screw", "fr-CA": "Vis à cloison sèche" },
  "Collated Drywall Screw": { "en-CA": "Collated Drywall Screw", "fr-CA": "Vis à cloison sèche en bande" },
  "Framing Screw": { "en-CA": "Framing Screw", "fr-CA": "Vis d'ossature" },
  "Self-Drilling Drywall Screw": { "en-CA": "Self-Drilling Drywall Screw", "fr-CA": "Vis à cloison sèche autoperceuse" },
  "Self-Drilling Framing Screw": { "en-CA": "Self-Drilling Framing Screw", "fr-CA": "Vis d'ossature autoperceuse" },
  "Collated Self-Drilling Drywall Screw": { "en-CA": "Collated Self-Drilling Drywall Screw", "fr-CA": "Vis à cloison sèche autoperceuse en bande" },
  "Laminating Screw": { "en-CA": "Laminating Screw", "fr-CA": "Vis de laminage" },
  "Cement Board Screw": { "en-CA": "Cement Board Screw", "fr-CA": "Vis pour panneau de ciment" },
  "Concrete Screw": { "en-CA": "Concrete Screw", "fr-CA": "Vis à béton" },
};

// product.pointType display values
export const POINTTYPE_LABELS = {
  "Sharp Point": TERM_LABELS["Sharp Point"],
  "Self-Drilling Point": { "en-CA": "Self-Drilling Point", "fr-CA": "Pointe autoperceuse" },
};

// product.headType display values
export const HEADTYPE_LABELS = {
  "Bugle Head": { "en-CA": "Bugle Head", "fr-CA": "Tête trompette" },
  "Flat Head": { "en-CA": "Flat Head", "fr-CA": "Tête plate" },
  "Flat Head with Ribs": { "en-CA": "Flat Head with Ribs", "fr-CA": "Tête plate avec nervures" },
  "Hex Washer Head": { "en-CA": "Hex Washer Head", "fr-CA": "Tête hexagonale à rondelle" },
  "Hex Washer Head with Phil/Slot": { "en-CA": "Hex Washer Head with Phil/Slot", "fr-CA": "Tête hexagonale à rondelle Phillips/fendue" },
  "Pan Framer Head": { "en-CA": "Pan Framer Head", "fr-CA": "Tête cylindrique pour ossature" },
  "Wafer Head - Modified Truss": { "en-CA": "Wafer Head - Modified Truss", "fr-CA": "Tête wafer modifiée type camion" },
};

// product.finish display values (Ruspert kept as trade name; only descriptive
// wording is translated)
export const FINISH_LABELS = {
  "Phosphated": TERM_LABELS["Phosphated"],
  "Zinc": TERM_LABELS["Zinc"],
  "Phosphated / Zinc": { "en-CA": "Phosphated / Zinc", "fr-CA": "Phosphatée / zinc" },
  "Blue Ruspert Coating (1000 HR Salt Spray Rated)": {
    "en-CA": "Blue Ruspert Coating (1000 HR Salt Spray Rated)",
    "fr-CA": "Revêtement Ruspert bleu (résistance au brouillard salin de 1000 h)",
  },
  "Gray Ruspert Coating (1500 HR Salt Spray Rated)": {
    "en-CA": "Gray Ruspert Coating (1500 HR Salt Spray Rated)",
    "fr-CA": "Revêtement Ruspert gris (résistance au brouillard salin de 1500 h)",
  },
};

// product.threadType display values (also a filter option)
export const THREADTYPE_LABELS = {
  "Fine": TERM_LABELS["Fine"],
  "Coarse": TERM_LABELS["Coarse"],
  "High-Low": TERM_LABELS["High-Low"],
};

// product.packType display values (computed "Collated"/"Box")
export const PACKTYPE_LABELS = {
  "Collated": TERM_LABELS["Collated"],
  "Box": TERM_LABELS["Box"],
};

/**
 * Resolve a display label for an internal value from a dictionary.
 * Falls back to the raw internal value (English) if no translation exists —
 * never throws, never silently swallows an untranslated string.
 */
export function localizeTerm(dictionary, value, locale) {
  const entry = dictionary[value];
  if (!entry) return value;
  return entry[locale] ?? entry["en-CA"] ?? value;
}

// Product-name descriptor phrases, used to recompose a localized product
// name from its stable parts (gauge/length/PROGRIP stay verbatim).
// Keyed by the exact descriptor phrase found between the dimension and
// "Screw" in PRODUCTS[].name.
export const PRODUCT_NAME_DESCRIPTOR_LABELS = {
  "Fine Thread Drywall": { "en-CA": "Fine Thread Drywall", "fr-CA": "à cloison sèche à filet fin" },
  "Coarse Thread Drywall": { "en-CA": "Coarse Thread Drywall", "fr-CA": "à cloison sèche à gros filet" },
  "Sharp Point Framing": { "en-CA": "Sharp Point Framing", "fr-CA": "d'ossature à pointe acérée" },
  "Collated Fine Thread Drywall": { "en-CA": "Collated Fine Thread Drywall", "fr-CA": "à cloison sèche à filet fin en bande" },
  "Collated Coarse Thread Drywall": { "en-CA": "Collated Coarse Thread Drywall", "fr-CA": "à cloison sèche à gros filet en bande" },
  "Laminated Drywall": { "en-CA": "Laminated Drywall", "fr-CA": "à cloison sèche pour laminage" },
  "Self-Drilling Drywall": { "en-CA": "Self-Drilling Drywall", "fr-CA": "à cloison sèche autoperceuse" },
  "Self-Drilling Framing": { "en-CA": "Self-Drilling Framing", "fr-CA": "d'ossature autoperceuse" },
  "Collated Self-Drilling Drywall": { "en-CA": "Collated Self-Drilling Drywall", "fr-CA": "à cloison sèche autoperceuse en bande" },
  "Sharp Point Cement Board": { "en-CA": "Sharp Point Cement Board", "fr-CA": "pour panneau de ciment à pointe acérée" },
  "Self-Drilling Cement Board": { "en-CA": "Self-Drilling Cement Board", "fr-CA": "pour panneau de ciment autoperceuse" },
  "Concrete": { "en-CA": "Concrete", "fr-CA": "à béton" },
};

const PRODUCT_NAME_PATTERN = /^PROGRIP\s+(\S+)\s+x\s+(\S+)\s+(.+)\s+Screw$/i;

// Populated at runtime with any product name whose descriptor phrase has no
// dictionary entry, so it can be surfaced in the implementation report
// instead of silently rendering English text inside French copy.
export const UNMAPPED_PRODUCT_NAME_DESCRIPTORS = [];

/**
 * Build a locale-aware product name while preserving PROGRIP branding,
 * gauge, dimensions, and measurements verbatim. Falls back to the original
 * English name (and records the miss) if the descriptor phrase isn't in
 * PRODUCT_NAME_DESCRIPTOR_LABELS.
 */
export function buildLocalizedProductName(product, locale) {
  if (locale === "en-CA") return product.name;

  const match = product.name.match(PRODUCT_NAME_PATTERN);
  if (!match) {
    UNMAPPED_PRODUCT_NAME_DESCRIPTORS.push({ stockCode: product.stockCode, name: product.name, reason: "pattern-mismatch" });
    return product.name;
  }

  const [, gauge, length, descriptor] = match;
  const entry = PRODUCT_NAME_DESCRIPTOR_LABELS[descriptor];
  if (!entry || !entry[locale]) {
    UNMAPPED_PRODUCT_NAME_DESCRIPTORS.push({ stockCode: product.stockCode, name: product.name, reason: `descriptor "${descriptor}" not in dictionary` });
    return product.name;
  }

  return `PROGRIP ${gauge} x ${length} vis ${entry[locale]}`;
}
