// FounderMessage.jsx
import { ABOUT_IMAGES } from "@/constants/branding";
import { Quote } from "lucide-react";

const DEFAULT_DATA = {
  photo: ABOUT_IMAGES.Founder, // <-- replace with your image
  name: "Founder’s Message",
  title: "SLR Infracon Engineers",
  paragraphs: [
    "Thank you for your interest in SLR Infracon Engineers. From day one, our focus has been simple: deliver turnkey interiors and modular furniture solutions that are elegant, efficient, and on time—across corporate, commercial, and residential spaces.",
    "We’ve built a structured team spanning management, design, supervision, and field execution—supported by consultants for specialized scopes like HVAC, electrification and structured cabling, networking, glazing, ceilings, acoustics, civil, sanitary services, and fire-fighting. Our in-house design facility enables comprehensive space planning tailored to each client’s vision and budget.",
    "What sets us apart is a commitment to quality, excellent service, and total customer commitment. We measure success not only by project handovers, but by long-term trust and repeat partnerships."
  ],
  highlights: [
    "Turnkey interiors & modular furniture",
    "In-house design & space planning",
    "Quality, service, and on-time delivery",
  ],
  contactNote: "For profiles and capability decks, see our downloads below."
};

export default function FounderMessage({ data = DEFAULT_DATA }) {
  const d = data;

  return (
    <section className="w-full bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
            {d.name}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">{d.title}</p>
        </div>

        {/* Card */}
        <div className="mt-8 grid gap-8 md:grid-cols-5">
          {/* Image (full width on mobile; auto height) */}
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-black/5">
              <img
                src={d.photo}
                alt="Founder"
                className="block w-full h-auto select-none"
                loading="eager"
                decoding="async"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-3">
            <div className="rounded-xl bg-white p-5 sm:p-6 shadow-md ring-1 ring-black/5">
              <div className="flex items-center gap-2 text-neutral-700">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-neutral-100">
                  <Quote className="h-5 w-5" />
                </span>
                <h3 className="text-base sm:text-lg font-semibold">A note from the Founder</h3>
              </div>

              <div className="mt-4 space-y-3 text-[13.5px] sm:text-sm md:text-base leading-7 text-neutral-800">
                {d.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Highlights */}
              {d.highlights?.length > 0 && (
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {d.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-[12.5px] text-orange-900"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}

              {d.contactNote && (
                <p className="mt-4 text-[12.5px] text-neutral-500">{d.contactNote}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
