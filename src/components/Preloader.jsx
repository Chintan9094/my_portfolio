import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code, Cpu, Terminal } from "lucide-react";

export default function Preloader({ theme = "dark", onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, 1400); // slightly shorter
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  const bgColor = theme === "dark" ? "bg-black" : "bg-white";
  const dotGradient = theme === "dark" ? "bg-gradient-to-r from-cyan-400 via-green-400 to-purple-500" : "bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400";
  const textGradient = theme === "dark" ? "from-cyan-400 via-green-400 to-purple-500" : "from-pink-500 via-orange-400 to-yellow-400";
  const iconColor = theme === "dark" ? "text-cyan-400" : "text-pink-500";

  const floatingIcons = [
    { Icon: Code, delay: 0 },
    { Icon: Cpu, delay: 1 },
    { Icon: Terminal, delay: 2 },
    { Icon: Code, delay: 1.5 },
    { Icon: Cpu, delay: 0.5 },
    { Icon: Terminal, delay: 2.5 },
  ];

  const randomPosition = () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    marginLeft: `${Math.random() * 40 - 20}px`,
    marginTop: `${Math.random() * 40 - 20}px`,
  });

  return (
    <div className={`${bgColor} fixed inset-0 flex flex-col items-center justify-center z-50 overflow-hidden`}>
      <div className="absolute inset-0 pointer-events-none z-0">
        {floatingIcons.map(({ Icon, delay }, index) => (
          <motion.div key={index} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0.2, 0.5, 0.2], scale: 1, y: [0, -20, 0] }} transition={{ opacity: { duration: 3, repeat: Infinity, delay }, scale: { duration: 0.5, delay }, y: { duration: 4, repeat: Infinity, delay } }} className="absolute" style={randomPosition()}>
            <Icon className={`w-10 h-10 ${iconColor}`} strokeWidth={1.5} />
          </motion.div>
        ))}
      </div>

      <motion.div className="flex space-x-3 relative z-10" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
        {[...Array(3)].map((_, i) => (
          <motion.div key={i} className={`w-4 h-4 rounded-full ${dotGradient} shadow-[0_0_12px_rgba(0,255,255,0.6)]`} animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }} transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.1 * i, ease: "easeInOut" }} />
        ))}
      </motion.div>

      <motion.p className={`mt-8 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${textGradient}`} animate={{ y: [0, -5, 0], opacity: [0.8, 1, 0.8] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}>
        Loading Digital Dreams...
      </motion.p>
    </div>
  );
}
