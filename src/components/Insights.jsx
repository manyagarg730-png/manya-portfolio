import React from 'react';
import { BookOpen, Sparkles, Clock } from 'lucide-react';
import { insightsRoadmap } from '../data/portfolioData';

export default function Insights() {
  return (
    <section id="insights" className="py-24 relative bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12151E] border border-white/10 text-xs font-mono text-[#00F5A0] mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>STRATEGIC INSIGHTS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Thought Leadership & <br />
              <span className="text-gradient-accent">Editorial Roadmap</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-sm leading-relaxed">
            Deep-dive frameworks on organic search algorithms, high-retention video storytelling, and AI-accelerated workflows currently in editorial preparation.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insightsRoadmap.map((insight, idx) => (
            <article 
              key={idx}
              className="p-6 rounded-2xl glass-panel bg-[#12151E]/60 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#00F5A0]/10 text-[#00F5A0] border border-[#00F5A0]/20">
                    {insight.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>In Editorial</span>
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#00F5A0] transition-colors leading-snug">
                  {insight.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {insight.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1 text-slate-400">
                  <Sparkles className="w-3 h-3 text-[#00D9F5]" />
                  <span>Coming Soon</span>
                </span>
                <span className="text-slate-600">2026 Release</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
