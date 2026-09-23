import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080C] border-t border-white/10 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand Monogram & Positioning */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00F5A0] to-[#00D9F5] p-[1.5px]">
              <div className="w-full h-full bg-[#090A0F] rounded-[10px] flex items-center justify-center">
                <span className="font-display font-extrabold text-xs text-gradient-accent">MG</span>
              </div>
            </div>
            <div>
              <div className="font-heading font-bold text-base text-white">Manya Garg</div>
              <p className="text-xs font-mono text-slate-500">Digital Marketing • SEO • Social Media • Creative</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#seo" className="hover:text-white transition-colors">SEO Hub</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#00F5A0] transition-colors">Resume</a>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#12151E] hover:bg-[#1A1F2C] text-slate-400 hover:text-white border border-white/5 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/finsense_iitian_singh/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#12151E] hover:bg-[#1A1F2C] text-slate-400 hover:text-white border border-white/5 transition-colors"
              aria-label="FinSense Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={'mailto:' + personalInfo.email}
              className="p-2.5 rounded-xl bg-[#12151E] hover:bg-[#1A1F2C] text-slate-400 hover:text-white border border-white/5 transition-colors"
              aria-label="Email Manya Garg"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#161B26] hover:bg-[#00F5A0] hover:text-[#090A0F] text-slate-300 border border-white/10 transition-all ml-2 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 Manya Garg. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-600">
            Engineered with React, Tailwind CSS & Semantic SEO Architecture
          </p>
        </div>

      </div>
    </footer>
  );
}
