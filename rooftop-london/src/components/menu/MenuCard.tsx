'use client';

import React from 'react';
import Image from 'next/image';
import { MenuItem } from '@/types';
import { Badge } from '@/components/ui';
import { formatPrice } from '@/lib/utils';
import { Sparkles, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '@/lib/constants';

interface MenuCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

export function MenuCard({ item, onSelect }: MenuCardProps) {
  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello! I would like to enquire about ${item.name} (₹${item.price}) at Rooftop London Cafe & Restaurant.`
  )}`;

  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative flex flex-col rounded-2xl bg-[#1C1C1C] border border-[#2B2B2B] hover:border-[#C8A66A]/60 transition-all duration-300 overflow-hidden shadow-lg cursor-pointer hover:-translate-y-1.5"
    >
      {/* Image Area */}
      <div className="relative h-48 w-full bg-[#242424] overflow-hidden">
        <Image
          src={item.image || 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80'}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/15 to-transparent opacity-90" />

        {/* Veg/Non-Veg Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <Badge variant={item.foodType === 'veg' ? 'veg' : 'nonveg'} />
          {item.isFeatured && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515]">
              <Sparkles className="w-2.5 h-2.5" />
              Featured
            </span>
          )}
        </div>

        {/* Price tag */}
        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#151515]/95 border border-[#C8A66A]/40 text-[#C8A66A] font-bold text-sm shadow-md">
          {formatPrice(item.price)}
        </div>
      </div>

      {/* Info Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3 className="font-heading text-lg font-bold text-[#F7F5F0] group-hover:text-[#C8A66A] transition-colors leading-snug">
            {item.name}
          </h3>
          <p className="text-xs text-[#A8A8A8] mt-1.5 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="pt-3 border-t border-[#262626] flex items-center justify-between text-xs">
          <span className="text-[11px] text-[#888888] italic">*Sample price</span>
          <a
            href={whatsappUrl}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Order Enquiry
          </a>
        </div>
      </div>
    </div>
  );
}
