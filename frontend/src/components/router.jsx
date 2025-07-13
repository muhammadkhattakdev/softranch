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
import ServicesPage from "./pages/servicesPage/services";
import RealEstateServices from "./pages/realEstateServicePage/realEstateServicePage";
import EcommerceServices from "./pages/ecommerceServicesPage/ecommerceServicesPage";
import RestaurantServices from "./pages/restaurantServicesPage/restaurantServicesPage";
import HealthcareServices from "./pages/healthcareServicesPage/healthcareServicesPage";
import ProfessionalServices from "./pages/professionalServicesPage/professionalServicesPage";
import LiveWorkSamplesPage from "./pages/liveWorkSamplesPage/liveWorkSamplesPage";
import SavoriaRestaurant from "./pages/LiveWorkSampleWebsites/SavoriaRestaurantLandingPage/savoria";
import NebulaStudios from "./pages/LiveWorkSampleWebsites/nebulaStudiosLandingPage/nebula";
import EstateFlow from "./pages/LiveWorkSampleWebsites/estateFlowLandingPage/estate";
import CorporateLanding from "./pages/LiveWorkSampleWebsites/innovateTech/tech";
import PlantWebsite from "./pages/LiveWorkSampleWebsites/plansWebsite/plantWebsite";
import EcommerceDashboard from "./pages/LiveWorkSampleWebsites/CommerceFlowDashboard/commerceFlow";
import PhotographerPortfolio from "./pages/LiveWorkSampleWebsites/photographerWebsite/photographer";
import RestaurantDashboard from "./pages/LiveWorkSampleWebsites/restaurantDashboard/dashboard";

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
            <Route element={<LiveWorkSamplesPage />} path="live-work-samples" />
            <Route element={<ContactPage />} path="contact" />
            <Route element={<ServicesPage />} path="services" />
            <Route element={<BlogPage />} path="blog" />
            <Route element={<BlogDetailPage />} path="blog/:id" />
            <Route element={<AboutPage />} path="about" />
            <Route element={<TermsPage />} path="terms-and-conditions" />
            <Route element={<RealEstateServices />} path="real-estate-services" />
            <Route element={<EcommerceServices />} path="ecommerce-website-development-services" />
            <Route element={<RestaurantServices />} path="restaurant-website-development-services" />
            <Route element={<RestaurantServices />} path="restaurant-website-development-services" />
            <Route element={<HealthcareServices />} path="healthcare-website-development-services" />
            <Route element={<ProfessionalServices />} path="lawyer-accountant-consultant-website-development-services" />
          </Route>

          {/* LIVE WORK SAMPLE WEBSITES DEMOS  */}

          <Route path="live-work-samples">
            <Route element={<SavoriaRestaurant />} path="savoria-restaurant-website" />
            <Route element={<NebulaStudios />} path="nebula-studios-website" />
            <Route element={<EstateFlow />} path="estate-flow-website" />
            <Route element={<CorporateLanding />} path="innovate-tech-website" />
            <Route element={<PlantWebsite />} path="plants-website" />
            <Route element={<EcommerceDashboard />} path="commerce-flow-saas-website" />
            <Route element={<PhotographerPortfolio />} path="photography-portfolio-website" />
            <Route element={<RestaurantDashboard />} path="restaurant-management-saas-website" />
          </Route>



          {/* Admin Auth Routes (Public) */}
          <Route path="admin/login" element={<Login />} />
          <Route path="admin/create-account" element={<CreateAdminAccount />} />

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