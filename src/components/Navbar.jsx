import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      <nav
        className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-nav transition-all duration-300 transform hover:scale-[1.02] shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/15 max-w-full"
        role="navigation"
        aria-label="Main Navigation"
      >
        <button
          onClick={() => scrollTo('about')}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 hover-target ${
            activeSection === 'about'
              ? 'bg-white text-neutral-950 shadow-md'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
        >
          About
        </button>

        <button
          onClick={() => scrollTo('services')}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 hover-target ${
            activeSection === 'services'
              ? 'bg-white text-neutral-950 shadow-md'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
        >
          Services
        </button>

        <button
          onClick={() => scrollTo('contact')}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 hover-target ${
            activeSection === 'contact'
              ? 'bg-white text-neutral-950 shadow-md'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}
