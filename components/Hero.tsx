import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

interface HeroProps {
  onJoinClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section className="max-w-6xl w-full text-center py-10 md:py-16 relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-black uppercase tracking-[0.4em] mb-12 shadow-[0_0_40px_rgba(var(--primary-rgb),0.1)] backdrop-blur-md"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        VidhyaVardhaka ForgeNexus Portal
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 uppercase font-display leading-[0.9] text-white italic">
          Forge Your <br />
          <span className="text-gradient">Innovations</span>
        </h2>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-white/40 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light uppercase tracking-[0.3em] italic mb-12"
      >
        INNOVATION HUB // THE PREMIER HUB FOR PATENTS, RESEARCH, AND CROSS-DISCIPLINARY EXCELLENCE AT VVCE.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20 relative px-6"
      >
        <Button 
          variant="nexus" 
          onClick={onJoinClick} 
          className="px-14 py-8 text-xl tracking-[0.8em] font-black italic rounded-[2rem] transition-transform hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(var(--primary-rgb),0.1)] hover:shadow-[0_0_80px_rgba(var(--primary-rgb),0.2)]"
        >
          JOIN NEXUS NOW
        </Button>

        <Button 
          variant="nexus" 
          onClick={() => window.open('https://chat.whatsapp.com/LUToO79YiLTKFvswzI5D9p?mode=gi_t', '_blank')}
          className="px-14 py-8 text-xl tracking-[0.8em] font-black italic rounded-[2rem] transition-transform hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(var(--primary-rgb),0.05)] hover:shadow-[0_0_80px_rgba(var(--primary-rgb),0.1)] opacity-90 hover:opacity-100"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-xl">diversity_3</span>
            <span>COMMUNITY</span>
          </div>
        </Button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col md:flex-row items-center justify-center gap-6"
      >
        <div className="flex items-center gap-4 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-white/60 font-mono text-[10px] uppercase tracking-widest">
          <span className="text-primary font-black">LAT:</span> 12.3394° N
          <span className="text-primary font-black">LONG:</span> 76.6186° E
        </div>
        <div className="hidden md:block h-px w-12 bg-white/10"></div>
        <div className="flex items-center gap-4 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-white/60 font-mono text-[10px] uppercase tracking-widest">
          <span className="text-primary font-black">PLATFORM:</span> ACTIVE
        </div>
      </motion.div>
    </section>
  );
};