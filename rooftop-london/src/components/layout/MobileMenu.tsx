'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, UtensilsCrossed, MapPin } from 'lucide-react';
import { NavLink } from '@/types';
import { RESTAURANT_INFO } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  pathname: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  pathname,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#151515]/98 backdrop-blur-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#2A2A2A]">
            <Link href="/" onClick={onClose} className="flex flex-col">
              <span className="font-heading text-lg font-bold tracking-[0.18em] text-[#F7F5F0]">
                ROOFTOP LONDON
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A66A]">
                CAFE & RESTAURANT
              </span>
            </Link>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#A8A8A8] hover:text-[#C8A66A] hover:bg-[#252525] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <nav className="flex flex-col space-y-5">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`block text-2xl font-heading font-medium tracking-wide transition-colors ${
                        isActive ? 'text-[#C8A66A] pl-3 border-l-2 border-[#C8A66A]' : 'text-[#F7F5F0] hover:text-[#C8A66A]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Quick Actions & Details */}
            <div className="pt-8 border-t border-[#2A2A2A] space-y-4">
              <Link
                href="/reservation"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold uppercase tracking-wider text-sm bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577] transition-all shadow-lg shadow-[#C8A66A]/20"
              >
                <UtensilsCrossed className="w-4 h-4" />
                Reserve a Table
              </Link>

              <div className="text-xs text-[#A8A8A8] space-y-2 pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C8A66A]" />
                  <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="hover:text-[#F7F5F0]">
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A66A]" />
                  <span>Trisulia, Cuttack, Odisha</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
