import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, SectionHeading } from '@/components/ui';
import { SAMPLE_GALLERY_IMAGES } from '@/lib/constants';
import { Eye, ArrowRight } from 'lucide-react';

export function GalleryPreview() {
  const images = SAMPLE_GALLERY_IMAGES.slice(0, 6);

  return (
    <section className="py-24 bg-[#1A1A1A] relative">
      <Container>
        <SectionHeading
          title="A Glimpse of Our World"
          subtitle="Explore the rooftop atmosphere, rich culinary creations, and vibrant celebration memories."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((item, idx) => (
            <Link
              key={item.id}
              href="/gallery"
              className={`group relative rounded-xl overflow-hidden border border-[#2E2E2E] hover:border-[#C8A66A]/60 transition-all duration-300 shadow-xl ${
                idx === 0 || idx === 3 ? 'sm:col-span-2 lg:col-span-1 h-64' : 'h-64'
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C8A66A] block">
                    {item.category}
                  </span>
                  <h4 className="font-heading text-lg font-bold text-[#F7F5F0]">
                    {item.title}
                  </h4>
                </div>
                <div className="p-2 rounded-full bg-[#151515]/90 border border-[#C8A66A]/40 text-[#C8A66A] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577] transition-all transform hover:scale-105 shadow-xl shadow-[#C8A66A]/20"
          >
            View Complete Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
