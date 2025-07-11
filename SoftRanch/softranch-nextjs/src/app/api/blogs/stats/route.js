import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import Blog from '@/lib/models/Blog';
import catchAsync from '@/lib/utils/catchAsync';
import { protect, restrictTo } from '@/lib/middleware/auth';

// GET /api/blogs/stats - Get blog statistics (admin only)
export const GET = catchAsync(async (req) => {
  await connectDB();
  
  // Protect route and restrict to admin
  const user = await protect(req);
  restrictTo('admin')(user);
  
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
  
  return NextResponse.json({
    status: 'success',
    data: {
      statusStats: stats,
      categoryStats
    }
  }, { status: 200 });
});