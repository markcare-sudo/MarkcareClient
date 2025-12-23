import { motion } from 'framer-motion';

export const CaseStudyCard = ({ study }) => {
  return (
    <motion.article
      className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white/90 p-4 md:p-6 shadow-sm transition-all hover:-translate-y-1.5 hover:border-red-500/50 hover:shadow-xl"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
          {study.serviceLabel}
        </span>
        {study.location && (
          <span className="text-xs font-medium text-slate-500">
            {study.location}
          </span>
        )}
      </div>

      <h3 className="text-md md:text-lg font-semibold text-slate-900">
        {study.title}
      </h3>

      {study.clientType && (
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
          {study.clientType}
        </p>
      )}

      <p className="mt-3 text-sm text-slate-700">
        {study.challenge}
      </p>

      <div className="mt-4 grid gap-3 text-sm text-slate-700">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Solution
          </h4>
          <ul className="mt-1 list-disc space-y-1 pl-4">
            {study.solutionPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Results
          </h4>
          <ul className="mt-1 list-disc space-y-1 pl-4">
            {study.resultsPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {study.tags && study.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <CaseStudyTag key={tag} label={tag} />
          ))}
        </div>
      )}
    </motion.article>
  );
}

function CaseStudyTag({ label }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
      {label}
    </span>
  );
}
