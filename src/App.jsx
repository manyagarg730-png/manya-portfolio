import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProcessAndAi from './components/ProcessAndAi';
import Skills from './components/Skills';
import SeoShowcase from './components/SeoShowcase';
import Insights from './components/Insights';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F1F5F9] relative selection:bg-[#00F5A0] selection:text-[#090A0F]">
      
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Semantic Content Area */}
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <ProcessAndAi />
        <Skills />
        <SeoShowcase />
        <Insights />
        <ResumeSection />
        <Contact />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
