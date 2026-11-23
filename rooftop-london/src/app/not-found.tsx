import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { Utensils, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#151515] text-[#F7F5F0] px-4 py-24">
      <Container>
        <div className="max-w-lg mx-auto text-center space-y-6">
          <div className="inline-block p-4 rounded-full bg-[#C8A66A]/10 text-[#C8A66A] mb-2">
            <Utensils className="w-12 h-12" />
          </div>

          <h1 className="font-heading text-7xl font-extrabold text-[#C8A66A]">
            404
          </h1>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold">
            Page Not Found
          </h2>

          <p className="text-sm text-[#A8A8A8] leading-relaxed">
            The page you are looking for might have been moved, removed, or is temporarily unavailable. Let us guide you back to our menu and rooftop tables.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C8A66A] text-[#151515] hover:bg-[#d4b577] transition-all"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>

            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#C8A66A] text-[#C8A66A] hover:bg-[#C8A66A]/10 transition-all"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
