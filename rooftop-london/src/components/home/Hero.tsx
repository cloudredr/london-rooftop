'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Utensils,
  CalendarCheck,
  Star,
  CloudSun,
  PartyPopper,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { RESTAURANT_INFO } from '@/lib/constants';

export function Hero() {
  const scrollToExplore = () => {
    const el = document.getElementById('introduction');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#121212] text-center pt-28 pb-16 sm:py-32">
      {/* Background Cinematic Photograph from Stitch Design */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKPzAkqPcVl62JorIDtbWKdZ5x3nTE0Rt15nFduERM1Z5ulQWmgsM0A2ohmcZ4oy-Uu23uWJ8zCefeG6MRPpieUZJWhIS8Y0l628fCiTLQUxUzHjF4C_0M3rkeTDSxFFUADX-qmtwGKGSfl1cp2bPASwlCW66phv3QJzrg-taloc-Vp0IHCteX7gfl_Qle3pNPQ959tcwUfAbdMawyswA5L1U8HgHcINjQx5ykqFYw3Aj8-LiTpoQbEgyfMsED2BszPiNhzjhSwKk7"
          alt="Rooftop London Cafe & Restaurant rooftop dining ambience"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.45] scale-105"
        />
        {/* Layered dark & gold radial vignettes matching Stitch Design System */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/75 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,166,106,0.14)_0%,transparent_70%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Location pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8A66A]/40 bg-[#1A1A1A]/90 backdrop-blur-md mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#C8A66A] animate-pulse" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C8A66A] font-semibold">
            PREMIER ROOFTOP DINING • TRISULIA, CUTTACK
          </span>
        </motion.div>

        {/* Brand Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F5F5F5] leading-none mb-2"
        >
          ROOFTOP LONDON
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-lg sm:text-2xl md:text-3xl tracking-[0.3em] sm:tracking-[0.4em] text-[#C8A66A] font-light mb-6 uppercase"
        >
          CAFE & RESTAURANT
        </motion.div>

        {/* Proposed Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-2xl md:text-3xl text-[#F4EFE5] font-heading italic mb-6 max-w-2xl font-light"
        >
          &ldquo;{RESTAURANT_INFO.tagline}&rdquo;
        </motion.p>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-[#A3A3A3] max-w-2xl leading-relaxed mb-10"
        >
          Elevated above Trisulia&apos;s bustling skyline, discover an open-sky sanctuary where London-inspired lounge aesthetics meet authentic Indian Tandoor, Asian Wok, and Continental gastronomy.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12"
        >
          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#121212] hover:bg-[#d4b577] transition-all transform hover:scale-105 shadow-xl shadow-[#C8A66A]/25"
          >
            <Utensils className="w-4 h-4" />
            Explore Our Menu
          </Link>

          <Link
            href="/reservation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider border border-[#C8A66A] text-[#F5F5F5] hover:bg-[#C8A66A]/15 hover:text-[#C8A66A] transition-all transform hover:scale-105 backdrop-blur-sm"
          >
            <CalendarCheck className="w-4 h-4 text-[#C8A66A]" />
            Reserve Your Table
          </Link>
        </motion.div>

        {/* Hospitality Trust Badges (from Stitch Design) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/10 w-full max-w-3xl"
        >
          <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-[#1A1A1A]/90 border border-white/5 backdrop-blur-md shadow-md text-xs text-[#F5F5F5]">
            <Star className="w-4 h-4 text-[#C8A66A] fill-[#C8A66A]" />
            <div className="text-left">
              <span className="block font-semibold">4.8 Rating</span>
              <span className="text-[10px] text-[#A3A3A3] block">Google Verified</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-[#1A1A1A]/90 border border-white/5 backdrop-blur-md shadow-md text-xs text-[#F5F5F5]">
            <CloudSun className="w-4 h-4 text-[#C8A66A]" />
            <div className="text-left">
              <span className="block font-semibold">Open Rooftop</span>
              <span className="text-[10px] text-[#A3A3A3] block">Breeze & Views</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-[#1A1A1A]/90 border border-white/5 backdrop-blur-md shadow-md text-xs text-[#F5F5F5]">
            <Utensils className="w-4 h-4 text-[#C8A66A]" />
            <div className="text-left">
              <span className="block font-semibold">Multi-Cuisine</span>
              <span className="text-[10px] text-[#A3A3A3] block">Tandoor & Wok</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-[#1A1A1A]/90 border border-white/5 backdrop-blur-md shadow-md text-xs text-[#F5F5F5]">
            <PartyPopper className="w-4 h-4 text-[#C8A66A]" />
            <div className="text-left">
              <span className="block font-semibold">Celebrations</span>
              <span className="text-[10px] text-[#A3A3A3] block">Birthday Ready</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToExplore}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hidden md:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex-col items-center gap-1 text-[#A3A3A3] hover:text-[#C8A66A] transition-colors cursor-pointer"
        aria-label="Scroll down to explore"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ChevronDown className="w-4 h-4 text-[#C8A66A]" />
        </motion.div>
      </motion.button>
    </section>
  );
}
