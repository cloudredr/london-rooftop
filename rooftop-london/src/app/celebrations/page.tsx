import React from 'react';
import Image from 'next/image';
import { Container, SectionHeading } from '@/components/ui';
import { EventEnquiryForm } from '@/components/forms/EventEnquiryForm';
import { RESTAURANT_INFO } from '@/lib/constants';
import {
  PartyPopper,
  Cake,
  Heart,
  Users,
  Briefcase,
  Sparkles,
  Phone,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';

export const metadata = {
  title: 'Celebrations & Private Events | ROOFTOP LONDON CAFE & RESTAURANT',
  description:
    'Host birthdays, anniversaries, corporate dinners, and special occasions under open rooftop skies at Rooftop London Cafe & Restaurant, Trisulia, Cuttack.',
};

export default function CelebrationsPage() {
  const occasions = [
    {
      title: 'Birthday Celebrations',
      desc: 'Customized balloon setups, celebratory entrance arches, personalized cake table arrangements, and curated party appetisers.',
      icon: Cake,
    },
    {
      title: 'Anniversaries & Dates',
      desc: 'Candlelight rooftop ambiance, private acoustic zones, soft romantic music, and bespoke multi-course dinners.',
      icon: Heart,
    },
    {
      title: 'Family Get-Togethers',
      desc: 'Spacious long banquet tables, multi-generation friendly menus, gentle indoor cooling, and attentive hospitality.',
      icon: Users,
    },
    {
      title: 'Corporate Dinners & Mixers',
      desc: 'Professional dinner packages, high-speed WiFi, projector capability on request, and streamlined group billings.',
      icon: Briefcase,
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#151515] min-h-screen text-[#A8A8A8]">
      <Container>
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C8A66A] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Special Occasions & Group Dining
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F7F5F0]">
            Celebrate with Us
          </h1>
          <p className="text-sm sm:text-base text-[#A8A8A8] mt-3">
            From intimate birthday surprises to joyous family reunions, our London-inspired rooftop and dedicated team turn your milestones into lifelong memories.
          </p>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {occasions.map((occ) => {
            const Icon = occ.icon;
            return (
              <div
                key={occ.title}
                className="p-6 rounded-2xl bg-[#1C1C1C] border border-[#2B2B2B] hover:border-[#C8A66A]/50 transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C8A66A]/10 border border-[#C8A66A]/30 flex items-center justify-center text-[#C8A66A]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#F7F5F0]">
                  {occ.title}
                </h3>
                <p className="text-xs text-[#A8A8A8] leading-relaxed">
                  {occ.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Photo Showcase of celebrations */}
        <div className="rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] p-8 sm:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A66A]">
                Event Hospitality
              </span>
              <h2 className="font-heading text-3xl font-bold text-[#F7F5F0]">
                Tailored Party Packages
              </h2>
              <p className="text-sm text-[#A8A8A8] leading-relaxed">
                Whether you need dedicated mocktail counters, customized cake cutting tables, themed balloon setups or multi-course buffet trays, our on-site team arranges every nuance seamlessly.
              </p>
              <ul className="space-y-2 text-xs text-[#D1CCC4] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C8A66A]" />
                  Customized starters and main-course buffet menus
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C8A66A]" />
                  Professional decoration coordinator assistance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C8A66A]" />
                  Dedicated service staff for your private section
                </li>
              </ul>
            </div>

            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-[#C8A66A]/30">
              <Image
                src="/images/celebrations.svg"
                alt="Celebrations at Rooftop London"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 2-Column Section: Form + Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <EventEnquiryForm />
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#1C1C1C] border border-[#2B2B2B] space-y-4">
              <h3 className="font-heading text-lg font-bold text-[#F7F5F0]">
                Event Planning Assistance
              </h3>
              <p className="text-xs text-[#A8A8A8] leading-relaxed">
                Prefer discussing your custom party arrangements over call or WhatsApp? Connect directly with our event manager:
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#151515] border border-[#2E2E2E] text-[#F7F5F0] hover:border-[#C8A66A] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C8A66A]" />
                  <span>Call: {RESTAURANT_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello! I would like to plan a celebration event at Rooftop London Cafe & Restaurant.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#151515] border border-[#2E2E2E] text-[#25D366] hover:border-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Event Support</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#1C1C1C] border border-[#2B2B2B] space-y-2 text-xs">
              <p className="text-[10px] uppercase tracking-widest text-[#C8A66A] font-semibold">
                Event Booking Note
              </p>
              <p className="text-[#A8A8A8]">
                Enquiries are reviewed within 24 hours. Dates are reserved with an official confirmation token provided by the restaurant.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
