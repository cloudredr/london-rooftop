'use client';

import React from 'react';
import Image from 'next/image';
import { GalleryImage } from '@/types';
import { ZoomIn } from 'lucide-react';

interface GalleryGridProps {
  images: GalleryImage[];
  onOpenLightbox: (index: number) => void;
}

export function GalleryGrid({ images, onOpenLightbox }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, idx) => (
        <div
          key={img.id}
          onClick={() => onOpenLightbox(idx)}
          className="group relative h-72 rounded-2xl overflow-hidden bg-[#1C1C1C] border border-[#2B2B2B] hover:border-[#C8A66A]/60 transition-all duration-300 shadow-xl cursor-pointer"
        >
          <Image
            src={img.src}
            alt={img.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

          <div className="absolute top-4 right-4 p-2 rounded-full bg-[#151515]/90 border border-[#C8A66A]/40 text-[#C8A66A] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
            <ZoomIn className="w-4 h-4" />
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C8A66A] block">
              {img.category}
            </span>
            <h4 className="font-heading text-lg font-bold text-[#F7F5F0]">
              {img.title}
            </h4>
            {img.description && (
              <p className="text-xs text-[#A8A8A8] mt-1 line-clamp-1">
                {img.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
