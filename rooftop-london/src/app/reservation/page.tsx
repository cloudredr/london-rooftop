import React from 'react';
import { Container } from '@/components/ui';
import { ReservationForm } from '@/components/forms/ReservationForm';
import { RESTAURANT_INFO } from '@/lib/constants';
import { MapPin, Phone, MessageCircle, Clock, ShieldAlert, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Reserve a Table | ROOFTOP LONDON CAFE & RESTAURANT',
  description:
    'Enquire and reserve your rooftop or indoor dining table at Rooftop London Cafe & Restaurant in Trisulia, Cuttack.',
};

export default function ReservationPage() {
  return (
    <div className="pt-28 pb-24 bg-[#151515] min-h-screen text-[#A8A8A8]">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C8A66A] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Unforgettable Dining Experience
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F7F5F0]">
            Table Reservation
          </h1>
          <p className="text-sm sm:text-base text-[#A8A8A8] mt-3">
            Secure your preferred table at our London-inspired rooftop and lounge in Trisulia, Cuttack.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Main Form: 2 cols */}
          <div className="lg:col-span-2">
            <ReservationForm />
          </div>

          {/* Right Info Sidebar: 1 col */}
          <div className="space-y-6">
            {/* Reservation Guidelines */}
            <div className="p-6 rounded-2xl bg-[#1C1C1C] border border-[#2B2B2B] space-y-4">
              <h3 className="font-heading text-lg font-bold text-[#F7F5F0] flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#C8A66A]" />
                Reservation Policy
              </h3>
              <ul className="space-y-2.5 text-xs text-[#A8A8A8] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#C8A66A] font-bold">•</span>
                  <span>
                    Submitting this form records an official enquiry. All reservations are verified and confirmed by our host team via call or WhatsApp.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C8A66A] font-bold">•</span>
                  <span>
                    For groups exceeding 15 guests, please check our <a href="/celebrations" className="text-[#C8A66A] underline">Celebrations & Events</a> page.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C8A66A] font-bold">•</span>
                  <span>
                    Tables will be held for up to 15 minutes past the requested time slot during peak hours.
                  </span>
                </li>
              </ul>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-[#1C1C1C] border border-[#2B2B2B] space-y-4">
              <h3 className="font-heading text-lg font-bold text-[#F7F5F0]">
                Need Immediate Assistance?
              </h3>
              <p className="text-xs text-[#A8A8A8]">
                For instant table availability or special banquet inquiries, reach us directly:
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#151515] border border-[#2E2E2E] text-[#F7F5F0] hover:border-[#C8A66A] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C8A66A]" />
                  <span>Call Us: {RESTAURANT_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello! I would like to enquire about table availability for today.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#151515] border border-[#2E2E2E] text-[#25D366] hover:border-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Reservation Support</span>
                </a>
              </div>
            </div>

            {/* Location preview */}
            <div className="p-6 rounded-2xl bg-[#1C1C1C] border border-[#2B2B2B] space-y-2 text-xs">
              <p className="text-[10px] uppercase tracking-widest text-[#C8A66A] font-semibold">
                Venue Location
              </p>
              <p className="text-[#F7F5F0] font-medium">{RESTAURANT_INFO.name}</p>
              <p className="text-[#888888]">{RESTAURANT_INFO.address}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
