import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'How to Pack a Storage Container | Liddell Stor-It',
  description: 'Step-by-step guidance for packing a portable storage container safely and efficiently.',
}

const updatedAt = contentFreshnessDate

const formatMonthYear = (value: string) =>
  new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

const steps = [
  {
    question: 'What is the best order for loading a storage container?',
    answer: 'Start with the heaviest items on the floor and against the back wall.',
    detail: 'That gives you a stable base and makes it easier to build a secure stack as you move toward the door.',
  },
  {
    question: 'How do you keep boxes and furniture from shifting?',
    answer: 'Build tight rows and fill gaps with smaller boxes, pillows, or soft goods.',
    detail: 'When everything fits snugly, the load is less likely to slide around during transport or while the container sits on-site.',
  },
  {
    question: 'Should you leave a path inside the container?',
    answer: 'Yes, keep a narrow aisle if you will need access before the rental ends.',
    detail: 'A clear walkway saves time later because you do not have to unload the entire container to reach one item.',
  },
  {
    question: 'How should you pack fragile items?',
    answer: 'Wrap them well and keep them out of the main stacking line.',
    detail: 'Fragile pieces do best on top of sturdier items or in marked boxes that will not take weight from heavier furniture.',
  },
  {
    question: 'Where should the things you use most go?',
    answer: 'Place them near the door so they are easy to grab.',
    detail: 'That way you can access daily-use items without breaking down the entire stack when you need something quickly.',
  },
]

export default function PackingGuidePage() {
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
                { name: 'How to Pack a Storage Container', url: '/guides/how-to-pack-a-storage-container' },
              ]}
            />
            <JsonLd data={buildPortableStorageProductSchema('https://liddellstorit.com/guides/how-to-pack-a-storage-container')} />
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Guide</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">How to pack a storage container</h1>
            <p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(updatedAt)}</p>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Good packing keeps items safe and makes the container easier to use. The goal is to stack securely, protect fragile belongings, and keep the things you need first easy to reach.
              </p>

            <div className="mt-10 space-y-4">
              {steps.map((step, index) => (
                <section key={step.question} className="rounded-lg border border-border bg-card p-5">
                  <p className="text-sm font-medium text-accent">Step {index + 1}</p>
                  <h2 className="mt-2 text-lg font-medium text-foreground">{step.question}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">{step.answer}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
                </section>
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
