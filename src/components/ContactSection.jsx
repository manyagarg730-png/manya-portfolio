import React, { useState } from 'react';
import { Mail, Phone, Sparkles, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'manyagarg730@gmail.com';
  const phone = '+91 6398369342';
  const phoneTel = '+916398369342';

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative bg-[#0a0204] text-white overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[350px] bg-[#ca1318]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#ca1318] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            Ready to elevate your Google rankings and unlock sustainable organic traffic growth? Reach out directly via email or phone.
          </p>
        </div>

        {/* Minimalist Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Email Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-white/25 hover:-translate-y-1 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#ca1318]/20 border border-[#ca1318]/30 flex items-center justify-center text-[#ca1318] group-hover:bg-[#ca1318] group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={() => copyToClipboard(email, 'email')}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-white/60 hover:text-white transition-colors text-xs flex items-center gap-1.5 hover-target"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400 block mb-1">
                Email Address
              </span>
              <a
                href={`mailto:${email}`}
                className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#ca1318] transition-colors break-all block hover-target"
              >
                {email}
              </a>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1.5 text-xs text-white/70 group-hover:text-white transition-colors font-medium hover-target"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-white/25 hover:-translate-y-1 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#ca1318]/20 border border-[#ca1318]/30 flex items-center justify-center text-[#ca1318] group-hover:bg-[#ca1318] group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <button
                  onClick={() => copyToClipboard(phone, 'phone')}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-white/60 hover:text-white transition-colors text-xs flex items-center gap-1.5 hover-target"
                  title="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400 block mb-1">
                Phone & WhatsApp
              </span>
              <a
                href={`tel:${phoneTel}`}
                className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#ca1318] transition-colors block hover-target"
              >
                {phone}
              </a>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5">
              <a
                href={`tel:${phoneTel}`}
                className="inline-flex items-center gap-1.5 text-xs text-white/70 group-hover:text-white transition-colors font-medium hover-target"
              >
                <span>Call Directly</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Response Guarantee Badge */}
        <div className="mt-10 max-w-md mx-auto p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center gap-3 text-xs text-neutral-300 text-center">
          <Sparkles className="w-4 h-4 text-[#ca1318] shrink-0" />
          <span>Average response time: <strong>under 24 hours</strong> with tailored initial feedback.</span>
        </div>

      </div>
    </section>
  );
}
