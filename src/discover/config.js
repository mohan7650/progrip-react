// Site configuration: contact details, form endpoints, tracking and links.
// Endpoints and the Meta Pixel ID come from environment variables (see .env.example).

export const config = {
  phone: {
    display: "581 824-3289",
    href: "tel:+15818243289",
  },
  // POST endpoint that receives the contact form as JSON.
  // Default: dedicated Formspree form for the /discover page.
  contactEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT || "https://formspree.io/f/meaeyrzp",
  // POST endpoint for the footer newsletter sign-up
  newsletterEndpoint: import.meta.env.VITE_NEWSLETTER_ENDPOINT || "",
  // Meta Pixel ID — when set, PageView fires on load and Lead fires on form success
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID || "",
};

// Footer links mirror the main site footer (src/components/Footer/Footer.jsx).
export const links = {
  products: "https://pro-grip.com/#products",
  footer: {
    produits: [
      { label: "Voir tous les produits", href: "/#products" },
      { label: "Montants métalliques", href: "/#products" },
      { label: "Cloison sèche", href: "/#products" },
      { label: "Usage intensif", href: "/#products" },
      { label: "Voir tout", href: "/#products" },
    ],
    entreprise: [
      { label: "À propos", href: "/#why" },
      { label: "Ressources", href: "/blog" },
      { label: "PRO System", href: "/#order" },
      { label: "Guide d’application", href: "/#applications" },
      { label: "Nous joindre", href: "#contact" },
    ],
    social: [
      { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/profile.php?id=61592498126725" },
      { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/progrip_screws/" },
      { label: "X", icon: "x", href: "https://x.com" },
      { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/progrip-screws/posts" },
      { label: "YouTube", icon: "youtube", href: "https://youtube.com" },
    ],
    legal: [
      { label: "Politique de confidentialité", href: "#" },
      { label: "Conditions d’utilisation", href: "#" },
      { label: "Paramètres des témoins", href: "#" },
    ],
  },
};
