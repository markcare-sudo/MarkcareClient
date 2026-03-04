// import { useGlobalContext } from "@/context/GlobalContext";
// import { Upload } from "lucide-react";
// import { useState } from "react";

// // Convert object to label-value pairs dynamically
// const renderSpecifications = (specs) => {
//   return Object.entries(specs).map(([key, value]) => {
//     const formattedKey = key
//       .replace(/([A-Z])/g, " $1")
//       .replace(/^./, (str) => str.toUpperCase());

//     return (
//       <div key={key} className="text-sm">
//         <p className="text-gray-400">{formattedKey}</p>
//         <p className="text-white font-medium">{value}</p>
//       </div>
//     );
//   });
// };

// const ProductCard = ({ product }) => {
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     phone: "",
//     email: "",
//   });

//   const { requestCallback } = useGlobalContext();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const enquiryData = {
//       product_name: product?.name,
//       product_price: product?.pricing?.basePrice,
//       phone: formData.phone,
//       email: formData.email,
//     };

//     try {
//       setLoading(true);
//       await requestCallback(enquiryData);
//       setOpen(false);
//       setFormData({ phone: "", email: "" });
//       setLoading(false);
//     } catch (error) {
//       setOpen(false);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="border border-red-600 rounded-md p-4 md:p-6 md:p-10 transition hover:shadow-lg hover:shadow-red-500/20">

//       {/* Top Small Title Bar */}
//       <div className="bg-zinc-800 text-white px-4 py-2 text-sm font-medium mb-6">
//         {product?.name}
//       </div>

//       <div className="grid md:grid-cols-2 gap-10 items-start">

//         {/* IMAGE SECTION (Mobile First) */}
//         <div className="order-1 md:order-2 relative group aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
          
//           {product?.image ? (
//             <img
//               src={product?.image}
//               alt={product?.title || "Product Image"}
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-130"
//             />
//           ) : (
//             <div className="flex flex-col items-center justify-center h-full gap-2 text-gray-600">
//               <Upload size={48} strokeWidth={1} />
//               <span className="text-xs uppercase tracking-widest">
//                 No Image
//               </span>
//             </div>
//           )}

//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

//           {/* Price Overlay */}
//           <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 rounded">
//             <p className="text-green-400 font-semibold">
//               ₹ {product?.pricing?.basePrice?.toLocaleString()}
//             </p>
//             <p className="text-xs text-gray-400">
//               Minimum Order Quantity:{" "}
//               {product?.pricing?.minimumOrderQuantity || 1}{" "}
//               {product?.pricing?.unit || "Piece"}
//             </p>
//           </div>
//         </div>

//         {/* TEXT SECTION */}
//         <div className="order-2 md:order-1">
//           <h2 className="text-2xl md:text-3xl font-semibold text-white">
//             {product?.name}
//           </h2>

//           <p className="text-gray-400 mt-4 leading-relaxed">
//             {product?.description}
//           </p>

//           {/* Specifications */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
//             {renderSpecifications(product?.specifications)}
//           </div>

//           {/* Safety Features */}
//           {product?.safetyFeatures?.length > 0 && (
//             <div className="mt-6">
//               <p className="text-gray-400 text-sm">Safety Features</p>
//               <ul className="list-disc list-inside text-white text-sm mt-2 space-y-1">
//                 {product?.safetyFeatures.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* CTA */}
//           <button
//             onClick={() => setOpen(true)}
//             className="mt-8 px-6 py-3 border border-red-600 text-red-500 rounded-full hover:bg-red-600 hover:text-white transition duration-300"
//           >
//             Request a Call Back
//           </button>
//         </div>
//       </div>

//       {/* SERVICES SECTION */}
//       {product?.services && (
//         <div className="mt-10 border-t border-zinc-800 pt-6">
//           <h3 className="text-white font-semibold mb-4">Our Services</h3>

//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
//             {Object.entries(product?.services).map(([serviceKey, serviceValue]) => {
//               if (!serviceValue?.available) return null;

//               const formattedService = serviceKey
//                 .replace(/([A-Z])/g, " $1")
//                 .replace(/^./, (str) => str.toUpperCase());

//               return (
//                 <div
//                   key={serviceKey}
//                   className="border border-zinc-800 p-4 rounded hover:border-red-600 transition"
//                 >
//                   <p className="text-white font-medium">
//                     {formattedService}
//                   </p>

//                   {serviceValue.packages && (
//                     <ul className="mt-2 text-gray-400">
//                       {serviceValue.packages.map((pkg, index) => (
//                         <li key={index}>
//                           {pkg.type} – ₹ {pkg.yearlyCost.toLocaleString()}/year
//                         </li>
//                       ))}
//                     </ul>
//                   )}

//                   {serviceValue.period && (
//                     <p className="text-gray-400 mt-2">
//                       {serviceValue.period}
//                     </p>
//                   )}

//                   {serviceValue.responseTime && (
//                     <p className="text-gray-400 mt-2">
//                       Response: {serviceValue.responseTime}
//                     </p>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {/* MODAL */}
//       {open && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
//           <div className="bg-zinc-900 w-full max-w-md rounded-lg p-6 relative border border-red-600">

//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-3 right-3 text-gray-400 hover:text-white"
//             >
//               ✕
//             </button>

//             <h3 className="text-xl font-semibold text-white mb-4">
//               Request a Call Back
//             </h3>

//             {/* Product Info */}
//             <div className="bg-black p-4 rounded mb-4 border border-zinc-800">
//               <p className="text-gray-400 text-sm">Product</p>
//               <p className="text-white font-medium">{product?.name}</p>

//               <p className="text-gray-400 text-sm mt-2">Price</p>
//               <p className="text-green-400 font-semibold">
//                 ₹ {product?.pricing?.basePrice?.toLocaleString()}
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Enter Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 bg-black border border-zinc-700 rounded text-white focus:border-red-600 outline-none"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Email Address (optional)"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 bg-black border border-zinc-700 rounded text-white focus:border-red-600 outline-none"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full py-3 bg-red-600 hover:bg-red-700 rounded text-white font-medium transition"
//               >
//                 {loading ? "Submitting..." : "Submit Request"}
//               </button>
//             </form>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductCard;













import { useGlobalContext } from "@/context/GlobalContext";
import { Upload } from "lucide-react";
import { useState } from "react";

// Convert object to label-value pairs safely
const renderSpecifications = (specs = {}) => {
  return Object.entries(specs).map(([key, value]) => {
    if (!value) return null;

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
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
  });

  const { requestCallback } = useGlobalContext();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enquiryData = {
      product_name: product?.name,
      product_price: product?.pricing?.basePrice,
      phone: formData.phone,
      email: formData.email,
    };

    try {
      setLoading(true);
      await requestCallback(enquiryData);
      setOpen(false);
      setFormData({ phone: "", email: "" });
    } catch (error) {
      console.error("Callback request failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const price = product?.pricing?.basePrice;

  return (
    <div className="border border-red-600 rounded-md p-4 md:p-6 md:p-10 transition hover:shadow-lg hover:shadow-red-500/20">

      {/* Top Title Bar */}
      <div className="bg-zinc-800 text-white px-4 py-2 text-sm font-medium mb-6">
        {product?.name}
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* IMAGE SECTION */}
        <div className="order-1 md:order-2 relative group aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900">

          {product?.image ? (
            <img
              src={product.image}
              alt={product?.name || "Product Image"}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-2 text-gray-600">
              <Upload size={48} strokeWidth={1} />
              <span className="text-xs uppercase tracking-widest">
                No Image
              </span>
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

          {/* Price Overlay */}
          {price && (
            <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 rounded">
              <p className="text-green-400 font-semibold">
                ₹ {price.toLocaleString()}
              </p>
              <p className="text-xs text-gray-400">
                Min Qty: {product?.pricing?.minimumOrderQuantity || 1}{" "}
                {product?.pricing?.unit || "Unit"}
              </p>
            </div>
          )}
        </div>

        {/* TEXT SECTION */}
        <div className="order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            {product?.name}
          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed">
            {product?.description}
          </p>

          {/* Specifications */}
          {product?.specifications && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {renderSpecifications(product.specifications)}
            </div>
          )}

          {/* Safety Features */}
          {product?.safetyFeatures?.length > 0 && (
            <div className="mt-6">
              <p className="text-gray-400 text-sm">Safety Features</p>
              <ul className="list-disc list-inside text-white text-sm mt-2 space-y-1">
                {product.safetyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={() => setOpen(true)}
            className="mt-8 px-6 py-3 border border-red-600 text-red-500 rounded-full hover:bg-red-600 hover:text-white transition duration-300"
          >
            Request a Call Back
          </button>
        </div>
      </div>

      {/* SERVICES SECTION */}
      {product?.services && (
        <div className="mt-10 border-t border-zinc-800 pt-6">
          <h3 className="text-white font-semibold mb-4">Our Services</h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {Object.entries(product.services).map(([key, value]) => {
              if (!value?.available) return null;

              const formattedService = key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase());

              return (
                <div
                  key={key}
                  className="border border-zinc-800 p-4 rounded hover:border-red-600 transition"
                >
                  <p className="text-white font-medium">{formattedService}</p>

                  {/* Packages */}
                  {value?.packages && (
                    <ul className="mt-2 text-gray-400 space-y-1">
                      {value.packages.map((pkg, i) => (
                        <li key={i}>
                          {pkg.type} – ₹ {pkg.yearlyCost.toLocaleString()}/year
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Includes */}
                  {value?.includes && (
                    <ul className="mt-2 text-gray-400 list-disc list-inside">
                      {value.includes.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {value?.period && (
                    <p className="text-gray-400 mt-2">
                      Warranty: {value.period}
                    </p>
                  )}

                  {value?.responseTime && (
                    <p className="text-gray-400 mt-2">
                      Response: {value.responseTime}
                    </p>
                  )}

                  {value?.emergencySupport && (
                    <p className="text-green-500 mt-2">
                      24/7 Emergency Support Available
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MODAL */}
      {open && (
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
              <p className="text-gray-400 text-sm">Product</p>
              <p className="text-white font-medium">{product?.name}</p>

              {price && (
                <>
                  <p className="text-gray-400 text-sm mt-2">Price</p>
                  <p className="text-green-400 font-semibold">
                    ₹ {price.toLocaleString()}
                  </p>
                </>
              )}
            </div>

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
                placeholder="Enter Email Address (optional)"
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
      )}
    </div>
  );
};

export default ProductCard;