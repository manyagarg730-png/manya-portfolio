import React from 'react';
import { X, ExternalLink, Sparkles, Layers, Calendar, UserCheck, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#090A0F]/85 backdrop-blur-xl animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel bg-[#10131B] border border-white/15 shadow-2xl p-6 sm:p-8 space-y-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1A1F2C] text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close Case Study Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Metadata */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-xs font-mono text-[#00F5A0] font-semibold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
            <span className="text-xs font-mono text-slate-400">
              • {project.association}
            </span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
            {project.title}
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mt-1">{project.subtitle}</p>
        </div>

        {/* Key Quick Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#090A0F]/80 border border-white/5">
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">My Role</span>
            <p className="text-xs font-semibold text-white mt-1">{project.myRole}</p>
          </div>
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Core Tools</span>
            <p className="text-xs font-semibold text-[#00D9F5] mt-1">{project.tools.join(', ')}</p>
          </div>
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Primary Deliverable</span>
            <p className="text-xs font-semibold text-[#00F5A0] mt-1">{project.highlights[0]}</p>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
          <div>
            <h4 className="font-heading font-bold text-base text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00F5A0]" />
              <span>Project Overview & Context</span>
            </h4>
            <p className="text-slate-300">{project.summary}</p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#00D9F5]" />
              <span>What I Did & Strategic Execution</span>
            </h4>
            <div className="space-y-2.5">
              {project.whatIDid.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#00F5A0] shrink-0 mt-0.5" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base text-white mb-2 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-amber-400" />
              <span>Result & Strategic Impact</span>
            </h4>
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#00F5A0]/5 to-[#00D9F5]/5 border border-[#00F5A0]/20 text-slate-200">
              {project.results}
            </div>
          </div>
        </div>

        {/* Actions Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tools.map((tool, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded bg-[#161B26] text-[11px] font-mono text-slate-300 border border-white/5">
                {tool}
              </span>
            ))}
          </div>

          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-[#090A0F] bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] hover:opacity-90 transition-opacity"
            >
              <span>View Live Link</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
