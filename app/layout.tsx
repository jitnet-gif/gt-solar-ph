import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Solar Panel Installation Philippines | GT Solar Power Cebu',
  description:
    'Cut your electricity bill by up to 80%. GT Solar installs Huawei-certified solar systems for homes and businesses in Cebu and across the Philippines. Free site assessment. Net metering handled for you.',
  keywords: [
    'solar panel installation Philippines',
    'solar panel Cebu',
    'solar panel Talisay',
    'Huawei solar panel Philippines',
    'net metering Philippines',
    'solar company Philippines',
    'solar panel price Philippines',
    'GT Solar Cebu',
    'solar installation Visayas',
    'residential solar panel',
    'commercial solar system',
    'solar energy Philippines',
    'green energy Cebu',
    'solar power system installation',
  ],
  authors: [{ name: 'GT Solar Power Installation Services Cebu' }],
  creator: 'GT Solar Power',
  publisher: 'GT Solar Power',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'GT Solar Power — Stop Paying ₱12,000 a Month to Meralco',
    description:
      'Huawei-certified solar systems for Filipino homes and businesses. Cut your bill by 60–80%. Free consultation in Talisay, Cebu.',
    siteName: 'GT Solar Power',
    locale: 'en_PH',
    type: 'website',
    url: 'https://gt-solar-ph.vercel.app',
    images: [
      {
        url: 'https://gt-solar-ph.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GT Solar Power - Solar Panel Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GT Solar Power — Cut Your Electricity Bill by 80%',
    description: 'Huawei-certified solar systems for Filipino homes & businesses. Free assessment.',
    creator: '@gt_systems_solar_power_cebu',
    images: ['https://gt-solar-ph.vercel.app/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://gt-solar-ph.vercel.app',
    languages: {
      'en-PH': 'https://gt-solar-ph.vercel.app',
      'tl-PH': 'https://gt-solar-ph.vercel.app/tl',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'GT Solar Power Installation Services Cebu',
    image: 'https://gt-solar-ph.vercel.app/SOLAR.jpg',
    description: 'Huawei-certified solar panel installation company in Cebu, Philippines',
    url: 'https://gt-solar-ph.vercel.app',
    telephone: '+63 917 000 0000',
    email: 'gtsystemsph@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Corona Del Mar, Brgy. Pooc',
      addressLocality: 'Talisay',
      addressRegion: 'Cebu',
      postalCode: '6045',
      addressCountry: 'PH',
    },
    sameAs: [
      'https://instagram.com/gt_systems_solar_power_cebu',
      'https://www.facebook.com/GT-Solar-Power-Installation-Services-Cebu',
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 10.3163,
        longitude: 123.9344,
      },
      geoRadius: '100km',
    },
    priceRange: '₱250,000 - ₱5,000,000',
    ratingValue: '4.9',
    reviewCount: '87',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '87',
    },
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />
        <link rel="canonical" href="https://gt-solar-ph.vercel.app" />
        <link rel="alternate" hrefLang="en-PH" href="https://gt-solar-ph.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://gt-solar-ph.vercel.app" />
        <meta name="theme-color" content="#10B981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Structured Data - Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'GT Solar Power',
              logo: 'https://gt-solar-ph.vercel.app/SOLAR.jpg',
              url: 'https://gt-solar-ph.vercel.app',
              sameAs: [
                'https://instagram.com/gt_systems_solar_power_cebu',
                'https://www.facebook.com/GT-Solar-Power-Installation-Services-Cebu',
              ],
            }),
          }}
        />
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Solar Panel Installation',
              provider: {
                '@type': 'LocalBusiness',
                name: 'GT Solar Power Installation Services Cebu',
                url: 'https://gt-solar-ph.vercel.app',
              },
              areaServed: {
                '@type': 'Country',
                name: 'Philippines',
              },
              description: 'Professional Huawei-certified solar panel installation for homes and businesses',
              offers: {
                '@type': 'Offer',
                priceCurrency: 'PHP',
                price: '250000',
              },
            }),
          }}
        />
      </head>
      <body className="bg-background text-on-background font-sans antialiased selection:bg-secondary-container selection:text-on-surface">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
