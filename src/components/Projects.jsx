import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Food Delivery App",
    description:
      "A full-stack MERN food delivery app with admin dashboard, JWT authentication, and online order management.",
    tech: ["React", "Node.js", "MongoDB", "Redux Toolkit"],
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=60",
    github: "https://github.com/",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built using React, Framer Motion, and Tailwind — fully responsive and modern design.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=60",
    github: "https://github.com/",
    live: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable MERN e-commerce app with product search, cart, payments, and admin analytics dashboard.",
    tech: ["MERN", "Stripe", "Cloudinary"],
    image: "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=800&q=60",
    github: "https://github.com/",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center bg-lightBg dark:bg-darkBg py-24 sm:py-32 transition-colors duration-700 overflow-hidden"
    >
      {/* Gradient Blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 blur-[130px]"
      />

      <div className="relative z-10 max-w-6xl w-full px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Featured <span className="text-indigo-500">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-14"
        >
          A selection of projects I’ve built using modern web technologies. Each project demonstrates creativity,
          performance, and clean UI/UX design.
        </motion.p>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-300/20 dark:border-gray-700/30 shadow-lg hover:shadow-indigo-500/30 transition-all duration-500 hover:-translate-y-3"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition-colors"
                  >
                    <ExternalLink size={18} /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
