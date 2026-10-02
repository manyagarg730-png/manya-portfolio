import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#080103] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Brand info */}
        <div>
          <span className="font-script text-3xl text-white block">
            Manya Garg
          </span>
          <p className="text-xs text-neutral-400 mt-1">
            SEO Expert & Search Visibility Specialist &copy; {new Date().getFullYear()}
          </p>
        </div>

        {/* Center Tagline */}
        <p className="text-xs text-neutral-400 text-center sm:text-left max-w-sm">
          Helping modern brands conquer search engines with white-hat, data-backed SEO strategies.
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 hover-target"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
