import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import SkillsSection from "./components/Skills";
import ProjectsSection from "./components/Projects";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-lightBg dark:bg-darkBg text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
