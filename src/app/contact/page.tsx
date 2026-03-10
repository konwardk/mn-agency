'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header Section */}
      <section className="bg-zinc-950 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534073133331-c4fa8a00b5c1?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Whether you need bulk agricultural supplies or want to inquire about government solar subsidies, our team is ready to assist you.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white dark:bg-zinc-950 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                  Visit our office or reach out via phone or email. Our agricultural and energy specialists are available during normal business hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <div className="bg-white dark:bg-zinc-950 p-3 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800 shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Head Office & Store</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">Tetelitol, Bengenakhowa<br />Golaghat, 785621</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-zinc-900 dark:text-white mb-1">2nd Office</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">Near Golaghat District Court<br />Golaghat, 785621</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <div className="bg-white dark:bg-zinc-950 p-3 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800 shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Phone Let's Talk</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">+91 94350 54692 <br />+91 93655 28209<br />Mon-Fri, 8am to 6pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <div className="bg-white dark:bg-zinc-950 p-3 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800 shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Email Support</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">contact@mnagency.com<br />We'll respond within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
              <h2 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-semibold text-zinc-900 dark:text-white">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-zinc-900 dark:text-white" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-semibold text-zinc-900 dark:text-white">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-zinc-900 dark:text-white" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-zinc-900 dark:text-white">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-zinc-900 dark:text-white" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-zinc-900 dark:text-white">Inquiry Type</label>
                  <select id="subject" className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-zinc-900 dark:text-white appearance-none">
                    <option value="general">General Inquiry</option>
                    <option value="bulk-order">Bulk Agricultural Order</option>
                    <option value="solar-estimate">Solar Panel Subsidy Estimate</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-zinc-900 dark:text-white">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-zinc-900 dark:text-white resize-y" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-md focus:ring-4 focus:ring-primary/20">
                  Send Message
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
