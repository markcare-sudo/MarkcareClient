// src/pages/ServiceDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { getServiceBySlug } from "@/constants/services";

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <p className="text-sm font-semibold text-[#E53935]">404</p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">
            Service not found
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            We couldn&apos;t find details for this service. It may have been
            moved or renamed.
          </p>
          <Link
            to="/services"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#E53935] px-4 py-2 text-sm font-semibold text-white hover:bg-[#c92f2b]"
          >
            ← Back to all services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <header className="backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link
            to="/services"
            className="inline-flex items-center text-xs font-semibold text-[#E53935] hover:text-[#b82a28]"
          >
            <span className="mr-1">←</span>
            Back to all services
          </Link>

          {service.category && (
            <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 sm:inline-flex">
              {service.category}
            </span>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pt-8 ">
        {/* HERO SECTION */}
        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            {service.badge && (
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FFE7E6] px-3 py-1 text-xs font-semibold tracking-wide text-[#E53935]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E53935]" />
                {service.badge}
              </span>
            )}

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {service.name}
            </h1>

            {service.shortDescription && (
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                {service.shortDescription}
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              {service.category && (
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {service.category}
                </span>
              )}
              {service.idealFor && service.idealFor.length > 0 && (
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  Ideal for {service.idealFor.length}+ use cases
                </span>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to={`/contact-us?service=${service.slug}`}
                className="inline-flex items-center rounded-full bg-[#E53935] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#E53935]/30 hover:bg-[#c92f2b]"
              >
                Request a quote
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          {service.heroImage && (
            <div className="order-first md:order-last">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src={service.heroImage}
                  alt={service.name}
                  className="h-full w-full max-h-[320px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </section>

        {/* OVERVIEW */}
        {service.overview && (
          <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900">Overview</h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
              {service.overview}
            </p>
          </section>
        )}

        {/* IDEAL FOR + KEY FEATURES */}
        {(service.idealFor || service.keyFeatures) && (
          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            {service.idealFor && (
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-7">
                <h3 className="text-base font-semibold text-slate-900">
                  Ideal For
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {service.idealFor.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.keyFeatures && (
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-7">
                <h3 className="text-base font-semibold text-slate-900">
                  Key Features
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {service.keyFeatures.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* TECHNICAL HIGHLIGHTS + PROCESS STEPS */}
        {(service.technicalHighlights || service.processSteps) && (
          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            {service.technicalHighlights && (
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-7">
                <h3 className="text-base font-semibold text-slate-900">
                  Technical Highlights
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {service.technicalHighlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.processSteps && (
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-7">
                <h3 className="text-base font-semibold text-slate-900">
                  How We Work – Process
                </h3>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
                  {service.processSteps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
          </section>
        )}

        {/* DELIVERABLES */}
        {service.deliverables && (
          <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-base font-semibold text-slate-900">
              What You Receive (Deliverables)
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {service.deliverables.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQS */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="mt-10">
            <h3 className="text-base font-semibold text-slate-900">
              Frequently Asked Questions
            </h3>
            <div className="mt-4 space-y-3">
              {service.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm"
                >
                  <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                    {faq.q}
                  </summary>
                  <p className="mt-2 text-sm text-slate-700">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* BOTTOM CTA */}
        <section className="mt-12 rounded-2xl bg-gradient-to-r from-[#E53935] to-[#FF7043] p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                Ready to explore {service.name} for your property?
              </h3>
              <p className="mt-1 text-sm text-white/90">
                Share your site details and requirements. Our team will respond
                with a clear scope, timelines, and commercial proposal.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to={`/contact-us?service=${service.slug}`}
                className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#E53935] shadow-md hover:bg-slate-100"
              >
                Request Proposal
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-white/70 px-4 py-2 text-sm font-semibold text-white/95 hover:bg-white/10"
              >
                View other services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
