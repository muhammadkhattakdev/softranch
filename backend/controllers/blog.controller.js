import Blog from '../models/Blog.model.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';
import APIFeatures from '../utils/apiFeatures.js';

// Get all blogs (with filtering, sorting, pagination)
export const getAllBlogs = catchAsync(async (req, res) => {
  // For public access, only show published blogs
  if (!req.user || req.user.role === 'author') {
    req.query.status = 'published';
  }
  
  // Execute query with features
  const features = new APIFeatures(Blog.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  
  const blogs = await features.query.populate('author', 'name email avatar bio jobTitle');
  
  // Get total count for pagination
  const totalCount = await Blog.countDocuments(features.query._conditions);
  
  res.status(200).json({
    status: 'success',
    results: blogs.length,
    totalCount,
    page: req.query.page * 1 || 1,
    limit: req.query.limit * 1 || 10,
    data: blogs
  });
});

// Get single blog by ID or slug
export const getBlog = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  
  // Check if id is a valid MongoDB ID or slug
  let blog;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    blog = await Blog.findById(id)
      .populate('author', 'name email avatar bio jobTitle socialLinks')
      .populate('relatedPosts', 'title slug excerpt featuredImage category readTime');
  } else {
    blog = await Blog.findOne({ slug: id })
      .populate('author', 'name email avatar bio jobTitle socialLinks')
      .populate('relatedPosts', 'title slug excerpt featuredImage category readTime');
  }
  
  if (!blog) {
    return next(new AppError('No blog found with that ID', 404));
  }
  
  // Check if user can view unpublished blogs
  if (blog.status !== 'published' && (!req.user || (req.user.role === 'author' && blog.author._id.toString() !== req.user.id))) {
    return next(new AppError('You do not have permission to view this blog', 403));
  }
  
  // Increment views for published blogs
  if (blog.status === 'published') {
    await blog.incrementViews();
  }
  
  res.status(200).json({
    status: 'success',
    data: blog
  });
});

// Create new blog
export const createBlog = catchAsync(async (req, res) => {
  // Set author to current user
  req.body.author = req.user.id;
  
  // Create blog
  const blog = await Blog.create(req.body);
  
  // Populate author details
  await blog.populate('author', 'name email avatar bio jobTitle');
  
  res.status(201).json({
    status: 'success',
    data: blog
  });
});

// Update blog
export const updateBlog = catchAsync(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);
  
  if (!blog) {
    return next(new AppError('No blog found with that ID', 404));
  }
  
  // Check permissions
  if (req.user.role === 'author' && blog.author.toString() !== req.user.id) {
    return next(new AppError('You do not have permission to update this blog', 403));
  }
  
  // Track edit history
  if (blog.content !== req.body.content || blog.title !== req.body.title) {
    await blog.addEditHistory(req.user.id, 'Content or title updated');
  }
  
  // Update blog
  Object.assign(blog, req.body);
  await blog.save();
  
  // Populate author details
  await blog.populate('author', 'name email avatar bio jobTitle');
  
  res.status(200).json({
    status: 'success',
    data: blog
  });
});

// Delete blog
export const deleteBlog = catchAsync(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);
  
  if (!blog) {
    return next(new AppError('No blog found with that ID', 404));
  }
  
  // Check permissions
  if (req.user.role === 'author' && blog.author.toString() !== req.user.id) {
    return next(new AppError('You do not have permission to delete this blog', 403));
  }
  
  await blog.remove();
  
  res.status(204).json({
    status: 'success',
    data: null
  });
});

// Like/Unlike blog
export const toggleLike = catchAsync(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);
  
  if (!blog) {
    return next(new AppError('No blog found with that ID', 404));
  }
  
  const isLiked = await blog.toggleLike(req.user.id);
  
  res.status(200).json({
    status: 'success',
    liked: isLiked,
    likeCount: blog.likeCount
  });
});

// Add comment to blog
export const addComment = catchAsync(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);
  
  if (!blog) {
    return next(new AppError('No blog found with that ID', 404));
  }
  
  if (!blog.isCommentEnabled) {
    return next(new AppError('Comments are disabled for this blog', 403));
  }
  
  const comment = await blog.addComment(req.user.id, req.body.content);
  
  // Populate user details for the new comment
  await blog.populate('comments.user', 'name avatar');
  
  res.status(201).json({
    status: 'success',
    data: blog.comments.id(comment._id)
  });
});

// Approve comment (admin/editor only)
export const approveComment = catchAsync(async (req, res, next) => {
  const blog = await Blog.findById(req.params.blogId);
  
  if (!blog) {
    return next(new AppError('No blog found with that ID', 404));
  }
  
  const comment = await blog.approveComment(req.params.commentId);
  
  if (!comment) {
    return next(new AppError('No comment found with that ID', 404));
  }
  
  res.status(200).json({
    status: 'success',
    data: comment
  });
});

// Get blogs by category
export const getBlogsByCategory = catchAsync(async (req, res) => {
  const blogs = await Blog.findByCategory(req.params.category)
    .populate('author', 'name avatar');
  
  res.status(200).json({
    status: 'success',
    results: blogs.length,
    data: blogs
  });
});

// Get blogs by tag
export const getBlogsByTag = catchAsync(async (req, res) => {
  const blogs = await Blog.findByTag(req.params.tag)
    .populate('author', 'name avatar');
  
  res.status(200).json({
    status: 'success',
    results: blogs.length,
    data: blogs
  });
});

// Get featured blogs
export const getFeaturedBlogs = catchAsync(async (req, res) => {
  const blogs = await Blog.findFeatured()
    .limit(6)
    .populate('author', 'name avatar');
  
  res.status(200).json({
    status: 'success',
    results: blogs.length,
    data: blogs
  });
});

// Search blogs
export const searchBlogs = catchAsync(async (req, res) => {
  const { q } = req.query;
  
  if (!q) {
    return res.status(200).json({
      status: 'success',
      results: 0,
      data: []
    });
  }
  
  const blogs = await Blog.searchBlogs(q)
    .populate('author', 'name avatar');
  
  res.status(200).json({
    status: 'success',
    results: blogs.length,
    data: blogs
  });
});

// Get related blogs
export const getRelatedBlogs = catchAsync(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);
  
  if (!blog) {
    return next(new AppError('No blog found with that ID', 404));
  }
  
  // Find related blogs based on category and tags
  const relatedBlogs = await Blog.find({
    _id: { $ne: blog._id },
    status: 'published',
    $or: [
      { category: blog.category },
      { tags: { $in: blog.tags } }
    ]
  })
    .limit(4)
    .sort('-publishedAt')
    .populate('author', 'name avatar');
  
  res.status(200).json({
    status: 'success',
    results: relatedBlogs.length,
    data: relatedBlogs
  });
});

// Get blog statistics (admin only)
export const getBlogStats = catchAsync(async (req, res) => {
  const stats = await Blog.aggregate([
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 },
        totalViews: { $sum: '$views' },
        avgReadTime: { $avg: '$readTime' }
      }
    }
  ]);
  
  const categoryStats = await Blog.aggregate([
    { $match: { status: 'published' } },
    {
      $group: {
        _id: '$category',
        count: { $sum: 1 }
      }
    }
  ]);
  
  res.status(200).json({
    status: 'success',
    data: {
      statusStats: stats,
      categoryStats
    }
  });
});