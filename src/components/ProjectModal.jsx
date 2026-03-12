import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ open, onClose, client, project }) {
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[90] grid place-items-center bg-black/40 p-4"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="w-full max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-xl"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-[#E53935]">
                                    {project.heading}
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    {client.name} • {client.subtitle}
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-44 w-full rounded-xl border border-gray-200 object-cover"
                            />
                            <div>
                                <p className="text-sm text-gray-700">{project.description}</p>
                                <div className="mt-4 flex flex-col gap-2">
                                    <div className="rounded-lg border border-[#E53935]/40 bg-[#E53935]/10 p-3">
                                        <p className="text-xs text-gray-600">Output / Capacity</p>
                                        <p className="text-sm font-medium text-[#E53935]">
                                            {project.count}
                                        </p>
                                    </div>
                                    <a
                                        href={client.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex w-fit items-center gap-2 rounded-md bg-[#E53935] px-4 py-2 text-xs font-semibold text-white hover:bg-[#C62828]"
                                    >
                                        Visit Client Website
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={onClose}
                                className="rounded-md border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
