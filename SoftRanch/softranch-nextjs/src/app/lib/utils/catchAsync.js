const catchAsync = (fn) => {
    return async (req, res) => {
      try {
        await fn(req, res);
      } catch (error) {
        console.error('API Error:', error);
        
        let statusCode = error.statusCode || 500;
        let message = error.message || 'Internal Server Error';
        let status = error.status || 'error';
  
        // Handle specific MongoDB errors
        if (error.name === 'CastError') {
          statusCode = 400;
          message = `Invalid ${error.path}: ${error.value}`;
          status = 'fail';
        }
  
        if (error.code === 11000) {
          const value = Object.keys(error.keyValue)[0];
          statusCode = 400;
          message = `Duplicate field value: ${value}. Please use another value!`;
          status = 'fail';
        }
  
        if (error.name === 'ValidationError') {
          const errors = Object.values(error.errors).map(el => el.message);
          statusCode = 400;
          message = `Invalid input data. ${errors.join('. ')}`;
          status = 'fail';
        }
  
        if (error.name === 'JsonWebTokenError') {
          statusCode = 401;
          message = 'Invalid token. Please log in again!';
          status = 'fail';
        }
  
        if (error.name === 'TokenExpiredError') {
          statusCode = 401;
          message = 'Your token has expired! Please log in again.';
          status = 'fail';
        }
  
        // Send error response
        return res.status(statusCode).json({
          status,
          message,
          ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
        });
      }
    };
  };
  
  export default catchAsync;