import React from 'react';
import { 
  Search, 
  Key, 
  FileText, 
  Cpu, 
  Share2, 
  Code2, 
  Network, 
  Sparkles, 
  Link2, 
  Zap, 
  CheckCircle2, 
  Compass, 
  ShieldCheck, 
  Clock, 
  LineChart, 
  MessageSquareCheck 
} from 'lucide-react';

const CATEGORIES = [
  {
    title: 'SEO Audit',
    desc: 'Comprehensive technical and architectural health check to discover ranking bottlenecks.',
    icon: Search,
  },
  {
    title: 'Keyword Research',
    desc: 'High-intent search term mapping aligned with customer purchase journeys.',
    icon: Key,
  },
  {
    title: 'On-Page SEO',
    desc: 'Title tags, meta descriptions, header structures, and content optimization.',
    icon: FileText,
  },
  {
    title: 'Technical SEO',
    desc: 'Crawl budget optimization, robots.txt, sitemaps, and indexing precision.',
    icon: Cpu,
  },
  {
    title: 'Off-Page SEO',
    desc: 'Domain authority amplification and digital brand visibility enhancement.',
    icon: Share2,
  },
  {
    title: 'Schema Markup',
    desc: 'Structured JSON-LD data for rich snippets, FAQs, and knowledge graphs.',
    icon: Code2,
  },
  {
    title: 'Internal Linking',
    desc: 'Topical authority clusters and optimized PageRank link equity flow.',
    icon: Network,
  },
  {
    title: 'Content Optimization',
    desc: 'Semantic NLP improvements for search intent, readability, and conversions.',
    icon: Sparkles,
  },
  {
    title: 'Link Building',
    desc: 'High-quality, authoritative editorial backlinks and white-hat outreach.',
    icon: Link2,
  },
  {
    title: 'Page Speed Optimization',
    desc: 'Core Web Vitals tuning (LCP, INP, CLS) for instant loading speeds.',
    icon: Zap,
  },
];

const WHY_WORK_WITH_ME = [
  {
    title: 'White-hat SEO methods',
    desc: 'Sustainable, algorithm-safe strategies ensuring long-term organic growth.',
    icon: ShieldCheck,
  },
  {
    title: 'Clear communication',
    desc: 'Transparent conversations without confusing technical jargon.',
    icon: MessageSquareCheck,
  },
  {
    title: 'Regular updates',
    desc: 'Consistent ranking dashboards, traffic reports, and weekly check-ins.',
    icon: LineChart,
  },
  {
    title: 'Business-focused SEO strategies',
    desc: 'Focusing on leads, conversions, and revenue rather than just vanity metrics.',
    icon: Compass,
  },
  {
    title: 'On-time delivery',
    desc: 'Disciplined execution schedules with clear milestones and roadmaps.',
    icon: Clock,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#120508] text-white overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ca1318]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ca1318]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#ca1318] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Specialist Profile</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white mb-6">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
            Hi, I'm <strong className="text-white font-medium">Manya Garg</strong>, an SEO expert offering complete SEO services to help businesses rank higher on Google, grow organic traffic and turn visitors into leads.
          </p>
        </div>

        {/* 10 Clean Service Categories Grid */}
        <div className="mb-24">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-8">
            Core Competencies & Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-5 transition-all duration-300 transform hover:-translate-y-1 hover:border-white/20 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/90 mb-4 group-hover:bg-[#ca1318] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2 group-hover:text-white">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Two-Column Section: My Approach & Why Work With Me */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* My Approach Card */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ca1318]/20 border border-[#ca1318]/40 flex items-center justify-center text-white mb-6">
                <Compass className="w-6 h-6 text-[#ca1318]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                My Approach
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                I start with a detailed SEO audit to understand where your website stands. Then I create a clear SEO plan, fix issues step by step and track rankings and traffic. I believe in clear communication, practical SEO strategies and regular reporting.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#ca1318] shrink-0" />
                <span>Deep Architectural Site Audit</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#ca1318] shrink-0" />
                <span>Data-Driven Roadmap & Priority Queue</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#ca1318] shrink-0" />
                <span>Continuous Ranking & Conversion Monitoring</span>
              </div>
            </div>
          </div>

          {/* Why Work With Me */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-white/10">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-6">
              Why Work With Me
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_WORK_WITH_ME.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/15 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-[#ca1318]/20 text-[#ca1318]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed pl-9">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
