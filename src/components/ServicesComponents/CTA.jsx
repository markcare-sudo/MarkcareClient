import { Link } from "react-router-dom";

export const CTA = () => {
    return (
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
    );
}