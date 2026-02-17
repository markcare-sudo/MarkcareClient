import React, { useState } from "react";
import { MapPin, Menu, Phone, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LOGOS } from "@/constants/branding";
import { CITIES } from "@/utils/data";
import Button from "./ReusableComponents/Button";

const Header = ({ cities = CITIES }) => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const pathParts = pathname.split("/").filter(Boolean);

  // Detect city from URL
  const cityFromPath =
    pathParts.length > 0 && pathParts[0] !== "services"
      ? pathParts[0]
      : null;

  // Build base service path
  const baseServicePath = cityFromPath
    ? `/${cityFromPath}/services`
    : `/services`;

  // Switch city while keeping current page
  const getCityPath = (selectedCity) => {
    const parts = pathname.split("/").filter(Boolean);

    // Remove existing city
    if (cityFromPath) {
      parts.shift();
    }

    return `/${selectedCity}/${parts.join("/")}`;
  };

  const serviceItems = [
    { name: "Residential Elevators", slug: "elevators" },
    { name: "Water Treatment Plant", slug: "water-treatment-plant" },
    { name: "Water Softening Plant", slug: "water-softening-plant" },
    { name: "Sewage Treatment Plant", slug: "sewage-treatment-plant" },
    { name: "Reverse Osmosis Plant", slug: "reverse-osmosis-plant" },
    { name: "RO Water Purifiers", slug: "ro-water-purifiers" },
    { name: "Diesel Generators", slug: "diesel-generators" },
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

          {/* Clickable Cities */}
          <div className="hidden sm:flex items-center gap-2 flex-wrap">
            <MapPin size={14} />
            {cities.map((c) => (
              <Link
                key={c}
                to={getCityPath(c.toLowerCase())}
                className="text-xs bg-white/10 px-2 py-0.5 rounded-full hover:bg-white/20 transition"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 text-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          <Link to="/" className="flex items-center gap-3">
            <img
              src={LOGOS.Mark_Care_Logo}
              alt="Mark Care Logo"
              className="w-12 h-auto rounded-md object-cover"
            />
            <div className="leading-tight">
              <div className="font-semibold">Mark Care Pvt. Ltd.</div>
              <div className="text-xs text-slate-400">
                Services at Residential • Industrial Solutions
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">

            <Link to="/" className="hover:text-red-500">
              Home
            </Link>

            <Link to="/about-us" className="hover:text-red-500">
              About Us
            </Link>

            {/* Products & Services */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-red-500">
                Product & Services <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full left-0 mt-4 w-56 bg-white text-black rounded-xl shadow-xl overflow-hidden"
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

            <Link to="/projects" className="hover:text-red-500">
              Projects
            </Link>

            <Link to="/blogs" className="hover:text-red-500">
              Blogs
            </Link>

            <Link to="/contact-us">
              <Button className="rounded-2xl">Get Quote</Button>
            </Link>

          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
