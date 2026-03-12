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
      {/* Dynamic Top Bar - Optimized for Responsive Wrap */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white text-[10px] md:text-[11px] font-medium transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 md:px-6 py-2 gap-y-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="tel:+919884927676" className="flex items-center gap-1.5 hover:text-white/80 transition group">
              <Phone size={12} className="group-hover:rotate-12 transition-transform" />
              <span className="whitespace-nowrap">+91 98849 27676</span>
            </a>
            <span className="hidden sm:inline opacity-30">|</span>
            <div className="flex items-center gap-2">
              <MapPin size={12} className="shrink-0" />
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {/* Fixed: Removed .slice() to show all cities */}
                {cities.map((c) => (
                  <Link 
                    key={c} 
                    to={getCityPath(c.toLowerCase())} 
                    className={`hover:underline transition-opacity whitespace-nowrap ${
                      cityFromPath === c.toLowerCase() ? "opacity-100 font-bold" : "opacity-70 hover:opacity-100"
                    }`}
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

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-3" 
          : "bg-black/40 py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
          
          {/* Logo Section */}
          <Link to={basePath || "/"} className="flex items-center gap-3 group shrink-0">
            <div className="relative">
                <img src={LOGOS.Mark_Care_Logo} alt="Logo" className="w-10 md:w-12 h-auto rounded-xl ring-2 ring-red-500/20 group-hover:ring-red-500 transition-all" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base md:text-xl tracking-tight leading-none">MARK CARE</span>
              <span className="text-[9px] md:text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">Pvt. Ltd.</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[12px] xl:text-[13px] font-semibold uppercase tracking-wider">
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
                SERVICES <ChevronDown size={14} className={`transition-transform duration-300 ${desktopServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {desktopServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-neutral-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex"
                  >
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] mb-4 tracking-widest uppercase">
                        <Home size={14} /> Domestic
                      </div>
                      <div className="space-y-1">
                        {domesticServices.map((item) => (
                          <Link key={item.slug} to={`${baseServicePath}/${item.slug}`} className="block px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 p-6 border-l border-white/10">
                      <div className="flex items-center gap-2 text-blue-500 font-bold text-[10px] mb-4 tracking-widest uppercase">
                        <Building2 size={14} /> Industrial
                      </div>
                      <div className="space-y-1">
                        {commercialServices.map((item) => (
                          <Link key={item.slug} to={`${baseServicePath}/${item.slug}`} className="block px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
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
            <Link to={`${basePath}/contact-us`} className="hidden sm:block">
              <Button className="rounded-full px-4 md:px-8 py-2 md:py-3 bg-red-600 hover:bg-white hover:text-red-600 transition-all duration-300 font-bold text-[10px] md:text-xs uppercase tracking-widest">
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
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 top-0 bg-black z-[100] lg:hidden p-8 flex flex-col pt-24"
            >
                <button onClick={() => setMobileOpen(false)} className="absolute top-8 right-8 text-white"><X size={32}/></button>
              <div className="space-y-6">
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
                
                <div className="h-px bg-white/10 my-4" />
                
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex justify-between items-center w-full text-2xl font-bold text-red-500"
                >
                  Products & Services
                  <ChevronDown className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="overflow-hidden">
                        <div className="grid grid-cols-1 gap-4 py-4 pl-4 border-l border-red-500/30">
                            {domesticServices.concat(commercialServices).map(s => (
                                <Link key={s.slug} className="text-neutral-300 text-lg" to={`${baseServicePath}/${s.slug}`} onClick={() => setMobileOpen(false)}>{s.name}</Link>
                            ))}
                        </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to={`${basePath}/contact-us`} onClick={() => setMobileOpen(false)} className="mt-auto">
                <Button className="w-full py-4 rounded-xl text-lg font-bold">Contact Expert</Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;