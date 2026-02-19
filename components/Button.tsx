import React from 'react';
import { motion } from 'framer-motion';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95',
  {
    variants: {
      variant: {
        secondary:
          'bg-white/5 text-white/80 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-md',
        pulse:
          'bg-primary text-black font-black hover:bg-primary/90 shadow-[0_0_20px_rgba(212,175,55,0.3)] animate-pulse-slow',
        nexus: 
          'nexus-btn text-white font-black tracking-[0.2em] relative overflow-hidden',
      },
      size: {
        default: 'py-3 px-4',
        sm: 'py-2 px-3 text-xs',
        lg: 'py-4 px-6 text-lg',
        icon: 'p-2',
        nexus: 'py-5 px-12 rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  variant?: 'secondary' | 'pulse' | 'nexus';
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'nexus';
  fullWidth?: boolean;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
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
    primary: "bg-primary/10 hover:bg-primary text-primary hover:text-black border border-primary/30 transition-all duration-300",
    secondary: "bg-secondary/10 hover:bg-secondary text-secondary hover:text-black border border-secondary/30 transition-all duration-300",
    ghost: "bg-transparent text-white/40 hover:text-black hover:bg-white border border-transparent hover:border-white/10 transition-all duration-300",
    pulse: "bg-primary text-black px-8 py-3 rounded-xl hover:bg-primary/95 transition-all duration-300",
    nexus: "bg-black/40 backdrop-blur-md border border-primary/20 hover:border-primary/90 hover:bg-primary text-primary hover:text-black px-12 py-5 rounded-2xl transition-all duration-500",
  };

  const finalClassName = (variant === 'pulse' || variant === 'nexus') 
    ? `${baseStyles} ${variants[variant]} ${className}`
    : `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (variant === 'nexus') {
    return (
      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${finalClassName} overflow-visible`}
        onClick={props.onClick}
        type={props.type as any}
        disabled={props.disabled}
      >
        {/* External Cinematic Structure */}
        <div className="absolute -inset-2 border border-primary/20 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
        <div className="absolute -inset-1 border border-primary/10 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 pointer-events-none" />
        
        <div className="absolute inset-0 bg-circuit opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity" />
        
        {/* Animated Corner Brackets */}
        <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-primary/40 group-hover:w-4 group-hover:h-4 group-hover:border-primary transition-all" />
        <div className="absolute top-2 right-2 w-2 h-2 border-r border-t border-primary/40 group-hover:w-4 group-hover:h-4 group-hover:border-primary transition-all" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-primary/40 group-hover:w-4 group-hover:h-4 group-hover:border-primary transition-all" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-primary/40 group-hover:w-4 group-hover:h-4 group-hover:border-primary transition-all" />
        
        {/* Technical Data Label */}
        <div className="absolute -top-1.5 left-8 px-2 bg-black text-[7px] text-primary/60 group-hover:text-black font-black tracking-[0.6em] font-mono transition-colors z-20">
          SECURE_ACCESS::LN_7
        </div>
        
        <span className="relative z-10 flex items-center justify-center gap-4 transition-transform duration-500 group-hover:scale-105 group-hover:text-black">
          {children}
          <motion.span 
            className="material-symbols-outlined text-sm font-black"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            bolt
          </motion.span>
        </span>
        
        {/* Superior Scanning Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              top: ['-10%', '110%'],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "linear",
              times: [0, 0.5, 1]
            }}
            className="absolute left-0 right-0 h-[2px] bg-primary/40 blur-[1px] z-10"
          />
        </div>

        {/* Backdrop Glow */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary transition-all duration-500 ease-out" />
      </motion.button>
    );
  }

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