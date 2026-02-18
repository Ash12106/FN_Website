import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const focusAreas = [
  {
    title: "Patent Strategy",
    description: "Guidance on identifying patentable inventions and navigating the legal landscape of intellectual property.",
    icon: "gavel",
    stats: "15+ Filed"
  },
  {
    title: "Research Excellence",
    description: "Bridging the gap between academic theory and published scholarly excellence in high-impact journals.",
    icon: "book_4",
    stats: "50+ Papers"
  },
  {
    title: "Product Forge",
    description: "Turning blueprinted ideas into functioning prototypes through inter-departmental collaboration.",
    icon: "precision_manufacturing",
    stats: "10+ Prototypes"
  },
  {
    title: "Network Synergy",
    description: "Connecting students with industry mentors and national-level innovation centers.",
    icon: "webhook",
    stats: "20+ Mentors"
  }
];

const clubDomains = [
  {
    id: "01",
    title: "AI & Robotics",
    leads: "CSE, CSE (AI/ML), ISE",
    supporting: "ECE, EEE, ME",
    topics: ["Machine Learning & Deep Learning", "Autonomous Systems", "Computer Vision & NLP", "Intelligent Control"],
    icon: "smart_toy"
  },
  {
    id: "02",
    title: "IoT & Smart Cities",
    leads: "ECE, EEE, CSE",
    supporting: "CE, ME, ISE",
    topics: ["Smart Infrastructure", "Sensor Networks", "Urban Tech Platforms", "Sustainable Planning"],
    icon: "apartment"
  },
  {
    id: "03",
    title: "GreenTech & Energy",
    leads: "EEE, ME, CE",
    supporting: "CSE, ISE, ECE",
    topics: ["Solar & Wind Systems", "Energy Storage", "Smart Grid Tech", "Environmental Monitoring"],
    icon: "eco"
  },
  {
    id: "04",
    title: "Healthcare & Bio",
    leads: "ECE, EEE, CSE (AI/ML)",
    supporting: "ME, ISE, CE",
    topics: ["Medical Device Dev", "Health Monitoring", "Telemedicine Solutions", "Signal Processing"],
    icon: "medical_services"
  },
  {
    id: "05",
    title: "Cyber & Emergency",
    leads: "CSE, ISE, ECE, AIML",
    supporting: "EEE, CE, ME",
    topics: ["Network Security", "Emergency Response", "Disaster Mgmt", "Infrastructure Protection"],
    icon: "security"
  },
  {
    id: "06",
    title: "Mechanical & Product",
    leads: "ME, CE",
    supporting: "EEE, ECE, CSE/ISE",
    topics: ["Advanced Manufacturing", "Product Design", "Industrial Automation", "Materials Engineering"],
    icon: "settings_suggest"
  },
  {
    id: "07",
    title: "Software & Data Eng",
    leads: "CSE, ISE, CSE (AI/ML)",
    supporting: "All Engineering Branches",
    topics: ["OS Development", "DBMS", "Cloud Computing", "Big Data Analytics"],
    icon: "database"
  },
  {
    id: "08",
    title: "Electronics & Comm",
    leads: "ECE, EEE",
    supporting: "CSE/ISE, ME, CE",
    topics: ["Wireless Systems", "Signal Processing", "VLSI & Embedded", "Network Design"],
    icon: "router"
  }
];

export const Focus: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} id="focus" className="max-w-7xl w-full py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="flex flex-col gap-32 relative z-10">
        
        {/* Section 1: Strategic Focus */}
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-white/5 pb-12">
            <div className="space-y-4 max-w-xl text-left">
              <div className="text-primary font-display text-xs uppercase tracking-[0.4em] font-black">Institutional Vision</div>
              <h2 className="text-4xl md:text-5xl font-black font-display text-white uppercase italic leading-none">
                Strategic <span className="text-gradient">Focus</span>
              </h2>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                Our roadmap is engineered to transform academic potential into tangible industrial innovation through structured R&D.
              </p>
            </div>
            <div className="flex items-center gap-6 px-8 py-5 rounded-2xl bg-white/2 border border-white/5 backdrop-blur-xl">
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">Horizon</span>
                <span className="text-sm font-black text-primary font-display uppercase tracking-widest">2024 — 2027</span>
              </div>
              <span className="material-symbols-outlined text-primary/40 animate-pulse text-2xl">near_me</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-10 rounded-[2.5rem] bg-white/2 border border-white/5 hover:border-primary/20 transition-all duration-700 overflow-hidden flex flex-col justify-between min-h-[340px]"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors pointer-events-none"></div>

                <div className="relative z-10 space-y-8">
                  <div className="w-14 h-14 rounded-2xl bg-black/40 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                    <span className="material-symbols-outlined text-3xl">{area.icon}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors font-display tracking-tight leading-loose uppercase">
                      {area.title}
                    </h4>
                    <p className="text-xs text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors">
                      {area.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-8 mt-4 border-t border-white/5">
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] uppercase font-black text-white/20 tracking-[0.2em]">Institutional Objective</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Club Domains */}
        <div className="space-y-20">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-white/5 pb-12">
            <div className="space-y-4 max-w-xl">
              <div className="text-primary font-display text-xs uppercase tracking-[0.4em] font-black">Inter-Departmental Synergy</div>
              <h3 className="text-4xl md:text-5xl font-black font-display text-white uppercase italic leading-none">
                Club <span className="text-gradient">Domains</span>
              </h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                ForgeNexus R&D verticals integrate expertise from across all VVCE branches through a lead-supporting branch framework.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="px-6 py-4 rounded-2xl bg-white/2 border border-white/5 backdrop-blur-sm">
                <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] block mb-1 font-bold">Total Verticals</span>
                <span className="text-3xl font-black text-primary font-display">08</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubDomains.map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`glass-card p-10 rounded-[2.5rem] border-white/5 bg-white/2 group hover:border-primary/20 transition-all duration-700 relative overflow-hidden flex flex-col justify-between min-h-[420px] ${i === 0 || i === 4 ? 'lg:col-span-1' : ''}`}
              >
                {/* Background Dynamic Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700 -mr-16 -mt-16"></div>
                
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-black/40 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                      <span className="material-symbols-outlined text-3xl">{domain.icon}</span>
                    </div>
                    <span className="text-4xl font-black text-primary/20 font-display group-hover:text-primary transition-colors duration-500">{domain.id}</span>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors font-display tracking-tight">{domain.title}</h4>
                    <div className="flex flex-col gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                          <span className="text-[9px] uppercase font-black text-primary tracking-widest">Lead Branches</span>
                        </div>
                        <p className="text-xs text-white/80 font-medium leading-tight pl-3.5 border-l border-primary/20">{domain.leads}</p>
                      </div>
                      <div className="space-y-2">
                         <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                          <span className="text-[9px] uppercase font-black text-white/30 tracking-widest">Supporting</span>
                        </div>
                        <p className="text-xs text-white/50 font-light leading-tight pl-3.5 border-l border-white/10">{domain.supporting}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-8 mt-4 border-t border-white/5 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {domain.topics.map((topic, j) => (
                      <span key={j} className="px-3 py-1.5 rounded-lg bg-black/20 border border-white/5 text-[9px] text-white/40 uppercase tracking-wider group-hover:border-primary/20 group-hover:text-white/60 transition-all font-medium italic">
                        {topic}
                      </span>
                    ))}
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
