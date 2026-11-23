'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown, Utensils, CalendarCheck, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '@/lib/constants';

export function Hero() {
  const scrollToExplore = () => {
    const el = document.getElementById('introduction');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#151515] text-center pt-24 pb-16">
      {/* Background Image with Dark & Gold Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.svg"
          alt="Rooftop London Cafe & Restaurant rooftop dining ambience"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-75"
        />
        {/* Cinematic dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/60 to-black/75" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#151515]/40 to-[#151515]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Subtle pill tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8A66A]/40 bg-[#151515]/80 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#C8A66A] font-medium">
            Premier Rooftop Dining • Trisulia, Cuttack
          </span>
        </motion.div>

        {/* Main Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F7F5F0] leading-none mb-3"
        >
          ROOFTOP LONDON
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-xl sm:text-3xl md:text-4xl tracking-[0.25em] sm:tracking-[0.35em] text-[#C8A66A] font-light mb-6 uppercase"
        >
          CAFE & RESTAURANT
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-xl md:text-2xl text-[#F4EFE5] font-serif italic mb-6 max-w-2xl"
        >
          &ldquo;{RESTAURANT_INFO.tagline}&rdquo;
        </motion.p>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-sm sm:text-base text-[#A8A8A8] max-w-2xl leading-relaxed mb-10"
        >
          Discover an unforgettable dining experience with authentic multi-cuisine delicacies,
          breathtaking open rooftop ambience, and moments crafted for friends, families and celebrations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577] transition-all transform hover:scale-105 shadow-xl shadow-[#C8A66A]/20"
          >
            <Utensils className="w-4 h-4" />
            Explore Our Menu
          </Link>

          <Link
            href="/reservation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider border border-[#C8A66A] text-[#F7F5F0] hover:bg-[#C8A66A]/10 hover:text-[#C8A66A] transition-all transform hover:scale-105"
          >
            <CalendarCheck className="w-4 h-4 text-[#C8A66A]" />
            Reserve Your Table
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToExplore}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#A8A8A8] hover:text-[#C8A66A] transition-colors cursor-pointer"
        aria-label="Scroll down to explore"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ChevronDown className="w-4 h-4 text-[#C8A66A]" />
        </motion.div>
      </motion.button>
    </section>
  );
}
