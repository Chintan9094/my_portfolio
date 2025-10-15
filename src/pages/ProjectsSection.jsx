import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack online store with cart, payments & admin dashboard',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time messaging app with AI-powered responses',
    tech: ['React', 'WebSocket', 'OpenAI', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Portfolio Dashboard',
    description: 'Analytics dashboard with interactive charts & data visualization',
    tech: ['React', 'Recharts', 'TypeScript', 'API'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Task Management App',
    description: 'Kanban-style task manager with drag & drop functionality',
    tech: ['Next.js', 'DnD Kit', 'Zustand', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    title: 'Weather Forecast',
    description: 'Beautiful weather app with animations & location detection',
    tech: ['React', 'Weather API', 'Motion', 'Geolocation'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-sky-500 to-indigo-600',
  },
  {
    title: 'Music Player',
    description: 'Spotify-inspired music player with playlists & audio controls',
    tech: ['React', 'Web Audio API', 'Tailwind', 'Context'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-pink-500 to-rose-600',
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A showcase of my recent work - from concept to deployment
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.2)]" />

                <div className="relative z-10">
                  <h3 className="text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-white/60 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-shadow"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>

                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 flex items-center justify-center border border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all"
                    >
                      <Github className="w-5 h-5 text-cyan-400" />
                    </motion.a>
                  </div>
                </div>

                <motion.div
                  className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
