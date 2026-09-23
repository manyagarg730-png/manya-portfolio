import React, { useState } from 'react';
import { 
  FolderKanban, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  Globe, 
  Search, 
  Layers 
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Social Media & Content', 'Web & SEO Platforms', 'Branding & Business'];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Social Media & Content') return project.category.includes('Social');
    if (activeFilter === 'Web & SEO Platforms') return project.category.includes('Web') || project.category.includes('SEO');
    if (activeFilter === 'Branding & Business') return project.category.includes('Personal') || project.category.includes('Branding');
    return true;
  });

  const getProjectVisual = (id) => {
    switch (id) {
      case 'finsense':
        return {
          icon: InstagramIcon,
          badge: 'Instagram Growth',
          accent: 'from-pink-500/20 via-purple-500/10 to-transparent',
        };
      case 'chumbakiya':
        return {
          icon: Sparkles,
          badge: 'Personal Brand',
          accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
        };
      case 'lushbloom':
        return {
          icon: Globe,
          badge: 'E-Commerce + Ads',
          accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
        };
      case 'shastri-vidhan':
        return {
          icon: Search,
          badge: 'Topical Authority',
          accent: 'from-cyan-500/20 via-blue-500/10 to-transparent',
        };
      default:
        return {
          icon: Layers,
          badge: 'Case Study',
          accent: 'from-[#00F5A0]/20 to-transparent',
        };
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12151E] border border-white/10 text-xs font-mono text-[#00F5A0] mb-4">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>CASE STUDIES & DELIVERABLES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Featured Projects & <br />
              <span className="text-gradient-accent">Live Executions</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-[#090A0F] font-bold shadow-md shadow-[#00F5A0]/20'
                    : 'bg-[#12151E] text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const visual = getProjectVisual(project.id);
            const VisualIcon = visual.icon;

            return (
              <article
                key={project.id}
                className="group relative rounded-2xl glass-panel bg-[#12151E]/80 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1 shadow-xl"
              >
                {/* Visual Header / Card Mockup Banner */}
                <div className={`h-48 relative p-6 bg-gradient-to-br ${visual.accent} flex flex-col justify-between border-b border-white/10 overflow-hidden`}>
                  
                  {/* Subtle decorative grid lines in header */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

                  {/* Top bar inside mockup */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#090A0F]/80 text-white border border-white/10 backdrop-blur-md">
                      <VisualIcon className="w-3.5 h-3.5 text-[#00F5A0]" />
                      <span>{visual.badge}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400 bg-[#090A0F]/60 px-2.5 py-1 rounded-md">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom title in mockup */}
                  <div className="relative z-10">
                    <span className="text-xs font-mono text-[#00F5A0] uppercase tracking-wider block mb-1">
                      {project.association}
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <p className="text-xs font-mono text-slate-400">{project.subtitle}</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Role & Key Deliverable */}
                    <div className="pt-2 flex flex-col gap-1.5 text-xs text-slate-400">
                      <div>
                        <span className="font-semibold text-slate-300">My Role:</span> {project.myRole}
                      </div>
                      <div>
                        <span className="font-semibold text-slate-300">Key Focus:</span> {project.highlights.join(' • ')}
                      </div>
                    </div>
                  </div>

                  {/* Tools & Interactive CTAs */}
                  <div className="pt-4 border-t border-white/10 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#090A0F] text-slate-400 border border-white/5"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00F5A0] hover:text-[#00D9F5] transition-colors group/btn cursor-pointer"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#1A1F2C] hover:bg-[#252C3D] border border-white/10 transition-colors"
                        >
                          <span>Live Link</span>
                          <ExternalLink className="w-3 h-3 text-[#00F5A0]" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
