import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Renovation Planning | Liddell Stor-It',
  description: 'Renovation planning advice for protecting furniture, staging rooms, and keeping remodels on schedule.',
}

const formatMonthYear = (value: string) =>
  new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

const sections = [
  {
    question: 'When should you reserve storage for a renovation?',
    answer: 'Reserve it before demo starts so you are not moving furniture while the project is already underway.',
    detail: 'That gives you a cleaner handoff to contractors and keeps the rest of the house from becoming a catch-all staging area.',
  },
  {
    question: 'How do you protect furniture during a remodel?',
    answer: 'Move it out of the work zone and pack it so it stays clean and easy to retrieve later.',
    detail: 'A container gives you a controlled place to store sofas, tables, and other pieces that would otherwise get dusty or damaged.',
  },
  {
    question: 'What is the best way to stage a room for contractors?',
    answer: 'Clear the room down to the essentials and keep a path open for materials and tools.',
    detail: 'That makes it easier for the crew to work and helps the project stay on schedule because they are not moving around extra belongings.',
  },
  {
    question: 'How can portable storage help a remodel feel less chaotic?',
    answer: 'It separates what you are using now from what needs to stay safe until the work is finished.',
    detail: 'That separation makes it easier to plan each phase of the project and avoid the pileup that happens when everything stays in the house.',
  },
]

const relatedLinks = [
  { href: '/guides/renovation-planning/pre-renovation-timeline', label: 'Pre-Renovation Timeline' },
  { href: '/guides/renovation-planning/how-to-protect-furniture-during-remodel', label: 'How to Protect Furniture During a Remodel' },
  { href: '/guides/renovation-planning/contractor-staging-plan', label: 'Contractor Staging Plan' },
]

export default function RenovationPlanningPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/guides' }, { name: 'Renovation Planning', url: '/guides/renovation-planning' }]} />
            <JsonLd data={buildPortableStorageProductSchema(`${siteConfig.url}/guides/renovation-planning`)} />
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Pillar page</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">Renovation planning for a smoother remodel</h1>
            <p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(contentFreshnessDate)}</p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Renovation projects move more easily when storage is part of the plan from the beginning. Clearing rooms early gives contractors space to work and protects the pieces you want to keep.
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
              If your renovation affects several rooms at once, we can help you choose a container that fits the schedule instead of making the schedule fit the storage.
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
