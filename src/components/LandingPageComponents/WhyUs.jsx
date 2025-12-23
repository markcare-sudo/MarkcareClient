import React, { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  BadgeCheck,
  Factory,
} from "lucide-react";



const CountUp = ({ end, duration = 1500, suffix = "" }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const animate = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setValue(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};



const WhyUs = ({ installs, citiesCount }) => {
  const features = [
    {
      title: "Standardized SOPs",
      text: "Checklist-driven service delivery and QA at each step.",
      icon: ShieldCheck,
    },
    {
      title: "Certified Engineers",
      text: "Experienced technicians for critical systems and utilities.",
      icon: BadgeCheck,
    },
    {
      title: "Compliance-Ready",
      text: "Environmental & safety norms met for ETP/STP/RO projects.",
      icon: Factory,
    },
    {
      title: "End-to-End Execution",
      text: "From site survey to commissioning, AMC & retrofits.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 bg-gradient-to-b from-red-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Why Choose Us
          </h2>
          <p className="mt-3 text-slate-600 text-lg">
            Built on trust, measurable quality standards, and reliability —
            backed by certified teams and responsive support.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-3xl p-6 bg-white/60 backdrop-blur-xl ring-1 ring-slate-200 shadow-sm
              hover:shadow-xl hover:bg-white transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-100 grid place-items-center group-hover:scale-110 transition">
                <f.icon className="w-6 h-6 text-red-700" />
              </div>

              <div className="mt-4 text-xl font-semibold text-slate-900">
                {f.title}
              </div>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 mt-14">
        <div className="grid gap-6 sm:grid-cols-3">
          {/* Successful Installs */}
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 text-center ring-1 ring-slate-200 shadow-sm hover:shadow-xl transition">
            <div className="text-4xl font-extrabold text-red-700">
              <CountUp end={installs} suffix="+" />
            </div>
            <div className="text-sm text-slate-600 mt-1">
              Successful Installs
            </div>
          </div>

          {/* Cities Covered */}
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 text-center ring-1 ring-slate-200 shadow-sm hover:shadow-xl transition">
            <div className="text-4xl font-extrabold text-red-700">
              <CountUp end={citiesCount} />
            </div>
            <div className="text-sm text-slate-600 mt-1">
              Cities Covered
            </div>
          </div>

          {/* Support */}
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 text-center ring-1 ring-slate-200 shadow-sm hover:shadow-xl transition">
            <div className="text-4xl font-extrabold text-red-700">24×7</div>
            <div className="text-sm text-slate-600 mt-1">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
