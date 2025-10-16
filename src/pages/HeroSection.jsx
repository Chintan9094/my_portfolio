import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Code2,
  Sparkles,
  Sun,
  Moon,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import ResumeModal from "../components/ResumeModal";

export function HeroSection({ isDarkMode, setIsDarkMode }) {
  const [showResume, setShowResume] = useState(false);

  const floatingIcons = [
    { Icon: Code2, delay: 0, x: -100, y: -50 },
    { Icon: Sparkles, delay: 0.2, x: 100, y: -80 },
    { Icon: Github, delay: 0.4, x: -80, y: 60 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Theme Toggle Button */}
      <div className="absolute top-6 right-6 z-50">
        <motion.button
          onClick={() => setIsDarkMode(!isDarkMode)}
          initial={{ rotate: 0 }}
          animate={{ rotate: isDarkMode ? 0 : 360 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className={`flex items-center justify-center w-12 h-12 rounded-full p-2 shadow-md
      ${
        isDarkMode
          ? "bg-black/60 text-white border border-cyan-400/20"
          : "bg-white/60 text-black border border-purple-400/20"
      }
      backdrop-blur-sm hover:scale-105 transition-transform`}
        >
          <motion.div
            key={isDarkMode ? "moon" : "sun"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isDarkMode ? (
              <Moon className="w-6 h-6" />
            ) : (
              <Sun className="w-6 h-6" />
            )}
          </motion.div>
        </motion.button>
      </div>
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingIcons.map(({ Icon, delay, x, y }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: 1,
                y: [0, -20, 0],
              }}
              transition={{
                opacity: { duration: 3, repeat: Infinity, delay },
                scale: { duration: 0.5, delay },
                y: { duration: 4, repeat: Infinity, delay },
              }}
              className="absolute"
              style={{ left: `0%`, top: `50%`, marginLeft: x, marginTop: y }}
            >
              <Icon className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-0 pointer-events-none">
          {floatingIcons.map(({ Icon, delay, x, y }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: 1,
                y: [0, -20, 0],
              }}
              transition={{
                opacity: { duration: 3, repeat: Infinity, delay },
                scale: { duration: 0.5, delay },
                y: { duration: 4, repeat: Infinity, delay },
              }}
              className="absolute"
              style={{ left: `100%`, top: `50%`, marginLeft: x, marginTop: y }}
            >
              <Icon className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 mb-4 tracking-wider"
          >
            WELCOME TO MY DIGITAL SPACE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
          >
            <span
              className={`${
                isDarkMode ? "text-white/90" : "text-black/90"
              } block`}
            >
              Hi, I'm
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Chintan 👋
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`${
              isDarkMode ? "text-white/70" : "text-black/70"
            } text-2xl md:text-3xl mb-8`}
          >
            <Typewriter
              words={["Frontend Developer", "React Enthusiast", "UI/UX Lover"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-6 justify-center mb-12"
          >
            <motion.a
              aria-label="Hire Me via Email"
              href="mailto:chintandesai249@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Hire Me
            </motion.a>

            <motion.button
              onClick={() => setShowResume(true)}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 0 25px rgba(0,255,255,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-medium flex items-center justify-center gap-2"
            >
              View Resume
            </motion.button>

            <motion.a
              href="#projects"
              aria-label="View Projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-400/50 rounded-full hover:bg-cyan-400/10 transition-colors backdrop-blur-sm"
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-6 justify-center"
          >
            {[Github, Linkedin, Twitter, Mail].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border border-cyan-400/30 flex items-center justify-center hover:bg-cyan-400/10 hover:border-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              >
                <Icon className="w-5 h-5 text-cyan-400" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 2, repeat: Infinity },
        }}
        className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </div>
      </motion.div>

      {/* Resume Modal */}
      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </section>
  );
}
