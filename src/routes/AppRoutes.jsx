import { Routes, Route, useLocation } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import ErrorBoundary from "../components/ErrorBoundory";
import NotFound from "@/pages/NotFound";
import ProjectsSection from "@/pages/Projects";
import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/ContactUs";
import BlogsListPage from "@/pages/Blogs";
import PublicBlogs from "@/pages/PublicBlogs";
import BlogDetails from "@/pages/BlogDetails";
import ElevatorsPage from "@/pages/Elevators";
import WaterTreatmentPage from "@/pages/WaterTratementPlant";
import SewageTreatmentPlant from "@/pages/SewageTreatmentPlant";
import WaterSofteningPlant from "@/pages/WaterSofteningPlant";
import ReverseOsmosisPlant from "@/pages/ReverseOsmosisPlant";
import DieselGenerator from "@/pages/DieselGenerator";
import ROWaterPurifiers from "@/pages/ROWaterPurifiers";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));

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

<Route path="services">
  <Route
    path="elevators"
    element={<ErrorBoundary><ElevatorsPage /></ErrorBoundary>}
  />
  <Route
    path="water-treatment-plant"
    element={<ErrorBoundary><WaterTreatmentPage /></ErrorBoundary>}
  />
  <Route
    path="sewage-treatment-plant"
    element={<ErrorBoundary><SewageTreatmentPlant /></ErrorBoundary>}
  />
  <Route
    path="ro-water-purifiers"
    element={<ErrorBoundary><ROWaterPurifiers /></ErrorBoundary>}
  />
  <Route
    path="water-softening-plant"
    element={<ErrorBoundary><WaterSofteningPlant /></ErrorBoundary>}
  />
  <Route
    path="reverse-osmosis-plant"
    element={<ErrorBoundary><ReverseOsmosisPlant /></ErrorBoundary>}
  />
  <Route
    path="diesel-generators"
    element={<ErrorBoundary><DieselGenerator /></ErrorBoundary>}
  />
</Route>

<Route path=":city/services">
  <Route
    path="elevators"
    element={<ErrorBoundary><ElevatorsPage /></ErrorBoundary>}
  />
  <Route
    path="water-treatment-plant"
    element={<ErrorBoundary><WaterTreatmentPage /></ErrorBoundary>}
  />
  <Route
    path="sewage-treatment-plant"
    element={<ErrorBoundary><SewageTreatmentPlant /></ErrorBoundary>}
  />
  <Route
    path="ro-water-purifiers"
    element={<ErrorBoundary><ROWaterPurifiers /></ErrorBoundary>}
  />
  <Route
    path="water-softening-plant"
    element={<ErrorBoundary><WaterSofteningPlant /></ErrorBoundary>}
  />
  <Route
    path="reverse-osmosis-plant"
    element={<ErrorBoundary><ReverseOsmosisPlant /></ErrorBoundary>}
  />
  <Route
    path="diesel-generators"
    element={<ErrorBoundary><DieselGenerator /></ErrorBoundary>}
  />
</Route>

 
        <Route
          path="/contact-us"
          element={
            <ErrorBoundary>
              <Contact />
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
  );
};

export default AppRoutes;


