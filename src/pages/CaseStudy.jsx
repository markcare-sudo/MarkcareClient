import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CaseStudyCard } from "@/components/CaseStudyComponents/CaseStudyCard";
import Header from "@/components/Header";
import { CASE_STUDIES } from "@/constants/caseStudies";

export default function CaseStudy() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [open, setOpen] = useState(false);

  const services = useMemo(() => {
    const uniq = new Map();
    CASE_STUDIES.forEach((s) => {
      if (!uniq.has(s.serviceKey)) {
        uniq.set(s.serviceKey, s.serviceLabel);
      }
    });
    return Array.from(uniq.entries()).map(([key, label]) => ({ key, label }));
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === "ALL") return CASE_STUDIES;
    return CASE_STUDIES.filter((s) => s.serviceKey === activeFilter);
  }, [activeFilter]);

  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>
          Case Studies | Proven HVAC, RO, STP, Solar & Facility Projects | MarkCare
        </title>

        <meta
          name="description"
          content="Explore real-world case studies showcasing how MarkCare delivers compliant, reliable and measurable outcomes across HVAC, RO plants, STP/ETP, solar power, lifts and facility engineering services."
        />

        <meta
          name="keywords"
          content="MarkCare Case Studies, HVAC Case Studies, RO Plant Projects, STP ETP Case Studies, Solar Power Installations, Facility Engineering Projects India"
        />

        <meta name="author" content="MarkCare" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="MarkCare Case Studies | Proven Engineering & Facility Outcomes"
        />
        <meta
          property="og:description"
          content="See how MarkCare delivers real results across HVAC, water treatment, solar and facility engineering projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://markcare.co.in/case-studies" />
        <meta
          property="og:image"
          content="https://markcare.co.in/og/markcare-case-studies.png"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MarkCare Case Studies | Engineering & Facility Excellence"
        />
        <meta
          name="twitter:description"
          content="Real case studies from HVAC, RO, STP, solar and facility projects delivered by MarkCare."
        />
        <meta
          name="twitter:image"
          content="https://markcare.co.in/og/markcare-case-studies.png"
        />
      </Helmet>
      {/* ================================================== */}

      <section id="case-studies" className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-red-600">
              Proven Delivery
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Case studies from the field
            </h2>

            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Real examples of how MarkCare delivers reliable, compliant and
              measurable outcomes across AC, water treatment, lifts, solar,
              power systems, and more.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter("ALL")}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                activeFilter === "ALL"
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100"
              }`}
            >
              All
            </button>

            {services.map((s) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setActiveFilter(s.key)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                  activeFilter === s.key
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
