import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/helper/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import CV from "./components/CV";
import SplashCursor from "./components/SplashCursor";

const App = () => {
  return (
    <div className="bg-white text-white min-h-screen">
      <SplashCursor />
      <Navbar />
      <main className="pt-14">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/features" element={<Features />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/reviews" element={<Reviews />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
