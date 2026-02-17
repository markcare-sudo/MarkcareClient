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
  { label: "Contact Us", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 relative">
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
              { icon: <Instagram size={18} />, link: "#" },
              { icon: <Facebook size={18} />, link: "#" },
              { icon: <Twitter size={18} />, link: "#" },
              { icon: <Linkedin size={18} />, link: "#" },
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
              href="tel:+919884927676"
              className="flex items-center gap-2 hover:text-red-500 transition"
            >
              <Phone size={16} /> +91 98849 27676
            </a>

            <a
              href="tel:+917010421860"
              className="flex items-center gap-2 hover:text-red-500 transition"
            >
              <Phone size={16} /> +91 70104 21860
            </a>

            <a
              href="mailto:santhosh@markcare.in"
              className="flex items-center gap-2 hover:text-red-500 transition"
            >
              <Mail size={16} /> santhosh@markcare.in
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
        <div>
          <h4 className="font-semibold text-lg mb-4">Office Address</h4>

          <p className="text-sm text-gray-400 leading-relaxed flex gap-2">
            <MapPin size={16} className="mt-1 shrink-0" />
            100, 2nd floor, 5th Block, 5th Cross Rd, KHB Colony,
            5th Block, Koramangala, Bengaluru, Karnataka 560095
          </p>

          <Link
            to="/contact"
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
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Markcare. All Rights Reserved.
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
