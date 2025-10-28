import { motion, useInView } from "framer-motion";
import { memo, useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "News Cart",
    description: "Dynamic news aggregator that fetches real-time headlines and categorizes them by topics with smooth UI animations.",
    tech: ["Next.js", "Bootstrap CSS", "Framer Motion"],
    liveUrl: "https://newscart.org/",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Guj Prajapati Samaj",
    description: "Community web platform built for Prajapati Samaj to share events, member directories, and announcements.",
    tech: ["React", "Tailwind CSS"],
    liveUrl: "https://gujaratprajapatisamaj.com/",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Hotel Booking System",
    description: "Modern booking platform with real-time room availability, secure payments, and admin panel for hotel management.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    liveUrl: "#",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Online Learning Platform",
    description: "E-learning app with interactive video lessons, progress tracking, and student dashboards for a seamless study experience.",
    tech: ["Python", "MySQL", "Flask", "Tailwind CSS"],
    liveUrl: "#",
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "KnighOne",
    description: "Corporate business landing page featuring smooth animations, responsive layouts, and clean minimal design.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    gradient: "from-sky-500 to-indigo-600",
  },
  {
    title: "Personal Portfolio",
    description: "My own portfolio website showcasing my projects, skills, and creative web design powered by motion effects.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://my-portfolio-lyart-delta-8w3yyc3k0p.vercel.app/",
    gradient: "from-pink-500 to-rose-600",
  },
];

function ProjectsSectionComponent({ isDarkMode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" ref={ref} className={`relative py-32 px-6 overflow-hidden ${isDarkMode ? "bg-black" : "bg-transparent"}`}>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-20">
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Featured Projects</h2>
          <p className={`${isDarkMode ? "text-white/60" : "text-gray-700/80"} max-w-2xl mx-auto`}>A showcase of my recent work - from concept to deployment</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -10 }} className="group relative">
              <div className={`relative h-full p-6 rounded-2xl transition-all duration-300 overflow-hidden ${isDarkMode ? "bg-white/5 border border-cyan-400/20 hover:border-cyan-400/50" : "glass-card border border-transparent hover:shadow-lg"}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.12)]" />

                <div className="relative z-10">
                  <h3 className={`${isDarkMode ? "text-white" : "text-gray-800"} mb-3 group-hover:text-cyan-400 transition-colors`}>{project.title}</h3>

                  <p className={`${isDarkMode ? "text-white/60" : "text-gray-700/80"} mb-4 leading-relaxed`}>{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className={`px-3 py-1 text-xs rounded-full border ${isDarkMode ? "bg-cyan-400/10 text-cyan-400 border-cyan-400/20" : "bg-gray-100 text-gray-800 border-gray-200"}`}>{tech}</span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.liveUrl && project.liveUrl !== "#" ? (
                      <motion.a aria-label={`Open ${project.title} live demo`} href={project.liveUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-shadow ${isDarkMode ? "bg-gradient-to-r from-cyan-500 to-purple-600" : "bg-gradient-to-r from-cyan-400 to-blue-500 text-white"}`}>
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    ) : (
                      <button aria-disabled="true" disabled className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-not-allowed bg-gray-200 text-gray-500">
                        <ExternalLink className="w-4 h-4" />
                        <span>Not Available</span>
                      </button>
                    )}
                  </div>
                </div>

                <motion.div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30`} style={{ background: `linear-gradient(135deg, ${project.gradient.split(" to ").join(", ")})` }} animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const ProjectsSection = memo(ProjectsSectionComponent);
