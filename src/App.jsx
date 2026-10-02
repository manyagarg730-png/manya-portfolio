import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d0305] text-white flex flex-col overflow-x-hidden">
      {/* Magnetic Cursor */}
      <CustomCursor />

      {/* Floating Pill Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Full-screen Interactive Character Hero Section */}
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Comprehensive About Section */}
        <AboutSection />

        {/* 3. Complete SEO Services Grid */}
        <ServicesSection />

        {/* 4. Direct Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
