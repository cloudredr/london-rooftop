'use client';

import React from 'react';
import Image from 'next/image';
import { MenuItem } from '@/types';
import { Modal, Badge } from '@/components/ui';
import { formatPrice } from '@/lib/utils';
import { MessageCircle, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '@/lib/constants';

interface DishModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function DishModal({ item, isOpen, onClose }: DishModalProps) {
  if (!item) return null;

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello! I would like to enquire about ${item.name} (Sample Price: ₹${item.price}) at Rooftop London Cafe & Restaurant.`
  )}`;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <div className="space-y-4">
        {/* Large Image */}
        <div className="relative h-60 w-full rounded-xl overflow-hidden bg-[#252525]">
          <Image
            src={item.image || '/images/food-1.svg'}
            alt={item.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <Badge variant={item.foodType === 'veg' ? 'veg' : 'nonveg'} />
            {item.isFeatured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515]">
                <Sparkles className="w-3 h-3" />
                Featured Specialty
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading text-2xl font-bold text-[#F7F5F0]">
              {item.name}
            </h3>
            <span className="text-xs uppercase tracking-wider text-[#C8A66A]">
              Category: {item.category}
            </span>
          </div>

          <div className="text-right">
            <div className="text-xl font-bold text-[#C8A66A]">
              {formatPrice(item.price)}
            </div>
            <span className="text-[10px] text-[#888888] block">*Sample price</span>
          </div>
        </div>

        <p className="text-sm text-[#A8A8A8] leading-relaxed">
          {item.description}
        </p>

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {item.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded text-xs bg-[#242424] border border-[#333333] text-[#A8A8A8]"
              >
                #{t}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="pt-4 border-t border-[#262626] flex flex-col sm:flex-row items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Enquire via WhatsApp
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#252525] text-[#F7F5F0] hover:bg-[#333333] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
