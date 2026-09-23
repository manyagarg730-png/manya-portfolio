import React, { useState } from 'react';
import { 
  Sparkles, 
  Megaphone, 
  Search, 
  Palette, 
  Code2, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categoryIcons = [Megaphone, Search, Palette, Code2, Cpu];

  return (
    <section id="skills" className="py-24 relative bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12151E] border border-white/10 text-xs font-mono text-[#00F5A0] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SKILLS & TOOLCHAINS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Categorized Competencies <br />
              <span className="text-gradient-accent">Zero Fake Percentages</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-sm leading-relaxed">
            Organized strictly around practical production capability across digital marketing, technical search architecture, design systems, and AI workflows.
          </p>
        </div>

        {/* Category Navigation Bar */}
        <div className="flex flex-wrap gap-2.5 pb-8 border-b border-white/10">
          {skillsData.map((cat, idx) => {
            const Icon = categoryIcons[idx];
            const isSelected = selectedCategory === idx;

            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-[#090A0F] font-bold shadow-lg shadow-[#00F5A0]/20'
                    : 'bg-[#12151E] text-slate-300 hover:text-white hover:bg-[#1A202E] border border-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Grid */}
        <div className="mt-8">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 bg-[#12151E]/70">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0]" />
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {skillsData[selectedCategory].category}
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {skillsData[selectedCategory].skills.length} Core Disciplines
              </span>
            </div>

            {/* Skill Pills Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {skillsData[selectedCategory].skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-xl bg-[#090A0F]/80 border border-white/5 hover:border-[#00F5A0]/30 hover:bg-[#090A0F] transition-all group flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00F5A0] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Categories Compact Overview */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((cat, idx) => {
            const Icon = categoryIcons[idx];
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[#12151E]/40 border border-white/5 hover:border-white/10 transition-colors space-y-3"
              >
                <div className="flex items-center gap-2.5 text-[#00D9F5]">
                  <Icon className="w-4 h-4" />
                  <h4 className="font-heading font-bold text-sm text-white">{cat.category}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#090A0F] text-slate-400 border border-white/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
