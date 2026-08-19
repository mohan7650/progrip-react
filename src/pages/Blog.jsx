import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CTA from "../components/CTA/CTA.jsx";
import SectionHead from "../components/Shared/SectionHead.jsx";
import Reveal from "../components/Reveal.jsx";
import { BLOG_POSTS } from "../data/blog.js";
import "../components/Blog/Blog.css";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function Blog() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section section-blog">
          <div className="container-wide">
            <SectionHead
              eyebrow="From The Jobsite"
              title={
                <>
                  PROGRIP <span className="red">BLOG</span>
                </>
              }
              sub="Product guides, installation tips, and project planning advice from our technical team."
            />

            <div className="blog-grid">
              {BLOG_POSTS.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.1}>
                  <Link to={`/blog/${post.slug}`} className="blog-card">
                    <p className="blog-card-category">{post.category}</p>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-meta">
                      <span>{formatDate(post.date)}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="blog-card-link">READ MORE →</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
