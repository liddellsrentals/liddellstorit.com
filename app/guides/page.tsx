import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, guides, siteConfig } from '@/lib/site-content'
import { RichText } from '@/components/rich-text'
import { Breadcrumbs } from '@/components/breadcrumbs'

const formatMonthYear = (value: string) =>
  new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

const updatedAt = contentFreshnessDate

export const metadata: Metadata = {
  title: 'Storage Guides | Liddell Stor-It',
  description: 'Helpful guides on packing, choosing a container size, and understanding portable storage pricing.',
}

export default function GuidesPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/guides' }]} />
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Guides</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">Practical storage advice</h1>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
              Short, useful guides to help customers plan a move, estimate storage space, and understand rental pricing before they reserve.
            </p>
            <p className="mt-3 text-xs uppercase tracking-wide text-accent">Updated {formatMonthYear(updatedAt)}</p>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {guides.map((guide) => (
                <Link key={guide.slug} href={`/guides/${guide.slug}`} className="rounded-lg border border-border bg-card p-6 hover:shadow-sm transition-shadow">
                  <h2 className="text-xl font-medium text-foreground">{guide.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground [&_a]:text-accent [&_a]:hover:text-accent/80 [&_a]:transition-colors">
                    <RichText html={guide.description} />
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-wide text-accent">
                    Updated {formatMonthYear(guide.updatedAt)}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors">
                    Read guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-sm text-muted-foreground">
              Need help choosing? Call {siteConfig.formattedPhone}.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
