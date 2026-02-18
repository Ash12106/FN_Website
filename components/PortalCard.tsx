import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthMode, PortalConfig } from '../types';
import { Input } from './Input';
import { Button } from './Button';

interface PortalCardProps {
  config: PortalConfig;
  delay?: number;
}

export const PortalCard: React.FC<PortalCardProps> = ({ config, delay = 0 }) => {
  const [mode, setMode] = useState<AuthMode>('signin');
  
  const isStudent = config.role === 'student';
  const highlightColor = isStudent ? 'primary' : 'secondary';
  
  const iconBgClass = isStudent ? "bg-primary/20 border-primary/40 text-primary shadow-[0_0_20px_rgba(212,175,55,0.2)]" : "bg-white/5 border-white/20 text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.05)]";
  const textColorClass = isStudent ? "text-primary" : "text-white/80";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay / 1000, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-card rounded-[3rem] p-10 md:p-14 relative overflow-hidden group bg-black/40 backdrop-blur-3xl border-white/5 hover:border-primary/20 transition-all duration-700 h-full flex flex-col justify-between`}
    >
      {/* Decorative Hub Glow */}
      <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full -mr-32 -mt-32 transition-colors duration-1000 opacity-20 ${isStudent ? 'bg-primary' : 'bg-white'}`}></div>
      
      {/* Holographic Scanline Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent h-[200%] w-full -translate-y-full group-hover:animate-scanline pointer-events-none opacity-0 group-hover:opacity-100 duration-700"></div>

      <div className="relative z-10 space-y-10">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 ${iconBgClass} transition-transform duration-500`}
          >
            <span className="material-symbols-outlined text-4xl leading-none group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">{config.icon}</span>
          </motion.div>
          <div className="text-right">
            <span className={`text-[10px] font-black uppercase tracking-[0.4em] opacity-40 block mb-1`}>Nexus-OS v4.2</span>
            <span className={`text-[11px] font-black uppercase tracking-[0.3em] ${textColorClass}`}>
              {config.subtitle}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-4xl md:text-5xl font-black font-display uppercase italic text-white tracking-tighter leading-none">
            {config.title}
          </h3>
          <p className="text-white/30 text-sm leading-relaxed font-light pr-6">
            {config.description}
          </p>
        </div>

        <div className="space-y-8">
          {/* Tabs - Modern Minimal */}
          <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/5 backdrop-blur-sm">
            {['signin', 'signup'].map((m) => (
              <button 
                key={m}
                onClick={() => setMode(m as AuthMode)}
                className={`flex-1 py-3 rounded-xl text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500 ${mode === m ? `bg-white/10 text-white shadow-xl border border-white/10` : 'text-white/30 hover:text-white/50'}`}
              >
                {m === 'signin' ? 'Authorization' : 'Enlistment'}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.form 
              key={mode}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-5" 
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-5">
                <Input 
                  label={isStudent ? "STUDENT_ID" : "FACULTY_TOKEN"} 
                  placeholder={isStudent ? "NEX-2026-X" : "ARCH-771-ID"}
                  type="text"
                  highlightColor={highlightColor}
                />
                <Input 
                  label="AUTH_SECRET"
                  placeholder="••••••••" 
                  type="password"
                  highlightColor={highlightColor}
                />
              </div>

              <div className="pt-4 flex flex-col gap-4">
                <Button 
                  variant={isStudent ? "pulse" : "secondary"} 
                  fullWidth
                  className="rounded-2xl"
                >
                  {mode === 'signin' ? 'INITIATE_HANDSHAKE' : 'ENLIST_IDENTITY'}
                </Button>
                
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/20">
                  <span className="cursor-pointer hover:text-primary transition-colors">Emergency Recover</span>
                  <span className="italic">Status: Standby</span>
                </div>
              </div>
            </motion.form>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};