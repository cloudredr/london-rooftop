import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { Moon, UtensilsCrossed, PartyPopper } from 'lucide-react';

export function SignatureExperience() {
  const experiences = [
    {
      title: 'Rooftop Experience',
      tagline: 'Dine Under Open Stars',
      description:
        'Unwind above the city with cool evening breezes, soft acoustic playlists, and panoramic views of Trisulia.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0J0wFoWF930LkOiRqcPLPYec9HqvRv4_2dAAhwWX1qktxaXvUtiq6gINuq2LnEjvg3IMiaE-Ol9RkhfWEt15azS1GTGAI51FOy5XzIAbmsIwFQ8CDwiEv3Hr1Tm1iL1d_MK29d-ZGvjkX8jrkoF6sqONoChWu5urK6LqsLtGRS10ucRTe9GXb_sQPr5C85tGkvtTKaPLekdpy06Ai51OwdpUnDu_LBiR6eZ9b9AwB6aZQKwLNaoUXhUpwydgcj8m6pKwxpunlmO-1',
      icon: Moon,
      link: '/reservation',
      linkText: 'Reserve Rooftop',
    },
    {
      title: 'Multi-Cuisine Delights',
      tagline: 'Tandoor • Wok • Continental',
      description:
        'Savor smoky Indian Tandoor classics, fiery Asian Wok creations, and sizzling Continental platters crafted fresh.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoNGg5UT3N5P7AD5r8HMPN1pt06luxXJsSUs0GVGwsRE3siN0T27eWgs2UR8GjbcYIYOYc7MOIUfZmzl6kCcStFWfcbzrddHkKBAoyPLxJYhsup1Qk256sHQKXhj2O1O5i-DC5Cu0xKLrtvhOsHbFZ7z7bdbX3krAusTJCc3rkSbCnlJ7lY5bPKE7vcRkG5bcZ2JOnGNfEyM_C2t5y8dLVFQ0voggUdX4CRo81G1Hl6W0WH3yYvJYBaafDEmDtrQBWUHLqWnG5uI90',
      icon: UtensilsCrossed,
      link: '/menu',
      linkText: 'Explore Menu',
    },
    {
      title: 'Memorable Celebrations',
      tagline: 'Birthdays & Private Events',
      description:
        'Dedicated party zones, custom decor packages, and curated group menus for birthdays, anniversaries, and reunions.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt75cIskf6CiPl25aqNYpctdhErpyB5omhk-PgaKzZ2mw_tho7uQR3_P4PUxpxgKNaHSPfmfH0-yqvPr0D_3a29rAGMIUuPjbnHgE4Gel5NWCl_OX4UFlsgftrZNe5rpU2NCsb9jSIotvCPRtrdRJQKIj7OTqNa0qcd8qAeZvIpSr-fvk26iOKd87xgRkBcdCdgsSDqHuX-MOvDil5qhXSvOIQexvKiL3daw0CdjWURB8Nt98ahfPs9HfA_qbACBoynX5k-kPhVZaW',
      icon: PartyPopper,
      link: '/celebrations',
      linkText: 'Plan Celebration',
    },
  ];

  return (
    <section className="py-24 bg-[#1A1A1A] w-full">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A66A] block">
              02 / SIGNATURE EXPERIENCES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F5F5]">
              Crafted for Every Occasion
            </h2>
          </div>
          <p className="text-sm text-[#A3A3A3] max-w-md">
            From starlit rooftop dinners to vibrant private celebrations, experience hospitality that feels effortlessly elevated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.title}
                className="group relative rounded-2xl overflow-hidden bg-[#262626] border border-white/5 shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-72 overflow-hidden relative">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-7 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C8A66A]">
                      {exp.tagline}
                    </span>
                    <Icon className="w-5 h-5 text-[#C8A66A]" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-[#F5F5F5]">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-[#A3A3A3] leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={exp.link}
                      className="text-xs uppercase tracking-wider font-semibold text-[#C8A66A] hover:underline inline-flex items-center gap-1"
                    >
                      {exp.linkText} →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
