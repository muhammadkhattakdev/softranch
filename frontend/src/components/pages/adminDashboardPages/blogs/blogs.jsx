import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import api from '../../../../utils/request';

import './style.css';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'technology', name: 'Technology' },
    { id: 'general', name: 'General' }
  ];

  useEffect(() => {
    fetchBlogs(1, true);
  }, [selectedCategory]);

  const fetchBlogs = async (page = 1, reset = false) => {
    try {
      if (page === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const params = {
        page: page,
        limit: 6,
        status: 'published',
        sort: '-publishedAt'
      };

      if (selectedCategory !== 'all') {
        params.category = selectedCategory;
      }

      const response = await api.blogs.getAll(params);
      const data = response.data;
      
      const newBlogs = data.data || data;
      const totalCount = data.totalCount || data.results || newBlogs.length;
      const totalPagesCount = Math.ceil(totalCount / 6);

      if (reset) {
        setBlogPosts(newBlogs);
      } else {
        setBlogPosts(prev => [...prev, ...newBlogs]);
      }
      
      setCurrentPage(page);
      setTotalPages(totalPagesCount);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const handleLoadMore = () => {
    if (currentPage < totalPages && !loadingMore) {
      fetchBlogs(currentPage + 1, false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getImageUrl = (blog) => {
    // Handle different image URL formats from backend
    if (blog.featuredImageUrl) {
      return blog.featuredImageUrl;
    }
    if (blog.featuredImage) {
      if (blog.featuredImage.startsWith('http')) {
        return blog.featuredImage;
      }
      // If it's a relative path, prepend the server URL
      return `${process.env.REACT_APP_SERVER_URL || 'http://localhost:5000'}/uploads/${blog.featuredImage}`;
    }
    return '/blog/placeholder.jpg';
  };

  const getBlogUrl = (blog) => {
    // Use slug if available, otherwise use ID
    return `/blog/${blog.slug || blog._id}`;
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
                onClick={() => handleCategoryChange(category.id)}
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
          {loading ? (
            <div className="blog-loading">
              <div className="blog-spinner"></div>
              <p>Loading amazing content...</p>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="blog-empty">
              <p>No blog posts found in this category.</p>
            </div>
          ) : (
            <>
              <div className="blog-posts-grid">
                {blogPosts.map((post) => (
                  <article key={post._id} className="blog-card">
                    <Link to={getBlogUrl(post)} className="blog-card-link">
                      <div className="blog-card-image">
                        <img 
                          src={getImageUrl(post)} 
                          alt={post.title}
                          onError={(e) => {
                            e.target.src = '/blog/placeholder.jpg';
                          }}
                        />
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
                            {formatDate(post.publishedAt || post.createdAt)}
                          </span>
                        </div>
                        
                        <h2 className="blog-card-title">{post.title}</h2>
                        <p className="blog-card-excerpt">{post.excerpt}</p>
                        
                        <div className="blog-card-footer">
                          <div className="blog-card-author">
                            <span className="author-name">
                              {post.author?.name || 'Anonymous'}
                            </span>
                            <span className="read-time">
                              <Clock size={14} />
                              {post.readTime || 5} min read
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
              {currentPage < totalPages && (
                <div className="blog-load-more">
                  <button 
                    className="blog-load-more-btn"
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                  >
                    {loadingMore ? (
                      <>
                        <span className="blog-spinner-small"></span>
                        <span>Loading...</span>
                      </>
                    ) : (
                      <>
                        Load More Articles
                        <span className="load-more-icon">↓</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;