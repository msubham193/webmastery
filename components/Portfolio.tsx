import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, X, Calendar, User, Layers, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

const CATEGORIES = ['All', 'Web', 'Mobile', 'Design', 'Branding'];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-400 max-w-xl">
              A selection of recent work delivering results for clients across industries.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  activeFilter === cat 
                    ? '' 
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-indigo-600 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.4)] border border-indigo-400/50"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 ${activeFilter === cat ? 'text-white' : ''}`}>
                  {cat}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">
                      View Case Study <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase">{project.client}</span>
                    <span className="px-2 py-1 bg-white/10 rounded-md text-xs font-medium text-slate-300">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs text-slate-500">#{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
            <a href="#" className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 hover:gap-3 transition-all">
                View All Projects <ArrowUpRight size={20} />
            </a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            ></div>

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-white/10 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-all border border-white/10 backdrop-blur-md"
              >
                <X size={20} />
              </button>

              {/* Scrollable Container */}
              <div className="overflow-y-auto custom-scrollbar">
                
                {/* Hero Image */}
                <div className="relative h-64 md:h-96 w-full">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                     <span className="inline-block px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-indigo-500/20">
                        {selectedProject.category}
                     </span>
                     <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  </div>
                </div>

                <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                   
                   {/* Main Content */}
                   <div className="lg:col-span-2 space-y-8">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">Project Overview</h3>
                        <p className="text-slate-300 leading-relaxed text-lg">
                          {selectedProject.description} This project represents a strategic initiative to overhaul the digital presence of {selectedProject.client}. 
                          We focused on creating a seamless, intuitive user experience while maintaining robust performance standards.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                           <h4 className="font-bold text-indigo-400 mb-2">The Challenge</h4>
                           <p className="text-slate-400 text-sm leading-relaxed">
                             Legacy systems were causing significant friction in the user journey, resulting in high bounce rates and low conversion metrics. 
                             The brand needed a modern, responsive interface that could scale with their growing user base.
                           </p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                           <h4 className="font-bold text-emerald-400 mb-2">The Solution</h4>
                           <p className="text-slate-400 text-sm leading-relaxed">
                             We implemented a component-driven architecture using modern frameworks. 
                             By prioritizing mobile-first design and optimizing asset delivery, we achieved a 40% reduction in load times.
                           </p>
                        </div>
                      </div>

                      <div>
                         <h3 className="text-xl font-bold text-white mb-4">Key Results</h3>
                         <ul className="space-y-3">
                           {[
                             "Increased user engagement by 45%",
                             "Reduced page load time by 1.2s",
                             "Improved accessibility score to 98/100",
                             "Seamless integration with existing CRM"
                           ].map((result, i) => (
                             <li key={i} className="flex items-start gap-3 text-slate-300">
                               <CheckCircle2 size={20} className="text-indigo-400 shrink-0 mt-0.5" />
                               {result}
                             </li>
                           ))}
                         </ul>
                      </div>
                   </div>

                   {/* Sidebar */}
                   <div className="space-y-8">
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                         <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">Project Details</h4>
                         
                         <div className="space-y-6">
                            <div className="flex items-start gap-3">
                               <User size={20} className="text-indigo-400 shrink-0" />
                               <div>
                                  <p className="text-xs text-slate-500 uppercase font-bold">Client</p>
                                  <p className="text-white font-medium">{selectedProject.client}</p>
                               </div>
                            </div>
                            <div className="flex items-start gap-3">
                               <Calendar size={20} className="text-indigo-400 shrink-0" />
                               <div>
                                  <p className="text-xs text-slate-500 uppercase font-bold">Timeline</p>
                                  <p className="text-white font-medium">8 Weeks</p>
                               </div>
                            </div>
                            <div className="flex items-start gap-3">
                               <Layers size={20} className="text-indigo-400 shrink-0" />
                               <div>
                                  <p className="text-xs text-slate-500 uppercase font-bold">Services</p>
                                  <p className="text-white font-medium">{selectedProject.category}, Strategy</p>
                               </div>
                            </div>
                         </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                           {selectedProject.tags.map(tag => (
                             <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                               {tag}
                             </span>
                           ))}
                        </div>
                      </div>

                      <a href="#contact" className="block w-full py-4 rounded-xl bg-indigo-600 text-white font-bold text-center hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20">
                         Start a project like this
                      </a>
                   </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;