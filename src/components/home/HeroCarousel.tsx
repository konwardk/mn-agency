'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Sprout, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: "PM Surya Ghar: Muft Bijli Yojana",
    subtitle: "Get Up To 300 Units Free Electricity",
    description: "Benefit from the government subsidy of up to ₹78,000 for rooftop solar. Transition to clean energy and eliminate your electricity bills.",
    image: "/images/solaronroof.jpg",
    cta: "Check Your Subsidy",
    href: "/services",
    icon: <Sun className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Solar Power for Every Property",
    subtitle: "Home, Office & Farm Solutions",
    description: "From residential rooftops to large-scale commercial and agricultural systems, we provide custom solar installations for all your needs.",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop",
    cta: "Explore Solar",
    href: "/services",
    icon: <Sun className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Cultivating Tomorrow's Harvest",
    subtitle: "Premium Agricultural Solutions",
    description: "High-yield fertilizers and advanced agricultural products tailored for modern farming needs, powered by sustainable energy.",
    image: "/images/fields.jpg",
    cta: "Explore Products",
    href: "/products",
    icon: <Sprout className="w-6 h-6" />
  }
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-zinc-950">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex touch-pan-y h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="min-w-0 flex-[0_0_100%] relative h-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent z-10 hidden md:block" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-80"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 h-full container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center">
                <div className="max-w-2xl mt-20">
                  <AnimatePresence mode="wait">
                    {index === selectedIndex && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        className="space-y-6"
                      >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                          <span className="text-primary">{slide.icon}</span>
                          {slide.subtitle}
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight text-balance">
                          {slide.title}
                        </h1>
                        
                        <p className="text-lg md:text-xl text-zinc-300 max-w-xl leading-relaxed">
                          {slide.description}
                        </p>
                        
                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                          <Link 
                            href={slide.href}
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                          >
                            {slide.cta}
                          </Link>
                          <Link 
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
                          >
                            Contact Us
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute z-30 bottom-8 left-0 right-0 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        
        {/* Dots */}
        <div className="flex gap-2.5">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 transition-all duration-300 rounded-full",
                index === selectedIndex 
                  ? "w-8 bg-primary" 
                  : "w-2 bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-3 hidden sm:flex">
          <button
            onClick={scrollPrev}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={scrollNext}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
