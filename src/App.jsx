import { useEffect, useState, Suspense, lazy } from "react";
import Preloader from "./components/Preloader";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

// ✅ Import your notification helper
import { showWelcomeNotification } from "./utils/showNotification"; // 👈 create this file (explained below)

// Lazy-loaded components for code-splitting without changing visuals
const StarfieldBackground = lazy(() => import("./components/StarfieldBackground").then(m => ({ default: m.StarfieldBackground })));
const CursorGlow = lazy(() => import("./components/CursorGlow").then(m => ({ default: m.CursorGlow })));
const HeroSection = lazy(() => import("./pages/HeroSection").then(m => ({ default: m.HeroSection })));
const AboutSection = lazy(() => import("./pages/AboutSection").then(m => ({ default: m.AboutSection })));
const SkillsSection = lazy(() => import("./pages/SkillsSection").then(m => ({ default: m.SkillsSection })));
const ProjectsSection = lazy(() => import("./pages/ProjectsSection").then(m => ({ default: m.ProjectsSection })));
const ContactSection = lazy(() => import("./pages/ContactSection").then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

export default function App() {
  useEffect(() => {
    document.title = "Chintan Rabari | Frontend Developer Portfolio";
  }, []);

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

  // 🚀 Show welcome notification once Preloader is done
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        showWelcomeNotification();
      }, 2000); // small delay looks cooler 😎
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      {loading && (
        <Preloader
          theme={isDarkMode ? "dark" : "light"}
          onFinish={() => setLoading(false)}
        />
      )}

      {!loading && (
        <div
          className={`relative min-h-screen overflow-x-hidden transition-colors duration-700 ${
            isDarkMode
              ? "dark bg-black text-white"
              : "bg-[radial-gradient(circle_at_top_left,_#e6fbff,_#f6ecff_35%)] text-gray-800"
          }`}
        >
          <Suspense fallback={null}>
            <StarfieldBackground />
            <CursorGlow />
          </Suspense>

          <main className="relative z-10">
            <Suspense fallback={null}>
              <HeroSection
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <AboutSection isDarkMode={isDarkMode} />
              <SkillsSection isDarkMode={isDarkMode} />
              <ProjectsSection isDarkMode={isDarkMode} />
              <ContactSection isDarkMode={isDarkMode} />
              <Footer isDarkMode={isDarkMode} />
            </Suspense>
          </main>
        </div>
      )}
      <Analytics />
      <SpeedInsights />
    </>
  );
}
