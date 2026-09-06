"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";
import LazyVideo from "./LazyVideo";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<"associated" | "personal">("associated");

  const filteredProjects = projects.filter(
    (project) => project.type === activeFilter || (!project.type && activeFilter === "associated")
  );

  return (
    <section id="projects" className="site-section">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-[0.03em] mb-2 text-white/90">
            RECENT PROJECTS
          </h2>
          <p className="text-[0.95rem] text-white/60 font-normal">
            A short collection of projects across brands and formats.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
          <button
            onClick={() => setActiveFilter("associated")}
            className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 border ${
              activeFilter === "associated"
                ? "bg-white text-black border-white"
                : "bg-transparent text-white/60 border-white/20 hover:text-white hover:border-white/50"
            }`}
          >
            Associated Works
          </button>
          <button
            onClick={() => setActiveFilter("personal")}
            className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 border ${
              activeFilter === "personal"
                ? "bg-white text-black border-white"
                : "bg-transparent text-white/60 border-white/20 hover:text-white hover:border-white/50"
            }`}
          >
            Personal Works
          </button>
        </div>

        {/* 2-Column Wide Aspect Ratio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setActiveModalProject(project)}
              className="group relative cinematic-ratio rounded-[10px] overflow-hidden border border-white/[0.08] bg-[#0A0A0A] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-white/[0.18] hover:brightness-[1.04]"
              tabIndex={0}
              role="button"
              aria-label={`View ${project.brand} - ${project.category}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveModalProject(project);
                }
              }}
            >
              {/* Project Media */}
              {project.videoUrl ? (
                <LazyVideo
                  src={project.videoUrl}
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-[1.02]"
                />
              ) : project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.brand} - ${project.category}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 700px"
                  className="object-cover transition-all duration-500 group-hover:scale-[1.02]"
                />
              ) : null}

              {/* Title & Category Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 flex flex-col justify-end">
                <div className="text-[0.95rem] font-bold text-white tracking-wide">
                  {project.brand}
                </div>
                <div className="text-[0.75rem] font-normal text-white/60 uppercase tracking-[0.03em] mt-0.5">
                  {project.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / High-Res Frame Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalProject(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 md:p-8 flex items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#0A0A0A] border border-white/[0.15] rounded-[10px] overflow-hidden shadow-2xl cursor-default"
            >
              <div className="relative aspect-video w-full bg-black">
                {activeModalProject.videoUrl ? (
                  <video
                    src={activeModalProject.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : activeModalProject.image ? (
                  <Image
                    src={activeModalProject.image}
                    alt={activeModalProject.brand}
                    fill
                    className="object-contain"
                  />
                ) : null}
              </div>

              <div className="p-5 md:p-6 flex items-center justify-between border-t border-white/[0.08] bg-[#0d0d0d]">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {activeModalProject.brand}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-white/60 mt-0.5">
                    {activeModalProject.category}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 text-xs uppercase tracking-widest text-white/70 hover:text-white border border-white/20 rounded-full hover:border-white/50 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
