import { motion, AnimatePresence } from "framer-motion";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  document.body.style.overflow = "hidden";

  const handleClose = () => {
    document.body.style.overflow = "auto";
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-[10px]"
          aria-modal="true"
          role="dialog"
          aria-label="Resume modal"
        >
          <motion.button
            onClick={handleClose}
            initial={{ opacity: 0, x: 50, y: -50, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, y: -50, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute top-6 right-6 text-cyan-400 text-3xl 
                   hover:text-purple-400 transition-all duration-300 z-50 
                   bg-gray-900/20 backdrop-blur-md rounded-full w-12 h-12 
                   flex items-center justify-center shadow-lg"
            title="Close"
          >
            ✕
          </motion.button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="relative w-[90%] md:w-[70%] lg:w-[60%] h-[80%] 
                    bg-linear-to-br from-cyan-900/40 to-purple-900/40 
                    backdrop-blur-2xl border border-cyan-400/30 
                    rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.3)] overflow-hidden"
          >
            <iframe
              src="/Chintan-Resume.pdf"
              className="w-full h-full rounded-xl"
              title="Chintan Resume"
              loading="lazy"
            ></iframe>

            <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-cyan-500/10 to-transparent pointer-events-none"></div>
            <motion.a
              href="/Chintan-Resume.pdf"
              download
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0,255,255,0.6)",
              }}
              className="absolute bottom-5 left-1/2 -translate-x-1/2 px-8 py-3 
                      bg-linear-to-t from-cyan-500 to-purple-600 rounded-full 
                      text-white font-medium shadow-[0_0_20px_rgba(0,255,255,0.3)] 
                      hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
