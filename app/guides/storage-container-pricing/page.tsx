import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Storage Container Pricing | Liddell Stor-It',
  description: 'What affects portable storage container pricing and how to compare quotes with confidence.',
}

const updatedAt = '2026-04-17'

const formatMonthYear = (value: string) =>
  new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)

const pricingFactors = [
  'Container size - We currently offer 2 sizes: 8\' x 16\' x 8\' and 8\' x 20\' x 8\'',
  'Rental duration - Containers can be rented in 1 month increments, however we can drop off, pickup, and relocate the container at any time',
  'Delivery and pickup distance - If the Pick Up or Delivery distance is within 20 miles of the office, delivery travel fees are complementary. Please contact our office for a quote if travel distance is greater.',
  'Relocation - We offer container relocation as a service.',
]

export default function PricingGuidePage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
            <Breadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: 'Guides', url: '/guides' },
                { name: 'Storage Container Pricing', url: '/guides/storage-container-pricing' },
              ]}
            />
            <JsonLd data={buildPortableStorageProductSchema('https://liddellstorit.com/guides/storage-container-pricing')} />
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Guide</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">Storage container pricing explained</h1>
            <p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(updatedAt)}</p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We strive to be competitive and transparent with our pricing. There are a variety of factors that contribute to pricing. Refer to our <Link href={siteConfig.reserveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Reservation Page</Link> for the most up-to-date pricing.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {siteConfig.containerOffers.map((offer) => (
                <article key={offer.name} className="rounded-lg border border-border bg-card p-6">
                  <h2 className="text-lg font-medium text-foreground">{offer.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{offer.description}</p>
                  <p className="mt-4 text-2xl font-medium text-foreground">{formatCurrency(offer.monthlyRent)} / month</p>
                  <p className="mt-2 text-sm text-muted-foreground">Reservation deposit: {formatCurrency(offer.reservationDeposit)}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Within 20 miles: {formatCurrency(offer.deliveryFee)} delivery, {formatCurrency(offer.pickupFee)} pickup, {formatCurrency(offer.relocationFee)} relocation</p>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-4">
              {pricingFactors.map((factor) => (
                <div key={factor} className="rounded-lg border border-border bg-card p-5 text-sm text-foreground">
                  {factor}
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-lg bg-muted p-6 text-sm leading-relaxed text-muted-foreground">
              Ask for a quote that clearly lists rental, delivery, and pickup so you can compare it against other storage options without guessing.
            </div>

            <div className="mt-8 flex gap-6 text-sm">
              <Link href={siteConfig.reserveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Request a reservation</Link>
              <Link href="/faq" className="text-accent hover:text-accent/80 transition-colors">FAQ</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
