// import React from "react";
// import { motion } from "framer-motion";

// export default function ProjectCard({ client, onOpenProject }) {
//     return (
//         <motion.article
//             layout
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             whileHover={{ translateY: -6, boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
//             transition={{ duration: 0.28, ease: "easeOut" }}
//             className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/3 to-transparent p-5"
//         >
//             <div className="flex items-start gap-4">
//                 <img src={client.logo} alt={`${client.name} logo`} className="h-14 w-14 rounded-lg object-cover border border-white/10" loading="lazy" />
//                 <div className="flex-1">
//                     <h4 className="text-base font-semibold text-white">{client.name}</h4>
//                     <p className="mt-1 text-sm text-white/70">{client.subtitle}</p>
//                 </div>
//                 <div className="hidden sm:flex items-center gap-2">
//                     <a href={client.link} target="_blank" rel="noreferrer" className="text-xs text-white/60 hover:text-white">Visit</a>
//                 </div>
//             </div>

//             <div className="mt-4 grid gap-2">
//                 {client.projects.slice(0, 2).map((p, idx) => (
//                     <div key={idx} className="rounded-md bg-white/5 p-3">
//                         <div className="flex items-center justify-between">
//                             <div>
//                                 <p className="text-sm font-medium text-white">{p.heading}</p>
//                                 <p className="mt-1 text-xs text-white/60">{p.count}</p>
//                             </div>
//                             <button
//                                 onClick={() => onOpenProject(client, p)}
//                                 className="ml-4 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90 hover:bg-white/6"
//                             >
//                                 View
//                             </button>
//                         </div>
//                         <p className="mt-2 text-xs text-white/70 line-clamp-3">{p.description}</p>
//                     </div>
//                 ))}
//             </div>

//             {client.projects.length > 2 && (
//                 <div className="mt-4 flex items-center justify-between text-xs text-white/60">
//                     <span>{client.projects.length} projects</span>
//                     <button onClick={() => onOpenProject(client, client.projects[0])} className="text-sky-300 hover:underline">View more</button>
//                 </div>
//             )}
//         </motion.article>
//     );
// }




// import React from "react";
// import { motion } from "framer-motion";

// export default function ClientCard({ client, onOpenProject }) {
//     return (
//         <motion.article
//             layout
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             whileHover={{
//                 translateY: -6,
//                 boxShadow: "0 10px 30px rgba(229,57,53,0.35)",
//             }}
//             transition={{ duration: 0.25, ease: "easeOut" }}
//             className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5"
//         >
//             {/* Header */}
//             <div className="flex items-start gap-4">
//                 <img
//                     src={client.logo}
//                     alt={`${client.name} logo`}
//                     className="h-14 w-14 rounded-lg object-cover border border-[#E53935]/40"
//                     loading="lazy"
//                 />
//                 <div className="flex-1">
//                     <h4 className="text-base font-semibold text-white">{client.name}</h4>
//                     <p className="mt-1 text-sm text-white/70">{client.subtitle}</p>
//                 </div>
//                 <div className="hidden sm:flex items-center gap-2">
//                     <a
//                         href={client.link}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="text-xs text-[#E53935] hover:text-white font-medium"
//                     >
//                         Visit
//                     </a>
//                 </div>
//             </div>

//             {/* Projects List */}
//             <div className="mt-4 grid gap-2">
//                 {client.projects.slice(0, 2).map((p, idx) => (
//                     <div
//                         key={idx}
//                         className="rounded-md bg-white/5 p-3 border border-transparent hover:border-[#E53935]/40 transition"
//                     >
//                         <div className="flex items-center justify-between">
//                             <div>
//                                 <p className="text-sm font-medium text-white">{p.heading}</p>
//                                 <p className="mt-1 text-xs text-white/60">{p.count}</p>
//                             </div>
//                             <button
//                                 onClick={() => onOpenProject(client, p)}
//                                 className="ml-4 inline-flex items-center gap-2 rounded-md border border-[#E53935]/40 bg-[#E53935]/10 px-3 py-1 text-xs text-[#E53935] hover:bg-[#E53935]/20 transition"
//                             >
//                                 View
//                             </button>
//                         </div>
//                         <p className="mt-2 text-xs text-white/70 line-clamp-3">
//                             {p.description}
//                         </p>
//                     </div>
//                 ))}
//             </div>

//             {client.projects.length > 2 && (
//                 <div className="mt-4 flex items-center justify-between text-xs text-white/60">
//                     <span>{client.projects.length} projects</span>
//                     <button
//                         onClick={() => onOpenProject(client, client.projects[0])}
//                         className="text-[#E53935] hover:underline"
//                     >
//                         View more
//                     </button>
//                 </div>
//             )}
//         </motion.article>
//     );
// }




import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ client, onOpenProject }) {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                translateY: -5,
                boxShadow: "0 10px 25px rgba(229,57,53,0.15)",
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5 hover:border-[#E53935]/60 transition"
        >
            {/* Header */}
            <div className="flex items-start gap-4">
                <img
                    src={client.logo}
                    alt={client.name}
                    className="h-14 w-14 rounded-lg object-cover border border-[#E53935]/30"
                />
                <div className="flex-1">
                    <h4 className="text-base font-semibold text-[#1A1A1A]">
                        {client.name}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">{client.subtitle}</p>
                </div>
                <a
                    href={client.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden sm:inline text-xs font-medium text-[#E53935] hover:underline"
                >
                    Visit
                </a>
            </div>

            {/* Projects */}
            <div className="mt-4 grid gap-2">
                {client.projects.slice(0, 2).map((p, idx) => (
                    <div
                        key={idx}
                        className="rounded-md border border-gray-100 bg-white p-3 hover:border-[#E53935]/40 transition"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-[#1A1A1A]">{p.heading}</p>
                                <p className="mt-1 text-xs text-gray-600">{p.count}</p>
                            </div>
                            <button
                                onClick={() => onOpenProject(client, p)}
                                className="ml-4 inline-flex items-center gap-2 rounded-md border border-[#E53935]/40 bg-[#E53935]/10 px-3 py-1 text-xs font-medium text-[#E53935] hover:bg-[#E53935]/20 transition"
                            >
                                View
                            </button>
                        </div>
                        <p className="mt-2 text-xs text-gray-700 line-clamp-3">
                            {p.description}
                        </p>
                    </div>
                ))}
            </div>

            {client.projects.length > 2 && (
                <div className="mt-4 flex items-center justify-between text-xs text-gray-600">
                    <span>{client.projects.length} projects</span>
                    <button
                        onClick={() => onOpenProject(client, client.projects[0])}
                        className="text-[#E53935] hover:underline"
                    >
                        View more
                    </button>
                </div>
            )}
        </motion.article>
    );
}
