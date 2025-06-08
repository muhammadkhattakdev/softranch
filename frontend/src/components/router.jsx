import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/authContext";
import { PERMISSIONS } from "../context/authContext";

import HomeLayout from "./layouts/homeLayout";
import AdminDashboardLayout from "./layouts/adminDashboardLayout/adminDashboardLayout";

// Public Pages
import Homepage from "./pages/homepage/homepage";
import PortfolioPage from "./pages/portfolioPage/portfolioPage";
import ContactPage from "./pages/contactPage/contactPage";
import BlogPage from "./pages/blogPage/blogPage";
import BlogDetailPage from "./pages/blogDetails/blogDetails";
import AboutPage from "./pages/aboutPage/aboutPage";
import TermsPage from "./pages/terms/terms";
import NotFoundPage from "./pages/404/404";

import Login from "./pages/adminDashboardPages/loginPage/login";
import CreateAdminAccount from "./pages/adminDashboardPages/createAdminPage/createAdmin";

// Admin Dashboard Pages
import DashboardHome from "./pages/adminDashboardPages/dashboardHome/dashboardHome";
import BlogList from "./pages/adminDashboardPages/blogs/blogs";
import BlogCreate from "./pages/adminDashboardPages/blogCreate/blogCreate";
import BlogEdit from "./pages/adminDashboardPages/blogEdit/blogEdit";
import TeamList from "./pages/adminDashboardPages/teamList/teamList";
import TeamCreate from "./pages/adminDashboardPages/teamCreate/teamCreate";
import TeamEdit from "./pages/adminDashboardPages/teamEdit/teamEdit";

// Components
import ProtectedRoute from "./auth/protectedRoute";
import ScrollToTop from "./pageLoader/scrollToTop";
import EnhancedRouteTransition from "./pageLoader/routerTransition";

export default function Router() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <EnhancedRouteTransition>
        <Routes>
          {/* Public Routes */}
          <Route element={<HomeLayout />} path="/">
            <Route element={<Homepage />} index />
            <Route element={<PortfolioPage />} path="portfolio" />
            <Route element={<ContactPage />} path="contact" />
            <Route element={<BlogPage />} path="blog" />
            <Route element={<BlogDetailPage />} path="blog/:id" />
            <Route element={<AboutPage />} path="about" />
            <Route element={<TermsPage />} path="terms-and-conditions" />
          </Route>

          {/* Admin Auth Routes (Public) */}
          <Route path="login" element={<Login />} />
          <Route path="create-account" element={<CreateAdminAccount />} />

          {/* Admin Dashboard Routes (Protected) */}
          <Route 
            path="admin" 
            element={
              <ProtectedRoute>
                <AdminDashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="dashboard" element={<DashboardHome />} />
            
            {/* Blog Management */}
            <Route 
              path="blogs" 
              element={
                <ProtectedRoute requiredPermissions={[PERMISSIONS.BLOGS]}>
                  <BlogList />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="blogs/create" 
              element={
                <ProtectedRoute requiredPermissions={[PERMISSIONS.BLOGS]}>
                  <BlogCreate />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="blogs/edit/:id" 
              element={
                <ProtectedRoute requiredPermissions={[PERMISSIONS.BLOGS]}>
                  <BlogEdit />
                </ProtectedRoute>
              } 
            />
            
            {/* Team Management */}
            <Route 
              path="team" 
              element={
                <ProtectedRoute requiredPermissions={[PERMISSIONS.MANAGE_TEAM]}>
                  <TeamList />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="team/create" 
              element={
                <ProtectedRoute requiredPermissions={[PERMISSIONS.MANAGE_TEAM]}>
                  <TeamCreate />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="team/edit/:id" 
              element={
                <ProtectedRoute requiredPermissions={[PERMISSIONS.MANAGE_TEAM]}>
                  <TeamEdit />
                </ProtectedRoute>
              } 
            />
          </Route>

          {/* 404 Page - Must be last */}
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
      </EnhancedRouteTransition>
    </AuthProvider>
  );
}