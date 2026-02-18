import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  contact?: string;
  image?: string;
}

const facultyCoordinators: TeamMember[] = [
  { name: "Asst.Prof. Harshith C", role: "Faculty Coordinator", contact: "harshithc@vvce.ac.in", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=HarshithC" },
  { name: "Asst.Prof. Harshith V", role: "Faculty Coordinator", contact: "harshithv@vvce.ac.in", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=HarshithV" },
  { name: "Asst.Prof. Vignesh T V", role: "Faculty Coordinator", contact: "vigneshtv@vvce.ac.in", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vignesh" },
  { name: "Asst.Prof. Revathy B D", role: "Faculty Coordinator", contact: "revathybd@vvce.ac.in", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Revathy" },
];

const studentCoreTeam: TeamMember[] = [
  { name: "Aashish A Shirahatti", role: "President", contact: "aashish@vvce.ac.in", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aashish" },
  { name: "Chandan Gowda H N", role: "Vice President", contact: "chandan@vvce.ac.in", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chandan" },
  { name: "Uthkarsh Gowda", role: "Secretary", contact: "uthkarsh@vvce.ac.in", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Uthkarsh" },
  { name: "Gagan S", role: "Research Head", contact: "gagan@vvce.ac.in", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gagan" },
  { name: "Bhoomika", role: "Publications Head", contact: "bhoomika@vvce.ac.in", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bhoomika" },
  { name: "Sumanth", role: "Social Media Head", contact: "sumanth@vvce.ac.in", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sumanth" },
];

export const Team: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} id="team" className="max-w-7xl w-full py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="flex flex-col gap-24 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]"
          >
            Personnel Database
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-black font-display uppercase italic tracking-tighter text-white leading-none"
          >
            Meet Our <span className="text-gradient">Team</span>
          </motion.h2>
          <p className="text-white/40 text-sm italic tracking-[0.2em] font-light max-w-2xl mx-auto pt-4">
            [ACCESSING_PERSONNEL_ARCHIVE_SUITE_v4.2]
          </p>
        </div>

        {/* Faculty Section */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-display font-black text-white uppercase tracking-widest italic">Faculty <span className="text-primary">Command</span></h3>
            <div className="h-[1px] flex-1 bg-linear-to-r from-primary/40 to-transparent"></div>
            <div className="text-[10px] font-mono text-primary/40">AUTH_LVL: 04</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyCoordinators.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="glass-card p-6 rounded-[2rem] border-primary/10 bg-white/2 overflow-hidden group-hover:border-primary/40 transition-all duration-500 text-center flex flex-col items-center">
                  {/* Scanline Effect */}
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent h-1/2 w-full animate-scanline opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                  
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full border-2 border-primary/20 p-1 group-hover:border-primary/50 transition-colors">
                      <div className="w-full h-full rounded-full bg-black/40 overflow-hidden relative">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" 
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                      </div>
                    </div>
                    {/* Status Dot */}
                    <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-primary border-4 border-black animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-1 mb-4">
                    <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{member.name}</h4>
                    <p className="text-[10px] uppercase font-black tracking-widest text-primary/60">{member.role}</p>
                  </div>

                  <div className="w-full pt-4 border-t border-white/5 space-y-2">
                    <div className="flex justify-between items-center text-[9px] font-mono text-white/30 uppercase">
                      <span>Email</span>
                      <span className="text-white/60 lowercase">{member.contact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Student Section */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="text-[10px] font-mono text-primary/40">AUTH_LVL: 02</div>
            <div className="h-[1px] flex-1 bg-linear-to-l from-primary/40 to-transparent"></div>
            <h3 className="text-2xl font-display font-black text-white uppercase tracking-widest italic">Core <span className="text-primary italic">Directive</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentCoreTeam.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="glass-card p-8 rounded-[2.5rem] border-white/5 bg-white/2 overflow-hidden group-hover:border-primary/20 transition-all duration-500 flex flex-col items-center">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <span className="material-symbols-outlined text-4xl text-primary font-light">fingerprint</span>
                  </div>
                  
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl rotate-45 border-2 border-primary/20 p-1 group-hover:border-primary/50 transition-all duration-500 overflow-hidden group-hover:rotate-0">
                      <div className="w-full h-full bg-black/40 overflow-hidden -rotate-45 group-hover:rotate-0 transition-all duration-500">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-1 mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{member.name}</h4>
                    <p className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">{member.role}</p>
                  </div>

                  <div className="w-full pt-4 border-t border-white/5 flex gap-4 justify-center">
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5 group-hover:border-primary/20 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse"></div>
                      <span className="text-[9px] font-mono text-white/40 uppercase tracking-tighter">Active_Duty</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5 group-hover:border-primary/20 transition-colors">
                      <span className="text-[9px] font-mono text-white/40 uppercase tracking-tighter tracking-widest">{member.contact?.split('@')[0]}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
