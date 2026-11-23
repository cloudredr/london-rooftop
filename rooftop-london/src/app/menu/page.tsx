'use client';

import React, { useState, useMemo } from 'react';
import { Container, SectionHeading } from '@/components/ui';
import { SAMPLE_MENU_CATEGORIES, SAMPLE_MENU_ITEMS } from '@/lib/constants';
import { MenuItem, FoodType } from '@/types';
import { CategoryNav } from '@/components/menu/CategoryNav';
import { MenuSearch } from '@/components/menu/MenuFilter';
import { MenuFilter } from '@/components/menu/MenuFilterControls';
import { MenuCard } from '@/components/menu/MenuCard';
import { DishModal } from '@/components/menu/DishModal';
import { AlertCircle } from 'lucide-react';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [foodTypeFilter, setFoodTypeFilter] = useState<'all' | FoodType>('all');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return SAMPLE_MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Veg/Non-Veg filter
      if (foodTypeFilter !== 'all' && item.foodType !== foodTypeFilter) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesTags = item.tags?.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesTags) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, foodTypeFilter, searchQuery]);

  return (
    <div className="pt-28 pb-24 bg-[#151515] min-h-screen">
      <Container>
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-[#C8A66A] font-semibold mb-2">
            Multi-Cuisine Delicacies
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F7F5F0]">
            Our Digital Food Menu
          </h1>
          <p className="text-sm sm:text-base text-[#A8A8A8] mt-3">
            Explore authentic Indian curries, aromatic tandoor, spicy wok Chinese, and continental comfort grills crafted fresh in Trisulia, Cuttack.
          </p>

          {/* Pricing Verification Notice */}
          <div className="mt-4 p-3 rounded-xl bg-[#202020] border border-[#C8A66A]/30 text-xs text-[#C8A66A] inline-flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>
              Prices shown below are development sample items. Exact live prices & seasonal items are manageable via the owner admin dashboard.
            </span>
          </div>
        </div>

        {/* Sticky Filters & Search Bar */}
        <div className="sticky top-20 z-30 bg-[#151515]/95 backdrop-blur-md py-4 border-y border-[#262626] mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <MenuSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            <MenuFilter filterType={foodTypeFilter} onFilterChange={setFoodTypeFilter} />
          </div>

          <CategoryNav
            categories={SAMPLE_MENU_CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#888888] mb-6 px-1">
          <span>
            Showing <strong className="text-[#F7F5F0]">{filteredItems.length}</strong> delicious dishes
          </span>
          {(searchQuery || foodTypeFilter !== 'all' || activeCategory !== 'all') && (
            <button
              onClick={() => {
                setActiveCategory('all');
                setFoodTypeFilter('all');
                setSearchQuery('');
              }}
              className="text-[#C8A66A] hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((dish) => (
              <MenuCard key={dish.id} item={dish} onSelect={setSelectedDish} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-2xl bg-[#1C1C1C] border border-[#2B2B2B]">
            <p className="text-lg text-[#F7F5F0] font-heading font-medium">No dishes found</p>
            <p className="text-sm text-[#888888] mt-1">
              Try adjusting your search terms or switching food categories.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setFoodTypeFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 rounded-full text-xs uppercase tracking-wider bg-[#C8A66A] text-[#151515] font-semibold"
            >
              View Full Menu
            </button>
          </div>
        )}

        {/* Dish Detail Modal */}
        <DishModal
          item={selectedDish}
          isOpen={!!selectedDish}
          onClose={() => setSelectedDish(null)}
        />
      </Container>
    </div>
  );
}
