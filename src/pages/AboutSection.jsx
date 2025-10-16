import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code, Rocket } from "lucide-react";

const timeline = [
  { year: "March-2020", title: "12th Standard", description: "Completed Higher Secondary Education with a focus on Commerce", icon: GraduationCap },
  { year: "March-2023", title: "B.Com Degree", description: "Completed Bachelor of Commerce, building foundational business knowledge", icon: GraduationCap },
  { year: "April-2025", title: "MCA Program", description: "Master of Computer Applications - Specialized in software development", icon: GraduationCap },
  { year: "Jan-2025", title: "First Internship", description: "Started hands-on development work, learning modern tech stacks", icon: Briefcase },
  { year: "Since 2023", title: "Building Projects", description: "Creating production-ready applications with React & Next.js", icon: Code },
  { year: "Now", title: "Frontend Developer", description: "Crafting beautiful, performant web experiences", icon: Rocket },
];

export function AboutSection({ isDarkMode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="about" className={`relative py-32 md:py-24 px-6 overflow-hidden ${isDarkMode ? "bg-black" : "bg-white"}`}>

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className={`${isDarkMode ? "text-white/60" : "text-black/70"} max-w-2xl mx-auto`}>
            From commerce to code - a path driven by curiosity and passion for creating digital experiences
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-center`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`inline-block p-6 rounded-2xl backdrop-blur-sm transition-all ${
                        isDarkMode
                          ? "bg-white/5 text-white border border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]"
                          : "bg-white/80 text-black border border-gray-300 hover:border-gray-400 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]"
                      }`}
                    >
                      <div className={`${isDarkMode ? "text-cyan-400" : "text-purple-600"} mb-2`}>
                        {item.year}
                      </div>
                      <h3 className={`${isDarkMode ? "text-white" : "text-black"} mb-2`}>
                        {item.title}
                      </h3>
                      <p className={`${isDarkMode ? "text-white/60" : "text-black/70"}`}>
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.4)]"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
