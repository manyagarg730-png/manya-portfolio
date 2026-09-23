import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'process', 'seo', 'insights', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Process & AI', href: '#process', id: 'process' },
    { name: 'SEO Hub', href: '#seo', id: 'seo' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F5A0] to-[#00D9F5] p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#090A0F] rounded-[10px] flex items-center justify-center">
              <span className="font-display font-extrabold text-sm tracking-tight text-gradient-accent">MG</span>
            </div>
          </div>
          <div>
            <div className="font-heading font-bold text-base sm:text-lg text-white tracking-tight flex items-center gap-2">
              <span>Manya Garg</span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse"></span>
            </div>
            <p className="text-[11px] font-mono text-slate-400 hidden sm:block tracking-wider uppercase">Marketing × SEO × Creative</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#12151E]/80 px-4 py-1.5 rounded-full border border-white/10 shadow-lg backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? 'bg-white/10 text-[#00F5A0] shadow-sm font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Resume & Connect */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Manya_Garg_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#1A1F2C] border border-white/10 hover:border-[#00F5A0]/50 hover:bg-[#202738] transition-all duration-200 group"
          >
            <Download className="w-3.5 h-3.5 text-[#00F5A0] group-hover:translate-y-0.5 transition-transform" />
            <span>Resume</span>
          </a>
          
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#090A0F] bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] hover:opacity-90 transition-all duration-200 shadow-sm shadow-[#00F5A0]/20"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-[#12151E] border border-white/10 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#00F5A0]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-white/10 px-6 py-6 mt-3 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#00F5A0]/10 text-[#00F5A0] font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Manya_Garg_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-[#1A1F2C] border border-white/10"
            >
              <Download className="w-4 h-4 text-[#00F5A0]" />
              <span>Download Resume PDF</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-[#090A0F] bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
