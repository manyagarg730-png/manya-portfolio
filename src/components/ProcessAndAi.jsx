import React, { useState } from 'react';
import { 
  Workflow, 
  Sparkles, 
  Search, 
  Compass, 
  PenTool, 
  Gauge, 
  TrendingUp, 
  Cpu, 
  CheckCircle2, 
  Bot 
} from 'lucide-react';
import { processSteps, aiWorkflow } from '../data/portfolioData';

export default function ProcessAndAi() {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [Search, Compass, PenTool, Gauge, TrendingUp];

  return (
    <section id="process" className="py-24 relative bg-[#0B0D14] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ==================================================== */}
        {/* PART 1: HOW I WORK (MY PROCESS)                     */}
        {/* ==================================================== */}
        <div>
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12151E] border border-white/10 text-xs font-mono text-[#00F5A0] mb-4">
              <Workflow className="w-3.5 h-3.5" />
              <span>STRATEGIC METHODOLOGY</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              How I Work: From <br />
              <span className="text-gradient-accent">Research to Compounding Growth</span>
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
              A structured 5-stage framework designed to eliminate guesswork, target real search intent, and deliver repeatable conversion results.
            </p>
          </div>

          {/* Process Interactive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step Selection List */}
            <div className="lg:col-span-5 space-y-3">
              {processSteps.map((step, idx) => {
                const Icon = stepIcons[idx];
                const isActive = activeStep === idx;

                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                      isActive
                        ? 'glass-panel bg-[#12151E] border-[#00F5A0]/40 shadow-lg shadow-[#00F5A0]/5'
                        : 'bg-[#090A0F]/60 border-white/5 hover:border-white/15 hover:bg-[#12151E]/40'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm font-bold ${isActive ? 'text-[#00F5A0]' : 'text-slate-500'}`}>
                        {step.number}
                      </span>
                      <div>
                        <h4 className={`font-heading font-bold text-sm ${isActive ? 'text-white' : 'text-slate-300'}`}>
                          {step.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1">{step.tagline}</p>
                      </div>
                    </div>
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#00F5A0]' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>

            {/* Active Step Deep-Dive Card */}
            <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 bg-[#12151E]/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00F5A0]/10 rounded-full blur-[70px] pointer-events-none -z-10" />
              
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="font-mono text-4xl font-black text-gradient-accent">
                  {processSteps[activeStep].number}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/20 text-xs font-mono text-[#00F5A0]">
                  Stage {activeStep + 1} of 5
                </span>
              </div>

              <div className="pt-6 space-y-6">
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    {processSteps[activeStep].title}
                  </h3>
                  <p className="text-xs font-mono text-[#00D9F5] mt-1">
                    {processSteps[activeStep].tagline}
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {processSteps[activeStep].description}
                </p>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                    Core Methods & Toolkit:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {processSteps[activeStep].tools.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#090A0F] text-slate-300 border border-white/10 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#00F5A0]" />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ==================================================== */}
        {/* PART 2: AI-ASSISTED CREATIVE WORKFLOW                */}
        {/* ==================================================== */}
        <div className="pt-12 border-t border-white/10">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400 mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>AI INTEGRATION</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              AI-Assisted Creative Workflow
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              {aiWorkflow.description}
            </p>
          </div>

          {/* Workflow Pipeline Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {aiWorkflow.stages.map((stage, sIdx) => (
              <div 
                key={sIdx}
                className="p-4 rounded-xl bg-[#12151E] border border-white/10 relative group hover:border-[#00F5A0]/30 transition-all"
              >
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                  <span>STEP 0{sIdx + 1}</span>
                  <Sparkles className="w-3 h-3 text-[#00F5A0] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-heading font-bold text-sm text-white">{stage.name}</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{stage.detail}</p>
              </div>
            ))}
          </div>

          {/* AI Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiWorkflow.tools.map((tool, tIdx) => (
              <div key={tIdx} className="p-4 rounded-xl bg-[#090A0F] border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-[#00D9F5] shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-mono font-bold text-sm text-white">{tool.name}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-normal">{tool.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
