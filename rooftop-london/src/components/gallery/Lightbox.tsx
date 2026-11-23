'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '@/types';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null || !images[currentIndex]) return null;

  const currentImg = images[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
        {/* Top bar */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[#F7F5F0] z-10">
          <div className="text-sm font-semibold tracking-wider text-[#C8A66A]">
            {currentIndex + 1} / {images.length}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#1C1C1C] text-[#A8A8A8] hover:text-[#C8A66A] hover:bg-[#252525] transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Prev Button */}
        <button
          onClick={onPrev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1C1C1C]/80 border border-[#333333] text-[#F7F5F0] hover:text-[#C8A66A] hover:border-[#C8A66A] transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1C1C1C]/80 border border-[#333333] text-[#F7F5F0] hover:text-[#C8A66A] hover:border-[#C8A66A] transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Image & Caption */}
        <motion.div
          key={currentImg.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center"
        >
          <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden border border-[#C8A66A]/30">
            <Image
              src={currentImg.src}
              alt={currentImg.title}
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-4 text-center max-w-xl">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C8A66A] block">
              {currentImg.category}
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F7F5F0]">
              {currentImg.title}
            </h3>
            {currentImg.description && (
              <p className="text-xs text-[#A8A8A8] mt-1">{currentImg.description}</p>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
