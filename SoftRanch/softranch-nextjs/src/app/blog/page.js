'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Calendar, Clock, User, Tag, ArrowRight, Filter } from 'lucide-react'
import api from '@/lib/api'
import PageLoader from '@/components/common/PageLoader'
import './blog.css'

// This would normally be in the page.js file for metadata
export const metadata = {
  title: 'Blog - Web Development Insights | SoftRanch',
  description: 'Stay updated with the latest web development trends, tutorials, and insights from the SoftRanch team. Expert tips on React, Next.js, design, and more.',
  keywords: [
    'web development blog',
    'programming tutorials',
    'React tips',
    'Next.js guides',
    'UI/UX design',
    'JavaScript tutorials',
    'tech insights',
    'development best practices'
  ],
  openGraph: {
    title: 'Blog - Web Development Insights | SoftRanch',
    description: 'Expert insights and tutorials on web development, design, and technology trends.',
    url: '/blog',
    type: 'website',
    images: ['/images/og-blog.jpg'],
  },
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [featuredBlog, setFeaturedBlog] = useState(null)

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'business', label: 'Business' },
    { value: 'technology', label: 'Technology' },
  ]

  useEffect(() => {
    fetchBlogs()
  }, [selectedCategory])

  const fetchBlogs = async () => {
    try {
      setLoading(true)
      const params = {
        status: 'published',
        sort: '-createdAt',
        limit: 12,
      }

      if (selectedCategory !== 'all') {
        params.category = selectedCategory
      }

      const response = await api.blogs.getAll(params)
      const blogData = response.data.data || response.data
      setBlogs(blogData)

      // Set first blog as featured if no featured blog exists
      if (blogData.length > 0 && !featuredBlog) {
        setFeaturedBlog(blogData[0])
      }
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getReadTime = (content) => {
    const wordsPerMinute = 200
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length
    const readTime = Math.ceil(wordCount / wordsPerMinute)
    return `${readTime} min read`
  }

  if (loading) {
    return <PageLoader />
  }

  return (
    <div className="blog-page">
      <div className="blog-bg">
        <div className="blog-glow"></div>
      </div>

      <div className="blog-container">
        {/* Header */}
        <div className="blog-header">
          <div className="blog-header-content">
            <h1 className="blog-title">
              Our <span className="blog-title-gradient">Blog</span>
            </h1>
            <p className="blog-subtitle">
              Insights, tutorials, and thoughts on web development, design, and technology
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="blog-controls">
          <div className="blog-search">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="blog-filters">
            <Filter size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Blog */}
        {featuredBlog && (
          <div className="featured-blog">
            <div className="featured-blog-content">
              <div className="featured-blog-text">
                <div className="featured-badge">Featured Article</div>
                <h2 className="featured-title">
                  <Link href={`/blog/${featuredBlog.slug || featuredBlog._id}`}>
                    {featuredBlog.title}
                  </Link>
                </h2>
                <p className="featured-excerpt">{featuredBlog.excerpt}</p>
                
                <div className="featured-meta">
                  <div className="meta-item">
                    <User size={16} />
                    <span>{featuredBlog.author?.name || 'SoftRanch Team'}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{formatDate(featuredBlog.createdAt)}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{getReadTime(featuredBlog.content)}</span>
                  </div>
                </div>

                <Link 
                  href={`/blog/${featuredBlog.slug || featuredBlog._id}`}
                  className="featured-button"
                >
                  Read Article
                  <ArrowRight size={18} />
                </Link>
              </div>
              
              <div className="featured-blog-image">
                <Image
                  src={featuredBlog.featuredImageUrl || featuredBlog.featuredImage || '/images/blog-placeholder.jpg'}
                  alt={featuredBlog.title}
                  width={600}
                  height={400}
                  className="featured-img"
                />
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="blog-grid">
            {filteredBlogs.slice(featuredBlog ? 1 : 0).map((blog) => (
              <article key={blog._id} className="blog-card">
                <Link href={`/blog/${blog.slug || blog._id}`} className="blog-card-link">
                  <div className="blog-card-image">
                    <Image
                      src={blog.featuredImageUrl || blog.featuredImage || '/images/blog-placeholder.jpg'}
                      alt={blog.title}
                      width={400}
                      height={250}
                      className="blog-img"
                    />
                    <div className="blog-card-overlay">
                      <ArrowRight size={24} />
                    </div>
                  </div>

                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <div className="blog-category">
                        <Tag size={14} />
                        <span>{blog.category}</span>
                      </div>
                      <div className="blog-date">
                        {formatDate(blog.createdAt)}
                      </div>
                    </div>

                    <h3 className="blog-card-title">{blog.title}</h3>
                    <p className="blog-card-excerpt">{blog.excerpt}</p>

                    <div className="blog-card-footer">
                      <div className="blog-author">
                        <div className="author-avatar">
                          {blog.author?.avatar ? (
                            <Image
                              src={blog.author.avatarUrl || blog.author.avatar}
                              alt={blog.author.name}
                              width={32}
                              height={32}
                            />
                          ) : (
                            <span>{blog.author?.name?.charAt(0) || 'S'}</span>
                          )}
                        </div>
                        <span className="author-name">
                          {blog.author?.name || 'SoftRanch Team'}
                        </span>
                      </div>
                      <div className="blog-read-time">
                        <Clock size={14} />
                        <span>{getReadTime(blog.content)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog-empty">
            <div className="empty-content">
              <div className="empty-icon">📝</div>
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="blog-newsletter">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>Get the latest articles and insights delivered to your inbox.</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}