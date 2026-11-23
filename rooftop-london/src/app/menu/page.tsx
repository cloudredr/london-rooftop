'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui';
import { SAMPLE_MENU_CATEGORIES, SAMPLE_MENU_ITEMS, RESTAURANT_INFO } from '@/lib/constants';
import { MenuItem, FoodType } from '@/types';
import { CategoryNav } from '@/components/menu/CategoryNav';
import { MenuSearch } from '@/components/menu/MenuFilter';
import { MenuFilter } from '@/components/menu/MenuFilterControls';
import { MenuCard } from '@/components/menu/MenuCard';
import { DishModal } from '@/components/menu/DishModal';
import { Star, Flame, Clock, MessageCircle, Sparkles } from 'lucide-react';

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
    <div className="pt-24 pb-24 bg-[#121212] min-h-screen text-[#F5F5F5]">
      {/* Top Atmosphere & Status Bar from Stitch Design */}
      <section className="relative w-full bg-[#1A1A1A]/80 border-b border-white/5 py-4 overflow-hidden">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A3A3A3]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-[#F5F5F5]">Kitchen Open • Serving Fresh</span>
            </div>
            <div className="flex items-center gap-4">
              <span>🕒 11:00 AM – 11:00 PM</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>📍 Trisulia, Cuttack</span>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pt-10">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3A2E1B] text-[#F3DEC0] text-[11px] font-semibold tracking-[0.25em] uppercase mb-4 shadow">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A66A]" />
            Curated Gastronomy
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#F5F5F5] tracking-tight">
            Our Digital <span className="text-[#C8A66A] italic font-normal">Food Menu</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A3A3A3] mt-3 max-w-2xl mx-auto leading-relaxed">
            Authentic Indian curries, aromatic clay-oven tandoor, spicy wok Chinese, and continental comfort grills crafted fresh under the starlit sky of Trisulia, Cuttack.
          </p>
        </div>

        {/* Chef's Crown Spotlight Feature from Stitch Design */}
        <div className="mb-14 rounded-3xl overflow-hidden bg-gradient-to-r from-[#262626] via-[#1A1A1A] to-[#262626] p-6 sm:p-10 shadow-2xl border border-[#C8A66A]/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Spotlight Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-xl border border-white/5">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGayxnxlZAy4IGTqW0oJGclhOd20_gJJm02qdzX41Mfn3HgDB0agGl33OI8csAwM4PFHg7m8PeTPLQVh0cwou_p0iFlwdQdnJzCvN05WUzmjEr6eHpUbGGFESQg-Hs9lwG1OAs9sAgsjxMyD2TiiTQJUX86egjUs1hhKuxsP28GhWW9gM0iqkcU0qkb0cJK2QD4dmRzSnkoSJkBM6KFApSntHbVwfpJorYWGhMYJdU8uIKBI7DrngK3BIQhvkz2q1w4YSmxgzcEf-G"
                  alt="Dum Handi Mutton Biryani"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#121212]/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#F5F5F5]">Non-Veg Signature</span>
                </div>
                <div className="absolute top-3 right-3 bg-[#C8A66A] text-[#121212] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
                  Chef&apos;s Crown Jewel
                </div>
              </div>
            </div>

            {/* Spotlight Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C8A66A] font-semibold">
                  Signature Slow-Cooked Dum
                </span>
                <span className="w-8 h-[1px] bg-[#C8A66A]/40" />
                <div className="flex text-[#C8A66A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C8A66A]" />
                  ))}
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F5F5]">
                Dum Handi Mutton Biryani
              </h2>

              <p className="text-[#A3A3A3] text-sm leading-relaxed">
                Prime tender baby mutton cuts marinated overnight in royal Awadhi spice paste, layered with aged long-grain Dehradun Basmati, Kashmiri saffron dew, and sealed in an artisanal clay handi with whole wheat dough.
              </p>

              {/* Badges / Specs */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-[#121212]/80 rounded-xl p-3 border border-white/5">
                  <span className="text-[10px] uppercase text-[#A3A3A3] tracking-wider font-semibold block">Spice Level</span>
                  <div className="flex items-center gap-1 text-[#C8A66A] mt-1">
                    <Flame className="w-3.5 h-3.5 fill-[#C8A66A]" />
                    <span className="text-xs font-semibold text-[#F5F5F5]">Medium-High</span>
                  </div>
                </div>

                <div className="bg-[#121212]/80 rounded-xl p-3 border border-white/5">
                  <span className="text-[10px] uppercase text-[#A3A3A3] tracking-wider font-semibold block">Prep Time</span>
                  <div className="flex items-center gap-1 text-[#F5F5F5] mt-1 text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5 text-[#C8A66A]" />
                    <span>28-30 Mins</span>
                  </div>
                </div>

                <div className="bg-[#121212]/80 rounded-xl p-3 border border-white/5">
                  <span className="text-[10px] uppercase text-[#A3A3A3] tracking-wider font-semibold block">Key Spices</span>
                  <span className="text-xs font-medium text-[#F5F5F5] truncate block mt-1">Mace • Saffron</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs uppercase text-[#A3A3A3]">A La Carte</span>
                  <span className="text-3xl font-heading font-bold text-[#C8A66A]">₹440</span>
                  <span className="text-[11px] text-[#A3A3A3]/70">incl. all taxes</span>
                </div>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Hello Rooftop London, I would like to enquire about the Dum Handi Mutton Biryani (₹440)')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-emerald-500 transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Filters & Search Bar */}
        <div className="sticky top-20 z-30 bg-[#121212]/95 backdrop-blur-md py-4 border-y border-white/5 mb-8 space-y-4">
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
        <div className="flex items-center justify-between text-xs text-[#A3A3A3] mb-6 px-1">
          <span>
            Showing <strong className="text-[#F5F5F5]">{filteredItems.length}</strong> delicious dishes
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
          <div className="py-20 text-center rounded-2xl bg-[#1A1A1A] border border-white/5">
            <p className="text-lg text-[#F5F5F5] font-heading font-medium">No dishes found</p>
            <p className="text-sm text-[#A3A3A3] mt-1">
              Try adjusting your search terms or switching food categories.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setFoodTypeFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 rounded-full text-xs uppercase tracking-wider bg-[#C8A66A] text-[#121212] font-semibold"
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
