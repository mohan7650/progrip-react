import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import ProductHero from "../components/ProductHero/ProductHero.jsx";
import ProductFeature from "../components/ProductFeature/ProductFeature.jsx";
import ProductOrder from "../components/ProductOrder/ProductOrder.jsx";
import CTA from "../components/CTA/CTA.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { PRODUCT_DETAILS } from "../data/products.js";
import { PRODUCTS } from "../components/ProductSection/ProductSection.jsx";
import { useTranslation } from "../i18n/useTranslation.js";
import {
  localizeTerm,
  buildLocalizedProductName,
  CATEGORY_FIELD_LABELS,
  APPLICATION_LABELS,
  SCREWTYPE_LABELS,
  HEADTYPE_LABELS,
  FINISH_LABELS,
  POINTTYPE_LABELS,
  THREADTYPE_LABELS,
  PACKTYPE_LABELS,
} from "../i18n/fieldDictionaries.js";

const formatBoxWeight = (weight, t) =>
  weight === "N/A" ? t.common.notAvailable : `${weight} ${t.common.weightUnit}`;

const createCatalogDetail = (product, locale, t) => ({
  badge: `${localizeTerm(CATEGORY_FIELD_LABELS, product.category, locale)} · ${product.stockCode}`,
  title: [buildLocalizedProductName(product, locale)],
  desc: [
    localizeTerm(APPLICATION_LABELS, product.application, locale),
    localizeTerm(SCREWTYPE_LABELS, product.screwType, locale),
    localizeTerm(HEADTYPE_LABELS, product.headType, locale),
    localizeTerm(FINISH_LABELS, product.finish, locale),
  ].join(" · "),
  specs: [
    { label: t.productDetail.specLabels.stockCode, value: product.stockCode },
    { label: t.productDetail.specLabels.gauge, value: product.gauge },
    { label: t.productDetail.specLabels.length, value: product.length },
    { label: t.productDetail.specLabels.thread, value: product.threadType.toUpperCase() },
    { label: t.productDetail.specLabels.drive, value: product.driveType },
  ],
  img: product.image,
  feature: {
    eyebrow: localizeTerm(APPLICATION_LABELS, product.application, locale),
    heading: `${product.gauge} × ${product.length}`,
    headingRed: `${localizeTerm(THREADTYPE_LABELS, product.threadType, locale)} Thread`,
    desc: [
      localizeTerm(POINTTYPE_LABELS, product.pointType, locale),
      localizeTerm(HEADTYPE_LABELS, product.headType, locale),
      localizeTerm(FINISH_LABELS, product.finish, locale),
      product.driveType,
    ].join(" · "),
    stats: [
      {
        value: product.unitsPerBox.toLocaleString(locale),
        label: t.productDetail.specLabels.unitsPerBox,
      },
      {
        value: formatBoxWeight(product.weightPerBox, t),
        label: t.productDetail.specLabels.weightPerBox,
      },
    ],
  },
  packages: [
    {
      num: "01",
      name: `${localizeTerm(PACKTYPE_LABELS, product.packType, locale)} · ${product.unitsPerBox.toLocaleString(locale)} CT`,
      desc: `${t.productDetail.packages.stockCodePrefix} ${product.stockCode}`,
    },
    {
      num: "02",
      name: localizeTerm(CATEGORY_FIELD_LABELS, product.subcategory, locale),
      desc: `${t.productDetail.packages.applicationPrefix} ${localizeTerm(APPLICATION_LABELS, product.application, locale)}`,
    },
    {
      num: "03",
      name: t.productDetail.packages.boxWeight,
      desc: formatBoxWeight(product.weightPerBox, t),
    },
  ],
});

export default function ProductDetail() {
  const { categoryId, productId } = useParams();
  const { locale, t } = useTranslation();
  const catalogProduct = PRODUCTS.find(
    (candidate) =>
      candidate.categoryId === Number(categoryId) &&
      candidate.id === Number(productId),
  );
  const product = catalogProduct
    ? createCatalogDetail(catalogProduct, locale, t)
    : PRODUCT_DETAILS[`${categoryId}-${productId}`];

  if (!product) {
    return (
      <>
        <Navbar />
        <main style={{ padding: "160px 24px", textAlign: "center", color: "var(--muted)" }}>
          {t.productDetail.productNotFound}
        </main>
        <Footer />
      </>
    );
  }

  const isFineThread = catalogProduct
    ? catalogProduct.categoryId === 1
    : !!product?.title?.join(" ").includes("Fine");
  const isCoarseThread = catalogProduct
    ? catalogProduct.categoryId === 2
    : !!product?.title?.join(" ").includes("Coarse");
  const isSelfDrill = catalogProduct
    ? catalogProduct.categoryId === 3
    : !!product?.title?.join(" ").toLowerCase().includes("self drill");
  const isCementBoard = catalogProduct
    ? catalogProduct.categoryId === 4
    : !!product?.title?.join(" ").toLowerCase().includes("cement");
  const useFrames = isFineThread || isCoarseThread || isSelfDrill || isCementBoard;
  const frameSet = isFineThread ? "fine" : isSelfDrill ? "selfdrill" : isCementBoard ? "cement" : "coarse";

  return (
    <>
      <Navbar />
      <main>
        <ProductHero product={product} />
        <ProductFeature product={product} useFrameSequence={useFrames} frameSet={frameSet} />
        <ProductOrder product={product} />
        {/* Add more product detail components here */}
      </main>
      <CTA />
      <Footer />
    </>
  );
}
