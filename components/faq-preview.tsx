import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { faqItems } from '@/lib/site-content'
import { RichText } from '@/components/rich-text'

export function FaqPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground text-balance">
              Answers to the questions people ask most
            </h2>
          </div>
          <Link href="/faq" className="hidden md:inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors">
            View all FAQs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqItems.slice(0, 4).map((item) => (
            <article key={item.question} className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-medium text-foreground">{item.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground [&_a]:text-accent [&_a]:hover:text-accent/80 [&_a]:transition-colors">
                <RichText html={item.answer} />
              </p>
            </article>
          ))}
        </div>

        <Link href="/faq" className="mt-8 inline-flex md:hidden items-center text-sm text-accent hover:text-accent/80 transition-colors">
          View all FAQs
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
