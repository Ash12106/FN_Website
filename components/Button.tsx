import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'pulse';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-bold text-xs uppercase tracking-[0.2em] transition-all rounded-lg py-4 md:py-3";
  
  const variants = {
    primary: "bg-primary/10 hover:bg-primary text-primary hover:text-background-dark border border-primary/30",
    secondary: "bg-secondary/10 hover:bg-secondary text-secondary hover:text-background-dark border border-secondary/30",
    ghost: "bg-transparent text-white/40 hover:text-white border border-transparent hover:border-white/10",
    pulse: "pulse-ring bg-primary text-background-dark px-6 py-2.5 hover:brightness-110",
  };

  // Special override for pulse button since it has different padding needs in the header
  const finalClassName = variant === 'pulse' 
    ? `${baseStyles} ${variants.pulse} ${className}`
    : `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};