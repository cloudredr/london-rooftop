import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { Utensils, Users, Building, Cake, ArrowRight, MapPin } from 'lucide-react';

export function Introduction() {
  return (
    <section id="introduction" className="py-24 lg:py-32 bg-[#121212] relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A66A] block">
                01 / THE STORY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F5F5] leading-tight">
                More Than Just a Dining Experience
              </h2>
              <p className="text-base text-[#A3A3A3] leading-relaxed">
                Designed as Trisulia’s premier social destination, Rooftop London Cafe & Restaurant blends the timeless charm of London’s boutique lounges with the warmth of Odisha’s hospitality. Whether it’s an intimate dinner under the stars or a lively family celebration, every detail is crafted for lasting memories.
              </p>
            </div>

            {/* Feature Highlights Grid from Stitch Design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-white/5 shadow-md hover:bg-[#262626] transition-colors">
                <Building className="w-6 h-6 text-[#C8A66A] mb-3" />
                <h3 className="text-base font-heading font-bold text-[#F5F5F5]">Rooftop & Lounge</h3>
                <p className="text-xs text-[#A3A3A3] mt-1 leading-relaxed">
                  Open-air terrace seating with curated music and warm ambient lighting.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-white/5 shadow-md hover:bg-[#262626] transition-colors">
                <Utensils className="w-6 h-6 text-[#C8A66A] mb-3" />
                <h3 className="text-base font-heading font-bold text-[#F5F5F5]">Multi-Cuisine</h3>
                <p className="text-xs text-[#A3A3A3] mt-1 leading-relaxed">
                  Masterfully prepared Indian Tandoor, Oriental Wok, and Continental plates.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-white/5 shadow-md hover:bg-[#262626] transition-colors">
                <Users className="w-6 h-6 text-[#C8A66A] mb-3" />
                <h3 className="text-base font-heading font-bold text-[#F5F5F5]">Family & Friends</h3>
                <p className="text-xs text-[#A3A3A3] mt-1 leading-relaxed">
                  Spacious booths and welcoming service tailored for every generation.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#1A1A1A] border border-white/5 shadow-md hover:bg-[#262626] transition-colors">
                <Cake className="w-6 h-6 text-[#C8A66A] mb-3" />
                <h3 className="text-base font-heading font-bold text-[#F5F5F5]">Celebrations</h3>
                <p className="text-xs text-[#A3A3A3] mt-1 leading-relaxed">
                  Bespoke setups for birthdays, anniversaries, and milestone gatherings.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#C8A66A] hover:text-[#d4b577] group transition-colors"
              >
                Discover Our Full Story
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[460px] lg:h-[540px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn8Ix8kuFWJV9zJ4EAtPkGkd3cjG4TzfTcRC58O7NXbo4MDhJ7L4j2r_FUawjwNFgnSPHHQmgQQvPJHFqtC9h6UJ1xcUrsMZTj_y6YlSz4YsPec2Uv2a6YGILSLrtwzXw8dn8Y7LKpX9pZ_Ei_AXMrBvvAk_BbFs25uzDUQ2EX9-Fkg4sCdG3xAJSaPXfu9tfoBgmKKuIIUDMoGQoAigQBGlnyvvT2mx6skHxVc1vzhQDcpMEPlRB7w1pEd77wNjH2teeID9xOQfPq"
                alt="Rooftop London Cafe & Restaurant luxury lounge interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />
            </div>

            {/* Floating Landmark Badge from Stitch Design */}
            <div className="-mt-16 ml-4 lg:-ml-8 relative z-10 bg-[#262626] p-6 rounded-xl shadow-2xl max-w-xs border border-[#C8A66A]/25 backdrop-blur-md">
              <div className="flex items-center gap-2.5 mb-2">
                <MapPin className="w-4 h-4 text-[#C8A66A]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C8A66A]">
                  Trisulia Landmark
                </span>
              </div>
              <p className="text-sm font-medium text-[#F5F5F5] leading-snug">
                Cuttack’s favourite rooftop destination near Andhra Bank, Trisulia Bazar.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
