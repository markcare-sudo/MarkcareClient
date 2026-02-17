import { useState } from "react";

// Convert object to label-value pairs dynamically
const renderSpecifications = (specs) => {
  return Object.entries(specs).map(([key, value]) => {
    const formattedKey = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

    return (
      <div key={key} className="text-sm">
        <p className="text-gray-400">{formattedKey}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    );
  });
};

const ProductCard = ({ product }) => {
   const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      product: product.name,
      price: product.pricing?.basePrice,
      ...formData,
    });

    setOpen(false);
  };
  return (
    <div className="border border-red-600 rounded-md bg-black p-4 md:p-6 md:p-10 transition hover:shadow-lg hover:shadow-red-500/20">
      
      {/* Top Small Title Bar */}
      <div className="bg-zinc-800 text-white px-4 py-2 text-sm font-medium mb-6">
        {product.name}
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT SECTION */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            {product.name}
          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed">
            {product.description}
          </p>

          {/* Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {renderSpecifications(product.specifications)}
          </div>

          {/* Safety Features */}
          {product.safetyFeatures?.length > 0 && (
            <div className="mt-6">
              <p className="text-gray-400 text-sm">Safety Features</p>
              <ul className="list-disc list-inside text-white text-sm mt-2 space-y-1">
                {product.safetyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Button */}
          <button onClick={() => setOpen(true)} className="mt-8 px-6 py-3 border border-red-600 text-red-500 rounded-full hover:bg-red-600 hover:text-white transition duration-300">
            Request a Call Back
          </button>
        </div>

        {/* RIGHT SECTION (Image + Price) */}
        <div className="relative">
          <div className="bg-zinc-900 rounded-md h-[320px] flex items-center justify-center text-gray-500">
            product Image
          </div>

          <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 rounded">
            <p className="text-green-400 font-semibold">
              ₹ {product.pricing?.basePrice?.toLocaleString()}
            </p>
            <p className="text-xs text-gray-400">
              Minimum Order Quantity:{" "}
              {product.pricing?.minimumOrderQuantity || 1}{" "}
              {product.pricing?.unit || "Piece"}
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      {product.services && (
        <div className="mt-10 border-t border-zinc-800 pt-6">
          <h3 className="text-white font-semibold mb-4">Our Services</h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {Object.entries(product.services).map(([serviceKey, serviceValue]) => {
              if (!serviceValue?.available) return null;

              const formattedService = serviceKey
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase());

              return (
                <div
                  key={serviceKey}
                  className="border border-zinc-800 p-4 rounded hover:border-red-600 transition"
                >
                  <p className="text-white font-medium">
                    {formattedService}
                  </p>

                  {/* AMC Packages */}
                  {serviceValue.packages && (
                    <ul className="mt-2 text-gray-400">
                      {serviceValue.packages.map((pkg, index) => (
                        <li key={index}>
                          {pkg.type} – ₹ {pkg.yearlyCost.toLocaleString()}/year
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Warranty */}
                  {serviceValue.period && (
                    <p className="text-gray-400 mt-2">
                      {serviceValue.period}
                    </p>
                  )}

                  {/* Response Time */}
                  {serviceValue.responseTime && (
                    <p className="text-gray-400 mt-2">
                      Response: {serviceValue.responseTime}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Modal */}
{open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
    <div className="bg-zinc-900 w-full max-w-md rounded-lg p-6 relative border border-red-600">

      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-white"
      >
        ✕
      </button>

      <h3 className="text-xl font-semibold text-white mb-4">
        Request a Call Back
      </h3>

      {/* Product Info */}
      <div className="bg-black p-4 rounded mb-4 border border-zinc-800">
        <p className="text-gray-400 text-sm">Product</p>
        <p className="text-white font-medium">{product.name}</p>

        <p className="text-gray-400 text-sm mt-2">Price</p>
        <p className="text-green-400 font-semibold">
          ₹ {product.pricing?.basePrice?.toLocaleString()}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-black border border-zinc-700 rounded text-white focus:border-red-600 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-black border border-zinc-700 rounded text-white focus:border-red-600 outline-none"
        />

        <button
          type="submit"
          className="w-full py-3 bg-red-600 hover:bg-red-700 rounded text-white font-medium transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default ProductCard