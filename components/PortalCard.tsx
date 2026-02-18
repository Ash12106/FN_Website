import React, { useState, useEffect, useRef } from 'react';
import { AuthMode, PortalConfig } from '../types';
import { Input } from './Input';
import { Button } from './Button';

interface PortalCardProps {
  config: PortalConfig;
  delay?: number;
}

export const PortalCard: React.FC<PortalCardProps> = ({ config, delay = 0 }) => {
  const [mode, setMode] = useState<AuthMode>('signin');
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const isStudent = config.role === 'student';
  const highlightColor = isStudent ? 'primary' : 'secondary';
  
  // Dynamic class names based on role
  const iconBgClass = isStudent ? "bg-primary/10 border-primary/30 text-primary" : "bg-secondary/10 border-secondary/30 text-secondary";
  const glowClass = isStudent ? "bg-primary/10 group-hover:bg-primary/20" : "bg-secondary/10 group-hover:bg-secondary/20";
  const borderColorClass = isStudent ? "border-primary" : "border-secondary";
  const textColorClass = isStudent ? "text-primary" : "text-secondary"; // For active tab text

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`glass-card rounded-xl p-8 md:p-12 relative overflow-hidden group bg-circuit ${isStudent ? '' : 'border-primary/20 hover:border-secondary/50'} transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      {/* Decorative Blob */}
      <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] rounded-full -mr-16 -mt-16 transition-all ${glowClass}`}></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className={`size-14 rounded-lg flex items-center justify-center border group-hover:scale-110 transition-transform ${iconBgClass}`}>
            <span className="material-symbols-outlined text-3xl">{config.icon}</span>
          </div>
          <span className={`text-xs font-bold uppercase tracking-widest opacity-60 ${textColorClass}`}>
            {config.subtitle}
          </span>
        </div>

        <h3 className="text-3xl font-bold mb-4 font-display uppercase italic text-white">
          {config.title}
        </h3>
        
        <p className="text-white/50 mb-10 leading-relaxed font-light min-h-[3rem]">
          {config.description}
        </p>

        <div className="space-y-6">
          {/* Tabs */}
          <div className="flex border-b border-white/10 mb-8">
            <button 
              onClick={() => setMode('signin')}
              className={`pb-4 px-6 border-b-2 text-sm font-bold tracking-widest uppercase transition-colors ${mode === 'signin' ? `${borderColorClass} ${textColorClass}` : 'border-transparent text-white/40 hover:text-white'}`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setMode('signup')}
              className={`pb-4 px-6 border-b-2 text-sm font-bold tracking-widest uppercase transition-colors ${mode === 'signup' ? `${borderColorClass} ${textColorClass}` : 'border-transparent text-white/40 hover:text-white'}`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <Input 
                label={isStudent ? "Student ID / Email" : "Faculty Credentials"} 
                placeholder={isStudent ? "nexus-2024-id" : "arch-faculty-name"}
                type="text"
                highlightColor={highlightColor}
              />
            </div>
            <div className="space-y-1">
              <Input 
                label={isStudent ? "Access Key" : "Master Key"}
                placeholder="••••••••" 
                type="password"
                highlightColor={highlightColor}
              />
            </div>
            
            <Button 
              variant={isStudent ? 'primary' : 'secondary'} 
              fullWidth 
              className="mt-4"
            >
              {mode === 'signin' ? (isStudent ? 'Enter Portal' : 'Authenticate') : 'Initialize ID'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};