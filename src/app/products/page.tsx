'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Filter, Search, Sprout, Wheat, Droplets, BugIcon as Bug } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'all', name: 'All Products', icon: <Sprout className="w-4 h-4" /> },
  { id: 'fertilizers', name: 'Fertilizers', icon: <Leaf className="w-4 h-4" /> },
  { id: 'seeds', name: 'Seeds & Grains', icon: <Wheat className="w-4 h-4" /> },
  { id: 'irrigation', name: 'Irrigation', icon: <Droplets className="w-4 h-4" /> },
  { id: 'protection', name: 'Crop Protection', icon: <Bug className="w-4 h-4" /> },
];

const products = [
  {
    id: 1,
    title: "Premium NPK Fertilizer Blend",
    category: "fertilizers",
    categoryName: "Fertilizers",
    description: "Balanced nitrogen, phosphorus, and potassium mix for optimal root growth and fruit development.",
    price: "Bulk Pricing Available",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "High-Yield Hybrid Corn Seeds",
    category: "seeds",
    categoryName: "Seeds & Grains",
    description: "Drought-resistant and high-yielding corn seeds suited for various climates.",
    price: "Seasonal Discount",
    image: "https://images.unsplash.com/photo-1551373884-8a0750074df7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Organic Crop Protector",
    category: "protection",
    categoryName: "Crop Protection",
    description: "Eco-certified pest control solution that is safe for pollinators and the soil.",
    price: "Eco-Certified",
    image: "https://images.unsplash.com/photo-1592982537447-6f296d66e5f3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Drip Irrigation Starter Kit",
    category: "irrigation",
    categoryName: "Irrigation",
    description: "Complete water-saving drip kit for orchards and row crops. Easy to install.",
    price: "Best Seller",
    image: "https://images.unsplash.com/photo-1563514227147-6d27139a3285?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Paddy Growth Booster",
    category: "fertilizers",
    categoryName: "Fertilizers",
    description: "Specialized formula for rice fields to increase grain weight and improve disease resistance.",
    price: "In Stock",
    image: "https://images.unsplash.com/photo-1536555132573-be9d7211fb50?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "High-Yield Rice Seeds (Long Grain)",
    category: "seeds",
    categoryName: "Seeds & Grains",
    description: "Certified long-grain rice seeds optimized for high-moisture tropical environments.",
    price: "New Arrival",
    image: "https://images.unsplash.com/photo-1599380629739-1ff4fbf5a2f5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Tea Plantation Nutrient Mix",
    category: "fertilizers",
    categoryName: "Fertilizers",
    description: "Acid-balanced nutrient mix designed specifically for the unique needs of tea shrubs.",
    price: "Premium Grade",
    image: "https://images.unsplash.com/photo-1594494024039-b02f482632b1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Industrial Tea Pruning Tools",
    category: "protection",
    categoryName: "Crop Protection",
    description: "High-precision ergonomic tools for maintaining tea gardens and ensuring healthy regrowth.",
    price: "Professional Tool",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Automatic Field Sprayer",
    category: "irrigation",
    categoryName: "Irrigation",
    description: "Solar-powered automatic spraying system for large scale tea and rice plantations.",
    price: "Call for Quote",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop"
  }
];

// Reusable Leaf icon to fix import issue while keeping custom ones separate
function Leaf(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 14 6c3 0 6 3 6 6a7 7 0 0 1-7 7z"/><path d="M11 20a7 7 0 0 1-7-7c0-3 3-6 6-6a7 7 0 0 1 3 13z"/><path d="M11 20v-6"/></svg>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header Section */}
      <section className="bg-zinc-950 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599380629739-1ff4fbf5a2f5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6"
          >
            Our Agricultural Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Explore our comprehensive catalog of industry-leading seeds, fertilizers, and crop protection solutions sourced to maximize your yield.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Controls: Search and Filters */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
            {/* Categories */}
            <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:px-0 md:mx-0 md:pb-0 w-full md:w-auto hide-scrollbar gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap border shrink-0",
                    activeCategory === category.id
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-primary/50 hover:text-primary dark:hover:text-primary"
                  )}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72 shrink-0">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-zinc-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all text-zinc-900 dark:text-white placeholder:text-zinc-500"
              />
            </div>
          </div>

          {/* Product Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  key={product.id}
                  className="group flex flex-col bg-white dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-primary/50 hover:shadow-xl transition-all"
                >
                  <div className="relative h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <Image 
                      fill 
                      src={product.image} 
                      alt={product.title} 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold rounded-full z-10 text-zinc-900 dark:text-zinc-100 shadow-sm border border-zinc-200 dark:border-zinc-800">
                      {product.categoryName}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4 flex-1 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800/50 mt-auto">
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {product.price}
                      </span>
                      <button className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white group-hover:bg-primary group-hover:text-white transition-colors cursor-pointer">
                        <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-900 mb-4">
                <Filter className="w-8 h-8 text-zinc-400" />
              </div>
              <h3 className="text-xl font-bold font-heading text-zinc-900 dark:text-white mb-2">No products found</h3>
              <p className="text-zinc-500">We couldn't find any products matching your current filters.</p>
              <button 
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="mt-6 text-primary font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592982537447-6f296d66e5f3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Need a custom bulk order?</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">Contact our agricultural specialists to discuss high-volume pricing, custom fertilizer blends, or specialized delivery logistics.</p>
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-primary font-bold hover:bg-zinc-100 transition-colors shadow-xl">
            Talk to a Specialist
          </a>
        </div>
      </section>
    </div>
  );
}
