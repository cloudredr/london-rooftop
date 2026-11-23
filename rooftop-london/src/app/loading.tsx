import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#151515] text-[#C8A66A]">
      <div className="relative flex items-center justify-center">
        {/* Pulsing rings */}
        <div className="w-16 h-16 rounded-full border-2 border-[#C8A66A]/20 animate-ping absolute" />
        <div className="w-12 h-12 rounded-full border-2 border-[#C8A66A] border-t-transparent animate-spin" />
      </div>
      <span className="font-heading tracking-[0.25em] text-xs uppercase mt-6 text-[#A8A8A8] font-medium">
        Rooftop London
      </span>
    </div>
  );
}
