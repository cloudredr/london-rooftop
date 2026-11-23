import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Compass,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { RESTAURANT_INFO, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#111111] border-t border-[#C8A66A]/20 text-[#A8A8A8] pt-16 pb-8 overflow-hidden">
      {/* Decorative top gold line gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A66A] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-[0.18em] text-[#F7F5F0] block">
                ROOFTOP LONDON
              </span>
              <span className="text-xs tracking-[0.3em] uppercase text-[#C8A66A] font-semibold block">
                CAFE & RESTAURANT
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#A8A8A8]">
              Trisulia&apos;s premier London-inspired rooftop and lounge dining experience.
              Serving exquisite Indian, Chinese and Continental cuisine in an unforgettable open-sky ambience.
            </p>
            <div className="pt-2">
              <p className="text-xs italic text-[#C8A66A]">
                &ldquo;A Little Taste of London. A Lot of Unforgettable Moments.&rdquo;
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-[#F7F5F0] mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#C8A66A]" />
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#C8A66A] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#C8A66A]" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/reservation"
                  className="text-[#C8A66A] hover:underline flex items-center gap-1.5 font-medium"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C8A66A]" />
                  Reserve a Table
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="text-[#666666] hover:text-[#C8A66A] transition-colors flex items-center gap-1.5 text-xs pt-2"
                >
                  <ShieldCheck className="w-3 h-3" />
                  Owner & Staff Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-[#F7F5F0] mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C8A66A]" />
              Visit & Contact
            </h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A66A] shrink-0 mt-1" />
                <span>{RESTAURANT_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A66A] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="hover:text-[#F7F5F0] transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#C8A66A] shrink-0" />
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello! I would like to enquire about Rooftop London Cafe & Restaurant.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7F5F0] transition-colors"
                >
                  WhatsApp: +91 99384 85755
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-[#C8A66A] shrink-0" />
                <a
                  href={RESTAURANT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7F5F0] transition-colors"
                >
                  {RESTAURANT_INFO.instagramHandle}
                </a>
              </p>
            </div>
          </div>

          {/* Hours & Map link */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-[#F7F5F0] mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C8A66A]" />
              Hours & Directions
            </h4>
            <div className="space-y-2 text-sm">
              <div className="p-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A]">
                <p className="text-xs uppercase text-[#C8A66A] font-semibold mb-1">
                  Operating Hours
                </p>
                <p className="text-[#F7F5F0]">{RESTAURANT_INFO.openingHoursDisplay}</p>
                <p className="text-[11px] text-[#888888] mt-1">
                  *Hours subject to owner verification
                </p>
              </div>

              <a
                href={RESTAURANT_INFO.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8A66A] hover:text-[#d4b577] mt-3"
              >
                Get Directions on Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between text-xs text-[#777777] gap-4">
          <p>
            © {currentYear} {RESTAURANT_INFO.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Designed with London Hospitality Luxury in Trisulia, Cuttack.
          </p>
        </div>
      </div>
    </footer>
  );
}
