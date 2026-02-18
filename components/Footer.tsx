import React, { useEffect, useRef, useState } from 'react';

export const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className={`w-full relative transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Immersive Glass Background with Parallax Blur */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_20px_rgba(212,175,55,0.3)]"></div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[40px] border-t border-white/5"></div>
        
        {/* Animated Glow Accents */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-white/5 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.05)]">
          {/* Branding Section */}
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="relative">
                  <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="w-12 h-12 mix-blend-screen brightness-125 contrast-125 transition-transform duration-500 group-hover:scale-110 [mask-image:radial-gradient(circle,black_60%,transparent_100%)] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" 
                  />
                  <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-2xl tracking-[0.1em] text-white">FORGE<span className="text-primary">NEXUS</span></span>
                  <span className="text-[8px] uppercase tracking-[0.4em] text-white/30 font-bold">Innovation Forge</span>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed font-light pr-4">
                Redefining the boundary between academic research and viable intellectual property at Vidhyavardhaka College of Engineering.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
               {[
                 { 
                   label: 'Facebook', 
                   color: 'hover:bg-[#1877F2]/10 hover:border-[#1877F2]/40 hover:text-[#1877F2]',
                   path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                 },
                 { 
                   label: 'LinkedIn', 
                   color: 'hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/40 hover:text-[#0A66C2]',
                   path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                 },
                 { 
                   label: 'Instagram', 
                   color: 'hover:bg-[#E4405F]/10 hover:border-[#E4405F]/40 hover:text-[#E4405F]',
                   path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                 },
                 { 
                   label: 'Website', 
                   color: 'hover:bg-primary/10 hover:border-primary/40 hover:text-primary',
                   path: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm11-6c0 .552-.448 1-1 1h-2v2c0 .552-.448 1-1 1s-1-.448-1-1v-2h-2c-.552 0-1-.448-1-1s.448-1 1-1h2v-2c0-.552.448-1 1-1s1 .448 1 1v2h2c.552 0 1 .448 1 1z"
                 }
               ].map((social, i) => (
                 <a 
                   key={i} 
                   href="#" 
                   title={social.label}
                   className={`w-11 h-11 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-300 text-white/30 ${social.color} hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(212,175,55,0.3)] shadow-lg`}
                 >
                   <svg 
                     viewBox="0 0 24 24" 
                     className="w-5 h-5 fill-current" 
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path d={social.path} />
                   </svg>
                 </a>
               ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 lg:col-span-2">
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-6 bg-primary/40"></div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">Institutional Command Center</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-white/50">
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                    <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                  </div>
                  <p className="text-[11px] leading-relaxed font-light pt-1">
                    <span className="text-white/80 font-bold block mb-1">HQ ADDRESS</span>
                    Vidhyavardhaka College of Engineering,<br />
                    P.B. No. 206, Gokulam III Stage,<br />
                    Mysuru - 570 002, India
                  </p>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                    <span className="material-symbols-outlined text-primary text-xl">call</span>
                  </div>
                  <p className="text-[11px] font-light pt-1">
                    <span className="text-white/80 font-bold block mb-1">DIRECT LINE</span>
                    +91 821 4276200 / 225
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                 <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                    <span className="material-symbols-outlined text-primary text-xl">mail</span>
                  </div>
                  <p className="text-[11px] font-light pt-1 uppercase tracking-wider">
                    <span className="text-white/80 font-bold block mb-1">COMMUNICATIONS</span>
                    principal@vvce.ac.in
                  </p>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                    <span className="material-symbols-outlined text-primary text-xl">public</span>
                  </div>
                  <p className="text-[11px] font-light pt-1">
                    <span className="text-white/80 font-bold block mb-1">WEB ACCESS</span>
                    <a href="https://vvce.ac.in" target="_blank" className="hover:text-primary transition-colors">www.vvce.ac.in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-6 bg-primary/40"></div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">Registry</h4>
            </div>
            <ul className="space-y-4">
               {['Research Portal', 'Patent Registry', 'Technical Support', 'Privacy Policy'].map(item => (
                 <li key={item}>
                   <a href="#" className="text-xs text-white/40 hover:text-primary transition-all flex items-center gap-3 group">
                     <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:scale-150 transition-transform"></span>
                     {item}
                   </a>
                 </li>
               ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">System Status:</span>
            <div className="flex items-center gap-2 px-4 py-1.5 bg-green-500/5 border border-green-500/20 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span className="text-green-500 text-[9px] font-bold uppercase tracking-[0.2em] leading-none">Nexus Online</span>
            </div>
          </div>
          
          <div className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/20">
            © 2026 Vidhyavardhaka College of Engineering. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};