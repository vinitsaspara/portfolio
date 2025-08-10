"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Container } from "@/components/ui";
import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Contact() {
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

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
      },
    },
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-green-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-teal-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse delay-2000"></div>
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
            Have a project in mind? Let's work together to bring your ideas to
            life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            {/* CloudCannon Compatible Form */}
            <form
              action="/"
              method="POST"
              className="space-y-6"
              data-cms-form="contact"
            >
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/50 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={contactInfoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Feel free to reach out through any of these channels. I'm always
                excited to discuss new opportunities and interesting projects.
              </p>
            </div>

            {/* Contact Details */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-4 bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-lg hover:bg-gray-800/40 transition-colors duration-200"
              >
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-4 bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-lg hover:bg-gray-800/40 transition-colors duration-200"
              >
                <div className="bg-green-600/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 p-4 bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-lg hover:bg-gray-800/40 transition-colors duration-200"
              >
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <span className="text-gray-300">{personalInfo.location}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800/60 hover:bg-gray-700/60 p-3 rounded-lg border border-gray-600/40 hover:border-gray-500/60 transition-all duration-200 group"
                  >
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-200 text-sm font-medium">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Response Time Notice */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/30 rounded-lg p-4"
            >
              <h4 className="text-blue-300 font-semibold mb-2">
                Quick Response
              </h4>
              <p className="text-gray-300 text-sm">
                I typically respond to messages within 24 hours. For urgent
                matters, feel free to call directly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
