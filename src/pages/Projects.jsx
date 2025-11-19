import React, { useState } from "react";
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
        <section id="projects" className="min-h-screen bg-white text-slate-900">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
                
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#E53935]/30 bg-[#E53935]/10 px-3 py-1 text-xs text-[#E53935] font-medium">
                        Our Clients
                    </span>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1A1A1A] sm:text-4xl">
                        Projects & Installations
                    </h2>
                    <p className="mt-3 text-base text-gray-600">
                        Delivering end-to-end solutions in HVAC, RO, STP, and industrial projects across healthcare, education, hospitality, and manufacturing sectors.
                    </p>
                </div>

                {/* Grid */}
                <motion.div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {clients.map((client, i) => (
                        <ProjectCard key={i} client={client} onOpenProject={openProject} />
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
    );
}
