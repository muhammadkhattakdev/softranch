import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  MoreVertical,
  Calendar,
  Clock,
  Tag
} from 'lucide-react';
import api from '../../../../utils/request';
import { useAuth } from '../../../../context/authContext';
import './style.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { user, isAdmin, isEditor } = useAuth();

  const categories = ['all', 'development', 'design', 'business', 'technology', 'general'];
  const statuses = ['all', 'draft', 'published', 'archived'];

  useEffect(() => {
    fetchBlogs();
  }, [currentPage, filterStatus, filterCategory]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const params = {
        page: currentPage,
        limit: 10,
        sort: '-createdAt',
      };

      if (filterStatus !== 'all') {
        params.status = filterStatus;
      }
      if (filterCategory !== 'all') {
        params.category = filterCategory;
      }

      const response = await api.blogs.getAll(params);
      setBlogs(response.data.data || response.data);
      const totalCount = response.data.totalCount || response.data.results;
      setTotalPages(Math.ceil(totalCount / 10));
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await api.blogs.delete(id);
        fetchBlogs();
      } catch (error) {
        console.error('Error deleting blog:', error);
        alert('Failed to delete blog');
      }
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'published':
        return 'dash-badge-success';
      case 'draft':
        return 'dash-badge-warning';
      case 'archived':
        return 'dash-badge-secondary';
      default:
        return '';
    }
  };

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const canEdit = (blog) => {
    return isAdmin() || isEditor() || blog.author._id === user?.id;
  };

  return (
    <div className="dash-blogs">
      {/* Page Header */}
      <div className="dash-blogs-header">
        <div>
          <h1 className="dash-blogs-title">Blog Management</h1>
          <p className="dash-blogs-subtitle">Create and manage your blog posts</p>
        </div>
        <Link to="/admin/blogs/create" className="dash-btn-primary">
          <Plus size={20} />
          <span>New Blog Post</span>
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="dash-blogs-controls">
        <div className="dash-blogs-search">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="dash-search-input"
          />
        </div>

        <div className="dash-blogs-filters">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="dash-select"
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>

          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="dash-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Blog List */}
      {loading ? (
        <div className="dash-blogs-loading">
          <div className="dash-spinner"></div>
          <p>Loading blogs...</p>
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="dash-blogs-empty">
          <p>No blogs found</p>
        </div>
      ) : (
        <div className="dash-blogs-list">
          {filteredBlogs.map((blog) => (
            <div key={blog._id} className="dash-blog-card">
              <div className="dash-blog-image">
                <img 
                  src={blog.featuredImageUrl || blog.featuredImage} 
                  alt={blog.title}
                  onError={(e) => {
                    e.target.src = '/placeholder-blog.jpg';
                  }}
                />
              </div>

              <div className="dash-blog-content">
                <div className="dash-blog-meta">
                  <span className={`dash-badge ${getStatusBadgeClass(blog.status)}`}>
                    {blog.status}
                  </span>
                  <span className="dash-blog-category">
                    <Tag size={14} />
                    {blog.category}
                  </span>
                  <span className="dash-blog-date">
                    <Calendar size={14} />
                    {formatDate(blog.createdAt)}
                  </span>
                  <span className="dash-blog-read-time">
                    <Clock size={14} />
                    {blog.readTime} min read
                  </span>
                </div>

                <h3 className="dash-blog-title">{blog.title}</h3>
                <p className="dash-blog-excerpt">{blog.excerpt}</p>

                <div className="dash-blog-footer">
                  <div className="dash-blog-author">
                    <div className="dash-author-avatar">
                      {blog.author.avatar ? (
                        <img src={blog.author.avatarUrl || blog.author.avatar} alt={blog.author.name} />
                      ) : (
                        <span>{blog.author.name.charAt(0)}</span>
                      )}
                    </div>
                    <span className="dash-author-name">{blog.author.name}</span>
                  </div>

                  <div className="dash-blog-stats">
                    <span className="dash-stat">
                      <Eye size={16} />
                      {blog.views || 0}
                    </span>
                    <span className="dash-stat">
                      💬 {blog.commentCount || 0}
                    </span>
                    <span className="dash-stat">
                      ❤️ {blog.likeCount || 0}
                    </span>
                  </div>
                </div>
              </div>

              <div className="dash-blog-actions">
                <button
                  className="dash-action-toggle"
                  onClick={() => setActiveDropdown(activeDropdown === blog._id ? null : blog._id)}
                >
                  <MoreVertical size={20} />
                </button>

                {activeDropdown === blog._id && (
                  <div className="dash-action-dropdown">
                    <Link 
                      to={`/blog/${blog.slug || blog._id}`}
                      className="dash-action-item"
                      target="_blank"
                    >
                      <Eye size={16} />
                      View
                    </Link>
                    {canEdit(blog) && (
                      <>
                        <Link 
                          to={`/admin/blogs/edit/${blog._id}`}
                          className="dash-action-item"
                        >
                          <Edit size={16} />
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className="dash-action-item dash-action-danger"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="dash-pagination">
          <button
            className="dash-page-btn"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="dash-page-info">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="dash-page-btn"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;