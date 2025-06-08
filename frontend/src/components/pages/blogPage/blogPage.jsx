import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import './style.css';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'technology', name: 'Technology' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the cutting-edge technologies and methodologies that are shaping the future of web development, from AI integration to advanced frameworks.',
      image: '/blog/blog1.jpg',
      category: 'development',
      author: 'Sarah Johnson',
      date: '2025-01-15',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Mastering UI/UX Design: Creating Seamless User Experiences',
      excerpt: 'Learn the fundamental principles of UI/UX design and how to create interfaces that not only look beautiful but also provide exceptional user experiences.',
      image: '/blog/blog2.jpg',
      category: 'design',
      author: 'Michael Chen',
      date: '2025-01-12',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Building Scalable SaaS Applications: A Complete Guide',
      excerpt: 'Discover the best practices and architectural patterns for building robust, scalable SaaS applications that can grow with your business.',
      image: '/blog/blog3.jpg',
      category: 'development',
      author: 'Alex Thompson',
      date: '2025-01-10',
      readTime: '12 min read'
    },
    {
      id: 4,
      title: 'Digital Marketing Strategies for Tech Startups',
      excerpt: 'Effective digital marketing strategies tailored specifically for tech startups looking to establish their brand and reach their target audience.',
      image: '/blog/blog4.jpg',
      category: 'business',
      author: 'Emma Wilson',
      date: '2025-01-08',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'The Rise of AI in Modern Web Applications',
      excerpt: 'How artificial intelligence is revolutionizing web applications, from chatbots to personalized user experiences and predictive analytics.',
      image: '/blog/blog5.jpg',
      category: 'technology',
      author: 'David Lee',
      date: '2025-01-05',
      readTime: '10 min read'
    },
    {
      id: 6,
      title: 'Optimizing Website Performance: Speed Matters',
      excerpt: 'Learn advanced techniques for optimizing website performance, improving load times, and delivering lightning-fast user experiences.',
      image: '/blog/blog6.jpg',
      category: 'development',
      author: 'Rachel Green',
      date: '2025-01-03',
      readTime: '9 min read'
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="blog-page-wrapper">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-background"></div>
        <div className="blog-glow-orb blog-glow-orb-1"></div>
        <div className="blog-glow-orb blog-glow-orb-2"></div>
        <div className="blog-glow-orb blog-glow-orb-3"></div>
        
        <div className="blog-hero-content">
          <div className="blog-badge">
            <span>Insights & Ideas</span>
          </div>
          <h1 className="blog-hero-title">
            Our Blog
          </h1>
          <p className="blog-hero-description">
            Stay updated with the latest trends in web development, design insights, 
            and business strategies from our expert team.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="blog-categories-section">
        <div className="blog-container">
          <div className="blog-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`blog-category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section">
        <div className="blog-grid-glow-left"></div>
        <div className="blog-grid-glow-right"></div>
        <div className="blog-floating-glow blog-floating-glow-1"></div>
        <div className="blog-floating-glow blog-floating-glow-2"></div>
        
        <div className="blog-container">
          <div className="blog-posts-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <Link to={`/blog/${post.id}`} className="blog-card-link">
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                    <div className="blog-card-overlay"></div>
                  </div>
                  
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="blog-card-category">
                        <Tag size={14} />
                        {post.category}
                      </span>
                      <span className="blog-card-date">
                        <Calendar size={14} />
                        {formatDate(post.date)}
                      </span>
                    </div>
                    
                    <h2 className="blog-card-title">{post.title}</h2>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    
                    <div className="blog-card-footer">
                      <div className="blog-card-author">
                        <span className="author-name">{post.author}</span>
                        <span className="read-time">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="blog-card-arrow">
                        <ArrowRight size={20} />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="blog-load-more">
            <button className="blog-load-more-btn">
              Load More Articles
              <span className="load-more-icon">↓</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;