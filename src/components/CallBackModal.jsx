import { useState } from "react";
import { useGlobalContext } from "@/context/GlobalContext";

const CallbackModal = ({ open, setOpen, service }) => {
  const { requestCallback } = useGlobalContext();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enquiryData = {
      product_name: service,
      phone: formData.phone,
      email: formData.email,
    };

    try {
      setLoading(true);
      await requestCallback(enquiryData);

      setOpen(false);
      setFormData({ phone: "", email: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="bg-zinc-900 w-full max-w-md rounded-lg p-6 relative border border-red-600">

        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold text-white mb-4">
          Request a Call Back
        </h3>

        <div className="bg-black p-4 rounded mb-4 border border-zinc-800">
          <p className="text-gray-400 text-sm">Service</p>
          <p className="text-white font-medium">{service}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-zinc-700 rounded text-white focus:border-red-600 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email (optional)"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-zinc-700 rounded text-white focus:border-red-600 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-red-600 hover:bg-red-700 rounded text-white font-medium transition"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default CallbackModal;