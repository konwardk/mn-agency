'use client';

import Image from 'next/image';
import { CheckCircle2, Factory, FileText, Leaf, Sun, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-zinc-950 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-18d162b85552?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold border border-accent/20 mb-6"
          >
            <Sun className="w-4 h-4" />
            MNAGENCY Solar Solutions
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6"
          >
            Solar Solutions for <span className="text-accent">Every Property</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            From high-yield farms to modern offices and cozy homes, we provide custom-engineered solar systems that slash costs and power the future.
          </motion.p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900 dark:text-white mb-4">Solutions for Every Need</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">We specialize in tailoring solar energy systems to the specific demands of your environment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Solar",
                desc: "Smart energy for modern homes. Reduce your monthly bills and increase your property value with sleek, high-efficiency rooftop panels.",
                image: "https://images.unsplash.com/photo-1513694490325-24b3dc82c0bd?q=80&w=800&auto=format&fit=crop",
                icon: <Sun className="w-6 h-6 text-amber-500" />
              },
              {
                title: "Commercial & Office",
                desc: "Scale your business with sustainable power. We design large-capacity systems for office buildings and warehouses to minimize overhead.",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
                icon: <Factory className="w-6 h-6 text-blue-500" />
              },
              {
                title: "Agricultural Solar",
                desc: "The backbone of modern farming. Power irrigation, climate control, and processing facilities with subsidized solar installations.",
                image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop",
                icon: <Leaf className="w-6 h-6 text-primary" />
              }
            ].map((solution, idx) => (
              <div key={idx} className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all">
                <div className="relative h-56">
                  <Image fill src={solution.image} alt={solution.title} className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-900/90 p-2 rounded-xl backdrop-blur-sm">
                    {solution.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{solution.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{solution.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Info & Subsidies */}
      <section className="py-24 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
              <Image 
                fill 
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop" 
                alt="Solar panels on agricultural land" 
                className="object-cover" 
              />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900 dark:text-white">
                Why Transition to Solar?
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Agriculture requires substantial energy for irrigation, climate control, and processing. Solar panels provide a reliable, long-term solution to volatile energy costs while significantly reducing your farm's carbon footprint.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Zap className="w-6 h-6 text-accent" />, title: "Drastically Reduce Energy Bills", desc: "Lock in your energy costs and protect your operations from grid price fluctuations." },
                  { icon: <Leaf className="w-6 h-6 text-primary" />, title: "Sustainable Farming", desc: "Lower your carbon emissions and meet modern sustainability standards for agricultural produce." },
                  { icon: <Factory className="w-6 h-6 text-blue-500" />, title: "Built for Agriculture", desc: "Our industrial-grade panels withstand dust, extreme weather, and continuous exposure." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded-xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subsidies Section */}
          <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl p-8 md:p-12 lg:p-16 border border-zinc-200 dark:border-zinc-800">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
                Navigating Government Subsidies
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                As a certified agricultural and energy vendor, MNAGENCY is authorized to facilitate government solar subsidy programs, covering up to 60% of total installation costs for eligible farms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[2px] bg-zinc-200 dark:bg-zinc-800 z-0" />
              
              {[
                { step: "1", title: "Site Assessment", desc: "Our engineers evaluate your farm's energy needs and optimal panel placement." },
                { step: "2", title: "Subsidy Approval", desc: "We handle all paperwork and applications for state and federal agricultural energy grants." },
                { step: "3", title: "Installation & Grid Link", desc: "Professional installation and immediate synchronization with the local power grid." }
              ].map((process, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-white dark:bg-zinc-950 border-4 border-zinc-100 dark:border-zinc-900 shadow-xl rounded-full flex items-center justify-center text-3xl font-heading font-bold text-primary mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{process.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 max-w-xs">{process.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-transform hover:-translate-y-1 shadow-lg">
                <FileText className="w-5 h-5 mr-2" />
                Start Your Subsidy Application
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
