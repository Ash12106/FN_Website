import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

const supportChannels = [
  {
    title: "Mentorship",
    description: "Connect with faculty experts for patent filing and high-impact R&D guidance.",
    icon: "engineering",
    action: "CONTACT MENTOR",
    email: "forgenexus@vvce.ac.in",
    status: "AVAILABLE",
    tag: "FACULTY CORE",
    freq: "ID: 01"
  },
  {
    title: "Technical Support",
    description: "Assistance with VR/AR hardware, AI compute resources, and lab infrastructure.",
    icon: "terminal",
    action: "GET HELP",
    email: "forgenexus@vvce.ac.in",
    status: "ACTIVE",
    tag: "INFRASTRUCTURE",
    freq: "ID: 02"
  },
  {
    title: "Industrial Bridge",
    description: "Propose industrial collaborations or inter-departmental research initiatives.",
    icon: "hub",
    action: "PARTNER WITH US",
    email: "partners.forgenexus@vvce.ac.in",
    status: "READY",
    tag: "PARTNERSHIPS",
    freq: "ID: 03"
  }
];

export default function Support() {
  return (
    <div className="max-w-7xl w-full py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Support Header & Status */}
        <div className="relative">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-xl shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary font-mono text-[10px] uppercase tracking-[0.4em] font-black">Support Helpdesk</span>
              <span className="w-px h-3 bg-primary/30 mx-2"></span>
              <span className="text-primary/60 font-mono text-[9px] uppercase tracking-widest">Inquiry Ready</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-9xl font-black font-display text-white uppercase italic leading-[0.85] tracking-tighter"
              >
                Inquiry <br />
                <span className="text-gradient">Resources</span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl text-white/40 font-light text-sm leading-relaxed uppercase tracking-[0.3em] italic"
            >
              ADMINISTRATIVE SUPPORT // COORDINATING RESOURCE ALLOCATION AND MENTORSHIP FOR INNOVATORS.
            </motion.p>
          </div>
        </div>

        {/* Support Grid - Improvised Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {supportChannels.map((channel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group relative"
            >
              <div className="h-full glass-card p-10 rounded-[2.5rem] border-primary/10 bg-white/2 backdrop-blur-3xl flex flex-col justify-between group-hover:border-primary/40 transition-all duration-700 overflow-hidden relative">
                {/* Tactical Backdrop */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 blur-[60px] rounded-full group-hover:bg-primary/10 transition-colors"></div>
                
                <div className="space-y-10 relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-black/40 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-2xl">
                      <span className="material-symbols-outlined text-4xl leading-none group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                        {channel.icon}
                      </span>
                    </div>
                    <div className="text-right">
                       <div className="text-[9px] font-mono text-primary/40 uppercase tracking-[0.2em] mb-1">FREQ: {channel.freq}</div>
                       <div className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2 justify-end">
                        {channel.status}
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                       </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-px w-8 bg-primary/40"></div>
                      <div className="text-[9px] font-mono text-primary uppercase tracking-widest">{channel.tag}</div>
                    </div>
                    <h3 className="text-3xl font-black text-white font-display uppercase italic tracking-tight leading-none group-hover:text-primary transition-colors">
                      {channel.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed font-light italic group-hover:text-white/60 transition-colors">
                      {channel.description}
                    </p>
                  </div>
                </div>

                <div className="mt-12 space-y-4 relative z-10">
                  <div className="flex items-center gap-3 py-3 px-4 rounded-xl bg-black/60 border border-white/5 group-hover:border-primary/20 transition-all">
                    <span className="material-symbols-outlined text-primary/40 text-sm">terminal</span>
                    <span className="text-[9px] font-mono text-white/40 truncate">{channel.email}</span>
                  </div>
                  
                  <Button 
                    variant="nexus" 
                    className="w-full py-6 text-sm tracking-[0.4em] italic font-black"
                    onClick={() => window.location.href = `mailto:${channel.email}`}
                  >
                    {channel.action}
                  </Button>
                </div>

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent h-1/2 w-full animate-scanline opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Improved Lab Contact */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] p-1 border border-primary/10 bg-white/2 backdrop-blur-3xl overflow-hidden group"
        >
          <div className="p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 bg-linear-to-br from-black/60 to-transparent rounded-[2.9rem]">
             <div className="space-y-8 text-center md:text-left max-w-xl">
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="px-4 py-1.5 rounded-md bg-primary/20 border border-primary/40 text-primary text-[10px] font-black uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]">Primary Hub</div>
                  <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">Main BLOCK</div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-4xl md:text-6xl font-black text-white font-display uppercase italic tracking-tighter">ForgeNexus <span className="text-gradient">Innovation Lab</span></h4>
                  <p className="text-white/40 text-sm italic uppercase tracking-[0.2em] font-medium leading-relaxed">
                    LAB M310/311.<br />
                    <span className="text-primary/60 not-italic">Main Block • VVCE Campus • Mysuru</span>
                  </p>
                </div>
             </div>
             
             <div className="flex flex-col items-center gap-8">
                <div className="w-40 h-40 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center relative p-4">
                  <div className="w-full h-full rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center relative shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden">
                    <span className="material-symbols-outlined text-6xl text-primary animate-pulse relative z-10">location_on</span>
                    {/* Radial Scan */}
                    <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent animate-pulse"></div>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-white/40 font-black text-[10px] uppercase tracking-[0.4em]">Operations_Window</div>
                  <div className="px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-black text-md italic font-display tracking-widest">
                    09:00 — 17:00 HRS
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
