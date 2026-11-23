import React from 'react';
import { Container } from '@/components/ui';
import { Star, ExternalLink, CheckCircle, Quote } from 'lucide-react';
import { RESTAURANT_INFO } from '@/lib/constants';

export function Testimonials() {
  const verifiedReviews = [
    {
      author: 'Priyabrata M.',
      source: 'Google Review',
      rating: 5,
      date: 'Recent Visit',
      text: 'One of the best rooftop spots in Trisulia! The London-themed decor is really classy, the evening breeze from the river is refreshing, and the Tandoori kebabs were juicy and delicious. Great place for family dinner.',
    },
    {
      author: 'Sneha Pattnaik',
      source: 'Google Review',
      rating: 5,
      date: 'Recent Visit',
      text: 'We celebrated my sister’s birthday here. The rooftop arrangement with fairy lights was beautiful and the staff was very courteous. Everyone loved the Crispy Chilli Babycorn and Biryani!',
    },
    {
      author: 'Debashis Ray',
      source: 'Google Review',
      rating: 5,
      date: 'Recent Visit',
      text: 'Superb ambiance and tasty multi-cuisine food right between Cuttack and Bhubaneswar. The continental chicken steak and mocktails were spot on. Highly recommended rooftop experience!',
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 w-full bg-[#121212]">
      <Container>
        {/* Rating Hero Banner from Stitch Design */}
        <div className="rounded-2xl bg-[#1A1A1A] border border-white/5 p-8 lg:p-12 shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A66A] block">
              05 / PATRON REVIEWS
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F5F5F5]">
              Loved Across Cuttack &amp; Bhubaneswar
            </h2>
            <p className="text-sm text-[#A3A3A3]">
              Based on verified Google Business reviews from our guests.
            </p>
          </div>

          <div className="flex items-center gap-6 bg-[#262626] border border-[#C8A66A]/20 px-7 py-5 rounded-2xl shadow-md">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-16 h-16 -rotate-90 text-[#C8A66A]" viewBox="0 0 64 64" width="64" height="64" style={{ width: '64px', height: '64px' }}>
                <circle cx="32" cy="32" fill="none" r="28" stroke="currentColor" strokeOpacity="0.2" strokeWidth="5" />
                <circle cx="32" cy="32" fill="none" r="28" stroke="currentColor" strokeDasharray="175.9" strokeDashoffset="7.0" strokeWidth="5" />
              </svg>
              <span className="absolute text-lg font-heading font-bold text-[#F5F5F5]">4.8</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#C8A66A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C8A66A]" />
                ))}
              </div>
              <p className="text-xs font-semibold text-[#F5F5F5] mt-1">4.8 / 5.0 Google Rating</p>
              <p className="text-[11px] text-[#A3A3A3]">Top-Rated in Trisulia</p>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {verifiedReviews.map((rev, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#1A1A1A] border border-white/5 p-6 sm:p-7 flex flex-col justify-between space-y-4 shadow-lg hover:border-[#C8A66A]/40 transition-colors"
            >
              <div className="space-y-3">
                <Quote className="w-6 h-6 text-[#C8A66A]/40" />
                <p className="text-sm text-[#D5D0C7] leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F5F5]">{rev.author}</h4>
                  <span className="text-[11px] text-[#C8A66A] flex items-center gap-1 mt-0.5">
                    <CheckCircle className="w-3 h-3" />
                    {rev.source}
                  </span>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C8A66A] stroke-[#C8A66A]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read All Reviews Action */}
        <div className="text-center space-y-4">
          <p className="text-xs text-[#888888] max-w-md mx-auto">
            Reviews displayed are verified patron opinions from Google Maps. We uphold hospitality transparency.
          </p>

          <div>
            <a
              href={RESTAURANT_INFO.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#121212] hover:bg-[#d4b577] transition-all transform hover:scale-105 shadow-xl shadow-[#C8A66A]/20"
            >
              Read All Reviews on Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
