import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, serviceAreas } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

const formatMonthYear = (value: string) =>
  new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

export const metadata: Metadata = {
  title: 'Service Areas | Liddell Stor-It',
  description: 'Where Liddell Stor-It delivers portable storage containers across the Mid-South and Northeast Arkansas.',
}

export default function ServiceAreasPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Service Areas', url: '/service-areas' }]} />
            <JsonLd data={buildPortableStorageProductSchema('https://liddellstorit.com/service-areas')} />
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Service areas</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">Portable storage delivery areas</h1>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
              We focus on local delivery and support so customers can get storage containers across the Mid-South and Northeast Arkansas without unnecessary friction.
            </p>
            <p className="mt-3 text-xs uppercase tracking-wide text-accent">Updated {formatMonthYear(contentFreshnessDate)}</p>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {serviceAreas.map((area) => (
                <Link key={area.slug} href={`/service-areas/${area.slug}/`} className="rounded-lg border border-border bg-card p-6 hover:shadow-sm transition-shadow">
                  <h2 className="text-xl font-medium text-foreground">{area.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
