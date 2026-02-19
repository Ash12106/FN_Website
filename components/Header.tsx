import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

interface HeaderProps {
  onJoinClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onJoinClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      {/* Floating Glass Container */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-7xl mx-auto h-20 px-8 rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-between relative overflow-hidden group"
      >
        {/* Animated Border Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
        
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-5 select-none group/logo cursor-pointer"
        >
          <div className="relative">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative z-10"
            >
              <img 
                src="/logo.png" 
                alt="Forge Nexus Logo" 
                className="w-12 h-12 object-contain mix-blend-screen brightness-125 contrast-125 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-500 [mask-image:radial-gradient(circle,black_60%,transparent_100%)]"
              />
            </motion.div>
            {/* Logo Glow Ring */}
            <div className="absolute inset-x-[-10px] inset-y-[-10px] bg-primary/20 blur-2xl rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-700"></div>
          </div>
          
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl tracking-[0.25em] text-white hidden sm:block leading-none">
              FORGE <span className="text-primary">NEXUS</span>
            </span>
            <div className="flex items-center gap-2 mt-1 hidden sm:flex">
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-12">
          {['About', 'Focus', 'Team', 'Gallery', 'Support'].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              whileHover={{ y: -2 }}
              className="relative text-[13px] font-black text-white/60 hover:text-white transition-colors uppercase tracking-[0.35em] py-2 group/nav"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover/nav:w-full"></span>
            </motion.a>
          ))}
          
          <div className="h-8 w-[1px] bg-white/10 mx-2"></div>
          
          <Button variant="pulse" onClick={onJoinClick} className="px-8 py-3 rounded-xl scale-90">
            Join Nexus
          </Button>
        </nav>

        <button 
          className="md:hidden w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-primary transition-colors hover:border-primary/20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent h-[200%] w-full -translate-y-full group-hover:animate-scanline pointer-events-none opacity-50"></div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="md:hidden absolute top-28 left-6 right-6 p-8 rounded-[2.5rem] bg-black/90 border border-white/10 backdrop-blur-3xl shadow-2xl flex flex-col gap-6"
          >
             {['About', 'Focus', 'Team', 'Gallery', 'Support'].map((item, i) => (
              <motion.a 
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                href={`#${item.toLowerCase()}`} 
                className="text-xs font-black text-white/70 hover:text-primary transition-colors uppercase tracking-[0.4em] py-4 border-b border-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            <Button variant="pulse" className="w-full justify-center mt-4 py-5 rounded-2xl" onClick={onJoinClick}>
              Join Nexus now
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};