import { useContext, useMemo } from "react";
import { LocaleContext } from "./LocaleContext.jsx";

import enCommon from "./locales/en-CA/common.js";
import enNavbar from "./locales/en-CA/navbar.js";
import enHero from "./locales/en-CA/hero.js";
import enFooter from "./locales/en-CA/footer.js";
import enCta from "./locales/en-CA/cta.js";
import enFeatures from "./locales/en-CA/features.js";
import enApplications from "./locales/en-CA/applications.js";
import enOrder from "./locales/en-CA/order.js";
import enProductCatalog from "./locales/en-CA/productCatalog.js";
import enProductDetail from "./locales/en-CA/productDetail.js";
import enProductFeature from "./locales/en-CA/productFeature.js";

import frCommon from "./locales/fr-CA/common.js";
import frNavbar from "./locales/fr-CA/navbar.js";
import frHero from "./locales/fr-CA/hero.js";
import frFooter from "./locales/fr-CA/footer.js";
import frCta from "./locales/fr-CA/cta.js";
import frFeatures from "./locales/fr-CA/features.js";
import frApplications from "./locales/fr-CA/applications.js";
import frOrder from "./locales/fr-CA/order.js";
import frProductCatalog from "./locales/fr-CA/productCatalog.js";
import frProductDetail from "./locales/fr-CA/productDetail.js";
import frProductFeature from "./locales/fr-CA/productFeature.js";

const DICTIONARIES = {
  "en-CA": {
    common: enCommon,
    navbar: enNavbar,
    hero: enHero,
    footer: enFooter,
    cta: enCta,
    features: enFeatures,
    applications: enApplications,
    order: enOrder,
    productCatalog: enProductCatalog,
    productDetail: enProductDetail,
    productFeature: enProductFeature,
  },
  "fr-CA": {
    common: frCommon,
    navbar: frNavbar,
    hero: frHero,
    footer: frFooter,
    cta: frCta,
    features: frFeatures,
    applications: frApplications,
    order: frOrder,
    productCatalog: frProductCatalog,
    productDetail: frProductDetail,
    productFeature: frProductFeature,
  },
};

/**
 * useTranslation() returns { locale, setLocale, t } where t is the full
 * namespaced dictionary object for the active locale, e.g. t.navbar.account.
 * Missing fr-CA keys fall back to en-CA rather than rendering undefined.
 */
export function useTranslation() {
  const { locale, setLocale } = useContext(LocaleContext);

  const t = useMemo(() => {
    return DICTIONARIES[locale] ?? DICTIONARIES["en-CA"];
  }, [locale]);

  return { locale, setLocale, t };
}
