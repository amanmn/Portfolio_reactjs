import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-lightBg to-gray-50 dark:from-darkBg dark:to-black text-gray-800 dark:text-gray-300 py-10 border-t border-gray-200/30 dark:border-gray-700/30 transition-colors duration-700">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Left side */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold text-indigo-500 mb-2">Aman Porwal</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex space-x-5 text-xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:amanporwal@example.com"
            className="hover:text-indigo-500 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
