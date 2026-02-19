import React, { useState } from 'react';
import { Button } from './Button';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRole: (role: 'student' | 'faculty') => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose, onSelectRole }) => {
  const [step, setStep] = useState<'role' | 'auth'>('role');
  const [selectedRole, setSelectedRole] = useState<'student' | 'faculty' | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);

  if (!isOpen) return null;

  const handleRoleSelect = (role: 'student' | 'faculty') => {
    setSelectedRole(role);
    setStep('auth');
  };

  const handleBack = () => {
    setStep('role');
    setSelectedRole(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole) {
      onSelectRole(selectedRole);
      onClose();
      // Reset for next time
      setStep('role');
      setSelectedRole(null);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_100px_rgba(0,0,0,1)] animate-in fade-in zoom-in-95 duration-500 overflow-hidden">
        {/* Decorative Technical Elements */}
        <div className="absolute inset-0 bg-circuit opacity-5 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-white/40 hover:text-white transition-all hover:rotate-90 duration-300 z-50"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>

        {step === 'role' ? (
          <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                System Access Protocol
              </div>
              <h2 className="text-5xl font-black font-display uppercase italic text-white mb-6 tracking-tight">
                SELECT YOUR <span className="text-primary">SECTOR</span>
              </h2>
              <p className="text-white/40 font-light max-w-sm mx-auto text-sm leading-relaxed">
                Choose your navigational role to initialize authentication within the ForgeNexus ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Innovator Option */}
              <div 
                onClick={() => handleRoleSelect('student')}
                className="group cursor-pointer relative overflow-hidden p-10 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-primary/[0.03] hover:border-primary/40 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">school</span>
                </div>
                <div className="relative z-10">
                  <div className="size-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">school</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tighter">Innovator</h3>
                  <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-[0.2em] font-bold">Student Cluster Access</p>
                </div>
              </div>

              {/* Architect Option */}
              <div 
                onClick={() => handleRoleSelect('faculty')}
                className="group cursor-pointer relative overflow-hidden p-10 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-secondary/[0.03] hover:border-secondary/40 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">account_balance</span>
                </div>
                <div className="relative z-10">
                  <div className="size-12 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">account_balance</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tighter">Architect</h3>
                  <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-[0.2em] font-bold">Faculty Node Entry</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative z-10 animate-in fade-in slide-in-from-right-8 duration-500">
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 text-primary/60 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-[0.2em] mb-10 group"
            >
              <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Return to Sector Selection
            </button>

            <div className="text-center mb-10">
              <h2 className="text-5xl font-black font-display uppercase italic text-white mb-4 tracking-tight">
                {isSignUp ? 'REGISTER' : 'AUTHORIZE'} <span className="text-primary">ID</span>
              </h2>
              <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.2em]">
                Sector: {selectedRole === 'student' ? 'Innovator-77' : 'Architect-01'} // Status: Pending
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
              <div className="space-y-4">
                {isSignUp && (
                   <div className="relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center text-white/20 group-focus-within:text-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">person</span>
                    </div>
                    <input 
                      type="text" 
                      placeholder="FULL NAME"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-xs font-mono tracking-widest placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all"
                    />
                  </div>
                )}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center text-white/20 group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">alternate_email</span>
                  </div>
                  <input 
                    type="email" 
                    placeholder="EMAIL IDENTIFIER"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-xs font-mono tracking-widest placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center text-white/20 group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">lock_open</span>
                  </div>
                  <input 
                    type="password" 
                    placeholder="SECURITY KEY"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-xs font-mono tracking-widest placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full bg-primary text-black hover:bg-white hover:text-black transition-all font-black tracking-[0.2em] font-mono h-14"
                >
                  {isSignUp ? 'INITIALIZE ACCREDITATION' : 'VERIFY IDENTITY'}
                </Button>
              </div>

              <div className="text-center pt-6">
                <button 
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-[10px] text-white/30 hover:text-white transition-colors uppercase tracking-[0.2em] font-bold"
                >
                  {isSignUp ? 'Already have an identifier? Re-authorize' : 'No identifier found? Register new node'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Diagnostic Footer */}
        <div className="relative z-10 mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
          <div className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </div>
          <p className="text-[8px] text-white/20 font-mono uppercase tracking-[0.3em] italic">System: Stable // V.0.0.1</p>
        </div>
      </div>
    </div>
  );
};

