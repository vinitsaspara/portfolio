"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, Code, Database, Server, Wrench } from "lucide-react";
import { personalInfo, skills } from "@/data/portfolio";
import { Container } from "@/components/ui";

export default function About() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "expert":
        return "from-emerald-400 to-emerald-600 text-white shadow-emerald-500/50";
      case "advanced":
        return "from-blue-400 to-blue-600 text-white shadow-blue-500/50";
      case "intermediate":
        return "from-amber-400 to-amber-600 text-white shadow-amber-500/50";
      case "beginner":
        return "from-slate-400 to-slate-600 text-white shadow-slate-500/50";
      default:
        return "from-slate-400 to-slate-600 text-white shadow-slate-500/50";
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "expert":
        return { icon: "🚀", label: "Expert" };
      case "advanced":
        return { icon: "⭐", label: "Advanced" };
      case "intermediate":
        return { icon: "📈", label: "Intermediate" };
      case "beginner":
        return { icon: "🌱", label: "Learning" };
      default:
        return { icon: "🌱", label: "Learning" };
    }
  };

  const getCategoryInfo = (category: string) => {
    switch (category) {
      case "frontend":
        return {
          title: "Frontend",
          icon: Code,
          description: "User Interface & Experience",
        };
      case "backend":
        return {
          title: "Backend",
          icon: Server,
          description: "Server & API Development",
        };
      case "database":
        return {
          title: "Database",
          icon: Database,
          description: "Data Management & Storage",
        };
      case "tools":
        return {
          title: "Tools",
          icon: Wrench,
          description: "Development & Deployment",
        };
      default:
        return { title: "Other", icon: Code, description: "Additional Skills" };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
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
      id="about"
      className="min-h-screen bg-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse delay-2000"></div>
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
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          {/* Left Side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-center"
          >
            <div className="relative inline-block">
              <motion.div
                className="w-80 h-80 mx-auto lg:mx-0 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl p-1">
                  <div className="w-full h-full bg-white rounded-3xl p-2">
                    <Image
                      src="/pic4.jpg"
                      alt={personalInfo.name}
                      fill
                      className="rounded-2xl object-left"
                      sizes="320px"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-white mb-2"
              whileHover={{ scale: 1.02 }}
            >
              {personalInfo.name}
            </motion.h3>
            <motion.p
              className="text-xl text-blue-400 font-medium mb-6"
              whileHover={{ scale: 1.02 }}
            >
              {personalInfo.title}
            </motion.p>
            <motion.p
              className="text-gray-300 leading-relaxed mb-8 text-lg"
              whileHover={{ scale: 1.01 }}
            >
              {personalInfo.bio}
            </motion.p>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-gray-300">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05, color: "#60A5FA" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>{personalInfo.location}</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05, color: "#60A5FA" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-5 h-5 text-blue-400" />
                <span>{personalInfo.email}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Skills & Technologies
            </h3>
            <p className="text-gray-300 text-lg">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {Object.entries(skillsByCategory).map(
              ([category, categorySkills]) => {
                const categoryInfo = getCategoryInfo(category);
                const IconComponent = categoryInfo.icon;
                return (
                  <motion.div
                    key={category}
                    variants={itemVariants}
                    className="flex flex-col"
                  >
                    <div className="text-center mb-6">
                      <div className="flex flex-col items-center gap-3 mb-3">
                        <div className="bg-gray-800/80 p-3 rounded-xl">
                          <IconComponent className="w-8 h-8 text-blue-400" />
                        </div>
                        <h4 className="text-lg font-bold text-white">
                          {categoryInfo.title}
                        </h4>
                      </div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider font-medium">
                        {categoryInfo.description}
                      </p>
                    </div>
                    <motion.div
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 flex-1"
                      variants={containerVariants}
                    >
                      <div className="grid grid-cols-1 gap-3">
                        {categorySkills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            variants={skillVariants}
                            whileHover={{
                              scale: 1.05,
                              transition: { type: "spring", stiffness: 300 },
                            }}
                            className="bg-gray-800/60 border border-gray-600/40 rounded-lg px-3 py-2 text-center text-white hover:bg-gray-700/60 transition-colors duration-200"
                            custom={index}
                          >
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
