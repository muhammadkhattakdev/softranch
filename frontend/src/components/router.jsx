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
import RealEstateServices from "./pages/featuredServicesPages/realEstateServicePage/realEstateServicePage";
import EcommerceServices from "./pages/featuredServicesPages/ecommerceServicesPage/ecommerceServicesPage";
import RestaurantServices from "./pages/featuredServicesPages/restaurantServicesPage/restaurantServicesPage";
import HealthcareServices from "./pages/featuredServicesPages/healthcareServicesPage/healthcareServicesPage";
import ProfessionalServices from "./pages/featuredServicesPages/professionalServicesPage/professionalServicesPage";
import LiveWorkSamplesPage from "./pages/liveWorkSamplesPage/liveWorkSamplesPage";
import SavoriaRestaurant from "./pages/LiveWorkSampleWebsites/SavoriaRestaurantLandingPage/savoria";
import NebulaStudios from "./pages/LiveWorkSampleWebsites/nebulaStudiosLandingPage/nebula";
import EstateFlow from "./pages/LiveWorkSampleWebsites/estateFlowLandingPage/estate";
import CorporateLanding from "./pages/LiveWorkSampleWebsites/innovateTech/tech";
import PlantWebsite from "./pages/LiveWorkSampleWebsites/plansWebsite/plantWebsite";
import EcommerceDashboard from "./pages/LiveWorkSampleWebsites/CommerceFlowDashboard/commerceFlow";
import PhotographerPortfolio from "./pages/LiveWorkSampleWebsites/photographerWebsite/photographer";
import RestaurantDashboard from "./pages/LiveWorkSampleWebsites/restaurantDashboard/dashboard";
import SoftFoodDashboard from "./pages/LiveWorkSampleWebsites/softFoodDashboard/softFood";
import SoftCommerceDashboard from "./pages/LiveWorkSampleWebsites/softCommerce/softCommerce";
import MedicalDashboard from "./pages/LiveWorkSampleWebsites/medicalDashboard/dashboard";
import LawyerBookingPage from "./pages/LiveWorkSampleWebsites/lawyerBookingPage/booking";
import CarDealershipLanding from "./pages/LiveWorkSampleWebsites/softMotors/dealership";
import StaticBlog1 from "./pages/staticBlogs/blog1/blog";
import StaticBlog2 from "./pages/staticBlogs/blog2/blog";
import StaticBlog3 from "./pages/staticBlogs/blog3/blog";
import ConsultationBooking from "./pages/consultationBookingPage/booking";
import CarDealershipServices from "./pages/featuredServicesPages/carDealershipServicesPage/dealershipServicesPage";
import ConstructionServices from "./pages/featuredServicesPages/constructionServicesPage/construction";
import ConstructionLanding from "./pages/LiveWorkSampleWebsites/constructionsLandingPage/construction";
import ConstructionDashboard from "./pages/LiveWorkSampleWebsites/constructionDashboard/dashboard";
import EducationServices from "./pages/featuredServicesPages/educationSystemsServicesPage/educationService";
import EducationDashboard from "./pages/LiveWorkSampleWebsites/educationDashboard/dashboard";
import UniversityLanding from "./pages/LiveWorkSampleWebsites/universityLandingPage/landingPage";
import AIWebsitesServices from "./pages/featuredServicesPages/AI_WebsiteServices/aiWebsite";
import AIIntelligenceDashboard from "./pages/LiveWorkSampleWebsites/aiDashboard/dashboard";
import SoftRanchLanding from "./pages/LiveWorkSampleWebsites/aiPoweredWebsiteLandingPage/website";
import ContentWriterPortfolio from "./pages/LiveWorkSampleWebsites/brutalist/website";

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
            <Route
              element={<ConsultationBooking />}
              path="consultation-booking"
            />
            <Route element={<ServicesPage />} path="services" />
            {/* <Route element={<BlogPage />} path="blog" />
            <Route element={<BlogDetailPage />} path="blog/:id" /> */}
            <Route element={<AboutPage />} path="about" />
            <Route element={<TermsPage />} path="terms-and-conditions" />
            <Route
              element={<RealEstateServices />}
              path="real-estate-services"
            />
            <Route
              element={<EcommerceServices />}
              path="ecommerce-website-development-services"
            />
            <Route
              element={<RestaurantServices />}
              path="restaurant-website-development-services"
            />
            <Route
              element={<RestaurantServices />}
              path="restaurant-website-development-services"
            />
            <Route
              element={<HealthcareServices />}
              path="healthcare-website-development-services"
            />
            <Route
              element={<ProfessionalServices />}
              path="lawyer-accountant-consultant-website-development-services"
            />
            <Route
              element={<CarDealershipServices />}
              path="car-dealership-website-development-services"
            />
            <Route
              element={<ConstructionServices />}
              path="construction-website-development-services"
            />
            <Route
              element={<EducationServices />}
              path="education-systems-website-and-tools-development-services"
            />
            <Route
              element={<AIWebsitesServices />}
              path="ai-webistes-and-tools-development-services"
            />

            {/* STATIC BLOG PAGES  */}

            <Route path="blog">
              <Route
                element={<StaticBlog1 />}
                path="beautiful-website-transform-business-2025"
              />
              <Route
                element={<StaticBlog2 />}
                path="digital-marketing-real-estate-success"
              />
              <Route
                element={<StaticBlog3 />}
                path="ecommerce-conversion-optimization-case-"
              />
            </Route>
          </Route>

          {/* LIVE WORK SAMPLE WEBSITES DEMOS  */}

          <Route path="live-work-samples">
            <Route
              element={<SavoriaRestaurant />}
              path="savoria-restaurant-website"
            />
            <Route element={<NebulaStudios />} path="nebula-studios-website" />
            <Route element={<EstateFlow />} path="estate-flow-website" />
            <Route
              element={<CorporateLanding />}
              path="innovate-tech-website"
            />
            <Route element={<PlantWebsite />} path="plants-website" />
            <Route
              element={<EcommerceDashboard />}
              path="commerce-flow-saas-website"
            />
            <Route
              element={<PhotographerPortfolio />}
              path="photography-portfolio-website"
            />
            <Route
              element={<RestaurantDashboard />}
              path="restaurant-management-saas-website"
            />
            <Route
              element={<SoftFoodDashboard />}
              path="softfood-restaurant-management-saas-website"
            />
            <Route
              element={<SoftCommerceDashboard />}
              path="soft-commerce-saas-website"
            />
            <Route element={<MedicalDashboard />} path="medical-saas-website" />
            <Route
              element={<LawyerBookingPage />}
              path="lawyer-services-booking-website"
            />
            <Route
              element={<CarDealershipLanding />}
              path="car-dealership-website"
            />
            <Route
              element={<ConstructionLanding />}
              path="constructions-company-website"
            />
            <Route
              element={<ConstructionDashboard />}
              path="constructions-company-saas-management-tool-website"
            />
            <Route
              element={<EducationDashboard />}
              path="education-platform-saas-management-tool-website"
            />
            <Route
              element={<UniversityLanding />}
              path="university-landing-page-website"
            />
            <Route
              element={<AIIntelligenceDashboard />}
              path="ai-dashboard-tools-website"
            />
            <Route
              element={<SoftRanchLanding />}
              path="ai-powered-website-landing-page"
            />
            <Route
              element={<ContentWriterPortfolio />}
              path="content-writer-minimalist-portfolio-website"
            />
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
