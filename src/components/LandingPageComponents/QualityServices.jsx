import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { SERVICES } from "@/constants/servicesData";
import ServiceCard from "./ServiceCard";
import CallbackModal from "@/components/CallBackModal";

// Refined animation variants for a smoother "pop-in" effect
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.05, // Faster stagger for a professional feel
      delayChildren: 0.2 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    },
  },
};

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  // Memoized handler to prevent unnecessary re-renders
  const handleServiceClick = useCallback((service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  }, []);

  return (
    <section className="relative py-20 lg:py-28 bg-neutral-950 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Our <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-neutral-400 mt-4 text-lg leading-relaxed">
              Comprehensive, standardized, and reliable – tailored solutions 
              for modern homes, businesses, and industrial infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="h-px w-24 bg-neutral-800 mb-4" />
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-semibold">
              Quality Guaranteed
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id || index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.2, ease: "easeOut" } 
              }}
              className="group h-full"
            >
              <div className="h-full transition-shadow duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-2xl">
                <ServiceCard
                  Icon={service.icon}
                  title={service.name}
                  // Assuming ServiceCard handles the click; passing name or whole object
                  onClick={() => handleServiceClick(service.name)}
                  className="bg-neutral-900/50 border-neutral-800 hover:border-orange-500/50 transition-colors"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Integration */}
      <CallbackModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        service={selectedService}
      />
    </section>
  );
};

export default ServicesSection;