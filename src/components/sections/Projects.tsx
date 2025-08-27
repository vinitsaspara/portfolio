"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Info,
  Code,
  X,
  Calendar,
  Star,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/ui";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Function to truncate description for card preview
  const truncateDescription = (
    description: string,
    maxLength: number = 120
  ) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength).trim() + "...";
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Add styles to prevent scrolling
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        // Restore scrolling and position
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";

        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [selectedProject]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        delay: 0.1,
      },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <Container className="relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {showAllProjects ? "All Projects" : "Featured Projects"}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {showAllProjects
              ? "Complete collection of my work and technical projects"
              : "A showcase of my recent work and technical projects"}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={showAllProjects ? "all-projects" : "featured-projects"}
        >
          {(showAllProjects ? projects : projects.slice(0, 3)).map(
            (project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Fallback content when image fails */}
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <Code className="w-16 h-16 text-gray-400 opacity-50" />
                  </div> */}
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-gray-300">
                    {project.featured ? "Featured" : "Project"}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1 min-h-[60px]">
                    {truncateDescription(project.description)}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 min-h-[32px]">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-800/80 border border-gray-600/40 px-3 py-1 rounded-full text-xs font-medium text-gray-200 hover:bg-gray-700/80 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="bg-gray-700/60 border border-gray-600/40 px-3 py-1 rounded-full text-xs font-medium text-gray-400">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gray-800/80 hover:bg-gray-700/80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-gray-600/40 hover:border-gray-500/60"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-green-600/80 hover:bg-green-500/80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-green-500/40 hover:border-green-400/60"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-blue-600/80 hover:bg-blue-500/80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-blue-500/40 hover:border-blue-400/60"
                    >
                      <Info className="w-4 h-4" />
                      Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center p-4 pt-20"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header - Fixed */}
                <div className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50 p-6 flex items-center justify-between flex-shrink-0">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {selectedProject.featured && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                      <span className="text-gray-400 text-sm">
                        Project Details
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="bg-gray-800/60 hover:bg-gray-700/60 p-2 rounded-lg border border-gray-600/40 transition-colors duration-200"
                  >
                    <X className="w-6 h-6 text-gray-300" />
                  </motion.button>
                </div>

                {/* Modal Content - Scrollable */}
                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                  {/* Project Image */}
                  <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover rounded-xl"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    {/* Fallback content when image fails */}
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                      <Code className="w-24 h-24 text-gray-400 opacity-50" />
                    </div> */}
                    <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-2 rounded-lg">
                      <span className="text-gray-300 text-sm font-medium">
                        Project Preview
                      </span>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">
                      About This Project
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Detailed Features */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">
                      Key Features
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-4">
                        <h5 className="text-white font-semibold mb-2">
                          🚀 Performance
                        </h5>
                        <p className="text-gray-300 text-sm">
                          Optimized for speed and efficiency with modern web
                          technologies
                        </p>
                      </div>
                      <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-4">
                        <h5 className="text-white font-semibold mb-2">
                          📱 Responsive
                        </h5>
                        <p className="text-gray-300 text-sm">
                          Fully responsive design that works on all devices
                        </p>
                      </div>
                      <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-4">
                        <h5 className="text-white font-semibold mb-2">
                          🔒 Secure
                        </h5>
                        <p className="text-gray-300 text-sm">
                          Built with security best practices and modern
                          standards
                        </p>
                      </div>
                      <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-4">
                        <h5 className="text-white font-semibold mb-2">
                          ⚡ Modern
                        </h5>
                        <p className="text-gray-300 text-sm">
                          Uses cutting-edge technologies and development
                          practices
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 px-4 py-2 rounded-lg text-sm font-medium text-blue-300 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">
                      Project Links
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 bg-gray-800/60 hover:bg-gray-700/60 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-gray-600/40 hover:border-gray-500/60"
                      >
                        <Github className="w-5 h-5" />
                        View Source Code
                      </motion.a>
                      {selectedProject.liveUrl && (
                        <motion.a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-blue-500/50"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Projects Button */}
        {projects.length > 3 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-500/50"
            >
              {showAllProjects ? "Show Less Projects" : "View All Projects"}
            </motion.button>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
