import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import ProductHero from "../components/ProductHero/ProductHero.jsx";
import ProductFeature from "../components/ProductFeature/ProductFeature.jsx";
import ProductOrder from "../components/ProductOrder/ProductOrder.jsx";
import CTA from "../components/CTA/CTA.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { PRODUCT_DETAILS } from "../data/products.js";
import { PRODUCTS } from "../components/ProductSection/ProductSection.jsx";

const formatBoxWeight = (weight) =>
  weight === "N/A" ? "N/A" : `${weight} lbs`;

const createCatalogDetail = (product) => ({
  badge: `${product.category} · ${product.stockCode}`,
  title: [product.name],
  desc: [
    product.application,
    product.screwType,
    product.headType,
    product.finish,
  ].join(" · "),
  specs: [
    { label: "STOCK CODE", value: product.stockCode },
    { label: "GAUGE", value: product.gauge },
    { label: "LENGTH", value: product.length },
    { label: "THREAD", value: product.threadType.toUpperCase() },
    { label: "DRIVE", value: product.driveType },
  ],
  img: product.image,
  feature: {
    eyebrow: product.application,
    heading: `${product.gauge} × ${product.length}`,
    headingRed: `${product.threadType} Thread`,
    desc: [
      product.pointType,
      product.headType,
      product.finish,
      product.driveType,
    ].join(" · "),
    stats: [
      {
        value: product.unitsPerBox.toLocaleString(),
        label: "Units per box",
      },
      {
        value: formatBoxWeight(product.weightPerBox),
        label: "Weight per box",
      },
    ],
  },
  packages: [
    {
      num: "01",
      name: `${product.packType} · ${product.unitsPerBox.toLocaleString()} CT`,
      desc: `Stock code: ${product.stockCode}`,
    },
    {
      num: "02",
      name: product.subcategory,
      desc: `Application: ${product.application}`,
    },
    {
      num: "03",
      name: "Box Weight",
      desc: formatBoxWeight(product.weightPerBox),
    },
  ],
});

export default function ProductDetail() {
  const { categoryId, productId } = useParams();
  const catalogProduct = PRODUCTS.find(
    (candidate) =>
      candidate.categoryId === Number(categoryId) &&
      candidate.id === Number(productId),
  );
  const product = catalogProduct
    ? createCatalogDetail(catalogProduct)
    : PRODUCT_DETAILS[`${categoryId}-${productId}`];

  if (!product) {
    return (
      <>
        <Navbar />
        <main style={{ padding: "160px 24px", textAlign: "center", color: "var(--muted)" }}>
          Product not found.
        </main>
        <Footer />
      </>
    );
  }

  const useFrames = catalogProduct
    ? catalogProduct.threadType === "Fine"
    : !!product?.title?.join(" ").includes("Fine");

  return (
    <>
      <Navbar />
      <main>
        <ProductHero product={product} />
        <ProductFeature product={product} useFrameSequence={useFrames} />
        <ProductOrder product={product} />
        {/* Add more product detail components here */}
      </main>
      <CTA />
      <Footer />
    </>
  );
}
