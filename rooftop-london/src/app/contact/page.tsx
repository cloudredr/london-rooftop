import React from 'react';
import { Container } from '@/components/ui';
import { ContactForm } from '@/components/forms/ContactForm';
import { RESTAURANT_INFO } from '@/lib/constants';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  Sparkles,
} from 'lucide-react';

export const metadata = {
  title: 'Contact Us | ROOFTOP LONDON CAFE & RESTAURANT',
  description:
    'Contact Rooftop London Cafe & Restaurant in Trisulia, Cuttack. Phone, WhatsApp, Google Maps directions, and direct messaging.',
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 bg-[#151515] min-h-screen text-[#A8A8A8]">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C8A66A] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            We&apos;re Here For You
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F7F5F0]">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base text-[#A8A8A8] mt-3">
            Reach out for table reservations, private event planning, menu questions or feedback.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Info Cards */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="font-heading text-2xl font-bold text-[#F7F5F0]">
                Contact Information
              </h2>
              <p className="text-sm text-[#A8A8A8]">
                Connect with our team directly via phone, WhatsApp, or visit us in person at Trisulia.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] hover:border-[#C8A66A] transition-colors text-center text-xs group"
              >
                <Phone className="w-5 h-5 text-[#C8A66A] mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-[#F7F5F0]">Call Us</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello! I would like to enquire about Rooftop London Cafe & Restaurant.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] hover:border-[#25D366] transition-colors text-center text-xs group"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-[#F7F5F0]">WhatsApp</span>
              </a>

              <a
                href={RESTAURANT_INFO.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] hover:border-[#C8A66A] transition-colors text-center text-xs group"
              >
                <Navigation className="w-5 h-5 text-[#C8A66A] mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-[#F7F5F0]">Directions</span>
              </a>

              <a
                href={RESTAURANT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] hover:border-pink-500 transition-colors text-center text-xs group"
              >
                <InstagramIcon className="w-5 h-5 text-pink-400 mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-[#F7F5F0]">Instagram</span>
              </a>
            </div>

            {/* Detailed Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#1C1C1C] border border-[#2E2E2E] flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#C8A66A] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-[#F7F5F0]">Our Address</h4>
                  <p className="text-xs text-[#A8A8A8] mt-1 leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#1C1C1C] border border-[#2E2E2E] flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#C8A66A] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-[#F7F5F0]">Operating Hours</h4>
                  <p className="text-xs text-[#A8A8A8] mt-1">
                    {RESTAURANT_INFO.openingHoursDisplay}
                  </p>
                  <p className="text-[11px] text-[#777777] mt-1">
                    *Hours to be verified by restaurant management
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Full-width Map Embed */}
        <div className="rounded-3xl overflow-hidden border border-[#2D2D2D] shadow-2xl h-[420px] relative">
          <iframe
            src={RESTAURANT_INFO.googleMapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location of Rooftop London Cafe & Restaurant"
            className="w-full h-full filter invert-[0.9] hue-rotate-[180deg] contrast-[1.2]"
          />
        </div>
      </Container>
    </div>
  );
}
