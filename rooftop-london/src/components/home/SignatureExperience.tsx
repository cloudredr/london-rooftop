import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, SectionHeading } from '@/components/ui';
import { CloudSun, UtensilsCrossed, PartyPopper, ArrowRight } from 'lucide-react';

export function SignatureExperience() {
  const experiences = [
    {
      title: 'Rooftop Experience',
      tagline: 'Dine Under Open Stars',
      description:
        'Feel the refreshing breeze and panoramic twilight views of Trisulia. Ambient fairy lighting and open skies make every evening dinner extraordinary.',
      image: '/images/rooftop-view.svg',
      icon: CloudSun,
      link: '/reservation',
      linkText: 'Reserve Rooftop',
    },
    {
      title: 'Multi-Cuisine Delights',
      tagline: 'Flavors Across Continents',
      description:
        'A comprehensive culinary menu spanning smoky clay-oven Tandoori dishes, authentic Tangra-style Chinese wok-tossed wonders, and classic Continental grills.',
      image: '/images/food-2.svg',
      icon: UtensilsCrossed,
      link: '/menu',
      linkText: 'Explore Menu',
    },
    {
      title: 'Memorable Celebrations',
      tagline: 'Moments Worth Remembering',
      description:
        'The premier destination for birthday bashes, anniversary dinners, corporate reunions, and joyful group get-togethers with customized decor arrangements.',
      image: '/images/celebrations.svg',
      icon: PartyPopper,
      link: '/celebrations',
      linkText: 'Plan Event',
    },
  ];

  return (
    <section className="py-24 bg-[#1A1A1A] relative">
      <Container>
        <SectionHeading
          title="Signature Experiences"
          subtitle="Three distinct pillars that make your visit to Rooftop London an exceptional culinary journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.title}
                className="group relative flex flex-col rounded-2xl bg-[#151515] border border-[#2E2E2E] hover:border-[#C8A66A]/60 transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-1.5"
              >
                {/* Image top */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/30 to-transparent" />
                  
                  {/* Floating Icon badge */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-[#151515]/90 border border-[#C8A66A]/40 text-[#C8A66A] shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C8A66A]">
                      {exp.tagline}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-[#F7F5F0]">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-[#A8A8A8] leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#252525]">
                    <Link
                      href={exp.link}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8A66A] group-hover:text-[#d4b577] transition-colors"
                    >
                      {exp.linkText}
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
