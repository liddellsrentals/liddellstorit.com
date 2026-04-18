import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Home Organization | Liddell Stor-It',
  description: 'Home organization ideas for decluttering rooms, storing seasonal items, and creating more usable space.',
}

const formatMonthYear = (value: string) =>
  new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

const sections = [
  {
    question: 'What is the easiest way to start organizing a room?',
    answer: 'Start by sorting everything into keep, donate, and store piles.',
    detail: 'That simple split helps you make faster decisions and keeps the room from turning into a bigger project than it needs to be.',
  },
  {
    question: 'How do you handle seasonal items?',
    answer: 'Move seasonal items into storage so they are out of the way but still easy to access later.',
    detail: 'Keeping holiday decor, patio gear, and similar items together makes it much easier to swap them back in when the season changes.',
  },
  {
    question: 'What should you do with bulky furniture you are not using?',
    answer: 'Store it off-site or on-site in a way that frees up space for the room you are trying to use now.',
    detail: 'Removing oversized pieces can make a room feel calmer immediately and can help you see how much storage you really need.',
  },
  {
    question: 'How does portable storage help with home organization?',
    answer: 'It gives you a temporary place for items you are keeping but do not want in the way.',
    detail: 'That makes it easier to declutter without rushing decisions or filling closets with overflow.',
  },
]

const relatedLinks = [
  { href: '/guides/home-organization/decluttering-by-room', label: 'Decluttering by Room' },
  { href: '/guides/home-organization/garage-organization', label: 'Garage Organization' },
  { href: '/guides/home-organization/seasonal-storage', label: 'Seasonal Storage' },
]

export default function HomeOrganizationPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/guides' }, { name: 'Home Organization', url: '/guides/home-organization' }]} />
            <JsonLd data={buildPortableStorageProductSchema(`${siteConfig.url}/guides/home-organization`)} />
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Pillar page</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">Home organization ideas that create real breathing room</h1>
            <p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(contentFreshnessDate)}</p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Home organization gets easier when you stop trying to fix everything at once. Use storage to create space first, then decide what belongs back in each room.
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
              If your goal is to clear out a garage, guest room, or spare bedroom, we can help you choose a container that keeps the items you are saving close at hand.
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
