import { Routes, Route, useLocation } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import ErrorBoundary from "../components/ErrorBoundory";
import NotFound from "@/pages/NotFound";
import ProjectsSection from "@/pages/Projects";
import AboutUs from "@/pages/AboutUs";
import Services from "@/pages/Services";
import Contact from "@/pages/ContactUs";
import LiftBrochure from "@/pages/LiftSection";
import CaseStudy from "@/pages/CaseStudy";
import ServiceDetailsPage from "@/pages/ServiceDetails";
import BlogsListPage from "@/pages/Blogs";
import PublicBlogs from "@/pages/PublicBlogs";
import BlogDetails from "@/pages/BlogDetails";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
// const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          }
        />

        <Route
          path="/projects"
          element={
            <ErrorBoundary>
              <ProjectsSection />
            </ErrorBoundary>
          }
        />


        <Route
          path="/about-us"
          element={
            <ErrorBoundary>
              <AboutUs />
            </ErrorBoundary>
          }
        />


        <Route
          path="/services"
          element={
            <ErrorBoundary>
              <Services />
            </ErrorBoundary>
          }
        />

        <Route
          path="/services/:slug"
          element={
            <ErrorBoundary>
              <ServiceDetailsPage />
            </ErrorBoundary>
          }
        />

        <Route
          path="/case-studies"
          element={
            <ErrorBoundary>
              <CaseStudy />
            </ErrorBoundary>
          }
        />

        <Route
          path="/contact-us"
          element={
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
          }
        />

        <Route
          path="/our-services/lift-service"
          element={
            <ErrorBoundary>
              <LiftBrochure />
            </ErrorBoundary>
          }
        />


        <Route
          path="*"
          element={
            <ErrorBoundary>
              <NotFound />
            </ErrorBoundary>
          }
        />

        <Route
          path="/admin-upload-blogs"
          element={
            <ErrorBoundary>
              <BlogsListPage />
            </ErrorBoundary>
          }
        />

        <Route
          path="/blogs"
          element={
            <ErrorBoundary>
              <PublicBlogs />
            </ErrorBoundary>
          }
        />

        <Route
          path="/blogs/:slug"
          element={
            <ErrorBoundary>
              <BlogDetails />
            </ErrorBoundary>
          }
        />


      </Route>
    </Routes>
  );
};

export default AppRoutes;


