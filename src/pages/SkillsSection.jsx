import { motion, useInView } from "framer-motion";
import { memo, useRef } from "react";

const skills = [
  { name: "React", color: "from-cyan-400 to-blue-500", glow: "rgba(0, 255, 255, 0.4)" },
  { name: "Next.js", color: "from-white to-gray-400", glow: "rgba(255, 255, 255, 0.3)" },
  { name: "JavaScript", color: "from-yellow-400 to-yellow-600", glow: "rgba(250, 204, 21, 0.4)" },
  { name: "Tailwind CSS", color: "from-cyan-400 to-teal-500", glow: "rgba(34, 211, 238, 0.4)" },
  { name: "Bootstrap", color: "from-blue-400 to-blue-600", glow: "rgba(59, 130, 246, 0.4)" },
  { name: "Framer Motion", color: "from-purple-400 to-pink-500", glow: "rgba(168, 85, 247, 0.4)" },
  { name: "Git", color: "from-orange-400 to-red-500", glow: "rgba(251, 146, 60, 0.4)" },
];

function SkillsSectionComponent({ isDarkMode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="skills" className={`relative py-32 px-6 overflow-hidden ${isDarkMode ? "bg-black" : "bg-transparent"}`}>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-20">
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Tech Arsenal</h2>
          <p className={`${isDarkMode ? "text-white/60" : "text-gray-700/80"} max-w-2xl mx-auto`}>Technologies I use to bring ideas to life</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div key={skill.name} initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 200 }} whileHover={{ scale: 1.15 }}>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3 + (index % 3), repeat: Infinity, ease: "easeInOut" }} className="relative">
                <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: `0 0 40px ${skill.glow}` }} />
                <div className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${skill.color} p-1`}>
                  <div className={`w-full h-full rounded-full flex items-center justify-center border ${isDarkMode ? "bg-black/80 border-white/10 text-white" : "bg-white/90 border-gray-200 text-gray-800"} backdrop-blur-sm`}>
                    <span className="text-center px-4">{skill.name}</span>
                  </div>
                </div>

                <motion.div className={`absolute inset-0 rounded-full bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20`} animate={{ scale: [1, 1.2, 1], opacity: [0, 0.3, 0] }} transition={{ duration: 2, repeat: Infinity }} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const SkillsSection = memo(SkillsSectionComponent);
