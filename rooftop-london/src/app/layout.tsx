import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { ToastProvider } from '@/components/ui/Toast';
import { RESTAURANT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL('https://rooftoplondon.com'),
  title: 'ROOFTOP LONDON CAFE & RESTAURANT | Trisulia, Cuttack',
  description:
    'Experience premier London-inspired rooftop and multi-cuisine restaurant in Trisulia, Cuttack. Exquisite Indian, Chinese and Continental food, open sky ambience and celebrations.',
  keywords: [
    'Rooftop London Cafe',
    'Rooftop Restaurant Cuttack',
    'Trisulia Cuttack Restaurant',
    'Best Rooftop Cafe Cuttack',
    'Multi-Cuisine Restaurant Cuttack',
    'London Theme Restaurant India',
  ],
  authors: [{ name: 'ROOFTOP LONDON CAFE & RESTAURANT' }],
  openGraph: {
    title: 'ROOFTOP LONDON CAFE & RESTAURANT | Trisulia, Cuttack',
    description:
      'A Little Taste of London. A Lot of Unforgettable Moments. Premier Rooftop Dining & Multi-Cuisine in Trisulia, Cuttack.',
    url: 'https://rooftoplondon.com',
    siteName: 'ROOFTOP LONDON CAFE & RESTAURANT',
    images: [
      {
        url: '/images/hero-bg.svg',
        width: 1200,
        height: 800,
        alt: 'Rooftop London Cafe & Restaurant rooftop dining view',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: RESTAURANT_INFO.name,
    description: RESTAURANT_INFO.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'BAZAR, near Andhra Bank',
      addressLocality: 'Trisulia, Cuttack',
      addressRegion: 'Odisha',
      postalCode: '754005',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '20.4381755',
      longitude: '85.8388367',
    },
    telephone: RESTAURANT_INFO.phone,
    servesCuisine: ['Indian', 'Chinese', 'Continental'],
    url: RESTAURANT_INFO.website,
    hasMap: RESTAURANT_INFO.googleMaps,
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#151515] text-[#F7F5F0] antialiased selection:bg-[#C8A66A] selection:text-[#151515]">
        <ToastProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ToastProvider>
      </body>
    </html>
  );
}
