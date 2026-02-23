import React from "react";
import {
  Globe,
  Users,
  CheckCircle,
  Clock,
} from "lucide-react";

import SEO from "@/components/SEO"; // ✅ Import SEO component
import AboutHero from "@/components/AboutComponents/AboutMarkCare";
import VisionAndMission from "@/components/AboutComponents/VisionAndMission";

export default function AboutUs() {
  const stats = [
    { label: "Cities served", value: "15", icon: Globe },
    { label: "Years of experience", value: "12+", icon: Clock },
    { label: "Service partners", value: "300+", icon: Users },
    { label: "Happy customers", value: "50k+", icon: CheckCircle },
  ];

  return (
    <>
      {/* ✅ Clean SEO Usage */}
      <SEO
        title="About MarkCare | Engineering, Water, Energy & Facility Services in India"
        description="Learn about MarkCare — a trusted provider of RO plants, WTP, STP, ETP, solar power systems, HVAC, lifts & facility engineering services across India with 12+ years of experience."
      />

      <section id="about" className="text-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <AboutHero />
          <VisionAndMission />
        </div>
      </section>
    </>
  );
}