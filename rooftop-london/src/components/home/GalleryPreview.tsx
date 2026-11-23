import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

export function GalleryPreview() {
  const photos = [
    {
      category: 'Rooftop',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKprLMRnlAzM5JeeX5gXxMC1c-jovwTbcL1IZbJn3HbnIOUT7hVX05TdeEc3XYVa7IbKZEscou1M2qDbRAawx5zQGwFs7Oh9YaJn1JW4__2i7H1yzWguZWihn0bFuZ_x7RjXq70vmediT0vovhGYoyQnnvy5yjJC7GEVA2RoSqM8Nbwus59BEUzMyP8SAlmTuhfczAVXtLdg3jk0NtxEUL1UHBclFpIaQpZix-sw9U9ao9_PoxT-uUfKt_NGq8TXLP_8QMPc1PY_0D',
      height: 'h-80',
    },
    {
      category: 'Food',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6xa44BOJ1sH4gsZE29UhLDCDpWXfmW5qj5H-AhKV7JnhzECH0AnOcNnrUOQRfQ5GXNIzJE_tmwozFWtVs1WPCdb9KiODxNZYd0UFvr_kLu7VqbXNpEGHkm1WhjM6ukTcfVo2kV8nokpOkc5Zjm0aXVx1RpFSVLV2NEyRoJDciuuLEckVZ9eC7Q46uOpqc6Sh6tnB1cQDM1qYGbElg4BtnO0oVcCrdVlhpiONKanB2czSZnv120OeFy7aFJ0u5oN29Fdvec7KE1S4w',
      height: 'h-60',
    },
    {
      category: 'Interiors',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe1tzdjuW9HU0FmTq9rCiMzgeMSXSU9m_rUXBWAbKAgNgUoSUaoLTTaeRgB-rplLoY-rONu6whgtBq1VgyK4p54GIUdJQyk-rd1P2LXju_ZFZ0CtmnijSvRFkqJVc9Vi61wq8Ljb5pwVicCGlo18Zn57nXWFVnv1AMsYbXO0LISLzdJiZ05ddHLNyJp07Q3eyzUQVpqOSjBbNg5c0Ez5st2o1ZOgWAbl_RPxdG7l7XZytnD3WniVLa4XuQx9_n99VS6fzVmIJFC9Z6',
      height: 'h-60',
    },
    {
      category: 'Celebrations',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7lgIvkOMzY9uktlLLZHBWHjea1w5yz0bTSBj36iZ2UBR_x95hKSEAn3AzT2VLw9dUwr8C1FJ0OVDWrIydajkylFXeoJIsvGMis_B_hKvXjnRhxvdnOVoZbG2RksPiSkSOwz-v2UKlf9Ba3uu9uYzrYP5_keKgrUJNulLVM_H_mA3-cyJ27gl_aaPR3m2wZhGt0h-wSeQE6f26jWTJ-81zmqdldJBc8gS2FKBu5B7w_ZlZAb61RPGwQGavqI_b4IWEJeBSU2AEilm3',
      height: 'h-80',
    },
    {
      category: 'Culinary',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbKNela1h3HKIMg6E9Ms3J6KnDv9KhYKGG_cgyiDElJ13-jPjJYvVv4Pu5xlc-TXLQtrxf5efrpF7D7-5iiIck82vnRdF4kGn0vNDx51zAXNr8KMRdzzqcToryMCKTb8WwaVC0kI8u3I1mn4oWkjLD5c3JGStCPFPwgPig_lNdXGGqrYkXTLYcZwoAg-U4-fIX1UjirQ_ZrinKbUt-2hBE2p130Iw4mEzNFPDi88A7ZpzyDG8JH5VSFimOPrx5P-Q8iRDm14sER84j',
      height: 'h-80',
    },
    {
      category: 'Skyline',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWZBYHO83QdSc-b7XzDoCSuH6tspIjoIrVgNUNeHSSV5U4TjRJE7Rls7HWDBCtiCwXs1uJ3KLqEL3Lmi-_n00FOOgIgjw1Kb4TvOLjkTaieh6Fa4dJWm7JApOZDVNk_Eb5WMl3E8UfXddJ5IkEPYkC9zEs3fV1wH2pxMXwxmbstbe0aWAGjE9R7JMqiza3uOfWJyxSCf0IkAHo2i-Jdlg9_6F9_gE1ldQYuydh1QQOOG2SFO-ulMYZ-txbA9rc-kBUxiCpDX7Si0XQ',
      height: 'h-60',
    },
  ];

  return (
    <section className="py-24 bg-[#1A1A1A] w-full">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A66A] block">
              04 / VISUAL JOURNAL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F5F5]">
              Inside Rooftop London
            </h2>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C8A66A] text-[#121212] text-xs font-semibold uppercase tracking-wider hover:bg-[#d4b577] transition-all"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6-Photo Editorial Masonry Grid from Stitch Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-6">
            <div className="group relative h-80 rounded-2xl overflow-hidden shadow-lg border border-white/5">
              <Image
                src={photos[0].src}
                alt="Evening rooftop terrace seating at Rooftop London"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#121212]/90 text-[11px] font-semibold uppercase tracking-wider text-[#C8A66A]">
                {photos[0].category}
              </span>
            </div>

            <div className="group relative h-60 rounded-2xl overflow-hidden shadow-lg border border-white/5">
              <Image
                src={photos[1].src}
                alt="Signature mocktails and culinary bites"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#121212]/90 text-[11px] font-semibold uppercase tracking-wider text-[#C8A66A]">
                {photos[1].category}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group relative h-60 rounded-2xl overflow-hidden shadow-lg border border-white/5">
              <Image
                src={photos[2].src}
                alt="London-inspired indoor cafe lounge"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#121212]/90 text-[11px] font-semibold uppercase tracking-wider text-[#C8A66A]">
                {photos[2].category}
              </span>
            </div>

            <div className="group relative h-80 rounded-2xl overflow-hidden shadow-lg border border-white/5">
              <Image
                src={photos[3].src}
                alt="Birthday and anniversary celebration table"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#121212]/90 text-[11px] font-semibold uppercase tracking-wider text-[#C8A66A]">
                {photos[3].category}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group relative h-80 rounded-2xl overflow-hidden shadow-lg border border-white/5">
              <Image
                src={photos[4].src}
                alt="Chef preparing continental dishes"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#121212]/90 text-[11px] font-semibold uppercase tracking-wider text-[#C8A66A]">
                {photos[4].category}
              </span>
            </div>

            <div className="group relative h-60 rounded-2xl overflow-hidden shadow-lg border border-white/5">
              <Image
                src={photos[5].src}
                alt="Panoramic night view of rooftop lounge deck"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#121212]/90 text-[11px] font-semibold uppercase tracking-wider text-[#C8A66A]">
                {photos[5].category}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
