import React from 'react';
import { PACKAGES } from '../constants';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-400">Choose the package that fits your project needs.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, index) => (
            <motion.div 
              key={pkg.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border flex flex-col backdrop-blur-md transition-all duration-300 ${
                pkg.recommended 
                  ? 'bg-indigo-900/20 border-indigo-500/50 shadow-2xl shadow-indigo-500/20 scale-105 z-10' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2 text-white">{pkg.name}</h3>
              <div className="mb-6">
                 <span className="text-4xl font-bold text-white">{pkg.price}</span>
                 <span className="text-slate-400"> / project</span>
              </div>
              
              <ul className="flex-grow space-y-4 mb-8">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check size={18} className="text-indigo-400 shrink-0 mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                  pkg.recommended 
                    ? 'bg-white text-slate-900 hover:bg-indigo-50' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;