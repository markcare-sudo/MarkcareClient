// ProjectsSection.jsx
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import CategoryFilter from "@/components/ProjectsComponents/CategoryFilter";
import { PROJECT_CATEGORIES } from "@/constants/projects";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    PROJECT_CATEGORIES[0].name
  );

  const activeCategory = PROJECT_CATEGORIES.find(
    (cat) => cat.name === selectedCategory
  );

  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <SEO
        title="Our Projects | MarkCare Engineering & Facility Solutions Across India"
        description="Explore MarkCare’s completed projects in RO plants, water treatment systems (WTP, STP, ETP), solar power, HVAC, lifts and facility engineering services delivered across multiple cities in India."
      />

      <section className="max-w-7xl mx-auto text-white px-4 py-10 md:py-16">
        <div className="text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            Projects & Installations
          </motion.h2>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg mb-12"
          >
            Delivering end-to-end solutions in HVAC, RO, STP, and industrial
            infrastructure across healthcare, education, hospitality, and
            manufacturing sectors.
          </motion.p>
        </div>

        <CategoryFilter
          categories={PROJECT_CATEGORIES}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />

        <h2 className="text-xl md:text-2xl font-semibold mt-10">
          {selectedCategory}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 mt-8">
          {activeCategory.projects.length > 0 ? (
            activeCategory.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          ) : (
            <p className="text-gray-500">
              No projects available in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;