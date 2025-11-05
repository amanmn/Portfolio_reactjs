import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Navbar show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Toggle Theme
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // Toggle Menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Smooth scroll
  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-500 
      ${
        theme === "dark"
          ? "bg-[rgba(15,15,17,0.85)] border-gray-800"
          : "bg-[rgba(255,255,255,0.8)] border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className={`text-2xl font-bold tracking-tight cursor-pointer transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
          onClick={() => handleScroll("home")}
        >
          Aman<span className="text-indigo-500">.Dev</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {links.map((link) => (
            <li
              key={link}
              onClick={() => handleScroll(link)}
              className={`cursor-pointer transition-colors duration-300 hover:text-indigo-500 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-500/20 hover:scale-110 transition-transform duration-300"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-indigo-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>

          {/* Hire Me */}
          <button className="hidden md:inline-block px-5 py-2 rounded-full text-white font-medium bg-gradient-to-r from-indigo-500 to-violet-500 shadow-lg hover:shadow-indigo-400/40 hover:scale-105 transition-transform duration-300">
            Hire Me
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg transition-all"
          >
            {menuOpen ? (
              <X
                className={`w-6 h-6 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            initial={{ clipPath: "circle(0% at 100% 0%)", opacity: 0 }}
            animate={{
              clipPath: "circle(150% at 50% 0%)",
              opacity: 1,
            }}
            exit={{
              clipPath: "circle(0% at 100% 0%)",
              opacity: 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`md:hidden flex flex-col items-center space-y-6 py-10 ${
              theme === "dark"
                ? "bg-gradient-to-b from-[#0A0A0C] to-[#1B1B1E]"
                : "bg-gradient-to-b from-white to-gray-50"
            }`}
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleScroll(link)}
                className={`text-lg font-medium transition-all duration-300 hover:scale-110 ${
                  theme === "dark"
                    ? "text-gray-300 hover:text-indigo-400"
                    : "text-gray-800 hover:text-indigo-600"
                }`}
              >
                {link}
              </button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full text-white font-medium bg-gradient-to-r from-indigo-500 to-violet-500 shadow-lg hover:shadow-indigo-400/40 transition-transform duration-300"
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
