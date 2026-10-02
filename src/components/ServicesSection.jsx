import React from 'react';
import {
  Search,
  KeyRound,
  FileCheck,
  Cpu,
  Heading,
  Link,
  GitFork,
  Unlink,
  CopyCheck,
  FileCode,
  FileLock,
  Gauge,
  CodeXml,
  HelpCircle,
  FileEdit,
  ExternalLink,
  Globe2,
} from 'lucide-react';

const SERVICES = [
  {
    title: 'SEO Audit',
    desc: 'Find technical and content issues affecting website performance.',
    icon: Search,
    tag: 'Technical & Content',
  },
  {
    title: 'Keyword Research',
    desc: 'Identify relevant search terms based on search intent and business goals.',
    icon: KeyRound,
    tag: 'Strategy',
  },
  {
    title: 'On-Page SEO',
    desc: 'Optimize titles, meta descriptions, content and page structure.',
    icon: FileCheck,
    tag: 'Optimization',
  },
  {
    title: 'Technical SEO',
    desc: 'Fix crawling, indexing, mobile usability and technical issues.',
    icon: Cpu,
    tag: 'Infrastructure',
  },
  {
    title: 'Heading & Alt Tag Optimization',
    desc: 'Improve heading hierarchy and descriptive image alt text.',
    icon: Heading,
    tag: 'Accessibility & Structure',
  },
  {
    title: 'URL Structuring',
    desc: 'Create clean, readable and SEO-friendly URLs.',
    icon: Link,
    tag: 'Information Architecture',
  },
  {
    title: 'Internal Linking',
    desc: 'Connect relevant pages to improve navigation, crawling and topical relevance.',
    icon: GitFork,
    tag: 'Topical Authority',
  },
  {
    title: 'Broken Link Fixing',
    desc: 'Identify broken links and implement appropriate fixes and redirects.',
    icon: Unlink,
    tag: 'Maintenance & UX',
  },
  {
    title: 'Canonical Tags',
    desc: 'Help search engines understand the preferred version of duplicate or similar pages.',
    icon: CopyCheck,
    tag: 'Indexing Control',
  },
  {
    title: 'XML Sitemap',
    desc: 'Create and optimize XML sitemaps and prepare them for Google Search Console.',
    icon: FileCode,
    tag: 'Search Console',
  },
  {
    title: 'Robots.txt',
    desc: 'Control which areas search engines should crawl.',
    icon: FileLock,
    tag: 'Crawl Budget',
  },
  {
    title: 'Page Speed Optimization',
    desc: 'Improve website loading performance and Core Web Vitals.',
    icon: Gauge,
    tag: 'Core Web Vitals',
  },
  {
    title: 'Schema Markup',
    desc: 'Use structured data to help search engines understand page content.',
    icon: CodeXml,
    tag: 'Rich Snippets',
  },
  {
    title: 'FAQ Optimization',
    desc: 'Create useful FAQ content based on real user questions and search intent.',
    icon: HelpCircle,
    tag: 'SERP Features',
  },
  {
    title: 'Content Optimization',
    desc: 'Improve existing content for relevance, readability and search visibility.',
    icon: FileEdit,
    tag: 'Content Strategy',
  },
  {
    title: 'Link Building',
    desc: 'Build relevant backlinks and strengthen website authority.',
    icon: ExternalLink,
    tag: 'Authority',
  },
  {
    title: 'Off-Page SEO',
    desc: 'Improve brand visibility and authority outside the website.',
    icon: Globe2,
    tag: 'Digital PR',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#0d0305] text-white">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ca1318]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#ca1318] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>End-to-End Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white mb-6">
            SEO Services
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Data-driven, full-stack SEO execution tailored to increase your organic visibility, dominate search engine result pages, and generate revenue.
          </p>
        </div>

        {/* 17 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/90 group-hover:bg-[#ca1318] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-full bg-white/5 text-white/60 border border-white/5">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40 group-hover:text-white/80 transition-colors">
                  <span>Service Details</span>
                  <span className="font-mono text-[11px]">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
