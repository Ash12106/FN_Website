import React, { useState } from 'react';
import { Button } from './Button';

interface HeaderProps {
  onJoinClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onJoinClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-10 border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4 select-none group cursor-pointer transition-all duration-500">
          <div className="relative">
            {/* Logo with Screen blend mode to remove black background from the image provided */}
            <img 
              src="/logo.png" 
              alt="Forge Nexus Logo" 
              className="w-14 h-14 object-contain mix-blend-screen brightness-125 contrast-125 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(212,175,55,0.7)] [mask-image:radial-gradient(circle,black_60%,transparent_100%)]"
            />
            {/* Subtle glow behind to ensure visibility against anything */}
            <div className="absolute inset-0 bg-primary/10 blur-xl -z-10 rounded-full scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <span className="font-display font-black text-2xl tracking-[0.2em] text-white hidden sm:block">
            FORGE<span className="text-primary italic">NEXUS</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {['About', 'Team', 'Focus', 'Support'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
          <Button variant="pulse" onClick={onJoinClick}>
            Join Us Now
          </Button>
        </nav>

        <button 
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 border-b border-white/10 backdrop-blur-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 fade-in duration-200">
           {['About', 'Team', 'Focus', 'Support'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors uppercase tracking-widest py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button variant="pulse" className="w-full justify-center mt-2" onClick={onJoinClick}>
            Join Us Now
          </Button>
        </div>
      )}
    </header>
  );
};