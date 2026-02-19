import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

export const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('INITIALIZING SYSTEMS...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    const statusUpdates = [
      { p: 5, s: 'CORE::INIT_PROTOCOL' },
      { p: 15, s: 'AUTH::SECURE_ENCRYPTION_LAYER' },
      { p: 35, s: 'SYNC::PORTAL_NEURAL_LINK' },
      { p: 55, s: 'RUNNING::LAB_INFRASTRUCTURE_DIAGNOSTICS' },
      { p: 75, s: 'FETCHING::DATA_STREAM_LN7' },
      { p: 90, s: 'NEXUS::ACCESS_GRANTED' },
    ];

    const statusInterval = setInterval(() => {
      const matchedStatus = [...statusUpdates].reverse().find(u => progress >= u.p);
      if (matchedStatus) setStatus(matchedStatus.s);
    }, 100);

    return () => {
      clearInterval(timer);
      clearInterval(statusInterval);
    };
  }, [progress]);

  return (
    <motion.div 
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background HUD Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-circuit-pattern opacity-[0.03]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Background Labels */}
        <div className="absolute top-12 left-12 font-mono text-[8px] tracking-[0.5em] text-white/20 uppercase flex flex-col gap-2">
          <span>FN_SECURE_BOOT_SEQUENCE</span>
          <span>NODE::01_VVCE_PORTAL</span>
        </div>
        
        <div className="absolute bottom-12 right-12 font-mono text-[8px] tracking-[0.5em] text-white/20 uppercase flex flex-col items-end gap-2 text-right">
          <span>ENCRYPT_STRENGTH::256_GCM</span>
          <span>LAT::12.3394_NORTH</span>
        </div>
      </div>

      <div className="relative">
        {/* Cinematic Corner Brackets around Logo */}
        <div className="absolute -inset-10 border border-primary/20 rounded-full opacity-30" />
        <div className="absolute -inset-12 border border-primary/10 rounded-full opacity-20" />
        
        <div className="absolute -top-16 -left-16 w-8 h-8 border-l-2 border-t-2 border-primary/40" />
        <div className="absolute -top-16 -right-16 w-8 h-8 border-r-2 border-t-2 border-primary/40" />
        <div className="absolute -bottom-16 -left-16 w-8 h-8 border-l-2 border-b-2 border-primary/40" />
        <div className="absolute -bottom-16 -right-16 w-8 h-8 border-r-2 border-b-2 border-primary/40" />

        {/* Central Circular Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-20 w-36 h-36 md:w-56 md:h-56 rounded-full overflow-hidden border border-primary/20 bg-black shadow-[0_0_80px_rgba(212,175,55,0.15)] group"
        >
          <img 
            src="/logo.png" 
            alt="Forge Nexus" 
            className="w-full h-full object-cover brightness-100"
          />
          
          {/* Internal Scanline Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-[200%] w-full -translate-y-full animate-scanline-fast pointer-events-none" />
        </motion.div>

        {/* Rotating Circular HUD Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-14 border border-dashed border-primary/20 rounded-full z-10"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-20 border border-dotted border-white/10 rounded-full z-0"
        />
      </div>

      {/* Progress & Data Section */}
      <div className="mt-28 w-72 md:w-[28rem] space-y-6 relative z-30">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <span className="text-primary font-black text-[9px] tracking-[0.6em] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              SYSTEM_LINK_ACTIVE
            </span>
            <span className="text-white/60 font-mono text-[11px] tracking-[0.2em] font-medium transition-all duration-300">
              {status}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-primary font-black text-2xl font-display italic tracking-tighter">
              {progress}<span className="text-[10px] ml-1 uppercase not-italic opacity-40">%</span>
            </span>
          </div>
        </div>

        {/* Technical Progress Bar (Nexus Style) */}
        <div className="relative h-2 w-full bg-white/5 rounded-full px-0.5 pointer-events-none overflow-hidden border border-white/10">
          <motion.div 
            className="absolute inset-y-0.5 left-0.5 bg-primary rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            initial={{ width: 0 }}
            animate={{ width: `calc(${progress}% - 4px)` }}
          />
          
          {/* Subtle Scanning Highlight */}
          <div className="absolute inset-0 overflow-hidden">
             <motion.div 
                animate={{ left: ['-20%', '120%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-[100px] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
          </div>
        </div>

        {/* Technical Footer Labels for Loader */}
        <div className="flex justify-between items-center text-[7px] font-mono tracking-[0.4em] uppercase text-white/30 pt-2">
          <span>PORTAL_CORE_LOADER_v.2.0.4</span>
          <div className="flex gap-2">
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ opacity: [0.1, 0.5, 0.1] }}
                transition={{ duration: 1, delay: i * 0.15, repeat: Infinity }}
                className="w-1 h-1 bg-primary/40"
              />
            ))}
          </div>
          <span>SECURE_VAL_SUCCESS</span>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-[110] opacity-[0.03]">
        <div className="absolute inset-0 bg-repeat bg-[url('https://www.transparenttextures.com/patterns/gray-lines.png')]" />
      </div>
    </motion.div>
  );
};
