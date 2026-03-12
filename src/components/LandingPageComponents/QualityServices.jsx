import { useState } from "react";
import { SERVICES } from "@/constants/servicesData";
import ServiceCard from "./ServiceCard";
import CallbackModal from "../CallbackModal";

const ServicesSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  return (
    <section className="py-10 text-white">

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <h2 className="text-3xl font-semibold mb-2">
          Our Services
        </h2>

        <p className="text-gray-400 mb-10">
          Comprehensive, standardized, and reliable – tailored for homes,
          businesses, and industry.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.icon}
              title={service.name}
              onClick={handleServiceClick}
            />
          ))}
        </div>

      </div>

      {/* Popup */}
      <CallbackModal
        open={open}
        setOpen={setOpen}
        service={selectedService}
      />

    </section>
  );
};

export default ServicesSection;