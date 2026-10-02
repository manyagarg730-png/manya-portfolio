import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import CharacterCanvas from './CharacterCanvas';

export default function HeroSection({ onOpenResume }) {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-screen h-screen overflow-hidden flex flex-col justify-end bg-[#cb1419]"
      aria-label="Hero Introduction"
    >
      {/* 60 FPS Zero-ghosting interactive character canvas */}
      <CharacterCanvas />

      {/* Hero Content Overlay: Positioned bottom-left with luxury spacing away from the character */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-14 left-5 sm:left-10 md:left-14 lg:left-20 z-10 max-w-[340px] sm:max-w-sm md:max-w-md space-y-3.5 sm:space-y-4 pointer-events-none">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/95 text-[11px] sm:text-xs font-medium tracking-wide shadow-lg pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="w-2 h-2 -ml-3 rounded-full bg-emerald-400"></span>
          <span>Available for SEO Projects & Consulting</span>
        </div>

        {/* Small intro heading */}
        <div className="space-y-0.5 sm:space-y-1">
          <span className="text-white/90 text-base sm:text-lg md:text-xl font-light tracking-wide block">
            Hi, I'm
          </span>
          {/* Main Name in stylish Cursive / Script Font */}
          <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold tracking-normal drop-shadow-[0_4px_25px_rgba(0,0,0,0.6)] transform -rotate-1 select-none">
            Manya Garg
          </h1>
        </div>

        {/* Short Hero Bio */}
        <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed font-light max-w-[320px] sm:max-w-[340px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          Hi, I'm Manya Garg, an SEO expert helping websites rank higher on Google and grow organic traffic.
        </p>

        {/* Action Buttons: Resume Button preserved EXACTLY as instructed */}
        <div className="flex flex-wrap items-center gap-3 pt-1 pointer-events-auto">
          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-neutral-950 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:bg-neutral-100 shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover-target"
          >
            <span>Resume</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Let's Talk Button */}
          <button
            onClick={scrollToContact}
            className="glass-btn px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 transform hover:scale-105 shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover-target"
          >
            Let's Talk
          </button>
        </div>

      </div>

      {/* Floating Mini Stat Pill at Bottom Right */}
      <div className="absolute right-4 sm:right-10 bottom-8 sm:bottom-12 hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 text-white/90 text-xs shadow-xl pointer-events-auto">
        <div className="w-8 h-8 rounded-xl bg-[#cb1419]/40 border border-white/20 flex items-center justify-center text-white">
          <TrendingUp className="w-4 h-4" />
        </div>
        <div>
          <div className="font-bold text-white text-sm">+320% Avg Growth</div>
          <div className="text-white/70 text-[11px]">Organic Search Visibility</div>
        </div>
      </div>
    </section>
  );
}
