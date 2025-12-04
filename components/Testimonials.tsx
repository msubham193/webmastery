import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6"
         >
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Client Testimonials</h2>
                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                        {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <span className="text-sm text-slate-400 font-medium">5.0 Average rating</span>
                </div>
             </div>
             <p className="text-slate-400 max-w-md md:text-right">
                 Don't just take my word for it. Here's what clients have to say about working with me.
             </p>
         </motion.div>

        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-white/5 p-8 md:p-12 rounded-3xl shadow-2xl shadow-black/20 border border-white/10 backdrop-blur-md relative overflow-hidden"
              >
                {/* Background Decor */}
                <Quote className="absolute top-8 right-8 text-white/5 w-32 h-32 rotate-12 pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                   <div className="shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/20">
                        <img 
                          src={TESTIMONIALS[currentIndex].avatar} 
                          alt={TESTIMONIALS[currentIndex].name} 
                          className="w-full h-full object-cover rounded-full border-4 border-slate-900" 
                        />
                      </div>
                   </div>

                   <div className="text-center md:text-left flex-grow">
                      <div className="mb-6">
                          <p className="text-xl md:text-2xl text-slate-200 italic font-light leading-relaxed">
                            "{TESTIMONIALS[currentIndex].content}"
                          </p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-white text-lg">{TESTIMONIALS[currentIndex].name}</h4>
                        <p className="text-indigo-400">{TESTIMONIALS[currentIndex].role}, {TESTIMONIALS[currentIndex].company}</p>
                      </div>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-3">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-indigo-500' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;