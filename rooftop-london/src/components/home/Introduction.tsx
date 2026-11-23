import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, SectionHeading } from '@/components/ui';
import { Utensils, Users, Building, ShieldCheck, ArrowRight } from 'lucide-react';

export function Introduction() {
  return (
    <section id="introduction" className="py-24 bg-[#151515] relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A66A] font-semibold">
              <span className="w-8 h-[1px] bg-[#C8A66A]" />
              Welcome to Trisulia&apos;s Crown
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F5F0] leading-tight">
              More Than Just a Dining Experience
            </h2>

            <p className="text-base sm:text-lg text-[#A8A8A8] leading-relaxed">
              Nestled at Trisulia, Cuttack, <strong className="text-[#F7F5F0] font-medium">ROOFTOP LONDON CAFE & RESTAURANT</strong> brings together the timeless charm of London aesthetics and the vibrant warmth of multi-cuisine gastronomy.
            </p>

            <p className="text-sm sm:text-base text-[#A8A8A8] leading-relaxed">
              Whether you are craving smoky tandoori platters, fiery Indo-Chinese stir fries, or creamy continental comfort foods, our kitchen crafts each plate with fresh ingredients and culinary finesse. Enjoy cool evening river breezes from our open-air rooftop or relax inside our plush London-inspired lounge.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#252525]">
              <div className="flex items-start gap-3">
                <Building className="w-5 h-5 text-[#C8A66A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#F7F5F0]">Rooftop & Lounge</h4>
                  <p className="text-xs text-[#888888]">Open-air views & indoor style</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Utensils className="w-5 h-5 text-[#C8A66A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#F7F5F0]">Multi-Cuisine</h4>
                  <p className="text-xs text-[#888888]">Indian, Chinese & Continental</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#C8A66A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#F7F5F0]">Family & Friends</h4>
                  <p className="text-xs text-[#888888]">Warm, welcoming ambience</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C8A66A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#F7F5F0]">Celebration Ready</h4>
                  <p className="text-xs text-[#888888]">Birthdays & custom events</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[#C8A66A] hover:text-[#d4b577] group transition-colors"
              >
                Discover Our Full Story
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-2xl overflow-hidden border border-[#C8A66A]/30 shadow-2xl">
              <Image
                src="/images/restaurant-interior.svg"
                alt="Rooftop London Cafe & Restaurant interior and dining setup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#151515]/90 backdrop-blur-md border border-[#C8A66A]/20">
                <p className="text-xs uppercase tracking-widest text-[#C8A66A] font-semibold">
                  Trisulia Landmark
                </p>
                <p className="text-sm text-[#F7F5F0] font-heading font-medium">
                  London elegance meets Odisha hospitality
                </p>
              </div>
            </div>

            {/* Decorative Gold Frame Offset */}
            <div className="absolute -inset-2 rounded-2xl border border-[#C8A66A]/15 -z-10 hidden sm:block transform translate-x-3 translate-y-3" />
          </div>
        </div>
      </Container>
    </section>
  );
}
