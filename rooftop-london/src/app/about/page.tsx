import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, SectionHeading } from '@/components/ui';
import { RESTAURANT_INFO } from '@/lib/constants';
import {
  HeartHandshake,
  UtensilsCrossed,
  Sparkles,
  Building,
  CheckCircle,
  ArrowRight,
  MapPin,
  CalendarCheck,
} from 'lucide-react';

export const metadata = {
  title: 'About Us | ROOFTOP LONDON CAFE & RESTAURANT',
  description:
    'Discover the story, dining philosophy and London-inspired rooftop experience of Rooftop London Cafe & Restaurant at Trisulia, Cuttack.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Our Dining Philosophy',
      desc: 'We believe hospitality is about creating unhurried memories. Every dish is cooked fresh with authentic spices and served with genuine warmth.',
      icon: HeartHandshake,
    },
    {
      title: 'The London Ambience',
      desc: 'Inspired by the regal charm of London rooftop lounges, our decor pairs rich charcoal and champagne gold with warm ambient glow.',
      icon: Sparkles,
    },
    {
      title: 'Multi-Cuisine Mastery',
      desc: 'From clay tandoor delicacies to spicy Indo-Chinese woks and European continental grills, we honor recipes that please every generation.',
      icon: UtensilsCrossed,
    },
    {
      title: 'Trisulia Destination',
      desc: 'Ideally positioned away from traffic congestion, offering open skyline vistas, refreshing breezes and ample convenient parking.',
      icon: Building,
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#151515] text-[#A8A8A8] min-h-screen">
      <Container>
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-[#C8A66A] font-semibold mb-2">
            The Story Behind the Ambience
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F7F5F0]">
            About Rooftop London
          </h1>
          <p className="text-base sm:text-lg text-[#C8A66A] font-serif italic mt-3">
            &ldquo;{RESTAURANT_INFO.tagline}&rdquo;
          </p>
        </div>

        {/* Story Section: Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F7F5F0]">
              Our Story & Destination
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Founded with the vision to bring world-class rooftop lounge culture to Cuttack, <strong className="text-[#F7F5F0]">ROOFTOP LONDON CAFE & RESTAURANT</strong> stands as a landmark dining retreat in Trisulia.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              The idea was simple yet ambitious: craft a destination where friends can laugh over sizzling tandoor platters and craft mocktails, families can bond over authentic dum biryanis, and couples can celebrate milestones under open starry skies.
            </p>
            <div className="p-5 rounded-2xl bg-[#1C1C1C] border border-[#C8A66A]/30 text-xs sm:text-sm text-[#F7F5F0] italic leading-relaxed">
              &ldquo;From our aromatic clay-oven tandoor to hand-tossed oriental woks, every plate and seat is curated to make your culinary moments unforgettable.&rdquo;
            </div>
          </div>

          <div className="relative h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border border-[#C8A66A]/30 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="About Rooftop London Cafe & Restaurant"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#151515]/90 backdrop-blur-md border border-[#C8A66A]/25">
              <span className="text-[10px] uppercase tracking-widest text-[#C8A66A] font-semibold block mb-0.5">
                Hospitality Excellence
              </span>
              <p className="text-sm text-[#F7F5F0] font-heading font-medium">
                Designed for families, friends & special celebrations
              </p>
            </div>
          </div>
        </div>

        {/* Pillars / Values Grid */}
        <div className="mb-24">
          <SectionHeading
            title="What Sets Us Apart"
            subtitle="The distinct touchpoints that define our hospitality standard."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl bg-[#1C1C1C] border border-[#2B2B2B] hover:border-[#C8A66A]/50 transition-all duration-300 space-y-3 shadow-lg hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C8A66A]/10 border border-[#C8A66A]/30 flex items-center justify-center text-[#C8A66A]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#F7F5F0]">
                    {v.title}
                  </h3>
                  <p className="text-xs text-[#A8A8A8] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* The Space Section */}
        <div className="rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] p-8 sm:p-12 mb-20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A66A]">
                The Architectural Space
              </span>
              <h2 className="font-heading text-3xl font-bold text-[#F7F5F0]">
                Dual Dining Ambience
              </h2>
              <p className="text-sm leading-relaxed text-[#A8A8A8]">
                Enjoy your choice of seating: our open-air rooftop canopy with gentle breezes and panoramic dusk views, or our cozy indoor London lounge equipped with air-conditioned comfort and British-inspired decorative nuances.
              </p>
              <ul className="space-y-2 text-xs text-[#D1CCC4] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C8A66A]" />
                  Open-air rooftop seating under twinkling fairy canopies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C8A66A]" />
                  Indoor London lounge with cozy booths and air-conditioning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C8A66A]" />
                  Dedicated celebration zones for birthdays and private parties
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reservation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577] transition-all shadow-lg shadow-[#C8A66A]/20"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Your Experience
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#C8A66A] text-[#F7F5F0] hover:bg-[#C8A66A]/10 transition-all"
              >
                Explore The Menu
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
