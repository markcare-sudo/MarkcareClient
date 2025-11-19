import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight, CheckCircle2, Building2, Globe } from "lucide-react";
import { cities } from "@/utils/data";
import Header from "./Header";


const Button = ({ className = "", children, ...props }) => (
    <button
        {...props}
        className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm ring-1 ring-inset transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed bg-red-700 text-white hover:bg-slate-800 active:scale-[0.98] ${className}`}
    >
        {children}
    </button>
);

const cx = (...cls) => cls.filter(Boolean).join(" ");

export default function Contact() {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({ name: "", phone: "", email: "", service: "AC Services", message: "" });
    const [status, setStatus] = useState({ done: false, error: "", loading: false });

    const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const validate = () => {
        if (!form.name.trim()) return "Please enter your name.";
        if (!/^[0-9+\-() ]{7,}$/.test(form.phone.trim())) return "Please enter a valid phone number.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) return "Please enter a valid email.";
        if (!form.message.trim()) return "Please add a short message.";
        return "";
    };

    const submit = (e) => {
        e.preventDefault();
        const v = validate();
        if (v) return setStatus({ done: false, error: v, loading: false });
        setStatus({ done: false, error: "", loading: true });

        // No backend: simulate a smooth UX completion
        setTimeout(() => {
            setStatus({ done: true, error: "", loading: false });
        }, 900);
    };

    const services = [
        "AC Services",
        "Commercial AC Services",
        "RO Plants",
        "Water Treatment Plants (WTP)",
        "Effluent Treatment Plants (ETP)",
        "Sewage Treatment Plants (STP)",
        "Lift & Escalator",
        "Inverter & Generator",
        "Solar Systems",
        "Chemical Washing",
    ];

    return (
        <section id="contact" className="relative py-20 lg:py-28">
            {/* Soft gradient background + subtle grid */}
            {/* Navbar */}
            <Header open={open} setOpen={setOpen} cities={cities} />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
            <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(500px_circle_at_20%_20%,#000,transparent)]">
                <svg aria-hidden className="h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                    >
                        Get a Free Quote
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className="mt-3 text-base leading-7 text-slate-600"
                    >
                        Tell us your requirement and our team will get back within business hours.
                    </motion.p>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Contact Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55 }}
                        className="relative overflow-hidden rounded border border-slate-200 bg-white/70 p-4 md:p-6 shadow-sm backdrop-blur-sm"
                    >
                        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-tr from-sky-200 to-indigo-200 opacity-40 blur-3xl" />
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-700 text-white">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900">Talk to our specialist</h3>
                                <p className="mt-1 text-sm text-slate-600">Quick answers for sales, estimates, or service clarifications.</p>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            <a
                                href="tel:+919884927676"
                                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition hover:shadow-md"
                            >
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200 group-hover:ring-slate-300">
                                    <Phone className="h-4 w-4" />
                                </span>
                                <div className="leading-tight">
                                    <div className="text-xs text-slate-500">Call</div>
                                    <div className="font-medium">+91 98849 27676</div>
                                </div>
                            </a>
                            <a
                                href="tel:+917010421860"
                                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition hover:shadow-md"
                            >
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200 group-hover:ring-slate-300">
                                    <Phone className="h-4 w-4" />
                                </span>
                                <div className="leading-tight">
                                    <div className="text-xs text-slate-500">Call</div>
                                    <div className="font-medium">+91 70104 21860</div>
                                </div>
                            </a>
                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            <a
                                href="mailto:info@markcare.in"
                                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition hover:shadow-md"
                            >
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200 group-hover:ring-slate-300">
                                    <Mail className="h-4 w-4" />
                                </span>
                                <div className="leading-tight">
                                    <div className="text-xs text-slate-500">Email</div>
                                    <div className="font-medium">info@markcare.in</div>
                                </div>
                            </a>
                            <a
                                href="https://www.markcare.net"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition hover:shadow-md"
                            >
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200 group-hover:ring-slate-300">
                                    <Globe className="h-4 w-4" />
                                </span>
                                <div className="leading-tight">
                                    <div className="text-xs text-slate-500">Website</div>
                                    <div className="font-medium underline underline-offset-4">www.markcare.net</div>
                                </div>
                            </a>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200">
                                    <MapPin className="h-4 w-4" />
                                </span>
                                <div className="leading-tight">
                                    <div className="text-xs text-slate-500">Location</div>
                                    <div className="font-medium">All over India</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200">
                                    <Clock className="h-4 w-4" />
                                </span>
                                <div className="leading-tight">
                                    <div className="text-xs text-slate-500">Business Hours</div>
                                    <div className="font-medium">Mon–Sat, 9:30 AM – 6:30 PM</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-sm text-slate-600">
                            <Building2 className="mr-2 inline h-4 w-4 -translate-y-[1px]" /> We serve Residential, Commercial & Industrial clients with on-site support and AMC.
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, delay: 0.05 }}
                        className="relative overflow-hidden rounded border border-slate-200 bg-white p-4 md:p-6 shadow-sm"
                    >
                        <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-gradient-to-tr from-indigo-200 to-fuchsia-200 opacity-40 blur-3xl" />

                        {status.done ? (
                            <div className="relative grid place-items-center py-16 text-center">
                                <CheckCircle2 className="mb-3 h-12 w-12 text-emerald-600" />
                                <h3 className="text-lg font-semibold text-slate-900">Thanks! Your request was recorded.</h3>
                                <p className="mt-1 max-w-md text-sm text-slate-600">Our team will reach you during business hours. If it's urgent, please call the numbers listed.</p>
                                <Button className="mt-6" onClick={() => setStatus({ done: false, error: "", loading: false })}>
                                    Send another request
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={submit} className="grid gap-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <Field label="Name">
                                        <input
                                            name="name"
                                            value={form.name}
                                            onChange={onChange}
                                            placeholder="Your full name"
                                            className="field-input"
                                        />
                                    </Field>
                                    <Field label="Phone">
                                        <input
                                            name="phone"
                                            value={form.phone}
                                            onChange={onChange}
                                            inputMode="tel"
                                            placeholder="+91…"
                                            className="field-input"
                                        />
                                    </Field>
                                </div>
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <Field label="Email">
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={onChange}
                                            placeholder="name@example.com"
                                            className="field-input"
                                        />
                                    </Field>
                                    <Field label="Service">
                                        <select name="service" value={form.service} onChange={onChange} className="field-input">
                                            {services.map((s) => (
                                                <option key={s} value={s}>
                                                    {s}
                                                </option>
                                            ))}
                                        </select>
                                    </Field>
                                </div>
                                <Field label="Message">
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={form.message}
                                        onChange={onChange}
                                        placeholder="Tell us about your requirement…"
                                        className="field-input"
                                    />
                                </Field>

                                {status.error && (
                                    <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                                        {status.error}
                                    </div>
                                )}

                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-xs text-slate-500">
                                        By submitting, you agree to be contacted by Mark Care regarding your request.
                                    </p>
                                    <Button type="submit" disabled={status.loading} className="group min-w-36">
                                        <span className="mr-1">Submit</span>
                                        <ArrowRight className={cx("h-4 w-4 transition", status.loading && "animate-pulse")} />
                                    </Button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Form fields styling (Tailwind utility classes) */}
            <style>{`
        .field-input { border-width:1px; border-color:#cbd5e1; border-style:solid; border-radius:0.5rem; padding:0.75rem 0.875rem; font-size:0.875rem; color:#0f172a; background:white; }
        .shadow-xs { box-shadow: 0 1px 2px 0 rgba(15, 23, 42, 0.04); }
      `}</style>

            {/* JSON-LD for SEO (optional) */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "Mark Care",
                    url: "https://www.markcare.in",
                    areaServed: "Chennai",
                    contactPoint: [
                        { "@type": "ContactPoint", telephone: "+91 98849 27676", contactType: "customer service" },
                        { "@type": "ContactPoint", telephone: "+91 70104 21860", contactType: "customer service" }
                    ]
                })
            }} />
        </section>
    );
}

function Field({ label, children }) {
    return (
        <label className="group grid gap-1.5">
            <span className="text-xs font-medium text-slate-700">{label}</span>
            {children}
        </label>
    );
}
