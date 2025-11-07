import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-lightBg dark:bg-darkBg transition-colors duration-700 overflow-hidden pt-24 "
    >
      {/* --- Background Gradient Orbs --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-[-10%] left-[-10%] w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-gradient-to-br from-indigo-500 to-purple-700 blur-[120px] opacity-50 dark:opacity-40"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.8 }}
        className="absolute bottom-[-10%] right-[-10%] w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] rounded-full bg-gradient-to-tr from-pink-500 to-indigo-600 blur-[130px] opacity-40 dark:opacity-30"
      />

      {/* --- Content --- */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-10 sm:py-20 lg:py-24 flex flex-col items-center text-center justify-center">

        {/* --- Heading --- */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white"
        >
          Crafting{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Modern Web Experiences
          </span>
          <br />
          with Creativity & Code 💻
        </motion.h1>

        {/* --- Subtext --- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Hi, I’m <span className="font-semibold text-indigo-500">Aman Porwal</span> — a Frontend Developer
          passionate about building visually stunning, smooth, and high-performance
          web applications using <strong>React & the MERN Stack</strong>.
        </motion.p>

        {/* --- Call to Action Buttons --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-400/50 hover:scale-105 transition-transform duration-300"
          >
            View My Work
          </a>
          <a
            href="/aman11resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="px-8 py-3 rounded-full border border-indigo-500 text-indigo-500 dark:text-indigo-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-300"
          >
            My Resume
          </a>
        </motion.div>

        {/* --- Scroll Down Arrow --- */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className=" mt-12 border-box flex justify-center text-indigo-500 dark:text-indigo-400"
        >
          <ArrowDown size={36} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
