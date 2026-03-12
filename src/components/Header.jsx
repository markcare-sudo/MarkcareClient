import React, { useState, useMemo, useEffect } from "react";
import { MapPin, Menu, Phone, X, ChevronDown, Sparkles, Building2, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LOGOS } from "@/constants/branding";
import Button from "./ReusableComponents/Button";

const Header = ({ cities = [] }) => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathParts = pathname.split("/").filter(Boolean);
  const cityFromPath = useMemo(() => {
    if (pathParts.length === 0) return null;
    const first = pathParts[0].toLowerCase();
    return cities.map(c => c.toLowerCase()).includes(first) ? first : null;
  }, [pathname, cities]);

  const basePath = cityFromPath ? `/${cityFromPath}` : "";
  const baseServicePath = `${basePath}/services`;

  const getCityPath = (selectedCity) => {
    const parts = pathname.split("/").filter(Boolean);
    if (cityFromPath) parts.shift();
    return `/${selectedCity}/${parts.join("/")}`.replace(/\/$/, "");
  };

  const domesticServices = [
    { name: "Residential Elevators", slug: "elevators-lifts" },
    { name: "RO Water Purifiers", slug: "ro-water-purifiers" },
    { name: "Solar Power Systems", slug: "solar-power-systems" },
    { name: "AC Systems & HVAC", slug: "ac-systems" },
    { name: "TV & Appliances", slug: "tv-installation-service" },
    { name: "Kitchen Solutions", slug: "kitchen-chimney-service" },
  ];

  const commercialServices = [
    { name: "WTP / ETP / STP Plants", slug: "water-treatment-plant" },
    { name: "Water Softening", slug: "water-softening-plant" },
    { name: "Industrial RO Plants", slug: "industrial-ro-systems" },
    { name: "Diesel Generators", slug: "diesel-generators" },
    { name: "Commercial Lifts", slug: "elevators-lifts" },
    { name: "Centralized HVAC", slug: "ac-systems" },
  ];

  return (
    <>
      {/* Top Bar - Optimized for Mobile Wrapping */}
      <div className="bg-red-600 text-white text-[10px] md:text-[11px] font-medium border-b border-red-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-2 gap-2">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
            <a href="tel:+919884927676" className="flex items-center gap-1.5 whitespace-nowrap">
              <Phone size={11} fill="currentColor" />
              <span>+91 98849 27676</span>
            </a>
            <span className="hidden sm:inline opacity-30">|</span>
            <div className="flex items-center gap-2">
              <MapPin size={11} className="shrink-0" />
              <div className="flex flex-wrap justify-center gap-x-2">
                {cities.map((c) => (
                  <Link 
                    key={c} 
                    to={getCityPath(c.toLowerCase())} 
                    className={`transition-all ${cityFromPath === c.toLowerCase() ? "font-bold underline underline-offset-4" : "opacity-70"}`}
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <Sparkles size={12} className="text-yellow-400" />
            <span className="uppercase tracking-widest opacity-80">Certified Industrial Standards</span>
          </div>
        </div>
      </div>

      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
          ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-2 md:py-3" 
          : "bg-black/80 py-4 md:py-6"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center text-white">
          
          <Link to={basePath || "/"} className="flex items-center gap-2 md:gap-3 group shrink-0">
            <img src={LOGOS.Mark_Care_Logo} alt="Logo" className="w-9 md:w-11 h-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-xl tracking-tight leading-none uppercase">MARK CARE</span>
              <span className="text-[8px] md:text-[9px] text-red-500 font-bold uppercase tracking-widest mt-1">Pvt. Ltd.</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-[12px] font-bold uppercase tracking-widest">
            {["Home", "About Us", "Projects", "Gallery", "Blogs"].map((item) => (
              <Link key={item} to={item === "Home" ? (basePath || "/") : `${basePath}/${item.toLowerCase().replace(" ", "-")}`} className="hover:text-red-500 transition-colors">
                {item}
              </Link>
            ))}

            <div className="relative" onMouseEnter={() => setDesktopServicesOpen(true)} onMouseLeave={() => setDesktopServicesOpen(false)}>
              <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                PRODUCTS & SERVICES <ChevronDown size={14} className={`${desktopServicesOpen ? "rotate-180" : ""} transition-transform`} />
              </button>
              <AnimatePresence>
                {desktopServicesOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full right-0 mt-4 w-[500px] bg-neutral-900 border border-white/10 p-6 rounded-xl shadow-2xl flex gap-8">
                    <div className="flex-1">
                      <p className="text-red-500 text-[16px] mb-4 border-b border-white/5 pb-2">DOMESTIC</p>
                      {domesticServices.map(s => <Link key={s.slug} to={`${baseServicePath}/${s.slug}`} className="block py-1.5 text-neutral-400 hover:text-white transition-colors">{s.name}</Link>)}
                    </div>
                    <div className="flex-1">
                      <p className="text-blue-500 text-[16px] mb-4 border-b border-white/5 pb-2">INDUSTRIAL</p>
                      {commercialServices.map(s => <Link key={s.slug} to={`${baseServicePath}/${s.slug}`} className="block py-1.5 text-neutral-400 hover:text-white transition-colors">{s.name}</Link>)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link to={`${basePath}/contact-us`} className="hidden sm:block">
              <Button className="rounded-lg px-6 py-2 bg-red-600 hover:bg-white hover:text-red-600 transition-all font-bold text-[10px] uppercase">Get Quote</Button>
            </Link>
            <button className="lg:hidden text-white" onClick={() => setMobileOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </nav>

        {/* MOBILE MENU - FIXED SCROLLING */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut" }}
              className="fixed inset-0 bg-neutral-950 z-[100] lg:hidden flex flex-col"
            >
              {/* Mobile Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/5">
                <img src={LOGOS.Mark_Care_Logo} alt="Logo" className="w-10" />
                <button onClick={() => setMobileOpen(false)} className="text-white">
                  <X size={32} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
                {["Home", "About Us", "Projects", "Gallery", "Blogs"].map((item) => (
                  <Link 
                    key={item} 
                    to={item === "Home" ? (basePath || "/") : `${basePath}/${item.toLowerCase().replace(" ", "-")}`} 
                    onClick={() => setMobileOpen(false)}
                    className="block text-3xl font-bold tracking-tighter"
                  >
                    {item}
                  </Link>
                ))}

                <div className="space-y-4">
                  <button 
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-2xl font-bold text-red-600 uppercase"
                  >
                    PRODUCTS & SERVICES <ChevronDown size={24} className={`${mobileServicesOpen ? "rotate-180" : ""} transition-transform`} />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden space-y-6 pl-4 border-l border-white/10">
                        <div>
                          <p className="text-red-500 text-[10px] font-bold mb-3 tracking-widest uppercase">Domestic</p>
                          <div className="grid gap-3">
                            {domesticServices.map(s => <Link key={s.slug} to={`${baseServicePath}/${s.slug}`} onClick={() => setMobileOpen(false)} className="text-neutral-400 text-lg">{s.name}</Link>)}
                          </div>
                        </div>
                        <div>
                          <p className="text-blue-500 text-[10px] font-bold mb-3 tracking-widest uppercase">Industrial</p>
                          <div className="grid gap-3">
                            {commercialServices.map(s => <Link key={s.slug} to={`${baseServicePath}/${s.slug}`} onClick={() => setMobileOpen(false)} className="text-neutral-400 text-lg">{s.name}</Link>)}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Fixed Bottom CTA */}
              <div className="p-6 border-t border-white/5 bg-neutral-950">
                <Link to={`${basePath}/contact-us`} onClick={() => setMobileOpen(false)}>
                  <Button className="w-full py-4 text-lg font-bold">Contact Expert</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;