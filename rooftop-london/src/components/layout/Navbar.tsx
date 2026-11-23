'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';
import { NAV_LINKS, RESTAURANT_INFO } from '@/lib/constants';
import { MobileMenu } from './MobileMenu';
import { Button } from '@/components/ui';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#151515]/95 backdrop-blur-md border-b border-[#C8A66A]/20 py-3 shadow-xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Wordmark */}
            <Link href="/" className="group flex flex-col items-start">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#F7F5F0] group-hover:text-[#C8A66A] transition-colors">
                ROOFTOP LONDON
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#C8A66A] font-medium">
                CAFE & RESTAURANT
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm tracking-wider uppercase transition-colors duration-200 py-1 ${
                      isActive
                        ? 'text-[#C8A66A] font-semibold'
                        : 'text-[#F7F5F0]/80 hover:text-[#C8A66A]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A66A]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA & Mobile Hamburger */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Link
                href="/reservation"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577] transition-all transform hover:scale-[1.02] shadow-lg shadow-[#C8A66A]/20"
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                Book a Table
              </Link>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-[#F7F5F0] hover:text-[#C8A66A] hover:bg-[#252525] transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
        pathname={pathname}
      />
    </>
  );
}
