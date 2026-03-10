'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Leaf, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3'
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
                <Leaf className="h-5 w-5" />
              </div>
              <span className={cn(
                "font-heading font-bold text-xl tracking-tight flex items-center transition-colors duration-300",
                isScrolled ? "text-zinc-900 dark:text-zinc-100" : "text-white"
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
                    isActive ? 'text-primary' : (isScrolled ? 'text-zinc-900 dark:text-white' : 'text-white')
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
                  ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100" 
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
                  "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-300",
                  isScrolled ? "text-zinc-900 dark:text-zinc-100 bg-background/50 backdrop-blur-sm shadow-sm border border-border" : "text-white hover:bg-white/10"
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border md:hidden shadow-xl"
            >
                  <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">MNAGENCY</span>
                  <div className="flex items-center justify-center bg-primary text-primary-foreground p-1.5 rounded-lg">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <span className="font-heading font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-100">
                    MN<span className="text-primary">AGENCY</span>
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-zinc-900 dark:text-zinc-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-border">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7',
                          pathname === item.href
                            ? 'bg-primary/10 text-primary'
                            : 'text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800'
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
                      className="block w-full rounded-full bg-black px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get an Estimate
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
