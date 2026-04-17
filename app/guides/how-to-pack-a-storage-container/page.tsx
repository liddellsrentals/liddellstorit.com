import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { siteConfig } from '@/lib/site-content'

export const metadata: Metadata = {
  title: 'How to Pack a Storage Container | Liddell Stor-It',
  description: 'Step-by-step guidance for packing a portable storage container safely and efficiently.',
}

const steps = [
  'Start with the heaviest items on the floor and toward the back of the container.',
  'Build stable rows with furniture and large boxes, then fill gaps with smaller boxes or soft items.',
  'Keep a clear aisle if you expect to access items during the rental period.',
  'Wrap fragile items in padding and avoid stacking weight on top of them.',
  'Place frequently needed items near the door so you do not have to unpack everything to reach them.',
]

export default function PackingGuidePage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Guide</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">How to pack a storage container</h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Good packing keeps items safe and makes the container easier to use. The goal is to stack securely, protect fragile belongings, and preserve access to the things you may need first.
            </p>

            <div className="mt-10 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="rounded-lg border border-border bg-card p-5">
                  <p className="text-sm font-medium text-accent">Step {index + 1}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-lg bg-muted p-6 text-sm leading-relaxed text-muted-foreground">
              If you want help choosing the right container for a move or remodel, call {siteConfig.formattedPhone} or read the container size guide.
            </div>

            <div className="mt-8 flex gap-6 text-sm">
              <Link href="/guides/choosing-the-right-container-size" className="text-accent hover:text-accent/80 transition-colors">Container size guide</Link>
              <Link href={siteConfig.reserveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Reserve now</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
