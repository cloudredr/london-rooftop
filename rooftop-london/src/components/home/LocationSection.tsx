import React from 'react';
import { Container, SectionHeading } from '@/components/ui';
import { RESTAURANT_INFO } from '@/lib/constants';
import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react';

export function LocationSection() {
  return (
    <section className="py-24 bg-[#181818] relative">
      <Container>
        <SectionHeading
          title="Visit Rooftop London"
          subtitle="Conveniently situated at Trisulia, Cuttack. An effortless escape for memorable rooftop dining."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Details Card */}
          <div className="rounded-2xl bg-[#141414] border border-[#2A2A2A] p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C8A66A] block mb-1">
                  Location & Address
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#F7F5F0]">
                  ROOFTOP LONDON
                </h3>
                <p className="text-xs text-[#C8A66A] uppercase tracking-wider mt-0.5">
                  Cafe & Restaurant • Trisulia, Cuttack
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#A8A8A8]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C8A66A] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#F7F5F0] font-medium">Trisulia, Cuttack</p>
                    <p className="text-xs text-[#888888] mt-0.5">{RESTAURANT_INFO.address}</p>
                    <p className="text-[11px] text-[#C8A66A]/80 mt-1">Near Andhra Bank, Trisulia Bazar</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C8A66A] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#F7F5F0] font-medium">Direct Telephone</p>
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                      className="text-xs text-[#C8A66A] hover:underline block mt-0.5"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C8A66A] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#F7F5F0] font-medium">Opening Hours</p>
                    <p className="text-xs text-[#888888] mt-0.5">{RESTAURANT_INFO.openingHoursDisplay}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3 pt-4 border-t border-[#252525]">
              <a
                href={RESTAURANT_INFO.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577] transition-all shadow-md shadow-[#C8A66A]/20"
              >
                <Navigation className="w-4 h-4" />
                Get Driving Directions
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello! I would like to enquire about visiting Rooftop London Cafe & Restaurant.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Inquiry
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-2xl relative min-h-[380px] bg-[#1a1a1a]">
            <iframe
              src={RESTAURANT_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rooftop London Cafe & Restaurant Location Map"
              className="w-full h-full filter invert-[0.9] hue-rotate-[180deg] contrast-[1.2]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
