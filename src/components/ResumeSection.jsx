import React from 'react';
import { Download, FileText, CheckCircle2, GraduationCap, Award, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeSection() {
  return (
    <section className="py-20 relative bg-[#0B0D14] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl glass-panel bg-gradient-to-br from-[#12151E] via-[#161B26] to-[#12151E] border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl">
          
          {/* Decorative ambient glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00F5A0]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00D9F5]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Call to Action & Value */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F5A0]">
                <FileText className="w-3.5 h-3.5" />
                <span>CURRICULUM VITAE</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Want the full picture? <br />
                <span className="text-gradient-accent">Download my complete resume.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Review verified experience across Synapse Studio, GMWARE, Bhoovaaniyak Consultancy, and Dhaama Planning—alongside Bennett University credentials and DIDM AI marketing certifications.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Manya_Garg_Resume.pdf"
                  className="px-7 py-3.5 rounded-xl font-semibold text-sm text-[#090A0F] bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] hover:opacity-90 transition-all duration-200 shadow-lg shadow-[#00F5A0]/20 flex items-center gap-2 hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#1A1F2C] border border-white/10 hover:border-white/30 transition-all duration-200 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                  <span>PREVIEW IN BROWSER</span>
                </a>
              </div>
            </div>

            {/* Right Column: Key Highlights Snapshot */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#090A0F]/80 border border-white/10 space-y-4 shadow-xl">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block border-b border-white/10 pb-3">
                Profile Summary & Credentials
              </span>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-4 h-4 text-[#00F5A0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">BCA Degree (2022–2025)</strong>
                    <p className="text-slate-400">Bennett University, Greater Noida</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#00D9F5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Digital Marketing AI Course (2026)</strong>
                    <p className="text-slate-400">DIDM (Delhi Institute of Digital Marketing)</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Measurable Growth Track Record</strong>
                    <p className="text-slate-400">+40% engagement, +25% conversion, -30% dev time</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-slate-500 flex justify-between">
                <span>File: Manya_Garg_Resume.pdf</span>
                <span className="text-[#00F5A0]">Verified 2026</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
