import { StarfieldBackground } from "./components/StarfieldBackground";
import { CursorGlow } from "./components/CursorGlow";
import { HeroSection } from "./pages/HeroSection";
import { AboutSection } from "./pages/AboutSection";
import { SkillsSection } from "./pages/SkillsSection";
import { ProjectsSection } from "./pages/ProjectsSection";
import { ContactSection } from "./pages/ContactSection";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);
   const [isDarkMode, setIsDarkMode] = useState(() => {
    // ✅ Load from localStorage (if available)
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") return true;
    if (storedTheme === "light") return false;

    // Default: match system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // ✅ Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // ✅ Apply body class for global styling (Tailwind dark mode)
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      {loading && <Preloader theme={isDarkMode ? "dark" : "light"} onFinish={() => setLoading(false)} />}

      {!loading && (
        <div className={`relative min-h-screen overflow-x-hidden transition-colors duration-700 ${isDarkMode ? "dark bg-black text-white" : "bg-[radial-gradient(circle_at_top_left,_#e6fbff,_#f6ecff_35%)] text-gray-800"}`}>
          <StarfieldBackground />
          <CursorGlow />

          <main className="relative z-10">
            <HeroSection isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <AboutSection isDarkMode={isDarkMode} />
            <SkillsSection isDarkMode={isDarkMode} />
            <ProjectsSection isDarkMode={isDarkMode} />
            <ContactSection isDarkMode={isDarkMode} />
            <Footer isDarkMode={isDarkMode} />
          </main>
        </div>
      )}
    </>
  );
}
