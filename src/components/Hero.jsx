import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Download, 
  Sparkles, 
  TrendingUp, 
  Search, 
  Flame, 
  Target, 
  Layers, 
  CheckCircle2, 
  Zap, 
  Cpu
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('metrics');

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background ambient radiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F5A0]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#00D9F5]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#12151E]/90 border border-white/10 shadow-inner backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5A0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F5A0]"></span>
            </span>
            <span className="text-xs font-mono text-slate-300 tracking-wide font-medium">
              DIGITAL STRATEGIST & CREATIVE PRO
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00F5A0]/15 text-[#00F5A0] font-semibold">
              2026 ACTIVE
            </span>
          </div>
        </div>

        {/* Core Positioning Typography Banner */}
        <div className="text-center space-y-4 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base font-mono font-bold tracking-widest text-slate-400 uppercase">
            <span className="hover:text-[#00F5A0] transition-colors">DIGITAL MARKETING</span>
            <span className="text-[#00F5A0]">×</span>
            <span className="hover:text-[#00D9F5] transition-colors">CREATIVE DESIGN</span>
            <span className="text-[#00D9F5]">×</span>
            <span className="hover:text-[#00F5A0] transition-colors">ON-PAGE SEO</span>
            <span className="text-[#00F5A0]">×</span>
            <span className="hover:text-amber-400 transition-colors">AI WORKFLOWS</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] text-white">
            <span className="text-gradient">Manya Garg</span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed pt-2">
            Driving <span className="text-[#00F5A0] font-semibold underline decoration-[#00F5A0]/40 underline-offset-4">+40% engagement</span> and <span className="text-[#00D9F5] font-semibold underline decoration-[#00D9F5]/40 underline-offset-4">+25% conversion growth</span> by blending high-retention social content, keyword-mapped SEO frameworks, and modern AI-assisted execution.
          </p>
        </div>

        {/* Strategic Hero CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-xl font-semibold text-sm text-[#090A0F] bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] hover:opacity-95 transition-all duration-200 shadow-lg shadow-[#00F5A0]/20 flex items-center gap-2 hover:scale-[1.02]"
          >
            <span>VIEW FEATURED WORK</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#161B26] border border-white/10 hover:border-[#00F5A0]/50 hover:bg-[#1C2230] transition-all duration-200 flex items-center gap-2"
          >
            <span>LET'S CONNECT</span>
            <Sparkles className="w-4 h-4 text-[#00F5A0]" />
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Manya_Garg_Resume.pdf"
            className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-transparent border border-white/10 hover:border-white/30 hover:text-white transition-all duration-200 flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-slate-400" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>

        {/* Interactive Marketing & Growth Dashboard Simulation */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="glass-panel rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
            
            {/* Top Bar with Status and Interactive Tabs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-xs font-mono text-slate-400 pl-2">
                  marketing_console.live // real_resume_metrics.json
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center gap-1 bg-[#090A0F]/80 p-1 rounded-lg border border-white/5 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('metrics')}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${activeTab === 'metrics' ? 'bg-[#00F5A0] text-[#090A0F] font-bold' : 'text-slate-400 hover:text-white'}`}
                >
                  Growth Metrics
                </button>
                <button
                  onClick={() => setActiveTab('seo')}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${activeTab === 'seo' ? 'bg-[#00F5A0] text-[#090A0F] font-bold' : 'text-slate-400 hover:text-white'}`}
                >
                  SEO Architecture
                </button>
                <button
                  onClick={() => setActiveTab('social')}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${activeTab === 'social' ? 'bg-[#00F5A0] text-[#090A0F] font-bold' : 'text-slate-400 hover:text-white'}`}
                >
                  Social Pulse
                </button>
              </div>
            </div>

            {/* Tab 1: Growth Metrics (Real Resume Verified) */}
            {activeTab === 'metrics' && (
              <div className="pt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Metric Card 1 */}
                  <div className="p-4 rounded-xl bg-[#12151E]/90 border border-white/10 hover:border-[#00F5A0]/40 transition-all duration-300 group">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>GMWARE CAMPAIGNS</span>
                      <span className="p-1 rounded bg-[#00F5A0]/10 text-[#00F5A0]">
                        <TrendingUp className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <div className="mt-2 font-display font-black text-3xl sm:text-4xl text-[#00F5A0] tracking-tight">
                      +40%
                    </div>
                    <p className="mt-1 text-xs font-semibold text-white">Engagement Lift</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Social media content creation & SEO-optimized posts</p>
                  </div>

                  {/* Metric Card 2 */}
                  <div className="p-4 rounded-xl bg-[#12151E]/90 border border-white/10 hover:border-[#00D9F5]/40 transition-all duration-300 group">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>GOOGLE ADS / SEARCH</span>
                      <span className="p-1 rounded bg-[#00D9F5]/10 text-[#00D9F5]">
                        <Target className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <div className="mt-2 font-display font-black text-3xl sm:text-4xl text-[#00D9F5] tracking-tight">
                      +25%
                    </div>
                    <p className="mt-1 text-xs font-semibold text-white">Conversion Rate Increase</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">High-intent keyword research & targeted campaigns</p>
                  </div>

                  {/* Metric Card 3 */}
                  <div className="p-4 rounded-xl bg-[#12151E]/90 border border-white/10 hover:border-amber-400/40 transition-all duration-300 group">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>DHAAMA PLANNING</span>
                      <span className="p-1 rounded bg-amber-400/10 text-amber-400">
                        <Zap className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <div className="mt-2 font-display font-black text-3xl sm:text-4xl text-amber-400 tracking-tight">
                      -30%
                    </div>
                    <p className="mt-1 text-xs font-semibold text-white">Avg. Dev Time Reduction</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">3 WordPress & Elementor website platform launches</p>
                  </div>

                </div>

                {/* Micro Ticker of Real Technical Disciplines */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[#090A0F]/60 border border-white/5 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00F5A0]" />
                    <span>Bennett University BCA Graduate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00D9F5]" />
                    <span>DIDM Advanced Digital Marketing AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>Synapse Studio / FinSense IG Lead</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: SEO Engine Simulation */}
            {activeTab === 'seo' && (
              <div className="pt-6 space-y-4 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-[#090A0F]/80 border border-white/5">
                    <span className="text-[11px] font-mono text-slate-400">INDEXING STATUS</span>
                    <p className="font-semibold text-sm text-[#00F5A0] mt-1">100% Semantic HTML5</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090A0F]/80 border border-white/5">
                    <span className="text-[11px] font-mono text-slate-400">STRUCTURED DATA</span>
                    <p className="font-semibold text-sm text-[#00D9F5] mt-1">Schema.org JSON-LD</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090A0F]/80 border border-white/5">
                    <span className="text-[11px] font-mono text-slate-400">KEYWORD STRATEGY</span>
                    <p className="font-semibold text-sm text-purple-400 mt-1">Topical Authority Map</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#090A0F]/80 border border-white/5">
                    <span className="text-[11px] font-mono text-slate-400">CORE WEB VITALS</span>
                    <p className="font-semibold text-sm text-amber-400 mt-1">Fast / Mobile-First</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#12151E]/90 border border-white/10 text-xs text-slate-300 space-y-1.5 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Target Keywords:</span>
                    <span className="text-[#00F5A0]">Manya Garg • Digital Marketing • SEO & Social Media</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Featured Frameworks:</span>
                    <span className="text-slate-200">LushBloom Plant SEO & Shastri Vidhan Knowledge Hub</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Social Pulse Simulation */}
            {activeTab === 'social' && (
              <div className="pt-6 space-y-4 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-[#12151E] border border-white/10">
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-mono">
                      <InstagramIcon className="w-4 h-4" />
                      <span>@finsense_iitian_singh</span>
                    </div>
                    <p className="text-sm font-semibold text-white mt-2">Synapse Studio Internship</p>
                    <p className="text-xs text-slate-400 mt-1">Reels concepts, carousel design, financial audience reach</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#12151E] border border-white/10">
                    <div className="flex items-center gap-2 text-purple-400 text-xs font-mono">
                      <Flame className="w-4 h-4" />
                      <span>Chumbakiya</span>
                    </div>
                    <p className="text-sm font-semibold text-white mt-2">Personal Brand & Venture</p>
                    <p className="text-xs text-slate-400 mt-1">Full brand identity, product reels & direct promotional creatives</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#12151E] border border-white/10">
                    <div className="flex items-center gap-2 text-[#00F5A0] text-xs font-mono">
                      <Cpu className="w-4 h-4" />
                      <span>AI Content Flow</span>
                    </div>
                    <p className="text-sm font-semibold text-white mt-2">ChatGPT × Claude × Gemini</p>
                    <p className="text-xs text-slate-400 mt-1">Fast script hooks, keyword research & editorial acceleration</p>
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
