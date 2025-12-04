import React from 'react';
import { TECH_STACK } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
             <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-800 shadow-2xl relative z-10 border border-white/10">
                 <img 
                    src="https://picsum.photos/600/800?random=20" 
                    alt="Webmastery Founder" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                 />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-indigo-500/30 rounded-full blur-3xl -z-10"></div>
             <div className="absolute top-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
               More than just developers. <br/>
               <span className="text-indigo-400">Strategic partners for growth.</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Welcome to Webmastery. We are a collective of digital craftsmen bridging the gap between creative design and robust engineering.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We specialize in building accessible, performance-driven web applications that scale. Whether you are an early-stage startup or an enterprise looking for a fresh perspective, we bring technical expertise and product thinking to every collaboration.
            </p>

            <div className="mb-10">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Tech Stack</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {TECH_STACK.map((tech) => (
                        <div key={tech.name} className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <tech.icon size={18} className="text-indigo-400" />
                            <span className="text-sm font-medium text-slate-200">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-3">
                {["100+ Projects Completed", "Top Rated Talent", "Certified Solution Architects"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-indigo-500" />
                        <span className="text-slate-300 font-medium">{item}</span>
                    </div>
                ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;