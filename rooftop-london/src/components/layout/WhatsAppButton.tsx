'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '@/lib/constants';

interface WhatsAppButtonProps {
  customMessage?: string;
}

export function WhatsAppButton({
  customMessage = 'Hello! I would like to enquire about Rooftop London Cafe & Restaurant.',
}: WhatsAppButtonProps) {
  const encodedMsg = encodeURIComponent(customMessage);
  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodedMsg}`;

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      {/* Tooltip */}
      <span className="hidden md:inline-block mr-3 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1F1E1B] text-[#F7F5F0] border border-[#C8A66A]/30 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat with us on WhatsApp
      </span>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Rooftop London on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 fill-white stroke-none relative z-10" />
      </a>
    </aside>
  );
}
