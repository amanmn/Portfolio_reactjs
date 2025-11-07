import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // console.log(
    //   import.meta.env.VITE_EMAILJS_SERVICEID,
    //   import.meta.env.VITE_EMAILJS_TEMPLATEID,
    //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    // );

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICEID,
        import.meta.env.VITE_EMAILJS_TEMPLATEID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        () => {
          alert("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center bg-lightBg dark:bg-darkBg py-24 sm:py-32 transition-colors duration-700 overflow-hidden"
    >
      {/* Decorative gradient glows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-[15%] left-[10%] w-[350px] h-[350px] rounded-full bg-gradient-to-bl from-pink-500 to-indigo-500 blur-[140px]"
      />

      <div className="relative z-10 max-w-4xl w-full px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Let’s <span className="text-indigo-500">Connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-12"
        >
          I’m always open to discussing new opportunities, collaborations, or exciting projects.
          Drop a message, and let’s create something amazing together!
        </motion.p>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 dark:bg-black/30 backdrop-blur-lg border border-gray-300/30 dark:border-gray-700/40 rounded-2xl shadow-xl p-8 sm:p-10 max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full mt-6 p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="mt-6 px-6 py-3 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 mx-auto"
          >
            Send Message <Send size={18} />
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-12 flex justify-center space-x-6"
        >
          <a
            href="mailto:amanmandliya786@gmail.com"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:text-white transition"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/amanporwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/amanmn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:text-white transition"
          >
            <Github size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
