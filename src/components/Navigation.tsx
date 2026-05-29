import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Books', path: '/books' },
    { name: 'Seminars', path: '/seminars' },
    { name: 'Media', path: '/media' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const navClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    {
      "bg-primary text-white shadow-md": isScrolled || !isHome,
      "bg-transparent text-white": !isScrolled && isHome,
    }
  );

  return (
    <header className={navClasses}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo / Brand */}
          <Link to="/" className="flex flex-col">
            <span className="font-playfair font-bold text-xl tracking-wide uppercase">Dr. S. G. Biju</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-80 mt-0.5">Physician & Educator</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-opacity hover:opacity-100",
                    location.pathname === link.path ? "opacity-100 border-b border-secondary pb-1" : "opacity-70"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <Button to="/contact" size="sm" className="bg-secondary text-primary hover:bg-white focus:ring-secondary rounded-lg font-semibold h-10 px-6">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-primary min-h-screen z-40 transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-[90px]",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col p-6 space-y-6 overflow-y-auto">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "text-2xl font-playfair transition-colors font-medium border-b border-primary-light pb-4",
                location.pathname === link.path ? "text-secondary" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Button to="/contact" className="w-full bg-secondary text-primary font-bold">
              Book Consultation
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
