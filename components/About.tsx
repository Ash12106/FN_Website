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
      {/* Background HUD Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
      
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -translate-y-1/2 opacity-20 pointer-events-none" 
      />

      <div className="flex flex-col gap-24 relative z-10">
        {/* Section Header - Technical Style */}
        <div className="flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(var(--primary-rgb),0.05)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Vidhyavardhaka College of Engineering 
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          </motion.div>
          
          <h2 className="text-6xl md:text-9xl font-black font-display uppercase italic tracking-[ -0.05em] text-white leading-none">
            Our <span className="text-gradient">Core</span> <br />
            Philosophy
          </h2>

          <p className="max-w-2xl text-white/40 font-light text-sm leading-relaxed uppercase tracking-[0.3em] italic">
            DEFINING THE ARCHITECTURE OF INTERDISCIPLINARY EXCELLENCE.
          </p>
        </div>

        {/* Vision Section - Tactical HUD Container */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [30, -30]) }}
          className="relative group h-full"
        >
          {/* Tactical Frame Brackets */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border-l-2 border-t-2 border-primary/20 transition-all duration-700 group-hover:w-24 group-hover:h-24 group-hover:border-primary/60" />
          <div className="absolute -bottom-10 -right-10 w-20 h-20 border-r-2 border-b-2 border-primary/20 transition-all duration-700 group-hover:w-24 group-hover:h-24 group-hover:border-primary/60" />
          
          <div className="glass-card relative p-12 md:p-20 rounded-[3rem] border-primary/10 bg-black/40 backdrop-blur-3xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Animated Background Pulse */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] group-hover:bg-primary/10 transition-colors" />
            
            <div className="flex-1 space-y-12 relative z-10 text-center lg:text-left">
               <div className="inline-flex items-center gap-4">
                  <div className="h-px w-10 bg-primary/40"></div>
                  <div className="text-primary font-mono text-[10px] uppercase tracking-[0.6em] font-black">STRATEGIC_VISION::INIT</div>
               </div>
               
               <h3 className="text-4xl md:text-5xl lg:text-7xl font-black font-display text-white leading-[0.95] tracking-tighter italic uppercase">
                  Empowering the <br />
                  <span className="text-gradient">Next Gen</span> <br />
                  of Innovators
               </h3>
               
               <div className="relative pl-0 lg:pl-10">
                 <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/10 to-transparent hidden lg:block"></div>
                 <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed italic uppercase tracking-[0.1em] max-w-2xl">
                   "Building a multidisciplinary ecosystem that transforms academic curiosity into global breakthroughs, patents, and real-world impact."
                 </p>
               </div>
            </div>
            
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0 flex items-center justify-center">
               {/* Technical HUD Rings */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border border-dashed border-primary/20 rounded-full"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-10 border border-dotted border-primary/10 rounded-full"
               />
               
               {/* Central Icon Capsule */}
               <div className="relative w-40 h-40 md:w-56 md:h-56 bg-black border border-primary/30 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(var(--primary-rgb),0.1)] group-hover:scale-110 transition-transform duration-700">
                  <span className="material-symbols-outlined text-6xl md:text-8xl text-primary drop-shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]">rocket_launch</span>
                  
                  {/* Rotating Scanning Sweep */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-full"
                  />
               </div>
               
               {/* Floating Data Nodes */}
               <div className="absolute w-2 h-2 bg-primary rounded-full top-0 left-1/2 -ml-1 shadow-[0_0_10px_var(--primary)] animate-pulse"></div>
               <div className="absolute w-2 h-2 bg-primary/40 rounded-full bottom-0 left-1/2 -ml-1 animate-ping"></div>
            </div>
          </div>
        </motion.div>

        {/* Mission Grid - Improvised Tactical Layout */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
           <div className="glass-card p-12 md:p-24 rounded-[3.5rem] border-primary/10 bg-primary/[0.02] backdrop-blur-xl relative overflow-hidden">
              {/* Scanline Effect Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
              
              <div className="flex flex-col items-center mb-24 relative z-10">
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_0_40px_rgba(var(--primary-rgb),0.1)]">
                  Mission_Statement::LOADED
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20 relative z-10">
                {[
                  { icon: 'biotech', text: "Conduct high-impact research alongside expert faculty catalysts." },
                  { icon: 'description', text: "Archive scholarly publications, patents, and high-fidelity products." },
                  { icon: 'rocket', text: "Accelerate startups and national-level innovation recognition." },
                  { icon: 'public', text: "Command representation in global elite research forums." },
                  { icon: 'hub', text: "Neural-link inter-departmental collaboration networks." },
                  { icon: 'engineering', text: "Engineering excellence through iterative breakthroughs." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-8 group/item">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-3xl bg-black border border-primary/20 flex items-center justify-center group-hover/item:border-primary/60 group-hover/item:bg-primary/10 transition-all duration-500 shadow-2xl group-hover/item:-translate-y-2 group-hover/item:rotate-6">
                        <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
                      </div>
                      {/* Item Tech Badge */}
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary text-black text-[8px] font-black flex items-center justify-center rounded-full border-2 border-black">
                        0{i + 1}
                      </div>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed uppercase tracking-[0.2em] italic font-light group-hover/item:text-white transition-colors">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Core Values - Technical Grid */}
        <div className="flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex justify-center mb-16">
             <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em]">
                CORE_VALUES::INTACT
              </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-7xl mx-auto">
            {[
              { title: "Innovation", desc: "Creative thinking and novel approaches across all disciplines.", icon: "lightbulb" },
              { title: "Collaboration", desc: "Neuro-link teamwork between student and faculty catalysts.", icon: "handshake" },
              { title: "Excellence", desc: "Maintaining high-fidelity standards in all research endeavors.", icon: "star" },
              { title: "Impact", desc: "Solutions that benefit society through engineering breakthroughs.", icon: "public" },
              { title: "Integrity", desc: "Upholding ethical research and interdisciplinary cooperation.", icon: "verified" }
            ].map((val, i) => (
              <div key={i} className="glass-card p-8 rounded-[2rem] border-primary/5 hover:border-primary/40 bg-white/[0.02] transition-all group overflow-hidden relative flex flex-col items-center text-center justify-center min-h-[260px]">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-all duration-700" />
                
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-black border border-white/10 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl group-hover:border-primary/40">
                  <span className="material-symbols-outlined text-4xl">{val.icon}</span>
                </div>
                
                <h4 className="text-sm font-black uppercase tracking-[0.25em] text-white/80 mb-4 group-hover:text-primary transition-colors font-display italic">
                  {val.title}
                </h4>
                <p className="text-[11px] text-white/30 leading-relaxed font-light uppercase tracking-[0.1em] italic group-hover:text-white/60 transition-colors px-4">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* High-Tech Section Divider */}
      <div className="mt-32 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border-2 border-primary/40 rotate-45 bg-black z-10 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]"></div>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 -z-10"></div>
      </div>
    </section>
  );
};
