import { memo, useEffect, useState, useRef } from "react";

function CursorGlowComponent() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const rafIdRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setIsVisible(true);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      const clientX = e.clientX;
      const clientY = e.clientY;
      rafIdRef.current = requestAnimationFrame(() => {
        setPosition({ x: clientX, y: clientY });
      });
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed z-50 hidden md:block" style={{ left: `${position.x}px`, top: `${position.y}px`, transform: "translate(-50%, -50%)" }}>
      <div className="w-8 h-8 bg-cyan-400/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute inset-0 w-4 h-4 bg-purple-500/40 rounded-full blur-md m-auto" />
    </div>
  );
}

export const CursorGlow = memo(CursorGlowComponent);
