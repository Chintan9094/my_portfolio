import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-cyan-400/10">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/50 text-center md:text-left"
          >
            © 2025 Chintan. Crafted with{' '}
            <span className="text-cyan-400">React</span> &{' '}
            <span className="text-purple-400">Motion</span>
          </motion.p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-shadow group"
          >
            <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
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
          <p className="text-white/30 text-sm">
            Built with Next.js · Tailwind CSS · Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
