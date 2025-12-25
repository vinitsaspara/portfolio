"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Trophy,
  GraduationCap,
  Code,
  Calendar,
  Building2,
  Download,
  ExternalLink,
  X,
} from "lucide-react";
import { Container } from "@/components/ui";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<
    (typeof achievements)[0] | null
  >(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "certification":
        return Award;
      case "award":
        return Trophy;
      case "course":
        return GraduationCap;
      case "hackathon":
        return Code;
      default:
        return Award;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "certification":
        return "from-blue-500 to-cyan-500";
      case "award":
        return "from-amber-500 to-orange-500";
      case "course":
        return "from-green-500 to-emerald-500";
      case "hackathon":
        return "from-purple-500 to-pink-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case "certification":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "award":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "course":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "hackathon":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="achievements"
      className="min-h-screen bg-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-amber-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse delay-2000"></div>
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
            Achievements & Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Recognitions, certificates, and milestones throughout my journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement) => {
            const IconComponent = getCategoryIcon(achievement.category);
            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedAchievement(achievement)}
              >
                {/* Card Header with Icon */}
                <div
                  className={`relative h-32 bg-gradient-to-br ${getCategoryColor(
                    achievement.category
                  )} flex items-center justify-center`}
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent className="w-16 h-16 text-white drop-shadow-lg" />
                  </motion.div>
                  <div className="absolute top-3 right-3">
                    <span
                      className={`text-xs uppercase font-semibold px-3 py-1 rounded-full border ${getCategoryBadgeColor(
                        achievement.category
                      )}`}
                    >
                      {achievement.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                    {achievement.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Building2 className="w-4 h-4" />
                    <span className="truncate">{achievement.organization}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{achievement.date}</span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Action Buttons */}
                  {achievement.certificate && (
                    <div className="flex gap-2 pt-4 border-t border-gray-700/50">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(achievement.certificate, "_blank");
                        }}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/50 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View
                      </motion.button>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={achievement.certificate}
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 border border-green-500/50 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </motion.a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievement Modal */}
        <AnimatePresence>
          {selectedAchievement && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedAchievement(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div
                  className={`relative h-40 bg-gradient-to-br ${getCategoryColor(
                    selectedAchievement.category
                  )} flex items-center justify-center`}
                >
                  {(() => {
                    const IconComponent = getCategoryIcon(
                      selectedAchievement.category
                    );
                    return (
                      <IconComponent className="w-20 h-20 text-white drop-shadow-lg" />
                    );
                  })()}
                  <button
                    onClick={() => setSelectedAchievement(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-all duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-6">
                    <span
                      className={`text-xs uppercase font-semibold px-3 py-1 rounded-full border ${getCategoryBadgeColor(
                        selectedAchievement.category
                      )}`}
                    >
                      {selectedAchievement.category}
                    </span>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {selectedAchievement.title}
                  </h3>

                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Building2 className="w-5 h-5 text-blue-400" />
                      <span className="font-medium">
                        {selectedAchievement.organization}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span>{selectedAchievement.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {selectedAchievement.description}
                  </p>

                  {/* Certificate Actions */}
                  {selectedAchievement.certificate && (
                    <div className="flex gap-4 pt-6 border-t border-gray-700">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          window.open(selectedAchievement.certificate, "_blank")
                        }
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-blue-500/50"
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Certificate
                      </motion.button>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={selectedAchievement.certificate}
                        download
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-green-500/50"
                      >
                        <Download className="w-5 h-5" />
                        Download
                      </motion.a>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
