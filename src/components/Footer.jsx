import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
const resumePDF = "/Chintan-Resume.pdf";

function FooterComponent({ isDarkMode }) {
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
    <footer className={`relative py-12 px-6 border-t ${isDarkMode ? "border-cyan-400/10 bg-black" : "border-gray-100 bg-transparent"}`}>
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className={isDarkMode ? "text-white/50 text-center md:text-left" : "text-gray-700/80 text-center md:text-left"}>
            © {new Date().getFullYear()} Chintan. Crafted with{" "}
            <span className={isDarkMode ? "text-cyan-400" : "text-cyan-600"}>React</span> &{" "}
            <span className={isDarkMode ? "text-purple-400" : "text-purple-600"}>Motion</span>
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
            {sections.map((section) => (
              <button aria-label={`Go to ${section.name} section`} key={section.id} onClick={() => scrollToSection(section.id)} className={isDarkMode ? "text-white/60 hover:text-cyan-400 transition-colors text-sm font-medium" : "text-gray-700/70 hover:text-cyan-600 transition-colors text-sm font-medium"}>
                {section.name}
              </button>
            ))}

            <motion.a
                href={resumePDF}
                download="Chintan_Resume.pdf"
                whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: isDarkMode ? "0 0 20px rgba(0,255,255,0.5)" : "0 0 20px rgba(0,203,255,0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                isDarkMode ? "bg-linear-to-r from-cyan-500 to-purple-600 text-white" : "glass-card text-gray-800 hover:bg-white/70"
              }`}
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.button aria-label="Scroll to top" onClick={scrollToTop} whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }} className={`w-12 h-12 rounded-full flex items-center justify-center transition-shadow ${isDarkMode ? "bg-linear-to-br from-cyan-500 to-purple-600 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]" : "bg-linear-to-br from-cyan-100 to-purple-100 hover:shadow-[0_0_20px_rgba(0,0,0,0.08)]"}`}>
            <ArrowUp className={`w-5 h-5 ${isDarkMode ? "text-white" : "text-gray-800"}`} />
          </motion.button>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-8 text-center">
          <p className={isDarkMode ? "text-white/30 text-sm" : "text-gray-600/70 text-sm"}>Built with React · Tailwind CSS · Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterComponent);
