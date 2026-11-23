import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui';
import { RESTAURANT_INFO } from '@/lib/constants';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function FeaturedDishes() {
  const dishes = [
    {
      id: 'd1',
      name: 'Tandoori Paneer Tikka',
      price: 290,
      foodType: 'veg',
      tag: 'Bestseller',
      description: 'Cottage cheese cubes marinated in hung curd, Kashmiri chilli, and aromatic spices, roasted in a clay tandoor.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0TkhivKXNgNI3RytNWNB628bj43GxD7F0yk_-7R_wGqWMDV7ovkNF-gjrGVnHmiooBSCshCtQ9qkVhdJsnjCE3VJtdRjL-1mMEry8fSd6h1YMX_Ut7q_viATQgBpvem1Gys62z11co7EeqoBSvql81Je8s01IC-MqDabq8o4PBY4kJT_lvbN2P7zegmBAAMFCCiH_i0Z2va3GIdDzEeFM2cEo7GVsge7GR8DKGgfPqf036ZI51lO27LwKUvrKyHar25Z3d-4x50Is',
    },
    {
      id: 'd2',
      name: 'Chicken Malai Tikka',
      price: 360,
      foodType: 'nonveg',
      tag: 'Chef Special',
      description: 'Succulent boneless chicken morsels steeped in rich cream, cashew paste, and mild cardamom, char-grilled to perfection.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCntdsf2xY6MNi6fIbdyn1kAmX6fyvF_L4BoRut31-urz6EQdlnwJ6ZMNDGR0k8SPCBlYu-b5zYrH3V40m0zjArhmGbBGk9RBaENegt9XJrYlDunmN4uA-hDyBu9a1Gqtz85if8vSRJfOJHtYCvqHJnSQDZHijqabRm1evsMRJNNmafnaqGXH4AM7Iu_1fzsac2TDsdYYaNl-zzRgo5_E8oaFb6Ap7cNaVUol9JMICOoTYZfT9yXmZ7kW3znMVHJsdNIK0LUfyvkYeu',
    },
    {
      id: 'd3',
      name: 'Dal Makhani Awadhi',
      price: 260,
      foodType: 'veg',
      tag: 'Signature',
      description: 'Whole black lentils simmered overnight with tomato puree, white butter, and cream for a velvety signature finish.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkFKhFbs2Tu3lv-g2vIhkWF_xn2pSUiF163A8mfJ94OsTQ5Pgm1ahaSheYrrkDYFSvMod3ZdY24dfunkU6MyS6kqlUMeawEmi7WMd44huC00wg5RYkYFiv9I7Uf3Dee29Da-Mu5Gd-g_A2i94e_QBZv20VADsTifRlRps6a06oAoyuDDujQP-4ZsDeAatZoQBekPQeCh66R0LkfopAnAO4ywYP_HCGGjXxp1svmtl6vjahAHO8Tmuq3CxpVgKIKePeUMxm-L4dnkXx',
    },
    {
      id: 'd4',
      name: 'Chilli Chicken Dry',
      price: 340,
      foodType: 'nonveg',
      tag: 'Spicy',
      description: 'Crispy chicken tossed over high flame with bell peppers, crushed garlic, green chillies, and house-blend Oriental sauces.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_ZlnfCSkEvzLOCykNxBX7nHAPc05Pa-nUWQNnUMfFTaJvK95eTvKUITqYIwTOnTHHg_OgF8lcsdrIBtfuytQBi_YteULX_KOgjomLZ73wRuWWVZaj7gDoqrJD4vKwrnLHtAJvBGLDrCniW4YilRaXvbmvX6_L26pNYjS7HJ3T0cFWzMb3eMkTQ9ZyRZbFCv8PYv0b7kbhFaBGLyW93mwKZ_Hhdmf_PtjIpLUsdXngFj-hJjXdoT9K9ni5mU5yXNthDqVwh3OD4bzr',
    },
    {
      id: 'd5',
      name: 'Continental Sizzler',
      price: 450,
      foodType: 'both',
      tag: 'Sizzling',
      description: 'Served piping hot on cast iron with herb-marinated protein, buttered greens, crispy fries, and rich peppercorn jus.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnfnKcKuTBTQeuTlCkWuwb9-rX6VouDcVHShkXeXyya4NqlyLbzO9Eg3THAtlBEYtz7DLUCM14yy_aN4ry9lShRXbTasa-2RLjjiX2NX6gtuLQhCRkzE32gzk41oacJf8mcUPcEn6bET6pr-UHuSqrcl6wyuspU64BmWvdMMF5NkEecieQYU4aqvuZzQ770duSceyr7tmeNDjumlVmHgw4bhN20jLRs_Q6i-bJJpx9A_NT91n1RUsUvFZ46IOq7QZd0LmOb7mx6S8T',
    },
    {
      id: 'd6',
      name: 'Dum Handi Biryani',
      price: 380,
      foodType: 'nonveg',
      tag: 'Top Pick',
      description: 'Long-grain basmati rice layered with spiced tender chicken, saffron, and fried onions, slow-cooked on dum in sealed handi.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYTDQs4GTb09EpesyUmuWW-H3brQmuVttWih17mwMvGBThND9vCliFcCIphtIaBjCKw5xfvVC7Ij0wOkU7ngYSsxFa8KJqNS0Ly_vIKrdalCD6T8q7VwpG1_87hFwerxtRKvkq-ClGcogV5tv-Hek2D5L3Rohizp2aDpy9I3Og2qj1TwWmsfnDagPIt2ndSVQAoAayKDwRsOBOua3_Ouav98gKUcINL-ZjhQTUOE-Yq3FKKHNyw5z5Wzgk0_29tG9HoFvqR9Ba5fP0',
    },
  ];

  return (
    <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12 w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A66A] block">
            03 / CULINARY HIGHLIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#F5F5F5]">
            Chef’s Signature Selections
          </h2>
        </div>

        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A66A] hover:text-[#F5F5F5] transition-colors"
        >
          <span>View Full Menu</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Dishes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes.map((dish) => {
          const whatsappOrderUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(
            `Hi Rooftop London, I would like to enquire about ${dish.name} (₹${dish.price})`
          )}`;

          return (
            <div
              key={dish.id}
              className="group rounded-2xl overflow-hidden bg-[#1A1A1A] shadow-lg hover:shadow-2xl transition-all flex flex-col border border-white/5"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#121212]/90 backdrop-blur-md text-xs font-semibold text-[#C8A66A]">
                  ₹{dish.price}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {dish.foodType === 'veg' && (
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" title="Vegetarian" />
                    )}
                    {dish.foodType === 'nonveg' && (
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" title="Non-Vegetarian" />
                    )}
                    {dish.foodType === 'both' && (
                      <div className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                      </div>
                    )}
                    <h3 className="text-xl font-heading font-bold text-[#F5F5F5]">
                      {dish.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[#A3A3A3] leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <a
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#262626] text-[#F5F5F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#C8A66A] hover:text-[#121212] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
