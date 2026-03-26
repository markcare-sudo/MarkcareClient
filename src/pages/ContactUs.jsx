import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { CONTACT_IMAGES } from "@/constants/branding";
import { useGlobalContext } from "@/context/GlobalContext";
import SEO from "@/components/SEO";

export default function EnquireSection() {
  const { requestCallback } = useGlobalContext();

  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    product_name: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await requestCallback(formData);

      setFormData({ phone: "", email: "" });
    } catch (error) {
      console.error("Error requesting callback:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact MarkCare | Get in Touch for Engineering & Facility Services"
        description="Contact MarkCare for comprehensive RO, WTP, STP, ETP, solar power systems, AC services, generators and lift solutions in India."
      />
      <section className="relative min-h-screen text-white overflow-hidden flex items-center justify-center">

        {/* Red Gradient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.35),transparent_40%)]" />

        <div className="relative max-w-6xl mx-auto px-4 py-6 w-full grid lg:grid-cols-2 gap-12 items-center justify-center">

          {/* LEFT CONTENT */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-4"
            >
              <ArrowLeft className="text-gray-400" />
              <h2 className="text-2xl md:text-3xl font-medium tracking-wide">
                Enquire with us
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="relative flex justify-center items-center"
            >
              <img
                src={CONTACT_IMAGES.CONTACT_US}
                alt="Contact Illustration"
                className="max-w-md w-full object-contain"
              />
            </motion.div>
        </div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-900 to-gray-800 
                       border border-gray-800 rounded-2xl p-8
                       hover:border-red-500 transition-all duration-300"
          >

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter phone Number"
              className="w-full bg-transparent border border-gray-700 
                         rounded-lg px-4 py-3 text-sm text-white
                         focus:outline-none focus:border-red-500
                         transition mb-5"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full bg-transparent border border-gray-700 
                         rounded-lg px-4 py-3 text-sm text-white
                         focus:outline-none focus:border-red-500
                         transition mb-5"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700
                         py-3 rounded-lg font-medium
                         transition-all duration-300 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </motion.div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919884927676"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6"
      >
        <div className="bg-green-500 hover:scale-110 transition 
                        w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-7 h-7"
          />
        </div>
      </a>
    </section>
    </>
  );
}