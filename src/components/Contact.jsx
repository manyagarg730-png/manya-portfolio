import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { LinkedinIcon, WhatsAppIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (err) {}

      // Prepare mailto link
      const mailtoUrl = 'mailto:' + personalInfo.email + '?subject=' + encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name) + '&body=' + encodeURIComponent('From: ' + formData.name + ' (' + formData.email + ')\n\n' + formData.message);
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090A0F] overflow-hidden">
      
      {/* Radiant background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00F5A0]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12151E] border border-white/10 text-xs font-mono text-[#00F5A0]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
            Have a project, idea, or opportunity? <br />
            <span className="text-gradient-accent">Let's create something people remember.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I am available for full-time opportunities, high-growth marketing roles, SEO audits, and creative brand initiatives.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channels Glass Card */}
            <div className="p-6 rounded-2xl glass-panel bg-[#12151E]/90 border border-white/10 space-y-6 shadow-xl">
              <h3 className="font-heading font-bold text-lg text-white">Direct Communication</h3>
              
              <div className="space-y-4">
                
                {/* Email Item with 1-click Copy */}
                <div className="p-4 rounded-xl bg-[#090A0F] border border-white/5 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-white/5 text-[#00F5A0] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono text-slate-500 uppercase block">Email Address</span>
                      <a href={'mailto:' + personalInfo.email} className="text-xs sm:text-sm font-semibold text-white hover:text-[#00F5A0] truncate block">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0 cursor-pointer"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email"
                  >
                    {isCopied ? <Check className="w-4 h-4 text-[#00F5A0]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-[#090A0F] border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white/5 text-[#00D9F5] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 uppercase block">Phone / Mobile</span>
                      <a href={'tel:' + personalInfo.phone} className="text-xs sm:text-sm font-semibold text-white hover:text-[#00D9F5]">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/916398369342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold flex items-center gap-1.5"
                    title="Chat on WhatsApp"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* LinkedIn Item */}
                <div className="p-4 rounded-xl bg-[#090A0F] border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white/5 text-blue-400 shrink-0">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 uppercase block">LinkedIn Profile</span>
                      <a 
                        href={personalInfo.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400"
                      >
                        manya-garg-37a02525b
                      </a>
                    </div>
                  </div>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>

            {/* Quick response note */}
            <div className="p-4 rounded-xl bg-[#12151E]/50 border border-white/5 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00F5A0] shrink-0" />
              <span>Typical response time: Within 24 hours on weekdays.</span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 bg-[#12151E]/90 border border-white/10 shadow-xl relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0] flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">Thank You, {formData.name}!</h3>
                  <p className="text-sm text-slate-400 max-w-md mx-auto">
                    Your inquiry has been formulated. If your mail client did not open automatically, you can also reach me directly at <strong className="text-white">{personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#1A1F2C] border border-white/10 hover:bg-[#22293A] cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-heading font-bold text-lg text-white mb-4">Send a Direct Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00F5A0] transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00F5A0] transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">Subject / Opportunity Type</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Digital Marketing Role / SEO Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00F5A0] transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">Your Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, goals, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00F5A0] transition-colors placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm text-[#090A0F] bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] hover:opacity-90 transition-all duration-200 shadow-lg shadow-[#00F5A0]/20 flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="text-xs font-mono">Preparing Message...</span>
                    ) : (
                      <>
                        <span>SEND INQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
