// src/sections/ServiceSection.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

import { SERVICES } from "@/constants/services";
import { ServiceHero } from "@/components/ServicesComponents/ServiceHero";
import { ServicesSection } from "@/components/ServicesComponents/ServicesSection";
import { DeepDive } from "@/components/ServicesComponents/DeepDive";
import { CTA } from "@/components/ServicesComponents/CTA";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Services() {
  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>
          Services | RO, WTP, STP, ETP, Solar, HVAC & Facility Engineering | MarkCare
        </title>

        <meta
          name="description"
          content="Explore MarkCare’s professional services including RO plants, WTP, STP, ETP, solar power systems, HVAC & AC services, lift AMC, chemical washing and complete facility engineering solutions across India."
        />

        <meta
          name="keywords"
          content="MarkCare Services, RO Plant Services, WTP Services, STP ETP Services, Solar Power Systems India, HVAC Services, Facility Engineering Company"
        />

        <meta name="author" content="MarkCare" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="MarkCare Services | Engineering, Water, Energy & Facility Solutions"
        />
        <meta
          property="og:description"
          content="RO, WTP, STP, ETP, solar, HVAC, lift & facility engineering services delivered by MarkCare across India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://markcare.co.in/services" />
        <meta
          property="og:image"
          content="https://markcare.co.in/og/markcare-services.png"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MarkCare Services | RO, STP, ETP & Facility Engineering"
        />
        <meta
          name="twitter:description"
          content="Discover MarkCare’s full range of water treatment, solar, HVAC & facility services."
        />
        <meta
          name="twitter:image"
          content="https://markcare.co.in/og/markcare-services.png"
        />
      </Helmet>
      {/* ================================================= */}

      <section
        id="services"
        className="relative min-h-screen bg-slate-50 text-slate-900"
      >
        {/* subtle background gradient / texture */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#FFF5F4] via-slate-50 to-[#F3F7FF]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(229,57,53,0.08),_transparent_55%)]" />

        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10">
          {/* Heading */}
          <ServiceHero />

          {/* Services grid */}
          <ServicesSection
            services={SERVICES}
            cardVariants={cardVariants}
          />

          {/* Deep-dive panels */}
          <DeepDive />

          {/* CTA footer */}
          <CTA />
        </div>
      </section>
    </>
  );
}
