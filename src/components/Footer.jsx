import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import ResumeModal from "../components/ResumeModal"; 

export function Footer({ isDarkMode }) {
  const [showResume, setShowResume] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sections = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className={`relative py-12 px-6 border-t ${
        isDarkMode ? "border-cyan-400/10 bg-black" : "border-gray-300 bg-white"
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={isDarkMode ? "text-white/50 text-center md:text-left" : "text-black/50 text-center md:text-left"}
          >
            © {new Date().getFullYear()} Chintan. Crafted with{" "}
            <span className={isDarkMode ? "text-cyan-400" : "text-cyan-600"}>React</span> &{" "}
            <span className={isDarkMode ? "text-purple-400" : "text-purple-600"}>Motion</span>
          </motion.p>

          {/* Quick Nav Links */}
          <motion.div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={isDarkMode ? "text-white/60 hover:text-cyan-400 transition-colors text-sm font-medium" : "text-black/60 hover:text-cyan-600 transition-colors text-sm font-medium"}
              >
                {section.name}
              </button>
            ))}

            {/* View Resume Button */}
            <motion.button
              onClick={() => setShowResume(true)}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: isDarkMode
                  ? "0 0 20px rgba(0,255,255,0.5)"
                  : "0 0 20px rgba(0,203,255,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                isDarkMode
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                  : "bg-gradient-to-r from-cyan-400 to-blue-500 text-black"
              }`}
            >
              View Resume
            </motion.button>
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-shadow ${
              isDarkMode
                ? "bg-gradient-to-br from-cyan-500 to-purple-600 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
                : "bg-gradient-to-br from-cyan-400 to-blue-500 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]"
            }`}
          >
            <ArrowUp className={`w-5 h-5 ${isDarkMode ? "text-white" : "text-black"}`} />
          </motion.button>
        </div>

        {/* Tech Stack Credits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className={isDarkMode ? "text-white/30 text-sm" : "text-black/30 text-sm"}>
            Built with React · Tailwind CSS · Framer Motion
          </p>
        </motion.div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </footer>
  );
}
