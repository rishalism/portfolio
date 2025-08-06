"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { projects } from "@/constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="flex flex-col items-center z-[20] justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-4  items-center justify-between pl-20 gap-10">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              src={project.src}
              title={project.title}
              description={project.description}
              href={project.Link}
            />
          )
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
