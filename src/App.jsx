import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import { LocaleProvider } from "./i18n/LocaleContext.jsx";

export default function App() {
  return (
    <LocaleProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:categoryId/:productId" element={<ProductDetail />} />
      </Routes>
    </LocaleProvider>
  );
}
