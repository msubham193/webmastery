import React, { useState } from 'react';
import { Mail, Calendar, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', budget: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert('Thanks for reaching out! We will get back to you shortly.');
      setIsSubmitting(false);
      setFormState({ name: '', email: '', budget: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's build something amazing together.</h2>
            <p className="text-lg text-slate-400 mb-10">
              Have a project in mind? We'd love to hear about it. Send us a message or schedule a time to chat.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email Us</h4>
                  <a href="mailto:hello@webmastery.dev" className="text-slate-400 hover:text-indigo-400 transition-colors">hello@webmastery.dev</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Schedule a Call</h4>
                  <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">calendly.com/webmastery</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 border border-white/10">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Location</h4>
                  <p className="text-slate-400">San Francisco, CA (Remote Worldwide)</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <p className="text-slate-300 italic">
                "Webmastery is incredibly responsive and easy to work with. Highly recommended!"
              </p>
              <div className="mt-4 flex items-center gap-2">
                 <img src="https://picsum.photos/50/50?random=30" alt="Client" className="w-8 h-8 rounded-full" />
                 <span className="text-sm font-bold text-white">David K., CEO</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 rounded-3xl p-8 shadow-2xl shadow-black/20 border border-white/10 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all text-white placeholder:text-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all text-white placeholder:text-slate-600"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-semibold text-slate-300">Estimated Budget</label>
                <select 
                  id="budget" 
                  name="budget"
                  value={formState.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all text-white [&>option]:bg-slate-900"
                >
                  <option value="" disabled>Select a range</option>
                  <option value="15-35k">₹15k - ₹35k</option>
                  <option value="35-60k">₹35k - ₹60k</option>
                  <option value="60k+">₹60k+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-300">Project Details</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none text-white placeholder:text-slate-600"
                  placeholder="Tell us about your project, goals, and timeline..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-white text-slate-900 font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                {isSubmitting ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
              
              <p className="text-center text-xs text-slate-500">
                We usually reply within 24 hours.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;