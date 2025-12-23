import AboutUs from "@/components/AboutUs";
import Clients from "@/components/Clients";
import Banner from "@/components/LandingPageComponents/Banner";
import Hero from "@/components/LandingPageComponents/Hero";
import QualityServices from "@/components/LandingPageComponents/QualityServices";
import Videos from "@/components/LandingPageComponents/VideosSection";
import WhyUs from "@/components/LandingPageComponents/WhyUs";
import WorkShowcase from "@/components/LandingPageComponents/WorkShowcase";

import { CITIES, FEATURES, SERVICES } from "@/utils/data";
import { Helmet } from "react-helmet-async";

const installs = 5000;
const citiesCount = 15;

function classNames(...cls) {
  return cls.filter(Boolean).join(" ");
}

export default function MarkCareSite() {
  return (
    <>
      <Helmet>
        <title>
          MarkCare | RO, WTP, STP, ETP, Solar, AC & Facility Engineering Services
        </title>

        <meta
          name="description"
          content="MarkCare provides RO plants, Water Treatment Plants (WTP), Sewage Treatment Plants (STP), Effluent Treatment Plants (ETP), solar power systems, AC services, DG power backup, lifts & escalator AMC across India."
        />

        <meta
          name="keywords"
          content="MarkCare, RO Plants, WTP Services, STP O&M, ETP Services, Solar Power Systems, AC AMC, DG Power Backup, Lift AMC, Facility Engineering Services India"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="MarkCare" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="MarkCare | Engineering, Water, Energy & Facility Solutions"
        />
        <meta
          property="og:description"
          content="Trusted experts in RO, WTP, STP, ETP, solar energy, HVAC, DG power, lifts & facility engineering services."
        />
        <meta property="og:url" content="https://markcare.co.in" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://markcare.co.in/og/markcare-services.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MarkCare | RO, WTP, STP, ETP & Facility Services"
        />
        <meta
          name="twitter:description"
          content="Professional RO plants, STP, ETP, solar, AC AMC, DG power & lift services across India."
        />
        <meta
          name="twitter:image"
          content="https://markcare.co.in/og/markcare-services.png"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
        <Banner />
        <Hero services={SERVICES} classNames={classNames} />
        <QualityServices services={SERVICES} />
        <AboutUs features={FEATURES} cities={CITIES} />
        <WhyUs installs={installs} citiesCount={citiesCount} />
        <WorkShowcase />
        <Videos />
        <Clients />
      </div>
    </>
  );
}
