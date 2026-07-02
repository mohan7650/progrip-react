import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
//import ProductSection from "../components/ProductSection/ProductSection.jsx";
import Features from "../components/Features/Features.jsx";
//import Testimonials from "../components/Testimonials/Testimonials.jsx";
import Applications from "../components/Applications/Applications.jsx";
import Personas from "../components/Personas/Personas.jsx";
import OrderSection from "../components/OrderSection/OrderSection.jsx";
import CTA from "../components/CTA/CTA.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <ProductSection /> */}
        <Features />
        <Personas />
        {/* <Testimonials /> */}
        <Applications />
        <OrderSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
