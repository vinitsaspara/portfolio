"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Trophy,
  Target,
  TrendingUp,
  Award,
  Code2,
} from "lucide-react";
import { Container } from "@/components/ui";
import { codingProfiles } from "@/data/portfolio";

export default function CodingProfiles() {
  const getPlatformLogo = (icon: string) => {
    // You can replace these with actual SVG logos or images
    switch (icon) {
      case "leetcode":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
          </svg>
        );
      case "codechef":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.257.004c-.37.01-.735.035-1.093.08a10.937 10.937 0 0 0-4.666 1.77 11.15 11.15 0 0 0-3.532 3.274 11.154 11.154 0 0 0-1.724 4.782 11.175 11.175 0 0 0 .423 4.881 11.154 11.154 0 0 0 2.597 4.267 10.918 10.918 0 0 0 4.136 2.645c1.54.537 3.193.732 4.814.569 1.621-.162 3.193-.649 4.576-1.415 1.382-.767 2.558-1.795 3.423-2.993.866-1.197 1.408-2.557 1.575-3.986.167-1.429.048-2.895-.347-4.29a10.972 10.972 0 0 0-2.128-3.845c-1.03-1.144-2.307-2.065-3.726-2.685a11.008 11.008 0 0 0-4.401-.997 11.28 11.28 0 0 0-.927-.057zm.088 1.766c.393-.005.786.015 1.176.06 1.413.162 2.77.622 3.965 1.339 1.194.717 2.208 1.674 2.958 2.795.75 1.12 1.222 2.386 1.378 3.698.155 1.312.004 2.647-.442 3.901a9.332 9.332 0 0 1-2.1 3.446c-1.004 1.04-2.25 1.857-3.642 2.38-1.392.524-2.903.737-4.405.622-1.502-.115-2.97-.517-4.285-1.172a9.288 9.288 0 0 1-3.344-2.685 9.27 9.27 0 0 1-1.826-4.105 9.263 9.263 0 0 1 .363-4.19 9.28 9.28 0 0 1 2.225-3.65 9.34 9.34 0 0 1 3.54-2.288 9.331 9.331 0 0 1 4.439-.151z" />
          </svg>
        );
      default:
        return <Code2 className="w-full h-full" />;
    }
  };

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
      id="profiles"
      className="min-h-screen bg-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/5 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/5 w-96 h-96 bg-red-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 right-1/3 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse delay-2000"></div>
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
            Competitive Programming Profiles
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My journey and achievements across various coding platforms
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {codingProfiles.map((profile) => (
            <motion.div
              key={profile.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Profile Header */}
              <div
                className={`relative h-32 bg-gradient-to-br ${profile.color} flex items-center justify-center`}
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 text-white"
                >
                  {getPlatformLogo(profile.icon)}
                </motion.div>
              </div>

              {/* Profile Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {profile.platform}
                    </h3>
                    <p className="text-gray-400 text-sm">@{profile.username}</p>
                  </div>
                  <motion.a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/50 rounded-lg flex items-center justify-center text-blue-400 transition-all duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* Stats Grid */}
                {profile.stats && (
                  <div className="grid grid-cols-2 gap-4">
                    {profile.stats.rating !== undefined && (
                      <div className="bg-gray-800/50 border border-gray-700/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <Trophy className="w-4 h-4 text-yellow-400" />
                          <span className="text-xs text-gray-400 uppercase tracking-wider">
                            Rating
                          </span>
                        </div>
                        <p className="text-2xl font-bold text-white">
                          {profile.stats.rating}
                        </p>
                      </div>
                    )}

                    {profile.stats.maxRating !== undefined && (
                      <div className="bg-gray-800/50 border border-gray-700/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="text-xs text-gray-400 uppercase tracking-wider">
                            Max Rating
                          </span>
                        </div>
                        <p className="text-2xl font-bold text-white">
                          {profile.stats.maxRating}
                        </p>
                      </div>
                    )}

                    {profile.stats.globalRank !== undefined && (
                      <div className="bg-gray-800/50 border border-gray-700/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <Award className="w-4 h-4 text-purple-400" />
                          <span className="text-xs text-gray-400 uppercase tracking-wider">
                            Global Rank
                          </span>
                        </div>
                        <p className="text-2xl font-bold text-white">
                          {profile.stats.globalRank}
                        </p>
                      </div>
                    )}

                    {profile.stats.problemsSolved !== undefined &&
                      profile.stats.problemsSolved > 0 && (
                        <div className="bg-gray-800/50 border border-gray-700/30 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <Target className="w-4 h-4 text-blue-400" />
                            <span className="text-xs text-gray-400 uppercase tracking-wider">
                              Solved
                            </span>
                          </div>
                          <p className="text-2xl font-bold text-white">
                            {profile.stats.problemsSolved}
                          </p>
                        </div>
                      )}

                    {profile.stats.contestsAttended !== undefined && (
                      <div className="bg-gray-800/50 border border-gray-700/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <Code2 className="w-4 h-4 text-orange-400" />
                          <span className="text-xs text-gray-400 uppercase tracking-wider">
                            Contests
                          </span>
                        </div>
                        <p className="text-2xl font-bold text-white">
                          {profile.stats.contestsAttended}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Visit Profile Button */}
                <motion.a
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/50"
                >
                  Visit Profile
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
