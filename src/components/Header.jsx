import React, { useState, useMemo } from "react";
import { MapPin, Menu, Phone, X, ChevronDown } from "lucide-react";
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

  // --- Grouped Data ---
  const domesticServices = [
    { name: "Residential Elevators", slug: "elevators" },
    { name: "RO Water Purifiers", slug: "ro-water-purifiers" },
    // { name: "Smart Home Automation", slug: "smart-home-automation" },
    { name: "Solar Power Systems", slug: "solar-power-systems" },
    { name: "AC Systems", slug: "ac-systems" },
    { name: "Refrigerators", slug: "refrigerators" },
    { name: "Washing Machine", slug: "washing-machine" },
    { name: "TV", slug: "tv" },
    { name: "Geysers", slug: "geysers" },
  ];

  const commercialServices = [
    { name: "Water Treatment Plant", slug: "water-treatment-plant" },
    { name: "Sewage Treatment Plant", slug: "sewage-treatment-plant" },
    { name: "Effluent Treatment Plant", slug: "effluent-treatment-plant" },
    { name: "Diesel Generators", slug: "diesel-generators" },
    { name: "Solar Walls", slug: "solar-walls" },
    // { name: "CCTV & Security Systems", slug: "cctv-security-systems" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-red-700 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <Phone size={14} />
            <a href="tel:+919884927676">+91 98849 27676</a>
            <span className="hidden sm:inline">|</span>
            <a href="tel:+917010421860" className="hidden sm:inline">+91 70104 21860</a>
          </div>

          <div className="hidden sm:flex items-center gap-2 flex-wrap">
            <MapPin size={14} />
            {cities.map((c) => (
              <Link
                key={c}
                to={getCityPath(c.toLowerCase())}
                className="text-xs bg-white/10 px-2 py-0.5 rounded-full hover:bg-black/40 transition"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/90 text-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo Section */}
          <Link to={basePath || "/"} className="flex items-center gap-3">
            <img src={LOGOS.Mark_Care_Logo} alt="Logo" className="w-12 h-auto rounded-md" />
            <div>
              <div className="font-semibold text-base">Mark Care Pvt. Ltd.</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-tighter">Residential • Industrial Solutions</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            <Link to={basePath || "/"} className="hover:text-red-500 transition">Home</Link>
            <Link to={`${basePath}/about-us`} className="hover:text-red-500 transition">About</Link>

            {/* Products & Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-red-500 py-2">
                Products & Services <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {desktopServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-blue-950 text-white rounded shadow-2xl overflow-hidden flex border border-gray-100"
                  >
                    {/* Domestic Column */}
                    <div className="flex-1 border-r border-gray-100">
                      <div className="bg-red-50/50 px-5 py-3 text-[11px] font-bold text-white-700 uppercase tracking-widest border-b border-red-100">
                        Domestic Solutions
                      </div>
                      <div className="p-2 grid grid-cols-1">
                        {domesticServices.map((item) => (
                          <Link
                            key={item.slug}
                            to={`${baseServicePath}/${item.slug}`}
                            className="px-4 py-2 text-[13px] hover:bg-slate-500 hover:text-black-600 rounded-md transition"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Commercial Column */}
                    <div className="flex-1">
                      <div className="bg-slate-50 px-5 py-3 text-[11px] font-bold text-slate-700 uppercase tracking-widest border-b border-slate-100">
                        Commercial Solutions
                      </div>
                      <div className="p-2 grid grid-cols-1">
                        {commercialServices.map((item) => (
                          <Link
                            key={item.slug}
                            to={`${baseServicePath}/${item.slug}`}
                            className="px-4 py-2 text-[13px] hover:bg-slate-500 hover:text-black-600 rounded-md transition"
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

            <Link to={`${basePath}/projects`} className="hover:text-red-500 transition">Projects</Link>
            <Link to={`${basePath}/blogs`} className="hover:text-red-500 transition">Blogs</Link>

            <Link to={`${basePath}/contact-us`}>
              <Button className="rounded-full px-6">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-zinc-950 border-t border-white/10 px-6 py-8 flex flex-col gap-5 overflow-y-auto max-h-[85vh]"
            >
              <Link className="text-lg font-medium" to={basePath || "/"} onClick={() => setMobileOpen(false)}>Home</Link>
              <Link className="text-lg font-medium" to={`${basePath}/about-us`} onClick={() => setMobileOpen(false)}>About Us</Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex justify-between items-center w-full text-lg font-medium text-red-500"
                >
                  Products & Services
                  <ChevronDown size={20} className={mobileServicesOpen ? "rotate-180" : ""} />
                </button>

                {mobileServicesOpen && (
                  <div className="mt-4 flex flex-col gap-6 pl-4 border-l border-white/10">
                    {/* Domestic */}
                    <div>
                      <p className="text-[10px] uppercase text-gray-500 mb-3 font-black tracking-widest">Domestic</p>
                      <div className="grid grid-cols-1 gap-3">
                        {domesticServices.map((item) => (
                          <Link key={item.slug} to={`${baseServicePath}/${item.slug}`} className="text-sm text-gray-300" onClick={() => setMobileOpen(false)}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Commercial */}
                    <div>
                      <p className="text-[10px] uppercase text-gray-500 mb-3 font-black tracking-widest">Commercial</p>
                      <div className="grid grid-cols-1 gap-3">
                        {commercialServices.map((item) => (
                          <Link key={item.slug} to={`${baseServicePath}/${item.slug}`} className="text-sm text-gray-300" onClick={() => setMobileOpen(false)}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link className="text-lg font-medium" to={`${basePath}/projects`} onClick={() => setMobileOpen(false)}>Projects</Link>
              <Link className="text-lg font-medium" to={`${basePath}/blogs`} onClick={() => setMobileOpen(false)}>Blogs</Link>

              <Link to={`${basePath}/contact-us`} onClick={() => setMobileOpen(false)} className="pt-4">
                <Button className="w-full py-4 rounded-xl text-lg">Contact Us</Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;