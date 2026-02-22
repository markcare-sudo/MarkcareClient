// ProjectCard.jsx
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          {project.location}
        </p>

        <p className="text-red-500 text-sm font-medium mt-1">
          {project.capacity}
        </p>

        <p className="text-gray-400 text-sm mt-3">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;