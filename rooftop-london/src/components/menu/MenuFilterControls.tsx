'use client';

import React from 'react';
import { FoodType } from '@/types';

interface MenuFilterProps {
  filterType: 'all' | FoodType;
  onFilterChange: (type: 'all' | FoodType) => void;
}

export function MenuFilter({ filterType, onFilterChange }: MenuFilterProps) {
  return (
    <div className="inline-flex rounded-full bg-[#202020] p-1 border border-[#333333]">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
          filterType === 'all'
            ? 'bg-[#151515] text-[#C8A66A] shadow'
            : 'text-[#A8A8A8] hover:text-[#F7F5F0]'
        }`}
      >
        All Items
      </button>

      <button
        onClick={() => onFilterChange('veg')}
        className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
          filterType === 'veg'
            ? 'bg-[#151515] text-emerald-400 shadow'
            : 'text-[#A8A8A8] hover:text-[#F7F5F0]'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        Veg Only
      </button>

      <button
        onClick={() => onFilterChange('non-veg')}
        className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
          filterType === 'non-veg'
            ? 'bg-[#151515] text-rose-400 shadow'
            : 'text-[#A8A8A8] hover:text-[#F7F5F0]'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-rose-500" />
        Non-Veg
      </button>
    </div>
  );
}
