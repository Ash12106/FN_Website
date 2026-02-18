import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const About: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section ref={containerRef} id="about" className="max-w-7xl w-full pb-32 pt-0 px-6 md:px-12 relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full -translate-y-1/2 opacity-20 pointer-events-none" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full opacity-30 pointer-events-none" 
      />

      <div className="flex flex-col gap-15">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-black uppercase tracking-[0.4em] mb-8 shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)]">
            Vidhyavardhaka College of Engineering 
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-display uppercase italic tracking-tighter text-white leading-none max-w-4xl mx-auto">
            Our <span className="text-gradient">Core</span> Philosophy
          </h2>
        </div>

        {/* Vision Section - Immersive Layout */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [30, -30]) }}
          className="relative group z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="glass-card relative p-12 md:p-20 rounded-[3rem] border-white/5 bg-black/60 backdrop-blur-3xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 group">
            
            {/* Holographic Decorations */}
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent"></div>
            
            <div className="flex-1 space-y-12 text-center lg:text-left">
               <div className="inline-flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:rotate-12 transition-transform duration-500">
                    <span className="material-symbols-outlined text-3xl">visibility</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-primary font-display text-[10px] uppercase tracking-[0.6em] font-black">Strategic Directive</div>
                    <div className="text-[9px] text-white/20 uppercase font-black tracking-widest mt-0.5 whitespace-nowrap">Protocol: 07-NEXUS-VISION</div>
                  </div>
               </div>
               <h3 className="text-4xl md:text-6xl lg:text-7xl font-black font-display text-white leading-[0.95] tracking-tight italic uppercase">
                  Pioneering <br />
                  <span className="text-gradient">Intellectual</span> <br />
                  Frontiers
               </h3>
               <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 pr-0 lg:pr-12">
                  ForgeNexus serves as the catalyst at Vidhyavardhaka College of Engineering, bridging the divide between academic inquiry and industrial application.
               </p>
            </div>

            <div className="flex-1 w-full lg:w-auto relative">
              <div className="relative aspect-square max-w-[450px] mx-auto group-hover:scale-105 transition-transform duration-1000 cursor-none">
                {/* Visual Data Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="absolute w-full h-full border border-primary/20 rounded-full border-dashed p-4"
                   />
                   <motion.div 
                     animate={{ rotate: -360 }}
                     transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                     className="absolute w-[80%] h-[80%] border border-white/5 rounded-full border-dashed"
                   />
                   <div className="w-40 h-40 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/30 flex items-center justify-center relative overflow-hidden group/eye">
                      <span className="material-symbols-outlined text-6xl text-primary animate-pulse relative z-10">hub</span>
                      <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Mission - Left Column (5/12) */}
          <div className="lg:col-span-12 flex flex-col mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="glass-card p-10 md:p-16 rounded-[2.5rem] border-primary/20 bg-primary/2 flex flex-col items-center">
              <div className="flex justify-center mb-16">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)]">
                  Mission Statement
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 w-full max-w-6xl">
                {[
                  { icon: 'biotech', text: "Enable students from all engineering branches to conduct high-impact research alongside professors." },
                  { icon: 'description', text: "Publish scholarly papers, file patents, and prototype meaningful products." },
                  { icon: 'rocket', text: "Create a launchpad for startups and national-level innovation recognition." },
                  { icon: 'public', text: "Represent the college in national and international forums." },
                  { icon: 'hub', text: "Foster inter-departmental collaboration and knowledge exchange." },
                  { icon: 'engineering', text: "Representing excellence through innovation and interdisciplinary expertise." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-6 group">
                    <div className="w-16 h-16 rounded-[1.25rem] border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-500 group-hover:scale-110 shadow-xl group-hover:rotate-12">
                      <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
                    </div>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors px-4 font-light italic">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Values - Full Width Section (for better alignment with Mission above) */}
          <div className="lg:col-span-12 flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex justify-center mb-12">
               <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)]">
                  Core Values
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
              {[
                { title: "Innovation", desc: "Encouraging creative thinking and novel approaches across all disciplines.", color: "primary", icon: "lightbulb", span: "" },
                { title: "Collaboration", desc: "Fostering teamwork between students and faculty from diverse branches.", color: "primary", icon: "handshake", span: "" },
                { title: "Excellence", desc: "Maintaining high standards in all research endeavors.", color: "primary", icon: "star", span: "" },
                { title: "Impact", desc: "Creating solutions that benefit society through engineering innovation.", color: "primary", icon: "public", span: "" },
                { title: "Integrity", desc: "Upholding ethical research and interdisciplinary cooperation.", color: "primary", icon: "verified", span: "" }
              ].map((val, i) => (
                <div key={i} className={`glass-card p-10 rounded-[2rem] border-primary/5 hover:border-primary/30 transition-all group overflow-hidden relative ${val.span} flex flex-col items-center text-center justify-center min-h-[220px]`}>
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
                  
                  <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-black/40 border border-white/10 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-2xl group-hover:border-primary/20">
                    <span className="material-symbols-outlined text-4xl">{val.icon}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold uppercase tracking-[0.2em] text-white mb-4 group-hover:text-primary transition-colors font-display">
                    {val.title}
                  </h4>
                  <p className="text-sm text-white/50 leading-relaxed font-light group-hover:text-white/80 transition-colors px-6">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual Accent */}
      <div className="mt-32 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-white/20 rotate-45 bg-black/80 backdrop-blur-sm"></div>
      </div>
    </section>
  );
};
