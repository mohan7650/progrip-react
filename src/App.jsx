import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:categoryId/:productId" element={<ProductDetail />} />
    </Routes>
  );
}
