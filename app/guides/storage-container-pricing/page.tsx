import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { siteConfig } from '@/lib/site-content'

export const metadata: Metadata = {
  title: 'Storage Container Pricing | Liddell Stor-It',
  description: 'What affects portable storage container pricing and how to compare quotes with confidence.',
}

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
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Guide</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">Storage container pricing explained</h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We strive to be competitive and transparent with our pricing. There are a variety of factors that contribute to pricing. Refer to our <Link href={siteConfig.reserveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Reservation Page</Link> for the most up-to-date pricing.
            </p>

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
