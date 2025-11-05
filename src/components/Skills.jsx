import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase } from "react-icons/fa";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-emerald-500" /> },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center bg-lightBg dark:bg-darkBg transition-colors duration-700 overflow-hidden"
    >
      {/* Gradient blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 blur-[130px]"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-6 py-20 sm:py-32 lg:py-40">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          My <span className="text-indigo-500">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-14"
        >
          I specialize in building scalable web applications using the latest technologies in frontend and backend development.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-lg shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-2 transition-all duration-300 border border-gray-300/20 dark:border-gray-700/30"
            >
              <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-125">
                {skill.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
