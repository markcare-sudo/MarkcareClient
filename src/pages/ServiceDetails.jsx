import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { getServiceBySlug } from "@/constants/services";
import { motion, AnimatePresence } from "framer-motion";

/* -------------------------------- HERO -------------------------------- */

function ServiceHero({ service }) {
  const images = service.images || [service.heroImage];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      3000
    );
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center">
      {/* LEFT */}
      <div>
        {service.badge && (
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFE7E6] px-3 py-1 text-xs font-semibold text-[#E53935]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E53935]" />
            {service.badge}
          </span>
        )}

        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {service.name}
        </h1>

        {service.shortDescription && (
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {service.shortDescription}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to={`/contact-us?service=${service.slug}`}
            className="rounded-full bg-[#E53935] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#c92f2b]"
          >
            Request a quote
          </Link>
          <Link
            to="/contact-us"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold"
          >
            Talk to our team
          </Link>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative h-[400px] overflow-hidden rounded border bg-slate-100">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index].url}
            src={images[index].url}
            alt={service.name}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
}

/* --------------------------- REUSABLE SECTIONS -------------------------- */

const SECTION_CONFIG = [
  { key: "idealFor", title: "Ideal For", type: "ul" },
  { key: "keyFeatures", title: "Key Features", type: "ul" },
  { key: "technicalHighlights", title: "Technical Highlights", type: "ul" },
  { key: "processSteps", title: "How We Work – Process", type: "ol" },
  { key: "deliverables", title: "What You Receive (Deliverables)", type: "ul" },
];

function InfoSection({ title, items, type = "ul" }) {
  if (!items || items.length === 0) return null;

  const List = type === "ol" ? "ol" : "ul";

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-base font-semibold">{title}</h3>
      <List
        className={`mt-3 space-y-2 pl-5 text-sm text-slate-700 ${
          type === "ol" ? "list-decimal" : "list-disc"
        }`}
      >
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </List>
    </section>
  );
}

/* ------------------------------ PAGE ----------------------------------- */

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Service not found</p>
      </div>
    );
  }

  const seoTitle = `${service.name} Services | MarkCare`;
  const seoDescription =
    service.shortDescription ||
    `Professional ${service.name} services by MarkCare across India.`;

  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>{seoTitle}</title>

        <meta name="description" content={seoDescription} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://markcare.co.in/services/${service.slug}`}
        />
        <meta
          property="og:image"
          content={service.heroImage?.url || "https://markcare.co.in/og/services.png"}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
      </Helmet>
      {/* ================================================== */}

      <div className="min-h-screen bg-slate-50 pb-16">
        <main className="mx-auto max-w-7xl px-4 pt-8 space-y-10">
          <ServiceHero service={service} />

          {service.overview && (
            <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-semibold">Overview</h2>
              <p className="mt-3 text-sm sm:text-base text-slate-700">
                {service.overview}
              </p>
            </section>
          )}

          {/* LOOPED SECTIONS */}
          <section className="grid gap-6 lg:grid-cols-2">
            {SECTION_CONFIG.map(
              (cfg) =>
                service[cfg.key] && (
                  <InfoSection
                    key={cfg.key}
                    title={cfg.title}
                    items={service[cfg.key]}
                    type={cfg.type}
                  />
                )
            )}
          </section>

          {/* FAQ */}
          {service.faqs?.length > 0 && (
            <section>
              <h3 className="text-base font-semibold">
                Frequently Asked Questions
              </h3>
              <div className="mt-4 space-y-3">
                {service.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="rounded-2xl border bg-white p-4 shadow-sm"
                  >
                    <summary className="cursor-pointer font-semibold">
                      {faq.q}
                    </summary>
                    <p className="mt-2 text-sm text-slate-700">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="rounded-2xl bg-gradient-to-r from-[#E53935] to-[#FF7043] p-6 text-white shadow-lg sm:p-8">
            <h3 className="text-lg font-semibold">
              Ready to explore {service.name}?
            </h3>
            <p className="mt-1 text-sm text-white/90">
              Get a clear scope, timeline and proposal from our team.
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                to={`/contact-us?service=${service.slug}`}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#E53935]"
              >
                Request Proposal
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-white/70 px-4 py-2 text-sm font-semibold"
              >
                View other services
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
