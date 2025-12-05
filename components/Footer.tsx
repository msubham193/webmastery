import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/msubham193' },
  { icon: Linkedin, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 text-white py-16 border-t border-white/10 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          <div className="text-center md:text-left">
            <a href="#" className="flex items-center justify-center md:justify-start gap-2 mb-4">
               <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                W
              </div>
              <span className="font-bold text-xl">Webmastery</span>
            </a>
            <p className="text-slate-400 max-w-xs">
              Building award-winning digital products, brands, and experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
             {NAV_LINKS.map(link => (
                 <a key={link.name} href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                     {link.name}
                 </a>
             ))}
          </div>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  target={item.href.startsWith('http') ? "_blank" : "_self"}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : ""}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all hover:border-indigo-500"
                >
                    <item.icon size={18} />
                </a>
            ))}
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Webmastery. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-1">
                Made with <span className="text-red-500">❤️</span> using React & Tailwind
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;