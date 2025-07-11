import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook, Tag, ChevronRight, Heart, MessageCircle, Eye } from 'lucide-react';
import api from '../../../utils/request';
import './style.css';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterMessage, setNewsletterMessage] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    fetchBlogDetails();
  }, [id]);

  const fetchBlogDetails = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.blogs.getOne(id);
      const blog = response.data.data || response.data;
      setBlogPost(blog);
      setLikeCount(blog.likeCount || blog.likes?.length || 0);
      
      const currentUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_USER_KEY || 'softranch_user') || '{}');
      if (currentUser.id && blog.likes) {
        setIsLiked(blog.likes.includes(currentUser.id));
      }

      try {
        const relatedResponse = await api.blogs.getRelated(id);
        setRelatedPosts(relatedResponse.data.data || []);
      } catch (err) {
        console.error('Error fetching related posts:', err);
      }
    } catch (error) {
      console.error('Error fetching blog details:', error);
      setError(error.response?.data?.message || 'Failed to load blog post');
      
      if (error.response?.status === 404) {
        setTimeout(() => navigate('/blog'), 2000);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async () => {
    try {
      const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY || 'softranch_access_token');
      if (!token) {
        navigate('/login', { state: { from: `/blog/${id}` } });
        return;
      }

      const response = await api.blogs.like(id);
      const { liked, likeCount: newLikeCount } = response.data;
      
      setIsLiked(liked);
      setLikeCount(newLikeCount);
    } catch (error) {
      console.error('Error liking post:', error);
      if (error.response?.status === 401) {
        navigate('/login', { state: { from: `/blog/${id}` } });
      }
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blogPost?.title || '';
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          const btn = document.querySelector('.share-button.copy');
          const originalTitle = btn.getAttribute('aria-label');
          btn.setAttribute('aria-label', 'Link copied!');
          setTimeout(() => btn.setAttribute('aria-label', originalTitle), 2000);
        });
        break;
      default:
        break;
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterLoading(true);
    setNewsletterMessage('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setNewsletterMessage('Thank you for subscribing!');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterMessage(''), 3000);
    } catch (error) {
      setNewsletterMessage('Failed to subscribe. Please try again.');
    } finally {
      setNewsletterLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return '/blog/placeholder.jpg';
    if (imageUrl.startsWith('http')) return imageUrl;
    return `${process.env.REACT_APP_SERVER_URL || 'http://localhost:5000'}/uploads/${imageUrl}`;
  };

  const getAuthorAvatar = (author) => {
    if (!author) return null;
    if (author.avatarUrl) return author.avatarUrl;
    if (author.avatar) {
      if (author.avatar.startsWith('http')) return author.avatar;
      return `${process.env.REACT_APP_SERVER_URL || 'http://localhost:5000'}/uploads/${author.avatar}`;
    }
    return null;
  };

  const getBlogUrl = (blog) => {
    return `/blog/${blog.slug || blog._id}`;
  };

  if (loading) {
    return (
      <div className="blog-detail-wrapper">
        <div className="blog-detail-loading">
          <div className="blog-spinner"></div>
          <p>Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="blog-detail-wrapper">
        <div className="blog-detail-error">
          <h2>Oops! Something went wrong</h2>
          <p>{error || 'Blog post not found'}</p>
          <Link to="/blog" className="blog-error-link">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-wrapper">
      <section className="blog-detail-hero">
        <div className="blog-detail-hero-bg"></div>
        <div className="blog-detail-glow-orb blog-detail-glow-orb-1"></div>
        <div className="blog-detail-glow-orb blog-detail-glow-orb-2"></div>
        
        <div className="blog-detail-container">
          <Link to="/blog" className="blog-detail-back">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
          
          <div className="blog-detail-hero-content">
            <div className="blog-detail-meta">
              <span className="blog-detail-category">
                <Tag size={16} />
                {blogPost.category}
              </span>
              <span className="blog-detail-date">
                <Calendar size={16} />
                {formatDate(blogPost.publishedAt || blogPost.createdAt)}
              </span>
              <span className="blog-detail-read-time">
                <Clock size={16} />
                {blogPost.readTime || 5} min read
              </span>
              <span className="blog-detail-views">
                <Eye size={16} />
                {blogPost.views || 0} views
              </span>
            </div>
            
            <h1 className="blog-detail-title">{blogPost.title}</h1>
            <p className="blog-detail-excerpt">{blogPost.excerpt}</p>
            
            <div className="blog-detail-stats">
              <button 
                className={`blog-stat-btn ${isLiked ? 'liked' : ''}`}
                onClick={handleLike}
                aria-label={isLiked ? 'Unlike post' : 'Like post'}
              >
                <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
                <span>{likeCount} likes</span>
              </button>
              <span className="blog-stat-item">
                <MessageCircle size={20} />
                {blogPost.commentCount || 0} comments
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-detail-image-section">
        <div className="blog-detail-container">
          <div className="blog-detail-featured-image">
            <img 
              src={getImageUrl(blogPost.featuredImageUrl || blogPost.featuredImage)} 
              alt={blogPost.title}
              onError={(e) => {
                e.target.src = '/blog/placeholder.jpg';
              }}
            />
          </div>
        </div>
      </section>

      <section className="blog-detail-content-section">
        <div className="blog-detail-floating-glow blog-detail-floating-glow-1"></div>
        <div className="blog-detail-floating-glow blog-detail-floating-glow-2"></div>
        
        <div className="blog-detail-container">
          <div className="blog-detail-layout">
            <article className="blog-detail-article">
              <div 
                className="blog-detail-content"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
              
              {blogPost.tags && blogPost.tags.length > 0 && (
                <div className="blog-detail-tags">
                  <h3>Tags:</h3>
                  <div className="blog-detail-tags-list">
                    {blogPost.tags.map((tag, index) => (
                      <Link 
                        key={index} 
                        to={`/blog?tag=${tag}`} 
                        className="blog-detail-tag"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="blog-detail-share">
                <h3>Share this article:</h3>
                <div className="blog-detail-share-buttons">
                  <button 
                    className="share-button linkedin"
                    onClick={() => handleShare('linkedin')}
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={20} />
                  </button>
                  <button 
                    className="share-button twitter"
                    onClick={() => handleShare('twitter')}
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={20} />
                  </button>
                  <button 
                    className="share-button facebook"
                    onClick={() => handleShare('facebook')}
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={20} />
                  </button>
                  <button 
                    className="share-button copy"
                    onClick={() => handleShare('copy')}
                    aria-label="Copy link"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </article>

            <aside className="blog-detail-sidebar">
              {blogPost.author && (
                <div className="blog-detail-author-card">
                  <div className="author-avatar">
                    {getAuthorAvatar(blogPost.author) ? (
                      <img 
                        src={getAuthorAvatar(blogPost.author)} 
                        alt={blogPost.author.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className="author-avatar-fallback"
                      style={{ display: getAuthorAvatar(blogPost.author) ? 'none' : 'flex' }}
                    >
                      {blogPost.author.name?.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <h3 className="author-name">{blogPost.author.name}</h3>
                  {blogPost.author.jobTitle && (
                    <p className="author-role">{blogPost.author.jobTitle}</p>
                  )}
                  {blogPost.author.bio && (
                    <p className="author-bio">{blogPost.author.bio}</p>
                  )}
                </div>
              )}
              
              <div className="blog-detail-newsletter">
                <h3>Stay Updated</h3>
                <p>Get the latest insights and tips delivered to your inbox.</p>
                <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="newsletter-input"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    disabled={newsletterLoading}
                  />
                  <button 
                    type="submit" 
                    className="newsletter-button"
                    disabled={newsletterLoading}
                  >
                    {newsletterLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
                {newsletterMessage && (
                  <p className={`newsletter-message ${newsletterMessage.includes('Thank you') ? 'success' : 'error'}`}>
                    {newsletterMessage}
                  </p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="blog-detail-related">
          <div className="blog-detail-container">
            <h2 className="related-title">Related Articles</h2>
            
            <div className="related-posts-grid">
              {relatedPosts.slice(0, 3).map((post) => (
                <Link 
                  key={post._id} 
                  to={getBlogUrl(post)}
                  className="related-post-card"
                >
                  <div className="related-post-image">
                    <img 
                      src={getImageUrl(post.featuredImageUrl || post.featuredImage)} 
                      alt={post.title}
                      onError={(e) => {
                        e.target.src = '/blog/placeholder.jpg';
                      }}
                    />
                  </div>
                  <div className="related-post-content">
                    <span className="related-post-category">{post.category}</span>
                    <h3 className="related-post-title">{post.title}</h3>
                    <p className="related-post-excerpt">{post.excerpt}</p>
                    <span className="related-post-read-time">
                      <Clock size={14} />
                      {post.readTime || 5} min read
                    </span>
                  </div>
                  <ChevronRight className="related-post-arrow" size={20} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetailPage;