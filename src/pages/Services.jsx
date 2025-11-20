// src/sections/ServiceSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/constants/services';
import { ServiceHero } from '@/components/ServicesComponents/ServiceHero';
import { ServicesSection } from '@/components/ServicesComponents/ServicesSection';
import { DeepDive } from '@/components/ServicesComponents/DeepDive';
import { CTA } from '@/components/ServicesComponents/CTA';


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

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 ">
        {/* Heading */}
        <ServiceHero />

        {/* Services grid */}
        <ServicesSection services={SERVICES} cardVariants={cardVariants} />

        {/* Deep-dive panels */}
        <DeepDive />

        {/* CTA footer */}
        <CTA />
      </div>
    </section>
  );
}
