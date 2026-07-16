import React from "react";
import {
    Building2,
    ShieldCheck,
    CreditCard,
    FileText,
    Wrench,
    BadgeCheck,
    RefreshCw,
    Scale,
    Phone,
    Briefcase,
} from "lucide-react";

const sections = [
    {
        id: "about",
        number: "01",
        icon: <Building2 size={24} />,
        title: "About MarkCare",
        content: (
            <>
                <p>
                    MarkCare provides installation, maintenance, repair, Annual
                    Maintenance Contracts (AMC), facility management, engineering
                    services, and technical solutions for residential, commercial, and
                    industrial customers.
                </p>

                <div className="grid md:grid-cols-2 gap-3 mt-6">
                    {[
                        "Air Conditioning (AC) Services",
                        "RO Water Purifiers",
                        "Industrial RO Plants",
                        "Water Treatment Plants (WTP)",
                        "Sewage Treatment Plants (STP)",
                        "Effluent Treatment Plants (ETP)",
                        "Solar Power Systems",
                        "Elevator & Lift Solutions",
                        "Generators, UPS & Inverters",
                        "Facility Management Services",
                    ].map((service) => (
                        <div
                            key={service}
                            className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-slate-300"
                        >
                            {service}
                        </div>
                    ))}
                </div>
            </>
        ),
    },
    {
        id: "eligibility",
        number: "02",
        icon: <ShieldCheck size={24} />,
        title: "Eligibility",
        content: (
            <ul className="space-y-3">
                <li>• You must be at least 18 years of age.</li>
                <li>• You must have legal capacity to enter agreements.</li>
                <li>• Information provided must be accurate and complete.</li>
                <li>• Services must be used only for lawful purposes.</li>
            </ul>
        ),
    },
    {
        id: "services",
        number: "03",
        icon: <Briefcase size={24} />,
        title: "Service Requests",
        content: (
            <ul className="space-y-3">
                <li>• Accurate contact and location details are required.</li>
                <li>• Service appointments depend on technician availability.</li>
                <li>
                    • MarkCare reserves the right to accept, reject, postpone, or cancel
                    service requests.
                </li>
                <li>• Site inspections may be required before final quotations.</li>
            </ul>
        ),
    },
    {
        id: "payments",
        number: "04",
        icon: <CreditCard size={24} />,
        title: "Pricing & Payments",
        content: (
            <>
                <p>
                    Service charges, inspection fees, spare parts, transportation,
                    applicable taxes, and other related costs will be communicated before
                    work commencement whenever reasonably possible.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
                    {[
                        "UPI",
                        "Credit Card",
                        "Debit Card",
                        "Net Banking",
                        "Bank Transfer",
                    ].map((item) => (
                        <div
                            key={item}
                            className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 text-center text-blue-300"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </>
        ),
    },
    {
        id: "projects",
        number: "05",
        icon: <FileText size={24} />,
        title: "Quotations & Project Execution",
        content: (
            <ul className="space-y-3">
                <li>• Quotations remain valid for the specified validity period.</li>
                <li>• Material prices may vary due to market fluctuations.</li>
                <li>• Scope changes may affect pricing and project timelines.</li>
                <li>
                    • Delays caused by customer approvals or site readiness are excluded
                    from liability.
                </li>
            </ul>
        ),
    },
    {
        id: "installation",
        number: "06",
        icon: <Wrench size={24} />,
        title: "Installation Services",
        content: (
            <ul className="space-y-3">
                <li>• Installation feasibility is subject to site inspection.</li>
                <li>
                    • Additional civil, electrical, plumbing, or fabrication work may
                    incur separate charges.
                </li>
                <li>• Timelines are estimates and may vary.</li>
            </ul>
        ),
    },
    {
        id: "warranty",
        number: "07",
        icon: <BadgeCheck size={24} />,
        title: "Warranty",
        content: (
            <>
                <p>
                    Product warranties are governed by manufacturer policies. MarkCare may
                    provide limited workmanship warranties for selected services.
                </p>

                <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-2xl p-5">
                    <h4 className="font-semibold text-red-400 mb-4">
                        Warranty Does Not Cover
                    </h4>

                    <ul className="space-y-2">
                        <li>• Unauthorized modifications</li>
                        <li>• Misuse or negligence</li>
                        <li>• Electrical fluctuations</li>
                        <li>• Natural disasters</li>
                        <li>• Third-party interference</li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        id: "refunds",
        number: "08",
        icon: <RefreshCw size={24} />,
        title: "Cancellation & Refund Policy",
        content: (
            <>
                <p>
                    Customers may cancel or reschedule appointments before technician
                    dispatch.
                </p>

                <p className="mt-4">
                    Refund eligibility depends on service status, materials procured,
                    project progress, and contractual commitments.
                </p>
            </>
        ),
    },
    {
        id: "liability",
        number: "09",
        icon: <Scale size={24} />,
        title: "Limitation of Liability",
        content: (
            <p>
                MarkCare shall not be liable for indirect, incidental, consequential,
                special, or punitive damages including business interruption,
                operational downtime, data loss, or loss of profits. Liability shall
                not exceed the amount paid for the specific service.
            </p>
        ),
    },
    {
        id: "contact",
        number: "10",
        icon: <Phone size={24} />,
        title: "Contact Information",
        content: (
            <div className="space-y-2">
                <p className="font-semibold text-white">MarkCare Private Limited</p>
                <p>Bengaluru, Karnataka, India</p>
                <p>Phone: +91 98849 27676</p>
                <p>Email: director@markcare.in</p>
                <p>Website: www.markcare.in</p>
            </div>
        ),
    },
];

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Glow Effects */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[180px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[180px]" />
            </div>

            {/* Hero Section */}
            <section className="relative border-b border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-red-600/10" />

                <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
                    <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 backdrop-blur-xl px-5 py-2 text-sm text-slate-300">
                        Legal Information
                    </span>

                    <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
                        Terms &
                        <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                            {" "}
                            Conditions
                        </span>
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg text-slate-400 leading-8">
                        Please read these Terms & Conditions carefully before using
                        MarkCare's website, services, and platform. By accessing our
                        services, you agree to comply with the following terms.
                    </p>

                    <div className="mt-8">
                        <span className="bg-gradient-to-r from-blue-600 to-red-500 text-white px-6 py-3 rounded-full font-medium shadow-lg">
                            Effective Date: June 11, 2026
                        </span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Sidebar */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-24 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6">
                            <h3 className="font-bold text-xl mb-6 text-white">
                                Quick Navigation
                            </h3>

                            <div className="space-y-4">
                                {sections.map((section) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className="block text-slate-400 hover:text-red-400 transition-all duration-300"
                                    >
                                        {section.number}. {section.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-9 space-y-8">
                        {/* Intro */}
                        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8">
                            <h2 className="text-3xl font-bold mb-4">
                                Welcome to MarkCare
                            </h2>

                            <p className="text-slate-300 leading-8">
                                These Terms & Conditions govern your access to and use of the
                                MarkCare website, products, applications, and services. If you
                                do not agree with any part of these terms, please discontinue
                                use of our platform and services.
                            </p>
                        </div>

                        {/* Sections */}
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                id={section.id}
                                className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all duration-300"
                            >
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center text-white shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                                        {section.icon}
                                    </div>

                                    <div>
                                        <span className="text-red-400 text-sm font-semibold">
                                            SECTION {section.number}
                                        </span>

                                        <h2 className="text-2xl font-bold text-white">
                                            {section.title}
                                        </h2>
                                    </div>
                                </div>

                                <div className="text-slate-300 leading-8">
                                    {section.content}
                                </div>
                            </div>
                        ))}

                        {/* Footer Card */}
                        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-red-600/10" />

                            <div className="relative p-10">
                                <h3 className="text-3xl font-bold mb-4">
                                    Updates to These Terms
                                </h3>

                                <p className="text-slate-300 leading-8">
                                    MarkCare reserves the right to update, modify, or revise these
                                    Terms & Conditions at any time. Changes become effective upon
                                    publication on this page. Continued use of our services
                                    constitutes acceptance of the revised terms.
                                </p>

                                <div className="mt-8 pt-6 border-t border-slate-700">
                                    <p className="text-slate-400 text-sm">
                                        Last Updated: June 11, 2026
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsAndConditions;