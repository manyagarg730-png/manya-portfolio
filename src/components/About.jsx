import React, { useState } from 'react';
import { 
  Megaphone, 
  Search, 
  Palette, 
  Code2, 
  Sparkles, 
  GraduationCap, 
  Award, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { aboutData, educationAndCertifications } from '../data/portfolioData';

export default function About() {
  const [selectedDomain, setSelectedDomain] = useState(aboutData.domains[0].id);

  const iconMap = {
    Megaphone: Megaphone,
    Search: Search,
    Palette: Palette,
    Code2: Code2,
    Sparkles: Sparkles,
  };

  const domainSkills = {
    marketing: [
      "Social Media Management & Strategy",
      "Content Planning & Editorial Calendars",
      "Instagram Marketing & High-Retention Reels",
      "Google Ads Campaign Setup & Management",
      "Trend & Competitor Intelligence",
      "Campaign Conversion Optimization"
    ],
    seo: [
      "On-Page SEO Optimization",
      "Comprehensive Keyword Research & Mapping",
      "Meta Tag & Title Architecture",
      "Topical Authority & Content Clustering",
      "SEO Content Writing & Structuring",
      "Search Intent & SERP Gap Analysis"
    ],
    creative: [
      "Canva Pro & Brand Systems",
      "Figma UI/UX & Responsive Wireframing",
      "Adobe Photoshop & Image Editing",
      "Adobe Illustrator & Graphic Vectors",
      "Promotional Brochures & Newsletters",
      "Visual Storytelling & Creative Direction"
    ],
    web: [
      "WordPress CMS Architecture",
      "Elementor Pro Visual Building",
      "Semantic HTML5 & Modern CSS3",
      "Responsive Cross-Device Layouts",
      "GitHub Version Management",
      "Vercel Modern Web Deployment"
    ],
    ai: [
      "ChatGPT (Advanced Prompt Engineering)",
      "Claude (Long-Form Synthesis & Tone Tuning)",
      "Google Gemini (Real-Time Trend Synthesis)",
      "Antigravity (Agentic Code & Productivity)",
      "AI-Augmented Research & Content Outlining",
      "Automated SEO Meta & Schema Drafting"
    ]
  };

  const currentDomain = aboutData.domains.find(d => d.id === selectedDomain);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12151E] border border-white/10 text-xs font-mono text-[#00F5A0] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT & CORE DOMAINS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Strategic Mindset. <br />
            <span className="text-gradient-accent">Creative & Technical Execution.</span>
          </h2>
        </div>

        {/* Narrative & Credentials Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg font-normal">
            <p>
              I am a <strong className="text-white font-semibold">BCA graduate from Bennett University</strong> with dedicated specialization in <strong className="text-white font-semibold">Digital Marketing, Social Media Strategy, On-Page SEO, and Creative Design</strong>.
            </p>
            <p className="text-slate-400">
              Rather than treating marketing and design as isolated silos, I look at the full digital funnel: from discovering what users actually search for (SEO & keyword mapping), to designing scroll-stopping visual assets (Canva, Figma, Reels), to building responsive web destinations (WordPress, Elementor) and accelerating the entire lifecycle with modern AI tools.
            </p>
            <p className="text-slate-400">
              Whether orchestrating social media campaigns that drove a <strong className="text-[#00F5A0] font-medium">+40% engagement lift</strong>, running Google Ads boosting conversion rates by <strong className="text-[#00D9F5] font-medium">+25%</strong>, or cutting website development timelines by <strong className="text-amber-400 font-medium">30%</strong>, my goal is always measurable business impact.
            </p>

            {/* Education & Certification Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Bennett University */}
              <div className="p-4 rounded-xl bg-[#12151E] border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-2.5 text-[#00F5A0] mb-2">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">Education</span>
                </div>
                <h4 className="font-heading font-bold text-white text-sm">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-xs text-slate-400 mt-1">Bennett University • Greater Noida</p>
                <span className="inline-block mt-2 text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">2022 – 2025</span>
              </div>

              {/* DIDM Certification */}
              <div className="p-4 rounded-xl bg-[#12151E] border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-2.5 text-[#00D9F5] mb-2">
                  <Award className="w-5 h-5" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">Certification</span>
                </div>
                <h4 className="font-heading font-bold text-white text-sm">Digital Marketing AI Course</h4>
                <p className="text-xs text-slate-400 mt-1">DIDM • Delhi Institute of Digital Marketing</p>
                <span className="inline-block mt-2 text-[11px] font-mono px-2 py-0.5 rounded bg-[#00D9F5]/10 text-[#00D9F5]">Advance AI Marketing</span>
              </div>

            </div>
          </div>

          {/* Right Column: "What I Work With" Interactive Domain Hub */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 border border-white/10">
            <h3 className="font-heading font-bold text-lg text-white mb-2 flex items-center justify-between">
              <span>What I Work With</span>
              <span className="text-xs font-mono text-slate-400">Interactive Domain Hub</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">Select a discipline to explore real competencies & toolchains:</p>

            {/* Domain Selector Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {aboutData.domains.map((domain) => {
                const Icon = iconMap[domain.icon];
                const isActive = selectedDomain === domain.id;
                return (
                  <button
                    key={domain.id}
                    onClick={() => setSelectedDomain(domain.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-[#090A0F] font-bold shadow-md shadow-[#00F5A0]/20'
                        : 'bg-[#161B26] text-slate-300 hover:text-white hover:bg-[#1E2536] border border-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{domain.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Domain Detail Card */}
            {currentDomain && (
              <div className="p-4 rounded-xl bg-[#090A0F]/80 border border-white/10 space-y-4 animate-fadeIn">
                <div>
                  <h4 className="font-heading font-bold text-white text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00F5A0]"></span>
                    <span>{currentDomain.title}</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {currentDomain.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2.5">
                    Core Capabilities & Methods:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {domainSkills[currentDomain.id]?.map((skill, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00F5A0] shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
