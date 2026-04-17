import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { faqItems, siteConfig } from '@/lib/site-content'
import { RichText } from '@/components/rich-text'
import { Breadcrumbs } from '@/components/breadcrumbs'

const stripHtml = (value: string) => value.replace(/<[^>]+>/g, '')

export const metadata: Metadata = {
  title: 'FAQ | Liddell Stor-It',
  description: 'Answers to common questions about portable storage container sizes, delivery, pricing, and rental terms in Paragould, AR.',
}

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(item.answer),
      },
    })),
  }

  return (
    <>
      <Header variant="solid" />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'FAQ', url: '/faq' }]} />
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">FAQ</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">Portable storage questions, answered</h1>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
              Common questions about container sizes, pricing, delivery, and rental terms for {siteConfig.name}.
            </p>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="mt-12 space-y-6">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-lg border border-border bg-card p-6">
                  <h2 className="text-xl font-medium text-foreground">{item.question}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground [&_a]:text-accent [&_a]:hover:text-accent/80 [&_a]:transition-colors">
                    <RichText html={item.answer} />
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/guides" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors">
                Read the guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href={siteConfig.reserveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors">
                Reserve a container
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
