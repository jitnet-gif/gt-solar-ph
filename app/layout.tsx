import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Solar Panel Installation Philippines | GT Solar Power Cebu',
  description:
    'Cut your electricity bill by up to 80%. GT Solar installs Huawei-certified solar systems for homes and businesses in Cebu and across the Philippines. Free site assessment. Net metering handled for you.',
  keywords: [
    'solar panel installation Philippines',
    'solar panel Cebu',
    'Huawei solar panel Philippines',
    'net metering Philippines',
    'solar company Philippines',
    'solar panel price Philippines',
    'GT Solar Cebu',
  ],
  openGraph: {
    title: 'GT Solar Power — Stop Paying ₱12,000 a Month to Meralco',
    description:
      'Huawei-certified solar systems for Filipino homes and businesses. Cut your bill by 60–80%.',
    siteName: 'GT Solar Power',
    locale: 'en_PH',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-on-background font-sans antialiased selection:bg-secondary-container selection:text-on-surface">
        {children}
      </body>
    </html>
  )
}
