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

  // ✅ Validate city properly
  const cityFromPath = useMemo(() => {
    if (pathParts.length === 0) return null;
    const first = pathParts[0].toLowerCase();
    return cities.map(c => c.toLowerCase()).includes(first) ? first : null;
  }, [pathname, cities]);

  // ✅ Build base paths dynamically
  const basePath = cityFromPath ? `/${cityFromPath}` : "";
  const baseServicePath = `${basePath}/services`;

  const getCityPath = (selectedCity) => {
    const parts = pathname.split("/").filter(Boolean);

    // remove existing city if exists
    if (cityFromPath) parts.shift();

    return `/${selectedCity}/${parts.join("/")}`.replace(/\/$/, "");
  };

  const serviceItems = [
    { name: "Residential Elevators", slug: "elevators" },
    { name: "Water Treatment Plant", slug: "water-treatment-plant" },
    { name: "Water Softening Plant", slug: "water-softening-plant" },
    { name: "Sewage Treatment Plant", slug: "sewage-treatment-plant" },
    { name: "Reverse Osmosis Plant", slug: "reverse-osmosis-plant" },
    { name: "RO Water Purifiers", slug: "ro-water-purifiers" },
    { name: "Diesel Generators", slug: "diesel-generators" },
    { name: "Solar Power Systems", slug: "solar-power-systems" },
    { name: "AC Systems", slug: "ac-systems" },
    { name: "Refrigerators", slug: "refrigerators" },
    { name: "UPS Systems", slug: "ups-systems" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-red-700 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <Phone size={14} />
            <a href="tel:+919884927676">+91 98849 27676</a>
            <span>|</span>
            <a href="tel:+917010421860">+91 70104 21860</a>
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
      <header className="sticky top-0 z-50 backdrop-blur-sm text-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link to={basePath || "/"} className="flex items-center gap-3">
            <img
              src={LOGOS.Mark_Care_Logo}
              alt="Mark Care Logo"
              className="w-12 h-auto rounded-md"
            />
            <div>
              <div className="font-semibold">Mark Care Pvt. Ltd.</div>
              <div className="text-xs text-slate-400">
                Residential • Industrial Solutions
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">

            <Link to={basePath || "/"} className="hover:text-red-500">Home</Link>
            <Link to={`${basePath}/about-us`} className="hover:text-red-500">About</Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-red-500">
                Products & Services <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {desktopServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-white text-black rounded shadow-xl overflow-hidden"
                  >
                    {serviceItems.map((item) => (
                      <Link
                        key={item.slug}
                        to={`${baseServicePath}/${item.slug}`}
                        className="block px-4 py-3 hover:bg-red-50 hover:text-red-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to={`${basePath}/projects`} className="hover:text-red-500">Projects</Link>
            <Link to={`${basePath}/blogs`} className="hover:text-red-500">Blogs</Link>

            <Link to={`${basePath}/contact-us`}>
              <Button className="rounded-full">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setMobileServicesOpen(false);
            }}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-black border-t border-gray-800 px-4 py-4 flex flex-col gap-4"
            >
              <Link to={basePath || "/"} onClick={() => setMobileOpen(false)}>Home</Link>
              <Link to={`${basePath}/about-us`} onClick={() => setMobileOpen(false)}>About</Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex justify-between w-full"
                >
                  Products & Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="mt-2 pl-4 flex flex-col gap-2">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.slug}
                        to={`${baseServicePath}/${item.slug}`}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="text-gray-400 hover:text-red-500"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to={`${basePath}/projects`} onClick={() => setMobileOpen(false)}>Projects</Link>
              <Link to={`${basePath}/blogs`} onClick={() => setMobileOpen(false)}>Blogs</Link>

              <Link to={`${basePath}/contact-us`} onClick={() => setMobileOpen(false)}>
                <Button className="w-full rounded-full">Contact Us</Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
