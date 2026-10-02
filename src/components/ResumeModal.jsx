import React, { useEffect } from 'react';
import { X, Download, Award, Briefcase, GraduationCap, CheckCircle2, FileText } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#140609] border border-white/20 p-6 sm:p-10 text-white shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
        role="dialog"
        aria-modal="true"
        aria-label="Manya Garg Resume"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors hover-target"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Manya Garg
            </h2>
            <p className="text-sm text-[#ca1318] font-medium tracking-wide">
              SEO Expert | Technical & Digital Search Strategist
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-md hover-target"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-8 text-sm text-neutral-300">
          
          {/* Summary */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">
              Executive Summary
            </h3>
            <p className="leading-relaxed text-neutral-300">
              Results-driven SEO Expert specializing in Technical SEO, Core Web Vitals optimization, semantic content architectures, and organic growth campaigns that scale keyword rankings and qualified organic revenue across competitive verticals.
            </p>
          </div>

          {/* Key Expertise */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {[
                'Technical Site Auditing',
                'Advanced Keyword Research',
                'Schema.org Structured Data',
                'Core Web Vitals & Speed',
                'Internal PageRank Flow',
                'Crawl Budget Optimization',
                'Competitor Gap Analysis',
                'Authoritative Link Building',
                'Google Search Console / GA4',
              ].map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ca1318]" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
              Professional Experience
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-white">Senior SEO Strategist & Consultant</h4>
                    <span className="text-xs text-neutral-400">Independent Consulting</span>
                  </div>
                  <span className="text-xs text-[#ca1318] font-mono">2022 - Present</span>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-neutral-300 list-disc list-inside">
                  <li>Delivered +320% average organic traffic increase for B2B & SaaS portfolios.</li>
                  <li>Resolved complex indexation issues, duplicate canonical tags, and JavaScript rendering errors.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-white">Digital Search & Technical SEO Specialist</h4>
                    <span className="text-xs text-neutral-400">Digital Growth Agency</span>
                  </div>
                  <span className="text-xs text-[#ca1318] font-mono">2020 - 2022</span>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-neutral-300 list-disc list-inside">
                  <li>Managed SEO campaigns for 25+ e-commerce and publisher websites.</li>
                  <li>Engineered high-intent keyword mappings driving over 1.2M annual organic sessions.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">
              Certifications & Tool Stack
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Google Analytics 4 Certified | Google Search Console Mastery | Semrush Technical SEO | Ahrefs Advanced | Screaming Frog SEO Spider | Sitebulb | Google Tag Manager
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
