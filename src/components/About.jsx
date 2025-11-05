import React from "react";
import { motion } from "framer-motion";
import { Code2, Rocket, Zap } from "lucide-react";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center justify-center bg-lightBg dark:bg-darkBg transition-colors duration-700 overflow-hidden"
        >
            {/* Background gradient orbs */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 blur-[100px]"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 blur-[120px]"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-24 ">

                {/* --- Left: Image + Glow Card --- */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <div className="relative group w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg shadow-indigo-500/30 border border-gray-300/20 dark:border-gray-700/30">
                        <img
                            src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
                            alt="Aman Porwal"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-xl font-semibold">Aman Porwal</h3>
                            <p className="text-sm text-gray-200">Frontend Developer</p>
                        </div>
                    </div>
                </motion.div>

                {/* --- Right: Content --- */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        About <span className="text-indigo-500">Me</span>
                    </h2>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed item-center max-w-xl text-center md:text-left mx-auto md:mx-0">
                        I'm <span className="font-semibold text-indigo-500">Aman Porwal</span>, a passionate{" "}
                        <span className="font-semibold">Frontend Developer</span> with one year of experience at{" "}
                        <span className="text-indigo-500 font-semibold">Affimintus Technologies</span>.
                        I specialize in crafting high-quality, visually appealing, and performance-driven web applications using the{" "}
                        <strong>MERN stack</strong>.
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800 dark:text-gray-100">
                        {/* --- Card 1 --- */}
                        <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-600/10 dark:from-indigo-600/20 dark:to-purple-700/20 border border-gray-300/20 dark:border-gray-700/20 hover:scale-105 transition-transform duration-300">
                            <Code2 className="w-8 h-8 text-indigo-500 mb-3" />
                            <h4 className="text-lg font-semibold">Clean Code</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                Writing efficient, scalable, and maintainable code.
                            </p>
                        </div>

                        {/* --- Card 2 --- */}
                        <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 dark:from-pink-600/20 dark:to-purple-700/20 border border-gray-300/20 dark:border-gray-700/20 hover:scale-105 transition-transform duration-300">
                            <Rocket className="w-8 h-8 text-pink-500 mb-3" />
                            <h4 className="text-lg font-semibold">Performance</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                Focused on speed, accessibility, and smooth UI.
                            </p>
                        </div>

                        {/* --- Card 3 --- */}
                        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-600/20 dark:to-indigo-700/20 border border-gray-300/20 dark:border-gray-700/20 hover:scale-105 transition-transform duration-300">
                            <Zap className="w-8 h-8 text-blue-500 mb-3" />
                            <h4 className="text-lg font-semibold">Innovation</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                Always exploring new ideas and technologies.
                            </p>
                        </div>
                    </div>


                    <div className="mt-10">
                        <a
                            href="#skills"
                            className="inline-block px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-400/50 hover:scale-105 transition-transform duration-300"
                        >
                            Explore My Skills
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
