import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, SectionHeading, Badge } from '@/components/ui';
import { SAMPLE_MENU_ITEMS } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';
import { ArrowRight, Sparkles } from 'lucide-react';

export function FeaturedDishes() {
  // Take 6 featured dishes across various cuisines
  const featured = SAMPLE_MENU_ITEMS.filter((item) => item.isFeatured).slice(0, 6);

  return (
    <section className="py-24 bg-[#151515] relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A66A] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Chef&apos;s Recommendations
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F5F0]">
              Featured Dishes
            </h2>
            <p className="text-sm text-[#A8A8A8] mt-2 max-w-xl">
              A curated selection of our most loved multi-cuisine specialties.
              Sample pricing shown for development preview.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-transparent border border-[#C8A66A] text-[#C8A66A] hover:bg-[#C8A66A] hover:text-[#151515] transition-all"
            >
              View Full Menu ({SAMPLE_MENU_ITEMS.length}+ Dishes)
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((dish) => (
            <div
              key={dish.id}
              className="group flex flex-col rounded-xl bg-[#1C1C1C] border border-[#2A2A2A] hover:border-[#C8A66A]/50 transition-all duration-300 overflow-hidden shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#252525]">
                <Image
                  src={dish.image || '/images/food-1.svg'}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <Badge variant={dish.foodType === 'veg' ? 'veg' : 'nonveg'} />
                  {dish.tags?.[0] && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[#151515]/90 border border-[#C8A66A]/30 text-[#C8A66A]">
                      {dish.tags[0]}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#151515]/90 border border-[#C8A66A]/40 text-[#C8A66A] font-semibold text-sm">
                  {formatPrice(dish.price)}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#F7F5F0] group-hover:text-[#C8A66A] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-[#A8A8A8] mt-1.5 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#262626] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#888888] italic">*Sample price</span>
                  <Link
                    href={`/menu`}
                    className="text-[#C8A66A] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    Details & Order Enquiry →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
