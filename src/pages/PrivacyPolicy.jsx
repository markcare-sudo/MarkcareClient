import React, { useState, useEffect } from 'react';

export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState('introduction');

    const sections = [
        { id: 'introduction', title: '1. Introduction' },
        { id: 'definitions', title: '2. Definitions' },
        { id: 'information-collected', title: '3. Information We Collect' },
        { id: 'how-we-use', title: '4. How We Use Information' },
        { id: 'whatsapp-crm', title: '5. WhatsApp, Call Recording & CRM Data' },
        { id: 'service-bookings', title: '6. Service Bookings & Field Engineers' },
        { id: 'payments', title: '7. Payment Information' },
        { id: 'refunds-cancellation', title: '8. Refund & Cancellation Info' },
        { id: 'warranty-amc', title: '9. Warranty & AMC Information' },
        { id: 'sharing', title: '10. Information Sharing' },
        { id: 'third-party-providers', title: '11. Third-Party Integrations' },
        { id: 'cookies', title: '12. Cookies & Tracking Technologies' },
        { id: 'marketing', title: '13. Marketing Communications' },
        { id: 'security', title: '14. Data Security' },
        { id: 'retention', title: '15. Data Retention' },
        { id: 'user-rights', title: '16. User Rights' },
        { id: 'children', title: '17. Children\'s Privacy' },
        { id: 'international-transfers', title: '18. Cross-Border & Cloud Storage' },
        { id: 'legal-compliance', title: '19. Legal Compliance & Statutory Disclosures' },
        { id: 'policy-changes', title: '20. Policy Changes' },
        { id: 'contact', title: '21. Contact Information' },
        { id: 'consent', title: '22. Consent & Acknowledgement' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el && el.offsetTop <= scrollPosition && el.offsetTop + el.offsetHeight > scrollPosition) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            window.scrollTo({
                top: el.offsetTop - 100,
                behavior: 'smooth',
            });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-red-600 selection:text-white">
            {/* Premium Header Accent Line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-blue-600 to-red-700"></div>

            {/* Hero Banner Area */}
            <header className="bg-slate-900 border-b border-slate-800 py-12 px-6 sm:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center space-x-3 mb-3">
                        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-400 bg-red-950/50 border border-red-900/50 rounded-full">
                            Legal & Privacy Center
                        </span>
                        <span className="text-slate-500 text-sm">|</span>
                        <span className="text-slate-400 text-sm font-medium">Last Updated: June 11, 2026</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                        MarkCare <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500">Privacy Policy</span>
                    </h1>
                    <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-400 leading-relaxed">
                        This Privacy Policy sets out how MarkCare collects, manages, stores, protects, and handles data across our residential and industrial engineering service platform, including water treatment systems, HVAC, elevators, and solar infrastructures.
                    </p>
                </div>
            </header>

            {/* Main Layout Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="block lg:flex lg:gap-10">

                    {/* Sticky Sidebar Navigation for Desktop */}
                    <aside className="hidden lg:block lg:w-80 shrink-0">
                        <div className="sticky top-8 bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-xl max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 px-2">Document Sections</h2>
                            <nav className="space-y-1">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 block truncate ${activeSection === section.id
                                            ? 'bg-blue-950/60 text-blue-400 border-l-4 border-blue-500 font-semibold shadow-inner pl-4'
                                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border-l-4 border-transparent'
                                            }`}
                                    >
                                        {section.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Expanded Legal Content Body */}
                    <main className="flex-1 bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-sm">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">1. Introduction</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    Welcome to MarkCare (“Company”, “we”, “our”, or “us”). MarkCare operates as a specialized technology platform enabling standardized engineering, energy, and facility utilities execution—spanning Water Purifiers (RO), Water Treatment Plants (WTP), Sewage Treatment Plants (STP), Effluent Treatment Plants (ETP), Residential Elevators/Lifts, Solar Rooftops, Air Conditioning (AC), and enterprise infrastructure management.
                                </p>
                                <p>
                                    We recognize the significance of personal and corporate data security. This Privacy Policy clarifies how we gather, deploy, store, secure, and disclose relevant datasets whenever you access our web portal (markcare.in), utilize our digital booking interfaces, engage with our automated WhatsApp assistance workflows, request structural site inspections, or enter into standard Annual Maintenance Contracts (AMC).
                                </p>
                                <p>
                                    By interacting with markcare.in, booking technical support, onboarding corporate utility equipment, or engaging our dispatched field engineering partners, you acknowledge that you fully understand and agree to the data methodologies described in this operational policy.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: Definitions */}
                        <section id="definitions" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-blue-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">2. Definitions</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 leading-relaxed text-sm sm:text-base">
                                <p className="text-justify">
                                    The terms used throughout this document are defined as follows to avoid any ambiguity:
                                </p>
                                <ul className="space-y-3 pl-4 border-l border-slate-800 mt-2">
                                    <li>
                                        <strong className="text-blue-400">“Platform”</strong> refers collectively to markcare.in, associated customer service intake models, automated field partner applications, internal CRM nodes, and technical assignment engines owned by the Company.
                                    </li>
                                    <li>
                                        <strong className="text-blue-400">“User” / “Customer”</strong> means any homeowner, independent villa manager, industrial facility head, housing association member, or corporate utility coordinator who registers an enquiry or commands technical services.
                                    </li>
                                    <li>
                                        <strong className="text-blue-400">“Service Partner” / “Field Engineer”</strong> refers to any background-verified, certified technical expert, team coordinator, or installation specialist deployed by MarkCare to deliver installation, repair, retroactive modding, or preventative maintenance.
                                    </li>
                                    <li>
                                        <strong className="text-blue-400">“Industrial Assets”</strong> defines the specific physical utilities managed, including heavy multi-stage RO skids, commercial filtration columns, solar inverter boards, structural home lifts, ductable AC setups, or biological reactors (STP/ETP).
                                    </li>
                                    <li>
                                        <strong className="text-blue-400">“AMC”</strong> means Annual Maintenance Contracts configured to deliver proactive inspections, checklist-driven performance tests, and emergency troubleshooting intervals.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 3: Information We Collect */}
                        <section id="information-collected" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">3. Information We Collect</h2>
                            </div>
                            <div className="text-slate-300 space-y-6 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    To properly evaluate industrial infrastructure, coordinate service vehicles, and enforce safety checklists, we log the following precise sets of information:
                                </p>

                                <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-5 space-y-4">
                                    <h3 className="text-base sm:text-lg font-semibold text-white flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span> A. Personal Information
                                    </h3>
                                    <p className="text-slate-400 text-sm pl-4">
                                        Full consumer legal names, primary telephone numbers, active secondary contact parameters, email addresses, explicit residential addresses, and exact physical pinpoint coordinates derived to match field engineer logistics.
                                    </p>

                                    <h3 className="text-base sm:text-lg font-semibold text-white flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> B. Business & Industrial Asset Profile
                                    </h3>
                                    <p className="text-slate-400 text-sm pl-4">
                                        Corporate tax identifiers (GSTIN), registered office addresses, factory map attachments, water test telemetry (such as raw water TDS metrics, hardness indices, or daily input volumes), plant footprint capacities, asset serial numbers, and office safety authorization permits.
                                    </p>

                                    <h3 className="text-base sm:text-lg font-semibold text-white flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-slate-500 mr-2"></span> C. Technical Log Streams
                                    </h3>
                                    <p className="text-slate-400 text-sm pl-4">
                                        Internet Protocol (IP) addresses, device interaction profiles, browser software versions, historical clickstream sequences on markcare.in, navigation timelines, referring marketing nodes, and structural access log timelines.
                                    </p>

                                    <h3 className="text-base sm:text-lg font-semibold text-white flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span> D. Service & Verification Data
                                    </h3>
                                    <p className="text-slate-400 text-sm pl-4">
                                        Historical component replacement logs, technical repair logs, pressure indices, electrical loading parameters, structural checklist sign-offs, and verification media files (including on-site photos of lift machinery, membrane setups, and pipeline routing).
                                    </p>

                                    <h3 className="text-base sm:text-lg font-semibold text-white flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> E. Payment Tracking Details
                                    </h3>
                                    <p className="text-slate-400 text-sm pl-4">
                                        Selected payment methods, transaction reference numbers from encrypted gateways, corporate billing profiles, accounting keys, and clear payment confirmation receipts. We do not store raw card credentials or payment pins.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: How We Use Information */}
                        <section id="how-we-use" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-blue-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">4. How We Use Information</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    All data collected is used solely to maintain operational safety, optimize equipment performance, and handle customer service requests. We apply your data for these clear business reasons:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                                        <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Engineering Execution</h4>
                                        <p className="text-xs sm:text-sm text-slate-400">Routing certified technicians to handle plant diagnostics, commissioning custom water systems, conducting elevator safety audits, and managing AC overhauls.</p>
                                    </div>
                                    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                                        <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Standardized QA Reviews</h4>
                                        <p className="text-xs sm:text-sm text-slate-400">Reviewing technician checklist submissions, verifying water quality test results, and assessing field photos against our standard operating procedures.</p>
                                    </div>
                                    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                                        <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">CRM Tracking & AMC Lifecycles</h4>
                                        <p className="text-xs sm:text-sm text-slate-400">Tracking upcoming service dates, managing maintenance histories, providing warranty coverage confirmations, and sending automated contract renewal alerts.</p>
                                    </div>
                                    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                                        <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Secure System Auditing</h4>
                                        <p className="text-xs sm:text-sm text-slate-400">Monitoring platform security, verifying online payments, protecting customer records, and preventing fraudulent or unauthorized booking attempts.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: WhatsApp, Call Recording & CRM Data */}
                        <section id="whatsapp-crm" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">5. WhatsApp, Call Recording & CRM Data</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    When a customer contacts MarkCare via automated WhatsApp lead flows or click-to-chat links, we record their mobile telephone details, chat text, engineering selections, and structural descriptions. This intake data is synchronized directly with our central CRM to ensure a unified customer service profile.
                                </p>
                                <p>
                                    Inbound helpline conversations and outbound scheduling communications are recorded for contract verification, engineering safety audits, and customer support training. These voice assets are stored securely within our access-controlled cloud networks.
                                </p>
                                <p>
                                    Our internal CRM tracks client service milestones, records site histories, logs engineering details, and saves technician assessment profiles. This helps our support teams provide clear, informed service responses.
                                </p>
                            </div>
                        </section>

                        {/* Section 6: Service Bookings & Field Engineers */}
                        <section id="service-bookings" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-blue-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">6. Service Bookings & Field Engineers</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    To complete on-site services, relevant details including the customer\'s name, address, layout drawings, water chemistry records, and appliance performance logs must be shared with our assigned Field Engineers and Service Partners.
                                </p>
                                <p>
                                    Our engineering partners are contractually required to maintain strict data confidentiality. They are prohibited from sharing customer contact details or site characteristics, or using this information for any purpose outside the assigned service scope. Field engineers use their mobile interfaces to log task checklists, record system metrics, and capture installation images to update the central tracking system.
                                </p>
                                <p>
                                    We also monitor the technical routing and location coordinates of our dispatched engineers during service calls. This data is used to provide accurate arrival estimates, confirm site attendance, and help optimize future dispatch schedules.
                                </p>
                            </div>
                        </section>

                        {/* Section 7: Payment Information */}
                        <section id="payments" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">7. Payment Information</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    MarkCare utilizes secure payment gateways to process transactional tokens for one-time engineering repairs, ongoing AMC contracts, customized component upgrades, and project commissions.
                                </p>
                                <p>
                                    We do not hold or store raw banking details, credit card numbers, or transaction PIN values on our local database architecture. Financial transactions are processed through certified, encrypted payment partners using industry-standard protocols. Our internal databases preserve only essential billing metadata, such as payment reference hashes, payment methods, transaction timestamps, and payment statuses, to verify transaction histories and support accounting audits.
                                </p>
                            </div>
                        </section>

                        {/* Section 8: Refund & Cancellation Related Information */}
                        <section id="refunds-cancellation" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-blue-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">8. Refund & Cancellation Related Information</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    If an emergency cancellation is filed or a refund claim is processed under our service rules, MarkCare reviews associated scheduling histories, engineering checklogs, and customer feedback to handle the request.
                                </p>
                                <p>
                                    When a cancellation or refund is authorized, required banking information or electronic identifiers are used to return the funds through the original payment channel. We maintain clear records of cancellations and refunds to track service quality, manage financial reports, and safeguard against fraudulent activity.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: Warranty & AMC Information */}
                        <section id="warranty-amc" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">9. Warranty & AMC Information</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    Managing extended warranty bounds and Annual Maintenance Contracts requires systematic tracking of asset lifecycles. MarkCare monitors installation parameters, component replacement timelines, operational logs, and scheduled maintenance dates linked to your industrial or residential asset profile.
                                </p>
                                <p>
                                    This data is used to anticipate part wear, schedule preventative service calls, verify active warranty coverage, and cross-reference system failures with manufacturer registries. These records are maintained throughout the contract term and for an extended period to ensure accurate historical tracking and resolve any coverage questions.
                                </p>
                            </div>
                        </section>

                        {/* Section 10: Information Sharing */}
                        <section id="sharing" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-blue-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">10. Information Sharing</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    MarkCare does not sell, trade, or rent personal information or corporate utility profiles to outside marketing firms or lists. Your data is shared only under specific operational circumstances outlined below:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-slate-400 text-sm">
                                    <li>With certified field engineers and service partners to perform on-site adjustments, installations, and maintenance.</li>
                                    <li>With authorized payment processor gateways to securely process service charges and handle recurring AMC billing.</li>
                                    <li>With core technical service integrations, including database management tools, CRM software, and communication tools.</li>
                                    <li>With legal representatives, financial auditors, and corporate advisors to ensure operational and regulatory compliance.</li>
                                    <li>When required by law to comply with valid legal processes, government orders, or safety and environmental regulations.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 11: Third-Party Integrations */}
                        <section id="third-party-providers" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">11. Third-Party Integrations</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    We utilize specialized third-party services to support key operational tasks, including data hosting, messaging systems, business analytics, and transaction matching. These partners process relevant data blocks on behalf of MarkCare and strictly according to our operational guidelines.
                                </p>
                                <p>
                                    Our primary technology dependencies include secure cloud infrastructure providers, enterprise CRM tools, automated messaging systems (such as the WhatsApp Business platform), and performance analytics services. These third-party entities are contractually prohibited from using your personal details or asset telemetry for any independent commercial or marketing purposes.
                                </p>
                            </div>
                        </section>

                        {/* Section 12: Cookies & Tracking Technologies */}
                        <section id="cookies" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-blue-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">12. Cookies & Tracking Technologies</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    MarkCare uses cookies, web beacons, and persistent browser configurations to keep markcare.in running smoothly, remember customer setup options, and analyze overall traffic trends.
                                </p>
                                <p>
                                    Essential operational cookies are used to manage user sessions, protect data intake forms, and ensure page stability. Analytics cookies help us monitor platform usage, identify technical issues, and improve navigation. You can update your browser preferences to limit or block non-essential cookies, though this may restrict access to specific automated features on our Platform.
                                </p>
                            </div>
                        </section>

                        {/* Section 13: Marketing Communications */}
                        <section id="marketing" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">13. Marketing Communications</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    We may periodically use your contact details to share operational newsletters, information about service updates, water safety advisories, and seasonal maintenance suggestions. You have full control over these notifications and can opt out at any time.
                                </p>
                                <p>
                                    To opt out of promotional updates, you can use the unsubscribe link provided in our emails, reply with standard opt-out phrases (such as "STOP") to text updates, or send your request directly to our support team. Opting out of promotional messages will not apply to critical operational notices, including active booking confirmations, urgent water system alerts, warranty tracking notices, and AMC billing details.
                                </p>
                            </div>
                        </section>

                        {/* Section 14: Data Security */}
                        <section id="security" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-blue-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">14. Data Security</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    MarkCare maintains administrative, technical, and physical security measures to protect customer data from unauthorized access, accidental loss, alteration, or disclosure.
                                </p>
                                <p>
                                    Our security practices include full database encryption in transit and at rest via SSL/TLS protocols, strict access permissions within our internal CRM networks, regular server performance reviews, and secure code validation standards. While we implement advanced data protection tools, no data transmission method over the internet or cloud network is entirely risk-free. We cannot guarantee absolute data security and recommend using secure networks and access credentials.
                                </p>
                            </div>
                        </section>

                        {/* Section 15: Data Retention */}
                        <section id="retention" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">15. Data Retention</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    We store customer records and asset details only as long as necessary to manage active service accounts, fulfill active AMC agreements, and satisfy legal, tax, or regulatory compliance mandates.
                                </p>
                                <p>
                                    When data is no longer required for active operations or legal compliance, it is securely deleted or fully anonymized using verified data clearing practices. Anonymized asset performance metrics and general telemetry logs may be preserved in aggregate to support long-term engineering diagnostics and performance analytics.
                                </p>
                            </div>
                        </section>

                        {/* Section 16: User Rights */}
                        <section id="user-rights" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-blue-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">16. User Rights</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    Depending on your jurisdiction and applicable regional data regulations, you hold specific statutory rights regarding your personal information. These include:
                                </p>
                                <div className="space-y-3 bg-slate-950/40 p-5 rounded-xl border border-slate-800 text-sm text-slate-400">
                                    <p><strong className="text-white font-medium">Right to Access:</strong> The right to request copies of your personal information stored in our active databases.</p>
                                    <p><strong className="text-white font-medium">Right to Correction:</strong> The right to modify inaccurate, incomplete, or outdated details within your customer profile.</p>
                                    <p><strong className="text-white font-medium">Right to Deletion:</strong> The right to request the erasure of your personal data, subject to overriding tax, safety, or legal data retention requirements.</p>
                                    <p><strong className="text-white font-medium">Right to Object:</strong> The right to limit or oppose specific automated data processing activities for direct marketing purposes.</p>
                                </div>
                                <p>
                                    To exercise any of these options, please submit a formal request to our support team. We will review and address your request within standard legal timeframes after properly verifying your identity.
                                </p>
                            </div>
                        </section>

                        {/* Section 17: Children's Privacy */}
                        <section id="children" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">17. Children\'s Privacy</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    Our engineering solutions and utility services are intended exclusively for homeowners, adult clients, and corporate facility representatives. MarkCare does not intentionally gather or maintain personal information from individuals under the age of 16.
                                </p>
                                <p>
                                    If we discover that a minor under 16 has shared personal data with us, we will take steps to remove those records from our servers as quickly as possible. If you believe we may have inadvertently collected information from a minor, please contact our support team immediately.
                                </p>
                            </div>
                        </section>

                        {/* Section 18: Cross-Border & Cloud Storage */}
                        <section id="international-transfers" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-blue-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">18. Cross-Border & Cloud Storage</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    MarkCare utilizes secure, enterprise-grade cloud data centers to manage data systems. Consequently, your information may be transferred to, stored in, or processed across data architectures located outside your home state, region, or country.
                                </p>
                                <p>
                                    When data is stored or transferred across these networks, we ensure appropriate data protection agreements and safety frameworks are in place. This ensures your information receives consistent protection regardless of where the cloud servers are located.
                                </p>
                            </div>
                        </section>

                        {/* Section 19: Legal Compliance & Statutory Disclosures */}
                        <section id="legal-compliance" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">19. Legal Compliance & Statutory Disclosures</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    In specific circumstances, MarkCare may be legally required to share personal data, facility logs, or transaction histories with legal authorities, environmental regulators, or judicial bodies.
                                </p>
                                <p>
                                    We comply with these disclosure requirements only when presented with valid court orders, subpoenas, official government warrants, or clear statutory mandates. Every disclosure request is carefully reviewed to verify its legal validity, and we aim to notify affected users when legally permitted.
                                </p>
                            </div>
                        </section>

                        {/* Section 20: Policy Changes */}
                        <section id="policy-changes" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-blue-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">20. Policy Changes</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    We may periodically update this Privacy Policy to reflect changes in our service operations, technical adjustments, or updates to regional privacy regulations.
                                </p>
                                <p>
                                    When updates are made, we will change the "Last Updated" date at the top of this page. For significant updates that modify your privacy rights, we will provide additional notice, such as an email alert or a clear announcement banner on markcare.in. We recommend reviewing this policy periodically to stay informed about our data protection practices.
                                </p>
                            </div>
                        </section>

                        {/* Section 21: Contact Information */}
                        <section id="contact" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-red-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">21. Contact Information</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    If you have any questions about this Privacy Policy, wish to update your profile data, or want to submit an inquiry regarding our data handling methods, please contact our support team:
                                </p>
                                <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-sm text-slate-400">
                                    <p><strong className="text-white">Brand / Platform:</strong> MarkCare (markcare.in)</p>
                                    <p><strong className="text-white">Email Communications:</strong> support@markcare.in</p>
                                    <p><strong className="text-white">Operational Hubs:</strong> Headquartered in Bengaluru, with key regional centers across India (including Pallikaranai, Chennai).</p>
                                    <p><strong className="text-white">Customer Support Contact:</strong> +91 72049 74477</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 22: Consent */}
                        <section id="consent" className="mb-12 scroll-mt-24">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-1.5 h-6 bg-blue-600 rounded"></div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">22. Consent & Acknowledgement</h2>
                            </div>
                            <div className="text-slate-300 space-y-4 text-justify leading-relaxed text-sm sm:text-base">
                                <p>
                                    By creating an account, interacting with our WhatsApp scheduling systems, booking technical service appointments, or signing an AMC contract through markcare.in, you explicitly verify that you have read, understood, and agreed to all the data collection, handling, and protection practices detailed within this Privacy Policy.
                                </p>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}
