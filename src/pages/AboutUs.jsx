import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Globe,
  Users,
  Shield,
  CheckCircle,
  Clock,
} from "lucide-react";

import AboutHero from "@/components/AboutComponents/AboutMarkCare";
import VisionAndMission from "@/components/AboutComponents/VisionAndMission";
import { CTA } from "@/components/AboutComponents/CTA";

export default function AboutUs() {
  const stats = [
    { label: "Cities served", value: "15", icon: Globe },
    { label: "Years of experience", value: "12+", icon: Clock },
    { label: "Service partners", value: "300+", icon: Users },
    { label: "Happy customers", value: "50k+", icon: CheckCircle },
  ];

  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>
          About MarkCare | Engineering, Water, Energy & Facility Services in India
        </title>

        <meta
          name="description"
          content="Learn about MarkCare — a trusted provider of RO plants, WTP, STP, ETP, solar power systems, HVAC, lifts & facility engineering services across India with 12+ years of experience."
        />

        <meta
          name="keywords"
          content="About MarkCare, MarkCare Engineering, RO Plant Company, Water Treatment Services India, STP ETP Experts, HVAC Services, Facility Management Company"
        />

        <meta name="author" content="MarkCare" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About MarkCare | Trusted Engineering & Facility Solutions"
        />
        <meta
          property="og:description"
          content="MarkCare delivers reliable RO, WTP, STP, ETP, solar, HVAC, lift & facility engineering services across India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://markcare.co.in/about" />
        <meta
          property="og:image"
          content="https://markcare.co.in/og/about-markcare.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About MarkCare | Engineering & Facility Experts"
        />
        <meta
          name="twitter:description"
          content="Discover MarkCare’s vision, mission, and expertise in water treatment, solar, HVAC & facility services."
        />
        <meta
          name="twitter:image"
          content="https://markcare.co.in/og/about-markcare.png"
        />
      </Helmet>
      {/* ================================================== */}

      <section id="about" className="bg-black text-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-10">
          {/* Header / Hero */}
          <AboutHero  />

          <VisionAndMission />

        </div>
      </section>
    </>
  );
}
