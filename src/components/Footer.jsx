// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Product & Services", path: "/services/elevators" },
  { label: "Our Projects", path: "/projects" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact Us", path: "/contact-us" },
  { label: "Terms & Conditions", path: "/terms-&-conditions" },
  { label: "Privacy Policy", path: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className=" text-white border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* LEFT SECTION */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/assets/Markcare Logo2.png"
              alt="Mark Care Logo"
              className="w-12 h-12 rounded-md object-cover"
            />
            <div>
              <div className="font-semibold text-lg">Mark Care</div>
              <div className="text-sm text-gray-400">
                Services at Home • Industrial Solutions
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            High-quality, standardized & reliable services at your door and for your facilities.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[
              { icon: <Instagram size={18} />, link: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fmarkcare_official%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExclg5VzM5NmJUSXN3U0NnRnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR404paEsQ8sUbm9Z4NE7xCA120xYYd_wQXsu37SPOznre5NmeCXYw-dgRSxdQ_aem_2TFYRmlyY7btrCQ7v8z83g&h=AT4Yi3o1deaZTJ4Ej8pmBf_xdU51PC_mgHNJtjLZRZgoAcQyttDU1lCItyg5WJtwUFQUBk5pjhlH198TExMeRUTiELFcHw7_nJ_jKh_a8lLUTCOh6ALcXDLirGf0FQWdPjnQtThHiINN2TseFqzqOQ" },
              { icon: <Facebook size={18} />, link: "https://www.facebook.com/profile.php?id=100091296894011#" },
              { icon: <Linkedin size={18} />, link: "https://in.linkedin.com/company/markcare" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center
                 transition-all duration-300
                 hover:bg-red-600 hover:scale-110
                 active:scale-95 active:bg-red-700
                 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {item.icon}
              </a>
            ))}
          </div>

        </div>

        {/* QUICK LINKS */}
        <ul className="space-y-3 text-sm text-gray-400">
          {QUICK_LINKS.map((link, i) => (
            <li key={i}>
              <Link
                to={link.path}
                className="flex items-center gap-2 group transition-all duration-300
                   hover:text-red-500
                   active:text-red-500 active:translate-x-1"
              >
                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition-all duration-300
                     group-hover:opacity-100
                     group-active:opacity-100"
                />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>


        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Us</h4>

          <div className="space-y-3 text-sm text-gray-400">
            <a
              href="tel:+917204974477"
              className="flex items-center gap-2 hover:text-red-500 transition"
            >
              <Phone size={16} /> +91 72049 74477
            </a>

            <a
              href="mailto:director@markcare.in"
              className="flex items-center gap-2 hover:text-red-500 transition"
            >
              <Mail size={16} /> director@markcare.in
            </a>

            <a
              href="mailto:hr@markcare.in"
              className="flex items-center gap-2 hover:text-red-500 transition"
            >
              <Mail size={16} /> hr@markcare.in
            </a>
          </div>
        </div>

        {/* ADDRESS + CTA */}
        {/* ADDRESS + CTA */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Office Address</h4>

          <div className="space-y-4 text-sm text-gray-400">

            {/* Head Office */}
            <div className="flex gap-2">
              <MapPin size={16} className="mt-1 shrink-0 text-red-500" />
              <div>
                <p className="font-medium text-white">Head Office – Bengaluru</p>
                <p>
                  100, 2nd Floor, 5th Block, 5th Cross Rd, KHB Colony,
                  Koramangala, Bengaluru, Karnataka 560095
                </p>
              </div>
            </div>

            {/* Branch Cities */}
            {["Chennai", "Delhi", "Hyderabad", "Mumbai"].map((city, i) => (
              <div key={i} className="flex gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <p>{city}</p>
              </div>
            ))}

          </div>

          <Link
            to="/contact-us"
            className="mt-6 inline-flex bg-red-600 px-6 py-3 rounded-full
            items-center gap-2
            transition-all duration-300
            hover:bg-red-700 hover:scale-105
            active:scale-95 active:bg-red-800"
          >
            Contact Us
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-slate-800 bg-slate-900 py-8 px-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} MarkCare. All legal rights reserved.</p>
          <p className="mt-2 text-slate-600">This legal document outlines standard operational privacy practices for residential and industrial facility utility management.</p>
        </div>
      </div>

      {/* Scroll To Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-10 h-10 border border-red-500 text-red-500 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
}
