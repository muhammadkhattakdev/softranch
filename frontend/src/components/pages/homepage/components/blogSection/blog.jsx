import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import "./style.css";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "See How a Beautiful Website Can Transform Your Business",
      excerpt:
        "Discover the latest design trends that are reshaping user experiences across web and mobile platforms. From micro-interactions to AI-powered personalization.",
      author: "Muhammad Ayaz",
      date: "2025-07-10",
      readTime: "10 min read",
      category: "Website Development",
      slug: "See-How-a-Beautiful-Website-Can-Transform-Your-Business",
      image: "/static/blog/blog1.jpg", 
      featured: true,
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="blog-section">
      <div className="blog-floating-glow blog-floating-glow-1"></div>
      <div className="blog-floating-glow blog-floating-glow-2"></div>

      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-badge">
            <span>Latest Insights</span>
          </div>

          <h2 className="blog-title">
            Stay Updated with
            <br />
            Industry Insights
          </h2>

          <p className="blog-description">
            Get the latest insights on web development, design trends, and
            digital marketing strategies from our team of experts. Stay ahead of
            the curve with actionable tips and industry best practices.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`blog-card ${
                post.featured ? "blog-card-featured" : ""
              }`}
              data-index={index}
            >
              <div className="blog-card-image">
                <div className="blog-image-placeholder">
                  <div className="blog-image-overlay">
                    <span className="blog-category">{post.category}</span>
                  </div>
                </div>
              </div>

              <div className="blog-card-content">
                <div className="blog-meta">
                  <div className="blog-meta-item">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="blog-meta-item">
                    <Calendar size={14} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="blog-meta-item">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>

                <Link to={`/blog/${post.slug}`} className="blog-read-more">
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="blog-card-hover-effect"></div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <Link to="/blog" className="blog-view-all">
            View All Articles
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
