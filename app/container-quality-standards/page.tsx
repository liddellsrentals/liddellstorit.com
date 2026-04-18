import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Container Quality Standards | Liddell Stor-It',
  description: 'Inspection checklist and cleaning protocols for Liddell Stor-It container quality standards.',
}

const formatMonthYear = (value: string) =>
  new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

const inspectionChecklist = [
  'Exterior panels are checked for dents, rust, and damage before each rental.',
  'Doors, locks, hinges, and seals are tested for proper operation.',
  'Flooring is inspected for structural integrity and clean loading surfaces.',
  'Container dimensions and hardware are confirmed against the expected unit type.',
  'Delivery readiness is verified before the unit leaves the yard.',
]

const cleaningProtocols = [
  'Sweep and remove loose debris after each return.',
  'Wipe interior surfaces and high-touch hardware before the next rental.',
  'Spot-clean visible dirt, residue, and moisture so the unit is ready for customer use.',
  'Repeat a final visual inspection after cleaning and before scheduling delivery.',
]

export default function ContainerQualityStandardsPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Container Quality Standards', url: '/container-quality-standards' }]} />
            <JsonLd data={buildPortableStorageProductSchema(`${siteConfig.url}/container-quality-standards`)} />
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Standards</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">Container Quality Standards</h1>
            <p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(contentFreshnessDate)}</p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Liddell Stor-It is committed to clean, well-maintained containers and a top-notch customer experience. Every unit is reviewed before delivery so customers receive a container that meets our standards for appearance, function, and cleanliness.
            </p>

            <div className="mt-10 grid gap-6">
              <article className="rounded-lg border border-border bg-card p-6">
                <h2 className="text-xl font-medium text-foreground">Inspection checklist</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground list-disc pl-5">
                  {inspectionChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-lg border border-border bg-card p-6">
                <h2 className="text-xl font-medium text-foreground">Cleaning protocols</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground list-disc pl-5">
                  {cleaningProtocols.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-lg border border-border bg-card p-6">
                <h2 className="text-xl font-medium text-foreground">What customers can expect</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We want every rental to feel dependable, clean, and easy to use. If you have questions about delivery condition or unit suitability, call {siteConfig.formattedPhone}.
                </p>
              </article>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <Link href="/guides" className="text-accent hover:text-accent/80 transition-colors">Read the guides</Link>
              <Link href={siteConfig.reserveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Reserve a container</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
