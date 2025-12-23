import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CLIENTS } from "@/utils/data";
import ProjectModal from "@/components/ProjectModal";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection({ clients = CLIENTS }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeClient, setActiveClient] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  const openProject = (client, project) => {
    setActiveClient(client);
    setActiveProject(project);
    setModalOpen(true);
  };

  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>
          Projects & Installations | RO, HVAC, STP & Industrial Projects | MarkCare
        </title>

        <meta
          name="description"
          content="Explore MarkCare’s completed projects and installations across HVAC, RO plants, STP, ETP and industrial engineering sectors for healthcare, education, hospitality and manufacturing clients."
        />

        <meta
          name="keywords"
          content="MarkCare Projects, HVAC Projects India, RO Plant Installations, STP ETP Projects, Industrial Engineering Projects, Facility Management Case Studies"
        />

        <meta name="author" content="MarkCare" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="MarkCare Projects | HVAC, RO, STP & Industrial Installations"
        />
        <meta
          property="og:description"
          content="Real-world installations and engineering projects delivered by MarkCare across multiple industries."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://markcare.co.in/projects" />
        <meta
          property="og:image"
          content="https://markcare.co.in/og/markcare-projects.png"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MarkCare Projects | Engineering & Facility Installations"
        />
        <meta
          name="twitter:description"
          content="View MarkCare’s HVAC, RO, STP & industrial project portfolio across India."
        />
        <meta
          name="twitter:image"
          content="https://markcare.co.in/og/markcare-projects.png"
        />
      </Helmet>
      {/* ================================================== */}

      <section id="projects" className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E53935]/30 bg-[#E53935]/10 px-3 py-1 text-xs text-[#E53935] font-medium">
              Our Clients
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Projects & Installations
            </h2>

            <p className="mt-3 text-base text-gray-600">
              Delivering end-to-end solutions in HVAC, RO, STP, and industrial
              projects across healthcare, education, hospitality, and
              manufacturing sectors.
            </p>
          </div>

          {/* Grid */}
          <motion.div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, i) => (
              <ProjectCard
                key={i}
                client={client}
                onOpenProject={openProject}
              />
            ))}
          </motion.div>
        </div>

        <ProjectModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          client={activeClient || {}}
          project={activeProject || { heading: "", description: "", count: "" }}
        />
      </section>
    </>
  );
}
