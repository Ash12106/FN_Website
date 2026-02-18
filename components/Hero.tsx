import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="max-w-4xl w-full text-center mb-16 md:mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        Nexus System Online
      </div>
      
      <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 uppercase font-display leading-[1.1] text-white">
        Where Ideas Become <span className="text-gradient italic font-display">Patents</span>
      </h2>
      
      <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light font-sans">
        The definitive bridge between raw innovation and intellectual property. Secure your legacy in the digital forge.
      </p>
    </section>
  );
};