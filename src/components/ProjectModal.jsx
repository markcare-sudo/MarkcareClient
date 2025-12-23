// import React, { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";

// export default function ProjectModal({ open, onClose, client, project }) {
//     useEffect(() => {
//         if (!open) return;
//         const onKey = (e) => { if (e.key === "Escape") onClose(); };
//         window.addEventListener("keydown", onKey);
//         return () => window.removeEventListener("keydown", onKey);
//     }, [open, onClose]);

//     return (
//         <AnimatePresence>
//             {open && (
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="fixed inset-0 z-[90] grid place-items-center bg-black/50 p-4"
//                     aria-modal="true"
//                     role="dialog"
//                 >
//                     <motion.div
//                         initial={{ y: 24, opacity: 0, scale: 0.98 }}
//                         animate={{ y: 0, opacity: 1, scale: 1 }}
//                         exit={{ y: 12, opacity: 0 }}
//                         transition={{ type: "spring", stiffness: 300, damping: 28 }}
//                         className="w-full max-w-3xl rounded-2xl bg-neutral-900 p-6 shadow-2xl border border-white/10"
//                     >
//                         <div className="flex items-start justify-between gap-4">
//                             <div>
//                                 <h3 className="text-lg font-semibold text-white">{project.heading}</h3>
//                                 <p className="mt-1 text-sm text-white/70">{client.name} • {client.subtitle}</p>
//                             </div>
//                             <button onClick={onClose} className="rounded-md p-2 text-white/80 hover:bg-white/5">
//                                 <X className="h-5 w-5" />
//                             </button>
//                         </div>

//                         <div className="mt-4 grid gap-4 md:grid-cols-2">
//                             <div>
//                                 {/* If you have images per project extend the data model; fallback to client logo */}
//                                 <img
//                                     src={client.logo}
//                                     alt={`${client.name} logo`}
//                                     className="h-44 w-full rounded-lg object-cover border border-white/10"
//                                     loading="lazy"
//                                 />
//                             </div>
//                             <div>
//                                 <p className="text-sm text-white/80">{project.description}</p>
//                                 <div className="mt-4 flex flex-col gap-2">
//                                     <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
//                                         <div>
//                                             <p className="text-xs text-white/60">Scope / Output</p>
//                                             <p className="text-sm font-medium text-white">{project.count}</p>
//                                         </div>
//                                         <a
//                                             href={client.link}
//                                             target="_blank"
//                                             rel="noreferrer"
//                                             className="inline-flex items-center gap-2 rounded-md bg-sky-400 px-3 py-1 text-xs font-semibold text-neutral-900"
//                                         >
//                                             Client Site
//                                         </a>
//                                     </div>
//                                     <div className="text-xs text-white/60">
//                                         <strong>Notes:</strong> This entry can include timeline, technologies used, or maintenance details.
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="mt-6 flex justify-end gap-2">
//                             <button onClick={onClose} className="rounded-md border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5">
//                                 Close
//                             </button>
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }


// import React, { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";

// export default function ProjectModal({ open, onClose, client, project }) {
//     useEffect(() => {
//         if (!open) return;
//         const onKey = (e) => e.key === "Escape" && onClose();
//         window.addEventListener("keydown", onKey);
//         return () => window.removeEventListener("keydown", onKey);
//     }, [open, onClose]);

//     return (
//         <AnimatePresence>
//             {open && (
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="fixed inset-0 z-[90] grid place-items-center bg-black/70 p-4"
//                 >
//                     <motion.div
//                         initial={{ scale: 0.95, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         exit={{ scale: 0.95, opacity: 0 }}
//                         transition={{ duration: 0.25 }}
//                         className="w-full max-w-3xl rounded-2xl border border-[#E53935]/40 bg-neutral-900 p-6 shadow-2xl"
//                     >
//                         {/* Header */}
//                         <div className="flex items-start justify-between">
//                             <div>
//                                 <h3 className="text-lg font-semibold text-white">
//                                     {project.heading}
//                                 </h3>
//                                 <p className="mt-1 text-sm text-white/70">
//                                     {client.name} • {client.subtitle}
//                                 </p>
//                             </div>
//                             <button
//                                 onClick={onClose}
//                                 className="rounded-md p-2 text-white/70 hover:bg-white/10"
//                             >
//                                 <X className="h-5 w-5" />
//                             </button>
//                         </div>

//                         {/* Content */}
//                         <div className="mt-5 grid gap-4 md:grid-cols-2">
//                             <img
//                                 src={client.logo}
//                                 alt={client.name}
//                                 className="h-44 w-full rounded-xl object-cover border border-[#E53935]/30"
//                             />
//                             <div>
//                                 <p className="text-sm text-white/80">{project.description}</p>
//                                 <div className="mt-4 flex flex-col gap-2">
//                                     <div className="rounded-lg bg-[#E53935]/10 p-3 border border-[#E53935]/30">
//                                         <p className="text-xs text-white/60">Output / Capacity</p>
//                                         <p className="text-sm font-medium text-[#E53935]">
//                                             {project.count}
//                                         </p>
//                                     </div>
//                                     <a
//                                         href={client.link}
//                                         target="_blank"
//                                         rel="noreferrer"
//                                         className="inline-flex w-fit items-center gap-2 rounded-md bg-[#E53935] px-4 py-2 text-xs font-semibold text-white hover:bg-[#C62828]"
//                                     >
//                                         Visit Client Website
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="mt-6 flex justify-end">
//                             <button
//                                 onClick={onClose}
//                                 className="rounded-md border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }







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
