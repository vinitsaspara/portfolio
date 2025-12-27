"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Container } from "@/components/ui";
import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.4 },
    },
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-green-500 rounded-full blur-xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-teal-500 rounded-full blur-xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-2/3 left-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-xl opacity-20 animate-pulse delay-2000" />
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to bring your ideas
            to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="text-gray-300">Full Name *</label>
                <input
                  required
                  className="w-full mt-2 px-4 py-3 bg-gray-800 rounded-lg text-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="text-gray-300">Email *</label>
                <input
                  required
                  type="email"
                  className="w-full mt-2 px-4 py-3 bg-gray-800 rounded-lg text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="text-gray-300">Subject</label>
                <input
                  className="w-full mt-2 px-4 py-3 bg-gray-800 rounded-lg text-white"
                  placeholder="What&apos;s this about?"
                />
              </div>

              <div>
                <label className="text-gray-300">Message *</label>
                <textarea
                  required
                  rows={6}
                  className="w-full mt-2 px-4 py-3 bg-gray-800 rounded-lg text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            variants={contactInfoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-gray-300">
              Feel free to reach out. I&apos;m always excited to discuss new
              opportunities and interesting projects.
            </p>

            <motion.div variants={containerVariants}>
              <motion.div variants={itemVariants} className="flex gap-4">
                <Mail className="text-blue-400" />
                <a href={`mailto:${personalInfo.email}`} className="text-white">
                  {personalInfo.email}
                </a>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <MapPin className="text-purple-400" />
                <span className="text-white">
                  {personalInfo.location}
                </span>
              </motion.div>
            </motion.div>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
