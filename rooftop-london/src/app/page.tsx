import React from 'react';
import { Hero } from '@/components/home/Hero';
import { Introduction } from '@/components/home/Introduction';
import { SignatureExperience } from '@/components/home/SignatureExperience';
import { FeaturedDishes } from '@/components/home/FeaturedDishes';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { LocationSection } from '@/components/home/LocationSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <SignatureExperience />
      <FeaturedDishes />
      <GalleryPreview />
      <Testimonials />
      <LocationSection />
    </>
  );
}
