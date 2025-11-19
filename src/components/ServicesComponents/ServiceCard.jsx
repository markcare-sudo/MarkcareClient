// src/components/services/ServiceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
      {service.heroImage && (
        <div className="relative h-44 w-full overflow-hidden rounded-t-2xl">
          <img
            src={service.heroImage}
            alt={service.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {service.badge && (
            <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
              {service.badge}
            </div>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
            {service.category}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">
            {service.name}
          </h3>
        </div>

        <p className="text-sm text-slate-600 line-clamp-3">
          {service.shortDescription}
        </p>

        {service.idealFor && (
          <ul className="mt-2 flex flex-wrap gap-2">
            {service.idealFor.slice(0, 3).map((item) => (
              <li
                key={item}
                className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-2">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-700"
          >
            View service details
            <span className="ml-1 text-base">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
