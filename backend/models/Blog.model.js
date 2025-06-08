import mongoose from 'mongoose';
import slugify from 'slugify';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Blog title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    index: true
  },
  excerpt: {
    type: String,
    required: [true, 'Blog excerpt is required'],
    maxlength: [500, 'Excerpt cannot exceed 500 characters']
  },
  content: {
    type: String,
    required: [true, 'Blog content is required']
  },
  featuredImage: {
    type: String,
    required: [true, 'Featured image is required']
  },
  images: [{
    url: String,
    caption: String,
    alt: String
  }],
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['development', 'design', 'business', 'technology', 'general'],
    lowercase: true
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Blog must have an author']
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  publishedAt: {
    type: Date,
    default: null
  },
  readTime: {
    type: Number, // in minutes
    default: 1
  },
  views: {
    type: Number,
    default: 0
  },
  likes: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }],
  metaTitle: {
    type: String,
    maxlength: [60, 'Meta title cannot exceed 60 characters']
  },
  metaDescription: {
    type: String,
    maxlength: [160, 'Meta description cannot exceed 160 characters']
  },
  metaKeywords: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  relatedPosts: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Blog'
  }],
  comments: [{
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true,
      maxlength: [1000, 'Comment cannot exceed 1000 characters']
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    isApproved: {
      type: Boolean,
      default: false
    }
  }],
  isCommentEnabled: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  editHistory: [{
    editedBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    editedAt: {
      type: Date,
      default: Date.now
    },
    changes: {
      type: String
    }
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes
blogSchema.index({ slug: 1 });
blogSchema.index({ status: 1, publishedAt: -1 });
blogSchema.index({ category: 1 });
blogSchema.index({ tags: 1 });
blogSchema.index({ author: 1 });
blogSchema.index({ title: 'text', content: 'text', excerpt: 'text' });

// Virtual for full URL of featured image
blogSchema.virtual('featuredImageUrl').get(function() {
  if (this.featuredImage && this.featuredImage.startsWith('http')) {
    return this.featuredImage;
  }
  return this.featuredImage ? `${process.env.SERVER_URL}/uploads/${this.featuredImage}` : null;
});

// Virtual for like count
blogSchema.virtual('likeCount').get(function() {
  return this.likes ? this.likes.length : 0;
});

// Virtual for approved comment count
blogSchema.virtual('commentCount').get(function() {
  return this.comments ? this.comments.filter(comment => comment.isApproved).length : 0;
});

// Pre-save middleware
blogSchema.pre('save', async function(next) {
  // Generate slug from title
  if (!this.slug || this.isModified('title')) {
    this.slug = await this.generateUniqueSlug();
  }
  
  // Calculate read time based on content
  if (this.isModified('content')) {
    const wordsPerMinute = 200;
    const wordCount = this.content.split(/\s+/).length;
    this.readTime = Math.ceil(wordCount / wordsPerMinute);
  }
  
  // Set publishedAt when status changes to published
  if (this.isModified('status') && this.status === 'published' && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  
  // Auto-generate meta description from excerpt if not provided
  if (!this.metaDescription && this.excerpt) {
    this.metaDescription = this.excerpt.substring(0, 160);
  }
  
  // Auto-generate meta title from title if not provided
  if (!this.metaTitle && this.title) {
    this.metaTitle = this.title.substring(0, 60);
  }
  
  next();
});

// Instance methods
blogSchema.methods.generateUniqueSlug = async function() {
  let slug = slugify(this.title, { lower: true, strict: true });
  let suffix = 0;
  
  // Check if slug exists
  while (await this.constructor.findOne({ slug: suffix ? `${slug}-${suffix}` : slug })) {
    suffix++;
  }
  
  return suffix ? `${slug}-${suffix}` : slug;
};

blogSchema.methods.incrementViews = async function() {
  this.views += 1;
  await this.save();
};

blogSchema.methods.toggleLike = async function(userId) {
  const index = this.likes.indexOf(userId);
  
  if (index > -1) {
    this.likes.splice(index, 1);
  } else {
    this.likes.push(userId);
  }
  
  await this.save();
  return index === -1; // returns true if liked, false if unliked
};

blogSchema.methods.addComment = async function(userId, content) {
  this.comments.push({
    user: userId,
    content: content,
    isApproved: false // Comments need approval by default
  });
  
  await this.save();
  return this.comments[this.comments.length - 1];
};

blogSchema.methods.approveComment = async function(commentId) {
  const comment = this.comments.id(commentId);
  if (comment) {
    comment.isApproved = true;
    await this.save();
  }
  return comment;
};

blogSchema.methods.addEditHistory = async function(userId, changes) {
  this.editHistory.push({
    editedBy: userId,
    changes: changes
  });
  await this.save();
};

// Static methods
blogSchema.statics.findPublished = function() {
  return this.find({ status: 'published' }).sort('-publishedAt');
};

blogSchema.statics.findByCategory = function(category) {
  return this.find({ category: category, status: 'published' }).sort('-publishedAt');
};

blogSchema.statics.findByTag = function(tag) {
  return this.find({ tags: tag, status: 'published' }).sort('-publishedAt');
};

blogSchema.statics.findFeatured = function() {
  return this.find({ isFeatured: true, status: 'published' }).sort('-publishedAt');
};

blogSchema.statics.searchBlogs = function(searchTerm) {
  return this.find(
    { 
      $text: { $search: searchTerm },
      status: 'published'
    },
    { score: { $meta: 'textScore' } }
  ).sort({ score: { $meta: 'textScore' } });
};

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;