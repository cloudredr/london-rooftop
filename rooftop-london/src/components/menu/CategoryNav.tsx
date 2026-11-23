'use client';

import React from 'react';
import { MenuCategory } from '@/types';

interface CategoryNavProps {
  categories: MenuCategory[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export function CategoryNav({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryNavProps) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-3">
      <div className="flex items-center space-x-2 min-w-max px-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#C8A66A] text-[#151515] shadow-lg shadow-[#C8A66A]/20 scale-105'
                  : 'bg-[#202020] text-[#A8A8A8] hover:text-[#F7F5F0] hover:bg-[#2A2A2A] border border-[#333333]'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
