import React from 'react';
import './style.css';
import { Calendar, User, ArrowRight, TrendingUp, Lightbulb, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from "../../../../../static/static_blog_images/img1.jpg";
import img2 from "../../../../../static/static_blog_images/img2.jpg";
import img3 from "../../../../../static/static_blog_images/img3.jpg";



const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "How a Beautiful Website Can Transform Your Business in 2025",
      excerpt: "Discover the latest design trends and proven strategies that are helping businesses increase conversions by 300% and dominate their competition.",
      image: img2,
      author: "SoftRanch Team",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Web Design",
      icon: <Lightbulb size={20} />,
      slug: "/blog/beautiful-website-transform-business-2025"
    },
    {
      id: 2,
      title: "10 Digital Marketing Secrets That Drive Real Estate Success",
      excerpt: "Learn the insider strategies top real estate agents use to generate qualified leads and close more deals through powerful web presence.",
      image: img1, 
      author: "SoftRanch Team",
      date: "January 12, 2025",
      readTime: "12 min read",
      category: "Digital Marketing",
      icon: <TrendingUp size={20} />,
      slug: "/blog/digital-marketing-real-estate-success"
    },
    {
      id: 3,
      title: "E-commerce Conversion Optimization: From 2% to 8% in 90 Days",
      excerpt: "Step-by-step case study revealing the exact conversion optimization techniques that quadrupled sales for our e-commerce clients.",
      image: img3,
      author: "SoftRanch Team", 
      date: "January 10, 2025",
      readTime: "15 min read",
      category: "E-commerce",
      icon: <Target size={20} />,
      slug: "/blog/ecommerce-conversion-optimization-case-study"
    }
  ];

  return (
    <section className="homepage-blog__section">
      <div className="homepage-blog__glow-orb homepage-blog__glow-orb-1"></div>
      <div className="homepage-blog__glow-orb homepage-blog__glow-orb-2"></div>
      <div className="homepage-blog__floating-glow homepage-blog__floating-glow-1"></div>
      <div className="homepage-blog__floating-glow homepage-blog__floating-glow-2"></div>
      
      <div className="homepage-blog__container">
        <div className="homepage-blog__header">
          <div className="homepage-blog__badge">
            <span>Latest Insights</span>
          </div>
          
          <h2 className="homepage-blog__title">
            Expert Tips & Strategies<br />
            Read Our Blog 
          </h2>
          
          <p className="homepage-blog__description">
            Stay ahead of the competition with actionable insights, industry trends, and proven 
            strategies from our team of digital marketing and web development experts.
          </p>
        </div>
        
        <div className="homepage-blog__grid">
          {blogs.map((blog, index) => (
            <article key={blog.id} className="homepage-blog__card" data-index={index}>
              <div className="homepage-blog__image-wrapper">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="homepage-blog__image"
                />
                <div className="homepage-blog__category-badge">
                  {blog.icon}
                  <span>{blog.category}</span>
                </div>
                <div className="homepage-blog__image-overlay"></div>
              </div>

              <div className="homepage-blog__content">
                <div className="homepage-blog__meta">
                  <div className="homepage-blog__meta-item">
                    <User size={16} />
                    <span>{blog.author}</span>
                  </div>
                  <div className="homepage-blog__meta-item">
                    <Calendar size={16} />
                    <span>{blog.date}</span>
                  </div>
                  <div className="homepage-blog__meta-item">
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <h3 className="homepage-blog__card-title">{blog.title}</h3>
                <p className="homepage-blog__excerpt">{blog.excerpt}</p>
                
                <Link to={blog.slug} className="homepage-blog__read-more">
                  Read Full Article
                  <ArrowRight size={16} />
                </Link>
              </div>
              
              <div className="homepage-blog__hover-effect"></div>
            </article>
          ))}
        </div>
        
        <div className="homepage-blog__cta">
          <Link to="/contact" className="homepage-blog__button">
            Get in Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;