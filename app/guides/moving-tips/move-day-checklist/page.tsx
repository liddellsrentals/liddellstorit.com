import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Move-Day Checklist | Liddell Stor-It',
  description: 'A move-day checklist for the last 24 hours before moving day.',
}

const formatMonthYear = (value: string) => new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

export default function MoveDayChecklistPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/guides' }, { name: 'Moving Tips', url: '/guides/moving-tips' }, { name: 'Move-Day Checklist', url: '/guides/moving-tips/move-day-checklist' }]} />
            <JsonLd data={buildPortableStorageProductSchema(`${siteConfig.url}/guides/moving-tips/move-day-checklist`)} />
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Cluster article</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">What should be on your move-day checklist?</h1>
            <p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(contentFreshnessDate)}</p>
            <p className="mt-5 text-muted-foreground leading-relaxed">A good checklist keeps the last day simple. Focus on the items that prevent delays, missed details, and unnecessary scrambling.</p>
            <div className="mt-10 space-y-4">
              <div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">What should you confirm first?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Confirm the delivery time, access path, and any special instructions before the container arrives.</p></div>
              <div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">What should you keep close?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Set aside keys, chargers, documents, snacks, and cleaning supplies so they do not get packed by mistake.</p></div>
              <div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">How do you finish the day well?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Walk the space once more, label the final boxes clearly, and make sure the container is loaded in the order you need.</p></div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm"><Link href="/guides/moving-tips" className="text-accent hover:text-accent/80 transition-colors">Back to Moving Tips</Link><Link href={siteConfig.reserveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Reserve a container</Link></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
