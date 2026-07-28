import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import ProductHero from "../components/ProductHero/ProductHero.jsx";
import ProductFeature from "../components/ProductFeature/ProductFeature.jsx";
import ProductOrder from "../components/ProductOrder/ProductOrder.jsx";
import CTA from "../components/CTA/CTA.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { PRODUCT_DETAILS } from "../data/products.js";

export default function ProductDetail() {
  const { categoryId, productId } = useParams();
  const product = PRODUCT_DETAILS[`${categoryId}-${productId}`];

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

  const useFrames = categoryId === "1" && productId === "1";

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
