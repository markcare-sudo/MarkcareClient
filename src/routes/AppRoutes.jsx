import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layouts/MainLayout";
import NotFound from "@/pages/NotFound";

import ProjectsSection from "@/pages/Projects";
import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/ContactUs";
import BlogsListPage from "@/pages/Blogs";
import PublicBlogs from "@/pages/PublicBlogs";
import BlogDetails from "@/pages/BlogDetails";

import ElevatorsPage from "@/pages/Elevators";
import SewageTreatmentPlant from "@/pages/SewageTreatmentPlant";
import WaterSofteningPlant from "@/pages/WaterSofteningPlant";
import ReverseOsmosisPlant from "@/pages/ReverseOsmosisPlant";
import DieselGenerator from "@/pages/DieselGenerator";
import ROWaterPurifiers from "@/pages/ROWaterPurifiers";
import Solar from "@/pages/Solar";
import AC from "@/pages/AC";
import Refrigerators from "@/pages/Refrigerators";
import UPS from "@/pages/UPS";
import ErrorBoundary from "@/components/ErrorBoundory";
import WaterTreatmentPlant from "@/pages/WaterTratementPlant";

// Lazy-loaded page
const Home = lazy(() => import("../pages/Home"));

const AppRoutes = () => {
  const location = useLocation();

  const ServiceRoutes = () => (
    <>
      <Route path="elevators" element={<ErrorBoundary><ElevatorsPage /></ErrorBoundary>} />
      <Route path="water-treatment-plant" element={<ErrorBoundary><WaterTreatmentPlant /></ErrorBoundary>} />
      <Route path="sewage-treatment-plant" element={<ErrorBoundary><SewageTreatmentPlant /></ErrorBoundary>} />
      <Route path="water-softening-plant" element={<ErrorBoundary><WaterSofteningPlant /></ErrorBoundary>} />
      <Route path="reverse-osmosis-plant" element={<ErrorBoundary><ReverseOsmosisPlant /></ErrorBoundary>} />
      <Route path="ro-water-purifiers" element={<ErrorBoundary><ROWaterPurifiers /></ErrorBoundary>} />
      <Route path="diesel-generators" element={<ErrorBoundary><DieselGenerator /></ErrorBoundary>} />
      <Route path="solar-power-systems" element={<ErrorBoundary><Solar /></ErrorBoundary>} />
      <Route path="ac-systems" element={<ErrorBoundary><AC /></ErrorBoundary>} />
      <Route path="refrigerators" element={<ErrorBoundary><Refrigerators /></ErrorBoundary>} />
      <Route path="ups-systems" element={<ErrorBoundary><UPS /></ErrorBoundary>} />
    </>
  );

  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>

          {/* Home */}
          <Route
            index
            element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            }
          />

          {/* Static Pages */}
          <Route path="projects" element={<ErrorBoundary><ProjectsSection /></ErrorBoundary>} />
          <Route path="about-us" element={<ErrorBoundary><AboutUs /></ErrorBoundary>} />
          <Route path="contact-us" element={<ErrorBoundary><Contact /></ErrorBoundary>} />

          {/* Blogs */}
          <Route path="admin-upload-blogs" element={<ErrorBoundary><BlogsListPage /></ErrorBoundary>} />
          <Route path="blogs" element={<ErrorBoundary><PublicBlogs /></ErrorBoundary>} />
          <Route path="blogs/:slug" element={<ErrorBoundary><BlogDetails /></ErrorBoundary>} />

          {/* Services (No City) */}
          <Route path="services">
            {ServiceRoutes()}
          </Route>

          {/* City Based Routing */}
          <Route path=":city">

            <Route
              index
              element={<ErrorBoundary><Home /></ErrorBoundary>}
            />

            <Route path="projects" element={<ErrorBoundary><ProjectsSection /></ErrorBoundary>} />
            <Route path="about-us" element={<ErrorBoundary><AboutUs /></ErrorBoundary>} />
            <Route path="contact-us" element={<ErrorBoundary><Contact /></ErrorBoundary>} />
            <Route path="blogs" element={<ErrorBoundary><PublicBlogs /></ErrorBoundary>} />
             <Route path="blogs/:slug" element={<ErrorBoundary><BlogDetails /></ErrorBoundary>} />

            <Route path="services">
              {ServiceRoutes()}
            </Route>

          </Route>

          {/* 404 */}
          <Route
            path="*"
            element={
              <ErrorBoundary>
                <NotFound />
              </ErrorBoundary>
            }
          />

        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
