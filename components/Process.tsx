import React from 'react';
import { PROCESS } from '../constants';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How I Work</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A transparent, agile process designed to deliver high-quality results on time and within budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/5 -z-10"></div>

          {PROCESS.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-white/10 shadow-lg flex items-center justify-center text-3xl font-bold text-indigo-400 mb-6 mx-auto lg:mx-0 z-10 relative">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center lg:text-left">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-center lg:text-left text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;