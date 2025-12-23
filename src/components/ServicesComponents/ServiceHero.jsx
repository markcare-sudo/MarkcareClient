export const ServiceHero = ({ title, subtitle, bgImage }) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#E53935]/30 bg-[#E53935]/10 px-3 py-1 text-xs font-medium text-[#E53935]">
        Our Services
      </span>

      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Comprehensive technical services trusted, certified, and compliant
      </h2>

      <p className="mt-3 text-sm sm:text-base text-slate-600">
        From residential maintenance to large-scale industrial turnkey projects,
        we deliver reliable outcomes with clear accountability, safety standards,
        and complete documentation at every stage.
      </p>
    </div>
  );
};
