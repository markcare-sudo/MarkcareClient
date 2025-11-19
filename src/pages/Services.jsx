// src/sections/ServiceSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/constants/services';


const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: 'easeOut' },
  }),
};

export default function Services() {

  return (
    <section
      id="services"
      className="relative min-h-screen bg-slate-50 text-slate-900"
    >
      {/* subtle background gradient / texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#FFF5F4] via-slate-50 to-[#F3F7FF]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(229,57,53,0.08),_transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFE7E6] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#E53935] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E53935]" />
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive technical services trusted, certified &amp; compliant
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            From small residential fixes to large industrial turnkey projects,
            we deliver predictable outcomes with clear accountability, safety,
            and documentation at every stage.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, index) => (
            <motion.article
              key={s.key}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="group relative flex h-full flex-col rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1.5 hover:border-[#E53935]/60 hover:shadow-xl"
            >
              {/* Accent gradient border on hover */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#E53935] via-[#FF7043] to-[#E53935] opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Icon / badge row */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0EE] text-[#E53935] shadow-sm">
                  <Shield className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                    {s.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-slate-500">
                    {s.category}
                  </p>
                  {s.badge && (
                    <p className="mt-1 inline-flex rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 ring-1 ring-slate-100">
                      {s.badge}
                    </p>
                  )}
                </div>
              </div>

              {/* Short description */}
              <p className="mt-4 flex-1 text-sm text-slate-600">
                {s.shortDescription}
              </p>

              {/* Card footer / CTA pinned to bottom */}
              <div className="mt-5 flex items-center justify-between">
                <Link
                  to={`/services/${s.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-[#E53935] transition-colors hover:text-[#b82a28]"
                >
                  View service details
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Deep-dive panels */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#FFE7E6]" />
            <div className="relative">
              <h3 className="text-lg font-semibold text-slate-900">
                Our Process
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                A structured, transparent workflow from first call to final
                handover.
              </p>

              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-slate-700">
                <li>
                  <strong>Site survey &amp; diagnostics:</strong> Detailed
                  assessment with photos, baseline readings and risk checks.
                </li>
                <li>
                  <strong>Design &amp; proposal:</strong> Clear scope, BOQ,
                  drawings, timeline and commercial terms.
                </li>
                <li>
                  <strong>Execution &amp; commissioning:</strong> Certified
                  technicians, safety supervision and performance validation.
                </li>
                <li>
                  <strong>Handover &amp; training:</strong> Operation manuals,
                  staff training and digital documentation.
                </li>
                <li>
                  <strong>Ongoing support:</strong> AMC, remote monitoring,
                  spares and SLA-backed service.
                </li>
              </ol>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E53935] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#E53935]/30 transition hover:bg-[#c92f2b]"
                >
                  Request a site survey
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              Safety, Warranties &amp; Quality
            </h3>
            <p className="mt-3 text-sm text-slate-700">
              We follow strict safety protocols, use OEM-approved spares and
              provide written warranties for installations as per manufacturer
              terms. For chemical and large-scale projects, our teams adhere to
              hazardous-material handling and disposal regulations.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-slate-100 bg-slate-50/80 p-3 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#E53935]" />
                  <strong className="text-slate-900">
                    Insurance-backed work
                  </strong>
                </div>
                <div className="mt-2 text-xs text-slate-600">
                  Liability coverage for on-site work and workforce safety.
                </div>
              </div>

              <div className="rounded-lg border border-slate-100 bg-slate-50/80 p-3 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#E53935]" />
                  <strong className="text-slate-900">Guaranteed SLAs</strong>
                </div>
                <div className="mt-2 text-xs text-slate-600">
                  Defined response and resolution times for AMC clients.
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-900">
                Typical project budgets
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                Budgets vary by scope; indicative ranges:
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
                <li>Residential AC servicing: ₹500 – ₹2,500 (per service)</li>
                <li>Rooftop solar (3–10 kW): ₹1.5L – ₹6L</li>
                <li>Small RO system (5–20 m³/day): ₹1L – ₹5L</li>
                <li>STP/ETP (per MLD): quoted after site assessment</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA footer */}
        <div className="mt-14 rounded-2xl border border-slate-100 bg-gradient-to-r from-[#E53935] to-[#FF7043] p-6 text-white shadow-lg">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                Ready to start a project?
              </h3>
              <p className="mt-1 text-sm text-white/90">
                Request a site survey or a tailored proposal. We’ll share a
                clear scope, timeline and budget before you commit.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#E53935] shadow-md transition hover:bg-slate-100"
              >
                Request Survey
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-full border border-white/70 px-4 py-2 text-sm font-semibold text-white/95 hover:bg-white/10"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
