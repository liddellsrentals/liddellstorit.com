import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Moving Tips | Liddell Stor-It',
  description: 'Practical moving tips for planning ahead, packing efficiently, and keeping your move on track.',
}

const formatMonthYear = (value: string) =>
  new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

const sections = [
  {
    question: 'When should you start getting ready for a move?',
    answer: 'Start with a simple timeline as soon as you know your move date.',
    detail: 'That gives you time to sort rooms, gather boxes, and reserve a container before the busy part of the move begins.',
  },
  {
    question: 'What should you pack first?',
    answer: 'Begin with items you do not use every day, like seasonal gear, decor, and overflow storage.',
    detail: 'Packing those items early keeps your home functional while you work through the rest of the move.',
  },
  {
    question: 'How do you stay organized while packing?',
    answer: 'Label boxes by room and group similar items together.',
    detail: 'Clear labels make unloading easier and help you find the basics faster once you arrive at the new place.',
  },
  {
    question: 'What is the easiest way to avoid move-day stress?',
    answer: 'Load the container in stages instead of trying to do everything at once.',
    detail: 'A paced approach gives you time to stack carefully, keep breakable items protected, and adjust if your plan changes.',
  },
]

const relatedLinks = [
  { href: '/guides/moving-tips/move-day-checklist', label: 'Move-Day Checklist' },
  { href: '/guides/moving-tips/how-to-pack-fragile-items', label: 'How to Pack Fragile Items' },
  { href: '/guides/moving-tips/how-to-load-a-storage-container', label: 'How to Load a Storage Container' },
]

export default function MovingTipsPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/guides' }, { name: 'Moving Tips', url: '/guides/moving-tips' }]} />
            <JsonLd data={buildPortableStorageProductSchema(`${siteConfig.url}/guides/moving-tips`)} />
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Pillar page</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">Moving tips that make the whole process easier</h1>
            <p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(contentFreshnessDate)}</p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              A better move usually comes down to timing, packing order, and knowing what to do first. This page covers the basics so you can stay organized before, during, and after loading.
            </p>

            <div className="mt-10 space-y-4">
              {sections.map((section) => (
                <article key={section.question} className="rounded-lg border border-border bg-card p-6">
                  <h2 className="text-xl font-medium text-foreground">{section.question}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">{section.answer}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-lg bg-muted p-6 text-sm leading-relaxed text-muted-foreground">
              If you want a more specific plan, call {siteConfig.formattedPhone} and we can help you choose the right container size and timing for your move.
            </div>

            <div className="mt-8 space-y-3">
              <p className="text-sm font-medium text-foreground">Related reading</p>
              <div className="flex flex-wrap gap-4 text-sm">
                {relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-accent hover:text-accent/80 transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
