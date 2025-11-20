export const ServiceHero = ({ title, subtitle, bgImage }) => {
    return (
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
    );
}