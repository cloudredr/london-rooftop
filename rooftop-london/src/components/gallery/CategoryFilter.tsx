'use client';

import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-[#C8A66A] text-[#151515] shadow-lg shadow-[#C8A66A]/20 scale-105'
                : 'bg-[#202020] text-[#A8A8A8] hover:text-[#F7F5F0] hover:bg-[#2A2A2A] border border-[#333333]'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
