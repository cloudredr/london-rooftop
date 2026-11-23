'use client';

import React from 'react';
import { Search, X } from 'lucide-react';

interface MenuSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function MenuSearch({ searchQuery, onSearchChange }: MenuSearchProps) {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C8A66A]" />
      <input
        type="text"
        placeholder="Search dishes (e.g. Biryani, Paneer, Chicken, Pasta)..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-10 pr-10 py-2.5 rounded-full bg-[#202020] border border-[#333333] text-sm text-[#F7F5F0] placeholder-[#777777] focus:outline-none focus:border-[#C8A66A] transition-colors"
      />
      {searchQuery && (
        <button
          onClick={() => onSearchChange('')}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#777777] hover:text-[#F7F5F0]"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
