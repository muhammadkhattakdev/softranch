import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';

// GET /api/health - Health check endpoint
export const GET = async () => {
  try {
    // Test database connection
    await connectDB();
    
    return NextResponse.json({
      status: 'success',
      message: 'Server is running',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development'
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: 'Database connection failed',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
};