import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import MetaPixelPageView from "./components/MetaPixelPageView.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import { LocaleProvider } from "./i18n/LocaleContext.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import Discover from "./pages/Discover.jsx";

export default function App() {
  return (
    <LocaleProvider>
      <ScrollToTop />
      <MetaPixelPageView />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:categoryId/:productId" element={<ProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </LocaleProvider>
  );
}
