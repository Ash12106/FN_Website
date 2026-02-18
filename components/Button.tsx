import React from 'react';
import { motion } from 'framer-motion';

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
  const baseStyles = "font-bold text-xs uppercase tracking-[0.2em] transition-all rounded-lg py-4 md:py-3 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-primary/10 hover:bg-primary text-primary hover:text-background-dark border border-primary/30",
    secondary: "bg-secondary/10 hover:bg-secondary text-secondary hover:text-background-dark border border-secondary/30",
    ghost: "bg-transparent text-white/40 hover:text-white border border-transparent hover:border-white/10",
    pulse: "bg-primary text-background-dark px-8 py-3 rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]",
  };

  const finalClassName = variant === 'pulse' 
    ? `${baseStyles} ${variants.pulse} ${className}`
    : `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (variant === 'pulse') {
    return (
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={finalClassName}
        onClick={props.onClick}
        disabled={props.disabled}
        type={props.type as any}
      >
        <span className="relative z-10">{children}</span>
        
        {/* Animated Glow Overlay */}
        <motion.div 
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 z-0"
        />

        {/* Pulse Ring Animation */}
        <div className="absolute inset-0 border-2 border-primary/0 rounded-xl group-hover:border-primary/20 transition-colors pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-[-4px] border border-primary rounded-[inherit]"
          />
        </div>
      </motion.button>
    );
  }

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};