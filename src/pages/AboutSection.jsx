import { motion, useInView } from "framer-motion";
import { memo, useRef } from "react";
import { GraduationCap, Briefcase, Code, Rocket } from "lucide-react";

const timeline = [
  {
    year: "March 2020",
    title: "Higher Secondary (12th – Commerce)",
    description: "Completed Higher Secondary education with a strong foundation in Commerce subjects.",
    icon: GraduationCap,
  },
  {
    year: "March 2023",
    title: "Bachelor of Commerce (B.Com)",
    description: "Completed B.Com degree, building a solid understanding of business, finance, and management concepts.",
    icon: GraduationCap,
  },
  {
    year: "Since 2023",
    title: "Project Development Journey",
    description: "Started building real-world and production-ready web applications using modern web technologies.",
    icon: Code,
  },
  {
    year: "Jan 2025",
    title: "First Internship",
    description: "Gained hands-on industry experience, working on real projects and learning professional development practices.",
    icon: Briefcase,
  },
  {
    year: "April 2025",
    title: "MCA Completed",
    description: "Successfully completed Master of Computer Applications with a focus on software development and modern web technologies.",
    icon: GraduationCap,
  },
  {
    year: "Oct 2025 – Present",
    title: "Junior Software Developer",
    description: "Working as a Junior Software Developer, contributing to live projects, collaborating with teams, and building scalable applications.",
    icon: Rocket,
  },
];


function AboutSectionComponent({ isDarkMode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="about" className={`relative py-32 md:py-24 px-6 overflow-hidden ${isDarkMode ? "bg-black" : "bg-transparent"}`}>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-20">
          <h2 className="mb-4 bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">My Journey</h2>
          <p className={`${isDarkMode ? "text-white/60" : "text-gray-700/80"} max-w-2xl mx-auto`}>From commerce to code - a path driven by curiosity and passion for creating digital experiences</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div key={index} initial={{ opacity: 0, x: isEven ? -50 : 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className={`flex items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}>
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-center`}>
                    <motion.div whileHover={{ scale: 1.02 }} className={`inline-block p-6 rounded-2xl transition-all ${isDarkMode ? "bg-white/5 text-white border border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]" : "glass-card text-gray-800 border border-transparent hover:shadow-lg"}`}>
                      <div className={`${isDarkMode ? "text-cyan-400" : "text-purple-600"} mb-2`}>{item.year}</div>
                      <h3 className={`${isDarkMode ? "text-white" : "text-gray-800"} mb-2`}>{item.title}</h3>
                      <p className={`${isDarkMode ? "text-white/60" : "text-gray-700/80"}`}>{item.description}</p>
                    </motion.div>
                  </div>

                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.6 }} className="relative z-10 w-16 h-16 rounded-full bg-linear-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.4)]">
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

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

export const AboutSection = memo(AboutSectionComponent);
