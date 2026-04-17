import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { guides, serviceAreas } from '@/lib/site-content'
import { RichText } from '@/components/rich-text'

export function ResourceLinks() {
  const featuredServiceAreas = serviceAreas.slice(0, 5)

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Guides</p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground text-balance">Helpful storage advice</h2>
          <div className="mt-8 space-y-4">
            {guides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`} className="block rounded-lg border border-border bg-card p-5 hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">{guide.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed [&_a]:text-accent [&_a]:hover:text-accent/80 [&_a]:transition-colors">
                      <RichText html={guide.description} />
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-accent shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Service areas</p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground text-balance">Where we deliver</h2>
          <div className="mt-8 space-y-4">
            {featuredServiceAreas.map((area) => (
              <Link key={area.slug} href={`/service-areas/${area.slug}/`} className="block rounded-lg border border-border bg-card p-5 hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">{area.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-accent shrink-0" />
                </div>
              </Link>
            ))}
          </div>
          <Link href="/service-areas/" className="mt-8 inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors">
            View more covered service areas
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
