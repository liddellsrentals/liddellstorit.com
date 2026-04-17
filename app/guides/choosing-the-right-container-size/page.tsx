import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Choosing the Right Container Size | Liddell Stor-It',
  description: 'Learn how to estimate the portable storage container size you need for a move, renovation, or business project.',
}

const updatedAt = '2026-04-17'

const formatMonthYear = (value: string) =>
  new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

const sections = [
  {
    heading: "8' x 16' x 8'",
    text: "This is the better fit for smaller moves, apartment loads, seasonal items, or a few rooms of packed boxes.",
  },
  {
    heading: "8' x 20' x 8'",
    text: 'Choose the larger container when you are clearing a whole home, handling a remodel, or storing bulky furniture and appliances.',
  },
  {
    heading: 'How to decide',
    text: 'If your load is mostly boxes and a few furniture pieces, the 16-foot unit is usually enough. If you want more breathing room or have several large items, go with the 20-foot unit.',
  },
]

export default function SizeGuidePage() {
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
                { name: 'Choosing the Right Container Size', url: '/guides/choosing-the-right-container-size' },
              ]}
            />
            <JsonLd data={buildPortableStorageProductSchema('https://liddellstorit.com/guides/choosing-the-right-container-size')} />
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Guide</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">Choosing the right container size</h1>
            <p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(updatedAt)}</p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We only offer two container sizes, so the choice comes down to how much you are storing and whether you need extra room to load and move around.
            </p>

            <div className="mt-10 space-y-4">
              {sections.map((section) => (
                <article key={section.heading} className="rounded-lg border border-border bg-card p-6">
                  <h2 className="text-xl font-medium text-foreground">{section.heading}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{section.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-lg bg-muted p-6 text-sm leading-relaxed text-muted-foreground">
              When in doubt, call {siteConfig.formattedPhone}. A quick conversation about what you are storing is usually enough to narrow it down.
            </div>

            <div className="mt-8 flex gap-6 text-sm">
              <Link href="/guides/how-to-pack-a-storage-container" className="text-accent hover:text-accent/80 transition-colors">Packing guide</Link>
              <Link href="/faq" className="text-accent hover:text-accent/80 transition-colors">FAQ</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
