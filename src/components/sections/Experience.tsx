"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Briefcase,
  ChevronRight,
  Award,
  Download,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/ui";
import { experience } from "@/data/portfolio";

export default function Experience() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months = Math.floor(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30)
    );
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0) {
      return `${years} yr${years > 1 ? "s" : ""} ${
        remainingMonths > 0
          ? `${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`
          : ""
      }`.trim();
    }
    return `${months} mo${months > 1 ? "s" : ""}`;
  };

  return (
    <section
      id="experience"
      className="min-h-screen bg-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse delay-2000"></div>
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
            Work Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />
              )}

              {/* Experience Card */}
              <div className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hidden md:flex">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="md:ml-20 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-3">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                        {exp.position}
                        {!exp.endDate && (
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">
                            Current
                          </span>
                        )}
                      </h3>
                      <h4 className="text-lg text-blue-400 font-semibold mb-2">
                        {exp.company}
                      </h4>
                    </div>
                  </div>

                  {/* Date and Duration */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {formatDate(exp.startDate)} -{" "}
                        {exp.endDate ? formatDate(exp.endDate) : "Present"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-500 rounded-full" />
                      <span className="text-gray-500">
                        {calculateDuration(exp.startDate, exp.endDate)}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300 leading-relaxed"
                        >
                          <ChevronRight className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="bg-gray-800/80 border border-gray-600/40 px-3 py-1.5 rounded-full text-sm font-medium text-gray-200 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate */}
                  {exp.certificate && (
                    <div className="mt-6 pt-6 border-t border-gray-700/50">
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                            <Award className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h5 className="text-sm font-semibold text-white">
                              Internship Certificate
                            </h5>
                            <p className="text-xs text-gray-400">
                              Official completion certificate
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <motion.a
                            href={exp.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View
                          </motion.a>
                          <motion.a
                            href={exp.certificate}
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 border border-green-500/50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in working together or learning more about my experience?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/50"
          >
            Get In Touch
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
