import React from 'react';
import { Button } from './Button';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-500 overflow-hidden">
        {/* Decorative Grid Effect */}
        <div className="absolute inset-0 bg-circuit opacity-10 pointer-events-none" />
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>

        <div className="relative z-10 text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Access Portal Gateway
          </div>
          <h2 className="text-4xl font-bold font-display uppercase italic text-white mb-4">
            Initialize Your <span className="text-gradient">Legacy</span>
          </h2>
          <p className="text-white/50 font-light max-w-md mx-auto">
            Choose your role to enter the ForgeNexus ecosystem and begin your intellectual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {/* Innovator Option */}
          <div 
            onClick={() => {
                const portals = document.getElementById('portals');
                if (portals) portals.scrollIntoView({ behavior: 'smooth' });
                onClose();
            }}
            className="group cursor-pointer p-8 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="size-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">school</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Innovator</h3>
            <p className="text-xs text-white/50 leading-relaxed uppercase tracking-widest font-bold">Student Portal Access</p>
          </div>

          {/* Architect Option */}
          <div 
            onClick={() => {
                const portals = document.getElementById('portals');
                if (portals) portals.scrollIntoView({ behavior: 'smooth' });
                onClose();
            }}
            className="group cursor-pointer p-8 rounded-xl border border-secondary/20 bg-secondary/5 hover:bg-secondary/10 hover:border-secondary/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="size-14 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">account_balance</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Architect</h3>
            <p className="text-xs text-white/50 leading-relaxed uppercase tracking-widest font-bold">Faculty Portal Access</p>
          </div>
        </div>

        <div className="relative z-10 mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-white/30 uppercase tracking-[0.2em]">Forging the Future Since 2024</p>
        </div>
      </div>
    </div>
  );
};
