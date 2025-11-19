import React from "react";
import { MapPin, Menu, Phone, X } from "lucide-react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { LOGOS } from "@/constants/branding";
import { CITIES } from "@/utils/data";

const Header = ({ open, setOpen, cities = CITIES }) => {
  return (
    <>
      {/* Top info bar */}
      <div className="bg-red-700 text-white text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4" aria-hidden />
            <a href="tel:+919884927676" className="hover:underline">+91 98849 27676</a>
            <span className="opacity-60">|</span>
            <a href="tel:+917010421860" className="hover:underline">+91 70104 21860</a>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" aria-hidden />
            <div className="hidden sm:flex gap-2 flex-wrap">
              {cities.map((c) => (
                <span key={c} className="px-2 py-0.5 rounded-full bg-white/10 text-white/90 text-xs">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={LOGOS.Mark_Care_Logo}
              alt="Mark Care Logo"
              className="w-12 h-auto rounded-md object-cover"
            />
            <div className="leading-tight">
              <div className="font-semibold text-slate-900">Mark Care Pvt. Ltd.</div>
              <div className="text-xs text-slate-500">Services at Residential • Industrial Solutions</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            {/* section anchors */}
            <div className="flex gap-6 items-center">
              <Link to="/" className="text-slate-600 hover:text-slate-900">Home</Link>
              <Link to="/about-us" className="text-slate-600 hover:text-slate-900">About Us</Link>
              <Link to="/services" className="text-slate-600 hover:text-slate-900">Services</Link>
              <Link to="/projects" className="text-slate-600 hover:text-slate-900">Our Projects</Link>
              <Link to="/contact-us" className="text-slate-600 hover:text-slate-900">Contact Us</Link>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact-us" aria-label="Get Quote">
              <Button className="rounded-2xl">Get Quote</Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md text-slate-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={!!open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col">
              <Link to="/services" className="py-2" onClick={() => setOpen(false)}>Services</Link>
              <Link to="/about-us" className="py-2" onClick={() => setOpen(false)}>About Us</Link>
              <Link to="/contact-us" className="py-2" onClick={() => setOpen(false)}>Contact Us</Link>
              <Link to="/projects" className="py-2" onClick={() => setOpen(false)}>Our Projects</Link>
              <Link to="/clients" className="py-2" onClick={() => setOpen(false)}>Our Clients</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
