// Footer.jsx
import React from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Product & Services", href: "/#services" },
  { label: "Our Project", href: "/#projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact us", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 relative">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* LEFT SECTION */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/assets/Markcare Logo2.png"
              alt="Mark Care Logo"
              className="w-12 h-12 rounded-md"
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
            <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
              <span className="text-xs">IG</span>
            </div>
            <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition">
              <span className="text-xs">FB</span>
            </div>
            <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition">
              <span className="text-xs">TW</span>
            </div>
            <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition">
              <span className="text-xs">IN</span>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {QUICK_LINKS.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="hover:text-red-500 transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact us</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <a href="tel:+919884927676" className="block hover:text-red-500">
              +91 98849 27676
            </a>
            <a href="tel:+917010421860" className="block hover:text-red-500">
              +91 70104 21860
            </a>
          </div>

          <h4 className="font-semibold text-lg mt-6 mb-2">Mail</h4>
         <div className="flex flex-col gap-2">
           <a
            href="mailto:santhosh@markcare.in"
            className="text-sm text-gray-400 hover:text-red-500"
          >
            santhosh@markcare.in
          </a>
           <a
            href="mailto:hr@markcare.in"
            className="text-sm text-gray-400 hover:text-red-500"
          >
            hr@markcare.in
          </a>
         </div>
        </div>

        {/* ADDRESS + CTA */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Office Address</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            100, 2nd floor, 5th Block, 5th Cross Rd, KHB Colony,
            5th Block, Koramangala, Bengaluru, Karnataka 560095
          </p>

          {/* Contact Button */}
          <button className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full flex items-center gap-2 transition">
            Contact us
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Markcare. All Right Reserved.
      </div>

      {/* Scroll To Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-10 h-10 border border-red-500 text-red-500 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
}
