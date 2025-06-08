import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Save, 
  Send, 
  Image as ImageIcon,
  X,
  Plus,
  Loader
} from 'lucide-react';
import api from '../../../../utils/request';
import RichTextEditor from '../../../common/RichTextEditor/editor';
import ImageUpload from '../../../common/imageUpload/imageUpload';
import '../blogCreate/style.css';

const BlogEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [loadingBlog, setLoadingBlog] = useState(true);
  const [errors, setErrors] = useState({});
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    category: 'general',
    tags: [],
    status: 'draft',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: []
  });

  const [tagInput, setTagInput] = useState('');
  const [keywordInput, setKeywordInput] = useState('');

  const categories = [
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'business', label: 'Business' },
    { value: 'technology', label: 'Technology' },
    { value: 'general', label: 'General' }
  ];

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoadingBlog(true);
      const response = await api.blogs.getOne(id);
      const blog = response.data.data || response.data;
      
      setFormData({
        title: blog.title || '',
        excerpt: blog.excerpt || '',
        content: blog.content || '',
        featuredImage: blog.featuredImageUrl || blog.featuredImage || '',
        category: blog.category || 'general',
        tags: blog.tags || [],
        status: blog.status || 'draft',
        metaTitle: blog.metaTitle || '',
        metaDescription: blog.metaDescription || '',
        metaKeywords: blog.metaKeywords || []
      });
    } catch (error) {
      console.error('Error fetching blog:', error);
      alert('Failed to load blog');
      navigate('/admin/blogs');
    } finally {
      setLoadingBlog(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleContentChange = (content) => {
    setFormData(prev => ({ ...prev, content }));
    if (errors.content) {
      setErrors(prev => ({ ...prev, content: '' }));
    }
  };

  const handleImageUpload = async (file) => {
    try {
      const response = await api.upload.image(file);
      const imageUrl = response.data.data.url || response.data.data.filename;
      setFormData(prev => ({ ...prev, featuredImage: imageUrl }));
      if (errors.featuredImage) {
        setErrors(prev => ({ ...prev, featuredImage: '' }));
      }
    } catch (error) {
      console.error('Image upload failed:', error);
      alert('Failed to upload image');
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim().toLowerCase()]
      }));
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const addKeyword = () => {
    if (keywordInput.trim() && !formData.metaKeywords.includes(keywordInput.trim())) {
      setFormData(prev => ({
        ...prev,
        metaKeywords: [...prev.metaKeywords, keywordInput.trim().toLowerCase()]
      }));
      setKeywordInput('');
    }
  };

  const removeKeyword = (keywordToRemove) => {
    setFormData(prev => ({
      ...prev,
      metaKeywords: prev.metaKeywords.filter(keyword => keyword !== keywordToRemove)
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.excerpt.trim()) {
      newErrors.excerpt = 'Excerpt is required';
    }
    if (!formData.content.trim() || formData.content.length < 100) {
      newErrors.content = 'Content must be at least 100 characters';
    }
    if (!formData.featuredImage) {
      newErrors.featuredImage = 'Featured image is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (status) => {
    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setLoading(true);
    try {
      const submitData = {
        ...formData,
        status: status || formData.status
      };
      
      await api.blogs.update(id, submitData);
      navigate('/admin/blogs');
    } catch (error) {
      console.error('Error updating blog:', error);
      alert(error.response?.data?.message || 'Failed to update blog');
    } finally {
      setLoading(false);
    }
  };

  if (loadingBlog) {
    return (
      <div className="dash-loading-container">
        <Loader size={40} className="dash-spinner" />
        <p>Loading blog...</p>
      </div>
    );
  }

  return (
    <div className="dash-blog-create">
      {/* Header */}
      <div className="dash-create-header">
        <div className="dash-create-header-left">
          <Link to="/admin/blogs" className="dash-back-link">
            <ArrowLeft size={20} />
            <span>Back to Blogs</span>
          </Link>
          <h1 className="dash-create-title">Edit Blog Post</h1>
        </div>
        
        <div className="dash-create-actions">
          <button
            onClick={() => handleSubmit(formData.status)}
            disabled={loading}
            className="dash-btn dash-btn-secondary"
          >
            <Save size={20} />
            <span>Save Changes</span>
          </button>
          <button
            onClick={() => handleSubmit('published')}
            disabled={loading}
            className="dash-btn dash-btn-primary"
          >
            {loading ? <Loader size={20} className="dash-spinner" /> : <Send size={20} />}
            <span>{loading ? 'Saving...' : 'Save & Publish'}</span>
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="dash-create-form">
        <div className="dash-form-main">
          {/* Title */}
          <div className="dash-form-field">
            <label className="dash-field-label">
              Title <span className="dash-required">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              className={`dash-field-input ${errors.title ? 'error' : ''}`}
            />
            {errors.title && <span className="dash-field-error">{errors.title}</span>}
          </div>

          {/* Excerpt */}
          <div className="dash-form-field">
            <label className="dash-field-label">
              Excerpt <span className="dash-required">*</span>
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Brief description of your blog post"
              rows={3}
              className={`dash-field-textarea ${errors.excerpt ? 'error' : ''}`}
              maxLength={500}
            />
            <div className="dash-field-help">
              {formData.excerpt.length}/500 characters
            </div>
            {errors.excerpt && <span className="dash-field-error">{errors.excerpt}</span>}
          </div>

          {/* Content */}
          <div className="dash-form-field">
            <label className="dash-field-label">
              Content <span className="dash-required">*</span>
            </label>
            <RichTextEditor
              value={formData.content}
              onChange={handleContentChange}
              placeholder="Write your blog content here..."
              error={errors.content}
            />
            {errors.content && <span className="dash-field-error">{errors.content}</span>}
          </div>

          {/* SEO Section */}
          <div className="dash-form-section">
            <h3 className="dash-section-title">SEO Settings</h3>
            
            <div className="dash-form-field">
              <label className="dash-field-label">Meta Title</label>
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleChange}
                placeholder="SEO title (defaults to blog title)"
                className="dash-field-input"
                maxLength={60}
              />
              <div className="dash-field-help">
                {formData.metaTitle.length}/60 characters
              </div>
            </div>

            <div className="dash-form-field">
              <label className="dash-field-label">Meta Description</label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
                placeholder="SEO description (defaults to excerpt)"
                rows={2}
                className="dash-field-textarea"
                maxLength={160}
              />
              <div className="dash-field-help">
                {formData.metaDescription.length}/160 characters
              </div>
            </div>

            <div className="dash-form-field">
              <label className="dash-field-label">Meta Keywords</label>
              <div className="dash-tag-input">
                <input
                  type="text"
                  value={keywordInput}
                  onChange={(e) => setKeywordInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
                  placeholder="Add keywords and press Enter"
                  className="dash-field-input"
                />
                <button type="button" onClick={addKeyword} className="dash-tag-add">
                  <Plus size={20} />
                </button>
              </div>
              <div className="dash-tags">
                {formData.metaKeywords.map((keyword, index) => (
                  <span key={index} className="dash-tag">
                    {keyword}
                    <button type="button" onClick={() => removeKeyword(keyword)}>
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="dash-form-sidebar">
          {/* Status */}
          <div className="dash-sidebar-section">
            <h3 className="dash-section-title">Status</h3>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="dash-field-select"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          {/* Featured Image */}
          <div className="dash-sidebar-section">
            <h3 className="dash-section-title">
              Featured Image <span className="dash-required">*</span>
            </h3>
            <ImageUpload
              value={formData.featuredImage}
              onChange={handleImageUpload}
              error={errors.featuredImage}
            />
            {errors.featuredImage && <span className="dash-field-error">{errors.featuredImage}</span>}
          </div>

          {/* Category */}
          <div className="dash-sidebar-section">
            <h3 className="dash-section-title">Category</h3>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="dash-field-select"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div className="dash-sidebar-section">
            <h3 className="dash-section-title">Tags</h3>
            <div className="dash-tag-input">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                placeholder="Add tags and press Enter"
                className="dash-field-input"
              />
              <button type="button" onClick={addTag} className="dash-tag-add">
                <Plus size={20} />
              </button>
            </div>
            <div className="dash-tags">
              {formData.tags.map((tag, index) => (
                <span key={index} className="dash-tag">
                  {tag}
                  <button type="button" onClick={() => removeTag(tag)}>
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEdit;