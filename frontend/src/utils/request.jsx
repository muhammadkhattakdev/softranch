import axios from 'axios';

// Create axios instance
const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Important for cookies
});

// Token management
const tokenManager = {
  getAccessToken: () => localStorage.getItem(process.env.REACT_APP_TOKEN_KEY || 'softranch_access_token'),
  getRefreshToken: () => localStorage.getItem(process.env.REACT_APP_REFRESH_TOKEN_KEY || 'softranch_refresh_token'),
  setAccessToken: (token) => localStorage.setItem(process.env.REACT_APP_TOKEN_KEY || 'softranch_access_token', token),
  setRefreshToken: (token) => localStorage.setItem(process.env.REACT_APP_REFRESH_TOKEN_KEY || 'softranch_refresh_token', token),
  removeTokens: () => {
    localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY || 'softranch_access_token');
    localStorage.removeItem(process.env.REACT_APP_REFRESH_TOKEN_KEY || 'softranch_refresh_token');
    localStorage.removeItem(process.env.REACT_APP_USER_KEY || 'softranch_user');
  },
};

// Request interceptor
request.interceptors.request.use(
  (config) => {
    const token = tokenManager.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  
  failedQueue = [];
};

request.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return request(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = tokenManager.getRefreshToken();
        
        // Try to refresh using cookie-based refresh token
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/auth/refresh-token`,
          {},
          {
            withCredentials: true
          }
        );

        const { accessToken } = response.data;
        tokenManager.setAccessToken(accessToken);
        processQueue(null, accessToken);
        
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return request(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        tokenManager.removeTokens();
        
        // Redirect to login
        window.location.href = '/admin/login';
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

// API methods
const api = {
  // Auth endpoints
  auth: {
    login: (data) => request.post('/auth/login', data),
    register: (data) => request.post('/auth/register', data),
    logout: () => request.post('/auth/logout'),
    me: () => request.get('/auth/me'),
    updatePassword: (data) => request.patch('/auth/update-password', data),
    forgotPassword: (email) => request.post('/auth/forgot-password', { email }),
    resetPassword: (token, password) => request.patch(`/auth/reset-password/${token}`, { password }),
    verifyEmail: (token) => request.get(`/auth/verify-email/${token}`),
  },

  // Blog endpoints
  blogs: {
    getAll: (params) => request.get('/blogs', { params }),
    getOne: (id) => request.get(`/blogs/${id}`),
    create: (data) => request.post('/blogs', data),
    update: (id, data) => request.patch(`/blogs/${id}`, data),
    delete: (id) => request.delete(`/blogs/${id}`),
    like: (id) => request.post(`/blogs/${id}/like`),
    addComment: (id, content) => request.post(`/blogs/${id}/comments`, { content }),
    approveComment: (blogId, commentId) => request.patch(`/blogs/${blogId}/comments/${commentId}/approve`),
    getFeatured: () => request.get('/blogs/featured'),
    getByCategory: (category) => request.get(`/blogs/category/${category}`),
    getByTag: (tag) => request.get(`/blogs/tag/${tag}`),
    search: (query) => request.get('/blogs/search', { params: { q: query } }),
    getRelated: (id) => request.get(`/blogs/${id}/related`),
    getStats: () => request.get('/blogs/stats/overview'),
  },

  // User endpoints
  users: {
    getAll: (params) => request.get('/users', { params }),
    getOne: (id) => request.get(`/users/${id}`),
    getAuthors: () => request.get('/users/authors'),
    updateMe: (data) => request.patch('/users/me', data),
    deleteMe: () => request.delete('/users/me'),
    updateUser: (id, data) => request.patch(`/users/${id}`, data),
    deleteUser: (id) => request.delete(`/users/${id}`),
    activateUser: (id) => request.patch(`/users/${id}/activate`),
    deactivateUser: (id) => request.patch(`/users/${id}/deactivate`),
  },

  // Upload endpoints
  upload: {
    image: (file) => {
      const formData = new FormData();
      formData.append('image', file);
      return request.post('/upload/image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    },
    images: (files) => {
      const formData = new FormData();
      files.forEach(file => formData.append('images', file));
      return request.post('/upload/images', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    },
    avatar: (file) => {
      const formData = new FormData();
      formData.append('avatar', file);
      return request.post('/upload/avatar', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    },
    deleteImage: (filename) => request.delete(`/upload/image/${filename}`),
  },
};

// Export both the axios instance and the API methods
export { request, api, tokenManager };
export default api;