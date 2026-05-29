import React from 'react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', to, href, children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-sans font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-opacity-90 focus:ring-primary",
      secondary: "bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-white focus:ring-secondary",
      outline: "bg-transparent border border-gray-300 text-primary hover:bg-gray-50 focus:ring-primary",
      ghost: "bg-transparent text-primary hover:bg-gray-100 focus:ring-primary"
    };
    
    const sizes = {
      sm: "h-10 px-4 text-sm",
      md: "h-14 px-8 text-base", // Updated to 56px height as per design system requirements
      lg: "h-16 px-10 text-lg"
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (to) {
      return (
        <Link to={to} className={classes}>
          {children}
        </Link>
      );
    }
    
    if (href) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
