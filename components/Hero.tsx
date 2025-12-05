import React from 'react';
import { ArrowRight, Play, Code2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-slate-950 flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Aurora Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Center Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        
        {/* Moving Orbs */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default"
        >
          <Sparkles size={14} className="text-indigo-400" />
          <span className="text-sm font-medium text-slate-300">Award Winning Digital Agency</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500 mb-6"
        >
          WEBMASTERY
          <span className="absolute -top-8 -right-8 w-24 h-24 hidden md:flex items-center justify-center">
             <Code2 className="text-indigo-500/50 w-full h-full rotate-12" />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We craft immersive digital experiences that blend aesthetic mastery with technical precision. Elevate your brand with the future of web design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 mb-20"
        >
          <a 
            href="#portfolio"
            className="px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 rounded-full bg-slate-900/50 text-white font-bold border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Play size={16} fill="currentColor" /> Showreel
          </a>
        </motion.div>

        {/* Floating Glass Card (Bottom) */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8"
        >
            <div className="flex flex-col items-center md:items-start gap-1">
                <span className="text-3xl font-bold text-white">120+</span>
                <span className="text-sm text-slate-400 uppercase tracking-wider">Projects Launched</span>
            </div>
            
            <div className="h-10 w-[1px] bg-white/10 hidden md:block"></div>
            
            <div className="flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholder Logos */}
                <div className="flex items-center gap-2 text-white font-bold text-lg"><div className="w-6 h-6 bg-white rounded-full"></div> Acme</div>
                <div className="flex items-center gap-2 text-white font-bold text-lg"><div className="w-6 h-6 bg-white rotate-45"></div> Stark</div>
                <div className="flex items-center gap-2 text-white font-bold text-lg"><div className="w-6 h-6 border-2 border-white rounded-full"></div> Global</div>
            </div>

            <div className="h-10 w-[1px] bg-white/10 hidden md:block"></div>

            <div className="flex items-center gap-3">
               <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 overflow-hidden bg-slate-800">
                       <img src={`https://picsum.photos/100/100?random=${i + 60}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
               </div>
               <div className="text-left">
                  <div className="flex text-yellow-400 text-xs">★★★★★</div>
                  <span className="text-xs text-slate-400">Trusted by Experts</span>
               </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;