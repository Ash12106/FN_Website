import React from 'react';
import { motion } from 'framer-motion';

const supportChannels = [
  {
    title: "Project Mentorship",
    description: "Connect with faculty experts for patent filing and high-impact R&D guidance.",
    icon: "engineering",
    action: "Schedule Review",
    email: "mentor.forgenexus@vvce.ac.in",
    status: "Priority",
    tag: "Faculty Core"
  },
  {
    title: "Technical Support",
    description: "Assistance with VR/AR hardware, AI compute resources, and lab infrastructure.",
    icon: "terminal",
    action: "Open Ticket",
    email: "tech.forgenexus@vvce.ac.in",
    status: "Operational",
    tag: "Infrastructure"
  },
  {
    title: "Industrial Bridge",
    description: "Propose industrial collaborations or inter-departmental research initiatives.",
    icon: "hub",
    action: "Submit Brief",
    email: "partners.forgenexus@vvce.ac.in",
    status: "Active",
    tag: "Partnerships"
  }
];

export default function Support() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-40 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Support Header & Status */}
        <div className="relative">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary font-display text-[10px] uppercase tracking-[0.4em] font-black">Nexus Command Live</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-9xl font-black font-display text-white uppercase italic leading-[0.85] tracking-tighter"
              >
                Operational <br />
                <span className="text-gradient">Support</span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl text-white/30 font-light text-md leading-relaxed uppercase tracking-widest text-[11px]"
            >
              Systemized resource allocation and mentorship protocols for the VVCE Innovation cluster.
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
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
              
              <div className="h-full glass-card p-10 rounded-[2.5rem] border-white/5 bg-white/2 backdrop-blur-2xl flex flex-col justify-between group-hover:border-primary/30 transition-all duration-700 overflow-hidden">
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 p-4">
                   <div className="text-[9px] font-black text-white/10 uppercase tracking-widest group-hover:text-primary transition-colors italic">
                    {channel.tag} — SC-{100 + i}
                  </div>
                </div>

                <div className="space-y-10 relative z-10">
                  <div className="flex items-end justify-between">
                    <div className="w-20 h-20 rounded-3xl bg-black/60 border border-white/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                      <span className="material-symbols-outlined text-[42px] leading-none group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                        {channel.icon}
                      </span>
                    </div>
                    <div className="text-right">
                       <div className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] mb-1">Status</div>
                       <div className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2 justify-end">
                        {channel.status}
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                       </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white font-display uppercase italic tracking-tight leading-none">
                      {channel.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed font-light pr-4 group-hover:text-white/60 transition-colors">
                      {channel.description}
                    </p>
                  </div>
                </div>

                <div className="mt-12 space-y-6 relative z-10">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 py-3 px-4 rounded-xl bg-black/40 border border-white/5 group-hover:border-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-primary/40 text-sm">alternate_email</span>
                      <span className="text-[10px] font-bold text-white/60 group-hover:text-white transition-colors">{channel.email}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-5 rounded-2xl bg-white border border-white text-black font-black font-display uppercase text-xs tracking-[0.3em] group-hover:bg-primary group-hover:border-primary transition-all active:scale-95 flex items-center justify-center gap-4">
                    {channel.action}
                    <span className="material-symbols-outlined text-sm font-black">arrow_forward</span>
                  </button>
                </div>

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[200%] w-full -translate-y-full group-hover:animate-scanline pointer-events-none opacity-0 group-hover:opacity-100"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Improved Lab Contact */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] p-1 border border-white/5 bg-white/2 backdrop-blur-3xl overflow-hidden group"
        >
          <div className="p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-br from-black/40 to-transparent rounded-[2.9rem]">
             <div className="space-y-6 text-center md:text-left max-w-xl">
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="px-4 py-1.5 rounded-md bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">Physical Hub</div>
                  <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">SEC-04-A</div>
                </div>
                <h4 className="text-4xl md:text-5xl font-black text-white font-display uppercase italic tracking-tight">ForgeNexus <span className="text-gradient">Lab Suite</span></h4>
                <p className="text-white/40 text-[11px] uppercase tracking-[0.2em] font-medium leading-relaxed">
                  Advanced Prototyping, AR/VR Simulation, and AI Compute Cluster.<br />
                  <span className="text-primary/60">Room 204 • Academic Block • VVCE Campus</span>
                </p>
             </div>
             
             <div className="flex flex-col items-center gap-6">
                <div className="w-32 h-32 rounded-full border-4 border-primary/20 flex items-center justify-center relative shadow-[0_0_50px_rgba(212,175,55,0.1)] group-hover:scale-110 transition-transform duration-700">
                  <span className="material-symbols-outlined text-5xl text-primary animate-pulse">location_on</span>
                  <div className="absolute inset-0 rounded-full border border-primary/40 animate-ping opacity-20"></div>
                </div>
                <div className="text-center">
                  <div className="text-white font-black text-[10px] uppercase tracking-widest mb-1">Walking Distance</div>
                  <div className="text-primary font-black text-sm italic font-display">OPEN 09:00 — 17:00</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
