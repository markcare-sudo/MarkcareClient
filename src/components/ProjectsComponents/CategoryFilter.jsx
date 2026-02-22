
// CategoryFilter.jsx
import React from "react";
import { motion } from "framer-motion";

const CategoryFilter = ({ categories, selected, setSelected }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((item, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelected(item.name)}
          className={`px-4 cursor-pointer py-2 rounded border text-sm transition-all duration-300
            ${selected === item.name
              ? "bg-red-600 text-white border-red-600"
              : "border-red-500 text-white hover:bg-red-600"
            }`}
        >
          {item.name}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;