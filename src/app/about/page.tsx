'use client';

import Image from 'next/image';
import { Award, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header Section */}
      <section className="bg-primary/5 pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-extrabold text-zinc-900 dark:text-white mb-6"
          >
            Rooted in <span className="text-primary">Agriculture</span>. <br className="hidden md:block"/> Powered by <span className="text-accent">Sunlight</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            MNAGENCY is a forward-thinking provider of premium agricultural supplies and subsidized green energy solutions, dedicated to the future of farming.
          </motion.p>
        </div>
      </section>

      {/* Our Story and Values */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900 dark:text-white">
                Our Story
              </h2>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                <p>
                  Founded with a vision to modernize farming practices, MNAGENCY started as a local supplier of high-grade fertilizers and seeds. Over the years, we recognized that sustainable agriculture requires more than just good soil—it requires clean, affordable energy.
                </p>
                <p>
                  Today, we bridge the gap between traditional farming and modern renewable energy. By partnering with government initiatives, we provide subsidized solar panel installations specifically tailored for agricultural land and facilities.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image fill src="https://images.unsplash.com/photo-1595954421443-bd2a34bc6db5?q=80&w=800&auto=format&fit=crop" alt="Farmers examining crops" className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image fill src="https://images.unsplash.com/photo-1495556650867-99590cea3657?q=80&w=800&auto=format&fit=crop" alt="Fertilizer being spread" className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image fill src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=800&auto=format&fit=crop" alt="Solar panels" className="object-cover" />
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-900 aspect-square rounded-2xl p-6 flex flex-col justify-center border border-zinc-200 dark:border-zinc-800">
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-zinc-900 dark:text-white font-semibold">Years of combined expertise in agriculture & energy.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900 dark:text-white mb-4">
                Our Core Values
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Target className="w-8 h-8 text-primary" />, title: "Quality First", desc: "We never compromise on the quality of our fertilizers, seeds, or solar equipment." },
                { icon: <Users className="w-8 h-8 text-primary" />, title: "Community Focused", desc: "We exist to support the local farming community, helping them thrive in a changing climate." },
                { icon: <Award className="w-8 h-8 text-primary" />, title: "Sustainable Future", desc: "Promoting practices and energy solutions that ensure the land remains viable for generations." }
              ].map((value, idx) => (
                <div key={idx} className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 text-center hover:border-primary/50 transition-colors">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 mb-6 shadow-sm">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
