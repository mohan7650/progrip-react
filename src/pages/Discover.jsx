import { useEffect } from "react";
// Base styles must load before the section CSS so section rules win
import "../discover/discover.css";
import Hero from "../discover/components/Hero.jsx";
import WhyProgrip from "../discover/components/WhyProgrip.jsx";
import ProSystem from "../discover/components/ProSystem.jsx";
import Contact from "../discover/components/Contact.jsx";
import Footer from "../discover/components/Footer.jsx";

/* French one-pager for the Meta campaign (formerly progrip-onepager/).
   Meta Pixel is already loaded by index.html; Lead events fire from the forms. */
export default function Discover() {
  useEffect(() => {
    // Hide the index.html splash screen right away
    window.dispatchEvent(new Event("app-image-ready"));

    const prevTitle = document.title;
    const prevLang = document.documentElement.lang;
    document.title = "PRO-GRIP | Solutions de fixation pour les pros";
    document.documentElement.lang = "fr-CA";
    return () => {
      document.title = prevTitle;
      document.documentElement.lang = prevLang;
    };
  }, []);

  return (
    <div className="dp-root">
      <main>
        <Hero />
        <WhyProgrip />
        <ProSystem />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
