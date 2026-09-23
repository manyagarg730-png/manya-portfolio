import React, { useState } from 'react';
import { 
  Search, 
  CheckCircle2, 
  Terminal, 
  ExternalLink 
} from 'lucide-react';
import { seoArchitectureData } from '../data/portfolioData';

export default function SeoShowcase() {
  const schemaPreview = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://manyagarg.com/#person",
      "name": "Manya Garg",
      "jobTitle": "Digital Marketing & SEO Specialist",
      "alumniOf": "Bennett University",
      "knowsAbout": [
        "Digital Marketing",
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Strategy",
        "Google Ads",
        "UI/UX Design"
      ]
    },
    {
      "@type": "WebSite",
      "name": "Manya Garg Portfolio",
      "publisher": { "@id": "https://manyagarg.com/#person" }
    }
  ]
}`;

  return (
    <section id="seo" className="py-24 relative bg-[#0B0D14] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12151E] border border-white/10 text-xs font-mono text-[#00F5A0] mb-4">
              <Search className="w-3.5 h-3.5" />
              <span>TECHNICAL SEO DEMONSTRATION</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              SEO Built into the <br />
              <span className="text-gradient-accent">Foundation of this Site</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-sm leading-relaxed">
            Demonstrating search engine knowledge through live code architecture: structured schemas, semantic tagging, canonical routing, and crawl efficiency.
          </p>
        </div>

        {/* Interactive Architecture Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Feature Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {seoArchitectureData.features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-[#12151E]/90 border border-white/10 hover:border-[#00F5A0]/30 transition-all space-y-2 group"
                >
                  <div className="flex items-center gap-2 text-[#00F5A0]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                    <h4 className="font-heading font-bold text-sm text-white">{feat.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feat.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Keyword Strategy Card */}
            <div className="p-5 rounded-xl bg-[#090A0F] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Target Keyword Ecosystem (Natural Alignment):
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Manya Garg",
                  "Digital Marketing Professional",
                  "SEO Portfolio",
                  "Social Media Strategist India",
                  "Content Strategy & Google Ads",
                  "Topical Authority Framework"
                ].map((kw, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#161B26] text-slate-300 border border-white/5">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live Schema & Asset Inspector */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 border border-white/10 bg-[#12151E]/80 space-y-4">
            
            {/* Inspector Tab Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#00F5A0]" />
                <span className="text-xs font-mono text-slate-300">Live Structured Data Inspector</span>
              </div>
              <div className="flex gap-1.5 text-xs font-mono">
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  className="px-2.5 py-1 rounded bg-[#090A0F] text-slate-400 hover:text-white border border-white/5 flex items-center gap-1"
                >
                  <span>sitemap.xml</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="/robots.txt"
                  target="_blank"
                  className="px-2.5 py-1 rounded bg-[#090A0F] text-slate-400 hover:text-white border border-white/5 flex items-center gap-1"
                >
                  <span>robots.txt</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Code Block for Schema.org */}
            <div className="rounded-xl bg-[#090A0F] p-4 border border-white/5 font-mono text-xs text-slate-300 overflow-x-auto">
              <div className="text-slate-500 mb-2">// JSON-LD schema injected into head tag</div>
              <pre className="text-[#00F5A0]/90 leading-relaxed font-mono">
                {schemaPreview}
              </pre>
            </div>

            {/* Core Web Vitals Status Indicators */}
            <div className="pt-2 grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-lg bg-[#090A0F]/60 border border-white/5">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">LCP (Speed)</span>
                <span className="text-xs font-mono font-bold text-[#00F5A0]">&lt; 0.8s</span>
              </div>
              <div className="p-3 rounded-lg bg-[#090A0F]/60 border border-white/5">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">CLS (Stability)</span>
                <span className="text-xs font-mono font-bold text-[#00F5A0]">0.00 (Zero Shift)</span>
              </div>
              <div className="p-3 rounded-lg bg-[#090A0F]/60 border border-white/5">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Index Status</span>
                <span className="text-xs font-mono font-bold text-[#00D9F5]">Crawl-Ready</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
