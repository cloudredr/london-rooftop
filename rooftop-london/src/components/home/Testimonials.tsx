import React from 'react';
import Link from 'next/link';
import { Container, SectionHeading } from '@/components/ui';
import { Star, ExternalLink, MapPin, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '@/lib/constants';

export function Testimonials() {
  return (
    <section className="py-24 bg-[#151515] relative overflow-hidden">
      <Container>
        <SectionHeading
          title="What Our Guests Say"
          subtitle="Honest feedback and ratings from patrons who visited our rooftop and restaurant."
        />

        {/* Verified Notice Box */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-[#1D1D1D] border border-[#C8A66A]/30 p-8 text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#C8A66A]/10 text-[#C8A66A] mb-2">
            <Star className="w-8 h-8 fill-[#C8A66A] stroke-[#C8A66A]" />
          </div>

          <div className="space-y-2">
            <h3 className="font-heading text-2xl font-bold text-[#F7F5F0]">
              Verified Google Business Listing
            </h3>
            <p className="text-sm text-[#A8A8A8] leading-relaxed max-w-xl mx-auto">
              We uphold strict accuracy and brand integrity. In accordance with hospitality guidelines, we do not fabricate customer reviews, ratings or awards.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#151515] border border-[#2B2B2B] text-xs text-[#C8A66A] flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>Read real-time genuine customer reviews directly on our Google Maps page.</span>
          </div>

          <div className="pt-2">
            <a
              href={RESTAURANT_INFO.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577] transition-all transform hover:scale-105 shadow-xl shadow-[#C8A66A]/20"
            >
              Read All Google Reviews
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
