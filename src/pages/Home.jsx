import AboutUs from "@/components/AboutUs";
import Clients from "@/components/LandingPageComponents/Clients";
import Banner from "@/components/LandingPageComponents/Banner";
import QualityServices from "@/components/LandingPageComponents/QualityServices";
import WhyUs from "@/components/LandingPageComponents/WhyUs";
import WorkShowcase from "@/components/LandingPageComponents/WorkShowcase";
import WhoWeAre from "@/components/WhoWeAre";

import { CITIES } from "@/utils/data";
import SEO from "@/components/SEO";
import Testimonials from "@/components/LandingPageComponents/Testimonials";
import OurIndustriesCarousel from "@/components/LandingPageComponents/OurIndustries";

const installs = 5000;
const citiesCount = 15;

function classNames(...cls) {
  return cls.filter(Boolean).join(" ");
}

export default function MarkCareSite() {
  return (
    <>
      <SEO 
        title="MarkCare | RO, WTP, STP, ETP, Solar, AC & Facility Engineering Services"
        description="MarkCare provides Elevators, Lift, Residencial Elevators, Commercial Elevators, Hospital Lift, Dumpt Lift, Kitchen Lift,RO plants, Water Treatment Plants (WTP), Sewage Treatment Plants (STP), Effluent Treatment Plants (ETP), solar power systems, AC services, DG power backup, lifts & escalator AMC across India."
        keywords="MarkCare, Elevators, Lift, Residencial Elevators, Commercial Elevators, Hospital Lift, Dumpt Lift, Kitchen Lift, RO Plants, WTP Services, STP O&M, ETP Services, Solar Power Systems, AC AMC, DG Power Backup, Lift AMC, Facility Engineering Services India"
      />

      <div className="min-h-screen">
        <Banner />
        <WhoWeAre />
        <OurIndustriesCarousel />
        <QualityServices />
        <AboutUs cities={CITIES} />
        <WhyUs installs={installs} citiesCount={citiesCount} />
        <WorkShowcase />
        <Clients />
        <Testimonials />
      </div>
    </>
  );
}
