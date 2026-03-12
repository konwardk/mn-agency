'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Leaf, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Solar Solutions', href: '/services' },
  { name: 'Agriculture', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 w-full z-[100] transition-all duration-300',
          isScrolled
            ? 'bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-md py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <nav className="flex items-center justify-between" aria-label="Global">
            {/* Logo */}
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                <span className="sr-only">MNAGENCY</span>
                <div className="flex items-center justify-center bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:bg-primary/90 transition-colors">
                  <Sun className="h-5 w-5" />
                </div>
                <span className={cn(
                  "font-heading font-bold text-xl tracking-tight flex items-center transition-colors duration-300",
                  isScrolled ? "text-zinc-900 dark:text-white" : "text-white"
                )}>
                  MN<span className="text-primary">AGENCY</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:gap-x-6 lg:gap-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'text-sm font-bold leading-6 transition-colors hover:text-primary relative py-1 drop-shadow-sm',
                      isActive ? 'text-primary' : (isScrolled ? 'text-zinc-900 dark:text-zinc-100' : 'text-white')
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full px-2"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Section: CTA & Mobile Menu */}
            <div className="flex items-center gap-4 flex-1 justify-end">
              <Link
                href="/contact"
                className={cn(
                  "hidden sm:flex rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-semibold shadow-sm transition-all hover:scale-105 active:scale-95 items-center gap-2",
                  isScrolled 
                    ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200" 
                    : "bg-white text-zinc-900 hover:bg-zinc-100 dark:bg-white dark:text-zinc-900"
                )}
              >
                Get an Estimate
                <Sun className="h-4 w-4 hidden md:block" />
              </Link>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <button
                  type="button"
                  className={cn(
                    "inline-flex items-center justify-center rounded-lg p-2 transition-all duration-300 z-[110]",
                    isScrolled 
                      ? "text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800" 
                      : "text-white bg-white/20 backdrop-blur-md hover:bg-white/30"
                  )}
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay - Outside header to ensure visibility */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[200] md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-white dark:bg-zinc-950 px-6 py-6 sm:max-w-sm border-l border-zinc-200 dark:border-zinc-800 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">MNAGENCY</span>
                  <div className="flex items-center justify-center bg-primary text-primary-foreground p-1.5 rounded-lg">
                    <Sun className="h-5 w-5" />
                  </div>
                  <span className="font-heading font-bold text-xl tracking-tight text-zinc-900 dark:text-white">
                    MN<span className="text-primary">AGENCY</span>
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-zinc-100 dark:divide-zinc-800">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors',
                          pathname === item.href
                            ? 'bg-primary/10 text-primary'
                            : 'text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/contact"
                      className="block w-full rounded-full bg-zinc-900 dark:bg-zinc-100 px-5 py-3 text-center text-sm font-semibold text-white dark:text-zinc-900 shadow-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get an Estimate
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
