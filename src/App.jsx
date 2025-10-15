import { StarfieldBackground } from "./components/StarfieldBackground";
import { CursorGlow } from "./pages/CursorGlow";
import { HeroSection } from "./pages/HeroSection";
import { AboutSection } from "./pages/AboutSection";
import { SkillsSection } from "./pages/SkillsSection";
import { ProjectsSection } from "./pages/ProjectsSection";
import { ContactSection } from "./pages/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <StarfieldBackground />
      <CursorGlow />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
