import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Hero";
import About from "../pages/AboutSection";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/ContactSection";

export default function AppRoutes() {
  return (
    <Router>
      <div className="bg-[#0B0F19] text-gray-200 min-h-screen font-mono">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
