import { StarfieldBackground } from "./components/StarfieldBackground";
import { CursorGlow } from "./components/CursorGlow";
import { HeroSection } from "./pages/HeroSection";
import { AboutSection } from "./pages/AboutSection";
import { SkillsSection } from "./pages/SkillsSection";
import { ProjectsSection } from "./pages/ProjectsSection";
import { ContactSection } from "./pages/ContactSection";
import { Footer } from "./components/Footer";
import { useState } from "react";
import Preloader from "./components/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <>
      {/* Preloader */}
      {loading && <Preloader theme={isDarkMode ? "dark" : "light"} onFinish={() => setLoading(false)} />}

      {/* Portfolio main content */}
      {!loading && (
        <div className={`relative min-h-screen overflow-x-hidden ${isDarkMode ? "dark bg-black text-white" : "bg-white text-black"}`}>

          <StarfieldBackground />
          <CursorGlow />

          {/* Main sections */}
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
