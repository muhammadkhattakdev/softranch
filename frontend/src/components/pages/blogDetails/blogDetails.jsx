import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook, Tag, ChevronRight } from 'lucide-react';
import './style.css';

const BlogDetailPage = () => {
  const { id } = useParams();

  const blogPost = {
    id: id,
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the cutting-edge technologies and methodologies that are shaping the future of web development, from AI integration to advanced frameworks.',
    content: `
      <p>The landscape of web development is evolving at an unprecedented pace. As we move through 2025, several key trends are emerging that will fundamentally shape how we build and interact with web applications.</p>

      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is no longer just a buzzword in web development. Today's AI-powered tools are revolutionizing how developers write code, debug applications, and optimize performance. From intelligent code completion to automated testing, AI is becoming an indispensable partner in the development process.</p>

      <p>Modern AI assistants can now understand context, suggest entire code blocks, and even help refactor existing codebases for better performance and maintainability. This isn't about replacing developers – it's about augmenting their capabilities and allowing them to focus on solving complex business problems.</p>

      <h2>2. The Rise of Edge Computing</h2>
      <p>Edge computing is transforming how we think about application architecture. By processing data closer to where it's generated, we're seeing dramatic improvements in latency and user experience. This is particularly crucial for applications that require real-time data processing, such as IoT devices, gaming platforms, and financial services.</p>

      <p>Frameworks like Cloudflare Workers and Vercel Edge Functions are making it easier than ever to deploy code at the edge, bringing compute power closer to users worldwide. This distributed approach not only improves performance but also enhances resilience and scalability.</p>

      <h2>3. Web Assembly Goes Mainstream</h2>
      <p>WebAssembly (WASM) is finally reaching its potential, enabling near-native performance in web browsers. This technology is opening doors for applications that were previously impossible to run efficiently on the web, from complex 3D graphics engines to sophisticated data analysis tools.</p>

      <p>Languages like Rust, C++, and Go can now be compiled to WebAssembly, allowing developers to leverage existing codebases and bring desktop-class applications to the browser. This is particularly exciting for industries like gaming, CAD software, and scientific computing.</p>

      <h2>4. Enhanced Developer Experience</h2>
      <p>The focus on developer experience (DX) continues to intensify. Modern frameworks are prioritizing ease of use, better error messages, and faster development cycles. Tools like Vite have revolutionized the build process, offering lightning-fast hot module replacement and optimized production builds.</p>
      
      <p>The rise of full-stack frameworks like Next.js, Remix, and SvelteKit demonstrates the industry's move towards more integrated development experiences. These frameworks handle everything from routing to data fetching, allowing developers to build complex applications with less boilerplate code.</p>
      
      <h2>5. Security-First Development</h2>
      <p>With cyber threats becoming more sophisticated, security can no longer be an afterthought. Modern web development practices are incorporating security considerations from the ground up. This includes everything from secure coding practices to automated security testing in CI/CD pipelines.</p>
      
      <p>New standards and protocols are emerging to protect user data and ensure privacy. Features like Content Security Policy (CSP), Subresource Integrity (SRI), and modern authentication methods are becoming standard practice rather than optional additions.</p>
      
      <h2>Looking Ahead</h2>
      <p>The future of web development is bright and full of possibilities. As these trends continue to evolve, we're seeing the emergence of more powerful, secure, and user-friendly web applications. The key for developers is to stay adaptable, continue learning, and embrace these new technologies as they mature.</p>
      
      <p>At SoftRanch, we're committed to staying at the forefront of these technological advances. We believe that by embracing innovation while maintaining a focus on user experience and performance, we can build web applications that not only meet today's needs but are ready for tomorrow's challenges.</p>
    `,
    image: '/blog/blog1.jpg',
    category: 'development',
    author: {
      name: 'Sarah Johnson',
      role: 'Senior Developer',
      bio: 'Sarah is a passionate web developer with over 10 years of experience in building scalable applications. She specializes in modern JavaScript frameworks and cloud architecture.',
      avatar: '/team/sarah.jpg'
    },
    date: '2025-01-15',
    readTime: '8 min read',
    tags: ['Web Development', 'Technology', 'AI', 'Future Tech']
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Mastering UI/UX Design: Creating Seamless User Experiences',
      excerpt: 'Learn the fundamental principles of UI/UX design and how to create beautiful interfaces.',
      image: '/blog/blog2.jpg',
      category: 'design',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Building Scalable SaaS Applications: A Complete Guide',
      excerpt: 'Discover the best practices for building robust, scalable SaaS applications.',
      image: '/blog/blog3.jpg',
      category: 'development',
      readTime: '12 min read'
    },
    {
      id: 5,
      title: 'The Rise of AI in Modern Web Applications',
      excerpt: 'How artificial intelligence is revolutionizing web applications.',
      image: '/blog/blog5.jpg',
      category: 'technology',
      readTime: '10 min read'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blogPost.title;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="blog-detail-wrapper">
      {/* Hero Section */}
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
                {formatDate(blogPost.date)}
              </span>
              <span className="blog-detail-read-time">
                <Clock size={16} />
                {blogPost.readTime}
              </span>
            </div>
            
            <h1 className="blog-detail-title">{blogPost.title}</h1>
            <p className="blog-detail-excerpt">{blogPost.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="blog-detail-image-section">
        <div className="blog-detail-container">
          <div className="blog-detail-featured-image">
            <img src={blogPost.image} alt={blogPost.title} />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="blog-detail-content-section">
        <div className="blog-detail-floating-glow blog-detail-floating-glow-1"></div>
        <div className="blog-detail-floating-glow blog-detail-floating-glow-2"></div>
        
        <div className="blog-detail-container">
          <div className="blog-detail-layout">
            {/* Main Content */}
            <article className="blog-detail-article">
              <div 
                className="blog-detail-content"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
              
              {/* Tags */}
              <div className="blog-detail-tags">
                <h3>Tags:</h3>
                <div className="blog-detail-tags-list">
                  {blogPost.tags.map((tag, index) => (
                    <span key={index} className="blog-detail-tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              {/* Share Section */}
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
                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                    aria-label="Copy link"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="blog-detail-sidebar">
              {/* Author Bio */}
              <div className="blog-detail-author-card">
                <div className="author-avatar">
                  <img src={blogPost.author.avatar} alt={blogPost.author.name} />
                </div>
                <h3 className="author-name">{blogPost.author.name}</h3>
                <p className="author-role">{blogPost.author.role}</p>
                <p className="author-bio">{blogPost.author.bio}</p>
              </div>
              
              {/* Newsletter CTA */}
              <div className="blog-detail-newsletter">
                <h3>Stay Updated</h3>
                <p>Get the latest insights and tips delivered to your inbox.</p>
                <form className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="newsletter-input"
                  />
                  <button type="submit" className="newsletter-button">
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="blog-detail-related">
        <div className="blog-detail-container">
          <h2 className="related-title">Related Articles</h2>
          
          <div className="related-posts-grid">
            {relatedPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`} 
                className="related-post-card"
              >
                <div className="related-post-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="related-post-content">
                  <span className="related-post-category">{post.category}</span>
                  <h3 className="related-post-title">{post.title}</h3>
                  <p className="related-post-excerpt">{post.excerpt}</p>
                  <span className="related-post-read-time">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <ChevronRight className="related-post-arrow" size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;