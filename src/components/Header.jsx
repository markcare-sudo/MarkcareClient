import React, { useState, useMemo, useEffect } from "react";
import { MapPin, Menu, Phone, X, ChevronDown, Sparkles, Building2, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LOGOS } from "@/constants/branding";
import { CITIES } from "@/utils/data";
import Button from "./ReusableComponents/Button";

const Header = ({ cities = CITIES }) => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for professional glassmorphism
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
      {/* Dynamic Top Bar */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white text-[11px] font-medium transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-1.5">
          <div className="flex items-center gap-4">
            <a href="tel:+919884927676" className="flex items-center gap-1.5 hover:text-white/80 transition group">
              <Phone size={12} className="group-hover:rotate-12 transition-transform" />
              <span>+91 98849 27676</span>
            </a>
            <span className="hidden sm:inline opacity-30">|</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin size={12} />
              <span>Available in:</span>
            </span>
            <div className="flex gap-2">
              {cities.slice(0, 3).map((c) => (
                <Link key={c} to={getCityPath(c.toLowerCase())} className="hover:underline opacity-80 hover:opacity-100">
                  {c}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Sparkles size={12} className="text-yellow-400" />
            <span className="uppercase tracking-widest opacity-80">Certified Industrial Standards</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3" 
          : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
          
          {/* Logo Section */}
          <Link to={basePath || "/"} className="flex items-center gap-3 group">
            <div className="relative">
                <img src={LOGOS.Mark_Care_Logo} alt="Logo" className="w-10 md:w-12 h-auto rounded-xl ring-2 ring-red-500/20 group-hover:ring-red-500 transition-all" />
                <div className="absolute -inset-1 bg-red-500/20 blur opacity-0 group-hover:opacity-100 transition rounded-xl" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl tracking-tight leading-none">MARK CARE</span>
              <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">Pvt. Ltd.</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-[13px] font-semibold uppercase tracking-wider">
            {["Home", "About Us", "Projects", "Gallery", "Blogs"].map((item) => (
              <Link 
                key={item} 
                to={item === "Home" ? (basePath || "/") : `${basePath}/${item.toLowerCase().replace(" ", "-")}`} 
                className="relative group py-2"
              >
                <span className="group-hover:text-red-500 transition-colors">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full" />
              </Link>
            ))}

            {/* Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <button className="flex items-center gap-1.5 group py-2 hover:text-red-500 transition-colors">
                PRODUCTS & SERVICES <ChevronDown size={14} className={`transition-transform duration-300 ${desktopServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {desktopServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.98 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[650px] bg-neutral-950 border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex"
                  >
                    {/* Domestic Column */}
                    <div className="flex-1 p-6 bg-gradient-to-b from-white/[0.02] to-transparent">
                      <div className="flex items-center gap-2 text-red-500 font-bold text-xs mb-6 tracking-widest uppercase">
                        <Home size={14} /> Domestic
                      </div>
                      <div className="space-y-1">
                        {domesticServices.map((item) => (
                          <Link
                            key={item.slug}
                            to={`${baseServicePath}/${item.slug}`}
                            className="block px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Commercial Column */}
                    <div className="flex-1 p-6 border-l border-white/10">
                      <div className="flex items-center gap-2 text-blue-500 font-bold text-xs mb-6 tracking-widest uppercase">
                        <Building2 size={14} /> Industrial
                      </div>
                      <div className="space-y-1">
                        {commercialServices.map((item) => (
                          <Link
                            key={item.slug}
                            to={`${baseServicePath}/${item.slug}`}
                            className="block px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link to={`${basePath}/contact-us`} className="hidden md:block">
              <Button className="rounded-full px-8 bg-red-600 hover:bg-white hover:text-red-600 transition-all duration-300 font-bold text-xs uppercase tracking-widest shadow-lg shadow-red-600/20">
                Get Quote
              </Button>
            </Link>
            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition" 
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 top-[110px] md:top-[120px] bg-black z-40 lg:hidden p-8 flex flex-col gap-6"
            >
              <div className="space-y-4">
                {["Home", "About Us", "Projects", "Gallery", "Blogs"].map((item) => (
                   <Link 
                   key={item}
                   className="block text-3xl font-bold tracking-tighter hover:text-red-500 transition-colors" 
                   to={item === "Home" ? (basePath || "/") : `${basePath}/${item.toLowerCase().replace(" ", "-")}`} 
                   onClick={() => setMobileOpen(false)}
                 >
                   {item}
                 </Link>
                ))}
              </div>

              <div className="h-px bg-white/10 my-4" />

              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex justify-between items-center w-full text-2xl font-bold text-red-500"
                >
                  Products & Services
                  <ChevronDown className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                    {mobileServicesOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="overflow-hidden"
                    >
                        <div className="grid grid-cols-1 gap-6 py-6 pl-4 border-l border-red-500/30 mt-4">
                            <div>
                                <h5 className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-4">Domestic</h5>
                                {domesticServices.map(s => (
                                    <Link key={s.slug} className="block py-2 text-neutral-300" to={`${baseServicePath}/${s.slug}`} onClick={() => setMobileOpen(false)}>{s.name}</Link>
                                ))}
                            </div>
                            <div>
                                <h5 className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-4">Industrial</h5>
                                {commercialServices.map(s => (
                                    <Link key={s.slug} className="block py-2 text-neutral-300" to={`${baseServicePath}/${s.slug}`} onClick={() => setMobileOpen(false)}>{s.name}</Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    )}
                </AnimatePresence>
              </div>

              <Link to={`${basePath}/contact-us`} onClick={() => setMobileOpen(false)} className="mt-auto">
                <Button className="w-full py-5 rounded-2xl text-xl font-bold">Contact Expert</Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;