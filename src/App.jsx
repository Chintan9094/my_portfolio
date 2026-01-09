import { useEffect, useState, Suspense, lazy } from "react";
import Preloader from "./components/Preloader";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const StarfieldBackground = lazy(() =>
  import("./components/StarfieldBackground").then((m) => ({
    default: m.StarfieldBackground,
  }))
);
const CursorGlow = lazy(() =>
  import("./components/CursorGlow").then((m) => ({
    default: m.CursorGlow,
  }))
);
const HeroSection = lazy(() =>
  import("./pages/HeroSection").then((m) => ({
    default: m.HeroSection,
  }))
);
const AboutSection = lazy(() =>
  import("./pages/AboutSection").then((m) => ({
    default: m.AboutSection,
  }))
);
const SkillsSection = lazy(() =>
  import("./pages/SkillsSection").then((m) => ({
    default: m.SkillsSection,
  }))
);
const ProjectsSection = lazy(() =>
  import("./pages/ProjectsSection").then((m) => ({
    default: m.ProjectsSection,
  }))
);
const ContactSection = lazy(() =>
  import("./pages/ContactSection").then((m) => ({
    default: m.ContactSection,
  }))
);
const Footer = lazy(() =>
  import("./components/Footer").then((m) => ({
    default: m.Footer,
  }))
);

export default function App() {

  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") return true;
    if (storedTheme === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

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
              : "bg-[radial-gradient(circle_at_top_left,#e6fbff,#f6ecff_35%)] text-gray-800"
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
