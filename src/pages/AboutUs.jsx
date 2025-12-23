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

import { AboutMarkCare } from "@/components/AboutComponents/AboutMarkCare";
import { VisionAndMission } from "@/components/AboutComponents/VisionAndMission";
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

      <section id="about" className="bg-white text-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-10">
          {/* Header / Hero */}
          <AboutMarkCare stats={stats} />

          <VisionAndMission />

          {/* Media + Case Studies CTA */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-xl font-semibold">Case studies & media</h3>
              <p className="mt-2 text-sm text-gray-600">
                See how we designed, delivered and maintained large-scale
                installations — from RO plants to STP/ETP and HVAC projects.
              </p>

              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>• Turnkey RO plant for industrial client — reduced TDS and operating cost.</li>
                <li>• STP retrofit for commercial complex — improved capacity & efficiency.</li>
                <li>• Solar microgrid with battery backup for manufacturing site.</li>
              </ul>

              <div className="mt-6">
                <a
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full border border-red-500 text-red-500 px-4 py-2 text-sm font-semibold"
                >
                  View Case Studies
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl border border-gray-100 p-4">
                <h4 className="text-sm font-semibold">
                  Project highlight — Lift modernization
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  Modernized 8 lifts, upgraded controllers, enhanced safety and
                  provided 24/7 AMC support.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 p-4">
                <h4 className="text-sm font-semibold">
                  Project highlight — ETP upgrade
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  Improved discharge quality and reduced operating costs by 18%.
                </p>
              </div>
            </div>
          </div>

          {/* Team + Contact CTA */}
          <CTA />
        </div>
      </section>
    </>
  );
}
