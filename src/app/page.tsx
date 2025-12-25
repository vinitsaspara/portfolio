"use client";

import { useState, useEffect } from "react";
import { Layout } from "@/components/layout";
import { Container, Button } from "@/components/ui";
import {
  About,
  Projects,
  Experience,
  Achievements,
  CodingProfiles,
  Contact,
} from "@/components/sections";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const texts = [
    "Welcome to My Portfolio",
    "Explore My Work",
    "Let's Build Something Amazing",
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Vinit_Saspara_CV.pdf";
    link.download = "Vinit_Saspara_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const currentText = texts[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 1000 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === currentText) {
        // Finished typing, wait then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typedText === "") {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else if (!isDeleting) {
        // Continue typing
        setTypedText(currentText.substring(0, typedText.length + 1));
      } else {
        // Continue deleting
        setTypedText(currentText.substring(0, typedText.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, texts]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-black relative overflow-hidden flex items-center"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 min-h-[120px] md:min-h-[160px] flex items-center justify-center">
              <span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                style={{ display: "inline-block" }}
              >
                {typedText}
              </span>
              <span
                className={`inline-block w-[3px] ml-1 bg-white ${
                  showCursor ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
                style={{
                  height: "1em",
                  verticalAlign: "baseline",
                }}
              />
            </h1>
            <p className="text-xl md:text-2xl leading-8 text-white max-w-3xl mx-auto mb-4">
              I'm{" "}
              <span className="font-semibold text-blue-400">Vinit Saspara</span>
              , a passionate full-stack developer who loves creating beautiful,
              functional web applications.
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
              Explore my work and get to know more about my journey in tech.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-2xl border-0 px-8 py-4 text-lg w-full sm:w-auto"
              >
                <a href="#projects">
                  <p>View My Work</p>
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white bg-black hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg w-full sm:w-auto"
                onClick={handleDownloadCV}
              >
                Download CV
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Achievements Section */}
      <Achievements />

      {/* Coding Profiles Section */}
      <CodingProfiles />

      {/* Contact Section */}
      <Contact />
    </Layout>
  );
}
