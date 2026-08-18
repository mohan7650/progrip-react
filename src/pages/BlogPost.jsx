import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CTA from "../components/CTA/CTA.jsx";
import { BLOG_POSTS } from "../data/blog.js";
import "../components/Blog/Blog.css";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((candidate) => candidate.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main style={{ padding: "160px 24px", textAlign: "center", color: "var(--muted)" }}>
          <p>Post not found.</p>
          <Link to="/blog" className="blog-card-link">← Back to Blog</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <article className="section section-blog-post">
          <div className="container">
            <Link to="/blog" className="blog-back-link">← Back to Blog</Link>

            <p className="blog-card-category">{post.category}</p>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-card-meta">
              <span>{post.author}</span>
              <span aria-hidden="true">·</span>
              <span>{formatDate(post.date)}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>

            <div className="blog-post-body">
              {post.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
