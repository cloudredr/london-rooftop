'use client';

import React, { useState, useMemo } from 'react';
import { Container } from '@/components/ui';
import { SAMPLE_GALLERY_IMAGES } from '@/lib/constants';
import { CategoryFilter } from '@/components/gallery/CategoryFilter';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { Lightbox } from '@/components/gallery/Lightbox';
import { AlertCircle } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Rooftop', 'Interiors', 'Food', 'Celebrations'];

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return SAMPLE_GALLERY_IMAGES;
    return SAMPLE_GALLERY_IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#151515] min-h-screen">
      <Container>
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-[#C8A66A] font-semibold mb-2">
            Visual Ambiance & Moments
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F7F5F0]">
            Restaurant Gallery
          </h1>
          <p className="text-sm sm:text-base text-[#A8A8A8] mt-3">
            Immerse yourself in the London-inspired ambience, open rooftop breezes, and celebratory gatherings at Trisulia, Cuttack.
          </p>

          <div className="mt-4 p-3 rounded-xl bg-[#202020] border border-[#C8A66A]/30 text-xs text-[#C8A66A] inline-flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>
              High-resolution photographs can be added and categorized via the owner admin dashboard.
            </span>
          </div>
        </div>

        {/* Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Grid */}
        <GalleryGrid
          images={filteredImages}
          onOpenLightbox={(idx) => setLightboxIndex(idx)}
        />

        {/* Lightbox Modal */}
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </Container>
    </div>
  );
}
