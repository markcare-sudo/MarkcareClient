import React from "react";
import { Download, FileText, Phone, Globe } from "lucide-react";
import Header from "@/components/Header";


const pdfHref = "/assets/brouchers/MARKCARE_LIFT_BROCHURE.pdf"; // ensure PDF is in public/

// === Sample structured brochure data (replace/extend with real content) ===
const HIGHLIGHTS = [
    { id: "h1", title: "Low Energy Consumption", text: "Gearless machine + VVVF — reduced consumption" },
    { id: "h2", title: "Silent & Smooth", text: "Ultra smooth start/stop — comfortable ride" },
    { id: "h3", title: "Safety Features", text: "ARD, light curtain, emergency rescue & alarm" },
    { id: "h4", title: "Highly Customizable", text: "Glass cabins, SS finishes, many color options" },
];

const FEATURES = [
    { id: "f1", text: "Suitable for civil & structural shafts" },
    { id: "f2", text: "Minimal disruption for retrofits" },
    { id: "f3", text: "Ultra smooth start & stop" },
    { id: "f4", text: "Inverter ready + ARD (Automatic Rescue Device)" },
    { id: "f5", text: "Wide doors & wheelchair-friendly controls" },
    { id: "f6", text: "Multiple cabin finishes & glass options" },
];

const SPECS = [
    { id: "s1", param: "Capacity", value: "256 – 408 kgs (typical models)", notes: "Multiple capacity options available" },
    { id: "s2", param: "Drive", value: "Gearless with integrated VVVF", notes: "Silent, efficient operation" },
    { id: "s3", param: "Power Supply", value: "Single Phase 230V", notes: "Operates on single-phase; inverter-ready" },
    { id: "s4", param: "Speed", value: "0.7 m/s & 1.0 m/s (options)", notes: "Selectable per model" },
    { id: "s5", param: "Compliance", value: "IS 15259, National Building Code", notes: "Verify local requirements" },
    { id: "s6", param: "Overhead / Pit", value: "Low pit & low overhead design", notes: "Reduced shaft requirements" },
];

const FINISHES = [
    { id: "c1", text: "SS Hairline / Vertical silver" },
    { id: "c2", text: "Golden Mirror / Bronze Mirror" },
    { id: "c3", text: "Black Mirror / Black Hairline" },
    { id: "c4", text: "Leather / Honeycomb / Linen" },
    { id: "c5", text: "Custom finishes on request" },
];

// Utility: safeMap ensures we don't call map on undefined
const safeMap = (arr, fn, onMissing = null) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        if (onMissing) onMissing();
        return null;
    }
    return arr.map(fn);
};

export default function LiftBrochureLoop() {
    const [open, setOpen] = React.useState(false);

    // If arrays are missing, log for debug (helps catching "index not found" earlier)
    React.useEffect(() => {
        if (!Array.isArray(HIGHLIGHTS)) console.warn("HIGHLIGHTS array missing or invalid");
        if (!Array.isArray(FEATURES)) console.warn("FEATURES array missing or invalid");
        if (!Array.isArray(SPECS)) console.warn("SPECS array missing or invalid");
        if (!Array.isArray(FINISHES)) console.warn("FINISHES array missing or invalid");
    }, []);

    return (
        <section id="lift-brochure" className="min-h-screen bg-white text-slate-900">
            {/* Navbar */}
            <Header open={open} setOpen={setOpen} />

            <div className="mx-auto max-w-7xl px-4 py-10">
                {/* Hero */}
                <header className="mx-auto max-w-4xl text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">MC-PL1100 Passenger Elevator — German Technology</h1>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Compact, silent, energy-efficient gearless lift for villas, duplexes and low-rise buildings.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-center">
                        <a href={pdfHref} className="inline-flex items-center gap-2 rounded-full bg-red-700 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-red-800 transition" download>
                            <Download className="h-4 w-4" /> Download Brochure (PDF)
                        </a>

                        <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm text-slate-700 hover:shadow transition">
                            <FileText className="h-4 w-4" /> Request Quotation
                        </a>
                    </div>
                </header>

                {/* Highlights (looped) */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {safeMap(
                        HIGHLIGHTS,
                        (h) => (
                            <article key={h.id} className="rounded-2xl p-4 border border-slate-100 bg-white shadow-sm">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/60 text-2xl">●</div>
                                    <div className="min-w-0">
                                        <h4 className="text-sm font-semibold text-slate-900">{h.title}</h4>
                                        <p className="mt-1 text-xs text-slate-600">{h.text}</p>
                                    </div>
                                </div>
                            </article>
                        ),
                        () => (
                            <div key="h-empty" className="text-sm text-slate-500">No highlights available.</div>
                        )
                    )}
                </div>

                {/* Features and Advantages (two columns) */}
                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    <article className="rounded-2xl p-6 bg-white border border-slate-100 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900">Features</h3>
                        <p className="mt-3 text-sm text-slate-600">Key features extracted from brochure.</p>

                        <ul className="mt-4 grid gap-2">
                            {safeMap(FEATURES, (f) => (
                                <li key={f.id} className="flex items-start gap-3 text-sm text-slate-700">
                                    <span className="text-emerald-600 mt-1">●</span>
                                    <span>{f.text}</span>
                                </li>
                            ), () => null)}
                        </ul>
                    </article>

                    <article className="rounded-2xl p-6 bg-white border border-slate-100 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900">Advantages & Compliance</h3>
                        <p className="mt-3 text-sm text-slate-600">Highlights that matter for selection and compliance.</p>

                        <div className="mt-4 grid gap-3">
                            <div className="flex gap-3 items-start">
                                <div className="rounded-full bg-slate-100 p-2">✓</div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-800">Reduced energy consumption</div>
                                    <div className="text-xs text-slate-600">6 kVA optimized drive, LED lights, standby mode</div>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start">
                                <div className="rounded-full bg-slate-100 p-2">⚙️</div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-800">Durable & Reliable</div>
                                    <div className="text-xs text-slate-600">German engineering, ARD rescue</div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Specs (looped into table rows) */}
                <div className="mt-12 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                    <div className="px-6 py-6">
                        <h3 className="text-xl font-bold text-slate-900">Technical Specifications</h3>
                        <p className="mt-2 text-sm text-slate-600">Key parameters and ranges.</p>

                        <div className="mt-4 w-full overflow-auto">
                            <table className="w-full table-auto border-collapse">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-700">Parameter</th>
                                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-700">Value / Range</th>
                                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-700">Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {safeMap(SPECS, (s) => (
                                        <tr key={s.id} className="border-t">
                                            <td className="px-4 py-3 text-sm">{s.param}</td>
                                            <td className="px-4 py-3 text-sm">{s.value}</td>
                                            <td className="px-4 py-3 text-sm">{s.notes}</td>
                                        </tr>
                                    ), () => (
                                        <tr><td className="px-4 py-3 text-sm" colSpan={3}>No specs available.</td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Cabin finishes (looped cards) */}
                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    <article className="rounded-2xl p-6 bg-white border border-slate-100 shadow-sm">
                        <h4 className="text-lg font-bold text-slate-900">Cabin Finishes & Options</h4>
                        <p className="mt-3 text-sm text-slate-600">Available finishes — replace with actual palette from brochure.</p>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {safeMap(FINISHES, (f) => (
                                <div key={f.id} className="rounded-md border border-slate-100 p-3 text-sm text-slate-700">
                                    {f.text}
                                </div>
                            ), () => <div className="text-sm text-slate-500">No finishes listed.</div>)}
                        </div>
                    </article>

                    <article className="rounded-2xl p-6 bg-white border border-slate-100 shadow-sm">
                        <h4 className="text-lg font-bold text-slate-900">Doors, Panels & Accessories</h4>
                        <p className="mt-3 text-sm text-slate-600">Typical accessories and control options.</p>

                        <div className="mt-4 grid gap-3">
                            <div className="text-sm text-slate-700">COP options: Surface mount SS hairline / Black glass touch</div>
                            <div className="text-sm text-slate-700">Display: Dot-matrix or TFT (multi-format)</div>
                            <div className="text-sm text-slate-700">Buttons: Round micro push buttons (Braille optional)</div>
                        </div>
                    </article>
                </div>

                {/* Shaft sizes & contact */}
                <div className="mt-12 grid gap-8 lg:grid-cols-2 items-start">
                    <article className="rounded-2xl p-6 bg-white border border-slate-100 shadow-sm">
                        <h4 className="text-lg font-bold text-slate-900">Shaft & Car Sizes</h4>
                        <p className="mt-3 text-sm text-slate-600">Example: 3100 mm overhead for 2100 mm door height; 3400 mm overhead for glass cabin.</p>

                        <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-slate-700">
                            <li>Entrance Width (EW): 900 to 1200 mm (typical ranges)</li>
                            <li>Multiple car inside width & depth options; see brochure for full tables</li>
                            <li>Pit and overhead dimensions vary with door & cabin choices</li>
                        </ul>
                    </article>

                    <aside id="contact" className="rounded-2xl p-6 bg-white border border-slate-100 shadow-sm">
                        <h4 className="text-lg font-bold text-slate-900">Contact & Support</h4>
                        <p className="mt-3 text-sm text-slate-600">For quotations, site surveys and technical assistance:</p>

                        <div className="mt-4 grid gap-3">
                            <a className="flex items-center gap-3 rounded-lg border border-slate-100 px-4 py-3" href="tel:+917010421860">
                                <Phone className="h-5 w-5 text-slate-700" />
                                <div>
                                    <div className="text-xs text-slate-500">Phone</div>
                                    <div className="font-medium text-slate-800">+91 70104 21860</div>
                                </div>
                            </a>

                            <a className="flex items-center gap-3 rounded-lg border border-slate-100 px-4 py-3" href="mailto:elevator@markcare.in">
                                <FileText className="h-5 w-5 text-slate-700" />
                                <div>
                                    <div className="text-xs text-slate-500">Email</div>
                                    <div className="font-medium text-slate-800">elevator@markcare.in</div>
                                </div>
                            </a>

                            <a className="flex items-center gap-3 rounded-lg border border-slate-100 px-4 py-3" href="https://www.markcare.net" target="_blank" rel="noreferrer">
                                <Globe className="h-5 w-5 text-slate-700" />
                                <div>
                                    <div className="text-xs text-slate-500">Website</div>
                                    <div className="font-medium text-slate-800">www.markcare.net</div>
                                </div>
                            </a>

                            <div className="mt-4 text-sm text-slate-600">
                                <div><strong>Address:</strong> #2, Deivasigamani St Ext, New Colony, Selvam Nagar, Pallikaranai, Chennai - 600100</div>
                            </div>
                        </div>
                    </aside>
                </div>

                <div className="mt-12 text-center text-xs text-slate-500">
                    <p>Content & specifications sourced from brochure file. Always verify local dimensions & compliance before installation.</p>
                </div>
            </div>
        </section>
    );
}
