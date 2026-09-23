import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="experience" className="py-24 relative bg-[#0B0D14] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12151E] border border-white/10 text-xs font-mono text-[#00F5A0] mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER TRAJECTORY</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Hands-On Experience & <br />
              <span className="text-gradient-accent">Measurable Outcomes</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-sm leading-relaxed">
            Every role focused on real, quantifiable metrics—from driving <strong className="text-white">40% engagement growth</strong> to launching multi-site web platforms.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Timeline Track on Desktop */}
          <div className="hidden lg:block absolute left-[280px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#00F5A0]/80 via-[#00D9F5]/50 to-white/5" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div 
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group"
                >
                  {/* Left Column: Role Timing & Company Name */}
                  <div className="lg:col-span-3 lg:text-right space-y-1">
                    <span className="inline-block text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#161B26] text-[#00F5A0] border border-[#00F5A0]/20">
                      {exp.period}
                    </span>
                    <h3 className="font-heading font-bold text-white text-base sm:text-lg pt-1">
                      {exp.company}
                    </h3>
                    <div className="flex items-center lg:justify-end gap-2 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Middle Column: Timeline Node Dot */}
                  <div className="hidden lg:flex lg:col-span-1 justify-center pt-2 relative">
                    <div 
                      onClick={() => setExpandedIndex(index)}
                      className={`w-5 h-5 rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center ${
                        isExpanded 
                          ? 'bg-[#00F5A0] border-[#00F5A0] shadow-[0_0_15px_rgba(0,245,160,0.6)] scale-110' 
                          : 'bg-[#090A0F] border-slate-600 hover:border-[#00F5A0]'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${isExpanded ? 'bg-[#090A0F]' : 'bg-transparent'}`} />
                    </div>
                  </div>

                  {/* Right Column: Interactive Role Details Card */}
                  <div className="lg:col-span-8">
                    <div 
                      onClick={() => setExpandedIndex(index)}
                      className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                        isExpanded
                          ? 'glass-panel border-[#00F5A0]/30 shadow-xl bg-[#12151E]/90'
                          : 'bg-[#12151E]/40 border border-white/5 hover:border-white/15 hover:bg-[#12151E]/70'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-3">
                            <h4 className="font-heading font-bold text-lg sm:text-xl text-white">
                              {exp.role}
                            </h4>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                              {exp.type}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">{exp.description}</p>
                        </div>

                        {exp.highlightMetric && (
                          <div className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-xs font-mono font-bold text-[#00F5A0]">
                            <TrendingUp className="w-3.5 h-3.5" />
                            <span>{exp.highlightMetric}</span>
                          </div>
                        )}
                      </div>

                      {/* Expandable Bullet Points & Tools */}
                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t border-white/10 space-y-4 animate-fadeIn">
                          <div className="space-y-2.5">
                            {exp.bullets.map((bullet, bIdx) => (
                              <div key={bIdx} className="flex items-start gap-3 text-sm text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-[#00F5A0] shrink-0 mt-0.5" />
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>

                          {/* Skills Pills */}
                          <div className="pt-3 flex flex-wrap gap-2">
                            {exp.skills.map((skill, sIdx) => (
                              <span 
                                key={sIdx}
                                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#090A0F] text-slate-300 border border-white/5"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
