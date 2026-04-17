import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { siteConfig } from '@/lib/site-content'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Liddell Stor-It | Portable Storage Containers in Paragould, AR (Greene County)',
  description: 'Convenient portable storage containers delivered to your location in Paragould, Arkansas. Perfect for moving, renovation, or extra storage needs.',
  generator: 'v0.app',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      {
        url: '/icon-32x32.png',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.parentName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    telephone: `+1${siteConfig.phone}`,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    areaServed: siteConfig.serviceArea,
    openingHoursSpecification: siteConfig.hours.map((hour) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${hour.day}`,
      opens: hour.opens,
      closes: hour.closes,
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Portable storage container delivery and pickup',
    serviceType: 'Portable storage containers',
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.parentName,
      url: siteConfig.url,
    },
    areaServed: siteConfig.serviceArea,
    url: siteConfig.reserveUrl,
  }

  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, serviceSchema]) }}
        />
        {children}
        <GoogleAnalytics gaId="G-9TBFYF1TS8" />
      </body>
    </html>
  )
}
