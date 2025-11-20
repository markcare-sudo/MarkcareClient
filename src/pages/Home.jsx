
import AboutUs from "@/components/AboutUs";
import Clients from "@/components/Clients";
import Banner from "@/components/LandingPageComponents/Banner";
import Hero from "@/components/LandingPageComponents/Hero";
import QualityServices from "@/components/LandingPageComponents/QualityServices";
import Videos from "@/components/LandingPageComponents/VideosSection";
import WhyUs from "@/components/LandingPageComponents/WhyUs";
import WorkShowcase from "@/components/LandingPageComponents/WorkShowcase";

import { CITIES, FEATURES, SERVICES } from "@/utils/data";

const installs = 5000;
const citiesCount = 15;

function classNames(...cls) {
  return cls.filter(Boolean).join(" ");
}

export default function MarkCareSite() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">

      {/* Banner (video background) */}
      <Banner />

      {/* Hero */}
      <Hero services={SERVICES} classNames={classNames} />

      {/* Services */}
      <QualityServices services={SERVICES} />

      {/* About */}
      <AboutUs features={FEATURES} cities={CITIES} />

      {/* Why Us */}
      <WhyUs installs={installs} citiesCount={citiesCount} />

      {/* Gallery / Media */}
      <WorkShowcase />

      {/* Video Section */}
      <Videos />

      {/* Clients strip */}
      <Clients />

    </div>
  );
}
