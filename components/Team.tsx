import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  contact?: string;
  image?: string;
}

const facultyCoordinators: TeamMember[] = [
  { name: "Asst.Prof.Harshith C", role: "Faculty Coordinator", contact: "mail@vvce.ac.in", image: "/team/faculty_harshith_c.jpg" },
  { name: "Asst.Prof.HARSHITH V", role: "Faculty Coordinator", contact: "mail@vvce.ac.in", image: "/team/faculty_harshith_v.jpg" },
  { name: "Asst.Prof.Vignesh T V", role: "Faculty Coordinator", contact: "mail@vvce.ac.in", image: "/team/faculty_vignesh.jpg" },
  { name: "Asst.Prof.Revathy B D", role: "Faculty Coordinator", contact: "mail@vvce.ac.in", image: "/team/faculty_revathy.jpg" },
];

const studentCoreTeam: TeamMember[] = [
  { name: "Aashish.A.Shirahatti", role: "President",contact: "mail@vvce.ac.in", image: "/team/student_aashish.jpg" },
  { name: "Chandan Gowda HN", role: "Vice President",contact: "mail@vvce.ac.in", image: "/team/student_chandan.jpg" },
  { name: "Uthkarsh Gowda", role: "Secretary",contact: "mail@vvce.ac.in", image: "/team/student_uthkarsh.jpg" },
  { name: "---", role: "Publications Head",contact: "mail@vvce.ac.in", image: "/team/placeholder.jpg" },
  { name: "---", role: "Research Head",contact: "mail@vvce.ac.in", image: "/team/placeholder.jpg" },
  { name: "---", role: "Social Media Head",contact: "mail@vvce.ac.in", image: "/team/placeholder.jpg" },
  { name: "---", role: "Social Media Head",contact: "mail@vvce.ac.in", image: "/team/placeholder.jpg" },
  { name: "---", role: "Social Media Head",contact: "mail@vvce.ac.in", image: "/team/placeholder.jpg" },
  { name: "---", role: "Social Media Head",contact: "mail@vvce.ac.in", image: "/team/placeholder.jpg" },
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
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full -translate-y-1/2 opacity-20 pointer-events-none" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full opacity-20 pointer-events-none" 
      />

      <div className="flex flex-col gap-24 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]">
            The Nexus Leadership
          </div>
          <h2 className="text-5xl md:text-7xl font-black font-display uppercase italic tracking-tighter text-white leading-none">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-white/40 text-sm uppercase tracking-[0.4em] font-light max-w-2xl mx-auto pt-4">
            The visionary minds driving innovation at ForgeNexus
          </p>
        </div>

        {/* Faculty Section */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-display font-bold text-white uppercase tracking-widest">Faculty <span className="text-primary italic">Coordinators</span></h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/40 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyCoordinators.map((member, i) => (
              <motion.div 
                key={i} 
                style={{ y: useTransform(scrollYProgress, [0, 1], [i * 20, i * -20]) }}
                className="glass-card p-8 rounded-[2rem] border-primary/10 bg-white/5 group hover:border-primary/30 transition-all duration-500 text-center flex flex-col items-center justify-center min-h-[240px]"
              >
                <div className="relative mb-6">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Image Container */}
                  <div className="w-24 h-24 relative z-10 rounded-[1.5rem] bg-black/40 border border-primary/20 flex items-center justify-center overflow-hidden shadow-2xl transition-all duration-500">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://api.placeholder.org/150/150';
                        }}
                      />
                    ) : (
                      <span className="material-symbols-outlined text-4xl text-primary font-light">cast_for_education</span>
                    )}
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40"></div>
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{member.name}</h4>
                <p className="text-[10px] uppercase font-black tracking-widest text-primary/60 mb-4">{member.role}</p>
                <div className="pt-4 border-t border-white/5 w-full">
                  <p className="text-xs text-white/40 font-light truncate w-full">{member.contact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Student Section */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-l from-primary/40 to-transparent"></div>
            <h3 className="text-2xl font-display font-bold text-white uppercase tracking-widest">Student <span className="text-primary italic">Core Team 2026</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentCoreTeam.map((member, i) => (
              <motion.div 
                key={i} 
                style={{ y: useTransform(scrollYProgress, [0, 1], [(i % 3) * 30, (i % 3) * -30]) }}
                className="glass-card p-10 rounded-[2.5rem] border-white/5 bg-white/2 group hover:border-primary/20 transition-all duration-500 flex flex-col items-center text-center justify-center min-h-[220px]"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-24 h-24 relative z-10 rounded-[1.5rem] bg-black/40 border border-primary/20 flex items-center justify-center overflow-hidden shadow-2xl transition-all duration-500">
                     {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover contrast-110" 
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://api.placeholder.org/150/150';
                          }}
                        />
                     ) : (
                        <span className="material-symbols-outlined text-4xl text-primary">person</span>
                     )}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  </div>
                </div>
                <h4 className="text-xl font-display font-bold text-white group-hover:text-gradient transition-all">{member.name}</h4>
                <div className="mt-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary">{member.role}</p>
                </div>
                <div className="pt-4 border-t border-white/5 w-full">
                  <p className="text-xs text-white/40 font-light truncate w-full">{member.contact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
