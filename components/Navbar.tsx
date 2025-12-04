import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/70 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg shadow-lg transition-all bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
            W
          </div>
          <span className="font-bold text-xl tracking-tight text-white">Webmastery</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium transition-colors text-slate-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-200 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            Let's Talk <ArrowRight size={16} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 transition-colors text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-t border-white/10 shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
           {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-slate-300 hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full py-3 rounded-xl bg-white text-slate-900 font-semibold text-center hover:bg-slate-200"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;