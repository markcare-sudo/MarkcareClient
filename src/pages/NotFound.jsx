// StatusPage.jsx
import { useEffect } from "react";
import { ArrowLeft, Home, Hammer } from "lucide-react";

export default function StatusPage({
  homeHref = "/",
  title = "Something exciting is cooking!",
  subtitle = "This page is currently under construction or hasn't been found yet."
}) {
  useEffect(() => {
    document.title = "Coming Soon | Markcare";
  }, []);

  return (
    <section className="min-h-screen w-full bg-neutral-950 flex flex-col items-center justify-center text-neutral-100 px-4">
      <div className="mx-auto max-w-3xl text-center">
        
        {/* Animated Icon */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-neutral-900 p-6 ring-1 ring-neutral-800">
            <Hammer className="h-12 w-12 text-orange-500 animate-pulse" />
          </div>
        </div>

        {/* Big Status Text */}
        <span className="inline-block bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-transparent text-6xl sm:text-8xl font-black tracking-tighter">
          COMING <br className="sm:hidden" /> SOON
        </span>

        <h1 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-white">
          {title}
        </h1>
        
        <p className="mt-4 text-neutral-400 max-w-md mx-auto leading-relaxed">
          {subtitle} We're working hard to bring Markcare's digital experience to life.
        </p>

        {/* Simplified Actions */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-6 py-3 text-sm font-medium transition-all hover:bg-neutral-800 hover:border-neutral-700"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> 
            Go back
          </button>

          <a
            href={homeHref}
            className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition-all hover:bg-orange-500 hover:scale-105 active:scale-95"
          >
            <Home className="h-4 w-4" /> 
            Return Home
          </a>
        </div>

        {/* Footer Brand */}
        <p className="mt-16 text-xs font-medium tracking-widest text-neutral-600 uppercase">
          Markcare Services • Domestic & Commercial
        </p>
      </div>
    </section>
  );
}