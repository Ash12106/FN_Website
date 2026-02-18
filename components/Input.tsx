import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  highlightColor?: 'primary' | 'secondary';
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  highlightColor = 'primary', 
  className = '', 
  ...props 
}) => {
  const focusColor = highlightColor === 'primary' 
    ? 'focus:border-primary/50 focus:ring-primary/50' 
    : 'focus:border-secondary/50 focus:ring-secondary/50';

  return (
    <div className={`space-y-1 ${className}`}>
      <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1 block">
        {label}
      </label>
      <input
        className={`w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-1 transition-all placeholder:text-white/20 text-white outline-none ${focusColor}`}
        {...props}
      />
    </div>
  );
};