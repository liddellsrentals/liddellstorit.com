import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Storage Container Pricing | Liddell Stor-It',
  description: 'What affects portable storage container pricing and how to compare quotes with confidence.',
}

const updatedAt = contentFreshnessDate

const formatMonthYear = (value: string) =>
  new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)

const pricingFactors = [
  {
    question: 'What affects portable storage pricing?',
    answer: 'Pricing mainly depends on container size, rental duration, delivery distance, and whether you need relocation.',
    detail: 'Those are the main variables to compare when you are looking at quotes, so ask for a breakdown instead of one lump sum number.',
  },
  {
    question: 'How does container size change the price?',
    answer: 'We currently offer 2 sizes: 8\' x 16\' x 8\' and 8\' x 20\' x 8\'.',
    detail: 'The larger container usually costs more because it gives you more space for whole-home moves, remodels, and bulky furniture.',
  },
  {
    question: 'Why does rental length matter?',
    answer: 'Containers can be rented in 1 month increments, and the total cost changes with how long you keep it.',
    detail: 'A shorter move and a longer renovation do not use storage in the same way, so the rental period is one of the easiest things to compare.',
  },
  {
    question: 'What should you ask about delivery and pickup?',
    answer: 'If the pickup or delivery distance is within 20 miles of the office, travel fees are complementary.',
    detail: 'For longer distances, ask for a separate line item so you can compare travel charges against other portable storage options.',
  },
  {
    question: 'Can the container be moved again later?',
    answer: 'Yes, we offer container relocation as a service.',
    detail: 'That is useful when your project changes or you need the container at a second location during the rental period.',
  },
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
                <article key={factor.question} className="rounded-lg border border-border bg-card p-5">
                  <h2 className="text-lg font-medium text-foreground">{factor.question}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">{factor.answer}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{factor.detail}</p>
                </article>
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
